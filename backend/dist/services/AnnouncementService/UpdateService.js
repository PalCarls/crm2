'use strict';const a334_0x510964=a334_0x4d71;(function(_0x59c0a3,_0x4ac16c){const _0x1f9b49=a334_0x4d71,_0x546a87=_0x59c0a3();while(!![]){try{const _0x25b9da=parseInt(_0x1f9b49(0x72))/0x1+parseInt(_0x1f9b49(0x78))/0x2+-parseInt(_0x1f9b49(0x75))/0x3+-parseInt(_0x1f9b49(0x74))/0x4+parseInt(_0x1f9b49(0x76))/0x5*(parseInt(_0x1f9b49(0x79))/0x6)+-parseInt(_0x1f9b49(0x73))/0x7*(parseInt(_0x1f9b49(0x7f))/0x8)+parseInt(_0x1f9b49(0x7b))/0x9;if(_0x25b9da===_0x4ac16c)break;else _0x546a87['push'](_0x546a87['shift']());}catch(_0x303d09){_0x546a87['push'](_0x546a87['shift']());}}}(a334_0x1f50,0x4c057));function a334_0x4d71(_0x16e666,_0x57efe4){const _0x1f5092=a334_0x1f50();return a334_0x4d71=function(_0x4d7102,_0x2f00b5){_0x4d7102=_0x4d7102-0x72;let _0x5d59b0=_0x1f5092[_0x4d7102];return _0x5d59b0;},a334_0x4d71(_0x16e666,_0x57efe4);}function a334_0x1f50(){const _0x2ae80e=['1563714OIzyem','5SQoayC','default','507228RDibAm','3044034XWsqdx','__esModule','3812472iiLahg','__importDefault','update','../../errors/AppError','48yJseRW','68641jYTIYf','403823bdaSmG','297788EbJTXa'];a334_0x1f50=function(){return _0x2ae80e;};return a334_0x1f50();}var __importDefault=this&&this[a334_0x510964(0x7c)]||function(_0x4397fc){const _0x935caf=a334_0x510964;return _0x4397fc&&_0x4397fc[_0x935caf(0x7a)]?_0x4397fc:{'default':_0x4397fc};};Object['defineProperty'](exports,a334_0x510964(0x7a),{'value':!![]});const AppError_1=__importDefault(require(a334_0x510964(0x7e))),Announcement_1=__importDefault(require('../../models/Announcement')),UpdateService=async _0x31fe09=>{const _0x411492=a334_0x510964,{id:_0x34d477}=_0x31fe09,_0x5de6b1=await Announcement_1[_0x411492(0x77)]['findByPk'](_0x34d477);if(!_0x5de6b1)throw new AppError_1[(_0x411492(0x77))]('ERR_NO_ANNOUNCEMENT_FOUND',0x194);return await _0x5de6b1[_0x411492(0x7d)](_0x31fe09),_0x5de6b1;};exports['default']=UpdateService;