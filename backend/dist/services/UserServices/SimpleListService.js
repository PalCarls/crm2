'use strict';const a550_0xf8eac0=a550_0x315a;(function(_0x107a7f,_0x1f9fdb){const _0x266365=a550_0x315a,_0x26e469=_0x107a7f();while(!![]){try{const _0x556b91=parseInt(_0x266365(0xb0))/0x1+-parseInt(_0x266365(0xa4))/0x2+parseInt(_0x266365(0xac))/0x3*(-parseInt(_0x266365(0xa5))/0x4)+-parseInt(_0x266365(0xa0))/0x5*(-parseInt(_0x266365(0xb4))/0x6)+parseInt(_0x266365(0xb3))/0x7*(-parseInt(_0x266365(0xaf))/0x8)+-parseInt(_0x266365(0x9f))/0x9*(-parseInt(_0x266365(0xae))/0xa)+parseInt(_0x266365(0xad))/0xb;if(_0x556b91===_0x1f9fdb)break;else _0x26e469['push'](_0x26e469['shift']());}catch(_0x4ed141){_0x26e469['push'](_0x26e469['shift']());}}}(a550_0x2045,0x6e7a0));var __importDefault=this&&this[a550_0xf8eac0(0xab)]||function(_0x25a95e){const _0x40d4f7=a550_0xf8eac0;return _0x25a95e&&_0x25a95e[_0x40d4f7(0xb2)]?_0x25a95e:{'default':_0x25a95e};};function a550_0x2045(){const _0x2a3c9c=['queues','__esModule','335188prPSRi','4356426kvlBmF','11727PIkMQy','5tMaEsm','../../models/Queue','email','../../errors/AppError','1624820djRhCC','2432524TvlJsU','ERR_NO_USER_FOUND','name','default','findAll','ASC','__importDefault','3QuQJTH','16393047NASBRa','650WiPNmP','112CLEZHx','242386iomCnW'];a550_0x2045=function(){return _0x2a3c9c;};return a550_0x2045();}function a550_0x315a(_0x4d7c94,_0xdf661d){const _0x2045c4=a550_0x2045();return a550_0x315a=function(_0x315ad5,_0xd3738d){_0x315ad5=_0x315ad5-0x9f;let _0x392b4a=_0x2045c4[_0x315ad5];return _0x392b4a;},a550_0x315a(_0x4d7c94,_0xdf661d);}Object['defineProperty'](exports,a550_0xf8eac0(0xb2),{'value':!![]});const User_1=__importDefault(require('../../models/User')),AppError_1=__importDefault(require(a550_0xf8eac0(0xa3))),Queue_1=__importDefault(require(a550_0xf8eac0(0xa1))),SimpleListService=async({companyId:_0x43c108})=>{const _0x4c6ee8=a550_0xf8eac0,_0x54ddbf=await User_1[_0x4c6ee8(0xa8)][_0x4c6ee8(0xa9)]({'where':{'companyId':_0x43c108},'attributes':[_0x4c6ee8(0xa7),'id',_0x4c6ee8(0xa2)],'include':[{'model':Queue_1['default'],'as':_0x4c6ee8(0xb1)}],'order':[['id',_0x4c6ee8(0xaa)]]});if(!_0x54ddbf)throw new AppError_1[(_0x4c6ee8(0xa8))](_0x4c6ee8(0xa6),0x194);return _0x54ddbf;};exports['default']=SimpleListService;