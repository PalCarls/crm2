import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import moment from "moment";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  DialogActions,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Switch,
  FormControlLabel,
  Grid,
  Divider,
  Tab,
  Tabs,
  Paper
} from "@material-ui/core";

import api from "../../services/api";
import { i18n } from "../../translate/i18n";
import toastError from "../../errors/toastError";
import QueueSelect from "../QueueSelect";
import TabPanel from "../TabPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },

  multFieldLine: {
    marginTop: 12,
    display: "flex",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1),
    },
  },

  btnWrapper: {
    position: "relative",
  },
  importMessage: {
    marginTop: 12,
    marginBottom: 12,
    paddingBottom: 20,
    paddingTop: 3,
    padding: 12,
    border: "solid grey 2px",
    borderRadius:4,
    display: "flex",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1),
    },
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },

  textField: {
    marginRight: theme.spacing(1),
    flex: 1,
  },
}));

const SessionSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const WhatsAppModal = ({ open, onClose, whatsAppId }) => {
  const classes = useStyles();
  const initialState = {
    name: "",
    greetingMessage: "",
    complationMessage: "",
    outOfHoursMessage: "",
    ratingMessage: "",
    isDefault: false,
    token: "",
    maxUseBotQueues: 3,
    provider: "beta",
    expiresTicket: 0,
    allowGroup: false,
    groupAsTicket: "disabled",
    timeUseBotQueues: 0,
    timeSendQueue: 0,
    sendIdQueue: 0,
    expiresTicketNPS: 0,
    expiresInactiveMessage: "",
    timeInactiveMessage: "",
    inactiveMessage: "",
    maxUseBotQueuesNPS: 3,
    whenExpiresTicket: 0,
    
    
    timeCreateNewTicket: 0
  };
  const [whatsApp, setWhatsApp] = useState(initialState);
  const [selectedQueueIds, setSelectedQueueIds] = useState([]);
  const [queues, setQueues] = useState([]);
  const [tab, setTab] = useState("general");
  const [enableImportMessage, setEnableImportMessage] = useState(false);
  const [importOldMessagesGroups, setImportOldMessagesGroups] = useState(false);
  const [closedTicketsPostImported, setClosedTicketsPostImported] =
    useState(false);
  const [importOldMessages, setImportOldMessages] = useState(
    moment().add(-1, "days").format("YYYY-MM-DDTHH:mm")
  );
  const [importRecentMessages, setImportRecentMessages] = useState(
    moment().add(-1, "minutes").format("YYYY-MM-DDTHH:mm")
  );


  const handleEnableImportMessage = async (e) => {
    setEnableImportMessage(e.target.checked);

  };

  useEffect(() => {
    const fetchSession = async () => {
      if (!whatsAppId) return;

      try {
        const { data } = await api.get(`whatsapp/${whatsAppId}?session=0`);
        setWhatsApp(data);

        const whatsQueueIds = data.queues?.map((queue) => queue.id);
        setSelectedQueueIds(whatsQueueIds);
        if (data?.importOldMessages) {
          setEnableImportMessage(true);
          setImportOldMessages(data?.importOldMessages);
          setImportRecentMessages(data?.importRecentMessages);
          setClosedTicketsPostImported(data?.closedTicketsPostImported);
          setImportOldMessagesGroups(data?.importOldMessagesGroups);

        }
      } catch (err) {
        toastError(err);
      }
    };
    fetchSession();
  }, [whatsAppId]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/queue");
        setQueues(data);
      } catch (err) {
        toastError(err);
      }
    })();
  }, []);

  const handleSaveWhatsApp = async (values) => {
    const whatsappData = {
      ...values, queueIds: selectedQueueIds,
      importOldMessages: enableImportMessage ? importOldMessages : null,
      importRecentMessages: enableImportMessage ? importRecentMessages : null,
      importOldMessagesGroups: importOldMessagesGroups ? importOldMessagesGroups : null,
      closedTicketsPostImported: closedTicketsPostImported ? closedTicketsPostImported : null,

    };
    //delete whatsappData["queues"];
    delete whatsappData["session"];

    try {
      if (whatsAppId) {
        if (whatsAppId && enableImportMessage && whatsApp?.status === "CONNECTED") {
          toast.warning(
            "Para fazer a importação das mensagens é necessário ler o qrCode novamente !!!",
            { autoClose: false }
          );
          try {
            setWhatsApp({ ...whatsApp, status: "qrcode" });
            await api.delete(`/whatsappsession/${whatsApp.id}`);
          } catch (err) {
            toastError(err);
          }
        }

        await api.put(`/whatsapp/${whatsAppId}`, whatsappData);

      } else {
        await api.post("/whatsapp", whatsappData);
      }
      toast.success(i18n.t("whatsappModal.success"));

      handleClose();
    } catch (err) {
      toastError(err);
    }
  };

  const handleClose = () => {
    onClose();
    setWhatsApp(initialState);
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        scroll="paper"
      >
        <DialogTitle>
          {whatsAppId
            ? i18n.t("whatsappModal.title.edit")
            : i18n.t("whatsappModal.title.add")}
        </DialogTitle>
        <Formik
          initialValues={whatsApp}
          enableReinitialize={true}
          validationSchema={SessionSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              handleSaveWhatsApp(values);
              actions.setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, touched, errors, isSubmitting }) => (
            <Form>
              <Paper className={classes.mainPaper} elevation={1}>
                <Tabs
                  value={tab}
                  indicatorColor="primary"
                  textColor="primary"
                  scrollButtons="on"
                  variant="scrollable"
                  onChange={handleTabChange}
                  className={classes.tab}
                >
                  <Tab label={i18n.t("whatsappModal.tabs.general")} value={"general"} />
                  <Tab label={i18n.t("whatsappModal.tabs.messages")} value={"messages"} />
                  <Tab label="Chatbot" value={"chatbot"} />
                  <Tab label={i18n.t("whatsappModal.tabs.assessments")} value={"nps"} />
                </Tabs>
              </Paper>
              <Paper className={classes.paper} elevation={0}>
                <TabPanel
                  className={classes.container}
                  value={tab}
                  name={"general"}
                >
                  <DialogContent dividers>
                    {/* NOME E PADRAO */}
                    <div className={classes.multFieldLine}>
                      <Grid spacing={2} container>
                        <Grid item>
                          <Field
                            as={TextField}
                            label={i18n.t("whatsappModal.form.name")}
                            autoFocus
                            name="name"
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                            variant="outlined"
                            margin="dense"
                            className={classes.textField}
                          />
                        </Grid>
                        <Grid style={{ paddingTop: 15 }} item>
                          <FormControlLabel
                            control={
                              <Field
                                as={Switch}
                                color="primary"
                                name="isDefault"
                                checked={values.isDefault}
                              />
                            }
                            label={i18n.t("whatsappModal.form.default")}
                          />
                          <FormControlLabel
                            control={
                              <Field
                                as={Switch}
                                color="primary"
                                name="allowGroup"
                                checked={values.allowGroup}
                              />
                            }
                            label={i18n.t("whatsappModal.form.group")}
                          />
                        </Grid>
                        <Grid xs={6} md={4} item>
                          <FormControl
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            className={classes.formControl}
                          >
                            <InputLabel id="groupAsTicket-selection-label">{i18n.t("whatsappModal.form.groupAsTicket")}</InputLabel>
                            <Field
                              as={Select}
                              label={i18n.t("whatsappModal.form.groupAsTicket")}
                              placeholder={i18n.t("whatsappModal.form.groupAsTicket")}
                              labelId="groupAsTicket-selection-label"
                              id="groupAsTicket"
                              name="groupAsTicket"
                            >
                              <MenuItem value={"disabled"}>{i18n.t("whatsappModal.menuItem.disabled")}</MenuItem>
                              <MenuItem value={"enabled"}>{i18n.t("whatsappModal.menuItem.enabled")}</MenuItem>
                            </Field>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </div>


                    <div className={classes.importMessage}>
                      <div className={classes.multFieldLine}>
                        <FormControlLabel
                          style={{ marginRight: 7, color: "gray" }}
                          label={i18n.t("whatsappModal.form.importOldMessagesEnable")}
                          labelPlacement="end"
                          control={
                            <Switch
                              size="medium"
                              checked={enableImportMessage}
                              onChange={handleEnableImportMessage}
                              name="importOldMessagesEnable"
                              color="primary"
                            />
                          }
                        />

                        {enableImportMessage ? (
                          <>
                            <FormControlLabel
                              style={{ marginRight: 7, color: "gray" }}
                              label={i18n.t(
                                "whatsappModal.form.importOldMessagesGroups"
                              )}
                              labelPlacement="end"
                              control={
                                <Switch
                                  size="medium"
                                  checked={importOldMessagesGroups}
                                  onChange={(e) =>
                                    setImportOldMessagesGroups(e.target.checked)
                                  }
                                  name="importOldMessagesGroups"
                                  color="primary"
                                />
                              }
                            />

                            <FormControlLabel
                              style={{ marginRight: 7, color: "gray" }}
                              label={i18n.t(
                                "whatsappModal.form.closedTicketsPostImported"
                              )}
                              labelPlacement="end"
                              control={
                                <Switch
                                  size="medium"
                                  checked={closedTicketsPostImported}
                                  onChange={(e) =>
                                    setClosedTicketsPostImported(e.target.checked)
                                  }
                                  name="closedTicketsPostImported"
                                  color="primary"
                                />
                              }
                            />
                          </>) : <></>}
                      </div>

                      {enableImportMessage ? (
                        <Grid style={{ marginTop: 18 }} container spacing={3}>
                          <Grid item xs={6}>
                            <Field
                              fullWidth
                              as={TextField}
                              label={i18n.t("whatsappModal.form.importOldMessages")}
                              type="datetime-local"
                              name="importOldMessages"
                              inputProps={{
                                max: moment()
                                  .add(0, "minutes")
                                  .format("YYYY-MM-DDTHH:mm"),
                                min: moment()
                                  .add(-2, "years")
                                  .format("YYYY-MM-DDTHH:mm"),
                              }}
                              //min="2022-11-06T22:22:55"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              error={
                                touched.importOldMessages &&
                                Boolean(errors.importOldMessages)
                              }
                              helperText={
                                touched.importOldMessages && errors.importOldMessages
                              }
                              variant="outlined"
                              value={moment(importOldMessages).format(
                                "YYYY-MM-DDTHH:mm"
                              )}
                              onChange={(e) => {
                                setImportOldMessages(e.target.value);
                              }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Field
                              fullWidth
                              as={TextField}
                              label={i18n.t("whatsappModal.form.importRecentMessages")}
                              type="datetime-local"
                              name="importRecentMessages"
                              inputProps={{
                                max: moment()
                                  .add(0, "minutes")
                                  .format("YYYY-MM-DDTHH:mm"),
                                min: moment(importOldMessages).format(
                                  "YYYY-MM-DDTHH:mm"
                                )
                              }}
                              //min="2022-11-06T22:22:55"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              error={
                                touched.importRecentMessages &&
                                Boolean(errors.importRecentMessages)
                              }
                              helperText={
                                touched.importRecentMessages && errors.importRecentMessages
                              }
                              variant="outlined"
                              value={moment(importRecentMessages).format(
                                "YYYY-MM-DDTHH:mm"
                              )}
                              onChange={(e) => {
                                setImportRecentMessages(e.target.value);
                              }}
                            />
                          </Grid>
                        </Grid>

                      ) : null}
                    </div>
                    {enableImportMessage && (
                      <span style={{ color: "red" }}>
                        {i18n.t("whatsappModal.form.importAlert")}
                      </span>
                    )}


                    {/* TOKEN */}
                    <div>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.token")}
                        type="token"
                        fullWidth
                        name="token"
                        variant="outlined"
                        margin="dense"
                      />
                    </div>
                    {/* FILAS */}
                    <QueueSelect
                      selectedQueueIds={selectedQueueIds}
                      onChange={(selectedIds) => setSelectedQueueIds(selectedIds)}
                    />
                    <div>
                      <h3>{i18n.t("whatsappModal.form.queueRedirection")}</h3>
                      <p>{i18n.t("whatsappModal.form.queueRedirectionDesc")}</p>
                      <Grid spacing={2} container>

                        <Grid xs={6} md={6} item>
                          <FormControl
                            variant="outlined"
                            margin="dense"
                            className={classes.FormControl}
                            fullWidth
                          >
                            <InputLabel id="sendIdQueue-selection-label">
                              {i18n.t("whatsappModal.form.sendIdQueue")}
                            </InputLabel>
                            <Field
                              as={Select}
                              name="sendIdQueue"
                              id="sendIdQueue"
                              label={i18n.t("whatsappModal.form.sendIdQueue")}
                              placeholder={i18n.t("whatsappModal.form.sendIdQueue")}
                              labelId="sendIdQueue-selection-label"
                            >
                              <MenuItem value={0}>&nbsp;</MenuItem>
                              {queues.map(queue => (
                                <MenuItem key={queue.id} value={queue.id}>
                                  {queue.name}
                                </MenuItem>
                              ))}
                            </Field>
                          </FormControl>

                        </Grid>

                        <Grid xs={6} md={6} item>
                          <FormControl
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            className={classes.formControl}
                          >
                            <InputLabel id="timeSendQueue-selection-label">{i18n.t("whatsappModal.form.time")}</InputLabel>
                            <Field
                              as={Select}
                              label={i18n.t("Tempo")}
                              placeholder={i18n.t("Tempo")}
                              labelId="timeSendQueue-selection-label"
                              id="timeSendQueue"
                              name="timeSendQueue"
                            >
                              <MenuItem value={"0"}>{i18n.t("userModal.form.allTicketDisable")}</MenuItem>
                              <MenuItem value={"5"}>5 minutos</MenuItem>
                              <MenuItem value={"10"}>10 minutos</MenuItem>
                              <MenuItem value={"15"}>15 minutos</MenuItem>
                              <MenuItem value={"15"}>20 minutos</MenuItem>
                              <MenuItem value={"15"}>25 minutos</MenuItem>
                              <MenuItem value={"30"}>30 minutos</MenuItem>
                              <MenuItem value={"60"}>60 minutos</MenuItem>
                            </Field>
                          </FormControl>
                        </Grid>

                      </Grid>
                    </div>
                  </DialogContent>
                </TabPanel>
                <TabPanel
                  className={classes.container}
                  value={tab}
                  name={"messages"}
                >
                  <DialogContent dividers>
                    {/* MENSAGEM DE SAUDAÇÃO */}
                    <div>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.greetingMessage")}
                        type="greetingMessage"
                        multiline
                        rows={4}
                        fullWidth
                        name="greetingMessage"
                        error={
                          touched.greetingMessage && Boolean(errors.greetingMessage)
                        }
                        helperText={
                          touched.greetingMessage && errors.greetingMessage
                        }
                        variant="outlined"
                        margin="dense"
                      />
                    </div>

                    {/* MENSAGEM DE CONCLUSÃO */}
                    <div>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.complationMessage")}
                        type="complationMessage"
                        multiline
                        rows={4}
                        fullWidth
                        name="complationMessage"
                        error={
                          touched.complationMessage &&
                          Boolean(errors.complationMessage)
                        }
                        helperText={
                          touched.complationMessage && errors.complationMessage
                        }
                        variant="outlined"
                        margin="dense"
                      />
                    </div>

                    {/* MENSAGEM DE FORA DE EXPEDIENTE */}
                    <div>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.outOfHoursMessage")}
                        type="outOfHoursMessage"
                        multiline
                        rows={4}
                        fullWidth
                        name="outOfHoursMessage"
                        error={touched.outOfHoursMessage && Boolean(errors.outOfHoursMessage)}
                        helperText={touched.outOfHoursMessage && errors.outOfHoursMessage}
                        variant="outlined"
                        margin="dense"
                      />
                    </div>
                  </DialogContent>
                </TabPanel>

                <TabPanel
                  className={classes.container}
                  value={tab}
                  name={"chatbot"}
                >
                  <DialogContent dividers>
                  <Grid spacing={2} container>
                    {/* TEMPO PARA CRIAR NOVO TICKET */}
                    <Grid xs={6} md={4} item>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.timeCreateNewTicket")}
                        id="timeCreateNewTicket"
                        fullWidth
                        name="timeCreateNewTicket"
                        variant="outlined"
                        margin="dense"
                        error={touched.timeCreateNewTicket && Boolean(errors.timeCreateNewTicket)}
                        helperText={touched.timeCreateNewTicket && errors.timeCreateNewTicket}
                        className={classes.textField}
                      />
                    </Grid>
                 
                    {/* QUANTIDADE MÁXIMA DE VEZES QUE O CHATBOT VAI SER ENVIADO */}
                    <Grid xs={6} md={4} item>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.maxUseBotQueues")}
                        id="maxUseBotQueues"
                        fullWidth
                        name="maxUseBotQueues"
                        variant="outlined"
                        margin="dense"
                        error={touched.maxUseBotQueues && Boolean(errors.maxUseBotQueues)}
                        helperText={touched.maxUseBotQueues && errors.maxUseBotQueues}
                        className={classes.textField}
                      />
                    </Grid>
                      {/* TEMPO PARA ENVIO DO CHATBOT */}
                    <Grid xs={6} md={4} item>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.timeUseBotQueues")}
                        type="timeUseBotQueues"
                        fullWidth
                        name="timeUseBotQueues"
                        variant="outlined"
                        margin="dense"
                        error={touched.timeUseBotQueues && Boolean(errors.timeUseBotQueues)}
                        helperText={touched.timeUseBotQueues && errors.timeUseBotQueues}
                      />
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container>
                    {/* ENCERRAR CHATS ABERTOS APÓS X HORAS */}
                    <Grid xs={6} md={6} item> 
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.expiresTicket")}
                        type="expiresTicket"
                        fullWidth
                        name="expiresTicket"
                        variant="outlined"
                        margin="dense"
                        error={touched.expiresTicket && Boolean(errors.expiresTicket)}
                        helperText={touched.expiresTicket && errors.expiresTicket}
                      />
                    </Grid>
                     {/* TEMPO PARA ENVIO DO CHATBOT */}
                   <Grid xs={6} md={6} item> 
                    <FormControl
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          className={classes.formControl}
                        >
                          <InputLabel id="whenExpiresTicket-selection-label">
                            {i18n.t("whatsappModal.form.whenExpiresTicket")}
                          </InputLabel>
                            <Field
                              as={Select}
                              label={i18n.t("whatsappModal.form.whenExpiresTicket")}
                              placeholder={i18n.t(
                                "whatsappModal.form.whenExpiresTicket"
                              )}
                              labelId="whenExpiresTicket-selection-label"
                              id="whenExpiresTicket"
                              name="whenExpiresTicket"
                            >
                              <MenuItem value={"0"}>{i18n.t("whatsappModal.form.closeLastMessageOptions1")}</MenuItem>
                              <MenuItem value={"1"}>{i18n.t("whatsappModal.form.closeLastMessageOptions2")}</MenuItem>
                            </Field>
                          </FormControl>
                    </Grid>
                  </Grid>
                    {/* MENSAGEM POR INATIVIDADE*/}
                    <div>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.expiresInactiveMessage")}
                        type="expiresInactiveMessage"
                        multiline
                        rows={4}
                        fullWidth
                        name="expiresInactiveMessage"
                        error={touched.expiresInactiveMessage && Boolean(errors.expiresInactiveMessage)}
                        helperText={touched.expiresInactiveMessage && errors.expiresInactiveMessage}
                        variant="outlined"
                        margin="dense"
                      />
                    </div>
                  
                    {/* TEMPO PARA ENVIO DE MENSAGEM POR INATIVIDADE */}
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.timeInactiveMessage")}
                        type="timeInactiveMessage"
                        fullWidth
                        name="timeInactiveMessage"
                        variant="outlined"
                        margin="dense"
                        error={touched.timeInactiveMessage && Boolean(errors.timeInactiveMessage)}
                        helperText={touched.timeInactiveMessage && errors.timeInactiveMessage}
                      />
                     {/* MENSAGEM POR INATIVIDADE*/}
                     <div>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.inactiveMessage")}
                        type="inactiveMessage"
                        multiline
                        rows={4}
                        fullWidth
                        name="inactiveMessage"
                        error={touched.inactiveMessage && Boolean(errors.inactiveMessage)}
                        helperText={touched.inactiveMessage && errors.inactiveMessage}
                        variant="outlined"
                        margin="dense"
                      />
                    </div>
                  </DialogContent>
                </TabPanel>
                <TabPanel
                  className={classes.container}
                  value={tab}
                  name={"nps"}
                >
                  <DialogContent dividers>
                    {/* MENSAGEM DE AVALIAÇAO*/}
                    <div>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.ratingMessage")}
                        type="ratingMessage"
                        multiline
                        rows={4}
                        fullWidth
                        name="ratingMessage"
                        error={touched.ratingMessage && Boolean(errors.ratingMessage)}
                        helperText={touched.ratingMessage && errors.ratingMessage}
                        variant="outlined"
                        margin="dense"
                      />
                    </div>
                    {/* QUANTIDADE MÁXIMA DE VEZES QUE O NPS VAI SER ENVIADO */}
                    <div>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.maxUseBotQueuesNPS")}
                        id="maxUseBotQueuesNPS"
                        fullWidth
                        name="maxUseBotQueuesNPS"
                        variant="outlined"
                        margin="dense"
                        error={touched.maxUseBotQueuesNPS && Boolean(errors.maxUseBotQueuesNPS)}
                        helperText={touched.maxUseBotQueuesNPS && errors.maxUseBotQueuesNPS}
                        className={classes.textField}
                      />
                    </div>
                    {/* ENCERRAR CHATS NPS APÓS X Minutos */}
                    <div>
                      <Field
                        as={TextField}
                        label={i18n.t("whatsappModal.form.expiresTicketNPS")}
                        type="expiresTicketNPS"
                        fullWidth
                        name="expiresTicketNPS"
                        variant="outlined"
                        margin="dense"
                        error={touched.expiresTicketNPS && Boolean(errors.expiresTicketNPS)}
                        helperText={touched.expiresTicketNPS && errors.expiresTicketNPS}
                      />
                    </div>
                  </DialogContent>
                </TabPanel>
              </Paper>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  color="secondary"
                  disabled={isSubmitting}
                  variant="outlined"
                >
                  {i18n.t("whatsappModal.buttons.cancel")}
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                  variant="contained"
                  className={classes.btnWrapper}
                >
                  {whatsAppId
                    ? i18n.t("whatsappModal.buttons.okEdit")
                    : i18n.t("whatsappModal.buttons.okAdd")}
                  {isSubmitting && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default React.memo(WhatsAppModal);