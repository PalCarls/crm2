'use strict';const a560_0x2448df=a560_0xdaf4;(function(_0x190ae2,_0x1769d7){const _0x4d9269=a560_0xdaf4,_0x33b351=_0x190ae2();while(!![]){try{const _0x2df1f5=parseInt(_0x4d9269(0x15a))/0x1+-parseInt(_0x4d9269(0x13d))/0x2+parseInt(_0x4d9269(0x160))/0x3*(-parseInt(_0x4d9269(0x150))/0x4)+-parseInt(_0x4d9269(0x14e))/0x5*(-parseInt(_0x4d9269(0x14f))/0x6)+parseInt(_0x4d9269(0x14c))/0x7*(parseInt(_0x4d9269(0x14a))/0x8)+-parseInt(_0x4d9269(0x14d))/0x9*(-parseInt(_0x4d9269(0x158))/0xa)+parseInt(_0x4d9269(0x152))/0xb;if(_0x2df1f5===_0x1769d7)break;else _0x33b351['push'](_0x33b351['shift']());}catch(_0x284361){_0x33b351['push'](_0x33b351['shift']());}}}(a560_0x3d89,0x9274c));var __importDefault=this&&this[a560_0x2448df(0x148)]||function(_0xbc0b57){return _0xbc0b57&&_0xbc0b57['__esModule']?_0xbc0b57:{'default':_0xbc0b57};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a560_0x2448df(0x151)]=exports[a560_0x2448df(0x141)]=void 0x0;const AppError_1=__importDefault(require(a560_0x2448df(0x155))),GetTicketWbot_1=__importDefault(require(a560_0x2448df(0x13b))),Ticket_1=__importDefault(require(a560_0x2448df(0x15c))),Message_1=__importDefault(require(a560_0x2448df(0x154))),ShowTicketService_1=__importDefault(require('../TicketServices/ShowTicketService')),SendAckBYticketId=async({ticketId:_0x5e7602,companyId:_0x57ae63})=>{const _0x359849=a560_0x2448df,_0x29b0dd=await(0x0,ShowTicketService_1[_0x359849(0x142)])(_0x5e7602,_0x57ae63);let _0x5078ee=_0x29b0dd[_0x359849(0x140)];if(_0x5078ee>0x0){let _0x5d9c55;try{_0x5d9c55=await(0x0,GetTicketWbot_1[_0x359849(0x142)])(_0x29b0dd);}catch(_0x3d93c3){console['log']('não\x20consegui\x20pegar\x20o\x20wbot');}if(!_0x29b0dd)throw new AppError_1['default'](_0x359849(0x156),0x194);const _0x122332=0x64,{count:_0x48690a,rows:_0xeba48c}=await Message_1[_0x359849(0x142)]['findAndCountAll']({'limit':_0x122332,'include':[_0x359849(0x149),{'model':Message_1[_0x359849(0x142)],'as':_0x359849(0x145),'include':[_0x359849(0x149)]},{'model':Ticket_1[_0x359849(0x142)],'where':{'contactId':_0x29b0dd[_0x359849(0x144)]},'required':!![]}],'order':[[_0x359849(0x14b),_0x359849(0x146)]]});_0xeba48c['forEach'](async _0x3154b8=>{const _0xa44ccc=_0x359849;if(_0x5d9c55){const _0x4660e9=_0x5d9c55[_0xa44ccc(0x147)][_0xa44ccc(0x13c)][_0xa44ccc(0x15d)](_0x3154b8[_0xa44ccc(0x13e)]);_0x5d9c55[_0xa44ccc(0x159)]([_0x3154b8]);let _0x55a0c9=_0x3154b8['remoteJid'],_0x599f3e=_0x3154b8[_0xa44ccc(0x157)];_0x599f3e[_0xa44ccc(0x15f)]({'unreadMessages':0x0});_0x55a0c9&&_0x4660e9?.['unreadCount']>0x0&&(_0x5d9c55['store'][_0xa44ccc(0x13c)]['deleteById'](_0x55a0c9),_0x5d9c55[_0xa44ccc(0x15b)]('available'),setTimeout(()=>{const _0x3330c4=_0xa44ccc;_0x5d9c55[_0x3330c4(0x15b)](_0x3330c4(0x13f));},0x1388));try{return!![];}catch(_0x5ddd4e){throw new AppError_1[(_0xa44ccc(0x142))](_0xa44ccc(0x153));}}});return;}};exports[a560_0x2448df(0x141)]=SendAckBYticketId;function a560_0x3d89(){const _0xd4c6ba=['contactId','quotedMsg','DESC','store','__importDefault','contact','1024NomyoV','createdAt','24199Nhtvsb','46971hsthvb','160215EsWoff','18jInRUy','4UsvYhx','SendAckBYRemoteJid','4638656njAcbV','ERR_SENDING_WAPP_MSG','../../models/Message','../../errors/AppError','ERR_NO_TICKET_FOUND','ticket','10stDuNn','readMessages','841399jwSumw','sendPresenceUpdate','../../models/Ticket','get','findAndCountAll','update','1153929ZyDbsN','ticketId','../../helpers/GetTicketWbot','chats','1644824OAtCBw','remoteJid','unavailable','unreadMessages','SendAckBYticketId','default','forEach'];a560_0x3d89=function(){return _0xd4c6ba;};return a560_0x3d89();}const SendAckBYRemoteJid=async({remoteJid:_0x57daee,companyId:_0x2b7165})=>{const _0x12ed2b=a560_0x2448df,{rows:_0x776c18}=await Message_1[_0x12ed2b(0x142)][_0x12ed2b(0x15e)]({'limit':0x1,'order':[[_0x12ed2b(0x14b),_0x12ed2b(0x146)]],'where':{'remoteJid':_0x57daee,'ack':0x0,'companyId':_0x2b7165}});_0x776c18[_0x12ed2b(0x143)](async _0x59d9b7=>{const _0x338efc=_0x12ed2b;let _0x576346=_0x59d9b7[_0x338efc(0x13a)];});return;};function a560_0xdaf4(_0x309670,_0x3fb5cd){const _0x3d8967=a560_0x3d89();return a560_0xdaf4=function(_0xdaf4b1,_0xce3b00){_0xdaf4b1=_0xdaf4b1-0x13a;let _0x24cf7f=_0x3d8967[_0xdaf4b1];return _0x24cf7f;},a560_0xdaf4(_0x309670,_0x3fb5cd);}exports[a560_0x2448df(0x151)]=SendAckBYRemoteJid;