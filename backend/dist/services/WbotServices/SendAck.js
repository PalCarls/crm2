'use strict';function a524_0x2402(_0x532779,_0x178640){const _0x3428ae=a524_0x3428();return a524_0x2402=function(_0x2402e4,_0x4f0d2b){_0x2402e4=_0x2402e4-0x138;let _0x2dfe2e=_0x3428ae[_0x2402e4];return _0x2dfe2e;},a524_0x2402(_0x532779,_0x178640);}const a524_0x475e8f=a524_0x2402;function a524_0x3428(){const _0x24c97d=['ticketId','377035SXaVvT','deleteById','readMessages','ERR_SENDING_WAPP_MSG','unreadCount','__importDefault','remoteJid','8966111WNKlpK','3495HSRENM','quotedMsg','contact','sendPresenceUpdate','SendAckBYRemoteJid','896IPRbCr','9nTsQgN','SendAckBYticketId','DESC','unavailable','defineProperty','store','10PBNRrk','chats','ERR_NO_TICKET_FOUND','../TicketServices/ShowTicketService','ticket','1440120UsjpVw','__esModule','createdAt','1461848vjjtrM','../../models/Message','findAndCountAll','available','default','log','../../helpers/GetTicketWbot','1107368MDZplX','unreadMessages','2729586jQuSXP','forEach','7jNrEBd','não\x20consegui\x20pegar\x20o\x20wbot'];a524_0x3428=function(){return _0x24c97d;};return a524_0x3428();}(function(_0x565930,_0x3d4ba8){const _0x568c09=a524_0x2402,_0x3cb762=_0x565930();while(!![]){try{const _0x512abb=parseInt(_0x568c09(0x15e))/0x1+-parseInt(_0x568c09(0x141))/0x2*(parseInt(_0x568c09(0x13c))/0x3)+-parseInt(_0x568c09(0x150))/0x4+-parseInt(_0x568c09(0x14d))/0x5+-parseInt(_0x568c09(0x159))/0x6*(-parseInt(_0x568c09(0x15b))/0x7)+-parseInt(_0x568c09(0x157))/0x8*(parseInt(_0x568c09(0x142))/0x9)+-parseInt(_0x568c09(0x148))/0xa*(-parseInt(_0x568c09(0x13b))/0xb);if(_0x512abb===_0x3d4ba8)break;else _0x3cb762['push'](_0x3cb762['shift']());}catch(_0x35b798){_0x3cb762['push'](_0x3cb762['shift']());}}}(a524_0x3428,0x515b8));var __importDefault=this&&this[a524_0x475e8f(0x139)]||function(_0x35d6da){const _0x40fd7c=a524_0x475e8f;return _0x35d6da&&_0x35d6da[_0x40fd7c(0x14e)]?_0x35d6da:{'default':_0x35d6da};};Object[a524_0x475e8f(0x146)](exports,a524_0x475e8f(0x14e),{'value':!![]}),exports['SendAckBYRemoteJid']=exports['SendAckBYticketId']=void 0x0;const AppError_1=__importDefault(require('../../errors/AppError')),GetTicketWbot_1=__importDefault(require(a524_0x475e8f(0x156))),Ticket_1=__importDefault(require('../../models/Ticket')),Message_1=__importDefault(require(a524_0x475e8f(0x151))),ShowTicketService_1=__importDefault(require(a524_0x475e8f(0x14b))),SendAckBYticketId=async({ticketId:_0xcc7d5,companyId:_0x4d8924})=>{const _0x441e1e=a524_0x475e8f,_0xa305cc=await(0x0,ShowTicketService_1[_0x441e1e(0x154)])(_0xcc7d5,_0x4d8924);let _0x532fde=_0xa305cc[_0x441e1e(0x158)];if(_0x532fde>0x0){let _0x47ab72;try{_0x47ab72=await(0x0,GetTicketWbot_1[_0x441e1e(0x154)])(_0xa305cc);}catch(_0x11e46a){console[_0x441e1e(0x155)](_0x441e1e(0x15c));}if(!_0xa305cc)throw new AppError_1[(_0x441e1e(0x154))](_0x441e1e(0x14a),0x194);const _0x51be63=0x64,{count:_0x3052ec,rows:_0x41c2b2}=await Message_1[_0x441e1e(0x154)][_0x441e1e(0x152)]({'limit':_0x51be63,'include':[_0x441e1e(0x13e),{'model':Message_1[_0x441e1e(0x154)],'as':_0x441e1e(0x13d),'include':[_0x441e1e(0x13e)]},{'model':Ticket_1['default'],'where':{'contactId':_0xa305cc['contactId']},'required':!![]}],'order':[[_0x441e1e(0x14f),_0x441e1e(0x144)]]});_0x41c2b2['forEach'](async _0x5ee7c1=>{const _0x209a03=_0x441e1e;if(_0x47ab72){const _0x50e506=_0x47ab72[_0x209a03(0x147)][_0x209a03(0x149)]['get'](_0x5ee7c1[_0x209a03(0x13a)]);_0x47ab72[_0x209a03(0x160)]([_0x5ee7c1]);let _0x2edd3b=_0x5ee7c1[_0x209a03(0x13a)],_0x33269d=_0x5ee7c1[_0x209a03(0x14c)];_0x33269d['update']({'unreadMessages':0x0});_0x2edd3b&&_0x50e506?.[_0x209a03(0x138)]>0x0&&(_0x47ab72[_0x209a03(0x147)][_0x209a03(0x149)][_0x209a03(0x15f)](_0x2edd3b),_0x47ab72['sendPresenceUpdate'](_0x209a03(0x153)),setTimeout(()=>{const _0x3011de=_0x209a03;_0x47ab72[_0x3011de(0x13f)](_0x3011de(0x145));},0x1388));try{return!![];}catch(_0x1549cc){throw new AppError_1[(_0x209a03(0x154))](_0x209a03(0x161));}}});return;}};exports[a524_0x475e8f(0x143)]=SendAckBYticketId;const SendAckBYRemoteJid=async({remoteJid:_0x5bc94d,companyId:_0x357800})=>{const _0x5acd57=a524_0x475e8f,{rows:_0x15d359}=await Message_1[_0x5acd57(0x154)]['findAndCountAll']({'limit':0x1,'order':[[_0x5acd57(0x14f),_0x5acd57(0x144)]],'where':{'remoteJid':_0x5bc94d,'ack':0x0,'companyId':_0x357800}});_0x15d359[_0x5acd57(0x15a)](async _0x220260=>{const _0x1d391a=_0x5acd57;let _0x979630=_0x220260[_0x1d391a(0x15d)];});return;};exports[a524_0x475e8f(0x140)]=SendAckBYRemoteJid;