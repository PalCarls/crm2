'use strict';const a541_0x45567f=a541_0x56d7;(function(_0x57f67a,_0x5a3285){const _0x372894=a541_0x56d7,_0x4dbf66=_0x57f67a();while(!![]){try{const _0x32bd96=parseInt(_0x372894(0x163))/0x1*(parseInt(_0x372894(0x15f))/0x2)+-parseInt(_0x372894(0x13a))/0x3*(-parseInt(_0x372894(0x156))/0x4)+parseInt(_0x372894(0x159))/0x5+-parseInt(_0x372894(0x167))/0x6*(-parseInt(_0x372894(0x143))/0x7)+-parseInt(_0x372894(0x147))/0x8*(-parseInt(_0x372894(0x13d))/0x9)+-parseInt(_0x372894(0x15c))/0xa+parseInt(_0x372894(0x144))/0xb*(-parseInt(_0x372894(0x145))/0xc);if(_0x32bd96===_0x5a3285)break;else _0x4dbf66['push'](_0x4dbf66['shift']());}catch(_0x56a2d0){_0x4dbf66['push'](_0x4dbf66['shift']());}}}(a541_0x2f67,0x290f7));var __importDefault=this&&this['__importDefault']||function(_0x106907){const _0x11eb55=a541_0x56d7;return _0x106907&&_0x106907[_0x11eb55(0x165)]?_0x106907:{'default':_0x106907};};Object['defineProperty'](exports,a541_0x45567f(0x165),{'value':!![]});function a541_0x56d7(_0x4cf91b,_0x5084bd){const _0x2f6740=a541_0x2f67();return a541_0x56d7=function(_0x56d7a2,_0x4836be){_0x56d7a2=_0x56d7a2-0x134;let _0x2a309f=_0x2f6740[_0x56d7a2];return _0x2a309f;},a541_0x56d7(_0x4cf91b,_0x5084bd);}const sequelize_1=require(a541_0x45567f(0x138)),date_fns_1=require(a541_0x45567f(0x152)),Ticket_1=__importDefault(require(a541_0x45567f(0x162))),ShowTicketService_1=__importDefault(require(a541_0x45567f(0x137))),FindOrCreateATicketTrakingService_1=__importDefault(require(a541_0x45567f(0x14b))),lodash_1=require(a541_0x45567f(0x157)),socket_1=require(a541_0x45567f(0x15b)),CreateLogTicketService_1=__importDefault(require(a541_0x45567f(0x146))),AppError_1=__importDefault(require(a541_0x45567f(0x166))),FindOrCreateTicketService=async(_0x1ca470,_0xd2088a,_0x3aad94,_0x1a4072,_0x748785,_0x1959c5,_0x4221bd,_0x479159,_0x3bd158,_0x3df4f9,_0x1e8e62)=>{const _0x4fc072=a541_0x45567f;let _0x1dec2e=![],_0x54f934=![];_0x1e8e62[_0x4fc072(0x139)]&&(_0x54f934=_0x1e8e62['enableLGPD']==='enabled'&&_0x1e8e62['lgpdMessage']!==''&&(_0x1e8e62['lgpdConsent']==='enabled'||_0x1e8e62[_0x4fc072(0x141)]==='disabled'&&(0x0,lodash_1[_0x4fc072(0x134)])(_0x1ca470[_0x4fc072(0x154)])));const _0x1b85d5=(0x0,socket_1[_0x4fc072(0x15e)])();let _0x37aa10=await Ticket_1[_0x4fc072(0x136)]['findOne']({'where':{'status':{[sequelize_1['Op']['or']]:['open',_0x4fc072(0x14c),'group','nps',_0x4fc072(0x150)]},'contactId':_0x4221bd?_0x4221bd['id']:_0x1ca470['id'],'companyId':_0x1a4072,'whatsappId':_0xd2088a['id']},'order':[['id',_0x4fc072(0x135)]]});if(_0x37aa10){await _0x37aa10[_0x4fc072(0x13e)]({'unreadMessages':_0x3aad94,'isBot':![]}),_0x37aa10=await(0x0,ShowTicketService_1[_0x4fc072(0x136)])(_0x37aa10['id'],_0x1a4072);if(Number(_0x37aa10?.[_0x4fc072(0x14a)])!==Number(_0x1959c5)&&_0x1959c5!==0x0&&_0x1959c5!==''||_0x748785!==0x0&&Number(_0x37aa10?.['queueId'])!==Number(_0x748785)&&_0x748785!=='')throw new AppError_1[(_0x4fc072(0x136))](_0x4fc072(0x164)+(_0x4fc072(0x14d)+_0x37aa10[_0x4fc072(0x153)][_0x4fc072(0x148)])+_0x4fc072(0x158)+(_0x4fc072(0x15a)+_0x37aa10[_0x4fc072(0x13b)][_0x4fc072(0x148)]));_0x1dec2e=!![];return{'ticket':_0x37aa10,'isCreated':_0x1dec2e};;}const _0x12c35f=_0xd2088a[_0x4fc072(0x13c)];!_0x37aa10&&(_0x12c35f!==0x0&&(_0x37aa10=await Ticket_1[_0x4fc072(0x136)][_0x4fc072(0x160)]({'where':{'updatedAt':{[sequelize_1['Op'][_0x4fc072(0x140)]]:[+(0x0,date_fns_1[_0x4fc072(0x14f)])(new Date(),{'minutes':Number(_0x12c35f)}),+new Date()]},'contactId':_0x1ca470['id'],'companyId':_0x1a4072,'whatsappId':_0xd2088a['id']},'order':[[_0x4fc072(0x161),'DESC']]})),_0x37aa10&&_0x37aa10['status']!==_0x4fc072(0x15d)&&await _0x37aa10['update']({'status':'pending','unreadMessages':_0x3aad94,'companyId':_0x1a4072}));!_0x37aa10&&(_0x37aa10=await Ticket_1['default']['create']({'contactId':_0x4221bd?_0x4221bd['id']:_0x1ca470['id'],'status':!_0x3bd158&&!(0x0,lodash_1[_0x4fc072(0x134)])(_0x1e8e62[_0x4fc072(0x139)])&&_0x54f934&&!_0x4221bd?_0x4fc072(0x150):_0xd2088a['groupAsTicket']===_0x4fc072(0x142)||!_0x4221bd?'pending':'group','isGroup':!!_0x4221bd,'unreadMessages':_0x3aad94,'whatsappId':_0xd2088a['id'],'companyId':_0x1a4072,'isBot':_0x4221bd?![]:!![],'channel':_0x479159,'imported':_0x3bd158?new Date():null}),await(0x0,FindOrCreateATicketTrakingService_1[_0x4fc072(0x136)])({'ticketId':_0x37aa10['id'],'companyId':_0x1a4072,'whatsappId':_0xd2088a['id'],'userId':_0x37aa10['userId']}),_0x1dec2e=!![]);_0x748785!=0x0&&_0x748785!=undefined&&await _0x37aa10[_0x4fc072(0x13e)]({'queueId':_0x748785});_0x1959c5!=0x0&&_0x1959c5!=undefined&&await _0x37aa10[_0x4fc072(0x13e)]({'userId':_0x1959c5});_0x37aa10=await(0x0,ShowTicketService_1[_0x4fc072(0x136)])(_0x37aa10['id'],_0x1a4072),await(0x0,CreateLogTicketService_1['default'])({'ticketId':_0x37aa10['id'],'type':_0x54f934?_0x4fc072(0x150):_0x4fc072(0x155)});!_0x3df4f9&&_0x1b85d5['to'](_0x37aa10[_0x4fc072(0x13f)])['to']('notification')['to'](_0x37aa10['id'][_0x4fc072(0x151)]())['emit'](_0x4fc072(0x149)+_0x1a4072+_0x4fc072(0x14e),{'action':_0x4fc072(0x13e),'ticket':_0x37aa10});;return{'ticket':_0x37aa10,'isCreated':_0x1dec2e};};function a541_0x2f67(){const _0x4ff831=['__esModule','../../errors/AppError','7668tHpidi','isNil','DESC','default','./ShowTicketService','sequelize','enableLGPD','2346jBopAV','queue','timeCreateNewTicket','763920fVrXmV','update','status','between','lgpdConsent','enabled','343YWbFSA','305899OVKjSF','168gttTib','./CreateLogTicketService','16IojUNA','name','company-','userId','./FindOrCreateATicketTrakingService','pending','Atendente:\x20','-ticket','sub','lgpd','toString','date-fns','user','lgpdAcceptedAt','create','808zDaTJz','lodash','\x20-\x20','1281750IKcAtL','Fila:\x20','../../libs/socket','1104250zRDmXu','nps','getIO','2gSHIAf','findOne','updatedAt','../../models/Ticket','21238gqYLyg','Ticket\x20em\x20outro\x20atendimento.\x20'];a541_0x2f67=function(){return _0x4ff831;};return a541_0x2f67();}exports['default']=FindOrCreateTicketService;