'use strict';function a488_0xc3c3(_0x1b9252,_0x40c838){const _0x54e6a4=a488_0x54e6();return a488_0xc3c3=function(_0xc3c396,_0x29cada){_0xc3c396=_0xc3c396-0x7b;let _0x2678d6=_0x54e6a4[_0xc3c396];return _0x2678d6;},a488_0xc3c3(_0x1b9252,_0x40c838);}const a488_0x2ce8b1=a488_0xc3c3;(function(_0x3420f7,_0x58e1d7){const _0x39fc5d=a488_0xc3c3,_0x42c855=_0x3420f7();while(!![]){try{const _0x4b9318=parseInt(_0x39fc5d(0x94))/0x1*(parseInt(_0x39fc5d(0x7d))/0x2)+-parseInt(_0x39fc5d(0x86))/0x3*(-parseInt(_0x39fc5d(0x96))/0x4)+parseInt(_0x39fc5d(0x84))/0x5+-parseInt(_0x39fc5d(0x8d))/0x6*(parseInt(_0x39fc5d(0x82))/0x7)+-parseInt(_0x39fc5d(0x8c))/0x8+-parseInt(_0x39fc5d(0x88))/0x9+parseInt(_0x39fc5d(0x91))/0xa;if(_0x4b9318===_0x58e1d7)break;else _0x42c855['push'](_0x42c855['shift']());}catch(_0x31c3ac){_0x42c855['push'](_0x42c855['shift']());}}}(a488_0x54e6,0x4114a));var __importDefault=this&&this[a488_0x2ce8b1(0x7c)]||function(_0x2e6b93){return _0x2e6b93&&_0x2e6b93['__esModule']?_0x2e6b93:{'default':_0x2e6b93};};function a488_0x54e6(){const _0x5e3ce2=['contacts.ContactTag.createdAt','245cYAgjj','contacts.ContactTag.contactId','1343880UYJaMt','updatedAt','194943piRvbg','COUNT','3926223zhPZMq','defineProperty','../../models/Tag','createdAt','2413912fVjuKp','45606bVaEFA','../../models/Contact','Sequelize','contactsCount','2568310jEYVKV','contacts','__esModule','38189batgCY','name','20MRpvHV','default','col','findAll','contacts.ContactTag.updatedAt','ASC','__importDefault','22ECftIC','contacts.id','contacts.ContactTag.tagId','sequelize'];a488_0x54e6=function(){return _0x5e3ce2;};return a488_0x54e6();}Object[a488_0x2ce8b1(0x89)](exports,a488_0x2ce8b1(0x93),{'value':!![]});const sequelize_1=require(a488_0x2ce8b1(0x80)),Tag_1=__importDefault(require(a488_0x2ce8b1(0x8a))),Contact_1=__importDefault(require(a488_0x2ce8b1(0x8e))),ListService=async({companyId:_0x24b41a,searchParam:_0x295042})=>{const _0x1b019d=a488_0x2ce8b1;let _0x1da8cb={};_0x295042&&(_0x1da8cb={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op']['like']]:'%'+_0x295042+'%'}},{'color':{[sequelize_1['Op']['like']]:'%'+_0x295042+'%'}}]});const _0x6d1e2=await Tag_1[_0x1b019d(0x97)][_0x1b019d(0x99)]({'where':{..._0x1da8cb,'companyId':_0x24b41a},'order':[[_0x1b019d(0x95),_0x1b019d(0x7b)]],'include':[{'model':Contact_1[_0x1b019d(0x97)],'as':_0x1b019d(0x92)}],'attributes':{'exclude':[_0x1b019d(0x8b),_0x1b019d(0x85)],'include':[[sequelize_1[_0x1b019d(0x8f)]['fn'](_0x1b019d(0x87),sequelize_1[_0x1b019d(0x8f)][_0x1b019d(0x98)](_0x1b019d(0x7e))),_0x1b019d(0x90)]]},'group':['Tag.id',_0x1b019d(0x7f),_0x1b019d(0x83),_0x1b019d(0x81),_0x1b019d(0x9a),_0x1b019d(0x7e)]});return _0x6d1e2;};exports['default']=ListService;