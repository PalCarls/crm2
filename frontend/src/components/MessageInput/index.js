 	import React, {
		useState,
		useEffect,
		useContext,
		useRef
	} from "react";
  import { useParams } from "react-router-dom";
  import "emoji-mart/css/emoji-mart.css";
  import { Picker } from "emoji-mart";
  import { isNil } from "lodash";
  import {
	CircularProgress,
	ClickAwayListener,
	IconButton,
	InputBase,
	makeStyles,
	Paper,
	FormControlLabel,
	Hidden,
	Menu,
	MenuItem,
	Switch,
	Grid,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Tooltip,
	Fab
  } from "@material-ui/core";
  import { blue, deepPurple, green, pink, purple } from "@material-ui/core/colors";
  import {
	AttachFile,
	Cancel,
	CheckCircleOutline,
	Clear,
	Comment,
	Create,
	Description,
	HighlightOff,
	Mic,
	Mood,
	MoreVert,
	Send,
	PermMedia, 
	Person
  } from "@material-ui/icons";
  import AddIcon from "@material-ui/icons/Add";
  import { CameraAlt } from "@material-ui/icons";
  import MicRecorder from "mic-recorder-to-mp3";
  import clsx from "clsx";
  import { ReplyMessageContext } from "../../context/ReplyingMessage/ReplyingMessageContext";
  import { AuthContext } from "../../context/Auth/AuthContext";
  import { i18n } from "../../translate/i18n";
  import { useLocalStorage } from "../../hooks/useLocalStorage";
  import toastError from "../../errors/toastError";
  import api from "../../services/api";
  import RecordingTimer from "./RecordingTimer";
  
  import useQuickMessages from "../../hooks/useQuickMessages";
  import { isString, isEmpty, isObject, has } from "lodash";
  import ContactSendModal from "../ContactSendModal";
  import CameraModal from "../CameraModal";

  const Mp3Recorder = new MicRecorder({ bitRate: 128 });
  
  const useStyles = makeStyles((theme) => ({
	mainWrapper: {
	  background: "#eee",
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center",
	  borderTop: "1px solid rgba(0, 0, 0, 0.12)",
	  [theme.breakpoints.down("sm")]: {
		position: "fixed",
		bottom: 0,
		width: "100%",
	  },
	},
	avatar: {
	  width: "50px",
	  height: "50px",
	  borderRadius: "25%"
	},
	dropInfo: {
	  background: "#eee",
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center",
	  width: "100%",
	  padding: 15,
	  left: 0,
	  right: 0,
	},
	dropInfoOut: {
	  display: "none",
	},
	gridFiles: {
	  maxHeight: "100%",
	  overflow: "scroll",
	},
	newMessageBox: {
	  background: theme.palette.background.default,
	  width: "100%",
	  display: "flex",
	  padding: "7px",
	  alignItems: "center",
	},
	messageInputWrapper: {
	  padding: 6,
	  marginRight: 7,
	  background: theme.palette.background.paper,
	  display: "flex",
	  borderRadius: 20,
	  flex: 1,
	  position: "relative",
	},
	messageInput: {
	  paddingLeft: 10,
	  flex: 1,
	  border: "none"
	},
	sendMessageIcons: {
	  color: "grey",
	},
	uploadInput: {
	  display: "none",
	},
	viewMediaInputWrapper: {
	  maxHeight: "80%",
	  display: "flex",
	  padding: "10px 13px",
	  position: "relative",
	  justifyContent: "space-between",
	  alignItems: "center",
	  backgroundColor: "#eee",
	  borderTop: "1px solid rgba(0, 0, 0, 0.12)",
	},
	emojiBox: {
	  position: "absolute",
	  bottom: 63,
	  width: 40,
	  borderTop: "1px solid #e8e8e8",
	},
	circleLoading: {
	  color: green[500],
	  opacity: "70%",
	  position: "absolute",
	  top: "20%",
	  left: "50%",
	  marginLeft: -12,
	},
	audioLoading: {
	  color: green[500],
	  opacity: "70%",
	},
	recorderWrapper: {
	  display: "flex",
	  alignItems: "center",
	  alignContent: "middle",
	},
	cancelAudioIcon: {
	  color: "red",
	},
	sendAudioIcon: {
	  color: "green",
	},
	replyginMsgWrapper: {
	  display: "flex",
	  width: "100%",
	  alignItems: "center",
	  justifyContent: "center",
	  paddingTop: 8,
	  paddingLeft: 73,
	  paddingRight: 7,
	},
	replyginMsgContainer: {
	  flex: 1,
	  marginRight: 5,
	  overflowY: "hidden",
	  backgroundColor: "rgba(0, 0, 0, 0.05)",
	  borderRadius: "7.5px",
	  display: "flex",
	  position: "relative",
	},
	replyginMsgBody: {
	  padding: 10,
	  height: "auto",
	  display: "block",
	  whiteSpace: "pre-wrap",
	  overflow: "hidden",
	},
	replyginContactMsgSideColor: {
	  flex: "none",
	  width: "4px",
	  backgroundColor: "#35cd96",
	},
	replyginSelfMsgSideColor: {
	  flex: "none",
	  width: "4px",
	  backgroundColor: "#6bcbef",
	},
	messageContactName: {
	  display: "flex",
	  color: "#6bcbef",
	  fontWeight: 500,
	},
	messageQuickAnswersWrapper: {
	  margin: 0,
	  position: "absolute",
	  bottom: "50px",
	  background: theme.palette.background.default,
	  padding: 0,
	  border: "none",
	  left: 0,
	  width: "100%",
	  "& li": {
		listStyle: "none",
		"& a": {
		  display: "block",
		  padding: "8px",
		  textOverflow: "ellipsis",
		  overflow: "hidden",
		  maxHeight: "30px",
		  "&:hover": {
			background: theme.palette.background.paper,
			cursor: "pointer",
		  },
		},
	  },
	},
	invertedFabMenu: {
		border: 'none',
		borderRadius: 0, // Define o raio da borda para 0 para remover qualquer borda
		boxShadow: 'none', // Remove a sombra
		padding: theme.spacing(1),
		backgroundColor: 'transparent',
		color: 'grey',
		'&:hover': {
		  backgroundColor: 'transparent',
		},
	  },
	  invertedFabMenuMP: {
		border: 'none',
		borderRadius: 0, // Define o raio da borda para 0 para remover qualquer borda
		boxShadow: 'none', // Remove a sombra
		width: theme.spacing(4), // Ajuste o tamanho de acordo com suas preferências
		height: theme.spacing(4),
		backgroundColor: 'transparent',
		color: blue[800],
		'&:hover': {
		  backgroundColor: 'transparent',
		},
	  },
	  invertedFabMenuCont: {
		border: 'none',
		borderRadius: 0, // Define o raio da borda para 0 para remover qualquer borda
		boxShadow: 'none', // Remove a sombra
		minHeight: 'auto',
		width: theme.spacing(4), // Ajuste o tamanho de acordo com suas preferências
		height: theme.spacing(4),
		backgroundColor: 'transparent',
		color: blue[500],
		'&:hover': {
		  backgroundColor: 'transparent',
		},
	  },
	  invertedFabMenuDoc: {
		border: 'none',
		borderRadius: 0, // Define o raio da borda para 0 para remover qualquer borda
		boxShadow: 'none', // Remove a sombra
		width: theme.spacing(4), // Ajuste o tamanho de acordo com suas preferências
		height: theme.spacing(4),
		backgroundColor: 'transparent',
		color: "#7f66ff",
		'&:hover': {
		  backgroundColor: 'transparent',
		},
	  },
	  invertedFabMenuCamera: {
		border: 'none',
		borderRadius: 0, // Define o raio da borda para 0 para remover qualquer borda
		boxShadow: 'none', // Remove a sombra
		width: theme.spacing(4), // Ajuste o tamanho de acordo com suas preferências
		height: theme.spacing(4),
		backgroundColor: 'transparent',
		color: pink[500],
		'&:hover': {
		  backgroundColor: 'transparent',
		},
	  },
  }));
  
  const MessageInput = ({ ticketId, ticketStatus }) => {
	const classes = useStyles();
	const [medias, setMedias] = useState([]);
	const [ medias2, setMedias2] = useState([]);

	const [inputMessage, setInputMessage] = useState("");
	const [showEmoji, setShowEmoji] = useState(false);
	const [loading, setLoading] = useState(false);
	const [recording, setRecording] = useState(false);
	const [quickAnswers, setQuickAnswer] = useState([]);
	const [typeBar, setTypeBar] = useState(false);
	const inputRef = useRef();
	const [onDragEnter, setOnDragEnter] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const { setReplyingMessage, replyingMessage } = useContext(ReplyMessageContext);
	const { user } = useContext(AuthContext);
	const [signMessagePar] = useLocalStorage("sendSignMessage", true);
	const [signMessage, setSignMessage] = useState(true);
	const [privateMessage, setPrivateMessage] = useState(false);
	const [senVcardModalOpen, setSenVcardModalOpen] = useState(false);
  
	const { list: listQuickMessages } = useQuickMessages();
  
	useEffect(() => {
	  inputRef.current.focus();
	}, [replyingMessage]);
  
	useEffect(() => {
	  inputRef.current.focus();
	  return () => {
		setInputMessage("");
		setShowEmoji(false);
		setMedias([]);
		setReplyingMessage(null);
		setSignMessage(true);
		setPrivateMessage(false);
	  };
	}, [ticketId, setReplyingMessage]);
  
	useEffect(() => {
	  setTimeout(() => {
		setOnDragEnter(false);
	  }, 10000);
	  // eslint-disable-next-line
	}, [onDragEnter === true]);
  
	const capitalizeFirstLetter = (string) => {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}
  
	const handleChangeInput = (e) => {
	  setInputMessage(e.target.value);
	};

	const handlePrivateMessage = (e) => {
		setPrivateMessage(!privateMessage);
	  };
  
	const handleQuickAnswersClick = (value) => {
	  setInputMessage("");
	  setInputMessage(value);
	  setTypeBar(false);
	};
  
	const handleAddEmoji = (e) => {
	  let emoji = e.native;
	  setInputMessage((prevState) => prevState + emoji);
	};
  
	const [modalCameraOpen, setModalCameraOpen] = useState(false);

	const handleCapture = (imageData) => {
		if (imageData){
			handleUploadCamera(imageData);
		}	
	};
	

	const handleChangeMedias = (e) => {
	  if (!e.target.files) {
		return;
	  }
	  const selectedMedias = Array.from(e.target.files);
	  setMedias(selectedMedias);	 
	};
  
	const handleChangeSign = (e) => {
		setSignMessage(!signMessage);
	};
	
	const handleInputPaste = (e) => {
	  if (e.clipboardData.files[0]) {
		const selectedMedias = Array.from(e.clipboardData.files);
		setMedias(selectedMedias);
	  }
	};
  
	const handleInputDrop = (e) => {
	  e.preventDefault();
	  if (e.dataTransfer.files[0]) {
		const selectedMedias = Array.from(e.dataTransfer.files);
		setMedias(selectedMedias);
	  }
	};
  
	const handleUploadMedia = async (e) => {
		setLoading(true);
		e.preventDefault();

		// Certifique-se de que a variável medias esteja preenchida antes de continuar
		if (!medias.length) {
			console.log("Nenhuma mídia selecionada.");
			setLoading(false);
			return;
		  }
		const formData = new FormData();
		formData.append("fromMe", true);
		medias.forEach((media) => {
		  formData.append("medias", media);
		  privateMessage ?
			formData.append("body", `\u200d`)
			:
			formData.append("body", "")
		}		
		);
	
		try {
		  await api.post(`/messages/${ticketId}`, formData);
		} catch (err) {
		  toastError(err);
		}
	
		setLoading(false);
		setMedias([]);
		setPrivateMessage(false);
	};
	
	const handleSendContatcMessage = async vcard => {
		setSenVcardModalOpen(false);
		setLoading(true);
		
		if (isNil(vcard)) {
			setLoading(false);
			return
		}

		const message = {
			read: 1,
			fromMe: true,
			mediaUrl: "",
			body: null,
			quotedMsg: replyingMessage,
			isPrivate: privateMessage,
			vCard: vcard
		};
		try {
			await api.post(`/messages/${ticketId}`, message);
			} catch (err) {
			toastError(err);
			}
		
			setInputMessage("");
			setShowEmoji(false);
			setLoading(false);
			setReplyingMessage(null);
			setPrivateMessage(false);
	}
	

	const handleSendMessage = async () => {
		if (inputMessage.trim() === "") return;
		setLoading(true);
	
		const userName = privateMessage ? `${user.name} - Mensagem Privada`: user.name;
	
		const message = {
		  read: 1,
		  fromMe: true,
		  mediaUrl: "",
		  body: signMessage
			? `*${userName}:*\n${inputMessage.trim()}`
			: inputMessage.trim(),
		  quotedMsg: replyingMessage,
		  isPrivate: privateMessage
		};

		try {
		  await api.post(`/messages/${ticketId}`, message);
		} catch (err) {
		  toastError(err);
		}
	
		setInputMessage("");
		setShowEmoji(false);
		setLoading(false);
		setReplyingMessage(null);
		setPrivateMessage(false);
		handleMenuItemClick();
	  };
  
	const handleStartRecording = async () => {
	  setLoading(true);
	  try {
		await navigator.mediaDevices.getUserMedia({ audio: true });
		await Mp3Recorder.start();
		setRecording(true);
		setLoading(false);
	  } catch (err) {
		toastError(err);
		setLoading(false);
	  }
	};
  
	useEffect(() => {
		async function fetchData() {
		const companyId = localStorage.getItem("companyId");
		const messages = await listQuickMessages({ companyId, userId: user.id });
		const options = messages.map((m) => {
			let truncatedMessage = m.message;
			if (isString(truncatedMessage) && truncatedMessage.length > 35) {
			truncatedMessage = m.message.substring(0, 35) + "...";
			}
			return {
			value: m.message,
			label: `/${m.shortcode} - ${truncatedMessage}`,
			};
		});
		setQuickAnswer(options);
		}
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);	
  
	useEffect(() => {
		if (
		  isString(inputMessage) &&
		  !isEmpty(inputMessage) &&
		  inputMessage.length >= 1
		) {
		  const firstWord = inputMessage.charAt(0);

		  if (firstWord === "/") {
		  setTypeBar(firstWord.indexOf("/") > -1);
	
		  const filteredOptions = quickAnswers.filter(
			(m) => m.label.indexOf(inputMessage) > -1
		  );
		  setTypeBar(filteredOptions);
		  } else { setTypeBar(false)}
		} else {
			setTypeBar(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [inputMessage]);

	const disableOption = () => {
		return loading || recording || (ticketStatus !== "open" && ticketStatus !== "group");
	};
	
	const handleUploadCamera = async (blob) => {
		setLoading(true);
		try {

		 const formData = new FormData();
		  const filename = `${new Date().getTime()}.png`;
		  formData.append("medias", blob, filename);
		  formData.append("body", privateMessage ? `\u200d` : "");
		  formData.append("fromMe", true);
	
		  await api.post(`/messages/${ticketId}`, formData);
		} catch (err) {
			toastError(err);
			setLoading(false);
		}
		setLoading(false);
	};

	const handleUploadAudio = async () => {
    setLoading(true);
    try {
      const [, blob] = await Mp3Recorder.stop().getMp3();
      if (blob.size < 10000) {
        setLoading(false);
        setRecording(false);
        return;
      }

      const formData = new FormData();
      const filename = `audio-record-site-${new Date().getTime()}.mp3`;
      formData.append("medias", blob, filename);
      formData.append("body", filename);
      formData.append("fromMe", true);

      await api.post(`/messages/${ticketId}`, formData);
    } catch (err) {
      toastError(err);
    }

    setRecording(false);
    setLoading(false);
  };
  
	const handleCancelAudio = async () => {
	  try {
		await Mp3Recorder.stop().getMp3();
		setRecording(false);
	  } catch (err) {
		toastError(err);
	  }
	};
  
	const handleOpenMenuClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleMenuItemClick = (event) => {
	  setAnchorEl(null);
	};
  
	const handleSendContactModalOpen = async () => {
		handleMenuItemClick();
		setSenVcardModalOpen(true);
	}

	const handleCameraModalOpen = async () => {
		handleMenuItemClick();
		setModalCameraOpen(true);
	}
	const renderReplyingMessage = (message) => {
	  return (
		<div className={classes.replyginMsgWrapper}>
		  <div className={classes.replyginMsgContainer}>
			<span
			  className={clsx(classes.replyginContactMsgSideColor, {
				[classes.replyginSelfMsgSideColor]: !message.fromMe,
			  })}
			></span>
			<div className={classes.replyginMsgBody}>
			  {!message.fromMe && (
				<span className={classes.messageContactName}>
				  {message.contact?.name}
				</span>
			  )}
			  {message.body}
			</div>
		  </div>
		  <IconButton
			aria-label="showRecorder"
			component="span"
			disabled={disableOption()}
			onClick={() => setReplyingMessage(null)}
		  >
			<Clear className={classes.sendMessageIcons} />
		  </IconButton>
		</div>
	  );
	};
	
	
	if (medias.length > 0)
	  return (
		<Paper
		  elevation={0}
		  square
		  className={classes.viewMediaInputWrapper}
		  onDragEnter={() => setOnDragEnter(true)}
		  onDrop={(e) => handleInputDrop(e)}
		>
		  <IconButton
			aria-label="cancel-upload"
			component="span"
			onClick={(e) => setMedias([])}
		  >
			<Cancel className={classes.sendMessageIcons} />
		  </IconButton>
  
		  {loading ? (
			<div>
			  <CircularProgress className={classes.circleLoading} />
			</div>
		  ) : (
			<Grid item className={classes.gridFiles}>
			  <Typography variant="h6" component="div">
				{i18n.t("uploads.titles.titleFileList")} ({medias.length})
			  </Typography>
			  <List>
				{medias.map((value, index) => {
				  return (
					<ListItem key={index}>
					  <ListItemAvatar>
						<Avatar className={classes.avatar} alt={value.name} src={URL.createObjectURL(value)} />
					  </ListItemAvatar>
					  <ListItemText
						primary={`${value.name}`}
						secondary={`${parseInt(value.size / 1024)} kB`}
					  />
					</ListItem>
				  );
				})}
			  </List>
			  <InputBase
				style={{ width: "0", height: "0" }}
				inputRef={function (input) {
				  if (input != null) {
					input.focus();
				  }
				}}
				onKeyPress={(e) => {
				  if (e.key === "Enter") {
					handleUploadMedia(e);
				  }
				}}
				defaultValue={medias[0].name}
			  />
			</Grid>
		  )}
		  <IconButton
			aria-label="send-upload"
			component="span"
			onClick={handleUploadMedia}
			disabled={loading}
		  >
			<Send className={classes.sendMessageIcons} />
		  </IconButton>
		</Paper>
	  );
	else {
	  return (
		<>
		<CameraModal
			isOpen={modalCameraOpen}
			onRequestClose={() => setModalCameraOpen(false)}
			onCapture={handleCapture}
      	/>
		<ContactSendModal
			modalOpen={senVcardModalOpen}
			onClose={(c) => {
				handleSendContatcMessage(c);
			}}
		/>
		<Paper
		  square
		  elevation={0}
		  className={classes.mainWrapper}
		  onDragEnter={() => setOnDragEnter(true)}
		  onDrop={(e) => handleInputDrop(e)}
		>
		  {replyingMessage && renderReplyingMessage(replyingMessage)}
		  <div className={classes.newMessageBox}>
			<Hidden only={["sm", "xs"]}>
			  <IconButton
				aria-label="emojiPicker"
				component="span"
				disabled={disableOption()}
				onClick={(e) => setShowEmoji((prevState) => !prevState)}
			  >
				<Mood className={classes.sendMessageIcons} />
			  </IconButton>
			  {showEmoji ? (
				<div className={classes.emojiBox}>
				  <ClickAwayListener onClickAway={(e) => setShowEmoji(true)}>
					<Picker
					  perLine={16}
					  theme={"dark"}
					  i18n={i18n}
					  showPreview={true}
					  showSkinTones={false}
					  onSelect={handleAddEmoji}
					/>
				  </ClickAwayListener>
				</div>
			  ) : null}
  
			  {/* <input
				multiple
				type="file"
				id="upload-button"
				disabled={disableOption()}
				className={classes.uploadInput}
				onChange={handleChangeMedias}
			  />
			  <label htmlFor="upload-button"> */}
			<Fab className={classes.invertedFabMenu} onClick={handleOpenMenuClick}>
				<AddIcon />
			</Fab>
				<Menu
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleMenuItemClick}
					id="simple-menu"
				>	
					<MenuItem onClick={handleMenuItemClick}>
						<input
							multiple
							type="file"
							id="upload-img-button"
							accept="image/*, video/*, audio/* "
							// disabled={disableOption()}
							className={classes.uploadInput}
							onChange={handleChangeMedias}
						/>
						<label htmlFor="upload-img-button">
							<Fab 
								aria-label="upload-img"
								component="span"
								className={classes.invertedFabMenuMP}							
							>
								<PermMedia />
							</Fab>
							{i18n.t("messageInput.type.imageVideo")}
						</label>
					</MenuItem>
					<MenuItem onClick={handleCameraModalOpen}>
						<Fab className={classes.invertedFabMenuCamera} >
							<CameraAlt />
						</Fab>
						{i18n.t("messageInput.type.cam")}
						</MenuItem>
					<MenuItem onClick={handleMenuItemClick}>
						<input
							multiple
							type="file"
							id="upload-doc-button"
							accept="application/*, text/*"
							disabled={disableOption()}
							className={classes.uploadInput}
							onChange={handleChangeMedias}
						/>
						<label htmlFor="upload-doc-button">
							<Fab className={classes.invertedFabMenuDoc} >
								<Description />
							</Fab>
							Documento
						</label>
					</MenuItem>
					<MenuItem onClick={handleSendContactModalOpen}>
						<Fab className={classes.invertedFabMenuCont} >
							<Person />
						</Fab>
						{i18n.t("messageInput.type.contact")}
					</MenuItem>
				</Menu>
				{/* <IconButton
				  aria-label="upload"
				  component="span"
				  disabled={disableOption()}
				  onMouseOver={() => setOnDragEnter(true)}
				>
				  <AttachFile className={classes.sendMessageIcons} />
				</IconButton> */}
			  {/* </label> */}
			  {signMessagePar && (
					<Tooltip title={i18n.t("messageInput.tooltip.signature")}>
						<IconButton 
						aria-label="send-upload"
						component="span"
						onClick={handleChangeSign}
						
						>
						{signMessage === true ? <Create style={{ color: "#065183" }} /> : <Create style={{ color: "grey" }} />}
					</IconButton>
					</Tooltip>
					)}
				<Tooltip title={i18n.t("messageInput.tooltip.privateMessage")}>
					<IconButton 
						aria-label="send-upload"
						component="span"
						onClick={handlePrivateMessage}
					>
					{privateMessage === true ? <Comment style={{ color: "#065183" }} /> : <Comment style={{ color: "grey" }} />}
					</IconButton>
				</Tooltip>   
			</Hidden>
			<Hidden only={["md", "lg", "xl"]}>
			  <IconButton
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleOpenMenuClick}
			  >
				<MoreVert></MoreVert>
			  </IconButton>
			  <Menu
				id="simple-menu"
				keepMounted
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleMenuItemClick}
			  >
				<MenuItem onClick={handleMenuItemClick}>
				  <IconButton
					aria-label="emojiPicker"
					component="span"
					disabled={disableOption()}
					onClick={(e) => setShowEmoji((prevState) => !prevState)}
				  >
					<Mood className={classes.sendMessageIcons} />
				  </IconButton>
				</MenuItem>
				<MenuItem onClick={handleMenuItemClick}>
				  <input
					multiple
					type="file"
					id="upload-button"
					disabled={disableOption()}
					className={classes.uploadInput}
					onChange={handleChangeMedias}
				  />
				  <label htmlFor="upload-button">
					<IconButton
					  aria-label="upload"
					  component="span"
					  disabled={disableOption()}
					>
					  <AttachFile className={classes.sendMessageIcons} />
					</IconButton>
				  </label>
				</MenuItem>
				{signMessagePar && (
					<Tooltip title="Habilitar/Desabilitar Assinatura">
						<IconButton 
						aria-label="send-upload"
						component="span"
						onClick={handleChangeSign}
						
						>
						{signMessage === true ? <Create style={{ color: "#065183" }} /> : <Create style={{ color: "grey" }} />}
					</IconButton>
					</Tooltip>
					)}
				<Tooltip title="Habilitar/Desabilitar Comentários">
					<IconButton 
						aria-label="send-upload"
						component="span"
						onClick={handlePrivateMessage}
					>
					{privateMessage === true ? <Comment style={{ color: "#065183" }} /> : <Comment style={{ color: "grey" }} />}
					</IconButton>
				</Tooltip>    
			  </Menu>
			</Hidden>
			<div className={classes.messageInputWrapper}>
			  <InputBase
				inputRef={(input) => {
				  input && input.focus();
				  input && (inputRef.current = input);
				}}
				className={classes.messageInput}
				placeholder={
				  ticketStatus === "open" || ticketStatus === "group"
					? i18n.t("messagesInput.placeholderOpen")
					: i18n.t("messagesInput.placeholderClosed")
				}
				multiline
				maxRows={5}
				value={capitalizeFirstLetter(inputMessage)}
				onChange={handleChangeInput}
				disabled={disableOption()}
				onPaste={(e) => {
				  (ticketStatus === "open" || ticketStatus === "group") && handleInputPaste(e);
				}}
				onKeyPress={(e) => {
				  if (loading || e.shiftKey) return;
				  else if (e.key === "Enter") {
					handleSendMessage();
				  }
				}}
			  />
			  {typeBar ? (
				<ul className={classes.messageQuickAnswersWrapper}>
				  {quickAnswers.map((value, index) => {
					return (
					  <li
						className={classes.messageQuickAnswersWrapperItem}
						key={index}
					  >
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a onClick={() => handleQuickAnswersClick(value.value)}>
						  {`${value.label} - ${value.value}`}
						</a>
					  </li>
					);
				  })}
				</ul>
			  ) : (
				<div></div>
			  )}
			</div>
			{inputMessage ? (
			  <IconButton
				aria-label="sendMessage"
				component="span"
				onClick={handleSendMessage}
				disabled={loading}
			  >
				<Send className={classes.sendMessageIcons} />
			  </IconButton>
			) : recording ? (
			  <div className={classes.recorderWrapper}>
				<IconButton
				  aria-label="cancelRecording"
				  component="span"
				  fontSize="large"
				  disabled={loading}
				  onClick={handleCancelAudio}
				>
				  <HighlightOff className={classes.cancelAudioIcon} />
				</IconButton>
				{loading ? (
				  <div>
					<CircularProgress className={classes.audioLoading} />
				  </div>
				) : (
				  <RecordingTimer />
				)}
  
				<IconButton
				  aria-label="sendRecordedAudio"
				  component="span"
				  onClick={handleUploadAudio}
				  disabled={loading}
				>
				  <CheckCircleOutline className={classes.sendAudioIcon} />
				</IconButton>
			  </div>
			) : (
			  <IconButton
				aria-label="showRecorder"
				component="span"
				disabled={disableOption()}
				onClick={handleStartRecording}
			  >
				<Mic className={classes.sendMessageIcons} />
			  </IconButton>
			)}
		  </div>
		</Paper>
	
		</>  );
	
	}
	
  };
  
  export default MessageInput;