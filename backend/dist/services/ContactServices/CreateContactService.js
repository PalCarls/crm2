'use strict';const a412_0x51a157=a412_0x4aa3;(function(_0x352d3b,_0x371c91){const _0xa993e9=a412_0x4aa3,_0x4fcc62=_0x352d3b();while(!![]){try{const _0x116535=parseInt(_0xa993e9(0x79))/0x1+-parseInt(_0xa993e9(0x7b))/0x2+-parseInt(_0xa993e9(0x6e))/0x3+-parseInt(_0xa993e9(0x6b))/0x4+parseInt(_0xa993e9(0x71))/0x5+parseInt(_0xa993e9(0x7c))/0x6+-parseInt(_0xa993e9(0x75))/0x7*(-parseInt(_0xa993e9(0x7a))/0x8);if(_0x116535===_0x371c91)break;else _0x4fcc62['push'](_0x4fcc62['shift']());}catch(_0x51d748){_0x4fcc62['push'](_0x4fcc62['shift']());}}}(a412_0x5451,0xf09e6));var __importDefault=this&&this[a412_0x51a157(0x77)]||function(_0x10e907){const _0x1a71a9=a412_0x51a157;return _0x10e907&&_0x10e907[_0x1a71a9(0x6d)]?_0x10e907:{'default':_0x10e907};};function a412_0x5451(){const _0x52c4b2=['../../helpers/CheckSettings','acceptAudioMessageContact','7486975XEcncG','create','../../models/Contact','extraInfo','222103aHwoXc','ERR_DUPLICATED_CONTACT','__importDefault','default','1301752YWCsgj','48zRftqa','1621284azFXIF','9951096algtpO','defineProperty','6240556FgUQAM','findOne','__esModule','3875046PUSOIt'];a412_0x5451=function(){return _0x52c4b2;};return a412_0x5451();}Object[a412_0x51a157(0x6a)](exports,a412_0x51a157(0x6d),{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),CheckSettings_1=__importDefault(require(a412_0x51a157(0x6f))),Contact_1=__importDefault(require(a412_0x51a157(0x73))),CreateContactService=async({name:_0x42b84c,number:_0x1a0e94,email:email='',acceptAudioMessage:_0x2e9d75,active:_0x3a89d0,companyId:_0x5cde05,extraInfo:extraInfo=[],remoteJid:remoteJid=''})=>{const _0x446aec=a412_0x51a157,_0x409e07=await Contact_1[_0x446aec(0x78)][_0x446aec(0x6c)]({'where':{'number':_0x1a0e94,'companyId':_0x5cde05}});if(_0x409e07)throw new AppError_1[(_0x446aec(0x78))](_0x446aec(0x76));const _0x51def0=await(0x0,CheckSettings_1[_0x446aec(0x78)])(_0x446aec(0x70)),_0x517707=await Contact_1[_0x446aec(0x78)][_0x446aec(0x72)]({'name':_0x42b84c,'number':_0x1a0e94,'email':email,'acceptAudioMessage':_0x51def0==='enabled'?!![]:![],'active':_0x3a89d0,'extraInfo':extraInfo,'companyId':_0x5cde05,'remoteJid':remoteJid},{'include':[_0x446aec(0x74)]});return _0x517707;};function a412_0x4aa3(_0x549e21,_0x73eca4){const _0x54511d=a412_0x5451();return a412_0x4aa3=function(_0x4aa3c9,_0x41fbc6){_0x4aa3c9=_0x4aa3c9-0x6a;let _0x267b08=_0x54511d[_0x4aa3c9];return _0x267b08;},a412_0x4aa3(_0x549e21,_0x73eca4);}exports[a412_0x51a157(0x78)]=CreateContactService;