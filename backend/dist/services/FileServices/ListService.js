'use strict';const a453_0x3d72bf=a453_0x4176;function a453_0x4176(_0x4d396e,_0x439465){const _0x44ef0e=a453_0x44ef();return a453_0x4176=function(_0x4176e2,_0x3862c7){_0x4176e2=_0x4176e2-0x123;let _0x1a68c5=_0x44ef0e[_0x4176e2];return _0x1a68c5;},a453_0x4176(_0x4d396e,_0x439465);}(function(_0x451789,_0x1c5881){const _0x3db1fc=a453_0x4176,_0x2b5022=_0x451789();while(!![]){try{const _0x2f9f49=-parseInt(_0x3db1fc(0x12a))/0x1*(-parseInt(_0x3db1fc(0x12b))/0x2)+-parseInt(_0x3db1fc(0x130))/0x3*(parseInt(_0x3db1fc(0x128))/0x4)+-parseInt(_0x3db1fc(0x131))/0x5+parseInt(_0x3db1fc(0x132))/0x6+parseInt(_0x3db1fc(0x133))/0x7*(parseInt(_0x3db1fc(0x124))/0x8)+parseInt(_0x3db1fc(0x12f))/0x9*(-parseInt(_0x3db1fc(0x12d))/0xa)+parseInt(_0x3db1fc(0x137))/0xb;if(_0x2f9f49===_0x1c5881)break;else _0x2b5022['push'](_0x2b5022['shift']());}catch(_0x2c483a){_0x2b5022['push'](_0x2b5022['shift']());}}}(a453_0x44ef,0xb4c4a));function a453_0x44ef(){const _0x2eb75e=['length','findAndCountAll','102356MzIosx','__esModule','4079UoqIOY','218lmBAbJ','name','10VNXWiV','default','11219931MBWdFG','150JotiCi','1947710miQJTU','6895608vOyoGo','10227GCRGfM','defineProperty','__importDefault','like','20932439rzKQBF','ASC','872qbRqIZ','sequelize'];a453_0x44ef=function(){return _0x2eb75e;};return a453_0x44ef();}var __importDefault=this&&this[a453_0x3d72bf(0x135)]||function(_0x1c95fa){const _0x4c6a61=a453_0x3d72bf;return _0x1c95fa&&_0x1c95fa[_0x4c6a61(0x129)]?_0x1c95fa:{'default':_0x1c95fa};};Object[a453_0x3d72bf(0x134)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a453_0x3d72bf(0x125)),Files_1=__importDefault(require('../../models/Files')),ListService=async({searchParam:_0xef877c,pageNumber:pageNumber='1',companyId:_0x4ffc6b})=>{const _0x497cf7=a453_0x3d72bf;let _0x1d80fe={};const _0x24b121=0x14,_0x25b8b8=_0x24b121*(+pageNumber-0x1);_0xef877c&&(_0x1d80fe={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0x497cf7(0x136)]]:'%'+_0xef877c+'%'}}]});const {count:_0x1aac39,rows:_0x27c201}=await Files_1[_0x497cf7(0x12e)][_0x497cf7(0x127)]({'where':{'companyId':_0x4ffc6b,..._0x1d80fe},'limit':_0x24b121,'offset':_0x25b8b8,'order':[[_0x497cf7(0x12c),_0x497cf7(0x123)]]}),_0x150cff=_0x1aac39>_0x25b8b8+_0x27c201[_0x497cf7(0x126)];return{'files':_0x27c201,'count':_0x1aac39,'hasMore':_0x150cff};};exports[a453_0x3d72bf(0x12e)]=ListService;