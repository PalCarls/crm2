import React, { useState, useEffect, useRef, useContext } from "react";

import * as Yup from "yup";
import { Formik, FieldArray, Form, Field } from "formik";
import { toast } from "react-toastify";

import { FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Tab, Tabs } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { i18n } from "../../translate/i18n";
import Switch from "@material-ui/core/Switch";

import api from "../../services/api";
import toastError from "../../errors/toastError";
import ColorPicker from "../ColorPicker";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Colorize } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import ConfirmationModal from "../ConfirmationModal";

import OptionsChatBot from "../ChatBots/options";
import CustomToolTip from "../ToolTips";

import SchedulesForm from "../SchedulesForm";
import useCompanySettings from "../../hooks/useSettings/companySettings";
import { AuthContext } from "../../context/Auth/AuthContext";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginRight: theme.spacing(1),
    flex: 1,
  },

  textField1: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  btnWrapper: {
    position: "relative",
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  colorAdorment: {
    width: 20,
    height: 20,
  },
  greetingMessage: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1),
    },
  },
  custom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const QueueSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  color: Yup.string().min(3, "Too Short!").max(9, "Too Long!").required(),
  greetingMessage: Yup.string(),
  chatbots: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().min(4, "too short").required("Required"),
      })
    )
    .required("Must have friends"),
});

