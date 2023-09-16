import React, { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import TicketsManager from "../../components/TicketsManagerTabs/";
import Ticket from "../../components/Ticket/";

import { i18n } from "../../translate/i18n";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	chatContainer: {
		flex: 1,
		// backgroundColor: "#eee",
		// padding: theme.spacing(4),
		padding: "2px",
		height: `calc(100% - 48px)`,
		overflowY: "hidden",
	},

	chatPapper: {
		// backgroundColor: "red",
		display: "flex",
		height: "100%",
	},

	contactsWrapper: {
		display: "flex",
		height: "100%",
		flexDirection: "column",
		overflowY: "hidden",
	},
	messagesWrapper: {
		display: "flex",
		height: "100%",
		flexDirection: "column",
	},
	welcomeMsg: {
		// backgroundColor: "#eee",
		background: theme.palette.tabHeaderBackground,
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "100%",
		textAlign: "center",
	},
}));

const TicketsCustom = () => {
	const classes = useStyles();
	const { ticketId } = useParams();
	const [selectedQueuesMessage, setSelectedQueuesMessage] = useState([]);
	// Usando useCallback para memoizar setSelectedQueuesMessage
	const memoizedSetSelectedQueuesMessage = useCallback((newSelectedQueuesMessage) => {
		setSelectedQueuesMessage(newSelectedQueuesMessage);
	}, []);
	const memoizedTicketsManager = useMemo(() => {
		return (
		  <TicketsManager
			setSelectedQueuesMessage={memoizedSetSelectedQueuesMessage}
			selectedQueuesMessage={selectedQueuesMessage}
		  />
		);
	  }, [selectedQueuesMessage]);
	
	  const memoizedTicket = useMemo(() => {
		return (
		  <Ticket selectedQueuesMessage={selectedQueuesMessage} />
		);
	  }, [selectedQueuesMessage]);
	return (
		<div className={classes.chatContainer}>
			<div className={classes.chatPapper}>
				<Grid container spacing={0}>
					<Grid item xs={12} md={4} className={classes.contactsWrapper}>
						{memoizedTicketsManager}
						{/* <TicketsManager
							setSelectedQueuesMessage={setSelectedQueuesMessage}
							selectedQueuesMessage={selectedQueuesMessage}
						/> */}
					</Grid>
					<Grid item xs={12} md={8} className={classes.messagesWrapper}>
						{ticketId ? (
							<>
							{memoizedTicket}
								{/* <Ticket selectedQueuesMessage={selectedQueuesMessage} /> */}
							</>
						) : (
							<Hidden only={["sm", "xs"]}>
								<Paper square variant="outlined" className={classes.welcomeMsg}>
									<span>{i18n.t("chat.noTicketMessage")}</span>
								</Paper>
							</Hidden>
						)}
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default TicketsCustom;
