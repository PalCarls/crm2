'use strict';const a469_0x2eaad1=a469_0x1a41;(function(_0x4ec320,_0x5227a8){const _0x109024=a469_0x1a41,_0x26f156=_0x4ec320();while(!![]){try{const _0x3f2e1a=-parseInt(_0x109024(0x95))/0x1*(-parseInt(_0x109024(0x8d))/0x2)+parseInt(_0x109024(0x90))/0x3+-parseInt(_0x109024(0x8f))/0x4+-parseInt(_0x109024(0x91))/0x5*(parseInt(_0x109024(0x92))/0x6)+parseInt(_0x109024(0x8b))/0x7+-parseInt(_0x109024(0x93))/0x8+-parseInt(_0x109024(0x9a))/0x9;if(_0x3f2e1a===_0x5227a8)break;else _0x26f156['push'](_0x26f156['shift']());}catch(_0x5ac3eb){_0x26f156['push'](_0x26f156['shift']());}}}(a469_0x5154,0xca548));var __importDefault=this&&this[a469_0x2eaad1(0x99)]||function(_0x3083ce){const _0x512ac5=a469_0x2eaad1;return _0x3083ce&&_0x3083ce[_0x512ac5(0x97)]?_0x3083ce:{'default':_0x3083ce};};Object['defineProperty'](exports,a469_0x2eaad1(0x97),{'value':!![]});function a469_0x1a41(_0x5a87e8,_0x424a31){const _0x515438=a469_0x5154();return a469_0x1a41=function(_0x1a4175,_0x502414){_0x1a4175=_0x1a4175-0x8b;let _0x503686=_0x515438[_0x1a4175];return _0x503686;},a469_0x1a41(_0x5a87e8,_0x424a31);}function a469_0x5154(){const _0x5b137b=['3976875djgcEU','55nbPQrQ','882606gPxqUT','4257728tIDEhl','default','1xNMTUF','shortcode','__esModule','ASC','__importDefault','7032105Qthtxk','10877902kZdyQy','../../models/Company','2414266IcYEZD','../../models/QuickMessage','1305312TLQCSC'];a469_0x5154=function(){return _0x5b137b;};return a469_0x5154();}const QuickMessage_1=__importDefault(require(a469_0x2eaad1(0x8e))),Company_1=__importDefault(require(a469_0x2eaad1(0x8c))),FindService=async({companyId:_0x72bb3b,userId:_0x6e29f8})=>{const _0xcb74eb=a469_0x2eaad1,_0x47cf9c=await QuickMessage_1['default']['findAll']({'where':{'companyId':_0x72bb3b},'include':[{'model':Company_1[_0xcb74eb(0x94)],'as':'company','attributes':['id','name']}],'order':[[_0xcb74eb(0x96),_0xcb74eb(0x98)]]});return _0x47cf9c;};exports[a469_0x2eaad1(0x94)]=FindService;