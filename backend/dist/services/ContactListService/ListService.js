'use strict';function a428_0x2b42(){const _0x5bf91d=['LIKE','ContactList.id','__esModule','unaccent','defineProperty','contacts.id','14493neJiPq','1xulwgs','name','958230osPeIR','default','788CsWmRN','toLocaleLowerCase','where','sequelize','findAndCountAll','col','8334886nBtRhy','ASC','lodash','length','16336836msOAmT','3076745Eexkoj','9424272jIABHI','ContactList.name','LOWER','856802dsXmyR','isEmpty'];a428_0x2b42=function(){return _0x5bf91d;};return a428_0x2b42();}function a428_0x3ba0(_0x4342e2,_0x1d8495){const _0x2b42be=a428_0x2b42();return a428_0x3ba0=function(_0x3ba07f,_0x566364){_0x3ba07f=_0x3ba07f-0x10a;let _0x21fd36=_0x2b42be[_0x3ba07f];return _0x21fd36;},a428_0x3ba0(_0x4342e2,_0x1d8495);}const a428_0x3af746=a428_0x3ba0;(function(_0x3ea6a3,_0x48c651){const _0x42c951=a428_0x3ba0,_0x1d5645=_0x3ea6a3();while(!![]){try{const _0x563072=parseInt(_0x42c951(0x122))/0x1*(parseInt(_0x42c951(0x119))/0x2)+-parseInt(_0x42c951(0x121))/0x3*(parseInt(_0x42c951(0x10a))/0x4)+-parseInt(_0x42c951(0x115))/0x5+parseInt(_0x42c951(0x124))/0x6+parseInt(_0x42c951(0x110))/0x7+-parseInt(_0x42c951(0x116))/0x8+parseInt(_0x42c951(0x114))/0x9;if(_0x563072===_0x48c651)break;else _0x1d5645['push'](_0x1d5645['shift']());}catch(_0xf87228){_0x1d5645['push'](_0x1d5645['shift']());}}}(a428_0x2b42,0xcf416));var __importDefault=this&&this['__importDefault']||function(_0x32951e){const _0x444db9=a428_0x3ba0;return _0x32951e&&_0x32951e[_0x444db9(0x11d)]?_0x32951e:{'default':_0x32951e};};Object[a428_0x3af746(0x11f)](exports,a428_0x3af746(0x11d),{'value':!![]});const sequelize_1=require(a428_0x3af746(0x10d)),ContactList_1=__importDefault(require('../../models/ContactList')),ContactListItem_1=__importDefault(require('../../models/ContactListItem')),lodash_1=require(a428_0x3af746(0x112)),remove_accents_1=__importDefault(require('remove-accents')),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x3ca64e})=>{const _0x4b4eeb=a428_0x3af746;let _0x247b35={'companyId':_0x3ca64e};if(!(0x0,lodash_1[_0x4b4eeb(0x11a)])(searchParam)){const _0x36a649=(0x0,remove_accents_1[_0x4b4eeb(0x125)])(searchParam[_0x4b4eeb(0x10b)]()['trim']());_0x247b35={..._0x247b35,[sequelize_1['Op']['or']]:[{'name':(0x0,sequelize_1[_0x4b4eeb(0x10c)])((0x0,sequelize_1['fn'])(_0x4b4eeb(0x118),(0x0,sequelize_1['fn'])(_0x4b4eeb(0x11e),(0x0,sequelize_1[_0x4b4eeb(0x10f)])(_0x4b4eeb(0x117)))),_0x4b4eeb(0x11b),'%'+_0x36a649+'%')}]};}const _0x135fe2=0x14,_0x10288e=_0x135fe2*(+pageNumber-0x1),{count:_0x2fd9aa,rows:_0xd065e9}=await ContactList_1[_0x4b4eeb(0x125)][_0x4b4eeb(0x10e)]({'where':_0x247b35,'limit':_0x135fe2,'offset':_0x10288e,'order':[[_0x4b4eeb(0x123),_0x4b4eeb(0x111)]],'subQuery':![],'include':[{'model':ContactListItem_1['default'],'as':'contacts','attributes':[],'required':![]}],'attributes':['id',_0x4b4eeb(0x123),[(0x0,sequelize_1['fn'])('count',(0x0,sequelize_1[_0x4b4eeb(0x10f)])(_0x4b4eeb(0x120))),'contactsCount']],'group':[_0x4b4eeb(0x11c)]}),_0x42e93b=_0x2fd9aa>_0x10288e+_0xd065e9[_0x4b4eeb(0x113)];return{'records':_0xd065e9,'count':_0x2fd9aa,'hasMore':_0x42e93b};};exports['default']=ListService;