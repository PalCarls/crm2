'use strict';const a473_0x759525=a473_0x1ceb;(function(_0x146398,_0x5f5db0){const _0x24d787=a473_0x1ceb,_0x38e0fb=_0x146398();while(!![]){try{const _0x47e757=-parseInt(_0x24d787(0x1d1))/0x1+parseInt(_0x24d787(0x1cc))/0x2+parseInt(_0x24d787(0x1e0))/0x3*(-parseInt(_0x24d787(0x1eb))/0x4)+parseInt(_0x24d787(0x1ea))/0x5*(parseInt(_0x24d787(0x1d6))/0x6)+-parseInt(_0x24d787(0x1c7))/0x7+parseInt(_0x24d787(0x1ce))/0x8*(-parseInt(_0x24d787(0x1de))/0x9)+parseInt(_0x24d787(0x1e4))/0xa*(parseInt(_0x24d787(0x1dc))/0xb);if(_0x47e757===_0x5f5db0)break;else _0x38e0fb['push'](_0x38e0fb['shift']());}catch(_0x33ffd6){_0x38e0fb['push'](_0x38e0fb['shift']());}}}(a473_0x3869,0x3af3a));var __importDefault=this&&this['__importDefault']||function(_0x42f442){const _0x586b5b=a473_0x1ceb;return _0x42f442&&_0x42f442[_0x586b5b(0x1d3)]?_0x42f442:{'default':_0x42f442};};Object[a473_0x759525(0x1ca)](exports,a473_0x759525(0x1d3),{'value':!![]});const sequelize_1=require(a473_0x759525(0x1e7)),Contact_1=__importDefault(require('../../models/Contact')),Ticket_1=__importDefault(require(a473_0x759525(0x1df))),ContactTag_1=__importDefault(require(a473_0x759525(0x1c9))),lodash_1=require(a473_0x759525(0x1e8)),Tag_1=__importDefault(require(a473_0x759525(0x1e9))),remove_accents_1=__importDefault(require(a473_0x759525(0x1d5))),ListContactsService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x27f3b6,tagsIds:_0x3503e4,isGroup:_0xe3a8d8})=>{const _0x27680c=a473_0x759525,_0xda1e87=(0x0,remove_accents_1[_0x27680c(0x1da)])(searchParam[_0x27680c(0x1c8)]()['trim']());let _0x39b00b={[sequelize_1['Op']['or']]:[{'name':(0x0,sequelize_1[_0x27680c(0x1db)])((0x0,sequelize_1['fn'])(_0x27680c(0x1e3),(0x0,sequelize_1['fn'])(_0x27680c(0x1d2),(0x0,sequelize_1[_0x27680c(0x1ec)])('Contact.name'))),_0x27680c(0x1d9),'%'+_0xda1e87+'%')},{'number':{[sequelize_1['Op'][_0x27680c(0x1e5)]]:'%'+_0xda1e87+'%'}}]};_0x39b00b={..._0x39b00b,'companyId':_0x27f3b6};if(Array['isArray'](_0x3503e4)&&_0x3503e4['length']>0x0){const _0x560ea2=[],_0x2a7207=await ContactTag_1['default'][_0x27680c(0x1ed)]({'where':{'tagId':{[sequelize_1['Op']['in']]:_0x3503e4}}});_0x2a7207&&_0x560ea2[_0x27680c(0x1d4)](_0x2a7207[_0x27680c(0x1e6)](_0x224dfb=>_0x224dfb['contactId']));const _0x2e1353=(0x0,lodash_1[_0x27680c(0x1dd)])(..._0x560ea2);_0x39b00b={..._0x39b00b,'id':{[sequelize_1['Op']['in']]:_0x2e1353}};}_0xe3a8d8==='false'&&(_0x39b00b={..._0x39b00b,'isGroup':![]});const _0x4bf639=0x64,_0x3dd268=_0x4bf639*(+pageNumber-0x1),{count:_0x56ee62,rows:_0x4a59dd}=await Contact_1[_0x27680c(0x1da)][_0x27680c(0x1d7)]({'where':_0x39b00b,'limit':_0x4bf639,'include':[{'model':Ticket_1['default'],'as':_0x27680c(0x1c6),'attributes':['id',_0x27680c(0x1e2),_0x27680c(0x1e1),_0x27680c(0x1d8)],'limit':0x1,'order':[[_0x27680c(0x1d8),_0x27680c(0x1d0)]]},{'model':Tag_1['default'],'as':_0x27680c(0x1cf),'attributes':['id',_0x27680c(0x1cb)]}],'offset':_0x3dd268,'order':[[_0x27680c(0x1cb),'ASC']]}),_0x9da9ba=_0x56ee62>_0x3dd268+_0x4a59dd[_0x27680c(0x1cd)];return{'contacts':_0x4a59dd,'count':_0x56ee62,'hasMore':_0x9da9ba};};function a473_0x1ceb(_0x2e0828,_0x12d598){const _0x3869fe=a473_0x3869();return a473_0x1ceb=function(_0x1cebdf,_0x16af36){_0x1cebdf=_0x1cebdf-0x1c6;let _0x3a7969=_0x3869fe[_0x1cebdf];return _0x3a7969;},a473_0x1ceb(_0x2e0828,_0x12d598);}exports[a473_0x759525(0x1da)]=ListContactsService;function a473_0x3869(){const _0x38f1d6=['1733930twaEpc','like','map','sequelize','lodash','../../models/Tag','5aAYNVG','76180sDDwFP','col','findAll','tickets','901803ZYsiGf','toLocaleLowerCase','../../models/ContactTag','defineProperty','name','919972OgUgpe','length','16DOpyWe','tags','DESC','25788IlrgbZ','unaccent','__esModule','push','remove-accents','1839606VxSJDF','findAndCountAll','updatedAt','LIKE','default','where','11CEIPQE','intersection','304974VLHQgT','../../models/Ticket','75RaNOPV','createdAt','status','LOWER'];a473_0x3869=function(){return _0x38f1d6;};return a473_0x3869();}