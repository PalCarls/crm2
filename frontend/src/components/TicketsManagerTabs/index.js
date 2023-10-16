import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { Add, ClearAllRounded, DoneAll, Facebook, Group, Instagram, OfflineBolt, WhatsApp } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Badge from "@material-ui/core/Badge";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import MessageSharpIcon from "@material-ui/icons/MessageSharp";
import ClockIcon from "@material-ui/icons/AccessTime";
import IconButton from '@material-ui/core/IconButton';

import FilterListIcon from '@material-ui/icons/FilterList';

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"

import NewTicketModal from "../NewTicketModal";
import TicketsList from "../TicketsListCustom";
import TabPanel from "../TabPanel";

import { i18n } from "../../translate/i18n";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Can } from "../Can";
import TicketsQueueSelect from "../TicketsQueueSelect";

import { TagsFilter } from "../TagsFilter";
import { UsersFilter } from "../UsersFilter";
import { StatusFilter } from "../StatusFilter";
import { WhatsappsFilter } from "../WhatsappsFilter";
import api from "../../services/api";
import { Button, Snackbar } from "@material-ui/core";
import { SpeedDial, SpeedDialAction } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  ticketsWrapper: {
    position: "relative",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    overflow: "hidden",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  tabsHeader: {
    flex: "none",
    // backgroundColor: "#eee",
    backgroundColor: theme.palette.tabHeaderBackground,
  },

  settingsIcon: {
    alignSelf: "center",
    marginLeft: "auto",
    padding: 8,
  },

  tab: {
    minWidth: 120,
    width: 120,
  },

  snackbar: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: 30,
  },

  yesButton: {
    backgroundColor: '#FFF',
    color: 'rgba(0, 100, 0, 1)',
    padding: '4px 4px',
    fontSize: '1em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'darkGreen',
      color: '#FFF',
    },
    borderRadius: 30,
  },
  noButton: {
    backgroundColor: '#FFF',
    color: 'rgba(139, 0, 0, 1)',
    padding: '4px 4px',
    fontSize: '1em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: 'darkRed',
      color: '#FFF',
    },
    borderRadius: 30,
  },

  tabPanelItem: {
    minWidth: 120,
    fontSize: 11,
    marginLeft: 0,
  },

  ticketOptionsBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // background: "#fafafa",
    background: theme.palette.optionsBackground,
    padding: theme.spacing(1),
  },

  serachInputWrapper: {
    flex: 1,
    // background: "#fff",
    background: theme.palette.total,
    display: "flex",
    borderRadius: 40,
    padding: 4,
    marginRight: theme.spacing(1),
  },

  searchIcon: {
    color: "grey",
    marginLeft: 6,
    marginRight: 6,
    alignSelf: "center",
  },

  searchInput: {
    flex: 1,
    border: "none",
    borderRadius: 30,
  },

  badge: {
    // right: "-10px",
  },

  customBadge: {
    right: "-10px",
    backgroundColor: "#f44336",
    color: "#fff",
  },

  show: {
    display: "block",
  },

  hide: {
    display: "none !important",
  },

  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

