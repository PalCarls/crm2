'use strict';function a438_0x5482(){const _0x19f02f=['21cDYDcM','like','ASC','910122hcMHPv','961868ltQSOT','name','322264LelRgK','4668350riTNDk','4qGLsMM','findAndCountAll','default','__esModule','1598559jIskBF','sequelize','374570uRsAFc','2108979pllGjA','length','44QwyhkD','__importDefault','5YtLZJM'];a438_0x5482=function(){return _0x19f02f;};return a438_0x5482();}function a438_0x31b2(_0x3f23d8,_0x348a87){const _0x548203=a438_0x5482();return a438_0x31b2=function(_0x31b2e4,_0x686c3b){_0x31b2e4=_0x31b2e4-0xa7;let _0x56877f=_0x548203[_0x31b2e4];return _0x56877f;},a438_0x31b2(_0x3f23d8,_0x348a87);}const a438_0x5b3f0c=a438_0x31b2;(function(_0x1e924b,_0x46287c){const _0x387234=a438_0x31b2,_0x3c5ecb=_0x1e924b();while(!![]){try{const _0xf25a07=-parseInt(_0x387234(0xb3))/0x1+-parseInt(_0x387234(0xa9))/0x2+parseInt(_0x387234(0xb1))/0x3*(-parseInt(_0x387234(0xad))/0x4)+parseInt(_0x387234(0xb8))/0x5*(parseInt(_0x387234(0xa8))/0x6)+parseInt(_0x387234(0xb9))/0x7*(-parseInt(_0x387234(0xab))/0x8)+-parseInt(_0x387234(0xb4))/0x9+-parseInt(_0x387234(0xac))/0xa*(-parseInt(_0x387234(0xb6))/0xb);if(_0xf25a07===_0x46287c)break;else _0x3c5ecb['push'](_0x3c5ecb['shift']());}catch(_0x1c4155){_0x3c5ecb['push'](_0x3c5ecb['shift']());}}}(a438_0x5482,0x43422));var __importDefault=this&&this[a438_0x5b3f0c(0xb7)]||function(_0x200aab){const _0x3b4919=a438_0x5b3f0c;return _0x200aab&&_0x200aab[_0x3b4919(0xb0)]?_0x200aab:{'default':_0x200aab};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=require(a438_0x5b3f0c(0xb2)),Files_1=__importDefault(require('../../models/Files')),ListService=async({searchParam:_0xc8c3c2,pageNumber:pageNumber='1',companyId:_0x57b02a})=>{const _0xd75671=a438_0x5b3f0c;let _0x29a827={};const _0x4179dd=0x14,_0x135e64=_0x4179dd*(+pageNumber-0x1);_0xc8c3c2&&(_0x29a827={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0xd75671(0xba)]]:'%'+_0xc8c3c2+'%'}}]});const {count:_0x1c1792,rows:_0x18ac88}=await Files_1[_0xd75671(0xaf)][_0xd75671(0xae)]({'where':{'companyId':_0x57b02a,..._0x29a827},'limit':_0x4179dd,'offset':_0x135e64,'order':[[_0xd75671(0xaa),_0xd75671(0xa7)]]}),_0x350e87=_0x1c1792>_0x135e64+_0x18ac88[_0xd75671(0xb5)];return{'files':_0x18ac88,'count':_0x1c1792,'hasMore':_0x350e87};};exports[a438_0x5b3f0c(0xaf)]=ListService;