'use strict';const a23_0x1481ce=a23_0x40dd;(function(_0x3a71c6,_0x2939bf){const _0x3f9234=a23_0x40dd,_0x484eca=_0x3a71c6();while(!![]){try{const _0x13df9a=-parseInt(_0x3f9234(0x1b1))/0x1+-parseInt(_0x3f9234(0x1b5))/0x2+-parseInt(_0x3f9234(0x1bb))/0x3*(-parseInt(_0x3f9234(0x1d5))/0x4)+parseInt(_0x3f9234(0x200))/0x5*(-parseInt(_0x3f9234(0x20d))/0x6)+parseInt(_0x3f9234(0x1e8))/0x7+-parseInt(_0x3f9234(0x1c4))/0x8*(-parseInt(_0x3f9234(0x1b7))/0x9)+parseInt(_0x3f9234(0x1a1))/0xa;if(_0x13df9a===_0x2939bf)break;else _0x484eca['push'](_0x484eca['shift']());}catch(_0x4c3d07){_0x484eca['push'](_0x484eca['shift']());}}}(a23_0x2d61,0xdf3cf));var __createBinding=this&&this[a23_0x1481ce(0x1eb)]||(Object[a23_0x1481ce(0x1dc)]?function(_0x3fde1d,_0x53ab46,_0x10c8ee,_0x4ef863){const _0x32fb5f=a23_0x1481ce;if(_0x4ef863===undefined)_0x4ef863=_0x10c8ee;var _0x49b9f9=Object[_0x32fb5f(0x1da)](_0x53ab46,_0x10c8ee);(!_0x49b9f9||(_0x32fb5f(0x199)in _0x49b9f9?!_0x53ab46[_0x32fb5f(0x1ca)]:_0x49b9f9[_0x32fb5f(0x192)]||_0x49b9f9[_0x32fb5f(0x1d1)]))&&(_0x49b9f9={'enumerable':!![],'get':function(){return _0x53ab46[_0x10c8ee];}}),Object[_0x32fb5f(0x1e9)](_0x3fde1d,_0x4ef863,_0x49b9f9);}:function(_0xc2442a,_0x3d75b1,_0x490434,_0x4cf903){if(_0x4cf903===undefined)_0x4cf903=_0x490434;_0xc2442a[_0x4cf903]=_0x3d75b1[_0x490434];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a23_0x1481ce(0x1dc)]?function(_0x4f6694,_0xce5e21){const _0xd64b67=a23_0x1481ce;Object[_0xd64b67(0x1e9)](_0x4f6694,_0xd64b67(0x1fc),{'enumerable':!![],'value':_0xce5e21});}:function(_0x3c8cb1,_0x3fc45c){const _0x8f4b6b=a23_0x1481ce;_0x3c8cb1[_0x8f4b6b(0x1fc)]=_0x3fc45c;}),__importStar=this&&this[a23_0x1481ce(0x1a9)]||function(_0x51bd96){const _0x5347c4=a23_0x1481ce;if(_0x51bd96&&_0x51bd96['__esModule'])return _0x51bd96;var _0x39a32d={};if(_0x51bd96!=null){for(var _0x2b3543 in _0x51bd96)if(_0x2b3543!==_0x5347c4(0x1fc)&&Object[_0x5347c4(0x207)][_0x5347c4(0x1cc)][_0x5347c4(0x1f6)](_0x51bd96,_0x2b3543))__createBinding(_0x39a32d,_0x51bd96,_0x2b3543);}return __setModuleDefault(_0x39a32d,_0x51bd96),_0x39a32d;},__importDefault=this&&this[a23_0x1481ce(0x1c5)]||function(_0x631c91){const _0x525554=a23_0x1481ce;return _0x631c91&&_0x631c91[_0x525554(0x1ca)]?_0x631c91:{'default':_0x631c91};};Object[a23_0x1481ce(0x1e9)](exports,a23_0x1481ce(0x1ca),{'value':!![]}),exports[a23_0x1481ce(0x1e7)]=exports[a23_0x1481ce(0x18d)]=exports[a23_0x1481ce(0x1b2)]=exports[a23_0x1481ce(0x1b3)]=exports[a23_0x1481ce(0x1aa)]=exports[a23_0x1481ce(0x19f)]=exports[a23_0x1481ce(0x1bf)]=void 0x0;const AppError_1=__importDefault(require(a23_0x1481ce(0x1d2))),SetTicketMessagesAsRead_1=__importDefault(require('../helpers/SetTicketMessagesAsRead')),socket_1=require(a23_0x1481ce(0x18f)),Message_1=__importDefault(require('../models/Message')),Queue_1=__importDefault(require(a23_0x1481ce(0x1ac))),User_1=__importDefault(require(a23_0x1481ce(0x1be))),Whatsapp_1=__importDefault(require(a23_0x1481ce(0x197))),jsonwebtoken_1=require(a23_0x1481ce(0x1e5)),auth_1=__importDefault(require(a23_0x1481ce(0x1e1))),path_1=__importDefault(require(a23_0x1481ce(0x20b))),lodash_1=require(a23_0x1481ce(0x1a6)),ListMessagesService_1=__importDefault(require(a23_0x1481ce(0x1d3))),ShowTicketService_1=__importDefault(require(a23_0x1481ce(0x1c7))),DeleteWhatsAppMessage_1=__importDefault(require('../services/WbotServices/DeleteWhatsAppMessage')),SendWhatsAppMedia_1=__importDefault(require(a23_0x1481ce(0x1a0))),SendWhatsAppMessage_1=__importDefault(require('../services/WbotServices/SendWhatsAppMessage')),CreateMessageService_1=__importDefault(require(a23_0x1481ce(0x1d9))),sendFacebookMessageMedia_1=require(a23_0x1481ce(0x1fa)),sendFacebookMessage_1=__importDefault(require('../services/FacebookServices/sendFacebookMessage')),ShowPlanCompanyService_1=__importDefault(require('../services/CompanyService/ShowPlanCompanyService')),ListMessagesServiceAll_1=__importDefault(require(a23_0x1481ce(0x1c8))),ShowContactService_1=__importDefault(require('../services/ContactServices/ShowContactService')),FindOrCreateTicketService_1=__importDefault(require(a23_0x1481ce(0x1c0))),UpdateTicketService_1=__importDefault(require(a23_0x1481ce(0x1e6))),ShowMessageService_1=__importStar(require(a23_0x1481ce(0x196))),CompaniesSettings_1=__importDefault(require('../models/CompaniesSettings')),index=async(_0x295313,_0x87e882)=>{const _0x1d0af7=a23_0x1481ce,{ticketId:_0x16fac2}=_0x295313[_0x1d0af7(0x1e2)],{pageNumber:_0x4a359e,selectedQueues:_0xefd75c}=_0x295313[_0x1d0af7(0x1c6)],{companyId:_0x2185b2,profile:_0x4ff843}=_0x295313['user'];let _0x28aee9=[];const _0x33ff41=await User_1[_0x1d0af7(0x1fc)][_0x1d0af7(0x1fe)](_0x295313['user']['id'],{'include':[{'model':Queue_1[_0x1d0af7(0x1fc)],'as':_0x1d0af7(0x194)}]});_0xefd75c?_0x28aee9=JSON[_0x1d0af7(0x1bc)](_0xefd75c):_0x33ff41[_0x1d0af7(0x194)]['forEach'](_0x1cc55a=>{const _0x113ebf=_0x1d0af7;_0x28aee9[_0x113ebf(0x190)](_0x1cc55a['id']);});const {count:_0x4ad9f2,messages:_0x1c367b,ticket:_0x133a71,hasMore:_0x119af0}=await(0x0,ListMessagesService_1[_0x1d0af7(0x1fc)])({'pageNumber':_0x4a359e,'ticketId':_0x16fac2,'companyId':_0x2185b2,'queues':_0x28aee9,'user':_0x33ff41});return _0x133a71[_0x1d0af7(0x208)]===_0x1d0af7(0x1f8)&&(0x0,SetTicketMessagesAsRead_1[_0x1d0af7(0x1fc)])(_0x133a71),_0x87e882[_0x1d0af7(0x19e)]({'count':_0x4ad9f2,'messages':_0x1c367b,'ticket':_0x133a71,'hasMore':_0x119af0});};exports[a23_0x1481ce(0x1bf)]=index;function obterNomeEExtensaoDoArquivo(_0x377b01){const _0x1545b0=a23_0x1481ce;var _0x1e7725=new URL(_0x377b01),_0x3cafbf=_0x1e7725[_0x1545b0(0x1f0)],_0x1eb926=_0x3cafbf['split']('/')[_0x1545b0(0x1ad)](),_0x4b7fc7=_0x1eb926[_0x1545b0(0x191)]('.'),_0x1f3dc7=_0x4b7fc7[0x0],_0x1c8af6=_0x4b7fc7[0x1];return _0x1f3dc7+'.'+_0x1c8af6;}const store=async(_0x5ed502,_0x1692c2)=>{const _0x564974=a23_0x1481ce,{ticketId:_0x4d1aa9}=_0x5ed502['params'],{body:_0xbe6f50,quotedMsg:_0xc2c1ad,isPrivate:_0x4564c9,vCard:_0x19e9ec}=_0x5ed502['body'],_0x3957a6=_0x5ed502['files'],{companyId:_0x49c385}=_0x5ed502[_0x564974(0x1f9)],_0x27efec=await(0x0,ShowTicketService_1['default'])(_0x4d1aa9,_0x49c385);_0x27efec['channel']===_0x564974(0x1f8)&&(0x0,SetTicketMessagesAsRead_1[_0x564974(0x1fc)])(_0x27efec);try{if(_0x3957a6)await Promise[_0x564974(0x1f2)](_0x3957a6['map'](async(_0x1cb45f,_0x31fc70)=>{const _0x227b3b=_0x564974;_0x27efec[_0x227b3b(0x208)]===_0x227b3b(0x1f8)&&await(0x0,SendWhatsAppMedia_1[_0x227b3b(0x1fc)])({'media':_0x1cb45f,'ticket':_0x27efec,'body':Array[_0x227b3b(0x1df)](_0xbe6f50)?_0xbe6f50[_0x31fc70]:_0xbe6f50,'isPrivate':/\u200d/['test'](_0xbe6f50),'isForwarded':![]});if(_0x27efec[_0x227b3b(0x208)]===_0x227b3b(0x1f4)||_0x27efec['channel']===_0x227b3b(0x1ba))try{await(0x0,sendFacebookMessageMedia_1[_0x227b3b(0x193)])({'media':_0x1cb45f,'ticket':_0x27efec});}catch(_0x4c91ec){console['log'](_0x4c91ec);}}));else{if(_0x27efec[_0x564974(0x208)]===_0x564974(0x1f8)&&!_0x4564c9)await(0x0,SendWhatsAppMessage_1[_0x564974(0x1fc)])({'body':_0xbe6f50,'ticket':_0x27efec,'quotedMsg':_0xc2c1ad,'vCard':_0x19e9ec});else{if(_0x27efec[_0x564974(0x208)]==='whatsapp'&&_0x4564c9){const _0x5ec8a4={'wid':_0x564974(0x203)+_0x27efec[_0x564974(0x19b)]['toString']()[_0x564974(0x198)]('\x20',''),'ticketId':_0x27efec['id'],'contactId':undefined,'body':_0xbe6f50,'fromMe':!![],'mediaType':!(0x0,lodash_1[_0x564974(0x1e4)])(_0x19e9ec)?'contactMessage':_0x564974(0x19a),'read':!![],'quotedMsgId':null,'ack':0x2,'remoteJid':_0x27efec[_0x564974(0x1ce)]?.[_0x564974(0x19d)],'participant':null,'dataJson':null,'ticketTrakingId':null,'isPrivate':_0x4564c9};await(0x0,CreateMessageService_1[_0x564974(0x1fc)])({'messageData':_0x5ec8a4,'companyId':_0x27efec[_0x564974(0x1f3)]});}else(_0x27efec['channel']===_0x564974(0x1f4)||_0x27efec[_0x564974(0x208)]===_0x564974(0x1ba))&&await(0x0,sendFacebookMessage_1[_0x564974(0x1fc)])({'body':_0xbe6f50,'ticket':_0x27efec,'quotedMsg':_0xc2c1ad});}}return _0x1692c2[_0x564974(0x1e7)]();}catch(_0x3337f5){return console['log'](_0x3337f5),_0x1692c2['status'](0x190)[_0x564974(0x19e)]({'error':_0x3337f5['message']});}};exports['store']=store;const forwardmessage=async(_0x2cf404,_0x323ebf)=>{const _0x552a09=a23_0x1481ce,_0x367c4f=_0x2cf404[_0x552a09(0x20a)][_0x552a09(0x1b9)],[,_0x27a17b]=_0x367c4f[_0x552a09(0x191)]('\x20'),_0x3c7565=(0x0,jsonwebtoken_1[_0x552a09(0x1d8)])(_0x27a17b,auth_1['default'][_0x552a09(0x205)]),{id:_0x3407c7}=_0x2cf404[_0x552a09(0x1f9)],_0x489962=await User_1[_0x552a09(0x1fc)][_0x552a09(0x1fe)](_0x3407c7),{currentContacts:_0x4285af,message:_0x45f2b0,signMessage:_0x49fb0d}=_0x2cf404[_0x552a09(0x1b6)],{companyId:_0xbaad60}=_0x45f2b0,_0x2615fc=await CompaniesSettings_1['default']['findOne']({'where':{'companyId':_0xbaad60}}),_0x4bae9e=_0x45f2b0['quotedMsgId'];let _0x15c5a9;return _0x4285af[_0x552a09(0x1ee)](async _0x23c82a=>{const _0x4426b9=_0x552a09,_0x37ebb7=await(0x0,ShowContactService_1[_0x4426b9(0x1fc)])(_0x23c82a['id'],_0x45f2b0[_0x4426b9(0x1f3)]),_0x436c81=await(0x0,ShowTicketService_1[_0x4426b9(0x1fc)])(_0x45f2b0['ticketId'],_0x45f2b0[_0x4426b9(0x1f3)]),{ticket:_0x5d615a,isCreated:_0x3a9280}=await(0x0,FindOrCreateTicketService_1[_0x4426b9(0x1fc)])(_0x37ebb7,_0x436c81?.['whatsapp'],0x0,_0x436c81[_0x4426b9(0x1f3)],_0x436c81[_0x4426b9(0x1d4)],_0x489962['id'],_0x37ebb7['isGroup']?_0x37ebb7:null,_0x4426b9(0x1f8),null,!![],_0x2615fc),_0x4ab7f3={'status':_0x5d615a[_0x4426b9(0x201)]?_0x4426b9(0x1cd):'open','userId':_0x489962['id'],'queueId':_0x436c81[_0x4426b9(0x1d4)]};await(0x0,UpdateTicketService_1[_0x4426b9(0x1fc)])({'ticketData':_0x4ab7f3,'ticketId':_0x5d615a['id'],'companyId':_0x5d615a[_0x4426b9(0x1f3)]});if(_0x436c81[_0x4426b9(0x208)]===_0x4426b9(0x1f8)){if(_0x45f2b0['mediaUrl']){_0x15c5a9='_Encaminhada_';const _0x92b254=_0x45f2b0[_0x4426b9(0x1c1)]['replace'](':'+process[_0x4426b9(0x1a2)][_0x4426b9(0x1ed)],''),_0x2603c3=obterNomeEExtensaoDoArquivo(_0x92b254),_0x2a674d=path_1['default'][_0x4426b9(0x1ae)](__dirname,'..','..','..','backend',_0x4426b9(0x1b4)),_0xeffafd=path_1[_0x4426b9(0x1fc)]['join'](_0x2a674d,_0x4426b9(0x1af)+_0x436c81['companyId'],_0x2603c3),_0x4f6d5e={'fieldname':_0x4426b9(0x195),'originalname':_0x2603c3,'encoding':'7bit','mimetype':_0x45f2b0[_0x4426b9(0x1db)],'filename':_0x2603c3,'path':_0xeffafd};await(0x0,SendWhatsAppMedia_1[_0x4426b9(0x1fc)])({'media':_0x4f6d5e,'ticket':_0x5d615a,'body':_0x15c5a9,'isForwarded':![]});}else _0x49fb0d?_0x15c5a9=_0x4426b9(0x209)+_0x489962[_0x4426b9(0x1c2)]+_0x4426b9(0x1ff)+_0x45f2b0[_0x4426b9(0x1b6)]:_0x15c5a9=''+_0x45f2b0[_0x4426b9(0x1b6)],await(0x0,SendWhatsAppMessage_1[_0x4426b9(0x1fc)])({'body':_0x15c5a9,'ticket':_0x5d615a,'quotedMsg':_0x4bae9e});}}),_0x323ebf[_0x552a09(0x19e)](_0x552a09(0x1cf));};exports[a23_0x1481ce(0x1aa)]=forwardmessage;const forwardMessage=async(_0x30b2e3,_0x419c08)=>{const _0x45f532=a23_0x1481ce,{quotedMsg:_0x11915a,signMessage:_0x435a2c,messageId:_0x3f75df,contactId:_0x3987a6}=_0x30b2e3[_0x45f532(0x1b6)],{id:_0x3493a1,companyId:_0x47b030}=_0x30b2e3['user'],_0x22abd6=await User_1['default']['findByPk'](_0x3493a1);if(!_0x3f75df||!_0x3987a6)return _0x419c08[_0x45f532(0x202)](0xc8)[_0x45f532(0x1e7)](_0x45f532(0x206));const _0x5cf912=await(0x0,ShowMessageService_1[_0x45f532(0x1fc)])(_0x3f75df),_0x3fadac=await(0x0,ShowContactService_1['default'])(_0x3987a6,_0x47b030);if(!_0x5cf912)return _0x419c08['status'](0x194)[_0x45f532(0x1e7)](_0x45f532(0x1ea));if(!_0x3fadac)return _0x419c08[_0x45f532(0x202)](0x194)[_0x45f532(0x1e7)]('Contact\x20not\x20found');const _0x32b7af=await CompaniesSettings_1[_0x45f532(0x1fc)][_0x45f532(0x1b0)]({'where':{'companyId':_0x47b030}}),_0x402848=await(0x0,ShowMessageService_1[_0x45f532(0x18e)])(_0x5cf912);if(!_0x402848)return _0x419c08['status'](0x194)[_0x45f532(0x1e7)]('Whatsapp\x20from\x20message\x20not\x20found');const _0x17258a=await(0x0,ShowTicketService_1[_0x45f532(0x1fc)])(_0x5cf912[_0x45f532(0x1f7)],_0x5cf912[_0x45f532(0x1f3)]),{ticket:_0x2c163b}=await(0x0,FindOrCreateTicketService_1[_0x45f532(0x1fc)])(_0x3fadac,_0x17258a?.[_0x45f532(0x1f8)],0x0,_0x17258a['companyId'],_0x17258a[_0x45f532(0x1d4)],_0x22abd6['id'],_0x3fadac[_0x45f532(0x201)]?_0x3fadac:null,_0x45f532(0x1f8),null,!![],_0x32b7af);let _0x363d59;(0x0,lodash_1['isNil'])(_0x2c163b?.[_0x45f532(0x1d4)])?_0x363d59={'status':_0x2c163b[_0x45f532(0x201)]?_0x45f532(0x1cd):_0x45f532(0x1e3),'userId':_0x22abd6['id'],'queueId':_0x17258a[_0x45f532(0x1d4)]}:_0x363d59={'status':_0x2c163b[_0x45f532(0x201)]?_0x45f532(0x1cd):'open','userId':_0x22abd6['id']};await(0x0,UpdateTicketService_1[_0x45f532(0x1fc)])({'ticketData':_0x363d59,'ticketId':_0x2c163b['id'],'companyId':_0x2c163b[_0x45f532(0x1f3)]});let _0x37cb24=_0x5cf912[_0x45f532(0x1b6)];if(_0x5cf912[_0x45f532(0x1db)]===_0x45f532(0x1cb)||_0x5cf912['mediaType']===_0x45f532(0x19a))await(0x0,SendWhatsAppMessage_1[_0x45f532(0x1fc)])({'body':_0x37cb24,'ticket':_0x2c163b,'quotedMsg':_0x11915a,'isForwarded':_0x5cf912['fromMe']?![]:!![]});else{const _0x3ba518=_0x5cf912['mediaUrl'][_0x45f532(0x198)](':'+process[_0x45f532(0x1a2)][_0x45f532(0x1ed)],''),_0x2ea1ab=obterNomeEExtensaoDoArquivo(_0x3ba518);_0x37cb24===_0x2ea1ab&&(_0x37cb24='');const _0x2fb785=path_1[_0x45f532(0x1fc)][_0x45f532(0x1ae)](__dirname,'..','..','..',_0x45f532(0x1d6),_0x45f532(0x1b4)),_0x1ddd0c=path_1[_0x45f532(0x1fc)][_0x45f532(0x1ae)](_0x2fb785,'company'+_0x2c163b[_0x45f532(0x1f3)],_0x2ea1ab),_0xd4955a={'fieldname':'medias','originalname':_0x2ea1ab,'encoding':_0x45f532(0x204),'mimetype':_0x5cf912['mediaType'],'filename':_0x2ea1ab,'path':_0x1ddd0c};await(0x0,SendWhatsAppMedia_1[_0x45f532(0x1fc)])({'media':_0xd4955a,'ticket':_0x2c163b,'body':_0x37cb24,'isForwarded':_0x5cf912['fromMe']?![]:!![]});}return _0x419c08['send']();};exports[a23_0x1481ce(0x1b3)]=forwardMessage;function a23_0x40dd(_0x49244a,_0x1e2cc5){const _0x2d6160=a23_0x2d61();return a23_0x40dd=function(_0x40dd89,_0x2393c7){_0x40dd89=_0x40dd89-0x18d;let _0x148235=_0x2d6160[_0x40dd89];return _0x148235;},a23_0x40dd(_0x49244a,_0x1e2cc5);}function a23_0x2d61(){const _0x589a88=['default','originalname','findByPk','*\x0a\x0a','5kilPpm','isGroup','status','PVT','7bit','secret','MessageId\x20or\x20ContactId\x20not\x20found','prototype','channel','*Mensagem\x20encaminhada\x20de\x20','headers','path','destroy','2640720GCZawm','allMe','GetWhatsAppFromMessage','../libs/socket','push','split','writable','sendFacebookMessageMedia','queues','medias','../services/MessageServices/ShowMessageService','../models/Whatsapp','replace','get','extendedTextMessage','updatedAt','toString','remoteJid','json','store','../services/WbotServices/SendWhatsAppMedia','1516150sZeTVS','env','keys','plan','company-','lodash','files','O\x20número\x20é\x20obrigatório','__importStar','forwardmessage','dateEnd','../models/Queue','pop','join','company','findOne','843259iUctqc','remove','forwardMessage','public','679182SjZwdL','body','2926674miysPC','Não\x20foi\x20possível\x20enviar\x20a\x20mensagem,\x20tente\x20novamente\x20em\x20alguns\x20instantes','authorization','instagram','168rZRJcI','parse','Não\x20foi\x20possível\x20realizar\x20a\x20operação','../models/User','index','../services/TicketServices/FindOrCreateTicketService','mediaUrl','name','messageQueue','32SrfTdx','__importDefault','query','../services/TicketServices/ShowTicketService','../services/MessageServices/ListMessagesServiceAll','isPrivate','__esModule','conversation','hasOwnProperty','group','contact','count','length','configurable','../errors/AppError','../services/MessageServices/ListMessagesService','queueId','76876EjSWTI','backend','app','verify','../services/MessageServices/CreateMessageService','getOwnPropertyDescriptor','mediaType','create','-appMessage','SendMessage','isArray','add','../config/auth','params','open','isNil','jsonwebtoken','../services/TicketServices/UpdateTicketService','send','61110MMYUxx','defineProperty','Message\x20not\x20found','__createBinding','delete','PORT','map','emit','pathname','Essa\x20empresa\x20não\x20tem\x20permissão\x20para\x20usar\x20a\x20API\x20Externa.\x20Entre\x20em\x20contato\x20com\x20o\x20Suporte\x20para\x20verificar\x20nossos\x20planos!','all','companyId','facebook','fromMe','call','ticketId','whatsapp','user','../services/FacebookServices/sendFacebookMessageMedia','dateStart'];a23_0x2d61=function(){return _0x589a88;};return a23_0x2d61();}const remove=async(_0x11382e,_0x1ff938)=>{const _0x75fe04=a23_0x1481ce,{messageId:_0x284c7a}=_0x11382e[_0x75fe04(0x1e2)],{companyId:_0x16d13a}=_0x11382e['user'],_0x44c5cd=await(0x0,DeleteWhatsAppMessage_1[_0x75fe04(0x1fc)])(_0x284c7a),_0x1b4acb=(0x0,socket_1['getIO'])();return _0x44c5cd[_0x75fe04(0x1c9)]&&(await Message_1[_0x75fe04(0x1fc)][_0x75fe04(0x20c)]({'where':{'id':_0x44c5cd['id']}}),_0x1b4acb['to'](_0x44c5cd['ticketId'][_0x75fe04(0x19c)]())[_0x75fe04(0x1ef)](_0x75fe04(0x1a5)+_0x16d13a+_0x75fe04(0x1dd),{'action':_0x75fe04(0x1ec),'message':_0x44c5cd})),_0x1b4acb['to'](_0x44c5cd['ticketId'][_0x75fe04(0x19c)]())[_0x75fe04(0x1ef)](_0x75fe04(0x1a5)+_0x16d13a+'-appMessage',{'action':'update','message':_0x44c5cd}),_0x1ff938[_0x75fe04(0x1e7)]();};exports[a23_0x1481ce(0x1b2)]=remove;const allMe=async(_0x7a46b,_0x100510)=>{const _0x368cb0=a23_0x1481ce,_0x3ace22=_0x7a46b[_0x368cb0(0x1c6)][_0x368cb0(0x1fb)],_0x10d3fc=_0x7a46b[_0x368cb0(0x1c6)][_0x368cb0(0x1ab)],_0x108f3c=_0x7a46b[_0x368cb0(0x1c6)][_0x368cb0(0x1f5)],{companyId:_0x2fa4f4}=_0x7a46b[_0x368cb0(0x1f9)],{count:_0xf67692}=await(0x0,ListMessagesServiceAll_1['default'])({'companyId':_0x2fa4f4,'fromMe':_0x108f3c,'dateStart':_0x3ace22,'dateEnd':_0x10d3fc});return _0x100510[_0x368cb0(0x19e)]({'count':_0xf67692});};exports[a23_0x1481ce(0x18d)]=allMe;const send=async(_0x186c04,_0x26712d)=>{const _0x223f97=a23_0x1481ce,_0xe0fc2=_0x186c04['body'],_0x8e69c7=_0x186c04[_0x223f97(0x1a7)];try{const _0xb5d438=_0x186c04[_0x223f97(0x20a)][_0x223f97(0x1b9)],[,_0x4b1e71]=_0xb5d438[_0x223f97(0x191)]('\x20'),_0x4cf6ed=await Whatsapp_1[_0x223f97(0x1fc)][_0x223f97(0x1b0)]({'where':{'token':_0x4b1e71}}),_0x34dd9a=_0x4cf6ed[_0x223f97(0x1f3)],_0x3dda39=await(0x0,ShowPlanCompanyService_1[_0x223f97(0x1fc)])(_0x34dd9a),_0x30175c=_0x3dda39[_0x223f97(0x1a4)]['useExternalApi'];if(_0x30175c){if(!_0x4cf6ed)throw new Error(_0x223f97(0x1bd));if(_0xe0fc2['number']===undefined)throw new Error(_0x223f97(0x1a8));const _0xdc6264=_0xe0fc2['number'],_0x2baccf=_0xe0fc2['body'];return _0x8e69c7?await Promise[_0x223f97(0x1f2)](_0x8e69c7[_0x223f97(0x1ee)](async _0x2e6e93=>{const _0x4d43f6=_0x223f97;_0x186c04[_0x4d43f6(0x1d7)]['get'](_0x4d43f6(0x194))[_0x4d43f6(0x1c3)][_0x4d43f6(0x1e0)]('SendMessage',{'whatsappId':_0x4cf6ed['id'],'data':{'number':_0xdc6264,'body':_0x2e6e93[_0x4d43f6(0x1fd)][_0x4d43f6(0x198)]('/','-'),'mediaPath':_0x2e6e93['path']}},{'removeOnComplete':!![],'attempts':0x3});})):_0x186c04['app'][_0x223f97(0x199)](_0x223f97(0x194))[_0x223f97(0x1c3)][_0x223f97(0x1e0)](_0x223f97(0x1de),{'whatsappId':_0x4cf6ed['id'],'data':{'number':_0xdc6264,'body':_0x2baccf}},{'removeOnComplete':!![],'attempts':0x3}),_0x26712d[_0x223f97(0x1e7)]({'mensagem':'Mensagem\x20enviada!'});}return _0x26712d[_0x223f97(0x202)](0x190)[_0x223f97(0x19e)]({'error':_0x223f97(0x1f1)});}catch(_0xb26da5){console['log'](_0xb26da5);if(Object[_0x223f97(0x1a3)](_0xb26da5)[_0x223f97(0x1d0)]===0x0)throw new AppError_1[(_0x223f97(0x1fc))](_0x223f97(0x1b8));else throw new AppError_1['default'](_0xb26da5['message']);}};exports['send']=send;