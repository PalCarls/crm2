'use strict';const a441_0x4010e6=a441_0x1f56;function a441_0x1f56(_0x1ff86d,_0x4eafcb){const _0x114af6=a441_0x114a();return a441_0x1f56=function(_0x1f5646,_0x2b3058){_0x1f5646=_0x1f5646-0x15b;let _0xa5b3e7=_0x114af6[_0x1f5646];return _0xa5b3e7;},a441_0x1f56(_0x1ff86d,_0x4eafcb);}(function(_0x121e21,_0x59ae13){const _0x1905e5=a441_0x1f56,_0x298ae2=_0x121e21();while(!![]){try{const _0xd6fe74=-parseInt(_0x1905e5(0x16a))/0x1+-parseInt(_0x1905e5(0x15c))/0x2+parseInt(_0x1905e5(0x161))/0x3+-parseInt(_0x1905e5(0x169))/0x4*(-parseInt(_0x1905e5(0x16f))/0x5)+parseInt(_0x1905e5(0x16d))/0x6*(-parseInt(_0x1905e5(0x15b))/0x7)+parseInt(_0x1905e5(0x160))/0x8+parseInt(_0x1905e5(0x16b))/0x9;if(_0xd6fe74===_0x59ae13)break;else _0x298ae2['push'](_0x298ae2['shift']());}catch(_0x21a9d4){_0x298ae2['push'](_0x298ae2['shift']());}}}(a441_0x114a,0x20be0));Object[a441_0x4010e6(0x166)](exports,a441_0x4010e6(0x15d),{'value':!![]});const sequelize_typescript_1=require(a441_0x4010e6(0x16c)),sequelize_1=require(a441_0x4010e6(0x165)),dbConfig=require(a441_0x4010e6(0x167)),sequelize=new sequelize_typescript_1[(a441_0x4010e6(0x163))](dbConfig),ListMessagesServiceAll=async({companyId:_0x1db93a,fromMe:_0x45bf59,dateStart:_0x100ee5,dateEnd:_0x5d88cd})=>{const _0x17111b=a441_0x4010e6;let _0x23d689;return _0x100ee5&&_0x5d88cd?_0x45bf59?_0x23d689=await sequelize['query']('select\x20COUNT(*)\x20from\x20\x22Messages\x22\x20m\x20where\x20\x22companyId\x22\x20=\x20'+_0x1db93a+'\x20and\x20\x22fromMe\x22\x20=\x20'+_0x45bf59+_0x17111b(0x164)+_0x100ee5+_0x17111b(0x15f)+_0x5d88cd+'\x2023:59:59\x27',{'type':sequelize_1[_0x17111b(0x170)][_0x17111b(0x168)]}):_0x23d689=await sequelize[_0x17111b(0x162)](_0x17111b(0x16e)+_0x1db93a+'\x20and\x20\x22createdAt\x22\x20between\x20\x27'+_0x100ee5+'\x2000:00:00\x27\x20and\x20\x27'+_0x5d88cd+'\x2023:59:59\x27',{'type':sequelize_1[_0x17111b(0x170)][_0x17111b(0x168)]}):_0x45bf59?_0x23d689=await sequelize['query'](_0x17111b(0x16e)+_0x1db93a+_0x17111b(0x171)+_0x45bf59,{'type':sequelize_1[_0x17111b(0x170)][_0x17111b(0x168)]}):_0x23d689=await sequelize[_0x17111b(0x162)](_0x17111b(0x16e)+_0x1db93a,{'type':sequelize_1[_0x17111b(0x170)][_0x17111b(0x168)]}),{'count':_0x23d689};};function a441_0x114a(){const _0xf798ef=['\x20and\x20\x22fromMe\x22\x20=\x20','1297177zVOWGH','130758kbFuju','__esModule','default','\x2000:00:00\x27\x20and\x20\x27','304152qVZBjl','445368NaQjOe','query','Sequelize','\x20and\x20\x22createdAt\x22\x20\x20between\x20\x27','sequelize','defineProperty','../../config/database','SELECT','297360glGziQ','196339rNGwCv','2213874cFLJrF','sequelize-typescript','6RHiGLo','select\x20COUNT(*)\x20from\x20\x22Messages\x22\x20m\x20where\x20\x22companyId\x22\x20=\x20','10nhaULN','QueryTypes'];a441_0x114a=function(){return _0xf798ef;};return a441_0x114a();}exports[a441_0x4010e6(0x15e)]=ListMessagesServiceAll;