const QueueModal = ({ open, onClose, queueId, onEdit }) => {
  const classes = useStyles();

  const initialState = {
    name: "",
    color: "",
    greetingMessage: "",
    chatbots: [],
    outOfHoursMessage: "",
    orderQueue: "",
    tempoRoteador: 0,
    ativarRoteador: false,
    integrationId: "",
    fileListId: "",
    closeTicket: false
  };

  const [colorPickerModalOpen, setColorPickerModalOpen] = useState(false);
  const [queue, setQueue] = useState(initialState);
  const greetingRef = useRef();
  const [activeStep, setActiveStep] = React.useState(null);
  const [selectedQueue, setSelectedQueue] = useState(null);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [isStepContent, setIsStepContent] = React.useState(true);
  const [isNameEdit, setIsNamedEdit] = React.useState(null);
  const [isGreetingMessageEdit, setGreetingMessageEdit] = React.useState(null);
  const [queues, setQueues] = useState([]);
  const [users, setUsers] = useState([]);
  const [integrations, setIntegrations] = useState([]);
  const [schedulesEnabled, setSchedulesEnabled] = useState(false);
  const [tab, setTab] = useState(0);
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);

  const [schedules, setSchedules] = useState([
    { weekday: i18n.t("queueModal.serviceHours.monday"),weekdayEn: "monday",startTimeA: "08:00",endTimeA: "12:00",startTimeB: "13:00",endTimeB: "18:00",},
    { weekday: i18n.t("queueModal.serviceHours.tuesday"),weekdayEn: "tuesday",startTimeA: "08:00",endTimeA: "12:00",startTimeB: "13:00",endTimeB: "18:00",},
    { weekday: i18n.t("queueModal.serviceHours.wednesday"),weekdayEn: "wednesday",startTimeA: "08:00",endTimeA: "12:00",startTimeB: "13:00",endTimeB: "18:00",},
    { weekday: i18n.t("queueModal.serviceHours.thursday"),weekdayEn: "thursday",startTimeA: "08:00",endTimeA: "12:00",startTimeB: "13:00",endTimeB: "18:00",},
    { weekday: i18n.t("queueModal.serviceHours.friday"), weekdayEn: "friday",startTimeA: "08:00",endTimeA: "12:00",startTimeB: "13:00",endTimeB: "18:00",},
    { weekday: "Sábado", weekdayEn: "saturday",startTimeA: "08:00",endTimeA: "12:00",startTimeB: "13:00",endTimeB: "18:00",},
    { weekday: "Domingo", weekdayEn: "sunday",startTimeA: "08:00",endTimeA: "12:00",startTimeB: "13:00",endTimeB: "18:00",},
  ]);

  const companyId = user.companyId;

  const { get:getSetting } = useCompanySettings();

  useEffect(() => {

    const fetchData = async () => {

      const setting = await getSetting({
        "column":"scheduleType"
    });
      if(setting.scheduleType === "queue") setSchedulesEnabled(true);
    }
    fetchData();
  }, []);

  useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get("/files/", {
					params: { companyId }
				});

        setFile(data.files);
			} catch (err) {
				toastError(err);
			}
		})();
	}, []);

  useEffect(() => {
    (async () => {
      if (!queueId) return;
      try {
        const { data } = await api.get(`/queue/${queueId}`);
        setQueue((prevState) => {
          return { ...prevState, ...data };
        });
        setSchedules(data.schedules);
      } catch (err) {
        toastError(err);
      }
    })();

    return () => {
      setQueue({
        name: "",
        color: "",
        greetingMessage: "",
        chatbots: [],
        outOfHoursMessage: "",
        orderQueue: "",
        tempoRoteador: "",
        ativarRoteador: false,
        integrationId: "",
        fileListId: "",
        closeTicket: false
      });
    };
  }, [queueId, open]);

  useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get("/queue", {
					params: { companyId }
				});
				setQueues(data);
			} catch (err) {
				toastError(err);
			}
		})();
	}, []);

  useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get("/users/", {
					params: { companyId }
				});

        setUsers(data.users);
			} catch (err) {
				toastError(err);
			}
		})();
	}, []);

  useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get("/queueIntegration");

        setIntegrations(data.queueIntegrations);
			} catch (err) {
				toastError(err);
			}
		})();
	}, []);

  useEffect(() => {
    if (activeStep === isNameEdit) {
      setIsStepContent(false);
    } else {
      setIsStepContent(true);
    }
  }, [isNameEdit, activeStep]);

  const handleClose = () => {
    onClose();
    setIsNamedEdit(null);
    setActiveStep(null);
    setGreetingMessageEdit(null);
  };

  const handleSaveSchedules = async (values) => {
    toast.success("Clique em salvar para registar as alterações");
    setSchedules(values);
    setTab(0);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmModalOpen(false);
    setSelectedQueue(null);
  };

    const handleDeleteQueue = async (optionsId) => {
    try {
      await api.delete(`/chatbot/${optionsId}`);
      const { data } = await api.get(`/queue/${queueId}`);
      setQueue(initialState);
      setQueue(data);
      setIsNamedEdit(null);
      setGreetingMessageEdit(null);
      toast.success( `${i18n.t("queues.toasts.deleted")}`);
    } catch (err) {
      toastError(err);
    }
  };

  const handleSaveQueue = async (values) => {
    try {
      if (queueId) {
        await api.put(`/queue/${queueId}`, { ...values, schedules });
      } else {
        await api.post("/queue", { ...values, schedules });
      }

      toast.success( `${i18n.t("queues.toasts.success")}`);
      handleClose();
    } catch (err) {
      toastError(err);
    }
  };

  const handleSaveBot = async (values) => {
    console.log(values)
    try {
      if (queueId) {
        const {data} = await api.put(`/queue/${queueId}`, values);
				if (data.chatbots && data.chatbots.length) {
          onEdit(data);
					setQueue(data);
        }
      } else {
        const { data } = await api.post("/queue", values);
        if (data.chatbots && data.chatbots.length) {
					setQueue(data);
          onEdit(data);
					handleClose();
        }
      }

			setIsNamedEdit(null)
			setGreetingMessageEdit(null)
      toast.success( `${i18n.t("queues.toasts.success")}`);
     
    } catch (err) {
      toastError(err);
    }
  };


  return (
    <div className={classes.root}>
      <ConfirmationModal
        title={
          selectedQueue &&
          `${i18n.t("queues.confirmationModal.deleteTitle")} ${
            selectedQueue.name
          }?`
        }
        open={confirmModalOpen}
        onClose={handleCloseConfirmationModal}
        onConfirm={() => handleDeleteQueue(selectedQueue.id)}
      >
        {i18n.t("queueModal.title.confirmationDelete")}
      </ConfirmationModal>
      <Dialog
        maxWidth="md"
        fullWidth
        open={open}
        onClose={handleClose}
        scroll="paper"
      >
        <DialogTitle>
          {queueId
            ? `${i18n.t("queueModal.title.edit")}`
            : `${i18n.t("queueModal.title.add")}`}
        </DialogTitle>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, v) => setTab(v)}
          aria-label="disabled tabs example"
        >
          <Tab label={i18n.t("queueModal.title.queueData")} />
          {schedulesEnabled && <Tab label={i18n.t("queueModal.title.text")} />}
        </Tabs>
          {tab === 0 && (
            <Formik
              initialValues={queue}
              validateOnChange={false}
              enableReinitialize={true}
              validationSchema={QueueSchema}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  handleSaveQueue(values);
                  actions.setSubmitting(false);
                }, 400);
              }}
            >
              {({ handleChange, touched, errors, isSubmitting, values }) => (
                <Form>
                  <DialogContent dividers>
                    <Field
                      as={TextField}
                      label={i18n.t("queueModal.form.name")}
                      autoFocus
                      name="name"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      variant="outlined"
                      margin="dense"
                      className={classes.textField}
                    />
                    <Field
                      as={TextField}
                      label={i18n.t("queueModal.form.color")}
                      name="color"
                      id="color"
                      onFocus={() => {
                        setColorPickerModalOpen(true);
                        greetingRef.current.focus();
                      }}
                      error={touched.color && Boolean(errors.color)}
                      helperText={touched.color && errors.color}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <div
                              style={{ backgroundColor: values.color }}
                              className={classes.colorAdorment}
                            ></div>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <IconButton
                            size="small"
                            color="default"
                            onClick={() => setColorPickerModalOpen(true)}
                          >
                            <Colorize />
                          </IconButton>
                        ),
                      }}
                      variant="outlined"
                      margin="dense"
                    />
                    
                    <ColorPicker
                      open={colorPickerModalOpen}
                      handleClose={() => setColorPickerModalOpen(false)}
                      onChange={(color) => {
                        values.color = color;
                        setQueue(() => {
                          return { ...values, color };
                        });
                      }}
                    />
                    <Field
                      as={TextField}
                      label={i18n.t("queueModal.form.orderQueue")}
                      name="orderQueue"
                      type="orderQueue"
                      error={touched.orderQueue && Boolean(errors.orderQueue)}
                      helperText={touched.orderQueue && errors.orderQueue}
                      variant="outlined"
                      margin="dense"
                      className={classes.textField1}
                    />
                    <FormControlLabel
                      control={
                        <Field
                          as={Switch}
                          color="primary"
                          name="closeTicket"
                          checked={values.closeTicket}
                        />
                      }
                      label={i18n.t("queueModal.form.closeTicket")}
                    />
                    <div>
                      <FormControlLabel 
                        control={
                          <Field
                            as={Switch}
                            color="primary"
                            name="ativarRoteador"
                            checked={values.ativarRoteador}
                          />
                        }
                        label={i18n.t("queueModal.form.rotate")}
                      />
                      <Field
                        as={Select}
                        label={i18n.t("queueModal.form.timeRotate")}
                        name="tempoRoteador"
                        id="tempoRoteador"
                        variant="outlined"
                        margin="dense"
                        className={classes.selectField}
                      >
                      <MenuItem value="0" selected disabled>{i18n.t("queueModal.form.timeRotate")}</MenuItem>
                        <MenuItem value="2">2 minutos</MenuItem>
                        <MenuItem value="5">5 minutos</MenuItem>
                        <MenuItem value="10">10 minutos</MenuItem>
                        <MenuItem value="15">15 minutos</MenuItem>
                        <MenuItem value="30">30 minutos</MenuItem>
                        <MenuItem value="45">45 minutos</MenuItem>
                        <MenuItem value="60">60 minutos</MenuItem>
                      </Field>
                    </div>
                    <div>
                      <FormControl
                        variant="outlined"
                        margin="dense"
                        className={classes.FormControl}
                        fullWidth
                      >
                        <InputLabel id="integrationId-selection-label">
                          {i18n.t("queueModal.form.integrationId")}
                        </InputLabel>
                        <Field
                          as={Select}
                          label={i18n.t("queueModal.form.integrationId")}
                          name="integrationId"
                          id="integrationId"
                          placeholder={i18n.t("queueModal.form.integrationId")}
                          labelId="integrationId-selection-label" 
                          value={values.integrationId || ""}
                        >
                          <MenuItem value={""} >{"Nenhum"}</MenuItem>
                          {integrations.map((integration) => (
                          <MenuItem key={integration.id} value={integration.id}>
                            {integration.name}
                          </MenuItem>
                          ))}
                        </Field>
                        
                      </FormControl>
                      <FormControl
                        variant="outlined"
                        margin="dense"
                        className={classes.FormControl}
                        fullWidth
                      >
                      <InputLabel id="fileListId-selection-label">{i18n.t("queueModal.form.fileListId")}</InputLabel>
                        <Field
                            as={Select}
                            label={i18n.t("queueModal.form.fileListId")}
                            name="fileListId"
                            id="fileListId"
                            placeholder={i18n.t("queueModal.form.fileListId")}
                            labelId="fileListId-selection-label"
                            value={values.fileListId || ""}
                          >
                            <MenuItem value={""} >{"Nenhum"}</MenuItem>
                            {file.map(f => (
                              <MenuItem key={f.id} value={f.id}>
                                {f.name}
                              </MenuItem>
                            ))}
                        </Field>
                        </FormControl>
                    </div>
                    <div>
                      <Field
                        as={TextField}
                        label={i18n.t("queueModal.form.greetingMessage")}
                        type="greetingMessage"
                        multiline
                        inputRef={greetingRef}
                        minRows={5}
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
                      {schedulesEnabled && (
                        <Field
                          as={TextField}
                          label={i18n.t("queueModal.form.outOfHoursMessage")}
                          type="outOfHoursMessage"
                          multiline
                          rows={5}
                          fullWidth
                          name="outOfHoursMessage"
                          error={
                            touched.outOfHoursMessage &&
                            Boolean(errors.outOfHoursMessage)
                          }
                          helperText={
                            touched.outOfHoursMessage && errors.outOfHoursMessage
                          }
                          variant="outlined"
                          margin="dense"
                        />
                      )}
                    </div>

                    <Typography variant="subtitle1">
                      {i18n.t("queueModal.bot.title")}
                      <CustomToolTip
                        title={i18n.t("queueModal.bot.toolTipTitle")}
                        content={i18n.t("queueModal.bot.toolTip")}
                      >
                        <HelpOutlineOutlinedIcon
                          style={{ marginLeft: "14px" }}
                          fontSize="small"
                        />
                      </CustomToolTip>
                    </Typography>

                    <div>
                      <FieldArray name="chatbots">
                        {({ push, remove }) => (
                          <>
                            <Stepper
                              nonLinear
                              activeStep={activeStep}
                              orientation="vertical"
                            >
                              {values.chatbots &&
                                values.chatbots.length > 0 &&
                                values.chatbots.map((info, index) => (
                                  <Step
                                    key={`${info.id ? info.id : index}-chatbots`}
                                    onClick={() => setActiveStep(index)}
                                  >
                                    <StepLabel key={`${info.id}-chatbots`}>
                                      {isNameEdit !== index &&
                                      queue.chatbots[index]?.name ? (
                                        <div
                                          className={classes.greetingMessage}
                                          variant="body1"
                                        >
                                          {values.chatbots[index].name}

                                          <IconButton
                                            size="small"
                                            onClick={() => {
                                              setIsNamedEdit(index);
                                              setIsStepContent(false);
                                            }}
                                          >
                                            <EditIcon />
                                          </IconButton>

                                          <IconButton
                                            onClick={() => {
                                              setSelectedQueue(info);
                                              setConfirmModalOpen(true);
                                            }}
                                            size="small"
                                          >
                                            <DeleteOutline />
                                          </IconButton>
                                        </div>
                                      ) : (
                                        <>
                                          <Field
                                            as={TextField}
                                            name={`chatbots[${index}].name`}
                                            variant="standard"
                                            color="primary"
                                            disabled={isSubmitting}
                                            autoFocus
                                            error={
                                              touched?.chatbots?.[index]?.name &&
                                              Boolean(
                                                errors.chatbots?.[index]?.name
                                              )
                                            }
                                            className={classes.textField}
                                          />

                                          <FormControlLabel                                        
                                            control={
                                              <>
                                                <InputLabel className={classes.textField1} >{i18n.t("queueModal.bot.selectOption")}</InputLabel>
                                                <Field
                                                  as={Select}
                                                  name={`chatbots[${index}].queueType`}
                                                  error={touched?.chatbots?.[index]?.queueType && 
                                                    Boolean(errors?.chatbots?.[index]?.queueType)}
                                                  helpertext={touched?.chatbots?.[index]?.queueType && errors?.chatbots?.[index]?.queueType}
                                                  // value={`chatbots[${index}].queueType`}
                                                  className={classes.textField1}
                                                >
                                                  <MenuItem value={"text"}>{i18n.t("queueModal.bot.text")}</MenuItem>
                                                  <MenuItem value={"attendent"}>{i18n.t("queueModal.bot.attendent")}</MenuItem>
                                                  <MenuItem value={"queue"}>{i18n.t("queueModal.bot.queue")}</MenuItem>
                                                  <MenuItem value={"integration"}>{i18n.t("queueModal.bot.integration")}</MenuItem>
                                                  <MenuItem value={"file"}>{i18n.t("queueModal.bot.file")}</MenuItem>
                                                </Field>
                                              </>
                                            }
                                          />
                                          <FormControlLabel
                                            control={
                                              <Field
                                                as={Switch}
                                                color="primary"
                                                name={`chatbots[${index}].closeTicket`}
                                                checked={values.chatbots[index].closeTicket || false}
                                              />
                                            }
                                            label={i18n.t("queueModal.form.closeTicket")}
                                          />

                                          <IconButton
                                            size="small"
                                            onClick={() =>
                                              values.chatbots[index].name
                                                ? handleSaveBot(values)
                                                : null
                                            }
                                            disabled={isSubmitting}
                                          >
                                            <SaveIcon />
                                          </IconButton>

                                          <IconButton
                                            size="small"
                                            onClick={() => remove(index)}
                                            disabled={isSubmitting}
                                          >
                                            <DeleteOutline />
                                          </IconButton>
                                        </>
                                      )}
                                    </StepLabel>

                                    {isStepContent && queue.chatbots[index] && (
                                      <StepContent>
                                        <>
                                          {isGreetingMessageEdit !== index ? (
                                            <div
                                              className={classes.greetingMessage}
                                            >
                                              <Typography
                                                color="textSecondary"
                                                variant="body1"
                                              >
                                                Message:
                                              </Typography>

                                              {
                                                values.chatbots[index]
                                                  .greetingMessage
                                              }

                                              {!queue.chatbots[index]
                                                ?.greetingMessage && (
                                                <CustomToolTip
                                                  title={i18n.t("queueModal.bot.toolTipMessageTitle")}
                                                  content={i18n.t("queueModal.bot.toolTipMessageContent")}
                                                >
                                                  <HelpOutlineOutlinedIcon
                                                    color="secondary"
                                                    style={{ marginLeft: "4px" }}
                                                    fontSize="small"
                                                  />
                                                </CustomToolTip>
                                              )}

                                              <IconButton
                                                size="small"
                                                onClick={() =>
                                                  setGreetingMessageEdit(index)
                                                }
                                              >
                                                <EditIcon />
                                              </IconButton>
                                            </div>
                                          ) : (
                                            <div
                                              className={classes.greetingMessage}
                                            >
                                              {queue.chatbots[index].queueType === "text"  && (
                                                  <>
                                                    <Field
                                                      as={TextField}
                                                      name={`chatbots[${index}].greetingMessage`}
                                                      variant="standard"
                                                      margin="dense"
                                                      fullWidth
                                                      multiline
                                                      error={
                                                        touched.greetingMessage &&
                                                        Boolean(errors.greetingMessage)
                                                      }
                                                      helperText={
                                                        touched.greetingMessage &&
                                                        errors.greetingMessage
                                                      }
                                                      className={classes.textField}
                                                    />

                                                  </>
                                                )} 
                                                {queue.chatbots[index].queueType === "queue"  && (
                                                  <>
                                                    <Field
                                                      as={TextField}
                                                      name={`chatbots[${index}].greetingMessage`}
                                                      variant="standard"
                                                      margin="dense"
                                                      fullWidth
                                                      multiline
                                                      error={
                                                        touched.greetingMessage &&
                                                        Boolean(errors.greetingMessage)
                                                      }
                                                      helperText={
                                                        touched.greetingMessage &&
                                                        errors.greetingMessage
                                                      }
                                                      className={classes.textField}
                                                    />
                                                    <InputLabel>{i18n.t("queueModal.bot.queue")}</InputLabel>
                                                    <Field
                                                        as={Select}
                                                        name={`chatbots[${index}].optQueueId`}
                                                        error={touched?.chatbots?.[index]?.optQueueId && 
                                                          Boolean(errors?.chatbots?.[index]?.optQueueId)}
                                                        helpertext={touched?.chatbots?.[index]?.optQueueId && errors?.chatbots?.[index]?.optQueueId}
                                                        // value={`chatbots[${index}].optQueueId`}
                                                        className={classes.textField1}
                                                      >
                                                          {queues.map(queue => (
                                                            <MenuItem key={queue.id} value={queue.id}>
                                                              {queue.name}
                                                            </MenuItem>
                                                          ))}
                                                    </Field>
                                                  </>
                                                )} 
                                                {queue.chatbots[index].queueType === "attendent"  && (
                                                  <>
                                                    <Field
                                                      as={TextField}
                                                      name={`chatbots[${index}].greetingMessage`}
                                                      variant="standard"
                                                      margin="dense"
                                                      fullWidth
                                                      multiline
                                                      error={
                                                        touched.greetingMessage &&
                                                        Boolean(errors.greetingMessage)
                                                      }
                                                      helperText={
                                                        touched.greetingMessage &&
                                                        errors.greetingMessage
                                                      }
                                                      className={classes.textField}
                                                    />
                                                    <InputLabel>{i18n.t("queueModal.bot.selectUser")}</InputLabel>
                                                    <Field
                                                        as={Select}
                                                        name={`chatbots[${index}].optUserId`}
                                                        error={touched?.chatbots?.[index]?.optUserId && 
                                                          Boolean(errors?.chatbots?.[index]?.optUserId)}
                                                        helpertext={touched?.chatbots?.[index]?.optUserId && errors?.chatbots?.[index]?.optUserId}
                                                        // value={`chatbots[${index}].optQueueId`}
                                                        className={classes.textField1}
                                                      >
                                                          {users.map(user => (
                                                            <MenuItem key={user.id} value={user.id}>
                                                              {user.name}
                                                            </MenuItem>
                                                          ))}
                                                    </Field>
                                                    <InputLabel>{"Selecione uma Fila"}</InputLabel>
                                                    <Field
                                                        as={Select}
                                                        name={`chatbots[${index}].optQueueId`}
                                                        error={touched?.chatbots?.[index]?.optQueueId && 
                                                          Boolean(errors?.chatbots?.[index]?.optQueueId)}
                                                        helpertext={touched?.chatbots?.[index]?.optQueueId && errors?.chatbots?.[index]?.optQueueId}
                                                        // value={`chatbots[${index}].optQueueId`}
                                                        className={classes.textField1}
                                                      >
                                                          {queues.map(queue => (
                                                            <MenuItem key={queue.id} value={queue.id}>
                                                              {queue.name}
                                                            </MenuItem>
                                                          ))}
                                                    </Field>
                                                  </>
                                                )} 
                                                {queue.chatbots[index].queueType === "integration"  && (
                                                  <>
                                                    <Field
                                                      as={TextField}
                                                      name={`chatbots[${index}].greetingMessage`}
                                                      variant="standard"
                                                      margin="dense"
                                                      fullWidth
                                                      multiline
                                                      error={
                                                        touched.greetingMessage &&
                                                        Boolean(errors.greetingMessage)
                                                      }
                                                      helperText={
                                                        touched.greetingMessage &&
                                                        errors.greetingMessage
                                                      }
                                                      className={classes.textField}
                                                    />
                                                    <InputLabel>{i18n.t("queueModal.bot.selectIntegration")}</InputLabel>
                                                    <Field
                                                        as={Select}
                                                        name={`chatbots[${index}].optIntegrationId`}
                                                        error={touched?.chatbots?.[index]?.optIntegrationId && 
                                                          Boolean(errors?.chatbots?.[index]?.optIntegrationId)}
                                                        helpertext={touched?.chatbots?.[index]?.optIntegrationId && errors?.chatbots?.[index]?.optIntegrationId}
                                                        // value={`chatbots[${index}].optQueueId`}
                                                        className={classes.textField1}
                                                      >
                                                          {integrations.map(integration => (
                                                            <MenuItem key={integration.id} value={integration.id}>
                                                              {integration.name}
                                                            </MenuItem>
                                                          ))}
                                                    </Field>
                                                  </>
                                                )} 
                                              {queue.chatbots[index].queueType  === "file"  && (
                                                <>
                                                  <Field
                                                    as={TextField}
                                                    name={`chatbots[${index}].greetingMessage`}
                                                    variant="standard"
                                                    margin="dense"
                                                    fullWidth
                                                    multiline
                                                    error={
                                                      touched.greetingMessage &&
                                                      Boolean(errors.greetingMessage)
                                                    }
                                                    helperText={
                                                      touched.greetingMessage &&
                                                      errors.greetingMessage
                                                    }
                                                    className={classes.textField}
                                                  />
                                                  <InputLabel>{"Selecione um Arquivo"}</InputLabel>
                                                  <Field
                                                      as={Select}
                                                      name={`chatbots[${index}].optFileId`}
                                                      error={touched?.chatbots?.[index]?.optFileId && 
                                                        Boolean(errors?.chatbots?.[index]?.optFileId)}
                                                      helpertext={touched?.chatbots?.[index]?.optFileId && errors?.chatbots?.[index]?.optFileId}
                                                      className={classes.textField1}
                                                    >
                                                      {file.map(f => (
                                                        <MenuItem key={f.id} value={f.id}>
                                                          {f.name}
                                                        </MenuItem>
                                                      ))}
                                                  </Field>
                                                </>
                                              )} 
                                              <IconButton
                                                size="small"
                                                onClick={() =>
                                                  handleSaveBot(values)
                                                }
                                                disabled={isSubmitting}
                                              >
                                                {" "}
                                                <SaveIcon />
                                              </IconButton>
                                            </div>
                                          )}

                                          <OptionsChatBot chatBotId={info.id} />
                                        </>
                                      </StepContent>
                                    )}
                                  </Step>
                                ))}

                              <Step>
                                <StepLabel
                                onClick={() => push({ name: "", value: "" })}
                                >
                                  {i18n.t("queueModal.bot.addOptions")}
                                </StepLabel>
                              </Step>
                            </Stepper>
                          </>
                        )}
                      </FieldArray>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleClose}
                      // color="secondary"
                      disabled={isSubmitting}
                      // variant="outlined"
                    >
                      {i18n.t("queueModal.buttons.cancel")}
                    </Button>
                    <Button
                      type="submit"
                      color="primary"
                      disabled={isSubmitting}
                      variant="contained"
                      className={classes.btnWrapper}
                    >
                      {queueId
                        ? `${i18n.t("queueModal.buttons.okEdit")}`
                        : `${i18n.t("queueModal.buttons.okAdd")}`}
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
          )}
          {tab === 1 && (
            <Paper style={{ padding: 20 }}>
              <SchedulesForm
                loading={false}
                onSubmit={handleSaveSchedules}
                initialValues={schedules}
                labelSaveButton={i18n.t("whatsappModal.buttons.okAdd")}
              />
            </Paper>
          )}
      </Dialog>
    </div>
  );
};

export default QueueModal;