import React, { useState, useEffect, useContext, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import clsx from "clsx";

import { Button, IconButton, Paper, Tooltip, makeStyles } from "@material-ui/core";

import ContactDrawer from "../ContactDrawer";
import MessageInput from "../MessageInput/";
import TicketHeader from "../TicketHeader";
import TicketInfo from "../TicketInfo";
import TicketActionButtons from "../TicketActionButtonsCustom";
import MessagesList from "../MessagesList";
import api from "../../services/api";
import { ReplyMessageProvider } from "../../context/ReplyingMessage/ReplyingMessageContext";
import toastError from "../../errors/toastError";
import { AuthContext } from "../../context/Auth/AuthContext";
import { TagsContainer } from "../TagsContainer";
import { socketConnection } from "../../services/socket";
import { isNil } from 'lodash';
import { Lock, LockOpen } from "@material-ui/icons";
import { i18n } from "../../translate/i18n";

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },

  mainWrapper: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: "0",
    marginRight: -drawerWidth,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  mainWrapperShift: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const Ticket = ({selectedQueuesMessage}) => {
  const { ticketId } = useParams();
  const history = useHistory();
  const classes = useStyles();

  const { user } = useContext(AuthContext);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState({});
  const [ticket, setTicket] = useState({});

  const [showSelectMessageCheckbox, setShowSelectMessageCheckbox] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [forwardMessageModalOpen, setForwardMessageModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      const fetchTicket = async () => {
        try {
          if (!isNil(ticketId) && ticketId !== "undefined") {
            const { data } = await api.get("/tickets/u/" + ticketId);

            const { queueId } = data;
            const { queues, profile, allowGroup } = user;

            const queueAllowed = queues.find((q) => q.id === queueId);
            if (queueAllowed === undefined && profile !== "admin" && !allowGroup) {
              toast.error("Acesso não permitido");
              history.push("/tickets");
              return;
            }
            setContact(data.contact);
            setTicket(data);
            setLoading(false);
          }
        } catch (err) {
          history.push("/tickets");   // correção para evitar tela branca uuid não encontrado Feito por Altemir 16/08/2023
          setLoading(false);
          toastError(err);
        }
      };
      fetchTicket();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [ticketId]);

  useEffect(() => {
    const companyId = user.companyId;
    const socket = socketConnection({ companyId, userId: user.id });

    socket.on("connect", () => socket.emit("joinChatBox", `${ticket.id}`));

    socket.on(`company-${companyId}-ticket`, (data) => {
      if (data.action === "update") {
        setTicket(data.ticket);
      }

      if (data.action === "delete") {
        toast.success("Ticket deleted sucessfully.");
        history.push("/tickets");
      }
    });

    socket.on(`company-${companyId}-contact`, (data) => {
      if (data.action === "update") {
        setContact((prevState) => {
          if (prevState.id === data.contact?.id) {
            return { ...prevState, ...data.contact };
          }
          return prevState;
        });
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [ticketId, ticket, history]);

  const handleDrawerOpen = useCallback(() => {
    setDrawerOpen(true);
  },[setDrawerOpen]);

  const handleDrawerClose = useCallback(() => {
    setDrawerOpen(false);
  },[setDrawerOpen]);

  const renderTicketInfo = () => {
    if (ticket.user !== undefined) {
      return (
        <TicketInfo
          contact={contact}
          ticket={ticket}
          onClick={handleDrawerOpen}
        />
      );
    }
  };

  const renderMessagesList = () => {
    return (
      <>
      {/*VER AQUI PARA FAZER O DRAG GERAL*/}
        <MessagesList
          ticket={ticket}
          ticketId={ticket.id}
          isGroup={ticket.isGroup}
          showSelectMessageCheckbox={showSelectMessageCheckbox}
          setShowSelectMessageCheckbox={setShowSelectMessageCheckbox}
          setSelectedMessagesList={setSelectedMessages}
          selectedMessagesList={selectedMessages}
          forwardMessageModalOpen={forwardMessageModalOpen}
          setForwardMessageModalOpen={setForwardMessageModalOpen}
          selectedQueues={selectedQueuesMessage}
        ></MessagesList>
        <MessageInput ticketId={ticket.id} ticketStatus={ticket.status} />
      </>
    );
  };

  return (
    <div className={classes.root} id="drawer-container">
      <Paper
        variant="outlined"
        elevation={0}
        className={clsx(classes.mainWrapper, {
          [classes.mainWrapperShift]: drawerOpen,
        })}
      >
        <TicketHeader loading={loading}>             
          {renderTicketInfo()}
          <TicketActionButtons 
            ticket={ticket} 
            showSelectMessageCheckbox={showSelectMessageCheckbox} 
            selectedMessages={selectedMessages} 
            forwardMessageModalOpen={forwardMessageModalOpen}
            setForwardMessageModalOpen={setForwardMessageModalOpen}/>
        </TicketHeader>
        <Paper>
          <TagsContainer contact={contact} />
        </Paper>
        <ReplyMessageProvider>{renderMessagesList()}</ReplyMessageProvider>
      </Paper>
      <ContactDrawer
        open={drawerOpen}
        handleDrawerClose={handleDrawerClose}
        contact={contact}
        loading={loading}
        ticket={ticket}
      />
    </div>
  );
};

export default Ticket;
