'use strict';const a461_0x354322=a461_0x577f;function a461_0x577f(_0x49999d,_0x279c60){const _0xeaf5d0=a461_0xeaf5();return a461_0x577f=function(_0x577f68,_0x48b693){_0x577f68=_0x577f68-0x1cd;let _0x2740b7=_0xeaf5d0[_0x577f68];return _0x2740b7;},a461_0x577f(_0x49999d,_0x279c60);}(function(_0x3a33a3,_0x1f5f2c){const _0x3ab3f4=a461_0x577f,_0x5758fe=_0x3a33a3();while(!![]){try{const _0x443b06=-parseInt(_0x3ab3f4(0x1df))/0x1*(-parseInt(_0x3ab3f4(0x1e4))/0x2)+parseInt(_0x3ab3f4(0x1e0))/0x3+parseInt(_0x3ab3f4(0x1d5))/0x4*(-parseInt(_0x3ab3f4(0x1d9))/0x5)+parseInt(_0x3ab3f4(0x1ce))/0x6+-parseInt(_0x3ab3f4(0x1cd))/0x7*(parseInt(_0x3ab3f4(0x1e1))/0x8)+-parseInt(_0x3ab3f4(0x1e6))/0x9*(parseInt(_0x3ab3f4(0x1e8))/0xa)+parseInt(_0x3ab3f4(0x1d1))/0xb;if(_0x443b06===_0x1f5f2c)break;else _0x5758fe['push'](_0x5758fe['shift']());}catch(_0x123398){_0x5758fe['push'](_0x5758fe['shift']());}}}(a461_0xeaf5,0x4ae7a));function a461_0xeaf5(){const _0x54e27c=['LIKE','LOWER','65VBmLke','default','col','__esModule','toLowerCase','where','17iVJJon','1657629wonoos','430832rCkaQq','DESC','createdAt','4786cqbyaJ','name','746208TGiYUB','Sequelize','50kOOMGQ','user','7kkzJiy','569394Yjrhbb','contact.name','length','1278860oVNuxI','../../models/User','contact','sequelize','8972XMLQno','Schedule.body'];a461_0xeaf5=function(){return _0x54e27c;};return a461_0xeaf5();}var __importDefault=this&&this['__importDefault']||function(_0x53b3a7){const _0x4d50d0=a461_0x577f;return _0x53b3a7&&_0x53b3a7[_0x4d50d0(0x1dc)]?_0x53b3a7:{'default':_0x53b3a7};};Object['defineProperty'](exports,a461_0x354322(0x1dc),{'value':!![]});const sequelize_1=require(a461_0x354322(0x1d4)),Contact_1=__importDefault(require('../../models/Contact')),Schedule_1=__importDefault(require('../../models/Schedule')),User_1=__importDefault(require(a461_0x354322(0x1d2))),ListService=async({searchParam:_0x5d5cf7,contactId:contactId='',userId:userId='',pageNumber:pageNumber='1',companyId:_0xb1de2b})=>{const _0x152acb=a461_0x354322;let _0x43d23a={};const _0x70f617=0x14,_0xcb5d20=_0x70f617*(+pageNumber-0x1);_0x5d5cf7&&(_0x43d23a={[sequelize_1['Op']['or']]:[{'$Schedule.body$':sequelize_1['Sequelize'][_0x152acb(0x1de)](sequelize_1['Sequelize']['fn'](_0x152acb(0x1d8),sequelize_1[_0x152acb(0x1e7)][_0x152acb(0x1db)](_0x152acb(0x1d6))),_0x152acb(0x1d7),'%'+_0x5d5cf7[_0x152acb(0x1dd)]()+'%')},{'$Contact.name$':sequelize_1[_0x152acb(0x1e7)][_0x152acb(0x1de)](sequelize_1[_0x152acb(0x1e7)]['fn'](_0x152acb(0x1d8),sequelize_1[_0x152acb(0x1e7)]['col'](_0x152acb(0x1cf))),_0x152acb(0x1d7),'%'+_0x5d5cf7[_0x152acb(0x1dd)]()+'%')}]});contactId!==''&&(_0x43d23a={..._0x43d23a,'contactId':contactId});userId!==''&&(_0x43d23a={..._0x43d23a,'userId':userId});_0x43d23a={..._0x43d23a,'companyId':{[sequelize_1['Op']['eq']]:_0xb1de2b}};const {count:_0x2ab416,rows:_0x572d08}=await Schedule_1['default']['findAndCountAll']({'where':_0x43d23a,'limit':_0x70f617,'offset':_0xcb5d20,'order':[[_0x152acb(0x1e3),_0x152acb(0x1e2)]],'include':[{'model':Contact_1[_0x152acb(0x1da)],'as':_0x152acb(0x1d3),'attributes':['id',_0x152acb(0x1e5)]},{'model':User_1[_0x152acb(0x1da)],'as':_0x152acb(0x1e9),'attributes':['id',_0x152acb(0x1e5)]}]}),_0x46cb52=_0x2ab416>_0xcb5d20+_0x572d08[_0x152acb(0x1d0)];return{'schedules':_0x572d08,'count':_0x2ab416,'hasMore':_0x46cb52};};exports[a461_0x354322(0x1da)]=ListService;