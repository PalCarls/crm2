'use strict';const a583_0x2c8caa=a583_0x4205;(function(_0x308920,_0x1cacb){const _0x183a09=a583_0x4205,_0x590a10=_0x308920();while(!![]){try{const _0x4d1560=parseInt(_0x183a09(0x17a))/0x1+parseInt(_0x183a09(0x181))/0x2+parseInt(_0x183a09(0x18f))/0x3+parseInt(_0x183a09(0x18e))/0x4*(-parseInt(_0x183a09(0x172))/0x5)+-parseInt(_0x183a09(0x175))/0x6+parseInt(_0x183a09(0x183))/0x7*(-parseInt(_0x183a09(0x179))/0x8)+-parseInt(_0x183a09(0x188))/0x9*(-parseInt(_0x183a09(0x18b))/0xa);if(_0x4d1560===_0x1cacb)break;else _0x590a10['push'](_0x590a10['shift']());}catch(_0x3278fe){_0x590a10['push'](_0x590a10['shift']());}}}(a583_0x1424,0xd0d92));var __importDefault=this&&this['__importDefault']||function(_0xdbbad0){const _0x3409e2=a583_0x4205;return _0xdbbad0&&_0xdbbad0[_0x3409e2(0x186)]?_0xdbbad0:{'default':_0xdbbad0};};Object[a583_0x2c8caa(0x174)](exports,a583_0x2c8caa(0x186),{'value':!![]});function a583_0x4205(_0x525102,_0x1e6559){const _0x14240d=a583_0x1424();return a583_0x4205=function(_0x4205ef,_0x44c5ff){_0x4205ef=_0x4205ef-0x172;let _0x12ac48=_0x14240d[_0x4205ef];return _0x12ac48;},a583_0x4205(_0x525102,_0x1e6559);}const sequelize_1=require('sequelize'),Tag_1=__importDefault(require(a583_0x2c8caa(0x190))),ContactTag_1=__importDefault(require(a583_0x2c8caa(0x17e))),TicketTag_1=__importDefault(require('../../models/TicketTag')),remove_accents_1=__importDefault(require(a583_0x2c8caa(0x17f))),ListService=async({companyId:_0x346c1b,searchParam:searchParam='',pageNumber:pageNumber='1',kanban:kanban=0x0})=>{const _0x2c94be=a583_0x2c8caa;let _0x1ff839={};const _0x2b54ab=0x14,_0x44d26a=_0x2b54ab*(+pageNumber-0x1),_0x2d6928=(0x0,remove_accents_1[_0x2c94be(0x18c)])(searchParam[_0x2c94be(0x184)]()[_0x2c94be(0x180)]());if(Number(kanban)===0x0){searchParam&&(_0x1ff839={[sequelize_1['Op']['or']]:[{'name':sequelize_1[_0x2c94be(0x178)][_0x2c94be(0x176)](sequelize_1[_0x2c94be(0x178)]['fn'](_0x2c94be(0x17b),sequelize_1[_0x2c94be(0x178)][_0x2c94be(0x17c)](_0x2c94be(0x173))),_0x2c94be(0x17d),'%'+_0x2d6928+'%')},{'color':{[sequelize_1['Op'][_0x2c94be(0x187)]]:'%'+_0x2d6928+'%'}}]});const {count:_0xe8c106,rows:_0x4588e2}=await Tag_1[_0x2c94be(0x18c)]['findAndCountAll']({'where':{..._0x1ff839,'companyId':_0x346c1b,'kanban':kanban},'limit':_0x2b54ab,'include':[{'model':ContactTag_1['default'],'as':_0x2c94be(0x185)}],'attributes':['id',_0x2c94be(0x182),_0x2c94be(0x18a)],'offset':_0x44d26a,'order':[[_0x2c94be(0x182),_0x2c94be(0x177)]]}),_0x15261d=_0xe8c106>_0x44d26a+_0x4588e2[_0x2c94be(0x189)];return{'tags':_0x4588e2,'count':_0xe8c106,'hasMore':_0x15261d};}else{searchParam&&(_0x1ff839={[sequelize_1['Op']['or']]:[{'name':sequelize_1[_0x2c94be(0x178)][_0x2c94be(0x176)](sequelize_1[_0x2c94be(0x178)]['fn'](_0x2c94be(0x17b),sequelize_1[_0x2c94be(0x178)][_0x2c94be(0x17c)](_0x2c94be(0x173))),_0x2c94be(0x17d),'%'+_0x2d6928+'%')},{'color':{[sequelize_1['Op'][_0x2c94be(0x187)]]:'%'+_0x2d6928+'%'}}]});const {count:_0x100a3e,rows:_0x167cd0}=await Tag_1['default']['findAndCountAll']({'where':{..._0x1ff839,'companyId':_0x346c1b,'kanban':kanban},'limit':_0x2b54ab,'offset':_0x44d26a,'order':[[_0x2c94be(0x182),_0x2c94be(0x177)]],'include':[{'model':TicketTag_1[_0x2c94be(0x18c)],'as':_0x2c94be(0x18d)}],'attributes':['id',_0x2c94be(0x182),_0x2c94be(0x18a)]}),_0x5630e0=_0x100a3e>_0x44d26a+_0x167cd0[_0x2c94be(0x189)];return{'tags':_0x167cd0,'count':_0x100a3e,'hasMore':_0x5630e0};}};exports[a583_0x2c8caa(0x18c)]=ListService;function a583_0x1424(){const _0xeb3a1a=['1025630FocmXg','name','6419847Thzbek','toLocaleLowerCase','contactTags','__esModule','like','81bgldKD','length','color','219710EEqDIx','default','ticketTags','1775084epwuDm','1597332MiHLiQ','../../models/Tag','5IdfzHH','Tag.name','defineProperty','3681096UsyuYP','where','ASC','Sequelize','8YHjqkO','1586852IaLFAa','LOWER','col','LIKE','../../models/ContactTag','remove-accents','trim'];a583_0x1424=function(){return _0xeb3a1a;};return a583_0x1424();}