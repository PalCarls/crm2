'use strict';function a608_0x4d50(_0x51fd9e,_0x557992){const _0x4389b4=a608_0x4389();return a608_0x4d50=function(_0x4d5065,_0xff3c6a){_0x4d5065=_0x4d5065-0x1a4;let _0x29d946=_0x4389b4[_0x4d5065];return _0x29d946;},a608_0x4d50(_0x51fd9e,_0x557992);}const a608_0x15b10d=a608_0x4d50;(function(_0x27a0ae,_0x5bad5d){const _0x56b81b=a608_0x4d50,_0x22102b=_0x27a0ae();while(!![]){try{const _0x2350d4=-parseInt(_0x56b81b(0x1a9))/0x1*(-parseInt(_0x56b81b(0x1b2))/0x2)+parseInt(_0x56b81b(0x1a5))/0x3+parseInt(_0x56b81b(0x1ae))/0x4*(parseInt(_0x56b81b(0x1af))/0x5)+parseInt(_0x56b81b(0x1a4))/0x6+parseInt(_0x56b81b(0x1aa))/0x7*(-parseInt(_0x56b81b(0x1b1))/0x8)+-parseInt(_0x56b81b(0x1ac))/0x9+-parseInt(_0x56b81b(0x1a8))/0xa;if(_0x2350d4===_0x5bad5d)break;else _0x22102b['push'](_0x22102b['shift']());}catch(_0x1f6897){_0x22102b['push'](_0x22102b['shift']());}}}(a608_0x4389,0xbd1ca));var __importDefault=this&&this['__importDefault']||function(_0x11ed75){const _0x3956d5=a608_0x4d50;return _0x11ed75&&_0x11ed75[_0x3956d5(0x1a7)]?_0x11ed75:{'default':_0x11ed75};};Object['defineProperty'](exports,a608_0x15b10d(0x1a7),{'value':!![]});function a608_0x4389(){const _0x4160e1=['__esModule','5270810NRZfhQ','301031KKmYGo','315ZiKoOK','../../models/Queue','6622056TSygFW','../../models/User','3225620oxkSgl','5EULZBh','findAll','63152WdZVVM','2jfqelT','3103104oYMjtK','2304231judFDo','default'];a608_0x4389=function(){return _0x4160e1;};return a608_0x4389();}const User_1=__importDefault(require(a608_0x15b10d(0x1ad))),AppError_1=__importDefault(require('../../errors/AppError')),Queue_1=__importDefault(require(a608_0x15b10d(0x1ab))),SimpleListService=async({companyId:_0x1cea3b})=>{const _0x57b270=a608_0x15b10d,_0x9adfd0=await User_1[_0x57b270(0x1a6)][_0x57b270(0x1b0)]({'where':{'companyId':_0x1cea3b},'attributes':['name','id','email'],'include':[{'model':Queue_1[_0x57b270(0x1a6)],'as':'queues'}],'order':[['id','ASC']]});if(!_0x9adfd0)throw new AppError_1['default']('ERR_NO_USER_FOUND',0x194);return _0x9adfd0;};exports[a608_0x15b10d(0x1a6)]=SimpleListService;