'use strict';const a548_0x5dc99f=a548_0x46f5;(function(_0x38d682,_0x446c4c){const _0xb979c7=a548_0x46f5,_0xda7f92=_0x38d682();while(!![]){try{const _0xb426f9=-parseInt(_0xb979c7(0x181))/0x1+-parseInt(_0xb979c7(0x16c))/0x2*(-parseInt(_0xb979c7(0x16e))/0x3)+parseInt(_0xb979c7(0x183))/0x4*(parseInt(_0xb979c7(0x182))/0x5)+parseInt(_0xb979c7(0x174))/0x6+parseInt(_0xb979c7(0x163))/0x7+parseInt(_0xb979c7(0x17c))/0x8+-parseInt(_0xb979c7(0x17d))/0x9;if(_0xb426f9===_0x446c4c)break;else _0xda7f92['push'](_0xda7f92['shift']());}catch(_0x4f4c21){_0xda7f92['push'](_0xda7f92['shift']());}}}(a548_0x635d,0x52ec2));function a548_0x46f5(_0x270a10,_0xcb5c3a){const _0x635d0c=a548_0x635d();return a548_0x46f5=function(_0x46f56e,_0x6a503d){_0x46f56e=_0x46f56e-0x15f;let _0x19f47d=_0x635d0c[_0x46f56e];return _0x19f47d;},a548_0x46f5(_0x270a10,_0xcb5c3a);}var __importDefault=this&&this[a548_0x5dc99f(0x17e)]||function(_0xe1e730){const _0x147cba=a548_0x5dc99f;return _0xe1e730&&_0xe1e730[_0x147cba(0x164)]?_0xe1e730:{'default':_0xe1e730};};Object[a548_0x5dc99f(0x160)](exports,a548_0x5dc99f(0x164),{'value':!![]});const baileys_1=require('@whiskeysockets/baileys'),AppError_1=__importDefault(require(a548_0x5dc99f(0x169))),GetTicketWbot_1=__importDefault(require(a548_0x5dc99f(0x170))),Mustache_1=__importDefault(require(a548_0x5dc99f(0x175))),Contact_1=__importDefault(require(a548_0x5dc99f(0x168))),path_1=__importDefault(require(a548_0x5dc99f(0x184))),fs_1=__importDefault(require('fs'));function a548_0x635d(){const _0x58789a=['2195FNMVJu','4364IFSEna','path','resolve','defineProperty','contactId','number','4535153FHsQFo','__esModule','ERR_SENDING_WAPP_MSG','floor','remoteJid','../../models/Contact','../../errors/AppError','companyId','charAt','82PLWPlt','public','46653AsJpiM','available','../../helpers/GetTicketWbot','default','random','unavailable','2278350wpefrb','../../helpers/Mustache','sendPresenceUpdate','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','image/jpeg','isGroup','g.us','s.whatsapp.net','4540208ftlMXi','21300849FkVflf','__importDefault','/company','delay','5259UDveoR'];a548_0x635d=function(){return _0x58789a;};return a548_0x635d();}function makeid(_0x5ac774){const _0x5e6f65=a548_0x5dc99f;var _0x23f797='',_0x525c73=_0x5e6f65(0x177),_0xde30a9=_0x525c73['length'];for(var _0xafa973=0x0;_0xafa973<_0x5ac774;_0xafa973++){_0x23f797+=_0x525c73[_0x5e6f65(0x16b)](Math[_0x5e6f65(0x166)](Math[_0x5e6f65(0x172)]()*_0xde30a9));}return _0x23f797;}const publicFolder=path_1[a548_0x5dc99f(0x171)][a548_0x5dc99f(0x15f)](__dirname,'..','..','..',a548_0x5dc99f(0x16d)),SendWhatsAppMediaImage=async({ticket:_0xfee38a,url:_0x58e4bf,caption:_0x3d22de,msdelay:_0x4cd059})=>{const _0x4ee845=a548_0x5dc99f,_0x3be394=await(0x0,GetTicketWbot_1['default'])(_0xfee38a),_0x3a744a=await Contact_1[_0x4ee845(0x171)]['findByPk'](_0xfee38a[_0x4ee845(0x161)]);let _0x155f85;_0x3a744a[_0x4ee845(0x167)]&&_0x3a744a[_0x4ee845(0x167)]!==''&&_0x3a744a[_0x4ee845(0x167)]['includes']('@')?_0x155f85=_0x3a744a[_0x4ee845(0x167)]:_0x155f85=_0x3a744a[_0x4ee845(0x162)]+'@'+(_0xfee38a[_0x4ee845(0x179)]?_0x4ee845(0x17a):_0x4ee845(0x17b));try{_0x3be394[_0x4ee845(0x176)](_0x4ee845(0x16f)),await(0x0,baileys_1[_0x4ee845(0x180)])(_0x4cd059);const _0x3a732a=await _0x3be394['sendMessage'](''+_0x155f85,{'image':_0x58e4bf?{'url':_0x58e4bf}:fs_1['default']['readFileSync'](publicFolder+_0x4ee845(0x17f)+_0xfee38a[_0x4ee845(0x16a)]+'/'+_0x3d22de+'-'+makeid(0x5)+'.png'),'caption':(0x0,Mustache_1[_0x4ee845(0x171)])(''+_0x3d22de,_0xfee38a),'mimetype':_0x4ee845(0x178)});return _0x3be394[_0x4ee845(0x176)](_0x4ee845(0x173)),_0x3a732a;}catch(_0x577063){throw new AppError_1['default'](_0x4ee845(0x165));}};exports[a548_0x5dc99f(0x171)]=SendWhatsAppMediaImage;