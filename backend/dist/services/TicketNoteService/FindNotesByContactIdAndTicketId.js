'use strict';function a494_0x2ad6(_0x25c018,_0x40eb01){const _0x4ac8c7=a494_0x4ac8();return a494_0x2ad6=function(_0x2ad6f2,_0x2d33dc){_0x2ad6f2=_0x2ad6f2-0xf8;let _0x21740a=_0x4ac8c7[_0x2ad6f2];return _0x21740a;},a494_0x2ad6(_0x25c018,_0x40eb01);}const a494_0x563115=a494_0x2ad6;(function(_0x5045cb,_0x53acec){const _0x23141a=a494_0x2ad6,_0x367833=_0x5045cb();while(!![]){try{const _0x3bb1e5=parseInt(_0x23141a(0x10c))/0x1+-parseInt(_0x23141a(0xf9))/0x2+parseInt(_0x23141a(0x108))/0x3+parseInt(_0x23141a(0x10b))/0x4+parseInt(_0x23141a(0xff))/0x5*(parseInt(_0x23141a(0x107))/0x6)+parseInt(_0x23141a(0x100))/0x7+-parseInt(_0x23141a(0x10d))/0x8;if(_0x3bb1e5===_0x53acec)break;else _0x367833['push'](_0x367833['shift']());}catch(_0x11ba60){_0x367833['push'](_0x367833['shift']());}}}(a494_0x4ac8,0x864d4));function a494_0x4ac8(){const _0x41b253=['user','__esModule','findAll','../../models/Ticket','defineProperty','3863130YbcOGe','6585803mQygeh','../../models/User','__importDefault','../../models/TicketNote','name','status','default','6GXFNpv','2369139nXPEGT','contact','createdAt','3081816kfafUt','1031209DTozhH','23575056lLZsbS','ticket','1615698mkBDRi'];a494_0x4ac8=function(){return _0x41b253;};return a494_0x4ac8();}var __importDefault=this&&this[a494_0x563115(0x102)]||function(_0x31d928){const _0x134e7b=a494_0x563115;return _0x31d928&&_0x31d928[_0x134e7b(0xfb)]?_0x31d928:{'default':_0x31d928};};Object[a494_0x563115(0xfe)](exports,a494_0x563115(0xfb),{'value':!![]});const TicketNote_1=__importDefault(require(a494_0x563115(0x103))),User_1=__importDefault(require(a494_0x563115(0x101))),Contact_1=__importDefault(require('../../models/Contact')),Ticket_1=__importDefault(require(a494_0x563115(0xfd))),FindNotesByContactIdAndTicketId=async({contactId:_0x1da576,ticketId:_0x19627a})=>{const _0x25c2f8=a494_0x563115,_0x336452=await TicketNote_1[_0x25c2f8(0x106)][_0x25c2f8(0xfc)]({'where':{'contactId':_0x1da576,'ticketId':_0x19627a},'include':[{'model':User_1[_0x25c2f8(0x106)],'as':_0x25c2f8(0xfa),'attributes':['id',_0x25c2f8(0x104),'email']},{'model':Contact_1[_0x25c2f8(0x106)],'as':_0x25c2f8(0x109),'attributes':['id',_0x25c2f8(0x104)]},{'model':Ticket_1[_0x25c2f8(0x106)],'as':_0x25c2f8(0xf8),'attributes':['id',_0x25c2f8(0x105),_0x25c2f8(0x10a)]}],'order':[[_0x25c2f8(0x10a),'DESC']]});return _0x336452;};exports[a494_0x563115(0x106)]=FindNotesByContactIdAndTicketId;