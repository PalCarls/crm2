'use strict';const a23_0x4e34d1=a23_0x8589;(function(_0x509a35,_0x53e934){const _0x1c2aa2=a23_0x8589,_0x235b44=_0x509a35();while(!![]){try{const _0x152381=-parseInt(_0x1c2aa2(0x9e))/0x1*(-parseInt(_0x1c2aa2(0x95))/0x2)+parseInt(_0x1c2aa2(0xc1))/0x3+parseInt(_0x1c2aa2(0xb2))/0x4+parseInt(_0x1c2aa2(0xbc))/0x5+-parseInt(_0x1c2aa2(0xdd))/0x6+-parseInt(_0x1c2aa2(0x81))/0x7+-parseInt(_0x1c2aa2(0xcd))/0x8;if(_0x152381===_0x53e934)break;else _0x235b44['push'](_0x235b44['shift']());}catch(_0x15fecd){_0x235b44['push'](_0x235b44['shift']());}}}(a23_0x4353,0x1fe1a));var __createBinding=this&&this[a23_0x4e34d1(0xe4)]||(Object[a23_0x4e34d1(0x9f)]?function(_0x57b035,_0x171462,_0x11b1b8,_0x407751){const _0x41380b=a23_0x4e34d1;if(_0x407751===undefined)_0x407751=_0x11b1b8;var _0x24bba2=Object[_0x41380b(0xb3)](_0x171462,_0x11b1b8);(!_0x24bba2||(_0x41380b(0xc0)in _0x24bba2?!_0x171462['__esModule']:_0x24bba2[_0x41380b(0x9c)]||_0x24bba2[_0x41380b(0x7e)]))&&(_0x24bba2={'enumerable':!![],'get':function(){return _0x171462[_0x11b1b8];}}),Object[_0x41380b(0xf4)](_0x57b035,_0x407751,_0x24bba2);}:function(_0x4a6a32,_0x2a07d7,_0x1718cc,_0x32c6be){if(_0x32c6be===undefined)_0x32c6be=_0x1718cc;_0x4a6a32[_0x32c6be]=_0x2a07d7[_0x1718cc];}),__setModuleDefault=this&&this[a23_0x4e34d1(0x87)]||(Object[a23_0x4e34d1(0x9f)]?function(_0x571ffa,_0x31e803){const _0x47c55d=a23_0x4e34d1;Object[_0x47c55d(0xf4)](_0x571ffa,_0x47c55d(0x8a),{'enumerable':!![],'value':_0x31e803});}:function(_0x32b060,_0x1149b5){_0x32b060['default']=_0x1149b5;}),__importStar=this&&this['__importStar']||function(_0x312aba){const _0x436abe=a23_0x4e34d1;if(_0x312aba&&_0x312aba[_0x436abe(0xde)])return _0x312aba;var _0x547294={};if(_0x312aba!=null){for(var _0x3b723a in _0x312aba)if(_0x3b723a!=='default'&&Object[_0x436abe(0x80)][_0x436abe(0xef)]['call'](_0x312aba,_0x3b723a))__createBinding(_0x547294,_0x312aba,_0x3b723a);}return __setModuleDefault(_0x547294,_0x312aba),_0x547294;},__importDefault=this&&this[a23_0x4e34d1(0xd5)]||function(_0x434609){const _0x5f5228=a23_0x4e34d1;return _0x434609&&_0x434609[_0x5f5228(0xde)]?_0x434609:{'default':_0x434609};};Object[a23_0x4e34d1(0xf4)](exports,'__esModule',{'value':!![]}),exports[a23_0x4e34d1(0x84)]=exports[a23_0x4e34d1(0xdf)]=exports['remove']=exports[a23_0x4e34d1(0x88)]=exports[a23_0x4e34d1(0x8e)]=exports['store']=exports[a23_0x4e34d1(0xec)]=void 0x0;const AppError_1=__importDefault(require(a23_0x4e34d1(0xac))),fs_1=__importDefault(require('fs')),SetTicketMessagesAsRead_1=__importDefault(require(a23_0x4e34d1(0xeb))),socket_1=require(a23_0x4e34d1(0xf1)),Message_1=__importDefault(require(a23_0x4e34d1(0x98))),Queue_1=__importDefault(require(a23_0x4e34d1(0xee))),User_1=__importDefault(require('../models/User')),Whatsapp_1=__importDefault(require(a23_0x4e34d1(0xb9))),jsonwebtoken_1=require('jsonwebtoken'),auth_1=__importDefault(require(a23_0x4e34d1(0x85))),path_1=__importDefault(require(a23_0x4e34d1(0x89))),lodash_1=require(a23_0x4e34d1(0xed)),ListMessagesService_1=__importDefault(require(a23_0x4e34d1(0xd8))),ShowTicketService_1=__importDefault(require(a23_0x4e34d1(0xb0))),DeleteWhatsAppMessage_1=__importDefault(require(a23_0x4e34d1(0xb4))),SendWhatsAppMedia_1=__importDefault(require(a23_0x4e34d1(0xbf))),SendWhatsAppMessage_1=__importDefault(require(a23_0x4e34d1(0x8f))),CreateMessageService_1=__importDefault(require('../services/MessageServices/CreateMessageService')),sendFacebookMessageMedia_1=require('../services/FacebookServices/sendFacebookMessageMedia'),sendFacebookMessage_1=__importDefault(require('../services/FacebookServices/sendFacebookMessage')),ShowPlanCompanyService_1=__importDefault(require('../services/CompanyService/ShowPlanCompanyService')),ListMessagesServiceAll_1=__importDefault(require(a23_0x4e34d1(0x86))),ShowContactService_1=__importDefault(require(a23_0x4e34d1(0x9b))),FindOrCreateTicketService_1=__importDefault(require(a23_0x4e34d1(0xe8))),UpdateTicketService_1=__importDefault(require(a23_0x4e34d1(0xea))),ShowMessageService_1=__importStar(require(a23_0x4e34d1(0x9d))),CompaniesSettings_1=__importDefault(require(a23_0x4e34d1(0xb6))),index=async(_0x36b4ef,_0xf5d51f)=>{const _0x1d4433=a23_0x4e34d1,{ticketId:_0x4ba923}=_0x36b4ef[_0x1d4433(0xd4)],{pageNumber:_0xa80ef2,selectedQueues:_0x18a6db}=_0x36b4ef[_0x1d4433(0xe6)],{companyId:_0x4204db,profile:_0x48006b}=_0x36b4ef[_0x1d4433(0xe3)];let _0x72b604=[];const _0x3b1d14=await User_1[_0x1d4433(0x8a)][_0x1d4433(0x91)](_0x36b4ef['user']['id'],{'include':[{'model':Queue_1[_0x1d4433(0x8a)],'as':'queues'}]});_0x18a6db?_0x72b604=JSON['parse'](_0x18a6db):_0x3b1d14[_0x1d4433(0xb5)][_0x1d4433(0xd7)](_0xf2d32=>{const _0x27235a=_0x1d4433;_0x72b604[_0x27235a(0xf6)](_0xf2d32['id']);});const {count:_0xf14968,messages:_0x2d594b,ticket:_0x3a9328,hasMore:_0x57ac6b}=await(0x0,ListMessagesService_1[_0x1d4433(0x8a)])({'pageNumber':_0xa80ef2,'ticketId':_0x4ba923,'companyId':_0x4204db,'queues':_0x72b604,'user':_0x3b1d14});return _0x3a9328[_0x1d4433(0xc7)]===_0x1d4433(0xc2)&&(0x0,SetTicketMessagesAsRead_1['default'])(_0x3a9328),_0xf5d51f[_0x1d4433(0xc9)]({'count':_0xf14968,'messages':_0x2d594b,'ticket':_0x3a9328,'hasMore':_0x57ac6b});};exports[a23_0x4e34d1(0xec)]=index;function obterNomeEExtensaoDoArquivo(_0x2b30dc){const _0x3dd50f=a23_0x4e34d1;var _0x41ef7d=new URL(_0x2b30dc),_0x10aeb3=_0x41ef7d[_0x3dd50f(0xd9)],_0x4acbe0=_0x10aeb3[_0x3dd50f(0xc3)]('/')[_0x3dd50f(0xa0)](),_0x46b6b6=_0x4acbe0[_0x3dd50f(0xc3)]('.'),_0x3c3d86=_0x46b6b6[0x0],_0x34a306=_0x46b6b6[0x1];return _0x3c3d86+'.'+_0x34a306;}const store=async(_0x356d8b,_0x3dfb0e)=>{const _0x407907=a23_0x4e34d1,{ticketId:_0xbd8c59}=_0x356d8b[_0x407907(0xd4)],{body:_0x1917d9,quotedMsg:_0x1c2d10,isPrivate:_0x5b19e5,vCard:_0x1461fc}=_0x356d8b[_0x407907(0x9a)],_0xcbafae=_0x356d8b[_0x407907(0xd2)],{companyId:_0x12c085}=_0x356d8b[_0x407907(0xe3)],_0x43d0ac=await(0x0,ShowTicketService_1[_0x407907(0x8a)])(_0xbd8c59,_0x12c085);_0x43d0ac['channel']==='whatsapp'&&(0x0,SetTicketMessagesAsRead_1['default'])(_0x43d0ac);try{if(_0xcbafae)await Promise[_0x407907(0x97)](_0xcbafae[_0x407907(0xf7)](async(_0x2550f8,_0x311c91)=>{const _0x2bb641=_0x407907;_0x43d0ac[_0x2bb641(0xc7)]===_0x2bb641(0xc2)&&await(0x0,SendWhatsAppMedia_1[_0x2bb641(0x8a)])({'media':_0x2550f8,'ticket':_0x43d0ac,'body':Array[_0x2bb641(0x99)](_0x1917d9)?_0x1917d9[_0x311c91]:_0x1917d9,'isPrivate':/\u200d/[_0x2bb641(0xad)](_0x1917d9),'isForwarded':![]});if(_0x43d0ac[_0x2bb641(0xc7)]===_0x2bb641(0xd6)||_0x43d0ac[_0x2bb641(0xc7)]===_0x2bb641(0xc6))try{await(0x0,sendFacebookMessageMedia_1[_0x2bb641(0xc8)])({'media':_0x2550f8,'ticket':_0x43d0ac});}catch(_0x30d498){console[_0x2bb641(0x8b)](_0x30d498);}const _0x197909=path_1['default']['resolve'](_0x2bb641(0xa8),'company'+_0x12c085,_0x2550f8[_0x2bb641(0x101)]),_0x16f931=fs_1[_0x2bb641(0x8a)][_0x2bb641(0xaf)](_0x197909);_0x16f931&&fs_1[_0x2bb641(0x8a)][_0x2bb641(0x7f)](_0x197909);}));else{if(_0x43d0ac[_0x407907(0xc7)]===_0x407907(0xc2)&&!_0x5b19e5)await(0x0,SendWhatsAppMessage_1[_0x407907(0x8a)])({'body':_0x1917d9,'ticket':_0x43d0ac,'quotedMsg':_0x1c2d10,'vCard':_0x1461fc});else{if(_0x43d0ac['channel']===_0x407907(0xc2)&&_0x5b19e5){const _0x54fec6={'wid':_0x407907(0x96)+_0x43d0ac[_0x407907(0xdb)][_0x407907(0xa4)]()['replace']('\x20',''),'ticketId':_0x43d0ac['id'],'contactId':undefined,'body':_0x1917d9,'fromMe':!![],'mediaType':!(0x0,lodash_1['isNil'])(_0x1461fc)?_0x407907(0xd1):_0x407907(0x94),'read':!![],'quotedMsgId':null,'ack':0x2,'remoteJid':_0x43d0ac[_0x407907(0x8c)]?.[_0x407907(0x7d)],'participant':null,'dataJson':null,'ticketTrakingId':null,'isPrivate':_0x5b19e5};await(0x0,CreateMessageService_1[_0x407907(0x8a)])({'messageData':_0x54fec6,'companyId':_0x43d0ac['companyId']});}else(_0x43d0ac[_0x407907(0xc7)]===_0x407907(0xd6)||_0x43d0ac['channel']===_0x407907(0xc6))&&await(0x0,sendFacebookMessage_1[_0x407907(0x8a)])({'body':_0x1917d9,'ticket':_0x43d0ac,'quotedMsg':_0x1c2d10});}}return _0x3dfb0e['send']();}catch(_0x46c0a5){return console[_0x407907(0x8b)](_0x46c0a5),_0x3dfb0e['status'](0x190)['json']({'error':_0x46c0a5[_0x407907(0xa3)]});}};exports[a23_0x4e34d1(0xcb)]=store;const forwardmessage=async(_0x3c1f5c,_0x21e39a)=>{const _0x5177c6=a23_0x4e34d1,_0x4247c5=_0x3c1f5c['headers'][_0x5177c6(0xd3)],[,_0x45d811]=_0x4247c5[_0x5177c6(0xc3)]('\x20'),_0x28a474=(0x0,jsonwebtoken_1[_0x5177c6(0xdc)])(_0x45d811,auth_1[_0x5177c6(0x8a)][_0x5177c6(0xab)]),{id:_0x5abf88}=_0x3c1f5c['user'],_0x572af6=await User_1[_0x5177c6(0x8a)][_0x5177c6(0x91)](_0x5abf88),{currentContacts:_0x52456c,message:_0x65a08e,signMessage:_0x1b578d}=_0x3c1f5c[_0x5177c6(0x9a)],{companyId:_0x5b03c5}=_0x65a08e,_0x3d486b=await CompaniesSettings_1[_0x5177c6(0x8a)]['findOne']({'where':{'companyId':_0x5b03c5}}),_0x199909=_0x65a08e[_0x5177c6(0xcc)];let _0x5de992;return _0x52456c[_0x5177c6(0xf7)](async _0x493bc6=>{const _0x18a042=_0x5177c6,_0xe12377=await(0x0,ShowContactService_1[_0x18a042(0x8a)])(_0x493bc6['id'],_0x65a08e[_0x18a042(0xa6)]),_0xeab1ad=await(0x0,ShowTicketService_1['default'])(_0x65a08e[_0x18a042(0xa1)],_0x65a08e['companyId']),{ticket:_0x23956e,isCreated:_0x2dbc86}=await(0x0,FindOrCreateTicketService_1[_0x18a042(0x8a)])(_0xe12377,_0xeab1ad?.['whatsapp'],0x0,_0xeab1ad[_0x18a042(0xa6)],_0xeab1ad[_0x18a042(0xf9)],_0x572af6['id'],_0xe12377['isGroup']?_0xe12377:null,'whatsapp',null,!![],_0x3d486b),_0x2dca21={'status':_0x23956e[_0x18a042(0xda)]?'group':_0x18a042(0x92),'userId':_0x572af6['id'],'queueId':_0xeab1ad['queueId']};await(0x0,UpdateTicketService_1[_0x18a042(0x8a)])({'ticketData':_0x2dca21,'ticketId':_0x23956e['id'],'companyId':_0x23956e[_0x18a042(0xa6)]});if(_0xeab1ad[_0x18a042(0xc7)]===_0x18a042(0xc2)){if(_0x65a08e[_0x18a042(0xa2)]){_0x5de992=_0x18a042(0xe2);const _0x2f7838=_0x65a08e[_0x18a042(0xa2)][_0x18a042(0xf0)](':'+process[_0x18a042(0xbb)][_0x18a042(0xe5)],''),_0x5d40c7=obterNomeEExtensaoDoArquivo(_0x2f7838),_0x2d1dd0=path_1['default'][_0x18a042(0xce)](__dirname,'..','..','..',_0x18a042(0xca),_0x18a042(0xa8)),_0x132742=path_1[_0x18a042(0x8a)][_0x18a042(0xce)](_0x2d1dd0,_0x18a042(0xa5)+_0xeab1ad['companyId'],_0x5d40c7),_0x46aa1e={'fieldname':_0x18a042(0xff),'originalname':_0x5d40c7,'encoding':'7bit','mimetype':_0x65a08e[_0x18a042(0xf2)],'filename':_0x5d40c7,'path':_0x132742};await(0x0,SendWhatsAppMedia_1[_0x18a042(0x8a)])({'media':_0x46aa1e,'ticket':_0x23956e,'body':_0x5de992,'isForwarded':![]});}else _0x1b578d?_0x5de992=_0x18a042(0x100)+_0x572af6['name']+_0x18a042(0xbe)+_0x65a08e[_0x18a042(0x9a)]:_0x5de992=''+_0x65a08e[_0x18a042(0x9a)],await(0x0,SendWhatsAppMessage_1[_0x18a042(0x8a)])({'body':_0x5de992,'ticket':_0x23956e,'quotedMsg':_0x199909});}}),_0x21e39a[_0x5177c6(0xc9)](_0x5177c6(0xe0));};exports[a23_0x4e34d1(0x8e)]=forwardmessage;function a23_0x8589(_0x2de325,_0x56513c){const _0x43537f=a23_0x4353();return a23_0x8589=function(_0x8589d,_0x4a0f69){_0x8589d=_0x8589d-0x7c;let _0x5220fc=_0x43537f[_0x8589d];return _0x5220fc;},a23_0x8589(_0x2de325,_0x56513c);}const forwardMessage=async(_0x40a33f,_0x2ed6e1)=>{const _0x2d7369=a23_0x4e34d1,{quotedMsg:_0x846302,signMessage:_0x794f1f,messageId:_0x1af893,contactId:_0x130f2e}=_0x40a33f[_0x2d7369(0x9a)],{id:_0x3efab2,companyId:_0x2ccadf}=_0x40a33f['user'],_0x30316a=await User_1[_0x2d7369(0x8a)][_0x2d7369(0x91)](_0x3efab2);if(!_0x1af893||!_0x130f2e)return _0x2ed6e1['status'](0xc8)[_0x2d7369(0x84)](_0x2d7369(0xc4));const _0x598f4b=await(0x0,ShowMessageService_1[_0x2d7369(0x8a)])(_0x1af893),_0xd1d0bb=await(0x0,ShowContactService_1[_0x2d7369(0x8a)])(_0x130f2e,_0x2ccadf);if(!_0x598f4b)return _0x2ed6e1[_0x2d7369(0xa9)](0x194)[_0x2d7369(0x84)]('Message\x20not\x20found');if(!_0xd1d0bb)return _0x2ed6e1['status'](0x194)[_0x2d7369(0x84)](_0x2d7369(0xfc));const _0x44bcf7=await CompaniesSettings_1[_0x2d7369(0x8a)][_0x2d7369(0xfa)]({'where':{'companyId':_0x2ccadf}}),_0x100219=await(0x0,ShowMessageService_1[_0x2d7369(0xb7)])(_0x598f4b);if(!_0x100219)return _0x2ed6e1[_0x2d7369(0xa9)](0x194)['send'](_0x2d7369(0x82));const _0x3e95f7=await(0x0,ShowTicketService_1['default'])(_0x598f4b[_0x2d7369(0xa1)],_0x598f4b[_0x2d7369(0xa6)]),{ticket:_0x3f6980}=await(0x0,FindOrCreateTicketService_1['default'])(_0xd1d0bb,_0x3e95f7?.[_0x2d7369(0xc2)],0x0,_0x3e95f7['companyId'],_0x3e95f7[_0x2d7369(0xf9)],_0x30316a['id'],_0xd1d0bb[_0x2d7369(0xda)]?_0xd1d0bb:null,'whatsapp',null,!![],_0x44bcf7);let _0x2ee7ac;(0x0,lodash_1[_0x2d7369(0x93)])(_0x3f6980?.['queueId'])?_0x2ee7ac={'status':_0x3f6980[_0x2d7369(0xda)]?'group':_0x2d7369(0x92),'userId':_0x30316a['id'],'queueId':_0x3e95f7[_0x2d7369(0xf9)]}:_0x2ee7ac={'status':_0x3f6980['isGroup']?'group':_0x2d7369(0x92),'userId':_0x30316a['id']};await(0x0,UpdateTicketService_1['default'])({'ticketData':_0x2ee7ac,'ticketId':_0x3f6980['id'],'companyId':_0x3f6980[_0x2d7369(0xa6)]});let _0x568e7c=_0x598f4b[_0x2d7369(0x9a)];if(_0x598f4b['mediaType']==='conversation'||_0x598f4b[_0x2d7369(0xf2)]===_0x2d7369(0x94))await(0x0,SendWhatsAppMessage_1[_0x2d7369(0x8a)])({'body':_0x568e7c,'ticket':_0x3f6980,'quotedMsg':_0x846302,'isForwarded':_0x598f4b[_0x2d7369(0xf5)]?![]:!![]});else{const _0x29a999=_0x598f4b['mediaUrl'][_0x2d7369(0xf0)](':'+process['env']['PORT'],''),_0x151488=obterNomeEExtensaoDoArquivo(_0x29a999);_0x568e7c===_0x151488&&(_0x568e7c='');const _0x1d09ee=path_1['default']['join'](__dirname,'..','..','..',_0x2d7369(0xca),_0x2d7369(0xa8)),_0xc434bf=path_1['default']['join'](_0x1d09ee,'company'+_0x3f6980[_0x2d7369(0xa6)],_0x151488),_0x2cc5ca={'fieldname':'medias','originalname':_0x151488,'encoding':_0x2d7369(0xd0),'mimetype':_0x598f4b[_0x2d7369(0xf2)],'filename':_0x151488,'path':_0xc434bf};await(0x0,SendWhatsAppMedia_1['default'])({'media':_0x2cc5ca,'ticket':_0x3f6980,'body':_0x568e7c,'isForwarded':_0x598f4b['fromMe']?![]:!![]});}return _0x2ed6e1[_0x2d7369(0x84)]();};exports['forwardMessage']=forwardMessage;const remove=async(_0x17d170,_0x36e83f)=>{const _0x51f895=a23_0x4e34d1,{messageId:_0x460c3e}=_0x17d170[_0x51f895(0xd4)],{companyId:_0xeb2f05}=_0x17d170[_0x51f895(0xe3)],_0x4f2175=await(0x0,DeleteWhatsAppMessage_1[_0x51f895(0x8a)])(_0x460c3e),_0x1d6900=(0x0,socket_1['getIO'])();return _0x4f2175['isPrivate']&&(await Message_1['default']['destroy']({'where':{'id':_0x4f2175['id']}}),_0x1d6900['to'](_0x4f2175[_0x51f895(0xa1)][_0x51f895(0xa4)]())[_0x51f895(0xae)](_0x51f895(0xbd)+_0xeb2f05+_0x51f895(0xe9),{'action':_0x51f895(0xfe),'message':_0x4f2175})),_0x1d6900['to'](_0x4f2175['ticketId'][_0x51f895(0xa4)]())[_0x51f895(0xae)](_0x51f895(0xbd)+_0xeb2f05+_0x51f895(0xe9),{'action':_0x51f895(0x83),'message':_0x4f2175}),_0x36e83f['send']();};exports[a23_0x4e34d1(0xfb)]=remove;const allMe=async(_0x44f7de,_0x1b64c9)=>{const _0x3a666d=a23_0x4e34d1,_0x561fac=_0x44f7de[_0x3a666d(0xe6)][_0x3a666d(0xfd)],_0x2a2295=_0x44f7de[_0x3a666d(0xe6)]['dateEnd'],_0x26fbf4=_0x44f7de[_0x3a666d(0xe6)][_0x3a666d(0xf5)],{companyId:_0x189e17}=_0x44f7de[_0x3a666d(0xe3)],{count:_0x16983e}=await(0x0,ListMessagesServiceAll_1[_0x3a666d(0x8a)])({'companyId':_0x189e17,'fromMe':_0x26fbf4,'dateStart':_0x561fac,'dateEnd':_0x2a2295});return _0x1b64c9[_0x3a666d(0xc9)]({'count':_0x16983e});};exports[a23_0x4e34d1(0xdf)]=allMe;function a23_0x4353(){const _0x31e00c=['remove','Contact\x20not\x20found','dateStart','delete','medias','*Mensagem\x20encaminhada\x20de\x20','filename','add','remoteJid','configurable','unlinkSync','prototype','1612135eqiKmH','Whatsapp\x20from\x20message\x20not\x20found','update','send','../config/auth','../services/MessageServices/ListMessagesServiceAll','__setModuleDefault','forwardMessage','path','default','log','contact','headers','forwardmessage','../services/WbotServices/SendWhatsAppMessage','O\x20número\x20é\x20obrigatório','findByPk','open','isNil','extendedTextMessage','510062OPkcLR','PVT','all','../models/Message','isArray','body','../services/ContactServices/ShowContactService','writable','../services/MessageServices/ShowMessageService','1ctNdBW','create','pop','ticketId','mediaUrl','message','toString','company','companyId','useExternalApi','public','status','Essa\x20empresa\x20não\x20tem\x20permissão\x20para\x20usar\x20a\x20API\x20Externa.\x20Entre\x20em\x20contato\x20com\x20o\x20Suporte\x20para\x20verificar\x20nossos\x20planos!','secret','../errors/AppError','test','emit','existsSync','../services/TicketServices/ShowTicketService','SendMessage','705788copJTd','getOwnPropertyDescriptor','../services/WbotServices/DeleteWhatsAppMessage','queues','../models/CompaniesSettings','GetWhatsAppFromMessage','messageQueue','../models/Whatsapp','number','env','522855sFWbbg','company-','*\x0a\x0a','../services/WbotServices/SendWhatsAppMedia','get','700224TfDZzj','whatsapp','split','MessageId\x20or\x20ContactId\x20not\x20found','Não\x20foi\x20possível\x20enviar\x20a\x20mensagem,\x20tente\x20novamente\x20em\x20alguns\x20instantes','instagram','channel','sendFacebookMessageMedia','json','backend','store','quotedMsgId','3037248MZDjaN','join','plan','7bit','contactMessage','files','authorization','params','__importDefault','facebook','forEach','../services/MessageServices/ListMessagesService','pathname','isGroup','updatedAt','verify','173460pZZxNR','__esModule','allMe','count','keys','_Encaminhada_','user','__createBinding','PORT','query','originalname','../services/TicketServices/FindOrCreateTicketService','-appMessage','../services/TicketServices/UpdateTicketService','../helpers/SetTicketMessagesAsRead','index','lodash','../models/Queue','hasOwnProperty','replace','../libs/socket','mediaType','length','defineProperty','fromMe','push','map','Não\x20foi\x20possível\x20realizar\x20a\x20operação','queueId','findOne'];a23_0x4353=function(){return _0x31e00c;};return a23_0x4353();}const send=async(_0x4012cd,_0x3c49c8)=>{const _0x7320ce=a23_0x4e34d1,_0x5baa5b=_0x4012cd[_0x7320ce(0x9a)],_0x5d0554=_0x4012cd[_0x7320ce(0xd2)];try{const _0x433d01=_0x4012cd[_0x7320ce(0x8d)][_0x7320ce(0xd3)],[,_0x322158]=_0x433d01[_0x7320ce(0xc3)]('\x20'),_0x4783b2=await Whatsapp_1[_0x7320ce(0x8a)][_0x7320ce(0xfa)]({'where':{'token':_0x322158}}),_0x3afd12=_0x4783b2['companyId'],_0x316ef8=await(0x0,ShowPlanCompanyService_1[_0x7320ce(0x8a)])(_0x3afd12),_0x500d58=_0x316ef8[_0x7320ce(0xcf)][_0x7320ce(0xa7)];if(_0x500d58){if(!_0x4783b2)throw new Error(_0x7320ce(0xf8));if(_0x5baa5b[_0x7320ce(0xba)]===undefined)throw new Error(_0x7320ce(0x90));const _0x26afa4=_0x5baa5b[_0x7320ce(0xba)],_0x5cef13=_0x5baa5b[_0x7320ce(0x9a)];return _0x5d0554?await Promise[_0x7320ce(0x97)](_0x5d0554[_0x7320ce(0xf7)](async _0x4cdb17=>{const _0x3d1a5a=_0x7320ce;_0x4012cd['app']['get'](_0x3d1a5a(0xb5))[_0x3d1a5a(0xb8)]['add'](_0x3d1a5a(0xb1),{'whatsappId':_0x4783b2['id'],'data':{'number':_0x26afa4,'body':_0x4cdb17[_0x3d1a5a(0xe7)][_0x3d1a5a(0xf0)]('/','-'),'mediaPath':_0x4cdb17[_0x3d1a5a(0x89)]}},{'removeOnComplete':!![],'attempts':0x3});})):_0x4012cd['app'][_0x7320ce(0xc0)]('queues')[_0x7320ce(0xb8)][_0x7320ce(0x7c)]('SendMessage',{'whatsappId':_0x4783b2['id'],'data':{'number':_0x26afa4,'body':_0x5cef13}},{'removeOnComplete':!![],'attempts':0x3}),_0x3c49c8[_0x7320ce(0x84)]({'mensagem':'Mensagem\x20enviada!'});}return _0x3c49c8[_0x7320ce(0xa9)](0x190)[_0x7320ce(0xc9)]({'error':_0x7320ce(0xaa)});}catch(_0x520141){console['log'](_0x520141);if(Object[_0x7320ce(0xe1)](_0x520141)[_0x7320ce(0xf3)]===0x0)throw new AppError_1[(_0x7320ce(0x8a))](_0x7320ce(0xc5));else throw new AppError_1[(_0x7320ce(0x8a))](_0x520141[_0x7320ce(0xa3)]);}};exports['send']=send;