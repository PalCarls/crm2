'use strict';const a556_0x47e428=a556_0x1aba;(function(_0xe2b7fb,_0x3c36db){const _0x117cd5=a556_0x1aba,_0x588be5=_0xe2b7fb();while(!![]){try{const _0xe4731c=parseInt(_0x117cd5(0x92))/0x1*(parseInt(_0x117cd5(0x93))/0x2)+parseInt(_0x117cd5(0x8c))/0x3+-parseInt(_0x117cd5(0x94))/0x4+parseInt(_0x117cd5(0x81))/0x5+parseInt(_0x117cd5(0x87))/0x6+-parseInt(_0x117cd5(0x90))/0x7*(-parseInt(_0x117cd5(0x7b))/0x8)+-parseInt(_0x117cd5(0x7d))/0x9;if(_0xe4731c===_0x3c36db)break;else _0x588be5['push'](_0x588be5['shift']());}catch(_0x5c6b72){_0x588be5['push'](_0x588be5['shift']());}}}(a556_0x4b71,0xe1f14));var __importDefault=this&&this[a556_0x47e428(0x85)]||function(_0x239b28){return _0x239b28&&_0x239b28['__esModule']?_0x239b28:{'default':_0x239b28};};function a556_0x1aba(_0x2fa572,_0x50f7c3){const _0x4b717c=a556_0x4b71();return a556_0x1aba=function(_0x1aba44,_0x1fef48){_0x1aba44=_0x1aba44-0x7a;let _0x2b7ad7=_0x4b717c[_0x1aba44];return _0x2b7ad7;},a556_0x1aba(_0x2fa572,_0x50f7c3);}Object['defineProperty'](exports,a556_0x47e428(0x83),{'value':!![]});const AppError_1=__importDefault(require(a556_0x47e428(0x7f))),GetTicketWbot_1=__importDefault(require(a556_0x47e428(0x84))),GetWbotMessage_1=__importDefault(require(a556_0x47e428(0x88))),Message_1=__importDefault(require(a556_0x47e428(0x7c))),Ticket_1=__importDefault(require('../../models/Ticket')),DeleteWhatsAppMessage=async _0x29f6f9=>{const _0xdef165=a556_0x47e428,_0x4357a0=await Message_1['default'][_0xdef165(0x82)]({'where':{'id':_0x29f6f9},'include':[{'model':Ticket_1[_0xdef165(0x91)],'as':_0xdef165(0x8b),'include':[_0xdef165(0x89)]}]});if(!_0x4357a0)throw new AppError_1[(_0xdef165(0x91))](_0xdef165(0x80));const {ticket:_0x35f42e}=_0x4357a0;if(!_0x4357a0['isPrivate']){const _0x49d0db=await(0x0,GetWbotMessage_1['default'])(_0x35f42e,_0x29f6f9);try{const _0x405813=await(0x0,GetTicketWbot_1[_0xdef165(0x91)])(_0x35f42e),_0x876320=_0x49d0db,_0x99cf88=JSON['parse'](_0x876320[_0xdef165(0x8a)]);await _0x405813['sendMessage'](_0x876320[_0xdef165(0x7a)],{'delete':_0x99cf88[_0xdef165(0x8e)]});}catch(_0x447350){console[_0xdef165(0x86)](_0x447350);throw new AppError_1[(_0xdef165(0x91))](_0xdef165(0x8d));}}return!_0x4357a0[_0xdef165(0x7e)]&&await _0x4357a0[_0xdef165(0x8f)]({'isDeleted':!![]}),_0x4357a0;};exports[a556_0x47e428(0x91)]=DeleteWhatsAppMessage;function a556_0x4b71(){const _0x220796=['log','1975644PqcjYC','../../helpers/GetWbotMessage','contact','dataJson','ticket','3844278tnhVRN','ERR_DELETE_WAPP_MSG','key','update','574DXItqb','default','700859wyQAeM','2zvgJID','1868476marGVB','remoteJid','45104PrScCO','../../models/Message','26658270Sbqhtp','isPrivate','../../errors/AppError','No\x20message\x20found\x20with\x20this\x20ID.','7903670WnAygA','findOne','__esModule','../../helpers/GetTicketWbot','__importDefault'];a556_0x4b71=function(){return _0x220796;};return a556_0x4b71();}