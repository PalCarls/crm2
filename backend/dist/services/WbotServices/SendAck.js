'use strict';const a543_0x27a78a=a543_0x59e5;(function(_0x49eaea,_0x8802cb){const _0x847e2d=a543_0x59e5,_0x1bc5c0=_0x49eaea();while(!![]){try{const _0x15b26d=parseInt(_0x847e2d(0x1e5))/0x1*(parseInt(_0x847e2d(0x1ea))/0x2)+parseInt(_0x847e2d(0x1f1))/0x3+parseInt(_0x847e2d(0x1eb))/0x4+parseInt(_0x847e2d(0x202))/0x5*(parseInt(_0x847e2d(0x1fb))/0x6)+parseInt(_0x847e2d(0x203))/0x7*(-parseInt(_0x847e2d(0x201))/0x8)+-parseInt(_0x847e2d(0x1de))/0x9+-parseInt(_0x847e2d(0x1f8))/0xa;if(_0x15b26d===_0x8802cb)break;else _0x1bc5c0['push'](_0x1bc5c0['shift']());}catch(_0x44e5f2){_0x1bc5c0['push'](_0x1bc5c0['shift']());}}}(a543_0x4da4,0xe6e2c));function a543_0x4da4(){const _0x2c6bed=['ticketId','ERR_NO_TICKET_FOUND','359634iPitdK','store','../../models/Ticket','ERR_SENDING_WAPP_MSG','sendPresenceUpdate','../TicketServices/ShowTicketService','findAndCountAll','16114250jaQzLu','__esModule','get','18YXqkfo','available','defineProperty','deleteById','SendAckBYRemoteJid','log','8tUoBRE','2869545hAaopr','6834331KuhJPU','chats','4878576LbDIUQ','remoteJid','unreadMessages','../../models/Message','não\x20consegui\x20pegar\x20o\x20wbot','createdAt','unavailable','2Slkhau','DESC','forEach','../../helpers/GetTicketWbot','contact','944362NmeVMq','5158252suwkFo','SendAckBYticketId','readMessages','default'];a543_0x4da4=function(){return _0x2c6bed;};return a543_0x4da4();}var __importDefault=this&&this['__importDefault']||function(_0x5641ef){const _0x19572b=a543_0x59e5;return _0x5641ef&&_0x5641ef[_0x19572b(0x1f9)]?_0x5641ef:{'default':_0x5641ef};};Object[a543_0x27a78a(0x1fd)](exports,'__esModule',{'value':!![]}),exports[a543_0x27a78a(0x1ff)]=exports[a543_0x27a78a(0x1ec)]=void 0x0;function a543_0x59e5(_0xaa914f,_0x155bac){const _0x4da41e=a543_0x4da4();return a543_0x59e5=function(_0x59e5b9,_0x3f2f4e){_0x59e5b9=_0x59e5b9-0x1de;let _0x42e1ad=_0x4da41e[_0x59e5b9];return _0x42e1ad;},a543_0x59e5(_0xaa914f,_0x155bac);}const AppError_1=__importDefault(require('../../errors/AppError')),GetTicketWbot_1=__importDefault(require(a543_0x27a78a(0x1e8))),Ticket_1=__importDefault(require(a543_0x27a78a(0x1f3))),Message_1=__importDefault(require(a543_0x27a78a(0x1e1))),ShowTicketService_1=__importDefault(require(a543_0x27a78a(0x1f6))),SendAckBYticketId=async({ticketId:_0x16e238,companyId:_0x1a6a6c})=>{const _0x1d2502=a543_0x27a78a,_0x106ec4=await(0x0,ShowTicketService_1['default'])(_0x16e238,_0x1a6a6c);let _0x1730b0=_0x106ec4[_0x1d2502(0x1e0)];if(_0x1730b0>0x0){let _0x58c443;try{_0x58c443=await(0x0,GetTicketWbot_1[_0x1d2502(0x1ee)])(_0x106ec4);}catch(_0x272cd2){console[_0x1d2502(0x200)](_0x1d2502(0x1e2));}if(!_0x106ec4)throw new AppError_1[(_0x1d2502(0x1ee))](_0x1d2502(0x1f0),0x194);const _0x438dc3=0x64,{count:_0x5c6bcb,rows:_0x2503b6}=await Message_1[_0x1d2502(0x1ee)]['findAndCountAll']({'limit':_0x438dc3,'include':[_0x1d2502(0x1e9),{'model':Message_1[_0x1d2502(0x1ee)],'as':'quotedMsg','include':[_0x1d2502(0x1e9)]},{'model':Ticket_1[_0x1d2502(0x1ee)],'where':{'contactId':_0x106ec4['contactId']},'required':!![]}],'order':[[_0x1d2502(0x1e3),_0x1d2502(0x1e6)]]});_0x2503b6[_0x1d2502(0x1e7)](async _0x56033d=>{const _0x396b3c=_0x1d2502;if(_0x58c443){const _0x3da886=_0x58c443['store'][_0x396b3c(0x204)][_0x396b3c(0x1fa)](_0x56033d[_0x396b3c(0x1df)]);_0x58c443[_0x396b3c(0x1ed)]([_0x56033d]);let _0x4e6c6f=_0x56033d['remoteJid'],_0x48af44=_0x56033d['ticket'];_0x48af44['update']({'unreadMessages':0x0});_0x4e6c6f&&_0x3da886?.['unreadCount']>0x0&&(_0x58c443[_0x396b3c(0x1f2)][_0x396b3c(0x204)][_0x396b3c(0x1fe)](_0x4e6c6f),_0x58c443['sendPresenceUpdate'](_0x396b3c(0x1fc)),setTimeout(()=>{const _0x2aa419=_0x396b3c;_0x58c443[_0x2aa419(0x1f5)](_0x2aa419(0x1e4));},0x1388));try{return!![];}catch(_0x3647c1){throw new AppError_1['default'](_0x396b3c(0x1f4));}}});return;}};exports[a543_0x27a78a(0x1ec)]=SendAckBYticketId;const SendAckBYRemoteJid=async({remoteJid:_0x2abbbf,companyId:_0x4f1fb5})=>{const _0x4b0311=a543_0x27a78a,{rows:_0x27367a}=await Message_1['default'][_0x4b0311(0x1f7)]({'limit':0x1,'order':[[_0x4b0311(0x1e3),_0x4b0311(0x1e6)]],'where':{'remoteJid':_0x2abbbf,'ack':0x0,'companyId':_0x4f1fb5}});_0x27367a[_0x4b0311(0x1e7)](async _0x515a64=>{const _0x36e622=_0x4b0311;let _0x31461d=_0x515a64[_0x36e622(0x1ef)];});return;};exports[a543_0x27a78a(0x1ff)]=SendAckBYRemoteJid;