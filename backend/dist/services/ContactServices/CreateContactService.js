'use strict';const a382_0x3a04c7=a382_0x4be9;function a382_0x4be9(_0x3bcbe2,_0x472ac3){const _0x3dd942=a382_0x3dd9();return a382_0x4be9=function(_0x4be9ec,_0x12cbee){_0x4be9ec=_0x4be9ec-0x145;let _0x178360=_0x3dd942[_0x4be9ec];return _0x178360;},a382_0x4be9(_0x3bcbe2,_0x472ac3);}(function(_0x1ad6db,_0x295b3a){const _0x4e811d=a382_0x4be9,_0x2fce60=_0x1ad6db();while(!![]){try{const _0x2da963=-parseInt(_0x4e811d(0x14c))/0x1*(parseInt(_0x4e811d(0x14e))/0x2)+-parseInt(_0x4e811d(0x152))/0x3*(-parseInt(_0x4e811d(0x14a))/0x4)+-parseInt(_0x4e811d(0x14b))/0x5+parseInt(_0x4e811d(0x154))/0x6+parseInt(_0x4e811d(0x156))/0x7*(-parseInt(_0x4e811d(0x145))/0x8)+parseInt(_0x4e811d(0x14f))/0x9+-parseInt(_0x4e811d(0x153))/0xa;if(_0x2da963===_0x295b3a)break;else _0x2fce60['push'](_0x2fce60['shift']());}catch(_0x39b28f){_0x2fce60['push'](_0x2fce60['shift']());}}}(a382_0x3dd9,0x2bad5));var __importDefault=this&&this[a382_0x3a04c7(0x147)]||function(_0x27aad6){const _0xd27c5c=a382_0x3a04c7;return _0x27aad6&&_0x27aad6[_0xd27c5c(0x149)]?_0x27aad6:{'default':_0x27aad6};};Object[a382_0x3a04c7(0x155)](exports,a382_0x3a04c7(0x149),{'value':!![]});const AppError_1=__importDefault(require(a382_0x3a04c7(0x146))),CheckSettings_1=__importDefault(require('../../helpers/CheckSettings')),Contact_1=__importDefault(require('../../models/Contact')),CreateContactService=async({name:_0x4de1cd,number:_0x4a5b62,email:email='',acceptAudioMessage:_0x31b866,active:_0x3b77b3,companyId:_0x220ed1,extraInfo:extraInfo=[],remoteJid:remoteJid=''})=>{const _0x4f8ca8=a382_0x3a04c7,_0x5efe2b=await Contact_1[_0x4f8ca8(0x150)]['findOne']({'where':{'number':_0x4a5b62,'companyId':_0x220ed1}});if(_0x5efe2b)throw new AppError_1[(_0x4f8ca8(0x150))](_0x4f8ca8(0x148));const _0x6307d9=await(0x0,CheckSettings_1[_0x4f8ca8(0x150)])('acceptAudioMessageContact'),_0x1c85dd=await Contact_1[_0x4f8ca8(0x150)][_0x4f8ca8(0x14d)]({'name':_0x4de1cd,'number':_0x4a5b62,'email':email,'acceptAudioMessage':_0x6307d9===_0x4f8ca8(0x151)?!![]:![],'active':_0x3b77b3,'extraInfo':extraInfo,'companyId':_0x220ed1,'remoteJid':remoteJid},{'include':['extraInfo']});return _0x1c85dd;};function a382_0x3dd9(){const _0xcf757e=['default','enabled','3LQuNWg','1171780BVNBXg','1206594pHEtUz','defineProperty','21FaYhkb','27344XhBUfM','../../errors/AppError','__importDefault','ERR_DUPLICATED_CONTACT','__esModule','639996QsnCdh','300280xrnanc','10XNYCKr','create','522DfpRIV','71109TfWrSL'];a382_0x3dd9=function(){return _0xcf757e;};return a382_0x3dd9();}exports[a382_0x3a04c7(0x150)]=CreateContactService;