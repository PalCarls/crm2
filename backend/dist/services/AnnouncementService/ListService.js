'use strict';const a317_0x16ed66=a317_0x52e2;function a317_0x423c(){const _0x6195d2=['default','2NBurlz','1285090mYfNjk','14449512NPlQUh','isEmpty','length','11llmQvN','LOWER','where','createdAt','findAndCountAll','112VnowWi','__importDefault','994278OhDozV','defineProperty','326580RLeTdm','359964rlqUIJ','357728JPiqHw','col','__esModule','81swGBBK','7mGzCHB','lodash','65840Oyqafb','toLowerCase'];a317_0x423c=function(){return _0x6195d2;};return a317_0x423c();}(function(_0xfd98bc,_0x572036){const _0x251302=a317_0x52e2,_0x1baba1=_0xfd98bc();while(!![]){try{const _0x4be09f=-parseInt(_0x251302(0x1da))/0x1*(parseInt(_0x251302(0x1e4))/0x2)+-parseInt(_0x251302(0x1d9))/0x3+-parseInt(_0x251302(0x1ee))/0x4*(parseInt(_0x251302(0x1e1))/0x5)+-parseInt(_0x251302(0x1f0))/0x6*(-parseInt(_0x251302(0x1df))/0x7)+-parseInt(_0x251302(0x1db))/0x8*(parseInt(_0x251302(0x1de))/0x9)+-parseInt(_0x251302(0x1e5))/0xa*(-parseInt(_0x251302(0x1e9))/0xb)+parseInt(_0x251302(0x1e6))/0xc;if(_0x4be09f===_0x572036)break;else _0x1baba1['push'](_0x1baba1['shift']());}catch(_0x36172b){_0x1baba1['push'](_0x1baba1['shift']());}}}(a317_0x423c,0x3f148));var __importDefault=this&&this[a317_0x16ed66(0x1ef)]||function(_0x19e9df){const _0x3da8e0=a317_0x16ed66;return _0x19e9df&&_0x19e9df[_0x3da8e0(0x1dd)]?_0x19e9df:{'default':_0x19e9df};};Object[a317_0x16ed66(0x1d8)](exports,a317_0x16ed66(0x1dd),{'value':!![]});const sequelize_1=require('sequelize'),lodash_1=require(a317_0x16ed66(0x1e0)),Announcement_1=__importDefault(require('../../models/Announcement')),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const _0x3e54f9=a317_0x16ed66;let _0x424c89={'status':!![]};!(0x0,lodash_1[_0x3e54f9(0x1e7)])(searchParam)&&(_0x424c89={..._0x424c89,[sequelize_1['Op']['or']]:[{'title':(0x0,sequelize_1[_0x3e54f9(0x1eb)])((0x0,sequelize_1['fn'])(_0x3e54f9(0x1ea),(0x0,sequelize_1[_0x3e54f9(0x1dc)])('Announcement.title')),'LIKE','%'+searchParam[_0x3e54f9(0x1e2)]()['trim']()+'%')}]});const _0x531b4c=0x14,_0x3ca232=_0x531b4c*(+pageNumber-0x1),{count:_0xa1aa58,rows:_0x34c875}=await Announcement_1[_0x3e54f9(0x1e3)][_0x3e54f9(0x1ed)]({'where':_0x424c89,'limit':_0x531b4c,'offset':_0x3ca232,'order':[[_0x3e54f9(0x1ec),'DESC']]}),_0x3fe5cf=_0xa1aa58>_0x3ca232+_0x34c875[_0x3e54f9(0x1e8)];return{'records':_0x34c875,'count':_0xa1aa58,'hasMore':_0x3fe5cf};};function a317_0x52e2(_0x294573,_0x522c0a){const _0x423cdf=a317_0x423c();return a317_0x52e2=function(_0x52e2c5,_0xc8facd){_0x52e2c5=_0x52e2c5-0x1d8;let _0x38eb4f=_0x423cdf[_0x52e2c5];return _0x38eb4f;},a317_0x52e2(_0x294573,_0x522c0a);}exports[a317_0x16ed66(0x1e3)]=ListService;