'use strict';const a417_0x38c8a9=a417_0x3e9b;(function(_0x2dea40,_0xa67fcc){const _0x294ddb=a417_0x3e9b,_0x237c1d=_0x2dea40();while(!![]){try{const _0x15234c=-parseInt(_0x294ddb(0xe1))/0x1*(-parseInt(_0x294ddb(0xe4))/0x2)+-parseInt(_0x294ddb(0xda))/0x3+-parseInt(_0x294ddb(0xe6))/0x4+parseInt(_0x294ddb(0xec))/0x5+parseInt(_0x294ddb(0xd8))/0x6*(parseInt(_0x294ddb(0xe7))/0x7)+parseInt(_0x294ddb(0xe8))/0x8+-parseInt(_0x294ddb(0xde))/0x9;if(_0x15234c===_0xa67fcc)break;else _0x237c1d['push'](_0x237c1d['shift']());}catch(_0x1e9e37){_0x237c1d['push'](_0x237c1d['shift']());}}}(a417_0x1a1e,0xb8c4b));var __importDefault=this&&this[a417_0x38c8a9(0xdd)]||function(_0x2ab960){const _0x97b0e8=a417_0x38c8a9;return _0x2ab960&&_0x2ab960[_0x97b0e8(0xea)]?_0x2ab960:{'default':_0x2ab960};};function a417_0x3e9b(_0x1bd4bf,_0x3ffdbb){const _0x1a1e59=a417_0x1a1e();return a417_0x3e9b=function(_0x3e9bec,_0x3a80d8){_0x3e9bec=_0x3e9bec-0xd8;let _0x52969f=_0x1a1e59[_0x3e9bec];return _0x52969f;},a417_0x3e9b(_0x1bd4bf,_0x3ffdbb);}function a417_0x1a1e(){const _0x41f5d6=['contact','1323399mWHtEm','sendText','whatsapp','__importDefault','9233973zbtOTa','update','../../errors/AppError','1gqWIKh','../../helpers/Mustache','facebookUserToken','2731672QEkDdp','log','5102888ajgnwP','7HwXqia','2151816oQhkHv','ERR_SENDING_FACEBOOK_MSG','__esModule','defineProperty','7198080wKllNB','default','2551404hSUrZf'];a417_0x1a1e=function(){return _0x41f5d6;};return a417_0x1a1e();}Object[a417_0x38c8a9(0xeb)](exports,a417_0x38c8a9(0xea),{'value':!![]});const AppError_1=__importDefault(require(a417_0x38c8a9(0xe0))),graphAPI_1=require('./graphAPI'),Mustache_1=__importDefault(require(a417_0x38c8a9(0xe2))),SendWhatsAppMessage=async({body:_0x26c6a3,ticket:_0x4764c6})=>{const _0x319e67=a417_0x38c8a9,{number:_0x3ef072}=_0x4764c6[_0x319e67(0xd9)];try{const _0x4d7885=await(0x0,graphAPI_1[_0x319e67(0xdb)])(_0x3ef072,(0x0,Mustache_1['default'])(_0x26c6a3,_0x4764c6),_0x4764c6[_0x319e67(0xdc)][_0x319e67(0xe3)]);await _0x4764c6[_0x319e67(0xdf)]({'lastMessage':_0x26c6a3});}catch(_0x3715f6){console[_0x319e67(0xe5)](_0x3715f6);throw new AppError_1[(_0x319e67(0xed))](_0x319e67(0xe9));}};exports[a417_0x38c8a9(0xed)]=SendWhatsAppMessage;