'use strict';const a492_0xcaf2b9=a492_0xd5d5;(function(_0x59bbee,_0x264654){const _0x43afcd=a492_0xd5d5,_0x27db7a=_0x59bbee();while(!![]){try{const _0x53c80a=parseInt(_0x43afcd(0xda))/0x1*(parseInt(_0x43afcd(0xeb))/0x2)+-parseInt(_0x43afcd(0xdd))/0x3+parseInt(_0x43afcd(0xe1))/0x4*(parseInt(_0x43afcd(0xef))/0x5)+parseInt(_0x43afcd(0xdf))/0x6+parseInt(_0x43afcd(0xf9))/0x7+parseInt(_0x43afcd(0xdc))/0x8*(-parseInt(_0x43afcd(0xe3))/0x9)+parseInt(_0x43afcd(0xdb))/0xa*(parseInt(_0x43afcd(0xec))/0xb);if(_0x53c80a===_0x264654)break;else _0x27db7a['push'](_0x27db7a['shift']());}catch(_0x206803){_0x27db7a['push'](_0x27db7a['shift']());}}}(a492_0x3531,0x52b0e));var __importDefault=this&&this['__importDefault']||function(_0x3137d7){const _0x43050e=a492_0xd5d5;return _0x3137d7&&_0x3137d7[_0x43050e(0xe9)]?_0x3137d7:{'default':_0x3137d7};};function a492_0xd5d5(_0x17df50,_0x371669){const _0x3531f9=a492_0x3531();return a492_0xd5d5=function(_0xd5d5a5,_0x301d3b){_0xd5d5a5=_0xd5d5a5-0xda;let _0x15667d=_0x3531f9[_0xd5d5a5];return _0x15667d;},a492_0xd5d5(_0x17df50,_0x371669);}Object[a492_0xcaf2b9(0xfc)](exports,a492_0xcaf2b9(0xe9),{'value':!![]});function a492_0x3531(){const _0x254f1a=['findOne','ERR_INVALID_CREDENTIALS','queues','__esModule','split','158pNrYxQ','2071421GoItRq','../../errors/AppError','checkPassword','1255yopYiv','../../models/Company','findByPk','endWork','createRefreshToken','../../models/User','MASTER_KEY','../../helpers/SerializeUser','startWork','../../models/Setting','345401SLvWoj','default','ERR_OUT_OF_HOURS','defineProperty','39FXFIfd','50MbDSWg','195792yOhqFs','1654779LRiVEO','update','2180742yMaXWm','getHours','356wLkREE','createAccessToken','180vUNYjn','env','SerializeUser'];a492_0x3531=function(){return _0x254f1a;};return a492_0x3531();}const User_1=__importDefault(require(a492_0xcaf2b9(0xf4))),AppError_1=__importDefault(require(a492_0xcaf2b9(0xed))),CreateTokens_1=require('../../helpers/CreateTokens'),SerializeUser_1=require(a492_0xcaf2b9(0xf6)),Company_1=__importDefault(require(a492_0xcaf2b9(0xf0))),Setting_1=__importDefault(require(a492_0xcaf2b9(0xf8))),AuthUserService=async({email:_0x5864c3,password:_0x4e02bb})=>{const _0x4c0c9a=a492_0xcaf2b9,_0x189b31=await User_1[_0x4c0c9a(0xfa)][_0x4c0c9a(0xe6)]({'where':{'email':_0x5864c3},'include':[_0x4c0c9a(0xe8),{'model':Company_1[_0x4c0c9a(0xfa)],'include':[{'model':Setting_1['default']}]}]});if(!_0x189b31)throw new AppError_1[(_0x4c0c9a(0xfa))](_0x4c0c9a(0xe7),0x191);const _0x4fe600=new Date(),_0x241fe3=_0x4fe600[_0x4c0c9a(0xe0)]()*0x3c*0x3c,_0x2e1cfd=_0x4fe600['getMinutes']()*0x3c,_0x3157f7=_0x241fe3+_0x2e1cfd,_0x2af19b=_0x189b31[_0x4c0c9a(0xf7)],_0x2b18f4=Number(_0x2af19b['split'](':')[0x0])*0x3c*0x3c,_0x5c28d1=Number(_0x2af19b[_0x4c0c9a(0xea)](':')[0x1])*0x3c,_0x56efb4=_0x2b18f4+_0x5c28d1,_0x36244f=_0x189b31[_0x4c0c9a(0xf2)],_0x5767fc=Number(_0x36244f['split'](':')[0x0])*0x3c*0x3c,_0x150d2c=Number(_0x36244f[_0x4c0c9a(0xea)](':')[0x1])*0x3c,_0x334abc=_0x5767fc+_0x150d2c;if(_0x3157f7<_0x56efb4||_0x3157f7>_0x334abc)throw new AppError_1[(_0x4c0c9a(0xfa))](_0x4c0c9a(0xfb),0x191);if(_0x4e02bb===process[_0x4c0c9a(0xe4)][_0x4c0c9a(0xf5)]){}else{if(await _0x189b31[_0x4c0c9a(0xee)](_0x4e02bb)){const _0x3efcd6=await Company_1[_0x4c0c9a(0xfa)][_0x4c0c9a(0xf1)](_0x189b31?.['companyId']);await _0x3efcd6[_0x4c0c9a(0xde)]({'lastLogin':new Date()});}else throw new AppError_1[(_0x4c0c9a(0xfa))](_0x4c0c9a(0xe7),0x191);}const _0x3161f9=(0x0,CreateTokens_1[_0x4c0c9a(0xe2)])(_0x189b31),_0x523d8b=(0x0,CreateTokens_1[_0x4c0c9a(0xf3)])(_0x189b31),_0x1c2d25=await(0x0,SerializeUser_1[_0x4c0c9a(0xe5)])(_0x189b31);return{'serializedUser':_0x1c2d25,'token':_0x3161f9,'refreshToken':_0x523d8b};};exports[a492_0xcaf2b9(0xfa)]=AuthUserService;