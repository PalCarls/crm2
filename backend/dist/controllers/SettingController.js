'use strict';const a30_0xb67492=a30_0x266e;function a30_0x30b4(){const _0x41a0a1=['update','json','1414817kXAlDc','-settings','params','profile','126zYMgHf','__importDefault','594728GdGIuG','default','body','user','emit','showOne','66540FlIwKI','../services/SettingServices/UpdateSettingService','company-','status','__esModule','2361ebVjiT','4608659crnidH','2370272NRSbnP','../libs/socket','index','198gTynef','ERR_NO_PERMISSION','defineProperty','5040JZXNob','13870188ZsdPhu','admin','40oenaIA'];a30_0x30b4=function(){return _0x41a0a1;};return a30_0x30b4();}(function(_0x363d27,_0xaeca03){const _0x81f21e=a30_0x266e,_0x471d75=_0x363d27();while(!![]){try{const _0x5bc1a8=parseInt(_0x81f21e(0xd8))/0x1+-parseInt(_0x81f21e(0xcc))/0x2+-parseInt(_0x81f21e(0xca))/0x3*(parseInt(_0x81f21e(0xd2))/0x4)+parseInt(_0x81f21e(0xc5))/0x5*(parseInt(_0x81f21e(0xcf))/0x6)+parseInt(_0x81f21e(0xdc))/0x7*(parseInt(_0x81f21e(0xde))/0x8)+parseInt(_0x81f21e(0xd3))/0x9+parseInt(_0x81f21e(0xd5))/0xa*(-parseInt(_0x81f21e(0xcb))/0xb);if(_0x5bc1a8===_0xaeca03)break;else _0x471d75['push'](_0x471d75['shift']());}catch(_0x18906e){_0x471d75['push'](_0x471d75['shift']());}}}(a30_0x30b4,0xd6feb));var __importDefault=this&&this[a30_0xb67492(0xdd)]||function(_0x1dd2bb){const _0x488fa2=a30_0xb67492;return _0x1dd2bb&&_0x1dd2bb[_0x488fa2(0xc9)]?_0x1dd2bb:{'default':_0x1dd2bb};};Object[a30_0xb67492(0xd1)](exports,'__esModule',{'value':!![]}),exports['update']=exports[a30_0xb67492(0xc4)]=exports[a30_0xb67492(0xce)]=void 0x0;function a30_0x266e(_0x3a768f,_0x810b92){const _0x30b4bf=a30_0x30b4();return a30_0x266e=function(_0x266e5f,_0x52831f){_0x266e5f=_0x266e5f-0xc4;let _0x11a3a2=_0x30b4bf[_0x266e5f];return _0x11a3a2;},a30_0x266e(_0x3a768f,_0x810b92);}const socket_1=require(a30_0xb67492(0xcd)),AppError_1=__importDefault(require('../errors/AppError')),UpdateSettingService_1=__importDefault(require(a30_0xb67492(0xc6))),ListSettingsService_1=__importDefault(require('../services/SettingServices/ListSettingsService')),ListSettingsServiceOne_1=__importDefault(require('../services/SettingServices/ListSettingsServiceOne')),index=async(_0x591519,_0x349a0f)=>{const _0x5a2b4e=a30_0xb67492,{companyId:_0x1a9aa1}=_0x591519[_0x5a2b4e(0xe1)],_0xaff9b=await(0x0,ListSettingsService_1[_0x5a2b4e(0xdf)])({'companyId':_0x1a9aa1});return _0x349a0f[_0x5a2b4e(0xc8)](0xc8)[_0x5a2b4e(0xd7)](_0xaff9b);};exports[a30_0xb67492(0xce)]=index;const showOne=async(_0x1b1509,_0x43b555)=>{const _0x3b00ee=a30_0xb67492,{companyId:_0x2b7877}=_0x1b1509[_0x3b00ee(0xe1)],{settingKey:_0x525358}=_0x1b1509[_0x3b00ee(0xda)],_0x720ab2=await(0x0,ListSettingsServiceOne_1[_0x3b00ee(0xdf)])({'companyId':_0x2b7877,'key':_0x525358});return _0x43b555[_0x3b00ee(0xc8)](0xc8)[_0x3b00ee(0xd7)](_0x720ab2);};exports[a30_0xb67492(0xc4)]=showOne;const update=async(_0x35f06c,_0x11bb91)=>{const _0x3b3ce3=a30_0xb67492;if(_0x35f06c[_0x3b3ce3(0xe1)][_0x3b3ce3(0xdb)]!==_0x3b3ce3(0xd4))throw new AppError_1[(_0x3b3ce3(0xdf))](_0x3b3ce3(0xd0),0x193);const {settingKey:_0x356dd8}=_0x35f06c[_0x3b3ce3(0xda)],{value:_0x5c1750}=_0x35f06c[_0x3b3ce3(0xe0)],{companyId:_0x3178e3}=_0x35f06c['user'],_0x38fc82=await(0x0,UpdateSettingService_1['default'])({'key':_0x356dd8,'value':_0x5c1750,'companyId':_0x3178e3}),_0x4d1445=(0x0,socket_1['getIO'])();return _0x4d1445[_0x3b3ce3(0xe2)](_0x3b3ce3(0xc7)+_0x3178e3+_0x3b3ce3(0xd9),{'action':_0x3b3ce3(0xd6),'setting':_0x38fc82}),_0x11bb91[_0x3b3ce3(0xc8)](0xc8)[_0x3b3ce3(0xd7)](_0x38fc82);};exports[a30_0xb67492(0xd6)]=update;