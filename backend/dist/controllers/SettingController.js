'use strict';const a30_0x290805=a30_0x14d7;(function(_0x53e7df,_0x2b7c55){const _0x30ae61=a30_0x14d7,_0x5898c7=_0x53e7df();while(!![]){try{const _0xab3b0c=parseInt(_0x30ae61(0xba))/0x1*(-parseInt(_0x30ae61(0xa9))/0x2)+-parseInt(_0x30ae61(0xbe))/0x3*(-parseInt(_0x30ae61(0xa4))/0x4)+-parseInt(_0x30ae61(0xb3))/0x5*(parseInt(_0x30ae61(0xbf))/0x6)+parseInt(_0x30ae61(0xc1))/0x7*(parseInt(_0x30ae61(0xb7))/0x8)+-parseInt(_0x30ae61(0xb5))/0x9*(-parseInt(_0x30ae61(0xac))/0xa)+-parseInt(_0x30ae61(0xc0))/0xb+parseInt(_0x30ae61(0xbb))/0xc*(parseInt(_0x30ae61(0xc2))/0xd);if(_0xab3b0c===_0x2b7c55)break;else _0x5898c7['push'](_0x5898c7['shift']());}catch(_0x56c7f2){_0x5898c7['push'](_0x5898c7['shift']());}}}(a30_0x2d87,0xa6b9d));var __importDefault=this&&this[a30_0x290805(0xa5)]||function(_0x43f5f6){const _0x10c16a=a30_0x290805;return _0x43f5f6&&_0x43f5f6[_0x10c16a(0xae)]?_0x43f5f6:{'default':_0x43f5f6};};Object['defineProperty'](exports,a30_0x290805(0xae),{'value':!![]}),exports['update']=exports[a30_0x290805(0xa8)]=exports[a30_0x290805(0xad)]=void 0x0;function a30_0x2d87(){const _0x3c165b=['params','153485AZtRJG','admin','1719qVMURU','../services/SettingServices/ListSettingsServiceOne','9624544hmrNtA','user','json','435932ZFdfcE','725592jXOgwG','update','profile','1587MyWtwa','186IACWoD','12676642qahypr','7SDawqd','299EiPQHx','3820cbCtSb','__importDefault','getIO','default','showOne','4upELIX','emit','../errors/AppError','29310PyTMqY','index','__esModule','../services/SettingServices/UpdateSettingService','status','-settings'];a30_0x2d87=function(){return _0x3c165b;};return a30_0x2d87();}const socket_1=require('../libs/socket'),AppError_1=__importDefault(require(a30_0x290805(0xab))),UpdateSettingService_1=__importDefault(require(a30_0x290805(0xaf))),ListSettingsService_1=__importDefault(require('../services/SettingServices/ListSettingsService')),ListSettingsServiceOne_1=__importDefault(require(a30_0x290805(0xb6))),index=async(_0x33fb7d,_0x583907)=>{const _0x5df939=a30_0x290805,{companyId:_0xf492c7}=_0x33fb7d[_0x5df939(0xb8)],_0x4e5b12=await(0x0,ListSettingsService_1['default'])({'companyId':_0xf492c7});return _0x583907[_0x5df939(0xb0)](0xc8)[_0x5df939(0xb9)](_0x4e5b12);};function a30_0x14d7(_0xb3948e,_0xfa1eb4){const _0x2d8707=a30_0x2d87();return a30_0x14d7=function(_0x14d753,_0x203d4d){_0x14d753=_0x14d753-0xa4;let _0x25e771=_0x2d8707[_0x14d753];return _0x25e771;},a30_0x14d7(_0xb3948e,_0xfa1eb4);}exports[a30_0x290805(0xad)]=index;const showOne=async(_0x7c1850,_0x67324f)=>{const _0x510db5=a30_0x290805,{companyId:_0x2c9d76}=_0x7c1850['user'],{settingKey:_0x207dec}=_0x7c1850[_0x510db5(0xb2)],_0x4be03e=await(0x0,ListSettingsServiceOne_1[_0x510db5(0xa7)])({'companyId':_0x2c9d76,'key':_0x207dec});return _0x67324f[_0x510db5(0xb0)](0xc8)[_0x510db5(0xb9)](_0x4be03e);};exports[a30_0x290805(0xa8)]=showOne;const update=async(_0x5ca44c,_0x29bb99)=>{const _0x322ef7=a30_0x290805;if(_0x5ca44c[_0x322ef7(0xb8)][_0x322ef7(0xbd)]!==_0x322ef7(0xb4))throw new AppError_1[(_0x322ef7(0xa7))]('ERR_NO_PERMISSION',0x193);const {settingKey:_0x425f2a}=_0x5ca44c[_0x322ef7(0xb2)],{value:_0x2c74f6}=_0x5ca44c['body'],{companyId:_0x3d85ff}=_0x5ca44c[_0x322ef7(0xb8)],_0x3b9dba=await(0x0,UpdateSettingService_1[_0x322ef7(0xa7)])({'key':_0x425f2a,'value':_0x2c74f6,'companyId':_0x3d85ff}),_0x444624=(0x0,socket_1[_0x322ef7(0xa6)])();return _0x444624[_0x322ef7(0xaa)]('company-'+_0x3d85ff+_0x322ef7(0xb1),{'action':'update','setting':_0x3b9dba}),_0x29bb99['status'](0xc8)[_0x322ef7(0xb9)](_0x3b9dba);};exports[a30_0x290805(0xbc)]=update;