'use strict';function a431_0x1656(){const _0x4c93cf=['contact.number','97282BSuXxB','12pgwjtS','exec','includes','findByPk','762031PSLBjy','isInteger','@s.whatsapp.net','__importDefault','5759652RLmmvs','8288128ipbFCu','../../libs/wbot','Não\x20consegui\x20bloquear\x20o\x20contato','log','getWbot','parseInt','unblock','534185GPKcne','__esModule','block','../../errors/AppError','number','@g.us','test','1398387jgRDNF','347543zwlzZl','update','../../helpers/GetDefaultWhatsApp','defineProperty','default','updateBlockStatus'];a431_0x1656=function(){return _0x4c93cf;};return a431_0x1656();}const a431_0x241e6c=a431_0xdf4c;(function(_0x2eb703,_0xde4de3){const _0x26de05=a431_0xdf4c,_0x28cba5=_0x2eb703();while(!![]){try{const _0x3e1304=parseInt(_0x26de05(0x91))/0x1+-parseInt(_0x26de05(0x8c))/0x2+-parseInt(_0x26de05(0x84))/0x3+-parseInt(_0x26de05(0x8d))/0x4*(-parseInt(_0x26de05(0x7d))/0x5)+parseInt(_0x26de05(0x95))/0x6+parseInt(_0x26de05(0x85))/0x7+-parseInt(_0x26de05(0x96))/0x8;if(_0x3e1304===_0xde4de3)break;else _0x28cba5['push'](_0x28cba5['shift']());}catch(_0x5ee9ab){_0x28cba5['push'](_0x28cba5['shift']());}}}(a431_0x1656,0x842a3));function a431_0xdf4c(_0x149d8e,_0x998177){const _0x165653=a431_0x1656();return a431_0xdf4c=function(_0xdf4cae,_0x1084fe){_0xdf4cae=_0xdf4cae-0x7b;let _0x4adee8=_0x165653[_0xdf4cae];return _0x4adee8;},a431_0xdf4c(_0x149d8e,_0x998177);}var __importDefault=this&&this[a431_0x241e6c(0x94)]||function(_0x32bb7c){const _0x1d3cb5=a431_0x241e6c;return _0x32bb7c&&_0x32bb7c[_0x1d3cb5(0x7e)]?_0x32bb7c:{'default':_0x32bb7c};};Object[a431_0x241e6c(0x88)](exports,'__esModule',{'value':!![]});const AppError_1=__importDefault(require(a431_0x241e6c(0x80))),GetDefaultWhatsApp_1=__importDefault(require(a431_0x241e6c(0x87))),wbot_1=require(a431_0x241e6c(0x97)),Contact_1=__importDefault(require('../../models/Contact'));function formatBRNumber(_0x446b55){const _0x28c438=a431_0x241e6c,_0x439f5c=new RegExp(/^(\d{2})(\d{2})\d{1}(\d{8})$/);if(_0x439f5c[_0x28c438(0x83)](_0x446b55)){const _0x427031=_0x439f5c[_0x28c438(0x8e)](_0x446b55);if(_0x427031&&_0x427031[0x1]==='55'&&Number[_0x28c438(0x92)](Number[_0x28c438(0x7b)](_0x427031[0x2]))){const _0x5a3f5c=Number[_0x28c438(0x7b)](_0x427031[0x2]);if(_0x5a3f5c<0x1f)return _0x427031[0x0];else{if(_0x5a3f5c>=0x1f)return _0x427031[0x1]+_0x427031[0x2]+_0x427031[0x3];}}}else return _0x446b55;}function createJid(_0x4f105a){const _0x2367ef=a431_0x241e6c;if(_0x4f105a[_0x2367ef(0x8f)](_0x2367ef(0x82))||_0x4f105a['includes'](_0x2367ef(0x93)))return formatBRNumber(_0x4f105a);return _0x4f105a[_0x2367ef(0x8f)]('-')?_0x4f105a+'@g.us':formatBRNumber(_0x4f105a)+'@s.whatsapp.net';}const BlockUnblockContactService=async({contactId:_0x18e44a,companyId:_0x4f5abb,active:_0x2d85d9})=>{const _0x59d54c=a431_0x241e6c,_0x4ccee7=await Contact_1['default'][_0x59d54c(0x90)](_0x18e44a);if(!_0x4ccee7)throw new AppError_1[(_0x59d54c(0x89))]('ERR_NO_CONTACT_FOUND',0x194);console[_0x59d54c(0x99)]('active',_0x2d85d9),console[_0x59d54c(0x99)]('companyId',_0x4f5abb),console[_0x59d54c(0x99)](_0x59d54c(0x8b),_0x4ccee7[_0x59d54c(0x81)]);if(_0x2d85d9)try{const _0x27d6fd=await(0x0,GetDefaultWhatsApp_1[_0x59d54c(0x89)])(Number(_0x4f5abb)),_0x8c4a50=(0x0,wbot_1[_0x59d54c(0x9a)])(_0x27d6fd['id']),_0x395bdc=createJid(_0x4ccee7['number']);await _0x8c4a50[_0x59d54c(0x8a)](_0x395bdc,_0x59d54c(0x7c)),await _0x4ccee7[_0x59d54c(0x86)]({'active':!![]});}catch(_0x344912){console[_0x59d54c(0x99)]('Não\x20consegui\x20desbloquear\x20o\x20contato');}if(!_0x2d85d9)try{const _0x21788d=await(0x0,GetDefaultWhatsApp_1[_0x59d54c(0x89)])(Number(_0x4f5abb)),_0x1e7640=(0x0,wbot_1[_0x59d54c(0x9a)])(_0x21788d['id']),_0x329438=createJid(_0x4ccee7['number']);await _0x1e7640['updateBlockStatus'](_0x329438,_0x59d54c(0x7f)),await _0x4ccee7[_0x59d54c(0x86)]({'active':![]});}catch(_0x5299fb){console[_0x59d54c(0x99)](_0x59d54c(0x98));}return _0x4ccee7;};exports['default']=BlockUnblockContactService;