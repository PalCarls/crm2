'use strict';const a260_0x1b74f0=a260_0x47ec;(function(_0x1f75ce,_0x6773a2){const _0x544409=a260_0x47ec,_0x58ccb9=_0x1f75ce();while(!![]){try{const _0x425d82=-parseInt(_0x544409(0x158))/0x1+-parseInt(_0x544409(0x160))/0x2+-parseInt(_0x544409(0x15d))/0x3*(parseInt(_0x544409(0x14c))/0x4)+-parseInt(_0x544409(0x14d))/0x5+parseInt(_0x544409(0x14b))/0x6+parseInt(_0x544409(0x15a))/0x7+parseInt(_0x544409(0x165))/0x8;if(_0x425d82===_0x6773a2)break;else _0x58ccb9['push'](_0x58ccb9['shift']());}catch(_0x60619a){_0x58ccb9['push'](_0x58ccb9['shift']());}}}(a260_0x5100,0xe2129));var __importDefault=this&&this[a260_0x1b74f0(0x157)]||function(_0x57b2e9){const _0x24fd5e=a260_0x1b74f0;return _0x57b2e9&&_0x57b2e9[_0x24fd5e(0x15f)]?_0x57b2e9:{'default':_0x57b2e9};};function a260_0x47ec(_0x145999,_0x1d6363){const _0x510087=a260_0x5100();return a260_0x47ec=function(_0x47ece2,_0x1e2b1f){_0x47ece2=_0x47ece2-0x14a;let _0x4b9620=_0x510087[_0x47ece2];return _0x4b9620;},a260_0x47ec(_0x145999,_0x1d6363);}Object['defineProperty'](exports,a260_0x1b74f0(0x15f),{'value':!![]});const jsonwebtoken_1=require('jsonwebtoken'),AppError_1=__importDefault(require('../errors/AppError')),auth_1=__importDefault(require('../config/auth')),socket_1=require(a260_0x1b74f0(0x159)),ShowUserService_1=__importDefault(require(a260_0x1b74f0(0x151))),updateUser=async _0x6042b0=>{const _0x44d470=a260_0x1b74f0,_0x3f7678=await(0x0,ShowUserService_1['default'])(_0x6042b0);_0x3f7678[_0x44d470(0x152)]('updatedAt',!![]);let _0x1a1c8f=null;_0x1a1c8f={'updatedAt':new Date()};if(!_0x3f7678[_0x44d470(0x15e)]){_0x1a1c8f={..._0x1a1c8f,'online':!![]},await _0x3f7678[_0x44d470(0x14f)](_0x1a1c8f),await _0x3f7678['reload']();const _0x5e5fe2=(0x0,socket_1[_0x44d470(0x153)])();_0x5e5fe2[_0x44d470(0x154)]('user'+_0x3f7678[_0x44d470(0x15c)],{'action':_0x44d470(0x14f),'user':_0x3f7678});}else await _0x3f7678['update'](_0x1a1c8f);},isAuth=async(_0x1a2073,_0x30dcc4,_0x41082a)=>{const _0x35f6b5=a260_0x1b74f0,_0x571e88=_0x1a2073[_0x35f6b5(0x161)][_0x35f6b5(0x14e)];if(!_0x571e88)throw new AppError_1[(_0x35f6b5(0x155))](_0x35f6b5(0x156),0x191);const [,_0x37c88f]=_0x571e88[_0x35f6b5(0x164)]('\x20');try{const _0x3526a6=(0x0,jsonwebtoken_1['verify'])(_0x37c88f,auth_1['default'][_0x35f6b5(0x14a)]),{id:_0x27c158,profile:_0xd76bda,companyId:_0x4908d6}=_0x3526a6;updateUser(_0x27c158),_0x1a2073[_0x35f6b5(0x150)]={'id':_0x27c158,'profile':_0xd76bda,'companyId':_0x4908d6};}catch(_0x2bc006){if(_0x2bc006['message']===_0x35f6b5(0x156)&&_0x2bc006[_0x35f6b5(0x163)]===0x191)throw new AppError_1['default'](_0x2bc006[_0x35f6b5(0x162)],0x191);else throw new AppError_1[(_0x35f6b5(0x155))](_0x35f6b5(0x15b),0x193);}return _0x41082a();};function a260_0x5100(){const _0xe953e=['online','__esModule','2899088PECWzd','headers','message','statusCode','split','25704544ehhAGN','secret','10069548bCkTjS','4rMQerw','2655875hJCaic','authorization','update','user','../services/UserServices/ShowUserService','changed','getIO','emit','default','ERR_SESSION_EXPIRED','__importDefault','1683219kbgbex','../libs/socket','7467782HYciqV','Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request','companyId','4104663dybjmF'];a260_0x5100=function(){return _0xe953e;};return a260_0x5100();}exports[a260_0x1b74f0(0x155)]=isAuth;