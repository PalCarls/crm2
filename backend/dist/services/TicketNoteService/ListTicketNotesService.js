'use strict';const a585_0xc7d477=a585_0x3790;(function(_0x39821f,_0x18ad72){const _0x34b61c=a585_0x3790,_0x1ca154=_0x39821f();while(!![]){try{const _0x5e8363=-parseInt(_0x34b61c(0xc0))/0x1+-parseInt(_0x34b61c(0xca))/0x2+parseInt(_0x34b61c(0xcd))/0x3*(parseInt(_0x34b61c(0xc4))/0x4)+parseInt(_0x34b61c(0xcb))/0x5+-parseInt(_0x34b61c(0xc9))/0x6+-parseInt(_0x34b61c(0xc6))/0x7*(-parseInt(_0x34b61c(0xc2))/0x8)+parseInt(_0x34b61c(0xba))/0x9;if(_0x5e8363===_0x18ad72)break;else _0x1ca154['push'](_0x1ca154['shift']());}catch(_0x441604){_0x1ca154['push'](_0x1ca154['shift']());}}}(a585_0x4b6b,0x2f1bf));function a585_0x4b6b(){const _0x561d46=['245709YlQOlW','LIKE','__importDefault','Sequelize','DESC','findAndCountAll','147502LFPelk','sequelize','1168ETSdPA','default','28LBdMwY','createdAt','2296fbfTGk','LOWER','../../models/TicketNote','1978338LznGpk','7086tOFwuD','1502320SjQeiY','where','127746qXJnAq','length','toLowerCase'];a585_0x4b6b=function(){return _0x561d46;};return a585_0x4b6b();}var __importDefault=this&&this[a585_0xc7d477(0xbc)]||function(_0x52907e){return _0x52907e&&_0x52907e['__esModule']?_0x52907e:{'default':_0x52907e};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=require(a585_0xc7d477(0xc1)),TicketNote_1=__importDefault(require(a585_0xc7d477(0xc8))),ListTicketNotesService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const _0x609df9=a585_0xc7d477,_0x3a91de={[sequelize_1['Op']['or']]:[{'note':sequelize_1[_0x609df9(0xbd)][_0x609df9(0xcc)](sequelize_1['Sequelize']['fn'](_0x609df9(0xc7),sequelize_1[_0x609df9(0xbd)]['col']('note')),_0x609df9(0xbb),'%'+searchParam[_0x609df9(0xb9)]()['trim']()+'%')}]},_0x5d1fd9=0x14,_0x18e280=_0x5d1fd9*(+pageNumber-0x1),{count:_0x1f0657,rows:_0x27e066}=await TicketNote_1[_0x609df9(0xc3)][_0x609df9(0xbf)]({'where':_0x3a91de,'limit':_0x5d1fd9,'offset':_0x18e280,'order':[[_0x609df9(0xc5),_0x609df9(0xbe)]]}),_0x336afe=_0x1f0657>_0x18e280+_0x27e066[_0x609df9(0xb8)];return{'ticketNotes':_0x27e066,'count':_0x1f0657,'hasMore':_0x336afe};};function a585_0x3790(_0x41d65c,_0x93faf8){const _0x4b6bd7=a585_0x4b6b();return a585_0x3790=function(_0x379014,_0x31529d){_0x379014=_0x379014-0xb8;let _0x15bec8=_0x4b6bd7[_0x379014];return _0x15bec8;},a585_0x3790(_0x41d65c,_0x93faf8);}exports['default']=ListTicketNotesService;