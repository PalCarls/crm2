'use strict';const a532_0x51da59=a532_0x44a0;function a532_0x5111(){const _0x2b96f7=['toDate','sendInactiveMessage','forEach','getIO','getMinutes','default','ticket','whatsappId','3738PaOsKJ','delete','15ckhCYC','fromMe','setMinutes','1331001fUvYnz','../../helpers/Mustache','closed','isGroup','nps','234988scDrAq','defineProperty','contact','../../models/Whatsapp','getHours','../../models/TicketTraking','222078oDpShM','status','../../models/Ticket','findByPk','../TicketServices/ShowTicketService','__esModule','update','__importDefault','emit','userId','sequelize','updatedAt','./wbotMessageListener','moment','ClosedAllOpenTickets','39978RSyCqQ','450tZDXQc','1998928TgVjsR','4894488mSSuDu','log','open','setHours'];a532_0x5111=function(){return _0x2b96f7;};return a532_0x5111();}(function(_0x203599,_0x3587b9){const _0x38076b=a532_0x44a0,_0x1fcc63=_0x203599();while(!![]){try{const _0x18d4dd=parseInt(_0x38076b(0xcf))/0x1+parseInt(_0x38076b(0xda))/0x2+-parseInt(_0x38076b(0xbb))/0x3+parseInt(_0x38076b(0xd4))/0x4*(parseInt(_0x38076b(0xcc))/0x5)+parseInt(_0x38076b(0xbc))/0x6*(-parseInt(_0x38076b(0xca))/0x7)+-parseInt(_0x38076b(0xbd))/0x8+-parseInt(_0x38076b(0xbe))/0x9;if(_0x18d4dd===_0x3587b9)break;else _0x1fcc63['push'](_0x1fcc63['shift']());}catch(_0x207a52){_0x1fcc63['push'](_0x1fcc63['shift']());}}}(a532_0x5111,0xbc487));var __importDefault=this&&this[a532_0x51da59(0xe1)]||function(_0xa86a15){return _0xa86a15&&_0xa86a15['__esModule']?_0xa86a15:{'default':_0xa86a15};};Object[a532_0x51da59(0xd5)](exports,a532_0x51da59(0xdf),{'value':!![]}),exports[a532_0x51da59(0xba)]=void 0x0;const sequelize_1=require(a532_0x51da59(0xe4)),Ticket_1=__importDefault(require(a532_0x51da59(0xdc))),Whatsapp_1=__importDefault(require(a532_0x51da59(0xd7))),socket_1=require('../../libs/socket'),Mustache_1=__importDefault(require(a532_0x51da59(0xd0))),SendWhatsAppMessage_1=__importDefault(require('./SendWhatsAppMessage')),moment_1=__importDefault(require(a532_0x51da59(0xb9))),ShowTicketService_1=__importDefault(require(a532_0x51da59(0xde))),wbotMessageListener_1=require(a532_0x51da59(0xe6)),TicketTraking_1=__importDefault(require(a532_0x51da59(0xd9))),ClosedAllOpenTickets=async _0x210cc9=>{const _0xc31b45=a532_0x51da59,_0x2fc162=async(_0x1ec935,_0x2efff0,_0x5d69d4)=>{const _0x207a29=a532_0x44a0;if(_0x2efff0===_0x207a29(0xd3))await _0x1ec935[_0x207a29(0xe0)]({'status':_0x207a29(0xd1),'lastMessage':_0x5d69d4,'unreadMessages':0x0,'amountUseBotQueues':0x0});else _0x2efff0==='open'?await _0x1ec935[_0x207a29(0xe0)]({'status':'closed','lastMessage':_0x5d69d4,'unreadMessages':0x0,'amountUseBotQueues':0x0}):await _0x1ec935[_0x207a29(0xe0)]({'status':_0x207a29(0xd1),'unreadMessages':0x0});},_0x3eb28f=(0x0,socket_1[_0xc31b45(0xc5)])();try{const {rows:_0x2bfe11}=await Ticket_1[_0xc31b45(0xc7)]['findAndCountAll']({'where':{'status':{[sequelize_1['Op']['in']]:['open','nps']},'companyId':_0x210cc9},'order':[[_0xc31b45(0xe5),'DESC']]});_0x2bfe11[_0xc31b45(0xc4)](async _0xaa8187=>{const _0x1771db=_0xc31b45,_0x3fe87e=await(0x0,ShowTicketService_1[_0x1771db(0xc7)])(_0xaa8187['id'],_0x210cc9),_0x5ca32c=await Whatsapp_1[_0x1771db(0xc7)][_0x1771db(0xdd)](_0x3fe87e?.[_0x1771db(0xc9)]),_0x221838=await TicketTraking_1[_0x1771db(0xc7)]['findOne']({'where':{'ticketId':_0xaa8187['id'],'finishedAt':null}});if(!_0x5ca32c)return;let {timeInactiveMessage:_0x43dd0a,expiresInactiveMessage:_0x142b9d,inactiveMessage:_0x107f34,expiresTicket:_0x1d16dc,expiresTicketNPS:_0x3ca222,whenExpiresTicket:_0x44ba21,complationMessage:_0x56692d}=_0x5ca32c;if(_0x3ca222&&_0x3ca222!==''&&_0x3ca222!=='0'&&Number(_0x3ca222)>0x0){const _0x3adf05=new Date();_0x3adf05[_0x1771db(0xce)](_0x3adf05[_0x1771db(0xc6)]()-Number(_0x3ca222));if(_0xaa8187[_0x1771db(0xdb)]===_0x1771db(0xd3)){const _0x3245a2=new Date(_0x3fe87e[_0x1771db(0xe5)]);if(_0x3245a2<_0x3adf05){_0x2fc162(_0x3fe87e,_0x3fe87e[_0x1771db(0xdb)],'');const _0x1d125a=(0x0,Mustache_1[_0x1771db(0xc7)])('‎'+_0x56692d,_0x3fe87e);if(_0x56692d!==''&&_0x56692d!==undefined){const _0x337be8=await(0x0,SendWhatsAppMessage_1['default'])({'body':_0x1d125a,'ticket':_0x3fe87e});await(0x0,wbotMessageListener_1['verifyMessage'])(_0x337be8,_0x3fe87e,_0x3fe87e[_0x1771db(0xd6)]);}await _0x221838['update']({'finishedAt':(0x0,moment_1['default'])()[_0x1771db(0xc2)](),'closedAt':(0x0,moment_1[_0x1771db(0xc7)])()[_0x1771db(0xc2)](),'whatsappId':_0xaa8187[_0x1771db(0xc9)],'userId':_0xaa8187[_0x1771db(0xe3)]}),_0x3eb28f['to']('open')[_0x1771db(0xe2)](_0x1771db(0xc8),{'action':_0x1771db(0xcb),'ticket':_0x3fe87e,'ticketId':_0x3fe87e['id']});}}}if(_0x1d16dc&&_0x1d16dc!==''&&_0x1d16dc!=='0'&&Number(_0x1d16dc)>0x0){const _0x4c03fd=(0x0,Mustache_1[_0x1771db(0xc7)])('‎'+_0x142b9d,_0x3fe87e),_0x3e8d2f=new Date();_0x3e8d2f[_0x1771db(0xc1)](_0x3e8d2f[_0x1771db(0xd8)]()-Number(_0x1d16dc));_0x43dd0a&&_0x43dd0a!==''&&_0x43dd0a!==null&&_0x43dd0a!=='0'&&Number(_0x43dd0a)>0x0&&_0x3e8d2f[_0x1771db(0xce)](_0x3e8d2f[_0x1771db(0xc6)]()-Number(_0x43dd0a));if(_0x3fe87e['status']===_0x1771db(0xc0)&&!_0x3fe87e[_0x1771db(0xd2)]){const _0x4fe545=new Date(_0x3fe87e[_0x1771db(0xe5)]);if(_0x4fe545<_0x3e8d2f&&(_0x44ba21==='0'||_0x44ba21==='1'&&_0x3fe87e[_0x1771db(0xcd)])){_0x2fc162(_0x3fe87e,_0x3fe87e['status'],_0x4c03fd);if(_0x142b9d!==''&&_0x142b9d!==undefined){const _0x5306bf=await(0x0,SendWhatsAppMessage_1['default'])({'body':_0x4c03fd,'ticket':_0x3fe87e});await(0x0,wbotMessageListener_1['verifyMessage'])(_0x5306bf,_0x3fe87e,_0x3fe87e[_0x1771db(0xd6)]);}await _0x221838['update']({'finishedAt':(0x0,moment_1[_0x1771db(0xc7)])()['toDate'](),'closedAt':(0x0,moment_1[_0x1771db(0xc7)])()[_0x1771db(0xc2)](),'whatsappId':_0xaa8187['whatsappId'],'userId':_0xaa8187[_0x1771db(0xe3)]}),_0x3eb28f['to']('open')['emit'](_0x1771db(0xc8),{'action':_0x1771db(0xcb),'ticket':_0x3fe87e,'ticketId':_0x3fe87e['id']});}}}if(_0x43dd0a&&_0x43dd0a!==''&&_0x43dd0a!=='0'&&Number(_0x43dd0a)>0x0){const _0x3418aa=(0x0,Mustache_1[_0x1771db(0xc7)])('‎'+_0x107f34,_0x3fe87e),_0x323d93=new Date();_0x323d93[_0x1771db(0xce)](_0x323d93[_0x1771db(0xc6)]()-Number(_0x43dd0a));if(_0x3fe87e['status']===_0x1771db(0xc0)&&!_0x3fe87e['isGroup']){const _0x32c7b9=new Date(_0x3fe87e[_0x1771db(0xe5)]);if(_0x32c7b9<_0x323d93&&!_0x3fe87e[_0x1771db(0xc3)]&&(_0x44ba21==='0'||_0x44ba21==='1'&&_0x3fe87e[_0x1771db(0xcd)])){const _0x5626a0=await(0x0,SendWhatsAppMessage_1[_0x1771db(0xc7)])({'body':_0x3418aa,'ticket':_0x3fe87e});await(0x0,wbotMessageListener_1['verifyMessage'])(_0x5626a0,_0x3fe87e,_0x3fe87e[_0x1771db(0xd6)]),await _0x3fe87e['update']({'sendInactiveMessage':!![]}),_0x3eb28f['to'](_0x1771db(0xc0))[_0x1771db(0xe2)](_0x1771db(0xc8),{'action':_0x1771db(0xcb),'ticket':_0x3fe87e,'ticketId':_0x3fe87e['id']});}}}});}catch(_0x5ee47a){console[_0xc31b45(0xbf)]('e',_0x5ee47a);}};function a532_0x44a0(_0x1f618b,_0x105449){const _0x51119b=a532_0x5111();return a532_0x44a0=function(_0x44a0c8,_0x11fecb){_0x44a0c8=_0x44a0c8-0xb9;let _0x5283d1=_0x51119b[_0x44a0c8];return _0x5283d1;},a532_0x44a0(_0x1f618b,_0x105449);}exports[a532_0x51da59(0xba)]=ClosedAllOpenTickets;