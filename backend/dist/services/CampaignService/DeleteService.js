'use strict';const a371_0x277436=a371_0x5b9d;(function(_0x3babd3,_0x4b00fd){const _0x12a1cb=a371_0x5b9d,_0x1e973b=_0x3babd3();while(!![]){try{const _0x584f8b=parseInt(_0x12a1cb(0x1b9))/0x1*(-parseInt(_0x12a1cb(0x1bf))/0x2)+-parseInt(_0x12a1cb(0x1bb))/0x3*(-parseInt(_0x12a1cb(0x1ac))/0x4)+-parseInt(_0x12a1cb(0x1af))/0x5*(parseInt(_0x12a1cb(0x1b6))/0x6)+parseInt(_0x12a1cb(0x1ae))/0x7+-parseInt(_0x12a1cb(0x1ab))/0x8*(-parseInt(_0x12a1cb(0x1c0))/0x9)+-parseInt(_0x12a1cb(0x1b7))/0xa*(-parseInt(_0x12a1cb(0x1be))/0xb)+-parseInt(_0x12a1cb(0x1bc))/0xc*(parseInt(_0x12a1cb(0x1b4))/0xd);if(_0x584f8b===_0x4b00fd)break;else _0x1e973b['push'](_0x1e973b['shift']());}catch(_0x1654f4){_0x1e973b['push'](_0x1e973b['shift']());}}}(a371_0x13ca,0x1ce3e));function a371_0x13ca(){const _0x27b4f2=['status','ERR_NO_CAMPAIGN_FOUND','26OQkUQa','Não\x20é\x20permitido\x20excluir\x20campanha\x20em\x20andamento','468eSOmLI','199930LZGaLD','findOne','2578UHkrPm','EM_ANDAMENTO','5793btGEGc','691692RmEkYL','destroy','77WVBcen','88XozqEV','531cJtJEq','__importDefault','1240PQKUUY','44sfKoRo','__esModule','1451555AQOAVD','1965sfWRji','default','../../errors/AppError'];a371_0x13ca=function(){return _0x27b4f2;};return a371_0x13ca();}function a371_0x5b9d(_0x1a66e0,_0x2d1835){const _0x13ca9e=a371_0x13ca();return a371_0x5b9d=function(_0x5b9d4b,_0x2dfbf2){_0x5b9d4b=_0x5b9d4b-0x1aa;let _0x127799=_0x13ca9e[_0x5b9d4b];return _0x127799;},a371_0x5b9d(_0x1a66e0,_0x2d1835);}var __importDefault=this&&this[a371_0x277436(0x1aa)]||function(_0x227d3a){const _0x571899=a371_0x277436;return _0x227d3a&&_0x227d3a[_0x571899(0x1ad)]?_0x227d3a:{'default':_0x227d3a};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const Campaign_1=__importDefault(require('../../models/Campaign')),AppError_1=__importDefault(require(a371_0x277436(0x1b1))),DeleteService=async _0x280d47=>{const _0x16803d=a371_0x277436,_0x3fd4b1=await Campaign_1[_0x16803d(0x1b0)][_0x16803d(0x1b8)]({'where':{'id':_0x280d47}});if(!_0x3fd4b1)throw new AppError_1[(_0x16803d(0x1b0))](_0x16803d(0x1b3),0x194);if(_0x3fd4b1[_0x16803d(0x1b2)]===_0x16803d(0x1ba))throw new AppError_1['default'](_0x16803d(0x1b5),0x190);await _0x3fd4b1[_0x16803d(0x1bd)]();};exports['default']=DeleteService;