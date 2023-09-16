import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Avatar, CardHeader, Paper } from "@material-ui/core";

import TicketsListCustom from "../TicketsListCustom";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Inbox, ReportProblem } from "@material-ui/icons";
import useUser from "../../hooks/useUser";
import Container from "@material-ui/core/Container";
import UserStatusIcon from "../UserModal/statusIcon";
import { socketConnection } from "../../services/socket";
import { toast } from "react-toastify";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "space-between",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
  cardHeader: {
    width: "380px",
    height: "78px"
  },
  card: {
    height: "330px",
    width: "380px",
    margin: "3px",
    borderRadius: "5px",
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
  fixedHeightPaper: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    height: 100,
    borderRadius: "10px",
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
  ticketsList: {
    flex: 1,
    overflowY: "scroll",
    ...theme.scrollbarStyles,
    width: 120,
    borderRadius: "10px",
  },
  ticketsListWrapper: {
    height: "380px",
    width: "380px",
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
  changeWarap: {
    width: 'auto',
    padding: 0,
    margin: 0
  },
  pending: {
    color: yellow[600],
    fontSize: '20px'
},
}));

const DashboardManage = () => {

  const classes = useStyles();

  const [tab, setTab] = useState("open");
  const [tabOpen, setTabOpen] = useState("open");
  const [showAllTickets, setShowAllTickets] = useState(false);
  const history = useHistory();
  const [contact, setContact] = useState();
  const [ticket, setTicket ] = useState();
  const { user } = useContext(AuthContext);
  const { users } = useUser();


  useEffect(() => {
    const companyId = user.companyId;
    const socket = socketConnection({ companyId, userId: user.id });

    // socket.on("connect", () => socket.emit("joinChatBox", `${ticket?.id}`));

    socket.on(`company-${companyId}-ticket`, (data) => {
      if (data.action === "update") {
        setTicket(data.ticket);
      }

      if (data.action === "delete") {
        toast.success("Ticket deleted sucessfully.");
        history.push("/tickets");
      }
    });

   

    return () => {
      socket.disconnect();
    };
  }, [ticket]);

  // Aqui listamos a fila sem Fila
  let queueSemFila = user.queues.filter(item => item.id == 0)[0];
  if (!queueSemFila) {
    user.queues = [
      {
        color: "#7C7C7C",
        id: 0,
        name: "Sem fila",
      }, ...user.queues
    ];
  }

  const [openCount, setOpenCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const userQueueIds = user.queues.map((q) => q.id);
  const [selectedQueueIds, setSelectedQueueIds] = useState(userQueueIds || []);

  useEffect(() => {
    if (user.profile.toUpperCase() === "ADMIN") {
      setShowAllTickets(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users.tickets]);

  const applyPanelStyle = (status) => {
    if (tabOpen !== status) {
      return { width: 0, height: 0 };
    }
  };

  let Moments = [];

  if (users.length > 0 ) {

    users.forEach(element => {
      Moments.push
      (
        <>
          {element?.tickets.length > 0 && ( 
            <Container className={classes.changeWarap} key={element.id}>
              <Paper className={classes.CardHeader}>
                <CardHeader
                  avatar={<Avatar />}
                  title={(
                    <span>{element.name}
                      <UserStatusIcon user={element} />
                      <div>
                        Atendimentos: {openCount}
                      </div>
                    </span>
                  )}
                />
              </Paper>
              <Paper className={classes.card}>
                <div>
                  <TicketsListCustom
                    status="open"
                    userFilter={element.id}
                    showAll={false}
                    updateCount={(val) => setOpenCount(val)}
                    selectedQueueIds={selectedQueueIds}
                  />                
                </div>
              </Paper>
            </Container>
          )}
        </>
      )      
    })
  }
  
  return (
    <>
      <React.Fragment>
        {Moments}
      </React.Fragment>
    
      <Container className={classes.changeWarap} >        
        <Paper className={classes.cardHeader}>
          <CardHeader
            avatar={<Avatar />}
            title={(
              <span>{"Pendentes"}
                <ReportProblem className={classes.pending} />
                <div>
                  Atendimentos: {pendingCount}
                </div>
              </span>
            )}
          />
        </Paper>
        <Paper className={classes.card}>
          <div>
            <TicketsListCustom
              status="pending"
              showAll={false}
              selectedQueueIds={selectedQueueIds}
              updateCount={(val) => setPendingCount(val)}
              style={applyPanelStyle("open")}
              icon={<Inbox />}              
            />                
          </div>
        </Paper>
      </Container>
  </>
  );
};

export default DashboardManage;
