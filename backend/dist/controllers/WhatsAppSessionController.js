'use strict';const a39_0x11aa54=a39_0x83ad;(function(_0x664daa,_0x7e3949){const _0x958f09=a39_0x83ad,_0x3d3bfc=_0x664daa();while(!![]){try{const _0x354fd5=parseInt(_0x958f09(0x113))/0x1*(parseInt(_0x958f09(0x11b))/0x2)+-parseInt(_0x958f09(0x122))/0x3*(parseInt(_0x958f09(0x120))/0x4)+parseInt(_0x958f09(0x116))/0x5*(-parseInt(_0x958f09(0x11d))/0x6)+parseInt(_0x958f09(0x12d))/0x7*(-parseInt(_0x958f09(0x115))/0x8)+parseInt(_0x958f09(0x124))/0x9*(parseInt(_0x958f09(0x114))/0xa)+parseInt(_0x958f09(0x12a))/0xb*(parseInt(_0x958f09(0x112))/0xc)+-parseInt(_0x958f09(0x129))/0xd;if(_0x354fd5===_0x7e3949)break;else _0x3d3bfc['push'](_0x3d3bfc['shift']());}catch(_0x1b87a1){_0x3d3bfc['push'](_0x3d3bfc['shift']());}}}(a39_0x465b,0xe91c2));var __importDefault=this&&this[a39_0x11aa54(0x127)]||function(_0xd73dfa){const _0x410f2f=a39_0x11aa54;return _0xd73dfa&&_0xd73dfa[_0x410f2f(0x126)]?_0xd73dfa:{'default':_0xd73dfa};};function a39_0x83ad(_0x5593fa,_0x4c10f4){const _0x465b85=a39_0x465b();return a39_0x83ad=function(_0x83ad9e,_0x275ed4){_0x83ad9e=_0x83ad9e-0x111;let _0x4ba14f=_0x465b85[_0x83ad9e];return _0x4ba14f;},a39_0x83ad(_0x5593fa,_0x4c10f4);}function a39_0x465b(){const _0x165851=['248lWMTwI','495050jDiZGE','defineProperty','StartWhatsAppSession','getWbot','json','219034gVknrH','logout','54EXUitC','channel','../services/WhatsappService/UpdateWhatsAppService','12pueGVn','../services/BaileysServices/DeleteBaileysService','1245147zzXWSk','status','11898axuhWH','../services/WhatsappService/ShowWhatsAppService','__esModule','__importDefault','Session\x20disconnected.','40937mMkFRP','67386aGWYqs','../libs/wbot','user','158585pRUqkl','params','default','close','whatsapp','3576PDDTtk','7yctGIW','9110peEHpU'];a39_0x465b=function(){return _0x165851;};return a39_0x465b();}Object[a39_0x11aa54(0x117)](exports,'__esModule',{'value':!![]});const wbot_1=require(a39_0x11aa54(0x12b)),ShowWhatsAppService_1=__importDefault(require(a39_0x11aa54(0x125))),StartWhatsAppSession_1=require('../services/WbotServices/StartWhatsAppSession'),UpdateWhatsAppService_1=__importDefault(require(a39_0x11aa54(0x11f))),DeleteBaileysService_1=__importDefault(require(a39_0x11aa54(0x121))),store=async(_0x1c83fa,_0x43e7ef)=>{const _0x4a0f92=a39_0x11aa54,{whatsappId:_0x5b4178}=_0x1c83fa['params'],{companyId:_0x51182b}=_0x1c83fa[_0x4a0f92(0x12c)],_0x4b19c8=await(0x0,ShowWhatsAppService_1['default'])(_0x5b4178,_0x51182b);return await(0x0,StartWhatsAppSession_1[_0x4a0f92(0x118)])(_0x4b19c8,_0x51182b),_0x43e7ef[_0x4a0f92(0x123)](0xc8)[_0x4a0f92(0x11a)]({'message':'Starting\x20session.'});},update=async(_0x346ea8,_0x5a8f52)=>{const _0x3c0d1f=a39_0x11aa54,{whatsappId:_0x62f755}=_0x346ea8[_0x3c0d1f(0x12e)],{companyId:_0x43b101}=_0x346ea8['user'],{whatsapp:_0xaa267e}=await(0x0,UpdateWhatsAppService_1[_0x3c0d1f(0x12f)])({'whatsappId':_0x62f755,'companyId':_0x43b101,'whatsappData':{'session':''}});return _0xaa267e[_0x3c0d1f(0x11e)]==='whatsapp'&&await(0x0,StartWhatsAppSession_1[_0x3c0d1f(0x118)])(_0xaa267e,_0x43b101),_0x5a8f52[_0x3c0d1f(0x123)](0xc8)[_0x3c0d1f(0x11a)]({'message':'Starting\x20session.'});},remove=async(_0x230bf2,_0x25bba3)=>{const _0xd7797c=a39_0x11aa54,{whatsappId:_0x560390}=_0x230bf2[_0xd7797c(0x12e)],{companyId:_0x2e14be}=_0x230bf2[_0xd7797c(0x12c)],_0x4edb7a=await(0x0,ShowWhatsAppService_1[_0xd7797c(0x12f)])(_0x560390,_0x2e14be);if(_0x4edb7a[_0xd7797c(0x11e)]===_0xd7797c(0x111)){await(0x0,DeleteBaileysService_1['default'])(_0x560390);const _0x197118=(0x0,wbot_1[_0xd7797c(0x119)])(_0x4edb7a['id']);_0x197118[_0xd7797c(0x11c)](),_0x197118['ws'][_0xd7797c(0x130)]();}return _0x25bba3[_0xd7797c(0x123)](0xc8)[_0xd7797c(0x11a)]({'message':_0xd7797c(0x128)});};exports['default']={'store':store,'remove':remove,'update':update};