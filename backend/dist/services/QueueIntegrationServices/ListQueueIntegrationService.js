'use strict';const a451_0x50d6f4=a451_0x42b7;(function(_0x560f95,_0x5b8f10){const _0x38c5e6=a451_0x42b7,_0x1a7625=_0x560f95();while(!![]){try{const _0x45d8bb=-parseInt(_0x38c5e6(0x176))/0x1*(-parseInt(_0x38c5e6(0x173))/0x2)+-parseInt(_0x38c5e6(0x17d))/0x3+-parseInt(_0x38c5e6(0x180))/0x4*(-parseInt(_0x38c5e6(0x179))/0x5)+parseInt(_0x38c5e6(0x16b))/0x6*(parseInt(_0x38c5e6(0x16c))/0x7)+-parseInt(_0x38c5e6(0x16f))/0x8+-parseInt(_0x38c5e6(0x17e))/0x9*(parseInt(_0x38c5e6(0x175))/0xa)+-parseInt(_0x38c5e6(0x17f))/0xb;if(_0x45d8bb===_0x5b8f10)break;else _0x1a7625['push'](_0x1a7625['shift']());}catch(_0x20e8ac){_0x1a7625['push'](_0x1a7625['shift']());}}}(a451_0x56c0,0xbe501));function a451_0x56c0(){const _0x59af10=['where','LOWER','5689296fPVljY','toLowerCase','createdAt','__esModule','2590152seTbWV','col','163290dFIsYJ','1OOuRWs','LIKE','DESC','39725lnvJge','Sequelize','default','QueueIntegrations.name','4082484BBydFb','243dpwqHJ','6077038BwsaaH','500qqQJDi','6IWRLdk','10896557ytQefT'];a451_0x56c0=function(){return _0x59af10;};return a451_0x56c0();}function a451_0x42b7(_0x1a57ac,_0x2ab393){const _0x56c0e3=a451_0x56c0();return a451_0x42b7=function(_0x42b77b,_0x49e54e){_0x42b77b=_0x42b77b-0x16b;let _0x40be95=_0x56c0e3[_0x42b77b];return _0x40be95;},a451_0x42b7(_0x1a57ac,_0x2ab393);}var __importDefault=this&&this['__importDefault']||function(_0x27bfc8){const _0x1b24b1=a451_0x42b7;return _0x27bfc8&&_0x27bfc8[_0x1b24b1(0x172)]?_0x27bfc8:{'default':_0x27bfc8};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=require('sequelize'),QueueIntegrations_1=__importDefault(require('../../models/QueueIntegrations')),ListQueueIntegrationService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x55e8c9})=>{const _0x45a444=a451_0x42b7;let _0xd492de={[sequelize_1['Op']['or']]:[{'$QueueIntegrations.name$':sequelize_1[_0x45a444(0x17a)][_0x45a444(0x16d)](sequelize_1[_0x45a444(0x17a)]['fn'](_0x45a444(0x16e),sequelize_1[_0x45a444(0x17a)][_0x45a444(0x174)](_0x45a444(0x17c))),_0x45a444(0x177),'%'+searchParam[_0x45a444(0x170)]()+'%')}]};_0xd492de={..._0xd492de,'companyId':_0x55e8c9};const _0x18c9d0=0x14,_0x329c0b=_0x18c9d0*(+pageNumber-0x1),{count:_0x31385b,rows:_0x535aa5}=await QueueIntegrations_1['default']['findAndCountAll']({'where':_0xd492de,'limit':_0x18c9d0,'offset':_0x329c0b,'order':[[_0x45a444(0x171),_0x45a444(0x178)]]}),_0x208521=_0x31385b>_0x329c0b+_0x535aa5['length'];return{'queueIntegrations':_0x535aa5,'count':_0x31385b,'hasMore':_0x208521};};exports[a451_0x50d6f4(0x17b)]=ListQueueIntegrationService;