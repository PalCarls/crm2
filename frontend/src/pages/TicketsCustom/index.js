import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import TicketsManager from "../../components/TicketsManagerTabs/";
import Ticket from "../../components/Ticket/";
import { AuthContext } from "../../context/Auth/AuthContext";
import { socketConnection } from "../../services/socket";
import { QueueSelectedProvider } from "../../context/QueuesSelected/QueuesSelectedContext";

import { i18n } from "../../translate/i18n";
import { Hidden } from "@material-ui/core";
import { TicketsContext } from "../../context/Tickets/TicketsContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
	const { currentTicket, setCurrentTicket } = useContext(TicketsContext)
	const history = useHistory();

	useEffect(() => {
		if (ticketId && currentTicket.uuid === undefined) {
			history.push("/tickets");   // correção para evitar tela branca uuid não encontrado Feito por Altemir 16/08/2023

		}

	}, [])
	return (
		<QueueSelectedProvider>
			<div className={classes.chatContainer}>
				<div className={classes.chatPapper}>
					<Grid container spacing={0}>
						<Grid item xs={12} md={3} className={classes.contactsWrapper}>
							<TicketsManager />
						</Grid>
						<Grid item xs={12} md={9} className={classes.messagesWrapper}>
							{ticketId && (ticketId === currentTicket.uuid) ? (
								<>
									<Ticket
									/>
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
		</QueueSelectedProvider>
	);
};

export default TicketsCustom;
