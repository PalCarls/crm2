'use strict';const a402_0x394e0d=a402_0xf8c2;(function(_0x460219,_0x1f32f3){const _0xd3363e=a402_0xf8c2,_0x2cee35=_0x460219();while(!![]){try{const _0x556374=-parseInt(_0xd3363e(0xfb))/0x1+-parseInt(_0xd3363e(0xf5))/0x2+parseInt(_0xd3363e(0xfe))/0x3*(parseInt(_0xd3363e(0xfa))/0x4)+parseInt(_0xd3363e(0xef))/0x5+parseInt(_0xd3363e(0xf1))/0x6+parseInt(_0xd3363e(0xf9))/0x7+parseInt(_0xd3363e(0xf8))/0x8*(-parseInt(_0xd3363e(0xf3))/0x9);if(_0x556374===_0x1f32f3)break;else _0x2cee35['push'](_0x2cee35['shift']());}catch(_0x524868){_0x2cee35['push'](_0x2cee35['shift']());}}}(a402_0xdcfc,0xd6e1e));var __importDefault=this&&this[a402_0x394e0d(0xf6)]||function(_0x4e9ec5){const _0x5e0a4a=a402_0x394e0d;return _0x4e9ec5&&_0x4e9ec5[_0x5e0a4a(0xfc)]?_0x4e9ec5:{'default':_0x4e9ec5};};function a402_0xdcfc(){const _0x46ad8b=['refreshSecret','48gIqkYg','10389897tGkBav','40ipPTJC','527870hsRTCT','__esModule','jsonwebtoken','382125DvDVnt','1619300hlnAWc','../../config/auth','4744368USLRIv','default','1551699DXxtlC','verify','2860230bpVaeY','__importDefault'];a402_0xdcfc=function(){return _0x46ad8b;};return a402_0xdcfc();}Object['defineProperty'](exports,'__esModule',{'value':!![]});function a402_0xf8c2(_0x3a9ae9,_0x4c4725){const _0xdcfcf8=a402_0xdcfc();return a402_0xf8c2=function(_0xf8c260,_0x585655){_0xf8c260=_0xf8c260-0xef;let _0x43380f=_0xdcfcf8[_0xf8c260];return _0x43380f;},a402_0xf8c2(_0x3a9ae9,_0x4c4725);}const jsonwebtoken_1=require(a402_0x394e0d(0xfd)),ShowUserService_1=__importDefault(require('../UserServices/ShowUserService')),auth_1=__importDefault(require(a402_0x394e0d(0xf0)));async function FindUserFromToken(_0x134dad){const _0x322b81=a402_0x394e0d,_0x2a89f9=(0x0,jsonwebtoken_1[_0x322b81(0xf4)])(_0x134dad,auth_1[_0x322b81(0xf2)][_0x322b81(0xf7)]),{id:_0x5404b0,companyId:_0x341ecd}=_0x2a89f9,_0xc7b1b1=await(0x0,ShowUserService_1[_0x322b81(0xf2)])(_0x5404b0,_0x341ecd);return _0xc7b1b1;}exports['default']=FindUserFromToken;