'use strict';function a332_0x3e57(){const _0x59c714=['createdAt','Announcement.title','327066GkUfWt','where','sequelize','findAndCountAll','579430fnjeRh','617360oZQlhC','9mbRIiT','132NEWHNH','toLowerCase','DESC','col','565145GmgKFt','length','263082HKGSAb','9CUpezG','trim','8HMGOgM','3947356ngWKuT','default','lodash','1426632XnvjTa','LOWER','defineProperty','__esModule'];a332_0x3e57=function(){return _0x59c714;};return a332_0x3e57();}const a332_0x457d10=a332_0x56ff;(function(_0x33a99d,_0x125ee0){const _0x1eeaa6=a332_0x56ff,_0xb9dae6=_0x33a99d();while(!![]){try{const _0x28f0b4=parseInt(_0x1eeaa6(0x177))/0x1+-parseInt(_0x1eeaa6(0x179))/0x2*(parseInt(_0x1eeaa6(0x17a))/0x3)+-parseInt(_0x1eeaa6(0x17c))/0x4*(-parseInt(_0x1eeaa6(0x18b))/0x5)+-parseInt(_0x1eeaa6(0x186))/0x6+parseInt(_0x1eeaa6(0x17d))/0x7+parseInt(_0x1eeaa6(0x180))/0x8*(parseInt(_0x1eeaa6(0x18c))/0x9)+parseInt(_0x1eeaa6(0x18a))/0xa*(-parseInt(_0x1eeaa6(0x18d))/0xb);if(_0x28f0b4===_0x125ee0)break;else _0xb9dae6['push'](_0xb9dae6['shift']());}catch(_0x463c85){_0xb9dae6['push'](_0xb9dae6['shift']());}}}(a332_0x3e57,0x64114));var __importDefault=this&&this['__importDefault']||function(_0x35931d){const _0x52cb3c=a332_0x56ff;return _0x35931d&&_0x35931d[_0x52cb3c(0x183)]?_0x35931d:{'default':_0x35931d};};Object[a332_0x457d10(0x182)](exports,a332_0x457d10(0x183),{'value':!![]});const sequelize_1=require(a332_0x457d10(0x188)),lodash_1=require(a332_0x457d10(0x17f)),Announcement_1=__importDefault(require('../../models/Announcement')),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const _0xb8741=a332_0x457d10;let _0x541d2e={'status':!![]};!(0x0,lodash_1['isEmpty'])(searchParam)&&(_0x541d2e={..._0x541d2e,[sequelize_1['Op']['or']]:[{'title':(0x0,sequelize_1[_0xb8741(0x187)])((0x0,sequelize_1['fn'])(_0xb8741(0x181),(0x0,sequelize_1[_0xb8741(0x176)])(_0xb8741(0x185))),'LIKE','%'+searchParam[_0xb8741(0x174)]()[_0xb8741(0x17b)]()+'%')}]});const _0x12901e=0x14,_0x44d891=_0x12901e*(+pageNumber-0x1),{count:_0x160558,rows:_0x172a26}=await Announcement_1[_0xb8741(0x17e)][_0xb8741(0x189)]({'where':_0x541d2e,'limit':_0x12901e,'offset':_0x44d891,'order':[[_0xb8741(0x184),_0xb8741(0x175)]]}),_0x149b33=_0x160558>_0x44d891+_0x172a26[_0xb8741(0x178)];return{'records':_0x172a26,'count':_0x160558,'hasMore':_0x149b33};};function a332_0x56ff(_0x4c4dc4,_0x718e80){const _0x3e570a=a332_0x3e57();return a332_0x56ff=function(_0x56ffd7,_0xbefb68){_0x56ffd7=_0x56ffd7-0x174;let _0x3e16e4=_0x3e570a[_0x56ffd7];return _0x3e16e4;},a332_0x56ff(_0x4c4dc4,_0x718e80);}exports[a332_0x457d10(0x17e)]=ListService;