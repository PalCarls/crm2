'use strict';const a554_0x3e5dee=a554_0x110a;function a554_0x110a(_0x2c937e,_0x5e4e64){const _0x14dadb=a554_0x14da();return a554_0x110a=function(_0x110a92,_0xa7615e){_0x110a92=_0x110a92-0x175;let _0x59bff7=_0x14dadb[_0x110a92];return _0x59bff7;},a554_0x110a(_0x2c937e,_0x5e4e64);}function a554_0x14da(){const _0x5460c2=['52GLBaLa','6BhqpbC','default','9822PioJUH','__importDefault','../../models/Schedule','8943610DChMoU','2492602ogIafy','1808392xpKRmi','696ifzDtV','32409hxApOO','defineProperty','__esModule','70383qpJSyE','921125fZFdsZ'];a554_0x14da=function(){return _0x5460c2;};return a554_0x14da();}(function(_0xa27edf,_0x335e7d){const _0x129956=a554_0x110a,_0x3dd576=_0xa27edf();while(!![]){try{const _0x36c62a=-parseInt(_0x129956(0x17a))/0x1+-parseInt(_0x129956(0x17c))/0x2*(-parseInt(_0x129956(0x17f))/0x3)+-parseInt(_0x129956(0x175))/0x4+-parseInt(_0x129956(0x17b))/0x5*(parseInt(_0x129956(0x17d))/0x6)+-parseInt(_0x129956(0x183))/0x7+parseInt(_0x129956(0x176))/0x8*(parseInt(_0x129956(0x177))/0x9)+parseInt(_0x129956(0x182))/0xa;if(_0x36c62a===_0x335e7d)break;else _0x3dd576['push'](_0x3dd576['shift']());}catch(_0x5e0bc7){_0x3dd576['push'](_0x3dd576['shift']());}}}(a554_0x14da,0x3825c));var __importDefault=this&&this[a554_0x3e5dee(0x180)]||function(_0xf02c6){return _0xf02c6&&_0xf02c6['__esModule']?_0xf02c6:{'default':_0xf02c6};};Object[a554_0x3e5dee(0x178)](exports,a554_0x3e5dee(0x179),{'value':!![]});const Schedule_1=__importDefault(require(a554_0x3e5dee(0x181))),AppError_1=__importDefault(require('../../errors/AppError')),DeleteService=async(_0x3305db,_0x11912c)=>{const _0x382f94=a554_0x3e5dee,_0x336f27=await Schedule_1[_0x382f94(0x17e)]['findOne']({'where':{'id':_0x3305db,'companyId':_0x11912c}});if(!_0x336f27)throw new AppError_1[(_0x382f94(0x17e))]('ERR_NO_SCHEDULE_FOUND',0x194);await _0x336f27['destroy']();};exports['default']=DeleteService;