'use strict';function a14_0x218c(_0x5415fb,_0x47fd07){const _0x3ec6a5=a14_0x3ec6();return a14_0x218c=function(_0x218c9a,_0x1854e5){_0x218c9a=_0x218c9a-0xed;let _0x3f0e17=_0x3ec6a5[_0x218c9a];return _0x3f0e17;},a14_0x218c(_0x5415fb,_0x47fd07);}const a14_0x4ce4d9=a14_0x218c;(function(_0x352834,_0x2cbc9a){const _0x557de5=a14_0x218c,_0x41c6db=_0x352834();while(!![]){try{const _0x4419f8=-parseInt(_0x557de5(0xf9))/0x1*(parseInt(_0x557de5(0xfd))/0x2)+-parseInt(_0x557de5(0xf8))/0x3*(parseInt(_0x557de5(0xfe))/0x4)+-parseInt(_0x557de5(0xf1))/0x5*(parseInt(_0x557de5(0xf3))/0x6)+-parseInt(_0x557de5(0xef))/0x7+-parseInt(_0x557de5(0xfa))/0x8+-parseInt(_0x557de5(0xfc))/0x9+parseInt(_0x557de5(0x103))/0xa;if(_0x4419f8===_0x2cbc9a)break;else _0x41c6db['push'](_0x41c6db['shift']());}catch(_0x174b0d){_0x41c6db['push'](_0x41c6db['shift']());}}}(a14_0x3ec6,0x62597));var __importDefault=this&&this[a14_0x4ce4d9(0x101)]||function(_0x2e102c){const _0xd13962=a14_0x4ce4d9;return _0x2e102c&&_0x2e102c[_0xd13962(0xf4)]?_0x2e102c:{'default':_0x2e102c};};Object[a14_0x4ce4d9(0x100)](exports,a14_0x4ce4d9(0xf4),{'value':!![]}),exports[a14_0x4ce4d9(0xfb)]=exports[a14_0x4ce4d9(0x102)]=exports[a14_0x4ce4d9(0xf5)]=void 0x0;const FindCompanySettingsService_1=__importDefault(require(a14_0x4ce4d9(0xee))),UpdateCompanySettingService_1=__importDefault(require(a14_0x4ce4d9(0xf0))),FindCompanySettingOneService_1=__importDefault(require('../services/CompaniesSettings/FindCompanySettingOneService')),show=async(_0x35fd5a,_0xb10d32)=>{const _0x10bf86=a14_0x4ce4d9,{companyId:_0x5860fa}=_0x35fd5a[_0x10bf86(0xed)],_0x537901=await(0x0,FindCompanySettingsService_1[_0x10bf86(0xf7)])({'companyId':_0x5860fa});return _0xb10d32[_0x10bf86(0xf6)](0xc8)['json'](_0x537901);};exports[a14_0x4ce4d9(0xf5)]=show;const showOne=async(_0x2ed29b,_0x1612c6)=>{const _0x18fbe1=a14_0x4ce4d9,{column:_0x33dc6b}=_0x2ed29b[_0x18fbe1(0xff)],{companyId:_0x30c1c9}=_0x2ed29b[_0x18fbe1(0xed)],_0x579ada=await(0x0,FindCompanySettingOneService_1[_0x18fbe1(0xf7)])({'companyId':_0x30c1c9,'column':_0x33dc6b});return _0x1612c6[_0x18fbe1(0xf6)](0xc8)['json'](_0x579ada[0x0]);};function a14_0x3ec6(){const _0x604275=['6556896DocGBK','14KQnXrt','799444vPXctF','query','defineProperty','__importDefault','showOne','32938810FMvKlq','user','../services/CompaniesSettings/FindCompanySettingsService','3512292DJOQBy','../services/CompaniesSettings/UpdateCompanySettingService','42115BDlOOf','json','534lGWcYZ','__esModule','show','status','default','3AnepxC','86861iMhHwb','825656VPfqZe','update'];a14_0x3ec6=function(){return _0x604275;};return a14_0x3ec6();}exports[a14_0x4ce4d9(0x102)]=showOne;const update=async(_0x51b532,_0x2ce7dc)=>{const _0x362892=a14_0x4ce4d9,{column:_0x213380,data:_0x4a0aad}=_0x51b532['body'],{companyId:_0x343544}=_0x51b532[_0x362892(0xed)],_0xd09dff=await(0x0,UpdateCompanySettingService_1[_0x362892(0xf7)])({'companyId':_0x343544,'column':_0x213380,'data':_0x4a0aad});return _0x2ce7dc[_0x362892(0xf6)](0xc8)[_0x362892(0xf2)]({'response':!![],'result':_0xd09dff});};exports[a14_0x4ce4d9(0xfb)]=update;