'use strict';const a448_0x5a4d3b=a448_0x2a12;function a448_0x2a12(_0x39a63e,_0x138792){const _0x3e7176=a448_0x3e71();return a448_0x2a12=function(_0x2a12aa,_0x5b77ec){_0x2a12aa=_0x2a12aa-0x1d7;let _0x5926d8=_0x3e7176[_0x2a12aa];return _0x5926d8;},a448_0x2a12(_0x39a63e,_0x138792);}(function(_0x57957f,_0x1f4b3b){const _0x31350d=a448_0x2a12,_0x4797c1=_0x57957f();while(!![]){try{const _0x58125b=-parseInt(_0x31350d(0x1dc))/0x1*(-parseInt(_0x31350d(0x1e0))/0x2)+parseInt(_0x31350d(0x1e8))/0x3+-parseInt(_0x31350d(0x1e9))/0x4+parseInt(_0x31350d(0x1df))/0x5+-parseInt(_0x31350d(0x1dd))/0x6+-parseInt(_0x31350d(0x1e7))/0x7*(parseInt(_0x31350d(0x1d8))/0x8)+-parseInt(_0x31350d(0x1d7))/0x9*(parseInt(_0x31350d(0x1d9))/0xa);if(_0x58125b===_0x1f4b3b)break;else _0x4797c1['push'](_0x4797c1['shift']());}catch(_0x38d898){_0x4797c1['push'](_0x4797c1['shift']());}}}(a448_0x3e71,0xa29df));function a448_0x3e71(){const _0x13bf9b=['428914fWujqY','log','__importDefault','default','../../errors/AppError','ERR_SENDING_FACEBOOK_MSG','__esModule','1603707OxoXvR','96102PxVOFW','1814108QyBSHq','4041nNeyUD','8zgumHY','2920mGRhJS','./graphAPI','defineProperty','2bOrHGN','486702KvjxLS','facebookUserToken','5499920hnOMJc'];a448_0x3e71=function(){return _0x13bf9b;};return a448_0x3e71();}var __importDefault=this&&this[a448_0x5a4d3b(0x1e2)]||function(_0x5e2f1c){const _0x3c5ce3=a448_0x5a4d3b;return _0x5e2f1c&&_0x5e2f1c[_0x3c5ce3(0x1e6)]?_0x5e2f1c:{'default':_0x5e2f1c};};Object[a448_0x5a4d3b(0x1db)](exports,a448_0x5a4d3b(0x1e6),{'value':!![]});const AppError_1=__importDefault(require(a448_0x5a4d3b(0x1e4))),graphAPI_1=require(a448_0x5a4d3b(0x1da)),Mustache_1=__importDefault(require('../../helpers/Mustache')),SendWhatsAppMessage=async({body:_0x2c35f5,ticket:_0x32f637})=>{const _0x29a68d=a448_0x5a4d3b,{number:_0x381301}=_0x32f637['contact'];try{const _0x449d9a=await(0x0,graphAPI_1['sendText'])(_0x381301,(0x0,Mustache_1[_0x29a68d(0x1e3)])(_0x2c35f5,_0x32f637),_0x32f637['whatsapp'][_0x29a68d(0x1de)]);await _0x32f637['update']({'lastMessage':_0x2c35f5});}catch(_0x4ff0a1){console[_0x29a68d(0x1e1)](_0x4ff0a1);throw new AppError_1[(_0x29a68d(0x1e3))](_0x29a68d(0x1e5));}};exports['default']=SendWhatsAppMessage;