'use strict';function a591_0x5574(){const _0x3c6964=['findAll','1736833YVZGDt','147094owwjJq','8877gallFR','30ktmtMG','394848ciKocW','2045412zbdjLj','DESC','createdAt','155259BmZfod','8vpOGoZ','../../models/TicketNote','../../models/User','defineProperty','__esModule','1KEBUbQ','name','38450ubNSao','default','ticket','status','4210jGgHsD','user','../../models/Ticket','../../models/Contact'];a591_0x5574=function(){return _0x3c6964;};return a591_0x5574();}const a591_0x36e067=a591_0x2af3;(function(_0x386db3,_0x5b9c6f){const _0x1c0fe8=a591_0x2af3,_0x242c3c=_0x386db3();while(!![]){try{const _0x41454c=parseInt(_0x1c0fe8(0x1af))/0x1*(-parseInt(_0x1c0fe8(0x1bb))/0x2)+parseInt(_0x1c0fe8(0x1c2))/0x3+-parseInt(_0x1c0fe8(0x1be))/0x4+-parseInt(_0x1c0fe8(0x1b1))/0x5*(parseInt(_0x1c0fe8(0x1bd))/0x6)+-parseInt(_0x1c0fe8(0x1ba))/0x7*(parseInt(_0x1c0fe8(0x1c3))/0x8)+parseInt(_0x1c0fe8(0x1bf))/0x9+-parseInt(_0x1c0fe8(0x1b5))/0xa*(-parseInt(_0x1c0fe8(0x1bc))/0xb);if(_0x41454c===_0x5b9c6f)break;else _0x242c3c['push'](_0x242c3c['shift']());}catch(_0x2b9fe3){_0x242c3c['push'](_0x242c3c['shift']());}}}(a591_0x5574,0x270c4));var __importDefault=this&&this['__importDefault']||function(_0x2d657e){const _0x4894a5=a591_0x2af3;return _0x2d657e&&_0x2d657e[_0x4894a5(0x1ae)]?_0x2d657e:{'default':_0x2d657e};};Object[a591_0x36e067(0x1ad)](exports,a591_0x36e067(0x1ae),{'value':!![]});function a591_0x2af3(_0x58c4f0,_0x306b22){const _0x5574ba=a591_0x5574();return a591_0x2af3=function(_0x2af3ef,_0x423d36){_0x2af3ef=_0x2af3ef-0x1ab;let _0x4a6e3c=_0x5574ba[_0x2af3ef];return _0x4a6e3c;},a591_0x2af3(_0x58c4f0,_0x306b22);}const TicketNote_1=__importDefault(require(a591_0x36e067(0x1ab))),User_1=__importDefault(require(a591_0x36e067(0x1ac))),Contact_1=__importDefault(require(a591_0x36e067(0x1b8))),Ticket_1=__importDefault(require(a591_0x36e067(0x1b7))),FindNotesByContactIdAndTicketId=async({contactId:_0xca5d3f,ticketId:_0x47b15f})=>{const _0x549d1d=a591_0x36e067,_0x403e26=await TicketNote_1['default'][_0x549d1d(0x1b9)]({'where':{'contactId':_0xca5d3f,'ticketId':_0x47b15f},'include':[{'model':User_1['default'],'as':_0x549d1d(0x1b6),'attributes':['id',_0x549d1d(0x1b0),'email']},{'model':Contact_1[_0x549d1d(0x1b2)],'as':'contact','attributes':['id',_0x549d1d(0x1b0)]},{'model':Ticket_1[_0x549d1d(0x1b2)],'as':_0x549d1d(0x1b3),'attributes':['id',_0x549d1d(0x1b4),_0x549d1d(0x1c1)]}],'order':[['createdAt',_0x549d1d(0x1c0)]]});return _0x403e26;};exports[a591_0x36e067(0x1b2)]=FindNotesByContactIdAndTicketId;