'use strict';const a262_0xbe30ca=a262_0xd0fd;(function(_0x4a8bdf,_0x3089e4){const _0x41fa70=a262_0xd0fd,_0x9ae542=_0x4a8bdf();while(!![]){try{const _0x1eb564=parseInt(_0x41fa70(0x166))/0x1+parseInt(_0x41fa70(0x16c))/0x2*(parseInt(_0x41fa70(0x15c))/0x3)+parseInt(_0x41fa70(0x15d))/0x4*(-parseInt(_0x41fa70(0x167))/0x5)+parseInt(_0x41fa70(0x164))/0x6*(parseInt(_0x41fa70(0x165))/0x7)+-parseInt(_0x41fa70(0x16b))/0x8+-parseInt(_0x41fa70(0x16f))/0x9+parseInt(_0x41fa70(0x15f))/0xa;if(_0x1eb564===_0x3089e4)break;else _0x9ae542['push'](_0x9ae542['shift']());}catch(_0x1243f9){_0x9ae542['push'](_0x9ae542['shift']());}}}(a262_0x5085,0x6ff0d));var __importDefault=this&&this['__importDefault']||function(_0x8140c8){const _0x3a927f=a262_0xd0fd;return _0x8140c8&&_0x8140c8[_0x3a927f(0x16e)]?_0x8140c8:{'default':_0x8140c8};};function a262_0xd0fd(_0xe01deb,_0x37b891){const _0x5085a2=a262_0x5085();return a262_0xd0fd=function(_0xd0fd74,_0xae0cc6){_0xd0fd74=_0xd0fd74-0x15b;let _0x496db9=_0x5085a2[_0xd0fd74];return _0x496db9;},a262_0xd0fd(_0xe01deb,_0x37b891);}Object[a262_0xbe30ca(0x15b)](exports,'__esModule',{'value':!![]});function a262_0x5085(){const _0x58bb4f=['20REEPSb','authorization','8362740RuwNRb','default','token','split','findOne','1669902VwwxtS','14XUjmzS','487273WCQPIf','912465lFXtnD','../models/Whatsapp','headers','ERR_SESSION_EXPIRED','5737312hBqIVa','44866hcfJVa','../errors/AppError','__esModule','1156842ebcVRh','defineProperty','45rcSRIP'];a262_0x5085=function(){return _0x58bb4f;};return a262_0x5085();}const AppError_1=__importDefault(require(a262_0xbe30ca(0x16d))),Whatsapp_1=__importDefault(require(a262_0xbe30ca(0x168))),isAuthApi=async(_0x15042c,_0x1b3b35,_0x52fdcb)=>{const _0x1cc4bb=a262_0xbe30ca,_0x526a29=_0x15042c[_0x1cc4bb(0x169)][_0x1cc4bb(0x15e)];if(!_0x526a29)throw new AppError_1[(_0x1cc4bb(0x160))]('ERR_SESSION_EXPIRED',0x191);const [,_0x7645de]=_0x526a29[_0x1cc4bb(0x162)]('\x20');try{const _0x487e41=await Whatsapp_1[_0x1cc4bb(0x160)][_0x1cc4bb(0x163)]({'where':{'token':_0x7645de}}),_0x4e18d5=_0x487e41?.[_0x1cc4bb(0x161)];if(!_0x4e18d5)throw new AppError_1['default'](_0x1cc4bb(0x16a),0x191);if(_0x4e18d5!==_0x7645de)throw new AppError_1[(_0x1cc4bb(0x160))](_0x1cc4bb(0x16a),0x191);}catch(_0x3fcd40){throw new AppError_1[(_0x1cc4bb(0x160))]('Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request',0x193);}return _0x52fdcb();};exports[a262_0xbe30ca(0x160)]=isAuthApi;