const TicketsManagerTabs = ({ selectedQueuesMessage, setSelectedQueuesMessage }) => {
  const classes = useStyles();
  const history = useHistory();

  const [searchParam, setSearchParam] = useState("");
  const [tab, setTab] = useState("open");
  const [tabOpen, setTabOpen] = useState("open");
  const [newTicketModalOpen, setNewTicketModalOpen] = useState(false);
  const [showAllTickets, setShowAllTickets] = useState(false);
  const searchInputRef = useRef();
  const { user } = useContext(AuthContext);
  const { profile } = user;

  const [openCount, setOpenCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [groupingCount, setGroupingCount] = useState(0);

  const userQueueIds = user.queues.map((q) => q.id);
  const [selectedQueueIds, setSelectedQueueIds] = useState(userQueueIds || []);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedWhatsapp, setSelectedWhatsapp] = useState([]);
  const [forceSearch, setForceSearch] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [filter, setFilter] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [hidden, setHidden] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (user.profile.toUpperCase() === "ADMIN") {
      setShowAllTickets(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSelectedQueuesMessage(selectedQueueIds);

  }, [selectedQueueIds]);

  useEffect(() => {
    if (tab === "search") {
      searchInputRef.current.focus();
    }
    setForceSearch(!forceSearch)
  }, [tab]);

  
  let searchTimeout;

  const handleSearch = useCallback((e) => {
    const searchedTerm = e.target.value.toLowerCase();

    clearTimeout(searchTimeout);

    if (searchedTerm === "") {
      setSearchParam(searchedTerm);
      setForceSearch(!forceSearch)
      setTab("open");
      return;
    } else if (tab !== "search") {
      handleFilter();
      setTab("search");
    }

    searchTimeout = setTimeout(() => {
      setSearchParam(searchedTerm);
      setForceSearch(!forceSearch);
    }, 500);
  },[]);

  // const handleBack = useCallback(() => {
  //   history.push("/tickets");
  // },[history]);

  const handleSnackbarOpen = useCallback(() => {
    setSnackbarOpen(true);
  },[]);

  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  },[]);

  const handleChangeTab = useCallback((e, newValue) => {
    setTab(newValue);
  },[]);

  const handleChangeTabOpen = useCallback((e, newValue) => {
    setTabOpen(newValue);
  },[]);

  const applyPanelStyle = (status) => {
    if (tabOpen !== status) {
      return { width: 0, height: 0 };
    }
  };

  const CloseAllTicket = async () => {
    try {
      const { data } = await api.post("/tickets/closeAll", { status: tabOpen, queueIds: selectedQueueIds });
      handleSnackbarClose();
    } catch (err) {
      console.log("Error: ", err);
    }
  };


  // const handleVisibility = () => {
  //   setHidden((prevHidden) => !prevHidden);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClosed = () => {
  //   setOpen(false);
  // };

  const tooltipTitleStyle = {
    fontSize: '10px'
  };

  const handleCloseOrOpenTicket = useCallback((ticket) => {
    setNewTicketModalOpen(false);
    if (ticket !== undefined && ticket.uuid !== undefined) {
      history.push(`/tickets/${ticket.uuid}`);
    }
  },[history]);

  const handleSelectedTags = (selecteds) => {
    const tags = selecteds.map((t) => t.id);

    clearTimeout(searchTimeout);

    if (tags.length === 0) {
      setForceSearch(!forceSearch)
    } else if (tab !== "search") {
      setTab("search");
    }

    searchTimeout = setTimeout(() => {
      setSelectedTags(tags);
      setForceSearch(!forceSearch);
    }, 500);
  };

  const handleSelectedUsers = (selecteds) => {
    const users = selecteds.map((t) => t.id);

    clearTimeout(searchTimeout);

    if (users.length === 0) {
      setForceSearch(!forceSearch)
    } else if (tab !== "search") {
      setTab("search");
    }
    searchTimeout = setTimeout(() => {
      setSelectedUsers(users);
      setForceSearch(!forceSearch);
    }, 500);

  };

  const handleSelectedWhatsapps = (selecteds) => {
    const whatsapp = selecteds.map((t) => t.id);

    clearTimeout(searchTimeout);

    if (whatsapp.length === 0) {
      setForceSearch(!forceSearch)
    } else if (tab !== "search") {
      setTab("search");
    }
    searchTimeout = setTimeout(() => {
      setSelectedWhatsapp(whatsapp);
      setForceSearch(!forceSearch);
    }, 500);

  };

  const handleSelectedStatus = (selecteds) => {

    const statusFilter = selecteds.map((t) => t.status);

    clearTimeout(searchTimeout);

    if (statusFilter.length === 0) {
      setForceSearch(!forceSearch);
    } else if (tab !== "search") {
      setTab("search");
    }

    searchTimeout = setTimeout(() => {
      setSelectedStatus(statusFilter);
      setForceSearch(!forceSearch);
    }, 500);


  };

  const handleFilter = () => {
    if (filter) {
      setFilter(false);
      setTab("open")
    }
    else
      setFilter(true);
    setTab("search")
  };

  return (
    <Paper
      elevation={0}
      variant="outlined"
      className={classes.ticketsWrapper}
    >
      <Snackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={i18n.t("ticketsManager.questionCloseTicket")}
        ContentProps={{
          className: classes.snackbar,
        }}
        action={
          <>
            <Button className={classes.yesButton} size="small" onClick={CloseAllTicket}>
              {i18n.t("ticketsManager.yes")}
            </Button>
            <Button className={classes.noButton} size="small" onClick={handleSnackbarClose}>
              {i18n.t("ticketsManager.not")}
            </Button>
          </>
        }
      />
      <NewTicketModal
        modalOpen={newTicketModalOpen}
        onClose={(ticket) => {
          handleCloseOrOpenTicket(ticket);
        }}
      />
      <div className={classes.serachInputWrapper}>
        <SearchIcon className={classes.searchIcon} />
        <InputBase
          className={classes.searchInput}
          inputRef={searchInputRef}
          placeholder={i18n.t("tickets.search.placeholder")}
          type="search"
          onChange={handleSearch}
        />
        <IconButton color="primary"
          aria-label="upload picture"
          component="span"
          onClick={handleFilter}
        >
          <FilterListIcon />
        </IconButton>
      </div>

      {filter === true && (
        <>
          <TagsFilter onFiltered={handleSelectedTags} />
          <WhatsappsFilter onFiltered={handleSelectedWhatsapps} />
          <StatusFilter onFiltered={handleSelectedStatus} />
          {profile === "admin" && (
            <>
              <UsersFilter onFiltered={handleSelectedUsers} />
            </>
          )}
        </>
      )}

      <Paper elevation={0} square className={classes.tabsHeader}>
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example"
        >
          <Tab
            value={"open"}
            icon={<MoveToInboxIcon />}
            label={i18n.t("tickets.tabs.open.title")}
            classes={{ root: classes.tab }}
          />
          <Tab
            value={"closed"}
            icon={<CheckBoxIcon />}
            label={i18n.t("tickets.tabs.closed.title")}
            classes={{ root: classes.tab }}
          />
          <Tab
            value={"search"}
            icon={<SearchIcon />}
            label={i18n.t("tickets.tabs.search.title")}
            classes={{ root: classes.tab }}
          />
        </Tabs>
      </Paper>
      <Paper square elevation={0} className={classes.ticketOptionsBox}>
        <>
          <Can
            role={user.profile}
            perform="tickets-manager:showall"
            yes={() => (
              <FormControlLabel
                label={i18n.t("tickets.buttons.showAll")}
                labelPlacement="start"
                control={
                  <Switch
                    size="small"
                    checked={showAllTickets}
                    onChange={() =>
                      setShowAllTickets((prevState) => !prevState)
                    }
                    name="showAllTickets"
                    color="primary"
                  />
                }
              />
            )}
          />
          <SpeedDial
            ariaLabel="Menu Actions"
            className={classes.speedDial}
            // hidden={hidden}
            size="small"
            icon={<OfflineBolt />}

          >
            {user.profile === 'admin' && (
              <SpeedDialAction
                icon={<DoneAll style={{ color: 'green' }} />}
                className={classes.closeAllFab}
                tooltipTitle={<span style={tooltipTitleStyle}>{i18n.t("ticketsManager.buttons.close")}&nbsp;Todos</span>}
                tooltipOpen
                onClick={(event) => {
                  // handleClosed();
                  handleSnackbarOpen();
                }}
              />
            )}
            <SpeedDialAction
              icon={<Add style={{ color: '#25D366' }} />}
              tooltipTitle={<span style={tooltipTitleStyle}>{i18n.t("ticketsManager.buttons.new")}&nbsp;Ticket</span>}
              tooltipOpen
              onClick={() => {
                // handleClosed();
                setNewTicketModalOpen(true);
              }}
            />
          </SpeedDial>
        </>
        <TicketsQueueSelect
          style={{ marginLeft: 6 }}
          selectedQueueIds={selectedQueueIds}
          userQueues={user?.queues}
          onChange={(values) => {
            setSelectedQueueIds(values);
            history.push("/tickets");
          }}
        />
      </Paper>
      <TabPanel
        value={tab}
        name="open"
        className={classes.ticketsWrapper}
      >
        <Tabs
          value={tabOpen}
          onChange={handleChangeTabOpen}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >

          {/* ATENDENDO */}
          <Tab
            label={
              <Grid container alignItems="center" justifyContent="center">
                <Grid item>
                  <Badge
                    overlap="rectangular"
                    className={classes.badge}
                    badgeContent={openCount}
                    color="primary"
                  >
                    <MessageSharpIcon
                      style={{
                        fontSize: 18,
                      }}
                    />
                  </Badge>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      marginLeft: 8,
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    {i18n.t("ticketsList.assignedHeader")}
                  </Typography>
                </Grid>
              </Grid>
            }
            value={"open"}
            classes={{ root: classes.tabPanelItem }}
          />

          {/* AGUARDANDO */}
          <Tab
            label={
              <Grid container alignItems="center" justifyContent="center">
                <Grid item>
                  <Badge
                    overlap="rectangular"
                    classes={{ badge: classes.customBadge }}
                    badgeContent={pendingCount}
                    color="primary"
                  >
                    <ClockIcon
                      style={{
                        fontSize: 18,
                      }}
                    />
                  </Badge>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      marginLeft: 8,
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    {i18n.t("ticketsList.pendingHeader")}
                  </Typography>
                </Grid>
              </Grid>
            }
            value={"pending"}
            classes={{ root: classes.tabPanelItem }}
          />

          {/* GRUPOS */}
          <Tab
            label={
              <Grid container alignItems="center" justifyContent="center">
                <Grid item>
                  <Badge
                    overlap="rectangular"
                    classes={{ badge: classes.customBadge }}
                    badgeContent={groupingCount}
                    color="primary"
                  >
                    <Group
                      style={{
                        fontSize: 18,
                      }}
                    />
                  </Badge>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      marginLeft: 8,
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    {i18n.t("ticketsList.groupingHeader")}
                  </Typography>
                </Grid>
              </Grid>
            }
            value={"group"}
            classes={{ root: classes.tabPanelItem }}
          />
        </Tabs>

        <Paper className={classes.ticketsWrapper}>
          <TicketsList
            status="open"
            showAll={showAllTickets}
            selectedQueueIds={selectedQueueIds}
            updateCount={(val) => setOpenCount(val)}
            style={applyPanelStyle("open")}
            // handleChangeTab={handleChangeTabOpen}
          />
          <TicketsList
            status="pending"
            selectedQueueIds={selectedQueueIds}
            showAll={user.profile === "admin" ? showAllTickets : false}
            updateCount={(val) => setPendingCount(val)}
            style={applyPanelStyle("pending")}
            // handleChangeTab={handleChangeTabOpen}
          />
          <TicketsList
            status="group"
            showAll={showAllTickets}
            selectedQueueIds={selectedQueueIds}
            updateCount={(val) => setGroupingCount(val)}
            style={applyPanelStyle("group")}
            // handleChangeTab={handleChangeTabOpen}
          />
        </Paper>
      </TabPanel>
      <TabPanel value={tab} name="closed" className={classes.ticketsWrapper}>
        <TicketsList
          status="closed"
          showAll={showAllTickets}
          selectedQueueIds={selectedQueueIds}
          // handleChangeTab={handleChangeTabOpen}
        />
      </TabPanel>
      <TabPanel value={tab} name="search" className={classes.ticketsWrapper}>
        {profile === "admin" && (
          <>
            <TicketsList
              statusFilter={selectedStatus}
              searchParam={searchParam}
              showAll={showAllTickets}
              tags={selectedTags}
              users={selectedUsers}
              selectedQueueIds={selectedQueueIds}
              whatsappIds={selectedWhatsapp}
              forceSearch={forceSearch}
              status="search"
            />
          </>
        )}

        {profile === "user" && (
          <TicketsList
            statusFilter={selectedStatus}
            searchParam={searchParam}
            showAll={false}
            tags={selectedTags}
            selectedQueueIds={selectedQueueIds}
            whatsappIds={selectedWhatsapp}
            forceSearch={forceSearch}
            status="search"
          />
        )}
      </TabPanel>
    </Paper>
  );
};

export default TicketsManagerTabs;
