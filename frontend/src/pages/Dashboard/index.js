import React, { useContext, useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import { AppBar, Button, Card, Tab, Tabs } from "@material-ui/core";

import SpeedIcon from "@material-ui/icons/Speed";
import GroupIcon from "@material-ui/icons/Group";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PersonIcon from "@material-ui/icons/Person";
import CallIcon from "@material-ui/icons/Call";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ForumIcon from "@material-ui/icons/Forum";
import FilterListIcon from "@material-ui/icons/FilterList";
import ClearIcon from "@material-ui/icons/Clear";
import SendIcon from '@material-ui/icons/Send';
import MessageIcon from '@material-ui/icons/Message';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import TimerIcon from '@material-ui/icons/Timer';

import { makeStyles } from "@material-ui/core/styles";
import { grey, blue } from "@material-ui/core/colors";
import { toast } from "react-toastify";

import Chart from "./Chart";
import ButtonWithSpinner from "../../components/ButtonWithSpinner";

import CardCounter from "../../components/Dashboard/CardCounter";
import TabPanel from "../../components/TabPanel"
import TableAttendantsStatus from "../../components/Dashboard/TableAttendantsStatus";
import { isArray } from "lodash";

import { AuthContext } from "../../context/Auth/AuthContext";

import useDashboard from "../../hooks/useDashboard";
import useTickets from "../../hooks/useTickets";
import useUsers from "../../hooks/useUsers";
import useContacts from "../../hooks/useContacts";
import useMessages from "../../hooks/useMessages";
import { ChatsUser } from "./ChartsUser";
import ChartDonut from "./ChartDonut";

import Filters from "./Filters";
import { isEmpty } from "lodash";
import moment from "moment";
import { ChartsDate } from "./ChartsDate";
import { Avatar } from "@mui/material";
import { Score } from "@material-ui/icons";
import { number } from "yup";
import { i18n } from "../../translate/i18n";

const useStyles = makeStyles((theme) => ({
  tab: {
    paddingTop: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    height: "111px",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.padding,
    maxWidth: "1150px",
    minWidth: "xs",
  },
  nps: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.padding,
  },
  fixedHeightPaper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    height: 240,
    overflowY: "auto",
    ...theme.scrollbarStyles,
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
  iframeDashboard: {
    width: "100%",
    height: "calc(100vh - 64px)",
    border: "none",
  },
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
  customFixedHeightPaper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: 120,
  },
  customFixedHeightPaperLg: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
  },
  card1: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#0094bb",
    color: "#eee",
  },
  card2: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#748e9d",
    color: "#eee",
  },
  card3: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#7f78e6",
    color: "#eee",
  },
  card4: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#cc991b",
    color: "#eee",
  },
  card5: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#434243",
    color: "#eee",
  },
  card6: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#b87d77",
    color: "#eee",
  },
  card7: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#7bc780",
    color: "#eee",
  },
  card8: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#b05c38",
    color: "#eee",
  },
  card9: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#bd3c58",
    color: "#eee",
  },
  fixedHeightPaper2: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  cardContainer4: {
    backgroundColor: "#fbe7edff",
    width: "350px",
    height: "111px",
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    minHeight: "48px",
  },
  cardContainer5: {
    backgroundColor: "#e6f8f3ff",
    width: "350px",
    height: "111px",
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    minHeight: "48px",
  },
  cardContainer6: {
    backgroundColor: "#eef1fdff",
    width: "350px",
    height: "111px",
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    minHeight: "48px",
  },
  cardContainer7: {
    backgroundColor: "#eef1fdff",
    //width: "350px",
    height: "111px",
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    minHeight: "48px",
    justifyItems: "center",
  },
  cardAvatar4: {
    color: "#fa7070ff",
    backgroundColor: "#fbe7edff",
    width: "93px",
    height: "100px",
    display: "flex",
    fontSize: "71px",
  },
  cardAvatar5: {
    color: "#0abb87ff",
    backgroundColor: "#e6f8f3ff",
    width: "93px",
    height: "100px",
    display: "flex",
    fontSize: "71px",
  },
  cardAvatar6: {
    color: "#5578eb",
    backgroundColor: "#eef1fdff",
    width: "93px",
    height: "100px",
    display: "flex",
    fontSize: "71px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [counters, setCounters] = useState({});
  const [attendants, setAttendants] = useState([]);
  const [filterType, setFilterType] = useState(1);
  const [period, setPeriod] = useState(0);
  const [dateFrom, setDateFrom] = useState(moment("1", "D").format("YYYY-MM-DD"));
  const [dateTo, setDateTo] = useState(moment().format("YYYY-MM-DD"));
  const [loading, setLoading] = useState(false);
  const { find } = useDashboard();

  //FILTROS NPS
  const [tab, setTab] = useState("Indicadores");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedQueues, setSelectedQueues] = useState([]);

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let now = `${year}-${month < 10 ? `0${month}` : `${month}`}-${date < 10 ? `0${date}` : `${date}`}`;

  const [showFilter, setShowFilter] = useState(false);
  const [dateStartTicket, setDateStartTicket] = useState(now);
  const [dateEndTicket, setDateEndTicket] = useState(now);
  const [queueTicket, setQueueTicket] = useState(false);
  const [fetchDataFilter, setFetchDataFilter] = useState(false);

  const { user } = useContext(AuthContext);
  var userQueueIds = [];

  if (user.queues && user.queues.length > 0) {
    userQueueIds = user.queues.map((q) => q.id);
  }

  useEffect(() => {
    async function firstLoad() {
      await fetchData();
    }
    setTimeout(() => {
      firstLoad();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchDataFilter]);

  async function fetchData() {
    setLoading(true);

    let params = {};

    if (period > 0) {
      params = {
        days: period,
      };
    }
    
    if (!isEmpty(dateStartTicket) && moment(dateStartTicket).isValid()) {
      params = {
        ...params,
        date_from: moment(dateStartTicket).format("YYYY-MM-DD"),
      };
    }

    if (!isEmpty(dateEndTicket) && moment(dateEndTicket).isValid()) {
      params = {
        ...params,
        date_to: moment(dateEndTicket).format("YYYY-MM-DD"),
      };
    }

    if (Object.keys(params).length === 0) {
      toast.error("Parametrize o filtro");
      setLoading(false);
      return;
    }

    const data = await find(params);

    console.log(data)
    setCounters(data.counters);
    if (isArray(data.attendants)) {
      setAttendants(data.attendants);
    } else {
      setAttendants([]);
    }

    setLoading(false);
  }

  const handleSelectedUsers = (selecteds) => {
    const users = selecteds.map((t) => t.id);
    setSelectedUsers(users);
  };


  const handleChangeTab = (e, newValue) => {
    setTab(newValue);
  };

  function formatTime(minutes) {
    return moment()
      .startOf("day")
      .add(minutes, "minutes")
      .format("HH[h] mm[m]");
  }

  const GetUsers = () => {
    let count;
    let userOnline = 0;
    attendants.forEach(user => {
      if (user.online === true) {
        userOnline = userOnline + 1
      }
    })
    count = userOnline === 0 ? 0 : userOnline;
    return count;
  };

  const GetContacts = (all) => {
    let props = {};
    if (all) {
      props = {};
    } else {
      props = {
        dateStart: dateStartTicket,
        dateEnd: dateEndTicket,
      };
    }
    const { count } = useContacts(props);
    return count;
  };

  const GetMessages = (all, fromMe) => {
    let props = {};
    if (all) {
      if (fromMe) {
        props = {
          fromMe: true
        };
      } else {
        props = {
          fromMe: false
        };
      }
    } else {
      if (fromMe) {
        props = {
          fromMe: true,
          dateStart: dateStartTicket,
          dateEnd: dateEndTicket,
        };
      } else {
        props = {
          fromMe: false,
          dateStart: dateStartTicket,
          dateEnd: dateEndTicket,
        };
      }
    }
    const { count } = useMessages(props);
    return count;
  };

  function toggleShowFilter() {
    setShowFilter(!showFilter);
  }

  return (
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3} className={classes.container}>

          {/* FILTROS */}
          <Grid item xs={12}>
            <Button
              onClick={toggleShowFilter}
              style={{ float: "right" }}
              color="primary"
            >
              {!showFilter ? (
                <FilterListIcon />
              ) : (
                <ClearIcon />
              )}
            </Button>
          </Grid>

          {showFilter && (
            <Filters
              classes={classes}
              setDateStartTicket={setDateStartTicket}
              setDateEndTicket={setDateEndTicket}
              dateStartTicket={dateStartTicket}
              dateEndTicket={dateEndTicket}
              setQueueTicket={setQueueTicket}
              queueTicket={queueTicket}
              fetchData={setFetchDataFilter}
            />
          )}

          <AppBar position="static">
            <Grid container width="100%" >
              <Tabs
                value={tab}
                onChange={handleChangeTab}                
                aria-label="primary tabs example"
                variant="fullWidth"
              >
                <Tab value="Indicadores" label={i18n.t("dashboard.tabs.indicators")} />
                <Tab value="NPS" label={i18n.t("dashboard.tabs.assessments")} />
                <Tab value="Atendentes" label={i18n.t("dashboard.tabs.attendants")} />
              </Tabs>
            </Grid>
          </AppBar>
          <TabPanel
            className={classes.container}
            value={tab}
            name={"Indicadores"}
          >
            <Container maxWidth="xl" className={classes.container}>
              <Grid container spacing={3}>
                {/* EM ATENDIMENTO */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.card1}
                    style={{ overflow: "hidden" }}
                    elevation={4}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Typography
                          component="h3"
                          variant="h6"
                          paragraph
                        >
                          {i18n.t("dashboard.cards.inAttendance")}
                        </Typography>
                        <Grid item>
                          <Typography
                            component="h1"
                            variant="h4"
                          >
                            {counters.supportHappening}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={2}>
                        <CallIcon
                          style={{
                            fontSize: 100,
                            color: "#0b708c",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* AGUARDANDO */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.card2}
                    style={{ overflow: "hidden" }}
                    elevation={6}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Typography
                          component="h3"
                          variant="h6"
                          paragraph
                        >
                         {i18n.t("dashboard.cards.waiting")}
                        </Typography>
                        <Grid item>
                          <Typography
                            component="h1"
                            variant="h4"
                          >
                            {counters.supportPending}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <HourglassEmptyIcon
                          style={{
                            fontSize: 100,
                            color: "#47606e",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* ATENDENTES ATIVOS */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.card6}
                    style={{ overflow: "hidden" }}
                    elevation={6}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Typography
                          component="h3"
                          variant="h6"
                          paragraph
                        >
                          {i18n.t("dashboard.cards.activeAttendants")}
                        </Typography>
                        <Grid item>
                          <Typography
                            component="h1"
                            variant="h4"
                          >
                            {GetUsers()}
                            <span
                              style={{ color: "#805753" }}
                            >
                              /{attendants.length}
                            </span>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <RecordVoiceOverIcon
                          style={{
                            fontSize: 100,
                            color: "#805753",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* FINALIZADOS */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.card3}
                    style={{ overflow: "hidden" }}
                    elevation={6}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Typography
                          component="h3"
                          variant="h6"
                          paragraph
                        >
                          {i18n.t("dashboard.cards.finalized")} 
                        </Typography>
                        <Grid item>
                          <Typography
                            component="h1"
                            variant="h4"
                          >
                            {counters.supportFinished}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <CheckCircleIcon
                          style={{
                            fontSize: 100,
                            color: "#5852ab",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* NOVOS CONTATOS */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.card4}
                    style={{ overflow: "hidden" }}
                    elevation={6}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Typography
                          component="h3"
                          variant="h6"
                          paragraph
                        >
                          {i18n.t("dashboard.cards.newContacts")}
                        </Typography>
                        <Grid item>
                          <Typography
                            component="h1"
                            variant="h4"
                          >
                            {GetContacts(true)}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <GroupAddIcon
                          style={{
                            fontSize: 100,
                            color: "#8c6b19",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* MINHAS MENSAGEM RECEBIDAS */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.card5}
                    style={{ overflow: "hidden" }}
                    elevation={6}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Typography
                          component="h3"
                          variant="h6"
                          paragraph
                        >
                          {i18n.t("dashboard.cards.totalReceivedMessages")}
                        </Typography>
                        <Grid item>
                          <Typography
                            component="h1"
                            variant="h4"
                          >
                            {GetMessages(false, false)}
                            <span
                              style={{ color: "#787878" }}
                            >
                              /{GetMessages(true, false)}
                            </span>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <MessageIcon
                          style={{
                            fontSize: 100,
                            color: "#333133",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* MINHAS MENSAGEM ENVIADAS */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.card7}
                    style={{ overflow: "hidden" }}
                    elevation={6}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Typography
                          component="h3"
                          variant="h6"
                          paragraph
                        >
                          {i18n.t("dashboard.cards.totalSentMessages")}
                        </Typography>
                        <Grid item>
                          <Typography
                            component="h1"
                            variant="h4"
                          >
                            {GetMessages(false, true)}
                            <span
                              style={{ color: "#558a59" }}
                            >
                              /{GetMessages(true, true)}
                            </span>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <SendIcon
                          style={{
                            fontSize: 100,
                            color: "#558a59",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* T.M. DE ATENDIMENTO */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.card8}
                    style={{ overflow: "hidden" }}
                    elevation={6}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Typography
                          component="h3"
                          variant="h6"
                          paragraph
                        >
                          {i18n.t("dashboard.cards.averageServiceTime")}
                        </Typography>
                        <Grid item>
                          <Typography
                            component="h1"
                            variant="h4"
                          >
                            {formatTime(counters.avgSupportTime)}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <AccessAlarmIcon
                          style={{
                            fontSize: 100,
                            color: "#7a3f26",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* T.M. DE ESPERA */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.card9}
                    style={{ overflow: "hidden" }}
                    elevation={6}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Typography
                          component="h3"
                          variant="h6"
                          paragraph
                        >
                          {i18n.t("dashboard.cards.averageWaitingTime")}
                        </Typography>
                        <Grid item>
                          <Typography
                            component="h1"
                            variant="h4"
                          >
                            {formatTime(counters.avgWaitTime)}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <TimerIcon
                          style={{
                            fontSize: 100,
                            color: "#8a2c40",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </TabPanel>

          <TabPanel
            className={classes.container}
            value={tab}
            name={"NPS"}
          >
            <Grid className={classes.container}>
              <Grid container width="100%" spacing={2}>

                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={3} >
                    <ChartDonut
                      data={[`{'name': 'Promotores', 'value': ${counters.npsPromotersPerc | 100}}`,
                            `{'name': 'Detratores', 'value': ${counters.npsDetractorsPerc | 0}}`,
                            `{'name': 'Neutros', 'value': ${counters.npsPassivePerc | 0}}`
                          ]}
                      value={counters.npsScore | 0}
                      title="Score"
                      color={(parseInt(counters.npsPromotersPerc | 0 ) +  parseInt(counters.npsDetractorsPerc   | 0 ) + parseInt(counters.npsPassivePerc  | 0 )) === 0 ? ["#918F94"]:["#2EA85A","#F73A2C","#F7EC2C"]}
                    />
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={3}>
                    <ChartDonut
                      title={i18n.t("dashboard.assessments.prosecutors")}
                      value={counters.npsPromotersPerc | 0}
                      data={[`{'name': 'Promotores', 'value': 100}`]}
                      color={["#2EA85A"]}
                    />
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={3} >
                    <ChartDonut
                      data={[`{'name': 'Neutros', 'value': 100}`]}
                      title={i18n.t("dashboard.assessments.neutral")}
                      value={counters.npsPassivePerc | 0}
                      color={["#F7EC2C"]}
                    />
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={3}>
                    <ChartDonut
                      data={[`{'name': 'Detratores', 'value': 100}`]}
                      title={i18n.t("dashboard.assessments.detractors")}
                      value={counters.npsDetractorsPerc | 0}
                      color={["#F73A2C"]}
                    />
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={12}>
                  <Paper elevation={3}>
                    <Typography
                            component="h3"
                            variant="h6"
                            paragraph
                            style={{marginLeft: "10px"}}
                          >
                            {i18n.t("dashboard.assessments.totalCalls")}: {counters.tickets} <br></br>
                            {i18n.t("dashboard.assessments.callsWaitRating")}: {counters.waitRating} <br></br>
                            {i18n.t("dashboard.assessments.callsWithoutRating")}: {counters.withoutRating} <br></br>
                            {i18n.t("dashboard.assessments.ratedCalls")}: {counters.withRating} <br></br>
                            {i18n.t("dashboard.assessments.evaluationIndex")}: {Number(counters.percRating/100).toLocaleString(undefined,{style:'percent'})} <br></br>
                    </Typography>
                  </Paper>
                </Grid>

              </Grid>
            </Grid>

          </TabPanel>
          
          <TabPanel
            className={classes.container}
            value={tab}
            name={"Atendentes"}
          >
            <Container width="100%" className={classes.container}>
              <Grid container width="100%">
                {/* CARD DE GRAFICO */}
                {/* <Grid item xs={12}>
                  <Paper
                    elevation={6}
                    className={classes.fixedHeightPaper}
                  >
                    <Chart
                      dateStartTicket={dateStartTicket}
                      dateEndTicket={dateEndTicket}
                      queueTicket={queueTicket}
                    />
                  </Paper>
                </Grid> */}

                {/* INFO DOS USUARIOS */}
                <Grid item xs={12}>
                  {attendants.length ? (
                    <TableAttendantsStatus
                      attendants={attendants}
                      loading={loading}
                    />
                  ) : null}
                </Grid>

                {/* TOTAL DE ATENDIMENTOS POR USUARIO */}
                <Grid item xs={12}>
                  <Paper className={classes.fixedHeightPaper2}>
                    <ChatsUser />
                  </Paper>
                </Grid>

                {/* TOTAL DE ATENDIMENTOS */}
                <Grid item xs={12}>
                  <Paper className={classes.fixedHeightPaper2}>
                    <ChartsDate />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </TabPanel>
        </Grid>
      </Container >
    </div >
  );
};

export default Dashboard;
