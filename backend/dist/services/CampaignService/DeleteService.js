'use strict';function a376_0x8b85(_0x2095ba,_0x563894){const _0x5b18bf=a376_0x5b18();return a376_0x8b85=function(_0x8b85e5,_0x1b206e){_0x8b85e5=_0x8b85e5-0xf8;let _0xd074a8=_0x5b18bf[_0x8b85e5];return _0xd074a8;},a376_0x8b85(_0x2095ba,_0x563894);}const a376_0x39d780=a376_0x8b85;(function(_0x223549,_0xd8a5b1){const _0x2378e7=a376_0x8b85,_0x446ec0=_0x223549();while(!![]){try{const _0x35ac39=parseInt(_0x2378e7(0xfb))/0x1+-parseInt(_0x2378e7(0xfa))/0x2*(parseInt(_0x2378e7(0xf9))/0x3)+parseInt(_0x2378e7(0x101))/0x4+parseInt(_0x2378e7(0x109))/0x5+parseInt(_0x2378e7(0x107))/0x6*(parseInt(_0x2378e7(0x105))/0x7)+parseInt(_0x2378e7(0xfe))/0x8*(parseInt(_0x2378e7(0xf8))/0x9)+-parseInt(_0x2378e7(0xff))/0xa*(parseInt(_0x2378e7(0x103))/0xb);if(_0x35ac39===_0xd8a5b1)break;else _0x446ec0['push'](_0x446ec0['shift']());}catch(_0x2572d3){_0x446ec0['push'](_0x446ec0['shift']());}}}(a376_0x5b18,0x415bb));var __importDefault=this&&this['__importDefault']||function(_0x25453f){return _0x25453f&&_0x25453f['__esModule']?_0x25453f:{'default':_0x25453f};};Object[a376_0x39d780(0x108)](exports,a376_0x39d780(0x104),{'value':!![]});const Campaign_1=__importDefault(require('../../models/Campaign')),AppError_1=__importDefault(require('../../errors/AppError')),DeleteService=async _0x1ebfb4=>{const _0x50b556=a376_0x39d780,_0x3803eb=await Campaign_1['default'][_0x50b556(0x102)]({'where':{'id':_0x1ebfb4}});if(!_0x3803eb)throw new AppError_1[(_0x50b556(0xfc))]('ERR_NO_CAMPAIGN_FOUND',0x194);if(_0x3803eb[_0x50b556(0x100)]==='EM_ANDAMENTO')throw new AppError_1[(_0x50b556(0xfc))](_0x50b556(0x106),0x190);await _0x3803eb[_0x50b556(0xfd)]();};function a376_0x5b18(){const _0x3ad277=['994645tkgTNY','4869iZzahf','234VDKmzB','3586MGLvQd','323409QVfBvv','default','destroy','2592skuNte','20CHCplT','status','1574548CVAekH','findOne','5521912OSkWZg','__esModule','14pneJdR','Não\x20é\x20permitido\x20excluir\x20campanha\x20em\x20andamento','960858dvEYap','defineProperty'];a376_0x5b18=function(){return _0x3ad277;};return a376_0x5b18();}exports[a376_0x39d780(0xfc)]=DeleteService;