'use strict';function a248_0x1eec(){const _0x1f767d=['491760RqTPLH','732wzHRrY','2649940TfrGOu','Found\x20whatsapp\x20linked\x20to\x20user\x20\x27','name','whatsapp','findByPk','28867MQClOB','17370kQeVGj','26117iEgDAH','917724kZMuxm','1346976fqxdyb','__esModule','__importDefault','2hDGSBT','info','200xrBVoI'];a248_0x1eec=function(){return _0x1f767d;};return a248_0x1eec();}const a248_0x2379a6=a248_0x9982;(function(_0x301e0e,_0x41f9ec){const _0x26cc71=a248_0x9982,_0x298da8=_0x301e0e();while(!![]){try{const _0x18df60=parseInt(_0x26cc71(0x1a7))/0x1*(parseInt(_0x26cc71(0x19d))/0x2)+-parseInt(_0x26cc71(0x1aa))/0x3+-parseInt(_0x26cc71(0x1ab))/0x4+-parseInt(_0x26cc71(0x1a8))/0x5*(-parseInt(_0x26cc71(0x1a1))/0x6)+parseInt(_0x26cc71(0x1a9))/0x7*(parseInt(_0x26cc71(0x19f))/0x8)+parseInt(_0x26cc71(0x1a0))/0x9+parseInt(_0x26cc71(0x1a2))/0xa;if(_0x18df60===_0x41f9ec)break;else _0x298da8['push'](_0x298da8['shift']());}catch(_0x57db99){_0x298da8['push'](_0x298da8['shift']());}}}(a248_0x1eec,0x366e8));function a248_0x9982(_0x2ad9ca,_0x3a4e4c){const _0x1eec77=a248_0x1eec();return a248_0x9982=function(_0x9982c9,_0x410c18){_0x9982c9=_0x9982c9-0x19c;let _0x5e61bd=_0x1eec77[_0x9982c9];return _0x5e61bd;},a248_0x9982(_0x2ad9ca,_0x3a4e4c);}var __importDefault=this&&this[a248_0x2379a6(0x19c)]||function(_0x468bee){return _0x468bee&&_0x468bee['__esModule']?_0x468bee:{'default':_0x468bee};};Object['defineProperty'](exports,a248_0x2379a6(0x1ac),{'value':!![]});const User_1=__importDefault(require('../models/User')),logger_1=require('../utils/logger'),GetDefaultWhatsAppByUser=async _0x269aa9=>{const _0x4a4a91=a248_0x2379a6,_0x1913ed=await User_1['default'][_0x4a4a91(0x1a6)](_0x269aa9,{'include':['whatsapp']});if(_0x1913ed===null||!_0x1913ed['whatsapp'])return null;return logger_1['logger'][_0x4a4a91(0x19e)](_0x4a4a91(0x1a3)+_0x1913ed[_0x4a4a91(0x1a4)]+'\x27\x20is\x20\x27'+_0x1913ed['whatsapp'][_0x4a4a91(0x1a4)]+'\x27.'),_0x1913ed[_0x4a4a91(0x1a5)];};exports['default']=GetDefaultWhatsAppByUser;