'use strict';function a551_0x21fb(){const _0xc8531c=['sendInactiveMessage','forEach','DESC','../../helpers/Mustache','moment','userId','default','whatsappId','updatedAt','emit','866088vrRVof','./wbotMessageListener','159472FbkELh','setMinutes','225KatguI','./SendWhatsAppMessage','defineProperty','../../models/Whatsapp','4221224Xnypoj','findByPk','status','6RWriCV','update','contact','isGroup','getMinutes','findAndCountAll','toDate','4qbWVhD','ClosedAllOpenTickets','open','7561220ltaPet','company','log','fromMe','verifyMessage','getHours','-ticket','closed','__esModule','1755834hvTyMJ','../../models/Ticket','../../libs/socket','1859870DLnKrU','sequelize','887316dSdJVn','nps'];a551_0x21fb=function(){return _0xc8531c;};return a551_0x21fb();}function a551_0x4d29(_0x166d1f,_0x42c342){const _0x21fb4c=a551_0x21fb();return a551_0x4d29=function(_0x4d29da,_0xfc4aa5){_0x4d29da=_0x4d29da-0x152;let _0x373add=_0x21fb4c[_0x4d29da];return _0x373add;},a551_0x4d29(_0x166d1f,_0x42c342);}const a551_0x35deee=a551_0x4d29;(function(_0x184e64,_0x403074){const _0x40daf5=a551_0x4d29,_0x445cff=_0x184e64();while(!![]){try{const _0x4a3f4b=parseInt(_0x40daf5(0x15a))/0x1+-parseInt(_0x40daf5(0x17d))/0x2*(-parseInt(_0x40daf5(0x165))/0x3)+parseInt(_0x40daf5(0x16c))/0x4*(-parseInt(_0x40daf5(0x17b))/0x5)+parseInt(_0x40daf5(0x178))/0x6+-parseInt(_0x40daf5(0x162))/0x7+-parseInt(_0x40daf5(0x15c))/0x8*(-parseInt(_0x40daf5(0x15e))/0x9)+-parseInt(_0x40daf5(0x16f))/0xa;if(_0x4a3f4b===_0x403074)break;else _0x445cff['push'](_0x445cff['shift']());}catch(_0x589555){_0x445cff['push'](_0x445cff['shift']());}}}(a551_0x21fb,0xc68d1));var __importDefault=this&&this['__importDefault']||function(_0x681853){const _0x487586=a551_0x4d29;return _0x681853&&_0x681853[_0x487586(0x177)]?_0x681853:{'default':_0x681853};};Object[a551_0x35deee(0x160)](exports,a551_0x35deee(0x177),{'value':!![]}),exports[a551_0x35deee(0x16d)]=void 0x0;const sequelize_1=require(a551_0x35deee(0x17c)),Ticket_1=__importDefault(require(a551_0x35deee(0x179))),Whatsapp_1=__importDefault(require(a551_0x35deee(0x161))),socket_1=require(a551_0x35deee(0x17a)),Mustache_1=__importDefault(require(a551_0x35deee(0x153))),SendWhatsAppMessage_1=__importDefault(require(a551_0x35deee(0x15f))),moment_1=__importDefault(require(a551_0x35deee(0x154))),ShowTicketService_1=__importDefault(require('../TicketServices/ShowTicketService')),wbotMessageListener_1=require(a551_0x35deee(0x15b)),TicketTraking_1=__importDefault(require('../../models/TicketTraking')),ClosedAllOpenTickets=async _0xe0d34b=>{const _0x49884c=a551_0x35deee,_0x38cda7=async(_0x4b2db1,_0x28d98a,_0x4b55ab)=>{const _0x8e1ea=a551_0x4d29;if(_0x28d98a==='nps')await _0x4b2db1[_0x8e1ea(0x166)]({'status':_0x8e1ea(0x176),'lastMessage':_0x4b55ab,'unreadMessages':0x0,'amountUseBotQueues':0x0});else _0x28d98a===_0x8e1ea(0x16e)?await _0x4b2db1[_0x8e1ea(0x166)]({'status':_0x8e1ea(0x176),'lastMessage':_0x4b55ab,'unreadMessages':0x0,'amountUseBotQueues':0x0}):await _0x4b2db1[_0x8e1ea(0x166)]({'status':_0x8e1ea(0x176),'unreadMessages':0x0});},_0x76d072=(0x0,socket_1['getIO'])();try{const {rows:_0x13da1d}=await Ticket_1[_0x49884c(0x156)][_0x49884c(0x16a)]({'where':{'status':{[sequelize_1['Op']['in']]:[_0x49884c(0x16e),_0x49884c(0x17e)]},'companyId':_0xe0d34b},'order':[['updatedAt',_0x49884c(0x152)]]});_0x13da1d[_0x49884c(0x180)](async _0x491d2b=>{const _0x25ca6d=_0x49884c,_0xcd13b1=await(0x0,ShowTicketService_1[_0x25ca6d(0x156)])(_0x491d2b['id'],_0xe0d34b),_0x45ffab=await Whatsapp_1[_0x25ca6d(0x156)][_0x25ca6d(0x163)](_0xcd13b1?.[_0x25ca6d(0x157)]),_0x562d08=await TicketTraking_1['default']['findOne']({'where':{'ticketId':_0x491d2b['id'],'finishedAt':null}});if(!_0x45ffab)return;let {timeInactiveMessage:_0x181e14,expiresInactiveMessage:_0xf8a52f,inactiveMessage:_0x585701,expiresTicket:_0x227e36,expiresTicketNPS:_0x6cb32c,whenExpiresTicket:_0x27d1bf,complationMessage:_0x3d96c3}=_0x45ffab;if(_0x6cb32c&&_0x6cb32c!==''&&_0x6cb32c!=='0'&&Number(_0x6cb32c)>0x0){const _0x255b74=new Date();_0x255b74['setMinutes'](_0x255b74[_0x25ca6d(0x169)]()-Number(_0x6cb32c));if(_0x491d2b['status']===_0x25ca6d(0x17e)){const _0x572e18=new Date(_0xcd13b1[_0x25ca6d(0x158)]);if(_0x572e18<_0x255b74){_0x38cda7(_0xcd13b1,_0xcd13b1[_0x25ca6d(0x164)],'');const _0x4eef56=(0x0,Mustache_1[_0x25ca6d(0x156)])('‎'+_0x3d96c3,_0xcd13b1);if(_0x3d96c3!==''&&_0x3d96c3!==undefined){const _0x529de7=await(0x0,SendWhatsAppMessage_1[_0x25ca6d(0x156)])({'body':_0x4eef56,'ticket':_0xcd13b1});await(0x0,wbotMessageListener_1[_0x25ca6d(0x173)])(_0x529de7,_0xcd13b1,_0xcd13b1[_0x25ca6d(0x167)]);}await _0x562d08[_0x25ca6d(0x166)]({'finishedAt':(0x0,moment_1['default'])()[_0x25ca6d(0x16b)](),'closedAt':(0x0,moment_1[_0x25ca6d(0x156)])()[_0x25ca6d(0x16b)](),'whatsappId':_0x491d2b[_0x25ca6d(0x157)],'userId':_0x491d2b[_0x25ca6d(0x155)]}),_0x76d072['to']('open')[_0x25ca6d(0x159)](_0x25ca6d(0x170)+_0xe0d34b+_0x25ca6d(0x175),{'action':'delete','ticket':_0xcd13b1,'ticketId':_0xcd13b1['id']});}}}if(_0x227e36&&_0x227e36!==''&&_0x227e36!=='0'&&Number(_0x227e36)>0x0){const _0x1e2cb7=(0x0,Mustache_1['default'])('‎'+_0xf8a52f,_0xcd13b1),_0x35da83=new Date();_0x35da83['setHours'](_0x35da83[_0x25ca6d(0x174)]()-Number(_0x227e36));_0x181e14&&_0x181e14!==''&&_0x181e14!==null&&_0x181e14!=='0'&&Number(_0x181e14)>0x0&&_0x35da83[_0x25ca6d(0x15d)](_0x35da83[_0x25ca6d(0x169)]()-Number(_0x181e14));if(_0xcd13b1[_0x25ca6d(0x164)]===_0x25ca6d(0x16e)&&!_0xcd13b1[_0x25ca6d(0x168)]){const _0x3e06de=new Date(_0xcd13b1[_0x25ca6d(0x158)]);if(_0x3e06de<_0x35da83&&(_0x27d1bf==='0'||_0x27d1bf==='1'&&_0xcd13b1['fromMe'])){_0x38cda7(_0xcd13b1,_0xcd13b1['status'],_0x1e2cb7);if(_0xf8a52f!==''&&_0xf8a52f!==undefined){const _0x1b8894=await(0x0,SendWhatsAppMessage_1[_0x25ca6d(0x156)])({'body':_0x1e2cb7,'ticket':_0xcd13b1});await(0x0,wbotMessageListener_1[_0x25ca6d(0x173)])(_0x1b8894,_0xcd13b1,_0xcd13b1['contact']);}await _0x562d08[_0x25ca6d(0x166)]({'finishedAt':(0x0,moment_1['default'])()[_0x25ca6d(0x16b)](),'closedAt':(0x0,moment_1[_0x25ca6d(0x156)])()['toDate'](),'whatsappId':_0x491d2b['whatsappId'],'userId':_0x491d2b[_0x25ca6d(0x155)]}),_0x76d072['to']('open')[_0x25ca6d(0x159)]('company'+_0xe0d34b+_0x25ca6d(0x175),{'action':'delete','ticket':_0xcd13b1,'ticketId':_0xcd13b1['id']});}}}if(_0x181e14&&_0x181e14!==''&&_0x181e14!=='0'&&Number(_0x181e14)>0x0){const _0x2055a9=(0x0,Mustache_1[_0x25ca6d(0x156)])('‎'+_0x585701,_0xcd13b1),_0xc2c256=new Date();_0xc2c256[_0x25ca6d(0x15d)](_0xc2c256[_0x25ca6d(0x169)]()-Number(_0x181e14));if(_0xcd13b1['status']===_0x25ca6d(0x16e)&&!_0xcd13b1[_0x25ca6d(0x168)]){const _0x5c3a2e=new Date(_0xcd13b1[_0x25ca6d(0x158)]);if(_0x5c3a2e<_0xc2c256&&!_0xcd13b1[_0x25ca6d(0x17f)]&&(_0x27d1bf==='0'||_0x27d1bf==='1'&&_0xcd13b1[_0x25ca6d(0x172)])){const _0x465346=await(0x0,SendWhatsAppMessage_1[_0x25ca6d(0x156)])({'body':_0x2055a9,'ticket':_0xcd13b1});await(0x0,wbotMessageListener_1[_0x25ca6d(0x173)])(_0x465346,_0xcd13b1,_0xcd13b1[_0x25ca6d(0x167)]),await _0xcd13b1[_0x25ca6d(0x166)]({'sendInactiveMessage':!![]}),_0x76d072['to'](_0x25ca6d(0x16e))[_0x25ca6d(0x159)]('company'+_0xe0d34b+_0x25ca6d(0x175),{'action':'delete','ticket':_0xcd13b1,'ticketId':_0xcd13b1['id']});}}}});}catch(_0x576337){console[_0x49884c(0x171)]('e',_0x576337);}};exports[a551_0x35deee(0x16d)]=ClosedAllOpenTickets;