'use strict';const a420_0x374600=a420_0x192e;function a420_0x192e(_0x49d8b9,_0x1fa459){const _0x7e3bd1=a420_0x7e3b();return a420_0x192e=function(_0x192e00,_0x243992){_0x192e00=_0x192e00-0xe1;let _0x192f56=_0x7e3bd1[_0x192e00];return _0x192f56;},a420_0x192e(_0x49d8b9,_0x1fa459);}(function(_0x2582df,_0x30cf26){const _0x32c7c7=a420_0x192e,_0x12eed4=_0x2582df();while(!![]){try{const _0x12e9f3=parseInt(_0x32c7c7(0xec))/0x1*(parseInt(_0x32c7c7(0xf7))/0x2)+-parseInt(_0x32c7c7(0xf3))/0x3*(-parseInt(_0x32c7c7(0xf9))/0x4)+parseInt(_0x32c7c7(0xff))/0x5+-parseInt(_0x32c7c7(0xef))/0x6+parseInt(_0x32c7c7(0xfa))/0x7*(-parseInt(_0x32c7c7(0xfc))/0x8)+parseInt(_0x32c7c7(0x107))/0x9*(-parseInt(_0x32c7c7(0xea))/0xa)+-parseInt(_0x32c7c7(0xe1))/0xb*(parseInt(_0x32c7c7(0xfe))/0xc);if(_0x12e9f3===_0x30cf26)break;else _0x12eed4['push'](_0x12eed4['shift']());}catch(_0x393cb6){_0x12eed4['push'](_0x12eed4['shift']());}}}(a420_0x7e3b,0xc1ff0));function a420_0x7e3b(){const _0x2f8bfe=['ASC','contactId','col','../../models/Tag','1107QPTCpl','11MSZFlb','../../models/Ticket','tags','sequelize','findAndCountAll','../../models/Contact','tickets','Contact.name','map','91570DeXrcB','false','7KgRpsm','trim','Sequelize','2154642SSYRtd','toLowerCase','where','createdAt','192eynjCR','status','updatedAt','default','405472vJyXJu','push','86500Ivqjck','3061177jOqkmy','intersection','8DubWgq','../../models/ContactTag','11121168drbrOD','4204745sbJkGV','findAll','length','LOWER'];a420_0x7e3b=function(){return _0x2f8bfe;};return a420_0x7e3b();}var __importDefault=this&&this['__importDefault']||function(_0x52545e){return _0x52545e&&_0x52545e['__esModule']?_0x52545e:{'default':_0x52545e};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=require(a420_0x374600(0xe4)),Contact_1=__importDefault(require(a420_0x374600(0xe6))),Ticket_1=__importDefault(require(a420_0x374600(0xe2))),ContactTag_1=__importDefault(require(a420_0x374600(0xfd))),lodash_1=require('lodash'),Tag_1=__importDefault(require(a420_0x374600(0x106))),ListContactsService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x5aa740,tagsIds:_0x4a3973,isGroup:_0x4cb7aa})=>{const _0x599e8c=a420_0x374600;let _0x3f16e0={[sequelize_1['Op']['or']]:[{'name':sequelize_1[_0x599e8c(0xee)][_0x599e8c(0xf1)](sequelize_1[_0x599e8c(0xee)]['fn'](_0x599e8c(0x102),sequelize_1['Sequelize'][_0x599e8c(0x105)](_0x599e8c(0xe8))),'LIKE','%'+searchParam[_0x599e8c(0xf0)]()[_0x599e8c(0xed)]()+'%')},{'number':{[sequelize_1['Op']['like']]:'%'+searchParam[_0x599e8c(0xf0)]()['trim']()+'%'}}]};_0x3f16e0={..._0x3f16e0,'companyId':_0x5aa740};if(Array['isArray'](_0x4a3973)&&_0x4a3973[_0x599e8c(0x101)]>0x0){const _0x381ee8=[],_0x10eec8=await ContactTag_1[_0x599e8c(0xf6)][_0x599e8c(0x100)]({'where':{'tagId':{[sequelize_1['Op']['in']]:_0x4a3973}}});_0x10eec8&&_0x381ee8[_0x599e8c(0xf8)](_0x10eec8[_0x599e8c(0xe9)](_0x23a50e=>_0x23a50e[_0x599e8c(0x104)]));const _0x207375=(0x0,lodash_1[_0x599e8c(0xfb)])(..._0x381ee8);_0x3f16e0={..._0x3f16e0,'id':{[sequelize_1['Op']['in']]:_0x207375}};}_0x4cb7aa===_0x599e8c(0xeb)&&(_0x3f16e0={..._0x3f16e0,'isGroup':![]});const _0x2d0c74=0x64,_0x3851b7=_0x2d0c74*(+pageNumber-0x1),{count:_0x5893b3,rows:_0x2b513b}=await Contact_1[_0x599e8c(0xf6)][_0x599e8c(0xe5)]({'where':_0x3f16e0,'limit':_0x2d0c74,'include':[{'model':Ticket_1[_0x599e8c(0xf6)],'as':_0x599e8c(0xe7),'attributes':['id',_0x599e8c(0xf4),_0x599e8c(0xf2),_0x599e8c(0xf5)]},{'model':Tag_1[_0x599e8c(0xf6)],'as':_0x599e8c(0xe3)}],'offset':_0x3851b7,'order':[['name',_0x599e8c(0x103)]]}),_0x28ecf3=_0x5893b3>_0x3851b7+_0x2b513b['length'];return{'contacts':_0x2b513b,'count':_0x5893b3,'hasMore':_0x28ecf3};};exports[a420_0x374600(0xf6)]=ListContactsService;