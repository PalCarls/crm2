'use strict';const a418_0x1cbb97=a418_0x328a;(function(_0x4904c8,_0x6539c1){const _0x529722=a418_0x328a,_0x187990=_0x4904c8();while(!![]){try{const _0x277519=parseInt(_0x529722(0x1a0))/0x1*(parseInt(_0x529722(0x1a9))/0x2)+-parseInt(_0x529722(0x1ae))/0x3+parseInt(_0x529722(0x1ac))/0x4+-parseInt(_0x529722(0x1af))/0x5+-parseInt(_0x529722(0x1a7))/0x6+-parseInt(_0x529722(0x1a4))/0x7*(parseInt(_0x529722(0x1a8))/0x8)+-parseInt(_0x529722(0x1b3))/0x9*(-parseInt(_0x529722(0x1ad))/0xa);if(_0x277519===_0x6539c1)break;else _0x187990['push'](_0x187990['shift']());}catch(_0x47a1e2){_0x187990['push'](_0x187990['shift']());}}}(a418_0x1326,0x99a15));function a418_0x1326(){const _0x4cf15d=['update','../../models/ChatUser','default','37287LWpmeH','reload','findAll','create','sender','41TslNqj','users','unreads','chat','84658mjjgYl','../../models/User','../../models/Chat','3353676QXMoIn','152WgydxK','34526xPbdBJ','defineProperty','__esModule','80796KQKPFU','2910qpnKqU','424932XigzJy','1869750AOPDJh'];a418_0x1326=function(){return _0x4cf15d;};return a418_0x1326();}var __importDefault=this&&this['__importDefault']||function(_0x10d8d7){const _0x23147a=a418_0x328a;return _0x10d8d7&&_0x10d8d7[_0x23147a(0x1ab)]?_0x10d8d7:{'default':_0x10d8d7};};Object[a418_0x1cbb97(0x1aa)](exports,a418_0x1cbb97(0x1ab),{'value':!![]});function a418_0x328a(_0x295c5f,_0x3e2bef){const _0x132652=a418_0x1326();return a418_0x328a=function(_0x328a24,_0x5d2d09){_0x328a24=_0x328a24-0x1a0;let _0x2296b5=_0x132652[_0x328a24];return _0x2296b5;},a418_0x328a(_0x295c5f,_0x3e2bef);}const Chat_1=__importDefault(require(a418_0x1cbb97(0x1a6))),ChatMessage_1=__importDefault(require('../../models/ChatMessage')),ChatUser_1=__importDefault(require(a418_0x1cbb97(0x1b1))),User_1=__importDefault(require(a418_0x1cbb97(0x1a5)));async function CreateMessageService({senderId:_0x27aed0,chatId:_0x19707b,message:_0x7f107d}){const _0x4489b2=a418_0x1cbb97,_0x167b2d=await ChatMessage_1[_0x4489b2(0x1b2)][_0x4489b2(0x1b6)]({'senderId':_0x27aed0,'chatId':_0x19707b,'message':_0x7f107d});await _0x167b2d[_0x4489b2(0x1b4)]({'include':[{'model':User_1[_0x4489b2(0x1b2)],'as':_0x4489b2(0x1b7),'attributes':['id','name']},{'model':Chat_1[_0x4489b2(0x1b2)],'as':_0x4489b2(0x1a3),'include':[{'model':ChatUser_1[_0x4489b2(0x1b2)],'as':_0x4489b2(0x1a1)}]}]});const _0x32bc33=await User_1[_0x4489b2(0x1b2)]['findByPk'](_0x27aed0);await _0x167b2d[_0x4489b2(0x1a3)][_0x4489b2(0x1b0)]({'lastMessage':_0x32bc33['name']+':\x20'+_0x7f107d});const _0x5c98d5=await ChatUser_1[_0x4489b2(0x1b2)][_0x4489b2(0x1b5)]({'where':{'chatId':_0x19707b}});for(let _0x1cf37e of _0x5c98d5){_0x1cf37e['userId']===_0x27aed0?await _0x1cf37e[_0x4489b2(0x1b0)]({'unreads':0x0}):await _0x1cf37e[_0x4489b2(0x1b0)]({'unreads':_0x1cf37e[_0x4489b2(0x1a2)]+0x1});}return _0x167b2d;}exports[a418_0x1cbb97(0x1b2)]=CreateMessageService;