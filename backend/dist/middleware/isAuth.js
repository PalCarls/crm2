'use strict';const a296_0x5d4217=a296_0x36c8;(function(_0x39d0c1,_0x1d5738){const _0x10f737=a296_0x36c8,_0xa07f=_0x39d0c1();while(!![]){try{const _0x4a28c0=-parseInt(_0x10f737(0x15e))/0x1+parseInt(_0x10f737(0x154))/0x2+-parseInt(_0x10f737(0x152))/0x3*(parseInt(_0x10f737(0x15d))/0x4)+-parseInt(_0x10f737(0x16a))/0x5*(-parseInt(_0x10f737(0x15a))/0x6)+-parseInt(_0x10f737(0x15b))/0x7+parseInt(_0x10f737(0x163))/0x8+parseInt(_0x10f737(0x162))/0x9*(parseInt(_0x10f737(0x153))/0xa);if(_0x4a28c0===_0x1d5738)break;else _0xa07f['push'](_0xa07f['shift']());}catch(_0x3313f9){_0xa07f['push'](_0xa07f['shift']());}}}(a296_0x315c,0x1e3c1));function a296_0x36c8(_0x30bae7,_0x36d0c9){const _0x315c20=a296_0x315c();return a296_0x36c8=function(_0x36c842,_0x3e111a){_0x36c842=_0x36c842-0x151;let _0x3d93c9=_0x315c20[_0x36c842];return _0x3d93c9;},a296_0x36c8(_0x30bae7,_0x36d0c9);}var __importDefault=this&&this['__importDefault']||function(_0x29016f){return _0x29016f&&_0x29016f['__esModule']?_0x29016f:{'default':_0x29016f};};function a296_0x315c(){const _0xa9e819=['split','defineProperty','ERR_SESSION_EXPIRED','774ClolDn','90xixAPm','44336wrPMLZ','update','getIO','../errors/AppError','default','../config/auth','9582gLcyVf','1229634dZBoMa','online','2432YXAvWv','53065cUFKvV','companyId','Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request','secret','285921sOPDXL','256488JrdKZV','../libs/socket','headers','user','message','../services/UserServices/ShowUserService','emit','530RWJFDq'];a296_0x315c=function(){return _0xa9e819;};return a296_0x315c();}Object[a296_0x5d4217(0x16c)](exports,'__esModule',{'value':!![]});const jsonwebtoken_1=require('jsonwebtoken'),AppError_1=__importDefault(require(a296_0x5d4217(0x157))),auth_1=__importDefault(require(a296_0x5d4217(0x159))),socket_1=require(a296_0x5d4217(0x164)),ShowUserService_1=__importDefault(require(a296_0x5d4217(0x168))),updateUser=async(_0x5380f5,_0x4e7fc6)=>{const _0xeb3abc=a296_0x5d4217,_0x4fb301=await(0x0,ShowUserService_1[_0xeb3abc(0x158)])(_0x5380f5,_0x4e7fc6);_0x4fb301['changed']('updatedAt',!![]);let _0x5c3a91=null;_0x5c3a91={'updatedAt':new Date()};if(!_0x4fb301[_0xeb3abc(0x15c)]){_0x5c3a91={..._0x5c3a91,'online':!![]},await _0x4fb301[_0xeb3abc(0x155)](_0x5c3a91),await _0x4fb301['reload']();const _0x5c9312=(0x0,socket_1[_0xeb3abc(0x156)])();_0x5c9312[_0xeb3abc(0x169)](_0xeb3abc(0x166)+_0x4fb301[_0xeb3abc(0x15f)],{'action':_0xeb3abc(0x155),'user':_0x4fb301});}else await _0x4fb301[_0xeb3abc(0x155)](_0x5c3a91);},isAuth=async(_0x37e0d9,_0x10a5a5,_0x50158d)=>{const _0x274c3f=a296_0x5d4217,_0xdec8a9=_0x37e0d9[_0x274c3f(0x165)]['authorization'];if(!_0xdec8a9)throw new AppError_1[(_0x274c3f(0x158))]('ERR_SESSION_EXPIRED',0x191);const [,_0x56a31f]=_0xdec8a9[_0x274c3f(0x16b)]('\x20');try{const _0x428550=(0x0,jsonwebtoken_1['verify'])(_0x56a31f,auth_1[_0x274c3f(0x158)][_0x274c3f(0x161)]),{id:_0x57d915,profile:_0x5a27ad,companyId:_0x141a88}=_0x428550;updateUser(_0x57d915,_0x141a88),_0x37e0d9['user']={'id':_0x57d915,'profile':_0x5a27ad,'companyId':_0x141a88};}catch(_0x112068){if(_0x112068[_0x274c3f(0x167)]===_0x274c3f(0x151)&&_0x112068['statusCode']===0x191)throw new AppError_1[(_0x274c3f(0x158))](_0x112068[_0x274c3f(0x167)],0x191);else throw new AppError_1[(_0x274c3f(0x158))](_0x274c3f(0x160),0x193);}return _0x50158d();};exports[a296_0x5d4217(0x158)]=isAuth;