'use strict';const a556_0x5cb781=a556_0x263b;(function(_0x586598,_0x45f376){const _0x46c6c3=a556_0x263b,_0x2c0998=_0x586598();while(!![]){try{const _0x4be88c=-parseInt(_0x46c6c3(0x1c1))/0x1*(-parseInt(_0x46c6c3(0x1cd))/0x2)+parseInt(_0x46c6c3(0x1c0))/0x3*(-parseInt(_0x46c6c3(0x1cc))/0x4)+-parseInt(_0x46c6c3(0x1c5))/0x5+-parseInt(_0x46c6c3(0x1c8))/0x6*(parseInt(_0x46c6c3(0x1ba))/0x7)+parseInt(_0x46c6c3(0x1be))/0x8+-parseInt(_0x46c6c3(0x1c3))/0x9+parseInt(_0x46c6c3(0x1cb))/0xa;if(_0x4be88c===_0x45f376)break;else _0x2c0998['push'](_0x2c0998['shift']());}catch(_0x55feea){_0x2c0998['push'](_0x2c0998['shift']());}}}(a556_0x15dc,0x5e33e));function a556_0x263b(_0xdf0cab,_0x18d0e5){const _0x15dc21=a556_0x15dc();return a556_0x263b=function(_0x263bd5,_0x53f1f2){_0x263bd5=_0x263bd5-0x1ba;let _0x2ef9f7=_0x15dc21[_0x263bd5];return _0x2ef9f7;},a556_0x263b(_0xdf0cab,_0x18d0e5);}var __importDefault=this&&this[a556_0x5cb781(0x1ca)]||function(_0x1e7ce9){const _0x5172e3=a556_0x5cb781;return _0x1e7ce9&&_0x1e7ce9[_0x5172e3(0x1c6)]?_0x1e7ce9:{'default':_0x1e7ce9};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const User_1=__importDefault(require('../../models/User')),AppError_1=__importDefault(require(a556_0x5cb781(0x1bf))),Queue_1=__importDefault(require(a556_0x5cb781(0x1c7))),SimpleListService=async({companyId:_0x5934f4})=>{const _0xc70b58=a556_0x5cb781,_0x26ca2a=await User_1[_0xc70b58(0x1c4)][_0xc70b58(0x1c2)]({'where':{'companyId':_0x5934f4},'attributes':['name','id',_0xc70b58(0x1bd)],'include':[{'model':Queue_1['default'],'as':_0xc70b58(0x1c9)}],'order':[['id',_0xc70b58(0x1bc)]]});if(!_0x26ca2a)throw new AppError_1['default'](_0xc70b58(0x1bb),0x194);return _0x26ca2a;};exports[a556_0x5cb781(0x1c4)]=SimpleListService;function a556_0x15dc(){const _0x47b054=['ASC','email','797000zvLZfu','../../errors/AppError','56094SwXMiP','2wkxKMD','findAll','5371605bGIYCR','default','2743720cmzjxh','__esModule','../../models/Queue','1572hJugnK','queues','__importDefault','17664960zzWwwx','24qHHASz','306226PweQEO','14126uvivzL','ERR_NO_USER_FOUND'];a556_0x15dc=function(){return _0x47b054;};return a556_0x15dc();}