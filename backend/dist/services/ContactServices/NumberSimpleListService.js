'use strict';const a467_0x2db0ea=a467_0x147c;(function(_0x384319,_0x16bed1){const _0x2a744d=a467_0x147c,_0x35cf7d=_0x384319();while(!![]){try{const _0xfdc5ed=parseInt(_0x2a744d(0x178))/0x1+-parseInt(_0x2a744d(0x182))/0x2+parseInt(_0x2a744d(0x17e))/0x3+parseInt(_0x2a744d(0x17c))/0x4*(-parseInt(_0x2a744d(0x185))/0x5)+-parseInt(_0x2a744d(0x188))/0x6+parseInt(_0x2a744d(0x17b))/0x7+parseInt(_0x2a744d(0x180))/0x8;if(_0xfdc5ed===_0x16bed1)break;else _0x35cf7d['push'](_0x35cf7d['shift']());}catch(_0x4fc676){_0x35cf7d['push'](_0x35cf7d['shift']());}}}(a467_0xd8a8,0xaf4f4));var __importDefault=this&&this[a467_0x2db0ea(0x183)]||function(_0xb5d883){const _0x1f844d=a467_0x2db0ea;return _0xb5d883&&_0xb5d883[_0x1f844d(0x17a)]?_0xb5d883:{'default':_0xb5d883};};function a467_0xd8a8(){const _0x30e58e=['where','1655234kXRhjk','__importDefault','../../models/Contact','24275pWHRaP','ASC','ERR_NO_CONTACT_FOUND','7657800GYwajE','default','defineProperty','540602InTVRz','name','__esModule','2722846cLpbzT','776hGOiFG','sequelize','909135SuNtjS','findAll','20249840BKExqh'];a467_0xd8a8=function(){return _0x30e58e;};return a467_0xd8a8();}function a467_0x147c(_0x1c398,_0x316470){const _0xd8a82b=a467_0xd8a8();return a467_0x147c=function(_0x147c09,_0x5becbf){_0x147c09=_0x147c09-0x177;let _0x21fb9b=_0xd8a82b[_0x147c09];return _0x21fb9b;},a467_0x147c(_0x1c398,_0x316470);}Object[a467_0x2db0ea(0x177)](exports,a467_0x2db0ea(0x17a),{'value':!![]});const Contact_1=__importDefault(require(a467_0x2db0ea(0x184))),AppError_1=__importDefault(require('../../errors/AppError')),sequelize_1=require(a467_0x2db0ea(0x17d)),NumberSimpleListService=async({number:_0x33bcb4,companyId:_0x13a704})=>{const _0x328e6b=a467_0x2db0ea;let _0x259a62={'order':[[_0x328e6b(0x179),_0x328e6b(0x186)]]};_0x33bcb4&&(_0x259a62[_0x328e6b(0x181)]={'number':{[sequelize_1['Op']['like']]:'%'+_0x33bcb4+'%'}});_0x259a62['where']={..._0x259a62['where'],'companyId':_0x13a704};const _0x3acabb=await Contact_1['default'][_0x328e6b(0x17f)](_0x259a62);if(!_0x3acabb)throw new AppError_1[(_0x328e6b(0x189))](_0x328e6b(0x187),0x194);return _0x3acabb;};exports[a467_0x2db0ea(0x189)]=NumberSimpleListService;