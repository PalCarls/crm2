'use strict';const a247_0x2e33cf=a247_0x54d7;function a247_0x54d7(_0x4e87af,_0x226835){const _0x2fd1f0=a247_0x2fd1();return a247_0x54d7=function(_0x54d7cd,_0x3c97e3){_0x54d7cd=_0x54d7cd-0x179;let _0x4b719f=_0x2fd1f0[_0x54d7cd];return _0x4b719f;},a247_0x54d7(_0x4e87af,_0x226835);}(function(_0x36bc6d,_0x43f3f2){const _0x5ceb2c=a247_0x54d7,_0x1aead5=_0x36bc6d();while(!![]){try{const _0x31f5d3=parseInt(_0x5ceb2c(0x18b))/0x1+-parseInt(_0x5ceb2c(0x182))/0x2*(-parseInt(_0x5ceb2c(0x17c))/0x3)+-parseInt(_0x5ceb2c(0x17b))/0x4+parseInt(_0x5ceb2c(0x185))/0x5*(parseInt(_0x5ceb2c(0x17a))/0x6)+parseInt(_0x5ceb2c(0x186))/0x7*(-parseInt(_0x5ceb2c(0x17e))/0x8)+parseInt(_0x5ceb2c(0x17f))/0x9+parseInt(_0x5ceb2c(0x181))/0xa;if(_0x31f5d3===_0x43f3f2)break;else _0x1aead5['push'](_0x1aead5['shift']());}catch(_0x1d4976){_0x1aead5['push'](_0x1aead5['shift']());}}}(a247_0x2fd1,0x25d75));var __importDefault=this&&this[a247_0x2e33cf(0x17d)]||function(_0x273f51){const _0x5e219c=a247_0x2e33cf;return _0x273f51&&_0x273f51[_0x5e219c(0x18c)]?_0x273f51:{'default':_0x273f51};};function a247_0x2fd1(){const _0x579175=['600rjfjxE','__importDefault','24YvaWgd','1927926IYQDPr','../models/Whatsapp','478820BjZpFp','30PDuxCb','split','token','2535zaIROj','488887SgutAF','Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request','findOne','authorization','ERR_SESSION_EXPIRED','306126vGNPRX','__esModule','headers','default','510IaFxiP','999188HvORUU'];a247_0x2fd1=function(){return _0x579175;};return a247_0x2fd1();}Object['defineProperty'](exports,a247_0x2e33cf(0x18c),{'value':!![]});const AppError_1=__importDefault(require('../errors/AppError')),Whatsapp_1=__importDefault(require(a247_0x2e33cf(0x180))),isAuthApi=async(_0x38882e,_0x5a7b51,_0x563b3b)=>{const _0x467bd1=a247_0x2e33cf,_0x5abc68=_0x38882e[_0x467bd1(0x18d)][_0x467bd1(0x189)];if(!_0x5abc68)throw new AppError_1[(_0x467bd1(0x179))](_0x467bd1(0x18a),0x191);const [,_0x35aa8d]=_0x5abc68[_0x467bd1(0x183)]('\x20');try{const _0x5b12ce=await Whatsapp_1[_0x467bd1(0x179)][_0x467bd1(0x188)]({'where':{'token':_0x35aa8d}}),_0x519095=_0x5b12ce?.[_0x467bd1(0x184)];if(!_0x519095)throw new AppError_1['default'](_0x467bd1(0x18a),0x191);if(_0x519095!==_0x35aa8d)throw new AppError_1[(_0x467bd1(0x179))](_0x467bd1(0x18a),0x191);}catch(_0xe5f365){throw new AppError_1[(_0x467bd1(0x179))](_0x467bd1(0x187),0x193);}return _0x563b3b();};exports[a247_0x2e33cf(0x179)]=isAuthApi;