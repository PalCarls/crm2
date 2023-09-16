const messages = {
	es: {
		translations: {
			signup: {
				title: "Registro",
				toasts: {
					success:
						"¡El usuario ha sido creado satisfactoriamente! ¡Ahora inicia sesión!",
					fail: "Error creando el usuario. Verifica la data reportada.",
				},
				form: {
					name: "Nombre",
					email: "Correo Electrónico",
					password: "Contraseña",
					company: "Nombre de la Empresa",
          			phone: "Whatsapp (COD + NÚMERO)"
				},
				buttons: {
					submit: "Regístrate",
					login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
				},
			},
			login: {
				title: "Inicio de Sesión",
				form: {
					email: "Correo Electrónico",
					password: "Contraseña",
					button:"Ingresar"
				},
				buttons: {
					submit: "Ingresa",
					register: "¿No tienes cuenta? ¡Regístrate!",
				},
			},
			companies: {
				title: "Registrar Empresa",
				form: {
				  name: "Nombre de la Empresa",
				  plan: "Plan",
				  token: "Token",
				  submit: "Registrar",
				  success: "Empresa creada con éxito!",
				},
			  },
			auth: {
				toasts: {
					success: "¡Inicio de sesión exitoso!",
				},
				dueDate: {
					expiration: "Suscripción caducará en",
					days: "días!",
					day: "día!",
					expirationToday: "Su suscripción termina hoy!",
				  },
				  token: "Token",
			},
			dashboard: {
				tabs:{
					indicators:"Indicadores",
					assessments:"Evaluaciones",
					attendants:"Agentes"
				  },
				charts: {
					perDay: {
						title: "Tickets hoy: ",
					},
				},
				cards: {
					inAttendance: "Atención actual",
					waiting: "Esperando",
					activeAttendants: "Agentes Activos",
					finalized: "Finalizados",
					newContacts: "Nuevos Contactos",
					totalReceivedMessages: "Total de Mensajes Recibidas",
					totalSentMessages: "Total de Mensajes Enviadas",
					averageServiceTime: "T.P. de Atención",
					averageWaitingTime: "T.P. de Espera",
					status:"Status (Actual)"
				  },
				  users: {
					name: "Nombre",
					numberAppointments: "Total de tickets",
					statusNow: "Actual",
					totalCallsUser: "Total de atención por usuario",
					totalAttendances: "Total de atenciones",
				  },
				  date: {
					initialDate: "Fecha Inicial",
					finalDate: "Fecha Final",
				  },
				  licence: {
					available: "Disponíble hasta",
				  },
				  assessments:{
					totalCalls:"Total de Tickets",
					callsWaitRating:"Tickets aguardando evaluación",
					callsWithoutRating:"Ticket sin evaluación",
					ratedCalls:"Tickets evaluados",
					evaluationIndex:"Índice de evaluación",
					score:"Puntaje",
					prosecutors:"Promotores",
					neutral:"Neutrales",
					detractors:"Dectratores"
				  }
			},
			reports: {
				title: "Reporte de Pesquisas Realizadas",
				operator: "Agente",
				period: "Período",
				until: "Hasta",
				date:"Fecha",
				reportTitle:"Relatorios",
				calls:"Atenciones",
				search:"Pesquisas",
				durationCalls:"Duración de la atención",
				grupoSessions:"Atención en grupos grupos",
				until:"até",
				groupTicketsReports:{
					timezone:"America/Monterrey",
					msgToast:"Generando relatorio compactado, por favor espere.",
					errorToast:"Erro ao generar relatorio",
					back:"Volver",
					groupServiceReport:"Relatorio de Atención en Grupos",
					loading:"Cargando...",
					contact:"Contacto",
					dateOpen:"Fecha de Apertura",
					dateLastUpdated:"Fecha Ultima Actualización",
					agent:"Agente",
					agentClosed:"Agente(cerró)",
					waitingAssistance:"Esperando atención",
					process:"En proceso"
				  },
				  researchReports:{
					response:"respuesta",
					active:"(Activa)",
					inactive:"(Inactiva)",
					quantity:"Cantidade",
					percentage:"porcentaje",
					title:"Relatorio de Pesquisas Realizadas",
					activeSearch:"Pesquisa activa",
					inactiveSearch:"Pesquisa inactiva",
				  },
				  ticketDurationDetail:{
					msgToast:"Generando relatorio compactado, por favor espere.",
					title:"Relatorio de Duración de la Atención",
					startService:"Início de la Atención",
					lastUpdated:"Última actualización",
					lastAgent:"Último agente",
					durationFinished:"Duración después de finalizado"
				  },
				  ticketDuration:{
					title:"Relatorio de Duración de Atención",
					contact:"Contacto",
					open:"Abiertos",
					pending:"Pendientes",
					finished:"Finalizados",
					durationFinished:"Duración de los finalizados",
					durationAfterFinished:"Duración después de finalizado",
					actions:"Acciones"
				  },
				  ticketReports:{
					msgToast:"Generando relatorio compactado, por favor aguarde.",
					title:"Relatrio de Atención"
				  },
				  pdf:{
					title:"Relación de Atenciones Realizadas",
					exportTitle:"Relación de Atenciones en Grupos Realizadas"
				  }
			  },
			  todo: {
				newTask: "Nueva Tarea",
				add: "Agregar",
				task: "Tareas",
			  },
			  contactImportWpModal:{
				title:"Exportar Contactos para Excel",
				buttons:{
				  downloadModel:"Download - modelo de excel para importación",
				  closed:"Cerrar",
				  import:"Seleccione el archivo de excel para importar los Contactos"
				}
		
			  },
			connections: {
				title: "Conexiones",
				waitConnection: "Espere... Las conexiones serán reiniciadas!",
				newConnection: "Nueva Conexión",
				restartConnections: "Reiniciar Conexiones",
				callSupport: "Soporte",
				newConnection: "Nueva Conexión",
				toasts: {
					deleted:
						"¡La conexión de WhatsApp ha sido borrada satisfactoriamente!",
				},
				confirmationModal: {
					deleteTitle: "Borrar",
					deleteMessage: "¿Estás seguro? Este proceso no puede ser revertido.",
					disconnectTitle: "Desconectar",
					disconnectMessage: "Estás seguro? Deberá volver a leer el código QR",
				},
				buttons: {
					add: "Agrega WhatsApp",
					disconnect: "Desconectar",
					tryAgain: "Inténtalo de nuevo",
					qrcode: "QR CODE",
					newQr: "Nuevo QR CODE",
					closedImported:"Cerrar todos los tickets Importados",
					preparing:"Preparando mensajes para importación",
					importing:"Importando Mensajes del WhatsApp",
					newQr: "Nuevo QR CODE",
					processed:"Processado",
					in:"de",
					connecting: "Conectando",
				},
				typography:{
					processed:"Processado",
					in:"de"
				  },
				toolTips: {
					disconnected: {
						title: "No se pudo iniciar la sesión de WhatsApp",
						content:
							"Asegúrese de que su teléfono celular esté conectado a Internet y vuelva a intentarlo o solicite un nuevo código QR",
					},
					qrcode: {
						title: "Esperando la lectura del código QR",
						content:
							"Haga clic en el botón 'CÓDIGO QR' y lea el Código QR con su teléfono celular para iniciar la sesión",
					},
					connected: {
						title: "Conexión establecida",
					},
					timeout: {
						title: "Se perdió la conexión con el teléfono celular",
						content:
							"Asegúrese de que su teléfono celular esté conectado a Internet y que WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
					},
				},
				table: {
					name: "Nombre",
					status: "Estado",
					lastUpdate: "Última Actualización",
					default: "Por Defecto",
					actions: "Acciones",
					session: "Sesión",
					number: "Número de Whatsapp",
				},
			},
			showTicketOpenModal:{
				title: {
				  header: "Servicio existente"
				},
				form: {
				  message: "Hay un ticket abierto para este contacto:",
				  user: "Agente",
				  queue: "Fila"
				},
			  },
			whatsappModal: {
				title: {
					add: "Agrega WhatsApp",
					edit: "Edita WhatsApp",
				},
				tabs:{
					general:"Geral",
					messages:"Mensajes",
					assessments:"Evaluaciones"
				  },
				form: {
					importOldMessagesEnable:"Importar mensajes del celular",
					importOldMessages: "Fecha de inicio",
					importRecentMessages: "Fecha Final",
					importOldMessagesGroups:"Importar mensajes de grupo",
					closedTicketsPostImported:"Cerrar tickets después de la importación",
					name: "Nombre",
					queueRedirection:"Redirección de Fila",
					queueRedirectionDesc:"Seleccione una fila para los contactos que no tienen una fila para redirigir",
					queueRedirection:"Redirecionamento de Fila",
					queueRedirectionDesc:"Selecione uma fila para os contatos que não possuem fila serem redirecionados",
					default: "Por Defecto",
					group: "Permitir grupos",
					time:"Tiempo",
					importAlert: "ATENCIÓN: Guardando, su conexión será cerrada, usted tendrá que volver a leer el QR Code para importar los mensajes",
					groupAsTicket: "Grupos como Ticket",
					timeCreateNewTicket: "Criar novo ticket em x minutos",
					maxUseBotQueues:"Cantidad máxima de veces que el chatbot va a ser enviado",
					timeUseBotQueues: "Tiempo en minutos para nuevo envío del chatbot",
					expiresTicket: "Encerrar chats abiertos após n horas",
					expiresTicketNPS: "Cerrar chats aguardando la evaluacion luego de x minutos",
					maxUseBotQueuesNPS: "Cantidad máxima de veces que la evaluación será enviada",
					closeLastMessageOptions1:"Del Agente/Cliente",
					closeLastMessageOptions2:"Del Agente",
					
					outOfHoursMessage: "Mensaje fuera de horario de atención",
					greetingMessage: "Mensaje de saludo",
					complationMessage: "Mensaje de conclusión",
					lgpdLinkPrivacy: "Link para políticas de privacidad",
					lgpdMessage: "Mensaje inicial de LPD",
					lgpdDeletedMessages: "Ofuscar mensaje borrada por el contacto",
					lgpdSendMessage: "Siempre solicitar confirmación del contacto",
					ratingMessage: "Mensaje de evaluación - Rango de 0 a 10",
					token: "Token para integración externa",
					sendIdQueue: "Fila",
					inactiveMessage: "Mensaje de inactividad",
					timeInactiveMessage: "Tiempo em minutos para el envío del aviso de inactividad",
					whenExpiresTicket: "Cerrar chats abiertos cuando el último mensaje sea",
					expiresInactiveMessage: "Mensaje al cerrar por inactividade",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				menuItem: {
					enabled: "Activado",
					disabled: "Desactivado",
					minutes: "minutos",
				  },
				success: "WhatsApp guardado satisfactoriamente.",
			},
			qrCode: {
				message: "Lée el código QR para empezar la sesión.",
			},
			contacts: {
				title: "Contactos",
				toasts: {
					deleted: "¡Contacto borrado satisfactoriamente!",
				},
				searchPlaceholder: "Buscar...",
				confirmationModal: {
					deleteTitle: "Borrar",
					importTitlte: "Importar contactos",
					deleteMessage:
						"¿Estás seguro que deseas borrar este contacto? Todos los tickets relacionados se perderán.",
					importMessage:
						"¿Quieres importar todos los contactos del teléfono?",
						importChat:"Importar Conversas",
						wantImport:"Quieres importar todas las conversas del teléfono?"
				},
				buttons: {
					import: "Importar Contactos",
					add: "Agregar Contacto",
					export: "Exportar Contacto",
				},
				table: {
					name: "Nombre",
					whatsapp: "WhatsApp",
					email: "Correo Electrónico",
					actions: "Acciones",
					lastMessage: "Ultimo Mensaje",
				},
				menu:{
					importYourPhone:"Importar del celular por default",
					importToExcel:"Importar / Exportar del Excel"
				  }
			},
			forwardMessage: {
				text: "Reenviada",
			},
			forwardMessageModal: {
				title: "Reenviar mensaje",
				buttons: {
				  ok: "Reenviar",
				},
			},
			contactModal: {
				title: {
					add: "Agregar contacto",
					edit: "Editar contacto",
				},
				form: {
					mainInfo: "Detalles del contacto",
					extraInfo: "Información adicional",
					name: "Nombre",
					number: "Número de Whatsapp",
					email: "Correo Electrónico",
					extraName: "Nombre del Campo",
					extraValue: "Valor",
					chatBotContact:"Desactivar chatbot para este contacto",
					termsLGDP:"Términos P.P. aceptados en:",
					allTicket: "Visualizar tickets sin fila",
					allowGroup: "Permitir grupos",
				},
				buttons: {
					addExtraInfo: "Agregar información",
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Contacto guardado satisfactoriamente.",
			},
			queueModal: {
				title: {
					queueData:"Datos de la fila",
					text:"Horarios de atención",
					add: "Agregar fila",
					edit: "Editar fila",
					confirmationDelete:"¿Está seguro? Todas las opciones integradas también se eliminarán."
				},
				form: {
					name: "Nombre",
					color: "Color",
					orderQueue: "Orden de la fila (Bot)",
					rotate: "Rotativo",
					timeRotate: "Tiempo de Rotación",
					greetingMessage: "Mensaje de saludo",
					complationMessage: "Mensaje de cierre",
					outOfHoursMessage: "Mensaje fuera de horario de atención",
					token: "Token",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Ahorrar",
					cancel: "Cancelar",
				},
				bot:{
					title:"Opciones",
					toolTipTitle:"Agregue las opciones para construir un chatbot",
					toolTip:"Si solo hay una opción, se elegirá automáticamente, lo que hará que el bot responda con el mensaje de la opción y avance.",
					selectOption:"Seleccione una opción",
					text:"Texto",
					attendent:"Agente",
					queue:"Fila",
					integration:"Integranción",
					file:"Archivo",
					toolTipMessageTitle:"El mensaje es obligatorio para pasar al siguiente nivel",
					toolTipMessageContent:"El mensaje es obligatorio para pasar al siguiente nivel",
					selectUser:"Seleccione un Usuario",
					selectQueue:"Seleccione una Fila",
					selectIntegration:"Seleccione um Integración",
					addOptions:"Agregar opciones",
				  },
				  serviceHours:{
					dayWeek:"Día",
					startTimeA:"Hora de Inicio",
					endTimeA:"Hora del término",
					startTimeB:"Hora de Inicio",
					endTimeB:"Hora del término",
					monday:"Lunes",
					tuesday:"Martes",
					wednesday:"Miércoles",
					thursday:"Jueves",
					friday:"Viernes"
				  }
			},
			queueIntegrationModal: {
				title: {
				  add: "Agregar proyecto",
				  edit: "Editar proyecto",
				},
				form: {
				  id: "ID",
				  type: "Tipo",
				  name: "Nombre",
				  projectName: "Nombre del Proyecto",
				  language: "Idioma",
				  jsonContent: "JsonContent",
				  urlN8N: "URL N8N",
				},
				buttons: {
				  okAdd: "Agregar",
				  okEdit: "Guardar",
				  cancel: "Cancelar",
				  test: "Probar Bot",
				},
				messages: {
				  testSuccess: "¡Integración testada con éxito!",
				  addSuccess: "¡Integración agregada con éxito!",
				  editSuccess: "¡Integración editada con éxito!",
				},
			  },
			userModal: {
				warning:"Para importar los mensajes por favor vuelva a leer el QRCode.",
				title: {
					add: "Agregar usuario",
					edit: "Editar usuario",
					updateImage:"Actualizar Imagen",
					removeImage: "Excluir Imagen"
				},
				form: {
					name: "Nombre",
					email: "Correo Electrónico",
					password: "Contraseña",
					farewellMessage: "Mensaje de despedida",
					profile: "Perfil",
					startWork: "Inicio del Horario",
					endWork: "Final del Horario",
					whatsapp: "Conexión Defautl", 
					allTicketEnable: "Activado",
					allTicketDisable: "Desactivado",
					allTicket: "Visualizar mensajes sin fila",
					allowGroup:"Permitir Grupos",
					defaultMenuOpen: "Abierto",
                    defaultMenuClosed: "Cerrado",
                    defaultMenu: "Menu Estándar",
                    defaultTheme: "Tema Estándar",
                    defaultThemeDark: "Oscuro",
                    defaultThemeLight: "Claro",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
					addImage:"Agregar Imagen",
          			editImage:"Editar Imagen"
				},
				success: "Usuario guardado satisfactoriamente.",
			},
			companyModal: {
				title: {
				  add: "Agregar empresa",
				  edit: "Editar empresa",
				},
				form: {
				  name: "Nombre",
				  email: "Correo electrónico",
				  passwordDefault: "Contraseña",
				  numberAttendants: "Usuarios",
				  numberConections: "Conexiones",
				},
				buttons: {
				  okAdd: "Agregar",
				  okEdit: "Guardar",
				  cancel: "Cancelar",
				},
				success: "La Empresa fue guardada satisfactoriamente.",
			  },
			  scheduleModal: {
				title: {
				  add: "Nuevo Programa",
				  edit: "Editar Programa",
				},
				form: {
				  body: "Mensaje",
				  contact: "Contacto",
				  sendAt: "Fecha del Programa",
				  sentAt: "Fecha de Envío",
				},
				buttons: {
				  okAdd: "Agregar",
				  okEdit: "Guardar",
				  cancel: "Cancelar",
				},
				success: "Programa guardado satisfactoriamente.",
			  },
			  tagModal: {
				title: {
				  add: "Nueva Tag",
				  edit: "Editar Tag",
				  addKanban: "Nueva Lane",
				  editKanban: "Editar Lane",
				},
				form: {
				  name: "Nombre",
				  color: "Color",
				},
				buttons: {
				  okAdd: "Agregar",
				  okEdit: "Guardar",
				  cancel: "Cancelar",
				},
				success: "Tag guardada satisfactoriamente.",
				successKanban: "Lane guardada satisfactoriamente.",
			  },
			  fileModal: {
				title: {
				  add: "Agregar menú de evaluación",
				  edit: "Editar menú de evaluación",
				},
				buttons: {
				  okAdd: "Guardar",
				  okEdit: "Editar",
				  cancel: "Cancelar",
				  options: "Agregar opción",
				  fileOptions: "Agregar archivo",
				},
				form: {
				  name: "Nombre",
				  message: "Mensaje de Evaluación",
				  options: "Opciones de Evaluación",
				  extraName: "Nombre de la opción",
				  extraValue: "Valor de la opción",
				},
				success: "Evaluación guardada satisfactoriamente.",
			  },
			chat: {
				noTicketMessage: "Selecciona un ticket para empezar a chatear.",
			},
			uploads: {
				titles: {
				  titleUploadMsgDragDrop: "⬇️ ARRASTRE Y SUELTE LOS ARCHIVOS EN EL CAMPO ⬇️",
				  titleFileList: "Listado de archivo(s)"
				},
			  },
			chatInternal: {
			  new: "Nuevo",
			  modal: {
				conversation: "Inicio",
				title: "Título",
				filterUsers: "Filtro por Usuarios",
				cancel: "Cerrar",
				save: "Guardar",
			  },
			  modalDelete: {
				title: "Excluir Chat",
				message: "Esta acción no se puede revertir, ¿confirmar?",
			  },
			},
			ticketsManager: {
				questionCloseTicket:"VOCÊ DESEJA FECHAR TODOS OS TICKETS?",
				yes:"SIM",
				not:"NÃO",
				buttons: {
					newTicket: "Nuevo",
					resolvAll: "Resolver Todos",
					close:"Cerrar",
          			new:"Nuevo"
				},
			},
			ticketsQueueSelect: {
				placeholder: "Filas",
			},
			tickets: {
				toasts: {
					deleted: "El ticket en el que estabas ha sido borrado.",
				},
				notification: {
					message: "Mensaje de",
				},
				tabs: {
					open: { title: "Bandeja" },
					closed: { title: "Resueltos" },
					search: { title: "Buscar" },
				},
				search: {
					placeholder: "Buscar tickets y mensajes.",
					filterConections:"Filtro por Conexión",
					filterConectionsOptions:{
					open:"Abierto",
					closed:"Cerrado",
					pending:"Pendiente",
					},
					filterUsers:"Filtro por usuarios",
				},
				buttons: {
					showAll: "Todos",
					returnQueue: "Regresar a la Fila",
					scredule: "Programar",
					deleteTicket: "Borrar Ticket",
				},
				closedTicket: {
					closedMessage: "Cerrar CON un mensaje de despedida",
					closedNotMessage: "Cerrar SIN un mensaje de despedida",
				},
			},
			transferTicketModal: {
				title: "Transferir Ticket",
				fieldLabel: "Escriba para buscar usuarios",
				fieldQueueLabel: "Transferir para fila",
				fieldQueuePlaceholder: "Seleccione una fila",
				fieldWhatsapp:"Seleccione un whatsapp",
				noOptions: "No se encontraron usuarios con ese nombre",
				buttons: {
					ok: "Transferir",
					cancel: "Cancelar",
				},
			},
			chatInternal:{
				new:"Nuevo",
				modal:{
				  conversation:"Conversación",
				  title:"Título",
				  filterUsers:"Filtro por Usuarios",
				  cancel:"Cerrar",
				  save:"Guardar"
				},
				modalDelete:{
				  title:"Excluir Conversación",
				  message:"Esta acción no se puede revertir, ¿confirmar?"
				}
			  },
			ticketsList: {
				called:"Entradas",
				today:"Hoy",
				missedCall:"Llamada de voz/vídeo perdida a las",
				assignedHeader: "Trabajando en",
				pendingHeader: "Esperando",
				assignedHeader: "Trabajando en",
				groupingHeader: "Grupos",
				noTicketsTitle: "¡Nada acá!",
				noTicketsMessage:
					"No se encontraron tickets con este estado o término de búsqueda",
				buttons: {
					accept: "Aceptar",
					cancel: "Cancelar",
					start: "Iniciar",
					closed: "Cerrar",
					reopen: "Reabrir",
					transfer: "Transferir",
					ignore: "Ignorar",
				},
				acceptModal: {
					title: "Aceptar Chat",
					queue: "Seleccionar tag"
				  },
			},
			newTicketModal: {
				title: "Crear Ticket",
				fieldLabel: "Escribe para buscar un contacto",
				add: "Agregar",
				buttons: {
					ok: "Guardar",
					cancel: "Cancelar",
				},
			},
			SendContactModal: {
				title: "Enviar contacto",
				fieldLabel: "Buscar contacto",
				add: "Agregar",
				buttons: {
				  ok: "Enviar",
				  cancel: "Cancelar",
				},
			  },
			mainDrawer: {
				listItems: {
					dashboard: "Dashboard",
					connections: "Conexiones",
					chatsTempoReal: "Panel de Asistencia",
					tickets: "Inbox",
					quickMessages: "Respuestas Rápidas",
					contacts: "Contactos",
					queues: "Filas",
					tags: "Tags",
					administration: "Administración",
					companies: "Empresas",
					users: "Usuarios",
					settings: "Configuración",
					ratings: "Regist. Evaluaciones",
					helps: "Ayuda",
					messagesAPI: "API",
					schedules: "Programa",
					campaigns: "Campañas",
					annoucements: "Informativos",
					chats: "Chat Interno",
					financeiro: "Financiero",
					queueIntegration: "Integraciones",
					version: "Versión",
				},
				appBar: {
					user: {
						profile: "Perfil",
						logout: "Cerrar Sesión",
						message: "Hola",
						messageEnd: "bienvenido a",
						active: "Activo hasta",
						goodMorning:"Hola,",
						myName:"mi nombre es",
						continuity:"y te seguiré apoyando.",
						virtualAssistant:"Asistente Virtual"
					},
					message:{
						location:"Localización",
						contact:"Contacto"
					  },
					  notRegister:"No hay registros",
					  refresh: "Atuaclizar"
				},
			},
			languages: {
				undefined: "Idioma",
				"es-Mx": "Español",
				es: "Español",
				en: "English",
				tr: "Türkçe",
			  },
			  messagesAPI: {
				title: "API",
				textMessage: {
				  number: "Número",
				  body: "Mensaje",
				  token: "Token registrado",
				  userId: "ID usuario/agente",
				  queueId: "ID Fila",
				},
				mediaMessage: {
				  number: "Número",
				  body: "Nombre del archivo",
				  media: "Archivo",
				  token: "Token registrado",
				},
				API: {
				  title: "Documentación para envío de mensajes",
				  methods: {
					title: "Métodos de Envío",
					messagesText: "Mensajes de Texto",
					messagesMidia: "Mensajes de Midia",
				  },
				  instructions: {
					title: "Instrucciones",
					comments: "Observaciones Importantes",
					comments1:"Antes de enviar mensajes, es necesario registrar el token vinculado a la conexión que enviará los mensajes. <br />Para registrarse, acceda al menú 'Conexiones', haga clic en el botón de edición de la conexión e inserte el token en el campo correspondiente.",
					comments2:"El número de envío no debe tener máscara ni caracteres especiales y debe constar de:",
					codeCountry: "Código del País",
					code: "Código del Estado",
					number:"Numero"
				  },
				  text: {
					title: "1. Mensajes de Texto",
					instructions:
					  "A continuación se muestra la lista de información necesaria para enviar mensajes de texto:",
				  },
				  media: {
					title: "2. Mensagens de Media",
					instructions:
					  "A continuación se muestra la lista de información necesaria para enviar mensajes con archivos:",
				  },
				},
			  },
			notifications: {
				noTickets: "Sin notificaciones.",
			},
			quickMessages: {
				title: "Respuestas Rápidas",
				searchPlaceholder: "Buscar...",
				noAttachment:"No hay",
				confirmationModal: {
				  deleteTitle: "Excluir",
				  deleteMessage: "Esta acción no se puede revertir. ¿Continuar?",  
				},
				buttons: {
				  add: "Agregar",
				  attach: "Adjuntar Archivo",
					cancel: "Cancelar",
					edit:"Editar"
				},
				toasts: {
					success: "Atajo agregado satisfactoriamente.",
					deleted: "Atajo excluido satisfactoriamente.",
				  },
				dialog: {
				  title:"Mensaje Rápida",
				  shortcode: "Atajo",
				  message: "Respuesta",
				  save:"Guardar",
				  cancel:"Cancelar",
					geral: "Global",
					add: "Agregar",
					edit: "Editar"
				},
				table:{
				  shortcode: "Atajo",
				  message:"Mensaje",
				  actions:"Acciones",
				  mediaName:"Nombre del Archivo",
          		  status: "Status"
				}
			  },
			  contactLists: {
				title: "Listado de Contactos",
				table: {
				  name: "Nombre",
				  contacts: "Contactos",
				  actions: "Acciones",
				},
				buttons: {
				  add: "Nuevo Listado",
				},
				dialog: {
				  name: "Nombre",
				  company: "Empresa",
				  okEdit: "Editar",
				  okAdd: "Agregar",
				  add: "Agregar",
				  edit: "Editar",
				  cancel: "Cancelar",
				},
				confirmationModal: {
				  deleteTitle: "Excluir",
				  deleteMessage: "Esta acción no se puede revertir.",
				},
				toasts: {
				  deleted: "Registro excluído",
				},
			  },
			  contactListItems: {
				title: "Contactos",
				searchPlaceholder: "Búsqueda",
				buttons: {
				  add: "Nuevo",
				  lists: "Listados",
				  import: "Importar",
				},
				dialog: {
				  name: "Nombre",
				  number: "Número",
				  whatsapp: "Whatsapp",
				  email: "Correo electrónico",
				  okEdit: "Editar",
				  okAdd: "Agregar",
				  add: "Agregar",
				  edit: "Editar",
				  cancel: "Cancelar",
				},
				table: {
				  name: "Nombre",
				  number: "Número",
				  whatsapp: "Whatsapp",
				  email: "Correo electrónico",
				  actions: "Acciones",
				},
				confirmationModal: {
				  deleteTitle: "Excluir",
				  deleteMessage: "Esta acción no se puede revertir.",
				  importMessage: "¿Quieres importar esta plantilla? ",
				  importTitlte: "Importar",
				},
				toasts: {
				  deleted: "Registro excluído",
				},
			  },
			  kanban: {
				title: "Kanban",
				searchPlaceholder: "Búsqueda",
				subMenus:{
				  list:"Admin",
				  tags:"Lanes"
				}
			  },
			  campaigns: {
				title: "Campañas",
				searchPlaceholder: "Búsqueda",
				subMenus:{
					list:"Listados",
					listContacts:"Listados de contatos",
					settings:"Configuraciones"
				  },
				  settings:{
					randomInterval:"Intervalo de disparo aleatorio",
					noBreak:"Sin Intervalo",
					intervalGapAfter:"Intervalo mayor después de",
					undefined:"No definido",
					messages:"mensajes",
					laggerTriggerRange:"Intervalo de envío más grande",
					addVar:"Agregar variable",
					save:"Guardar",
					close:"Cerrar",
					add:"Agregar",
					shortcut:"Atajo",
					content:"Contenido", 
				  }, 
				buttons: {
				  add: "Nueva Campaña",
				  contactLists: "Listado de Contactos",
				},
				table: {
				  name: "Nombre",
				  whatsapp: "Conexión",
				  contactList: "Listado de Contactos",
				  option:"Ninguna",
				  disabled:"Activada",
				  enabled:"Desactivada",
				  status: "Status",
				  scheduledAt: "Programa",
				  completedAt: "Finalizada",
				  confirmation: "Confirmación",
				  actions: "Acciones",
				},
				dialog: {
				  new: "Nueva Campaña",
				  update: "Editar Campaña",
				  readonly: "Solo Visualizar",
				  help:"Use variables como {nombre}, {numero}, {email} o defina variables personalizadas.",
				  form: {
					name: "Nombre",
					message1: "Mensaje 1",
					message2: "Mensaje 2",
					message3: "Mensaje 3",
					message4: "Mensaje 4",
					message5: "Mensaje 5",
					confirmationMessage1: "Mensaje de Confirmación 1",
					confirmationMessage2: "Mensaje de Confirmación 2",
					confirmationMessage3: "Mensaje de Confirmación 3",
					confirmationMessage4: "Mensaje de Confirmación 4",
					confirmationMessage5: "Mensaje de Confirmación 5",
					messagePlaceholder: "Contenido del Mensaje",
					whatsapp: "Conexión",
					status: "Status",
					scheduledAt: "Programa",
					confirmation: "Confirmación",
					contactList: "Listado de Contacto",
				  },
				  buttons: {
					add: "Agregar",
					edit: "Actualizar",
					okadd: "Ok",
					cancel: "Cancelar Envíos",
					restart: "Reiniciar Envíos",
					close: "Cerrar",
					attach: "Anexar Archivo",
				  },
				},
				confirmationModal: {
				  deleteTitle: "Excluir",
				  deleteMessage: "Esta acción no se puede revertir.",
				},
				toasts: {
				  success: "Acción realizada satisfactoriamente",
				  cancel: "Campaña cancelada",
				  restart: "Campaña reiniciada",
				  deleted: "Registro excluido",
				},
			  },
			  campaignReport:{
				title:"Reporte de",
				inactive:"Inactiva",
				scheduled:"Programada",
				process:"En Proceso",
				cancelled:"Cancelada",
				finished:"Finalizada",
				campaign:"Campaña",
				validContacts:"Contactos Válidos",
				confirmationsRequested:"Confirmaciones Solicitadas",
				confirmations:"Confirmaciones",
				deliver:"Entregadas",
				connection:"Conexión",
				contactLists:"Listado de Contactos",
				schedule:"Programados",
				conclusion:"Conclusión"
			  },
			  announcements: {
				title: "Boletines",
				searchPlaceholder: "Búsqueda",
				active:"Activo",
        		inactive:"Inactivo",
				buttons: {
				  add: "Nuevo Boletin",
				  contactLists: "Listados de Boletines",
				},
				table: {
				  priority: "Prioridad",
				  title: "Título",
				  text: "Texto",
				  mediaName: "Archivo",
				  status: "Status",
				  actions: "Acciones",
				},
				dialog: {
				  edit: "Editar Boletin",
				  add: "Nuevo Boletin",
				  update: "Editar Boletin",
				  readonly: "Solo visualizar",
				  form: {
					priority: "Prioridad",
					title: "Título",
					text: "Texto",
					mediaPath: "Archivo",
					status: "Status",
					high: "Alta",
					medium: "Mediana",
					low: "Baja",
					active: "Activo",
					inactive: "Inactivo",
				  },
				  buttons: {
					add: "Agregar",
					edit: "Actualizar",
					okadd: "Ok",
					cancel: "Cancelar",
					close: "Cerrar",
					attach: "Anexar Archivo",
				  },
				},
				confirmationModal: {
				  deleteTitle: "Excluir",
				  deleteMessage: "Esta acción no se puede revertir.",
				},
				toasts: {
				  success: "Acción realizada satisfactoriamente",
				  deleted: "Registro excluido",
				},
			  },
			  campaignsConfig: {
				title: "Configuraciones de Campañas",
			  },
			queues: {
				title: "Filas",
				table: {
					name: "Nombre",
					color: "Color",
					greeting: "Mensaje de saludo",
					orderQueue: "Orden de la fila (bot)",
					actions: "Acciones",
				},
				buttons: {
					add: "Agregar fila",
				},
				confirmationModal: {
					deleteTitle: "Eliminar",
					deleteMessage:
						"¿Estás seguro? ¡Esta acción no se puede revertir! Los tickets en esa fila seguirán existiendo, pero ya no tendrán ninguna fila asignada.",
				},
			},
			queue: {
				queueData: "Datos",
			  },
			queueSelect: {
				inputLabel: "Filas",
			},
			queueIntegration: {
				title: "Integraciones",
				table: {
				  id: "ID",
				  type: "Tipo",
				  name: "Nombre",
				  projectName: "Nombre del Proyecto",
				  language: "Idioma",
				  lastUpdate: "Ultima actualización",
				  actions: "Acciones",
				},
				buttons: {
				  add: "Agregar Proyecto",
				},
				searchPlaceholder: "Buscar...",
				confirmationModal: {
				  deleteTitle: "Excluir",
				  deleteMessage:
					"¿Estás seguro? ¡Esta acción no se puede revertir! Se eliminarán las filas y conexiones enlazadas",
				},
			  },
			users: {
				title: "Usuarios",
				table: {
					status: "Status",
					name: "Nombre",
					email: "Correo Electrónico",
					profile: "Perfil",
					startWork: "Inicio del trabajo",
					endWork: "Final de trabajo",
					actions: "Acciones",
				},
				buttons: {
					add: "Agregar usuario",
				},
				toasts: {
					deleted: "Usuario borrado satisfactoriamente.",
				},
				confirmationModal: {
					deleteTitle: "Borrar",
					deleteMessage:
						"Toda la información del usuario se perderá. Los tickets abiertos de los usuarios se moverán a la fila.",
				},
			},
			compaies: {
				title: "Empresas",
				table: {
				  ID: "ID",
				  status: "Activo",
				  name: "Nombre",
				  email: "Correo",
				  password:"Contraseña",
				  phone:"Teléfono",
				  plan:"Plan",
				  active:"Activo",
				  numberAttendants: "Agentes",
				  numberConections: "Conexiones",
				  value: "Valor",
				  namePlan: "Nombre del Plan",
				  numberQueues: "Filas",
				  useCampaigns: "Campañas",
				  useExternalApi: "Rest API",
				  useFacebook: "Facebook",
				  useInstagram: "Instagram",
				  useWhatsapp: "Whatsapp",
				  useInternalChat: "Chat Interno",
				  useSchedules: "Programa",
				  createdAt: "F.Creación",
				  dueDate: "Caducidad",
				  lastLogin: "Ult. Login",
				  actions: "Acciones",
				  money:"MXN",
				  yes:"Si",
				  no:"No",
				  document:"CURP/RFC",
				  recurrence:"Recurencia",
				  monthly:"Mensual",
				  bimonthly:"Bimestral",
				  quarterly:"Trimestral",
				  semester:"Semestral",
				  yearly:"Anual",
				  clear:"Limpiar",
				  delete:"Eliminar",
				  user:"Usuario",
				  save:"Guardar"
				},
				buttons: {
				  add: "Agregar empresa",
				},
				toasts: {
				  deleted: "Empresa excluida satisfactoriamente.",
				},
				confirmationModal: {
				  deleteTitle: "Excluir",
				  deleteMessage:
					"Todas las informaciones de la empresa serán eliminadas. Los tickets abiertos de este usuário serán movidos a la fila.",
				},
			  },
			  plans:{
				form:{
				  name:"Nombre",
				  users:"Usuarios",
				  connections:"Conexiones",
				  campaigns:"Campañas",
				  schedules:"Programas",
				  enabled:"Activada",
				  disabled:"Desactivada",
				  clear:"Limpiar",
				  delete:"Eliminar",
				  save:"Guardar",
				  yes:"Si",
				  no:"No",
				  money:"MXN"
				}
			  },
			  helps: {
				title: "Ayuda",
				settings:{
				  codeVideo:"Código del Video",
				  description:"Descripción",
				  clear:"Limpiar",
				  delete:"Eliminar",
				  save:"Guardar"
				}
			  },
			  schedules: {
				title: "Programas",
				confirmationModal: {
				  deleteTitle: "¿Seguro que quieres excluir este Programa?",
				  deleteMessage: "Esta acción no se puede revertir.",
				},
				table: {
				  contact: "Contacto",
				  body: "Mensaje",
				  sendAt: "Fecha del Programa",
				  sentAt: "Fecha de Envío",
				  status: "Status",
				  actions: "Acciones",
				},
				buttons: {
				  add: "Nuevo Programa",
				},
				toasts: {
				  deleted: "Programa eliminado satisfactoriamente.",
				},
			  },
			  tags: {
				title: "Tags",
				confirmationModal: {
				  deleteTitle: "¿Seguro que quieres excluir esta Tag?",
				  deleteMessage: "Esta acción no se puede revertir.",
				},
				table: {
				  name: "Nombre",
				  color: "Color",
				  tickets: "Registros Tags",
				  contacts:"Contactos",
				  actions: "Acciones",
				},
				buttons: {
				  add: "Nueva Tag",
				},
				toasts: {
				  deleted: "Tag eliminada satisfactoriamente.",
				},
			  },
			  tagsKanban: {
				title: "Lanes",
				laneDefault:"Abierto(s)",
				confirmationModal: {
				  deleteTitle: "¿Seguro que quieres excluir esta Lane?",
				  deleteMessage: "Esta acción no se puede revertir.",
				},
				table: {
				  name: "Nombre",
				  color: "Color",
				  tickets: "Tickets",
				  actions: "Acciones",
				},
				buttons: {
				  add: "Nueva Lane",
				},
				toasts: {
				  deleted: "Lane eliminada satisfactoriamente.",
				},
			  },
			  files: {
				title: "Listado de archivos",
				table: {
				  name: "Nombre",
				  contacts: "Contactos",
				  actions: "Acción"
				},
				toasts: {
				  deleted: "Listado borrado satisfactoriamente!",
				  deletedAll: "Todos los listados fueron borrados satisfactoriamente!",
				},
				buttons: {
				  add: "Agregar",
				  deleteAll: "Borrar Todos",
				},
				confirmationModal: {
				  deleteTitle: "Borrar",
				  deleteAllTitle: "Borrar Todos",
				  deleteMessage: "Estás seguro de borrar este listado?",
				  deleteAllMessage: "Estás seguro de borrar todos los listado?",
				},
			  },
			settings: {
				success: "Configuración guardada satisfactoriamente.",
				title: "Configuración",
				tabs:{
					options:"Opciones",
					plans:"Planes",
					helps:"Ayuda"
				  },
				settings: {
					userCreation: {
						name: "Creación de usuarios",
						options: {
							enabled: "Habilitado",
							disabled: "Deshabilitado",
						},
					},
					tabs: {
						options: "Opciones",
						schedules: "Horarios",
						plans: "Planes",
						help: "Ayuda",
					  },
					  options: {
						disabled: "Desactivadas",
						enabled: "Activadas",
						updating: "Actualizando...",
						creationCompanyUser: "Creación de Company/Usuário",
						evaluations: "Evaluaciones",
						officeScheduling: "Programar horarios",
						queueManagement: "Gerenciar por Fila",
						companyManagement: "Gerenciar por Empresa",
						sendGreetingAccepted: "Enviar saludos al aceptar ticket",
						sendMsgTransfTicket:
						  "Enviar mensaje de transferencia (departamento/agente)",
						checkMsgIsGroup: "Ignorar mensajes de Grupos",
						chatBotType: "Tipo de Bot",
						userRandom:"Escojer agente aleatorio",
						buttons: "Botones",
						acceptCallWhatsapp: "No aceptar llamada en el whatsapp",
						sendSignMessage: "Permitir agente escoger ENVIAR Firma",
						sendGreetingMessageOneQueues:
						  "Enviar saludos cuando hay solamente 1 fila",
						sendQueuePosition: "Enviar mensaje con la posición de la fila",
						sendFarewellWaitingTicket:
						  "Enviar mensaje de despedida(estado Esperando)",
						acceptAudioMessageContact: "Aceptar audios de todos",
						enableLGPD:"Habilitar opción P.P.",
						requiredTag:"Tag obligatoria para cerrar ticket"
					  },
					  LGPD:{
						title:"Politica de Privacidad",
						welcome:"Mensaje de bienvenida (PP)",
						linkLGPD:"Link de la política de privacidad",
						obfuscateMessageDelete:"Ofuscar mensaje borrada",
						alwaysConsent:"Requerir siempre el consentimiento",
						obfuscatePhoneUser:"Ofuscar número de telefono para usuarios",
						enabled:"Activado",
						disabled:"Desactivado"
					  }
				},
			},
			messagesList: {
				header: {
					assignedTo: "Asignado a:",
					dialogRatingTitle:"¿Quieres dejar un mensaje de evaluación para el cliente?",
					dialogClosingTitle: "Finalizando la atención al cliente!",
					dialogRatingCancel: "Cerrar CON Mensaje de Despedida",
					dialogRatingSuccess: "Cerrar y Enviar Evaluación",
					dialogRatingWithoutFarewellMsg: "Cerrar SIN Mensaje de Despedida",
					ratingTitle: "Elegir menú de evaluación",
					notMessage:"No hay mensaje seleccionado",
					buttons: {
						return: "Devolver",
						resolve: "Resolver",
						reopen: "Reabrir",
						accept: "Aceptar",
						rating: "Enviar Evaluación",
						enableIntegration: "Activar/Desactivar integración",
						requiredTag:"Opps! Debes asignar una tag antes de cerrar el ticket."
					},
				},
			},
			messagesInput: {
				placeholderOpen: "Escribe un mensaje",
				placeholderClosed:
					"Vuelva a abrir o acepte este ticket para enviar un mensaje.",
				signMessage: "Firmar",
				privateMessage: "Mensaje Privada"
			},
			contactDrawer: {
				header: "Detalles del contacto",
				buttons: {
					edit: "Editar contacto",
				},
				extraInfo: "Otras informaciones",
			},
			messageVariablesPicker: {
				label: "Variables disponibles",
				vars: {
				  contactFirstName: "Primer Nombre",
				  contactName: "Nombre",
				  user: "Agente",
				  greeting: "Saludos",
				  protocolNumber: "Protocolo",
				  date: "Fecha",
				  hour: "Hora",
				  ticket_id: "Nº del Ticket",
				  queue: "Sector",
				  connection: "Conexión"
				}
			  },
			ticketOptionsMenu: {
				schedule: "Programa",
				delete: "Borrar",
				transfer: "Transferir",
				registerAppointment: "Observaciones del Contacto",
				resolveWithNoFarewell: "Cerrar sin despedida",
				acceptAudioMessage: "¿Aceptar audios del contacto?",
				appointmentsModal: {
					title: "Observaciones del Contacto",
					textarea: "Observación",
					placeholder: "Agregue aqui la información",
				},
				confirmationModal: {
					title: "¿Borrar ticket #",
					titleFrom: "del contacto ",
					message:
						"¡Atención! Todos los mensajes Todos los mensajes relacionados con el ticket se perderán.",
				},
				buttons: {
					delete: "Borrar",
					cancel: "Cancelar",
				},
			},
			confirmationModal: {
				buttons: {
					confirm: "Ok",
					cancel: "Cancelar",
				},
			},
			messageInput: {
				tooltip: {
				  signature: "Activar/Desactivar firma",
				  privateMessage: "Activar/Desactivar mensaje privado",
				},
				type:{
					imageVideo:"Fotos y videos",
					cam:"Cámara",
					contact:"Contacto"
				  }
			  },
			messageOptionsMenu: {
				delete: "Borrar",
				reply: "Responder",
				edit: "Editar",
				forward: "Enviar",
				toForward: "Enviar",
				talkTo: "Platicar Con",
				confirmationModal: {
					title: "¿Borrar mensaje?",
					message: "Esta acción no puede ser revertida.",
				},
			},
			invoices: {
				table: {
				  invoices: "Facturas",
				  details: "Detalles",
				  users: "Usuarios",
				  connections: "Conexiones",
				  queue: "Filas",
				  value: "Valor",
				  expirationDate: "Fecha Venc.",
				  action: "Acción",
				},
			  },
			backendErrors: {
				ERR_NO_OTHER_WHATSAPP:
					"Debe haber al menos una conexión de WhatsApp predeterminada.",
				ERR_NO_DEF_WAPP_FOUND:
					"No se encontró WhatsApp predeterminado. Verifique la página de conexiones.",
				ERR_WAPP_NOT_INITIALIZED:
					"Esta sesión de WhatsApp no ​​está inicializada. Verifique la página de conexiones.",
				ERR_WAPP_CHECK_CONTACT:
					"No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
				ERR_WAPP_INVALID_CONTACT: "Este no es un número de whatsapp válido.",
				ERR_WAPP_DOWNLOAD_MEDIA:
					"No se pudieron descargar los medios de WhatsApp. Verifique la página de conexiones.",
				ERR_INVALID_CREDENTIALS: "Error de autenticación. Vuelva a intentarlo.",
				ERR_SENDING_WAPP_MSG:
					"Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
				ERR_DELETE_WAPP_MSG: "No se pudo borrar el mensaje de WhatsApp.",
				ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
				ERR_SESSION_EXPIRED: "Sesión caducada. Inicie sesión.",
				ERR_USER_CREATION_DISABLED:
					"La creación de usuarios fue deshabilitada por el administrador.",
				ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
				ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
				ERR_NO_SETTING_FOUND:
					"No se encontró ninguna configuración con este ID.",
				ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
				ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
				ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
				ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
				ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
				ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
				ERR_FETCH_WAPP_MSG:
					"Error al obtener el mensaje en WhtasApp, tal vez sea demasiado antiguo.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS:
					"Este color ya está en uso, elija otro.",
				ERR_WAPP_GREETING_REQUIRED:
					"El mensaje de saludo es obligatorio cuando hay más de una fila.",
			},
		},
	},
};

export { messages };