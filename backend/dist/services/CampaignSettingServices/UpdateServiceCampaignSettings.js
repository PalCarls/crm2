'use strict';const a367_0x251242=a367_0x588b;function a367_0x588b(_0x410b5d,_0xd7572b){const _0x2926f1=a367_0x2926();return a367_0x588b=function(_0x588bcb,_0x28d7ef){_0x588bcb=_0x588bcb-0x108;let _0x319437=_0x2926f1[_0x588bcb];return _0x319437;},a367_0x588b(_0x410b5d,_0xd7572b);}function a367_0x2926(){const _0x22d433=['defineProperty','526285cZLEix','97810NkmCPY','__importDefault','__esModule','735gPBtQk','ERR_NO_CAMPAIGN_FOUND','56KAwJkF','2977284NmzzAg','322mVTfJB','3072992mwvIkg','3010419SzbrXW','update','267799rbeWTx','../../errors/AppError','default'];a367_0x2926=function(){return _0x22d433;};return a367_0x2926();}(function(_0x921dbc,_0x34fcc0){const _0x161ad6=a367_0x588b,_0x2e84a9=_0x921dbc();while(!![]){try{const _0x2a9b80=-parseInt(_0x161ad6(0x10b))/0x1+parseInt(_0x161ad6(0x113))/0x2*(parseInt(_0x161ad6(0x10f))/0x3)+-parseInt(_0x161ad6(0x111))/0x4*(-parseInt(_0x161ad6(0x10c))/0x5)+parseInt(_0x161ad6(0x112))/0x6+-parseInt(_0x161ad6(0x117))/0x7+parseInt(_0x161ad6(0x114))/0x8+-parseInt(_0x161ad6(0x115))/0x9;if(_0x2a9b80===_0x34fcc0)break;else _0x2e84a9['push'](_0x2e84a9['shift']());}catch(_0x43430e){_0x2e84a9['push'](_0x2e84a9['shift']());}}}(a367_0x2926,0x47eda));var __importDefault=this&&this[a367_0x251242(0x10d)]||function(_0xce59ec){const _0x2a89de=a367_0x251242;return _0xce59ec&&_0xce59ec[_0x2a89de(0x10e)]?_0xce59ec:{'default':_0xce59ec};};Object[a367_0x251242(0x10a)](exports,a367_0x251242(0x10e),{'value':!![]});const AppError_1=__importDefault(require(a367_0x251242(0x108))),CampaignSetting_1=__importDefault(require('../../models/CampaignSetting')),UpdateServiceCampaignSettings=async _0x473185=>{const _0x554765=a367_0x251242,{id:_0xa6ebef}=_0x473185,_0x158edb=await CampaignSetting_1['default']['findByPk'](_0xa6ebef);if(!_0x158edb)throw new AppError_1[(_0x554765(0x109))](_0x554765(0x110),0x194);return await _0x158edb[_0x554765(0x116)](_0x473185),_0x158edb;};exports[a367_0x251242(0x109)]=UpdateServiceCampaignSettings;