'use strict';function a544_0x4850(){const _0x20b010=['literal','4523701PGacXN','findOne','54410EeUZsf','default','12226872ljrptR','8uomFzp','8662269qpqZLX','../../errors/AppError','225ZuYGAb','181694CYeZnP','351921dUlzkP','__esModule','6YlLnXR','ERR_NOT_FOUND_USER_IN_QUEUE','96phWkIH','defineProperty','4jbGoaZ','78415GExilC','../../models/UserQueue','__importDefault','sequelize'];a544_0x4850=function(){return _0x20b010;};return a544_0x4850();}const a544_0x619339=a544_0x3f83;(function(_0x22cb86,_0x46e60f){const _0x4ae5c8=a544_0x3f83,_0x5b48d9=_0x22cb86();while(!![]){try{const _0x3792f3=-parseInt(_0x4ae5c8(0x13e))/0x1*(-parseInt(_0x4ae5c8(0x141))/0x2)+parseInt(_0x4ae5c8(0x13f))/0x3*(-parseInt(_0x4ae5c8(0x145))/0x4)+parseInt(_0x4ae5c8(0x146))/0x5*(parseInt(_0x4ae5c8(0x143))/0x6)+parseInt(_0x4ae5c8(0x135))/0x7*(-parseInt(_0x4ae5c8(0x13a))/0x8)+-parseInt(_0x4ae5c8(0x13d))/0x9*(-parseInt(_0x4ae5c8(0x137))/0xa)+-parseInt(_0x4ae5c8(0x13b))/0xb+parseInt(_0x4ae5c8(0x139))/0xc;if(_0x3792f3===_0x46e60f)break;else _0x5b48d9['push'](_0x5b48d9['shift']());}catch(_0x5ed303){_0x5b48d9['push'](_0x5b48d9['shift']());}}}(a544_0x4850,0x61a28));var __importDefault=this&&this[a544_0x619339(0x132)]||function(_0x51f7b2){const _0x49797e=a544_0x619339;return _0x51f7b2&&_0x51f7b2[_0x49797e(0x140)]?_0x51f7b2:{'default':_0x51f7b2};};Object[a544_0x619339(0x144)](exports,a544_0x619339(0x140),{'value':!![]});function a544_0x3f83(_0x134835,_0x28b873){const _0x4850d4=a544_0x4850();return a544_0x3f83=function(_0x3f834b,_0x50ead3){_0x3f834b=_0x3f834b-0x132;let _0x45f146=_0x4850d4[_0x3f834b];return _0x45f146;},a544_0x3f83(_0x134835,_0x28b873);}const sequelize_1=require(a544_0x619339(0x133)),AppError_1=__importDefault(require(a544_0x619339(0x13c))),UserQueue_1=__importDefault(require(a544_0x619339(0x147))),ListUserQueueServices=async _0x338982=>{const _0x16521d=a544_0x619339,_0x174def=await UserQueue_1[_0x16521d(0x138)][_0x16521d(0x136)]({'where':{'queueId':{[sequelize_1['Op']['or']]:[_0x338982]}},'order':sequelize_1['Sequelize'][_0x16521d(0x134)]('random()')});if(!_0x174def)throw new AppError_1[(_0x16521d(0x138))](_0x16521d(0x142),0x194);return _0x174def;};exports[a544_0x619339(0x138)]=ListUserQueueServices;