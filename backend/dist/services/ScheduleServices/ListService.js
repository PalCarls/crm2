'use strict';const a510_0x139c7e=a510_0x12d1;(function(_0x96eb3d,_0x3bb761){const _0x286180=a510_0x12d1,_0x29a705=_0x96eb3d();while(!![]){try{const _0x45a78e=-parseInt(_0x286180(0x10c))/0x1+-parseInt(_0x286180(0x11e))/0x2+-parseInt(_0x286180(0x115))/0x3*(parseInt(_0x286180(0x10a))/0x4)+-parseInt(_0x286180(0x121))/0x5*(parseInt(_0x286180(0x117))/0x6)+parseInt(_0x286180(0x113))/0x7+parseInt(_0x286180(0x11c))/0x8*(-parseInt(_0x286180(0x110))/0x9)+parseInt(_0x286180(0x11a))/0xa;if(_0x45a78e===_0x3bb761)break;else _0x29a705['push'](_0x29a705['shift']());}catch(_0x4e6768){_0x29a705['push'](_0x29a705['shift']());}}}(a510_0x26e5,0x49676));var __importDefault=this&&this[a510_0x139c7e(0x11b)]||function(_0x50b189){const _0x122723=a510_0x139c7e;return _0x50b189&&_0x50b189[_0x122723(0x114)]?_0x50b189:{'default':_0x50b189};};Object[a510_0x139c7e(0x112)](exports,a510_0x139c7e(0x114),{'value':!![]});function a510_0x26e5(){const _0x38d04b=['toLowerCase','../../models/Contact','54zzumOC','default','defineProperty','3474128nZLUpk','__esModule','3zURfAZ','where','18qcDeQe','unaccent','user','20520420tYRkUf','__importDefault','262952QBbfyZ','length','1096308iDJwhG','LOWER','sequelize','851465EtnAPO','col','../../models/User','contact.name','LIKE','createdAt','Schedule.body','2085268pLQXDN','name','470120vzdYeQ','../../models/Schedule'];a510_0x26e5=function(){return _0x38d04b;};return a510_0x26e5();}const sequelize_1=require(a510_0x139c7e(0x120)),Contact_1=__importDefault(require(a510_0x139c7e(0x10f))),Schedule_1=__importDefault(require(a510_0x139c7e(0x10d))),User_1=__importDefault(require(a510_0x139c7e(0x123))),ListService=async({searchParam:_0x2ad65a,contactId:contactId='',userId:userId='',pageNumber:pageNumber='1',companyId:_0x3bd60e})=>{const _0x4d8adc=a510_0x139c7e;let _0xbb26a9={};const _0x9df2b3=0x14,_0x1640a1=_0x9df2b3*(+pageNumber-0x1);_0x2ad65a&&(_0xbb26a9={[sequelize_1['Op']['or']]:[{'$Schedule.body$':(0x0,sequelize_1[_0x4d8adc(0x116)])((0x0,sequelize_1['fn'])(_0x4d8adc(0x11f),(0x0,sequelize_1[_0x4d8adc(0x122)])(_0x4d8adc(0x127))),_0x4d8adc(0x125),'%'+_0x2ad65a[_0x4d8adc(0x10e)]()+'%')},{'$Contact.name$':(0x0,sequelize_1[_0x4d8adc(0x116)])((0x0,sequelize_1['fn'])(_0x4d8adc(0x11f),(0x0,sequelize_1['fn'])(_0x4d8adc(0x118),(0x0,sequelize_1[_0x4d8adc(0x122)])(_0x4d8adc(0x124)))),_0x4d8adc(0x125),'%'+_0x2ad65a[_0x4d8adc(0x10e)]()+'%')}]});contactId!==''&&(_0xbb26a9={..._0xbb26a9,'contactId':contactId});userId!==''&&(_0xbb26a9={..._0xbb26a9,'userId':userId});_0xbb26a9={..._0xbb26a9,'companyId':{[sequelize_1['Op']['eq']]:_0x3bd60e}};const {count:_0x3ae2f7,rows:_0x3c4c7f}=await Schedule_1[_0x4d8adc(0x111)]['findAndCountAll']({'where':_0xbb26a9,'limit':_0x9df2b3,'offset':_0x1640a1,'order':[[_0x4d8adc(0x126),'DESC']],'include':[{'model':Contact_1[_0x4d8adc(0x111)],'as':'contact','attributes':['id','name']},{'model':User_1[_0x4d8adc(0x111)],'as':_0x4d8adc(0x119),'attributes':['id',_0x4d8adc(0x10b)]}]}),_0x397ed1=_0x3ae2f7>_0x1640a1+_0x3c4c7f[_0x4d8adc(0x11d)];return{'schedules':_0x3c4c7f,'count':_0x3ae2f7,'hasMore':_0x397ed1};};function a510_0x12d1(_0x16a1be,_0x4f288d){const _0x26e56d=a510_0x26e5();return a510_0x12d1=function(_0x12d145,_0x5b93e9){_0x12d145=_0x12d145-0x10a;let _0x32a426=_0x26e56d[_0x12d145];return _0x32a426;},a510_0x12d1(_0x16a1be,_0x4f288d);}exports[a510_0x139c7e(0x111)]=ListService;