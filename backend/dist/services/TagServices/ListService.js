'use strict';const a469_0x8c7df=a469_0x2b36;(function(_0x10d964,_0x4ca511){const _0x3908fd=a469_0x2b36,_0x43571d=_0x10d964();while(!![]){try{const _0x2a2110=parseInt(_0x3908fd(0x1b7))/0x1*(-parseInt(_0x3908fd(0x1b9))/0x2)+parseInt(_0x3908fd(0x1bc))/0x3*(-parseInt(_0x3908fd(0x1aa))/0x4)+parseInt(_0x3908fd(0x1ba))/0x5+-parseInt(_0x3908fd(0x1b2))/0x6+-parseInt(_0x3908fd(0x1bd))/0x7+-parseInt(_0x3908fd(0x1ac))/0x8+parseInt(_0x3908fd(0x1af))/0x9*(parseInt(_0x3908fd(0x1bb))/0xa);if(_0x2a2110===_0x4ca511)break;else _0x43571d['push'](_0x43571d['shift']());}catch(_0x256de5){_0x43571d['push'](_0x43571d['shift']());}}}(a469_0x317f,0xca593));var __importDefault=this&&this[a469_0x8c7df(0x1ab)]||function(_0x1b21af){const _0x146b6d=a469_0x8c7df;return _0x1b21af&&_0x1b21af[_0x146b6d(0x1b1)]?_0x1b21af:{'default':_0x1b21af};};Object[a469_0x8c7df(0x1ae)](exports,a469_0x8c7df(0x1b1),{'value':!![]});const sequelize_1=require(a469_0x8c7df(0x1b8)),Tag_1=__importDefault(require(a469_0x8c7df(0x1bf))),ContactTag_1=__importDefault(require(a469_0x8c7df(0x1b3))),ListService=async({companyId:_0x20703c,searchParam:_0x41d699,pageNumber:pageNumber='1'})=>{const _0x3f3f09=a469_0x8c7df;let _0x442a8e={};const _0x4717a2=0x14,_0x4528a4=_0x4717a2*(+pageNumber-0x1);_0x41d699&&(_0x442a8e={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0x3f3f09(0x1c1)]]:'%'+_0x41d699+'%'}},{'color':{[sequelize_1['Op'][_0x3f3f09(0x1c1)]]:'%'+_0x41d699+'%'}}]});const {count:_0x3c1117,rows:_0x9749bd}=await Tag_1[_0x3f3f09(0x1be)][_0x3f3f09(0x1c0)]({'where':{..._0x442a8e,'companyId':_0x20703c},'limit':_0x4717a2,'offset':_0x4528a4,'order':[[_0x3f3f09(0x1a9),_0x3f3f09(0x1ad)]],'subQuery':![],'include':[{'model':ContactTag_1[_0x3f3f09(0x1be)],'as':'contactTags','attributes':[_0x3f3f09(0x1b0)]}],'group':[_0x3f3f09(0x1b5),_0x3f3f09(0x1b6),_0x3f3f09(0x1b4)]}),_0x1fc0b7=_0x3c1117>_0x4528a4+_0x9749bd['length'];return{'tags':_0x9749bd,'count':_0x3c1117,'hasMore':_0x1fc0b7};};function a469_0x2b36(_0x33f2b0,_0x8a735){const _0x317f8a=a469_0x317f();return a469_0x2b36=function(_0x2b360f,_0x1602c3){_0x2b360f=_0x2b360f-0x1a9;let _0x24cd3b=_0x317f8a[_0x2b360f];return _0x24cd3b;},a469_0x2b36(_0x33f2b0,_0x8a735);}exports[a469_0x8c7df(0x1be)]=ListService;function a469_0x317f(){const _0x322ae9=['__esModule','9381990uuemAX','../../models/ContactTag','contactTags.contactId','Tag.id','contactTags.tagId','5OHyBQo','sequelize','218398XGqVAa','1170055mckegm','50803860RsBFWG','285369bPcDbE','218001XdkeDe','default','../../models/Tag','findAndCountAll','like','name','40CIhUMa','__importDefault','11148360uoIQIT','ASC','defineProperty','9EfZnGR','tagId'];a469_0x317f=function(){return _0x322ae9;};return a469_0x317f();}