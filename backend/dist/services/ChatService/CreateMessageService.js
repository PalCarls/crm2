<<<<<<< HEAD
'use strict';const a409_0x5b325c=a409_0x5ea0;(function(_0x19c4d0,_0x35134a){const _0x55fa8b=a409_0x5ea0,_0x3d7782=_0x19c4d0();while(!![]){try{const _0x56839d=-parseInt(_0x55fa8b(0xc0))/0x1*(-parseInt(_0x55fa8b(0xbf))/0x2)+-parseInt(_0x55fa8b(0xc6))/0x3*(-parseInt(_0x55fa8b(0xd5))/0x4)+-parseInt(_0x55fa8b(0xc9))/0x5*(-parseInt(_0x55fa8b(0xc1))/0x6)+parseInt(_0x55fa8b(0xbe))/0x7+parseInt(_0x55fa8b(0xbd))/0x8+parseInt(_0x55fa8b(0xbc))/0x9*(parseInt(_0x55fa8b(0xd2))/0xa)+parseInt(_0x55fa8b(0xcd))/0xb*(-parseInt(_0x55fa8b(0xd6))/0xc);if(_0x56839d===_0x35134a)break;else _0x3d7782['push'](_0x3d7782['shift']());}catch(_0x5227b3){_0x3d7782['push'](_0x3d7782['shift']());}}}(a409_0x14af,0x7a879));function a409_0x14af(){const _0x13cb3f=['../../models/ChatMessage','1529385QixHJt','name','default','../../models/User','1523467lEHZrL','../../models/ChatUser','update','../../models/Chat','chat','370020fzbSWO','userId','findByPk','4216xIiXBR','216idjdha','198cdjHvV','4503296TCaxpI','658847HXcTvQ','2gdRgQO','262949ruDkmk','6Ngaijm','findAll','__esModule','create','unreads','2718FfsMPs','reload'];a409_0x14af=function(){return _0x13cb3f;};return a409_0x14af();}var __importDefault=this&&this['__importDefault']||function(_0x40bf48){const _0x23d3d4=a409_0x5ea0;return _0x40bf48&&_0x40bf48[_0x23d3d4(0xc3)]?_0x40bf48:{'default':_0x40bf48};};function a409_0x5ea0(_0x10e096,_0x3f51d7){const _0x14afa6=a409_0x14af();return a409_0x5ea0=function(_0x5ea0a2,_0xba3a23){_0x5ea0a2=_0x5ea0a2-0xbc;let _0x5134d3=_0x14afa6[_0x5ea0a2];return _0x5134d3;},a409_0x5ea0(_0x10e096,_0x3f51d7);}Object['defineProperty'](exports,a409_0x5b325c(0xc3),{'value':!![]});const Chat_1=__importDefault(require(a409_0x5b325c(0xd0))),ChatMessage_1=__importDefault(require(a409_0x5b325c(0xc8))),ChatUser_1=__importDefault(require(a409_0x5b325c(0xce))),User_1=__importDefault(require(a409_0x5b325c(0xcc)));async function CreateMessageService({senderId:_0xcf052c,chatId:_0x2c46c8,message:_0x5ad35c}){const _0x374286=a409_0x5b325c,_0x3db01e=await ChatMessage_1[_0x374286(0xcb)][_0x374286(0xc4)]({'senderId':_0xcf052c,'chatId':_0x2c46c8,'message':_0x5ad35c});await _0x3db01e[_0x374286(0xc7)]({'include':[{'model':User_1[_0x374286(0xcb)],'as':'sender','attributes':['id',_0x374286(0xca)]},{'model':Chat_1['default'],'as':'chat','include':[{'model':ChatUser_1[_0x374286(0xcb)],'as':'users'}]}]});const _0x515085=await User_1[_0x374286(0xcb)][_0x374286(0xd4)](_0xcf052c);await _0x3db01e[_0x374286(0xd1)]['update']({'lastMessage':_0x515085[_0x374286(0xca)]+':\x20'+_0x5ad35c});const _0x1f22c7=await ChatUser_1[_0x374286(0xcb)][_0x374286(0xc2)]({'where':{'chatId':_0x2c46c8}});for(let _0x31780d of _0x1f22c7){_0x31780d[_0x374286(0xd3)]===_0xcf052c?await _0x31780d[_0x374286(0xcf)]({'unreads':0x0}):await _0x31780d[_0x374286(0xcf)]({'unreads':_0x31780d[_0x374286(0xc5)]+0x1});}return _0x3db01e;}exports['default']=CreateMessageService;
=======
'use strict';const a409_0x5a2c00=a409_0x5796;(function(_0x29d08d,_0x539036){const _0x1b49c6=a409_0x5796,_0x3d0a5b=_0x29d08d();while(!![]){try{const _0x4656b8=-parseInt(_0x1b49c6(0x1ff))/0x1+parseInt(_0x1b49c6(0x1f9))/0x2+-parseInt(_0x1b49c6(0x1f7))/0x3+parseInt(_0x1b49c6(0x209))/0x4+-parseInt(_0x1b49c6(0x1fe))/0x5+parseInt(_0x1b49c6(0x202))/0x6*(-parseInt(_0x1b49c6(0x1fb))/0x7)+parseInt(_0x1b49c6(0x1f6))/0x8*(parseInt(_0x1b49c6(0x1f8))/0x9);if(_0x4656b8===_0x539036)break;else _0x3d0a5b['push'](_0x3d0a5b['shift']());}catch(_0x2ef1df){_0x3d0a5b['push'](_0x3d0a5b['shift']());}}}(a409_0x6c44,0xa378d));function a409_0x6c44(){const _0x461861=['findByPk','reload','chat','name','../../models/ChatMessage','3769500RFueIj','defineProperty','__esModule','../../models/Chat','104oOYLwA','2771805jQzlfh','1610181nzSgvE','1453908mFsUFw','../../models/User','76027nBvvoo','unreads','__importDefault','4315650GDAwqE','767369qOcEIa','sender','update','426afhSjM','default'];a409_0x6c44=function(){return _0x461861;};return a409_0x6c44();}var __importDefault=this&&this[a409_0x5a2c00(0x1fd)]||function(_0x1f7921){const _0x4b2233=a409_0x5a2c00;return _0x1f7921&&_0x1f7921[_0x4b2233(0x1f4)]?_0x1f7921:{'default':_0x1f7921};};Object[a409_0x5a2c00(0x20a)](exports,a409_0x5a2c00(0x1f4),{'value':!![]});const Chat_1=__importDefault(require(a409_0x5a2c00(0x1f5))),ChatMessage_1=__importDefault(require(a409_0x5a2c00(0x208))),ChatUser_1=__importDefault(require('../../models/ChatUser')),User_1=__importDefault(require(a409_0x5a2c00(0x1fa)));function a409_0x5796(_0x19e4a7,_0x350a32){const _0x6c4492=a409_0x6c44();return a409_0x5796=function(_0x57968a,_0x4bea80){_0x57968a=_0x57968a-0x1f4;let _0x11f169=_0x6c4492[_0x57968a];return _0x11f169;},a409_0x5796(_0x19e4a7,_0x350a32);}async function CreateMessageService({senderId:_0x43b434,chatId:_0x39a471,message:_0x3c4d79}){const _0x5f2b35=a409_0x5a2c00,_0x3976d0=await ChatMessage_1[_0x5f2b35(0x203)]['create']({'senderId':_0x43b434,'chatId':_0x39a471,'message':_0x3c4d79});await _0x3976d0[_0x5f2b35(0x205)]({'include':[{'model':User_1[_0x5f2b35(0x203)],'as':_0x5f2b35(0x200),'attributes':['id',_0x5f2b35(0x207)]},{'model':Chat_1['default'],'as':_0x5f2b35(0x206),'include':[{'model':ChatUser_1['default'],'as':'users'}]}]});const _0xbcc2fd=await User_1[_0x5f2b35(0x203)][_0x5f2b35(0x204)](_0x43b434);await _0x3976d0[_0x5f2b35(0x206)]['update']({'lastMessage':_0xbcc2fd[_0x5f2b35(0x207)]+':\x20'+_0x3c4d79});const _0xf420=await ChatUser_1[_0x5f2b35(0x203)]['findAll']({'where':{'chatId':_0x39a471}});for(let _0x3d3487 of _0xf420){_0x3d3487['userId']===_0x43b434?await _0x3d3487[_0x5f2b35(0x201)]({'unreads':0x0}):await _0x3d3487[_0x5f2b35(0x201)]({'unreads':_0x3d3487[_0x5f2b35(0x1fc)]+0x1});}return _0x3976d0;}exports[a409_0x5a2c00(0x203)]=CreateMessageService;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
