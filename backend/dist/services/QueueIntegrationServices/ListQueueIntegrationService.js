'use strict';function a535_0x4552(_0x1c7db3,_0x22cf48){const _0x31377c=a535_0x3137();return a535_0x4552=function(_0x455290,_0x293d7c){_0x455290=_0x455290-0x1be;let _0x26f377=_0x31377c[_0x455290];return _0x26f377;},a535_0x4552(_0x1c7db3,_0x22cf48);}const a535_0x1e8222=a535_0x4552;(function(_0x80dd54,_0x1686d3){const _0x1f7d8c=a535_0x4552,_0x5ea3a3=_0x80dd54();while(!![]){try{const _0x5c79ba=parseInt(_0x1f7d8c(0x1d0))/0x1*(parseInt(_0x1f7d8c(0x1d3))/0x2)+-parseInt(_0x1f7d8c(0x1be))/0x3+parseInt(_0x1f7d8c(0x1c6))/0x4*(-parseInt(_0x1f7d8c(0x1cb))/0x5)+-parseInt(_0x1f7d8c(0x1d1))/0x6*(-parseInt(_0x1f7d8c(0x1ce))/0x7)+parseInt(_0x1f7d8c(0x1cd))/0x8*(parseInt(_0x1f7d8c(0x1c0))/0x9)+-parseInt(_0x1f7d8c(0x1bf))/0xa*(-parseInt(_0x1f7d8c(0x1ca))/0xb)+-parseInt(_0x1f7d8c(0x1c3))/0xc*(parseInt(_0x1f7d8c(0x1d2))/0xd);if(_0x5c79ba===_0x1686d3)break;else _0x5ea3a3['push'](_0x5ea3a3['shift']());}catch(_0x52b1f3){_0x5ea3a3['push'](_0x5ea3a3['shift']());}}}(a535_0x3137,0xcbb51));var __importDefault=this&&this['__importDefault']||function(_0x113d75){const _0x2869b5=a535_0x4552;return _0x113d75&&_0x113d75[_0x2869b5(0x1c7)]?_0x113d75:{'default':_0x113d75};};Object[a535_0x1e8222(0x1cf)](exports,a535_0x1e8222(0x1c7),{'value':!![]});const sequelize_1=require(a535_0x1e8222(0x1d4)),QueueIntegrations_1=__importDefault(require('../../models/QueueIntegrations')),ListQueueIntegrationService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x317aa1})=>{const _0x254b95=a535_0x1e8222;let _0x4a2603={[sequelize_1['Op']['or']]:[{'$QueueIntegrations.name$':sequelize_1[_0x254b95(0x1c4)]['where'](sequelize_1[_0x254b95(0x1c4)]['fn'](_0x254b95(0x1c8),sequelize_1['Sequelize']['col'](_0x254b95(0x1c5))),_0x254b95(0x1c2),'%'+searchParam['toLowerCase']()+'%')}]};_0x4a2603={..._0x4a2603,'companyId':_0x317aa1};const _0x4933aa=0x14,_0x33f320=_0x4933aa*(+pageNumber-0x1),{count:_0x26f16f,rows:_0x4effaa}=await QueueIntegrations_1[_0x254b95(0x1c9)]['findAndCountAll']({'where':_0x4a2603,'limit':_0x4933aa,'offset':_0x33f320,'order':[[_0x254b95(0x1d5),_0x254b95(0x1c1)]]}),_0x36070a=_0x26f16f>_0x33f320+_0x4effaa[_0x254b95(0x1cc)];return{'queueIntegrations':_0x4effaa,'count':_0x26f16f,'hasMore':_0x36070a};};exports[a535_0x1e8222(0x1c9)]=ListQueueIntegrationService;function a535_0x3137(){const _0x192832=['6675582JTkZHr','3956654mYmuvg','5578hbQUJp','sequelize','createdAt','193533OLlsDJ','411790XvmYFU','9eZraqk','DESC','LIKE','96vgRCTw','Sequelize','QueueIntegrations.name','4fkDaKV','__esModule','LOWER','default','418JkeVgW','3886625bIbMIO','length','8412744qYRkNQ','7XOUfAB','defineProperty','137KhZlxy'];a535_0x3137=function(){return _0x192832;};return a535_0x3137();}