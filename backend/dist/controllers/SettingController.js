<<<<<<< HEAD
'use strict';const a32_0x5a862d=a32_0x10c2;(function(_0x450b1e,_0x144c4f){const _0x5e115f=a32_0x10c2,_0x3bda0b=_0x450b1e();while(!![]){try{const _0x5a17c7=-parseInt(_0x5e115f(0xa4))/0x1+parseInt(_0x5e115f(0x8d))/0x2+parseInt(_0x5e115f(0x9d))/0x3+-parseInt(_0x5e115f(0x9f))/0x4+parseInt(_0x5e115f(0x9c))/0x5+-parseInt(_0x5e115f(0x94))/0x6*(-parseInt(_0x5e115f(0xa5))/0x7)+parseInt(_0x5e115f(0xa0))/0x8*(-parseInt(_0x5e115f(0xaf))/0x9);if(_0x5a17c7===_0x144c4f)break;else _0x3bda0b['push'](_0x3bda0b['shift']());}catch(_0x658e39){_0x3bda0b['push'](_0x3bda0b['shift']());}}}(a32_0x1d93,0x69f09));var __importDefault=this&&this[a32_0x5a862d(0xab)]||function(_0x2b9184){const _0x3ed93d=a32_0x5a862d;return _0x2b9184&&_0x2b9184[_0x3ed93d(0x99)]?_0x2b9184:{'default':_0x2b9184};};Object[a32_0x5a862d(0x98)](exports,a32_0x5a862d(0x99),{'value':!![]}),exports[a32_0x5a862d(0x9b)]=exports[a32_0x5a862d(0xa3)]=exports['update']=exports[a32_0x5a862d(0xa1)]=exports['index']=void 0x0;const socket_1=require(a32_0x5a862d(0x9e)),AppError_1=__importDefault(require(a32_0x5a862d(0xae))),UpdateSettingService_1=__importDefault(require(a32_0x5a862d(0x8f))),ListSettingsService_1=__importDefault(require(a32_0x5a862d(0xa7))),ListSettingsServiceOne_1=__importDefault(require(a32_0x5a862d(0xa2))),GetSettingService_1=__importDefault(require(a32_0x5a862d(0xa8))),UpdateOneSettingService_1=__importDefault(require(a32_0x5a862d(0xaa))),index=async(_0x2b4524,_0x5961fc)=>{const _0x3e6a2a=a32_0x5a862d,{companyId:_0x3966bf}=_0x2b4524[_0x3e6a2a(0x95)],_0x3e0657=await(0x0,ListSettingsService_1[_0x3e6a2a(0x90)])({'companyId':_0x3966bf});return _0x5961fc[_0x3e6a2a(0xad)](0xc8)[_0x3e6a2a(0x92)](_0x3e0657);};exports['index']=index;function a32_0x10c2(_0x13e013,_0xe19d72){const _0x1d9339=a32_0x1d93();return a32_0x10c2=function(_0x10c2cd,_0x289bbc){_0x10c2cd=_0x10c2cd-0x8c;let _0x210f08=_0x1d9339[_0x10c2cd];return _0x210f08;},a32_0x10c2(_0x13e013,_0xe19d72);}const showOne=async(_0x4ddf44,_0x213e2a)=>{const _0x5c0aaf=a32_0x5a862d,{companyId:_0x56ea42}=_0x4ddf44[_0x5c0aaf(0x95)],{settingKey:_0x75092d}=_0x4ddf44['params'],_0x13eaf4=await(0x0,ListSettingsServiceOne_1[_0x5c0aaf(0x90)])({'companyId':_0x56ea42,'key':_0x75092d});return _0x213e2a[_0x5c0aaf(0xad)](0xc8)['json'](_0x13eaf4);};exports['showOne']=showOne;const update=async(_0x50b69a,_0x125c17)=>{const _0x183383=a32_0x5a862d;if(_0x50b69a['user'][_0x183383(0x96)]!==_0x183383(0x91))throw new AppError_1[(_0x183383(0x90))](_0x183383(0xa9),0x193);const {settingKey:_0xb181b3}=_0x50b69a[_0x183383(0x93)],{value:_0x562681}=_0x50b69a[_0x183383(0x9a)],{companyId:_0x5a2767}=_0x50b69a[_0x183383(0x95)],_0x6ca62d=await(0x0,UpdateSettingService_1[_0x183383(0x90)])({'key':_0xb181b3,'value':_0x562681,'companyId':_0x5a2767}),_0x2a157d=(0x0,socket_1[_0x183383(0x8e)])();return _0x2a157d[_0x183383(0xac)](_0x183383(0x8c)+_0x5a2767+_0x183383(0x97),{'action':_0x183383(0xa6),'setting':_0x6ca62d}),_0x125c17[_0x183383(0xad)](0xc8)[_0x183383(0x92)](_0x6ca62d);};exports['update']=update;const getSetting=async(_0x574d0e,_0x493040)=>{const _0x4048c6=a32_0x5a862d,{settingKey:_0x3a4a0c}=_0x574d0e[_0x4048c6(0x93)],_0x31d4be=await(0x0,GetSettingService_1[_0x4048c6(0x90)])({'key':_0x3a4a0c});return _0x493040[_0x4048c6(0xad)](0xc8)['json'](_0x31d4be);};exports[a32_0x5a862d(0xa3)]=getSetting;const updateOne=async(_0x573eec,_0x54bf52)=>{const _0x5f50af=a32_0x5a862d,{settingKey:_0x568357}=_0x573eec[_0x5f50af(0x93)],{value:_0x415cc5}=_0x573eec[_0x5f50af(0x9a)],_0x3dcb8d=await(0x0,UpdateOneSettingService_1[_0x5f50af(0x90)])({'key':_0x568357,'value':_0x415cc5});return _0x54bf52[_0x5f50af(0xad)](0xc8)['json'](_0x3dcb8d);};exports['updateOne']=updateOne;function a32_0x1d93(){const _0x4ac5cf=['admin','json','params','1319532LmgcmH','user','profile','-settings','defineProperty','__esModule','body','updateOne','2223645OjNxme','1088025jubzfl','../libs/socket','2429444jNBDjo','2607536rmIqLZ','showOne','../services/SettingServices/ListSettingsServiceOne','getSetting','601621pKPRNc','21BhHChO','update','../services/SettingServices/ListSettingsService','../services/SettingServices/GetSettingService','ERR_NO_PERMISSION','../services/SettingServices/UpdateOneSettingService','__importDefault','emit','status','../errors/AppError','9mlBTiZ','company-','1003366ITLBmV','getIO','../services/SettingServices/UpdateSettingService','default'];a32_0x1d93=function(){return _0x4ac5cf;};return a32_0x1d93();}
=======
'use strict';const a32_0x3364be=a32_0xcf70;function a32_0x55a4(){const _0x5a64d4=['526037HXhslQ','18hFOsjs','default','__importDefault','body','status','admin','159246BRMOwn','../libs/socket','company-','params','profile','showOne','../services/SettingServices/GetSettingService','../services/SettingServices/ListSettingsService','577272yJkktX','json','1411234laVoat','user','63VHPYSA','52gFDYkh','2079070PxfQAR','824766vkHerr','getIO','ERR_NO_PERMISSION','../services/SettingServices/UpdateSettingService','update','__esModule','88940OnyBcm','getSetting','updateOne','index'];a32_0x55a4=function(){return _0x5a64d4;};return a32_0x55a4();}(function(_0x80b1d1,_0x19ffc3){const _0x24fef0=a32_0xcf70,_0x37196b=_0x80b1d1();while(!![]){try{const _0x266bd3=-parseInt(_0x24fef0(0x170))/0x1+parseInt(_0x24fef0(0x181))/0x2+-parseInt(_0x24fef0(0x166))/0x3+parseInt(_0x24fef0(0x164))/0x4*(parseInt(_0x24fef0(0x16c))/0x5)+parseInt(_0x24fef0(0x177))/0x6+-parseInt(_0x24fef0(0x163))/0x7*(-parseInt(_0x24fef0(0x17f))/0x8)+parseInt(_0x24fef0(0x171))/0x9*(-parseInt(_0x24fef0(0x165))/0xa);if(_0x266bd3===_0x19ffc3)break;else _0x37196b['push'](_0x37196b['shift']());}catch(_0x5f31f5){_0x37196b['push'](_0x37196b['shift']());}}}(a32_0x55a4,0x60b1c));var __importDefault=this&&this[a32_0x3364be(0x173)]||function(_0x29ff3e){const _0x523a38=a32_0x3364be;return _0x29ff3e&&_0x29ff3e[_0x523a38(0x16b)]?_0x29ff3e:{'default':_0x29ff3e};};Object['defineProperty'](exports,a32_0x3364be(0x16b),{'value':!![]}),exports[a32_0x3364be(0x16e)]=exports[a32_0x3364be(0x16d)]=exports[a32_0x3364be(0x16a)]=exports[a32_0x3364be(0x17c)]=exports[a32_0x3364be(0x16f)]=void 0x0;const socket_1=require(a32_0x3364be(0x178)),AppError_1=__importDefault(require('../errors/AppError')),UpdateSettingService_1=__importDefault(require(a32_0x3364be(0x169))),ListSettingsService_1=__importDefault(require(a32_0x3364be(0x17e))),ListSettingsServiceOne_1=__importDefault(require('../services/SettingServices/ListSettingsServiceOne')),GetSettingService_1=__importDefault(require(a32_0x3364be(0x17d))),UpdateOneSettingService_1=__importDefault(require('../services/SettingServices/UpdateOneSettingService')),index=async(_0x1cfc50,_0x456ba6)=>{const _0x280c68=a32_0x3364be,{companyId:_0x367b19}=_0x1cfc50[_0x280c68(0x162)],_0x2fd8bb=await(0x0,ListSettingsService_1['default'])({'companyId':_0x367b19});return _0x456ba6[_0x280c68(0x175)](0xc8)[_0x280c68(0x180)](_0x2fd8bb);};exports[a32_0x3364be(0x16f)]=index;function a32_0xcf70(_0x500916,_0x1371b3){const _0x55a4d7=a32_0x55a4();return a32_0xcf70=function(_0xcf70a5,_0x3406bb){_0xcf70a5=_0xcf70a5-0x162;let _0x26fce7=_0x55a4d7[_0xcf70a5];return _0x26fce7;},a32_0xcf70(_0x500916,_0x1371b3);}const showOne=async(_0x2b5395,_0x51a64a)=>{const _0x5e3d6a=a32_0x3364be,{companyId:_0x4d4229}=_0x2b5395[_0x5e3d6a(0x162)],{settingKey:_0x4434eb}=_0x2b5395['params'],_0x467907=await(0x0,ListSettingsServiceOne_1[_0x5e3d6a(0x172)])({'companyId':_0x4d4229,'key':_0x4434eb});return _0x51a64a[_0x5e3d6a(0x175)](0xc8)[_0x5e3d6a(0x180)](_0x467907);};exports[a32_0x3364be(0x17c)]=showOne;const update=async(_0x598a20,_0x28e468)=>{const _0x134a3c=a32_0x3364be;if(_0x598a20[_0x134a3c(0x162)][_0x134a3c(0x17b)]!==_0x134a3c(0x176))throw new AppError_1[(_0x134a3c(0x172))](_0x134a3c(0x168),0x193);const {settingKey:_0x21e918}=_0x598a20['params'],{value:_0x2ff6a9}=_0x598a20[_0x134a3c(0x174)],{companyId:_0x11d6c8}=_0x598a20['user'],_0x29c7e5=await(0x0,UpdateSettingService_1['default'])({'key':_0x21e918,'value':_0x2ff6a9,'companyId':_0x11d6c8}),_0x120a45=(0x0,socket_1[_0x134a3c(0x167)])();return _0x120a45['emit'](_0x134a3c(0x179)+_0x11d6c8+'-settings',{'action':_0x134a3c(0x16a),'setting':_0x29c7e5}),_0x28e468[_0x134a3c(0x175)](0xc8)[_0x134a3c(0x180)](_0x29c7e5);};exports[a32_0x3364be(0x16a)]=update;const getSetting=async(_0x2de5f1,_0x2f45bc)=>{const _0x36d8e9=a32_0x3364be,{settingKey:_0x4cf1dc}=_0x2de5f1[_0x36d8e9(0x17a)],_0x19f1a3=await(0x0,GetSettingService_1[_0x36d8e9(0x172)])({'key':_0x4cf1dc});return _0x2f45bc[_0x36d8e9(0x175)](0xc8)[_0x36d8e9(0x180)](_0x19f1a3);};exports[a32_0x3364be(0x16d)]=getSetting;const updateOne=async(_0x2359be,_0x591efc)=>{const _0x56c638=a32_0x3364be,{settingKey:_0x596722}=_0x2359be[_0x56c638(0x17a)],{value:_0x1c4135}=_0x2359be[_0x56c638(0x174)],_0x5c4d5f=await(0x0,UpdateOneSettingService_1[_0x56c638(0x172)])({'key':_0x596722,'value':_0x1c4135});return _0x591efc[_0x56c638(0x175)](0xc8)[_0x56c638(0x180)](_0x5c4d5f);};exports[a32_0x3364be(0x16e)]=updateOne;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
