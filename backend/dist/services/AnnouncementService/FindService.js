'use strict';const a347_0x4ae66a=a347_0x11fb;function a347_0x11fb(_0x84d1d9,_0x1f5377){const _0x50f197=a347_0x50f1();return a347_0x11fb=function(_0x11fb49,_0x384e97){_0x11fb49=_0x11fb49-0x174;let _0x2e2ed1=_0x50f197[_0x11fb49];return _0x2e2ed1;},a347_0x11fb(_0x84d1d9,_0x1f5377);}(function(_0x39e551,_0x8342cc){const _0x4f2b02=a347_0x11fb,_0x22b33f=_0x39e551();while(!![]){try{const _0x135ae0=-parseInt(_0x4f2b02(0x176))/0x1+-parseInt(_0x4f2b02(0x178))/0x2+parseInt(_0x4f2b02(0x17f))/0x3*(parseInt(_0x4f2b02(0x174))/0x4)+parseInt(_0x4f2b02(0x17c))/0x5*(-parseInt(_0x4f2b02(0x180))/0x6)+parseInt(_0x4f2b02(0x185))/0x7+parseInt(_0x4f2b02(0x177))/0x8+parseInt(_0x4f2b02(0x183))/0x9;if(_0x135ae0===_0x8342cc)break;else _0x22b33f['push'](_0x22b33f['shift']());}catch(_0x2ebdb8){_0x22b33f['push'](_0x22b33f['shift']());}}}(a347_0x50f1,0xf0953));var __importDefault=this&&this['__importDefault']||function(_0xb94306){const _0x2a2fee=a347_0x11fb;return _0xb94306&&_0xb94306[_0x2a2fee(0x179)]?_0xb94306:{'default':_0xb94306};};function a347_0x50f1(){const _0x1ab05a=['62742LnjRcK','default','company','23502726rgyNlY','../../models/Announcement','680043OnwNzP','4124vushtH','defineProperty','1308003tXlFol','2719792ItNjET','622422pnHPXX','__esModule','name','DESC','405eAwJqM','../../models/Company','findAll','1173iFitFP'];a347_0x50f1=function(){return _0x1ab05a;};return a347_0x50f1();}Object[a347_0x4ae66a(0x175)](exports,'__esModule',{'value':!![]});const Announcement_1=__importDefault(require(a347_0x4ae66a(0x184))),Company_1=__importDefault(require(a347_0x4ae66a(0x17d))),FindService=async({companyId:_0x401019})=>{const _0x1c8d8b=a347_0x4ae66a,_0x1f5874=await Announcement_1[_0x1c8d8b(0x181)][_0x1c8d8b(0x17e)]({'where':{'companyId':_0x401019},'include':[{'model':Company_1['default'],'as':_0x1c8d8b(0x182),'attributes':['id',_0x1c8d8b(0x17a)]}],'order':[['createdAt',_0x1c8d8b(0x17b)]]});return _0x1f5874;};exports['default']=FindService;