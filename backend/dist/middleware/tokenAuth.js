'use strict';const a272_0x4f337a=a272_0x3034;(function(_0x3a711e,_0x4924ae){const _0x364964=a272_0x3034,_0xbb4098=_0x3a711e();while(!![]){try{const _0x21daad=-parseInt(_0x364964(0xc6))/0x1*(parseInt(_0x364964(0xc9))/0x2)+parseInt(_0x364964(0xbc))/0x3*(parseInt(_0x364964(0xc5))/0x4)+-parseInt(_0x364964(0xc1))/0x5*(parseInt(_0x364964(0xd1))/0x6)+parseInt(_0x364964(0xcf))/0x7+-parseInt(_0x364964(0xbb))/0x8*(parseInt(_0x364964(0xc0))/0x9)+parseInt(_0x364964(0xc3))/0xa+parseInt(_0x364964(0xbf))/0xb*(parseInt(_0x364964(0xbd))/0xc);if(_0x21daad===_0x4924ae)break;else _0xbb4098['push'](_0xbb4098['shift']());}catch(_0x2d27e9){_0xbb4098['push'](_0xbb4098['shift']());}}}(a272_0x3a0a,0xd3203));function a272_0x3034(_0x33c38c,_0x597bc1){const _0x3a0aa4=a272_0x3a0a();return a272_0x3034=function(_0x3034b3,_0x53ce74){_0x3034b3=_0x3034b3-0xbb;let _0x4dab31=_0x3a0aa4[_0x3034b3];return _0x4dab31;},a272_0x3034(_0x33c38c,_0x597bc1);}function a272_0x3a0a(){const _0x10d566=['20464840ahshvw','14975649vdZiQF','5Svjmhp','__esModule','13500890lFuNAy','headers','4YPkEuc','75eqVuum','authorization','../models/Whatsapp','5806IyVrKZ','default','defineProperty','ERR_SESSION_EXPIRED','../errors/AppError','Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request','34790LPKXhZ','findOne','6636930dazNuc','8wHafle','1911339pUFSCl','12estWcL','token'];a272_0x3a0a=function(){return _0x10d566;};return a272_0x3a0a();}var __importDefault=this&&this['__importDefault']||function(_0x3f0427){const _0x3eeb3c=a272_0x3034;return _0x3f0427&&_0x3f0427[_0x3eeb3c(0xc2)]?_0x3f0427:{'default':_0x3f0427};};Object[a272_0x4f337a(0xcb)](exports,a272_0x4f337a(0xc2),{'value':!![]});const AppError_1=__importDefault(require(a272_0x4f337a(0xcd))),Whatsapp_1=__importDefault(require(a272_0x4f337a(0xc8))),isAuthApi=async(_0x19a46a,_0x3bfe59,_0x23b3ce)=>{const _0x30f1e5=a272_0x4f337a,_0x1c40c5=_0x19a46a[_0x30f1e5(0xc4)][_0x30f1e5(0xc7)];if(!_0x1c40c5)throw new AppError_1[(_0x30f1e5(0xca))](_0x30f1e5(0xcc),0x191);const [,_0x5e71e]=_0x1c40c5['split']('\x20');try{const _0x2dd1cb=await Whatsapp_1[_0x30f1e5(0xca)][_0x30f1e5(0xd0)]({'where':{'token':_0x5e71e}}),_0x5d021e=_0x2dd1cb?.[_0x30f1e5(0xbe)];if(!_0x5d021e)throw new AppError_1[(_0x30f1e5(0xca))]('ERR_SESSION_EXPIRED',0x191);if(_0x5d021e!==_0x5e71e)throw new AppError_1[(_0x30f1e5(0xca))](_0x30f1e5(0xcc),0x191);}catch(_0x21c410){throw new AppError_1[(_0x30f1e5(0xca))](_0x30f1e5(0xce),0x193);}return _0x23b3ce();};exports[a272_0x4f337a(0xca)]=isAuthApi;