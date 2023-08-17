import React, { useEffect, useState, useContext } from "react";

import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

import useSettings from "../../hooks/useSettings";

import { makeStyles } from "@material-ui/core/styles";
import { grey, blue } from "@material-ui/core/colors";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Tab, Tabs, TextField } from "@material-ui/core";
import { i18n } from "../../translate/i18n";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fixedHeightPaper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: 240,
  },
  cardAvatar: {
    fontSize: "55px",
    color: grey[500],
    backgroundColor: "#ffffff",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  cardTitle: {
    fontSize: "18px",
    color: blue[700],
  },
  cardSubtitle: {
    color: grey[600],
    fontSize: "14px",
  },
  alignRight: {
    textAlign: "right",
  },
  fullWidth: {
    width: "100%",
  },
  selectContainer: {
    width: "100%",
    textAlign: "left",
  },
  tab: {
    backgroundColor: theme.mode === 'light' ? "#f2f2f2" : "#7f7f7f",
    borderRadius: 4,
    width: "100%",
    "& .MuiTabs-flexContainer": {
      justifyContent: "center"
    }
  },
}));

export default function Options(props) {
  const { settings, scheduleTypeChanged } = props;
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [userRating, setUserRating] = useState("disabled");
  const [scheduleType, setScheduleType] = useState("disabled");
  const [chatBotType, setChatBotType] = useState("text");

  const [loadingUserRating, setLoadingUserRating] = useState(false);
  const [loadingScheduleType, setLoadingScheduleType] = useState(false);

  const [UserCreation, setUserCreation] = useState("disabled");
  const [loadingUserCreation, setLoadingUserCreation] = useState(false);

  // recursos a mais
  const [uniqueTicket, setuniqueTicket] = useState("enabled");
  const [loadinguniqueTicket, setLoadinguniqueTicket] = useState(false);

  const [SendGreetingAccepted, setSendGreetingAccepted] = useState("enabled");
  const [loadingSendGreetingAccepted, setLoadingSendGreetingAccepted] = useState(false);

  const [UserRandom, setUserRandom] = useState("enabled");
  const [loadingUserRandom, setLoadingUserRandom] = useState(false);

  const [SettingsTransfTicket, setSettingsTransfTicket] = useState("enabled");
  const [loadingSettingsTransfTicket, setLoadingSettingsTransfTicket] = useState(false);

  const [AcceptCallWhatsapp, setAcceptCallWhatsapp] = useState("enabled");
  const [loadingAcceptCallWhatsapp, setLoadingAcceptCallWhatsapp] = useState(false);

  const [HoursCloseTicketsAuto, setHoursCloseTicketsAuto] = useState("enabled");
  const [loadingHoursCloseTicketsAuto, setLoadingHoursCloseTicketsAuto] = useState(false);

  const [sendSignMessage, setSendSignMessage] = useState("enabled");
  const [loadingSendSignMessage, setLoadingSendSignMessage] = useState(false);

  const [sendGreetingMessageOneQueues, setSendGreetingMessageOneQueues] = useState("enabled");
  const [loadingSendGreetingMessageOneQueues, setLoadingSendGreetingMessageOneQueues] = useState(false);

  const [sendQueuePosition, setSendQueuePosition] = useState("enabled");
  const [loadingSendQueuePosition, setLoadingSendQueuePosition] = useState(false);

  const [sendFarewellWaitingTicket, setSendFarewellWaitingTicket] = useState("enabled");
  const [loadingSendFarewellWaitingTicket, setLoadingSendFarewellWaitingTicket] = useState(false);

  const [acceptAudioMessageContact, setAcceptAudioMessageContact] = useState("enabled");
  const [loadingAcceptAudioMessageContact, setLoadingAcceptAudioMessageContact] = useState(false);

  //LGPD
  const [enableLGPD, setEnableLGPD] = useState("");
  const [loadingEnableLGPD, setLoadingEnableLGPD] = useState(false);

  const [lgpdMessage, setLGPDMessage] = useState("");
  const [loadinglgpdMessage, setLoadingLGPDMessage] = useState(false);

  const [lgpdLink, setLGPDLink] = useState("");
  const [loadingLGPDLink, setLoadingLGPDLink] = useState(false);

  const [lgpdDeleteMessage, setLGPDDeleteMessage] = useState("");
  const [loadingLGPDDeleteMessage, setLoadingLGPDDeleteMessage] = useState(false);

  const [lgpdConsent, setLGPDConsent] = useState("");
  const [loadingLGPDConsent, setLoadingLGPDConsent] = useState(false);

  const [lgpdHideNumber, setLGPDHideNumber] = useState("");
  const [loadingLGPDHideNumber, setLoadingLGPDHideNumber] = useState(false);

  const { update } = useSettings();

  const isSuper = () => {
    return user.super;
  };

  useEffect(() => {
    if (Array.isArray(settings) && settings.length) {

      const userCreation = settings.find((s) => s.key === "userCreation");
      if (userCreation) {
        setUserRating(userCreation.value);
      }

      const userRating = settings.find((s) => s.key === "userRating");
      if (userRating) {
        setUserRating(userRating.value);
      }

      const scheduleType = settings.find((s) => s.key === "scheduleType");
      if (scheduleType) {
        setScheduleType(scheduleType.value);
      }

      const chatBotType = settings.find((s) => s.key === "chatBotType");
      if (chatBotType) {
        setChatBotType(chatBotType.value);
      }

      const uniqueTicket = settings.find((s) => s.key === "uniqueTicket");
      if (uniqueTicket) {
        setuniqueTicket(uniqueTicket.value);
      }

      const SendGreetingAccepted = settings.find((s) => s.key === "sendGreetingAccepted");
      if (SendGreetingAccepted) {
        setSendGreetingAccepted(SendGreetingAccepted.value);
      }

      const UserRandom = settings.find((s) => s.key === "userRandom");
      if (UserRandom) {
        setUserRandom(UserRandom.value);
      }

      const SettingsTransfTicket = settings.find((s) => s.key === "sendMsgTransfTicket");
      if (SettingsTransfTicket) {
        setSettingsTransfTicket(SettingsTransfTicket.value);
      }

      const AcceptCallWhatsapp = settings.find((s) => s.key === "acceptCallWhatsapp");
      if (AcceptCallWhatsapp) {
        setAcceptCallWhatsapp(AcceptCallWhatsapp.value);
      }

      const HoursCloseTicketsAuto = settings.find((s) => s.key === "hoursCloseTicketsAuto");
      if (HoursCloseTicketsAuto) {
        setHoursCloseTicketsAuto(HoursCloseTicketsAuto.value);
      }

      const sendSignMessage = settings.find((s) => s.key === "sendSignMessage");
      if (sendSignMessage) {
        setSendSignMessage(sendSignMessage.value)
      }

      const sendGreetingMessageOneQueues = settings.find((s) => s.key === "sendGreetingMessageOneQueues");
      if (sendGreetingMessageOneQueues) {
        setSendGreetingMessageOneQueues(sendGreetingMessageOneQueues.value)
      }

      const sendQueuePosition = settings.find((s) => s.key === "sendQueuePosition");
      if (sendQueuePosition) {
        setSendQueuePosition(sendQueuePosition.value)
      }

      const sendFarewellWaitingTicket = settings.find((s) => s.key === "sendFarewellWaitingTicket");
      if (sendFarewellWaitingTicket) {
        setSendFarewellWaitingTicket(sendFarewellWaitingTicket.value)
      }

      const acceptAudioMessageContact = settings.find((s) => s.key === "acceptAudioMessageContact");
      if (acceptAudioMessageContact) {
        setAcceptAudioMessageContact(acceptAudioMessageContact.value)
      }

      const enableLGPD = settings.find((s) => s.key === "enableLGPD");
      if (enableLGPD) {
        setEnableLGPD(enableLGPD.value)
      }

      const lgpdMessage = settings.find((s) => s.key === "lgpdMessage");
      if (lgpdMessage) {
        setLGPDMessage(lgpdMessage.value)
      }

      const lgpdLink = settings.find((s) => s.key === "lgpdLink");
      if (lgpdLink) {
        setLGPDLink(lgpdLink.value)
      }

      const lgpdDeleteMessage = settings.find((s) => s.key === "lgpdDeleteMessage");
      if (lgpdDeleteMessage) {
        setLGPDDeleteMessage(lgpdDeleteMessage.value)
      }

      const lgpdConsent = settings.find((s) => s.key === "lgpdConsent");
      if (lgpdConsent) {
        setLGPDConsent(lgpdConsent.value)
      }

      const lgpdHideNumber = settings.find((s) => s.key === "lgpdHideNumber");
      if (lgpdHideNumber) {
        setLGPDHideNumber(lgpdHideNumber.value)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  async function handleChangeUserCreation(value) {
    setUserCreation(value);
    setLoadingUserCreation(true);
    await update({
      key: "userCreation",
      value,
    });
    setLoadingUserCreation(false);
  }

  async function handleChangeUserRating(value) {
    setUserRating(value);
    setLoadingUserRating(true);
    await update({
      key: "userRating",
      value,
    });
    setLoadingUserRating(false);
  }

  async function handleScheduleType(value) {
    setScheduleType(value);
    setLoadingScheduleType(true);
    await update({
      key: "scheduleType",
      value,
    });
    setLoadingScheduleType(false);
    if (typeof scheduleTypeChanged === "function") {
      scheduleTypeChanged(value);
    }
  }

  async function handleChatBotType(value) {
    setChatBotType(value);
    await update({
      key: "chatBotType",
      value,
    });
    if (typeof scheduleTypeChanged === "function") {
      setChatBotType(value);
    }
  }

  async function handleLGPDMessage(value) {
    setLGPDMessage(value);
    setLoadingLGPDMessage(true);
    await update({
      key: "lgpdMessage",
      value,
    });
    setLoadingLGPDMessage(false);
  }

  async function handleLGPDLink(value) {
    setLGPDLink(value);
    setLoadingLGPDLink(true);
    await update({
      key: "lgpdLink",
      value,
    });
    setLoadingLGPDLink(false);
  }

  async function handleLGPDDeleteMessage(value) {
    setLGPDDeleteMessage(value);
    setLoadingLGPDDeleteMessage(true);
    await update({
      key: "lgpdDeleteMessage",
      value,
    });
    setLoadingLGPDDeleteMessage(false);
  }

  async function handleLGPDConsent(value) {
    setLGPDConsent(value);
    setLoadingLGPDConsent(true);
    await update({
      key: "lgpdConsent",
      value,
    });
    setLoadingLGPDConsent(false);
  }

  async function handleLGPDHideNumber (value) {
    setLGPDHideNumber(value);
    setLoadingLGPDHideNumber(true);
    await update({
      key: "lgpdHideNumber",
      value,
    });
    setLoadingLGPDHideNumber(false);
  }

  async function handleSendGreetingAccepted(value) {
    setSendGreetingAccepted(value);
    setLoadingSendGreetingAccepted(true);
    await update({
      key: "sendGreetingAccepted",
      value,
    });
    setLoadingSendGreetingAccepted(false);
  }

  async function handleUserRandom(value) {
    setUserRandom(value);
    setLoadingUserRandom(true);
    await update({
      key: "userRandom",
      value,
    });
    setLoadingUserRandom(false);
  }

  async function handleSettingsTransfTicket(value) {
    setSettingsTransfTicket(value);
    setLoadingSettingsTransfTicket(true);
    await update({
      key: "sendMsgTransfTicket",
      value,
    });
    setLoadingSettingsTransfTicket(false);
  }

  async function handleAcceptCallWhatsapp(value) {
    setAcceptCallWhatsapp(value);
    setLoadingAcceptCallWhatsapp(true);
    await update({
      key: "acceptCallWhatsapp",
      value,
    });
    setLoadingAcceptCallWhatsapp(false);
  }

  async function handleHoursCloseTicketsAuto(value) {
    setHoursCloseTicketsAuto(value);
    setLoadingHoursCloseTicketsAuto(true);
    await update({
      key: "hoursCloseTicketsAuto",
      value,
    });
    setLoadingHoursCloseTicketsAuto(false);
  }

  async function handleSendSignMessage(value) {
    setSendSignMessage(value);
    setLoadingSendSignMessage(true);
    await update({
      key: "sendSignMessage",
      value,
    });
    setLoadingSendSignMessage(false);
  }

  async function handleSendGreetingMessageOneQueues(value) {
    setSendGreetingMessageOneQueues(value);
    setLoadingSendGreetingMessageOneQueues(true);
    await update({
      key: "sendGreetingMessageOneQueues",
      value,
    });
    setLoadingSendGreetingMessageOneQueues(false);
  }

  async function handleSendQueuePosition(value) {
    setSendQueuePosition(value);
    setLoadingSendQueuePosition(true);
    await update({
      key: "sendQueuePosition",
      value,
    });
    setLoadingSendQueuePosition(false);
  }

  async function handleSendFarewellWaitingTicket(value) {
    setSendFarewellWaitingTicket(value);
    setLoadingSendFarewellWaitingTicket(true);
    await update({
      key: "sendFarewellWaitingTicket",
      value,
    });
    setLoadingSendFarewellWaitingTicket(false);
  }

  async function handleAcceptAudioMessageContact(value) {
    setAcceptAudioMessageContact(value);
    setLoadingAcceptAudioMessageContact(true);
    await update({
      key: "acceptAudioMessageContact",
      value,
    });
    setLoadingAcceptAudioMessageContact(false);
  }

  async function handleEnableLGPD(value) {
    setEnableLGPD(value);
    setLoadingEnableLGPD(true);
    await update({
      key: "enableLGPD",
      value,
    });
    setLoadingEnableLGPD(false);
  }


  return (
    <>
      <Grid spacing={3} container>

        {/* CRIAÇÃO DE COMPANY/USERS */}
        {isSuper() ?
          <Grid xs={12} sm={6} md={4} item>
            <FormControl className={classes.selectContainer}>
              <InputLabel id="UserCreation-label">
                {i18n.t("settings.settings.options.creationCompanyUser")}
              </InputLabel>
              <Select
                labelId="UserCreation-label"
                value={UserCreation}
                onChange={async (e) => {
                  handleChangeUserCreation(e.target.value);
                }}
              >
                <MenuItem value={"disabled"}>
                  {i18n.t("settings.settings.options.disabled")}
                </MenuItem>
                <MenuItem value={"enabled"}>
                  {i18n.t("settings.settings.options.enabled")}
                </MenuItem>
              </Select>
              <FormHelperText>
                {loadingUserCreation &&
                  i18n.t("settings.settings.options.updating")}
              </FormHelperText>
            </FormControl>
          </Grid>
          : null}

        {/* AVALIAÇÕES */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="ratings-label">{i18n.t("settings.settings.options.evaluations")}</InputLabel>
            <Select
              labelId="ratings-label"
              value={userRating}
              onChange={async (e) => {
                handleChangeUserRating(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>
                {i18n.t("settings.settings.options.disabled")}
              </MenuItem>
              <MenuItem value={"enabled"}>
                {i18n.t("settings.settings.options.enabled")}
              </MenuItem>
            </Select>
            <FormHelperText>
              {loadingUserRating && i18n.t("settings.settings.options.evaluations")}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* AGENDAMENTO DE EXPEDIENTE */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="schedule-type-label">
              {i18n.t("settings.settings.options.officeScheduling")}
            </InputLabel>
            <Select
              labelId="schedule-type-label"
              value={scheduleType}
              onChange={async (e) => {
                handleScheduleType(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>{i18n.t("settings.settings.options.disabled")}</MenuItem>
              <MenuItem value={"queue"}>{i18n.t("settings.settings.options.queueManagement")}</MenuItem>
              <MenuItem value={"company"}>{i18n.t("settings.settings.options.companyManagement")}</MenuItem>
            </Select>
            <FormHelperText>
              {loadingScheduleType && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* ENVIAR SAUDAÇÃO AO ACEITAR O TICKET */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="sendGreetingAccepted-label">
              {i18n.t("settings.settings.options.sendGreetingAccepted")}
            </InputLabel>
            <Select
              labelId="sendGreetingAccepted-label"
              value={SendGreetingAccepted}
              onChange={async (e) => {
                handleSendGreetingAccepted(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>
                {i18n.t("settings.settings.options.disabled")}
              </MenuItem>
              <MenuItem value={"enabled"}>
                {i18n.t("settings.settings.options.enabled")}
              </MenuItem>
            </Select>
            <FormHelperText>
              {loadingSendGreetingAccepted && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* ESCOLHER OPERADOR ALEATORIO */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="sendMsgTransfTicket-label">
              {i18n.t("settings.settings.options.sendMsgTransfTicket")}
            </InputLabel>
            <Select
              labelId="userRandom-label"
              value={UserRandom}
              onChange={async (e) => {
                handleUserRandom(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>
                {i18n.t("settings.settings.options.disabled")}
              </MenuItem>
              <MenuItem value={"enabled"}>
                {i18n.t("settings.settings.options.enabled")}
              </MenuItem>
            </Select>
            <FormHelperText>
              {loadingUserRandom && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* ENVIAR MENSAGEM DE TRANSFERENCIA DE SETOR/ATENDENTE */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="sendMsgTransfTicket-label">
              {i18n.t("settings.settings.options.sendMsgTransfTicket")}
            </InputLabel>
            <Select
              labelId="sendMsgTransfTicket-label"
              value={SettingsTransfTicket}
              onChange={async (e) => {
                handleSettingsTransfTicket(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>
                {i18n.t("settings.settings.options.disabled")}
              </MenuItem>
              <MenuItem value={"enabled"}>
                {i18n.t("settings.settings.options.enabled")}
              </MenuItem>
            </Select>
            <FormHelperText>
              {loadingSettingsTransfTicket && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* TIPO DO BOT */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="schedule-type-label">{i18n.t("settings.settings.options.chatBotType")}</InputLabel>
            <Select
              labelId="schedule-type-label"
              value={chatBotType}
              onChange={async (e) => {
                handleChatBotType(e.target.value);
              }}
            >
              <MenuItem value={"text"}>Texto</MenuItem>
              {/* <MenuItem value={"button"}>{i18n.t("settings.settings.options.buttons")}</MenuItem>
              <MenuItem value={"list"}>Lista</MenuItem> */}
            </Select>
            <FormHelperText>
              {loadingScheduleType && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* AVISO SOBRE LIGAÇÃO DO WHATSAPP */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="acceptCallWhatsapp-label">
              {i18n.t("settings.settings.options.acceptCallWhatsapp")}
            </InputLabel>
            <Select
              labelId="acceptCallWhatsapp-label"
              value={AcceptCallWhatsapp}
              onChange={async (e) => {
                handleAcceptCallWhatsapp(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>
                {i18n.t("settings.settings.options.disabled")}
              </MenuItem>
              <MenuItem value={"enabled"}>
                {i18n.t("settings.settings.options.enabled")}
              </MenuItem>
            </Select>
            <FormHelperText>
              {loadingAcceptCallWhatsapp && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* HABILITAR PARA O ATENDENTE RETIRAR O ASSINATURA */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="sendSignMessage-label">
              {i18n.t("settings.settings.options.sendSignMessage")}
            </InputLabel>
            <Select
              labelId="sendSignMessage-label"
              value={sendSignMessage}
              onChange={async (e) => {
                handleSendSignMessage(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>
                {i18n.t("settings.settings.options.disabled")}
              </MenuItem>
              <MenuItem value={"enabled"}>
                {i18n.t("settings.settings.options.enabled")}
              </MenuItem>
            </Select>
            <FormHelperText>
              {loadingSendSignMessage && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* ENVIAR SAUDAÇÃO QUANDO HOUVER SOMENTE 1 FILA */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="sendGreetingMessageOneQueues-label">
              {i18n.t("settings.settings.options.sendGreetingMessageOneQueues")}
            </InputLabel>
            <Select
              labelId="sendGreetingMessageOneQueues-label"
              value={sendGreetingMessageOneQueues}
              onChange={async (e) => {
                handleSendGreetingMessageOneQueues(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>
                {i18n.t("settings.settings.options.disabled")}
              </MenuItem>
              <MenuItem value={"enabled"}>
                {i18n.t("settings.settings.options.enabled")}
              </MenuItem>
            </Select>
            <FormHelperText>
              {loadingSendGreetingMessageOneQueues && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* ENVIAR MENSAGEM COM A POSIÇÃO DA FILA */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="sendQueuePosition-label">
              {i18n.t("settings.settings.options.sendQueuePosition")}
            </InputLabel>
            <Select
              labelId="sendQueuePosition-label"
              value={sendQueuePosition}
              onChange={async (e) => {
                handleSendQueuePosition(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>
                {i18n.t("settings.settings.options.disabled")}
              </MenuItem>
              <MenuItem value={"enabled"}>
                {i18n.t("settings.settings.options.enabled")}
              </MenuItem>
            </Select>
            <FormHelperText>
              {loadingSendQueuePosition && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* ENVIAR MENSAGEM DE DESPEDIDA NO AGUARDANDO */}
        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="sendFarewellWaitingTicket-label">
              {i18n.t("settings.settings.options.sendFarewellWaitingTicket")}
            </InputLabel>
            <Select
              labelId="sendFarewellWaitingTicket-label"
              value={sendFarewellWaitingTicket}
              onChange={async (e) => {
                handleSendFarewellWaitingTicket(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>
                {i18n.t("settings.settings.options.disabled")}
              </MenuItem>
              <MenuItem value={"enabled"}>
                {i18n.t("settings.settings.options.enabled")}
              </MenuItem>
            </Select>
            <FormHelperText>
              {loadingSendFarewellWaitingTicket && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="acceptAudioMessageContact-label">
              {i18n.t("settings.settings.options.acceptAudioMessageContact")}
            </InputLabel>
            <Select
              labelId="acceptAudioMessageContact-label"
              value={acceptAudioMessageContact}
              onChange={async (e) => {
                handleAcceptAudioMessageContact(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>
                {i18n.t("settings.settings.options.disabled")}
              </MenuItem>
              <MenuItem value={"enabled"}>
                {i18n.t("settings.settings.options.enabled")}
              </MenuItem>
            </Select>
            <FormHelperText>
              {loadingAcceptAudioMessageContact && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6} md={4} item>
          <FormControl className={classes.selectContainer}>
            <InputLabel id="enableLGPD-label"> {i18n.t("settings.settings.options.enableLGPD")}</InputLabel>
            <Select
              labelId="enableLGPD-label"
              value={enableLGPD}
              onChange={async (e) => {
                handleEnableLGPD(e.target.value);
              }}
            >
              <MenuItem value={"disabled"}>{i18n.t("settings.settings.options.disabled")}</MenuItem>
              <MenuItem value={"enabled"}>{i18n.t("settings.settings.options.enabled")}</MenuItem>
            </Select>
            <FormHelperText>
              {loadingEnableLGPD && i18n.t("settings.settings.options.updating")}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <br></br>
      {/*-----------------LGPD-----------------*/}
      {enableLGPD === "enabled" && (
      <>
        <Grid spacing={3} container
          style={{ marginBottom: 10 }}>
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            scrollButtons="on"
            variant="scrollable"
            className={classes.tab}
          >
            <Tab

              label={i18n.t("settings.settings.LGPD.title")} />

          </Tabs>
        </Grid>
        <Grid spacing={3} container>
          <Grid xs={12} sm={6} md={12} item>
            <FormControl className={classes.selectContainer}>
              <TextField
                id="lgpdMessage"
                name="lgpdMessage"
                margin="dense"
                multiline
                rows={3}
                label={i18n.t("settings.settings.LGPD.welcome")}
                variant="outlined"
                value={lgpdMessage}
                onChange={async (e) => {
                  handleLGPDMessage(e.target.value);
                }}
              >
              </TextField>
              <FormHelperText>
                {loadinglgpdMessage && i18n.t("settings.settings.options.updating")}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6} md={12} item>
            <FormControl className={classes.selectContainer}>
              <TextField
                id="lgpdLink"
                name="lgpdLink"
                margin="dense"
                label={i18n.t("settings.settings.LGPD.linkLGPD")}
                variant="outlined"
                value={lgpdLink}
                onChange={async (e) => {
                  handleLGPDLink(e.target.value);
                }}
              >
              </TextField>
              <FormHelperText>
                {loadingLGPDLink && i18n.t("settings.settings.options.updating")}
              </FormHelperText>
            </FormControl>
          </Grid>
          {/* LGPD Manter ou nao mensagem deletada pelo contato */}
          <Grid xs={12} sm={6} md={4} item>
            <FormControl className={classes.selectContainer}>
              <InputLabel id="lgpdDeleteMessage-label">{i18n.t("settings.settings.LGPD.obfuscateMessageDelete")}</InputLabel>
              <Select
                labelId="lgpdDeleteMessage-label"
                value={lgpdDeleteMessage}
                onChange={async (e) => {
                  handleLGPDDeleteMessage(e.target.value);
                }}
              >
                <MenuItem value={"disabled"}>{i18n.t("settings.settings.LGPD.disabled")}</MenuItem>
                <MenuItem value={"enabled"}>{i18n.t("settings.settings.LGPD.enabled")}</MenuItem>
              </Select>
              <FormHelperText>
                {loadingLGPDDeleteMessage && i18n.t("settings.settings.options.updating")}
              </FormHelperText>
            </FormControl>
          </Grid>
          {/* LGPD Sempre solicitar confirmaçao / conscentimento dos dados */}
          <Grid xs={12} sm={6} md={4} item>
            <FormControl className={classes.selectContainer}>
              <InputLabel id="lgpdConsent-label">
              {i18n.t("settings.settings.LGPD.alwaysConsent")}
              </InputLabel>
              <Select
                labelId="lgpdConsent-label"
                value={lgpdConsent}
                onChange={async (e) => {
                  handleLGPDConsent(e.target.value);
                }}
              >
                <MenuItem value={"disabled"}>{i18n.t("settings.settings.LGPD.disabled")}</MenuItem>
                <MenuItem value={"enabled"}>{i18n.t("settings.settings.LGPD.enabled")}</MenuItem>
              </Select>
              <FormHelperText>
                {loadingLGPDConsent && i18n.t("settings.settings.options.updating")}
              </FormHelperText>
            </FormControl>
          </Grid>
          {/* LGPD Ofuscar número telefone para usuários */}
          <Grid xs={12} sm={6} md={4} item>
            <FormControl className={classes.selectContainer}>
              <InputLabel id="lgpdHideNumber-label">
              {i18n.t("settings.settings.LGPD.obfuscatePhoneUser")}
              </InputLabel>
              <Select
                labelId="lgpdHideNumber-label"
                value={lgpdHideNumber}
                onChange={async (e) => {
                  handleLGPDHideNumber(e.target.value);
                }}
              >
                <MenuItem value={"disabled"}>{i18n.t("settings.settings.LGPD.disabled")}</MenuItem>
                <MenuItem value={"enabled"}>{i18n.t("settings.settings.LGPD.enabled")}</MenuItem>
              </Select>
              <FormHelperText>
                {loadingLGPDHideNumber && i18n.t("settings.settings.options.updating")}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </>
      )}
    </>
  );
}
