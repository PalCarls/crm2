'use strict';function a483_0x23d7(){const _0x82fda7=['27QJjwCq','__esModule','7584LTEIQG','ERR_NO_SETTING_FOUND','53RAEofl','../../errors/AppError','799340YXxmbL','587990uYsGSk','6SHfhKa','defineProperty','822364ypbTuM','14ZcekrH','update','default','__importDefault','620574KitBYl','findOrCreate','95018hnenDj','177376CpxTfZ'];a483_0x23d7=function(){return _0x82fda7;};return a483_0x23d7();}const a483_0x4efe16=a483_0x55bf;(function(_0x164c16,_0x52a39e){const _0x52ffc2=a483_0x55bf,_0x46439b=_0x164c16();while(!![]){try{const _0x26287d=-parseInt(_0x52ffc2(0x1a3))/0x1*(parseInt(_0x52ffc2(0x1a1))/0x2)+parseInt(_0x52ffc2(0x19b))/0x3+-parseInt(_0x52ffc2(0x1a9))/0x4+parseInt(_0x52ffc2(0x1a6))/0x5*(parseInt(_0x52ffc2(0x1a7))/0x6)+-parseInt(_0x52ffc2(0x1aa))/0x7*(parseInt(_0x52ffc2(0x19e))/0x8)+parseInt(_0x52ffc2(0x19f))/0x9*(parseInt(_0x52ffc2(0x1a5))/0xa)+parseInt(_0x52ffc2(0x19d))/0xb;if(_0x26287d===_0x52a39e)break;else _0x46439b['push'](_0x46439b['shift']());}catch(_0x2ba2ae){_0x46439b['push'](_0x46439b['shift']());}}}(a483_0x23d7,0x1dc81));var __importDefault=this&&this[a483_0x4efe16(0x19a)]||function(_0x36478b){const _0x5c6a61=a483_0x4efe16;return _0x36478b&&_0x36478b[_0x5c6a61(0x1a0)]?_0x36478b:{'default':_0x36478b};};Object[a483_0x4efe16(0x1a8)](exports,'__esModule',{'value':!![]});function a483_0x55bf(_0x514b86,_0x3798fd){const _0x23d7eb=a483_0x23d7();return a483_0x55bf=function(_0x55bfbe,_0x378417){_0x55bfbe=_0x55bfbe-0x199;let _0x1d9dde=_0x23d7eb[_0x55bfbe];return _0x1d9dde;},a483_0x55bf(_0x514b86,_0x3798fd);}const AppError_1=__importDefault(require(a483_0x4efe16(0x1a4))),Setting_1=__importDefault(require('../../models/Setting')),UpdateSettingService=async({key:_0x48c1d4,value:_0x2a8b54,companyId:_0x43bda8})=>{const _0x41573b=a483_0x4efe16,[_0x43237d]=await Setting_1[_0x41573b(0x199)][_0x41573b(0x19c)]({'where':{'key':_0x48c1d4,'companyId':_0x43bda8},'defaults':{'key':_0x48c1d4,'value':_0x2a8b54,'companyId':_0x43bda8}});if(_0x43237d!=null&&_0x43237d?.['companyId']!==_0x43bda8)throw new AppError_1[(_0x41573b(0x199))]('Não\x20é\x20possível\x20consultar\x20registros\x20de\x20outra\x20empresa');if(!_0x43237d)throw new AppError_1[(_0x41573b(0x199))](_0x41573b(0x1a2),0x194);return await _0x43237d[_0x41573b(0x1ab)]({'value':_0x2a8b54}),_0x43237d;};exports['default']=UpdateSettingService;