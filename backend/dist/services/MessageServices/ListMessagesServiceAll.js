'use strict';const a505_0x20bcca=a505_0x5c3e;(function(_0x60e54c,_0x2991b0){const _0x3925ec=a505_0x5c3e,_0x151ee3=_0x60e54c();while(!![]){try{const _0x4dab77=-parseInt(_0x3925ec(0x19b))/0x1*(parseInt(_0x3925ec(0x193))/0x2)+-parseInt(_0x3925ec(0x19c))/0x3*(parseInt(_0x3925ec(0x19e))/0x4)+parseInt(_0x3925ec(0x19d))/0x5+parseInt(_0x3925ec(0x1a8))/0x6+-parseInt(_0x3925ec(0x195))/0x7*(-parseInt(_0x3925ec(0x1a1))/0x8)+-parseInt(_0x3925ec(0x19f))/0x9+-parseInt(_0x3925ec(0x197))/0xa;if(_0x4dab77===_0x2991b0)break;else _0x151ee3['push'](_0x151ee3['shift']());}catch(_0x2b604b){_0x151ee3['push'](_0x151ee3['shift']());}}}(a505_0x53b7,0x8c326));Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_typescript_1=require(a505_0x20bcca(0x19a)),sequelize_1=require(a505_0x20bcca(0x196)),dbConfig=require(a505_0x20bcca(0x1a6)),sequelize=new sequelize_typescript_1[(a505_0x20bcca(0x1a4))](dbConfig),ListMessagesServiceAll=async({companyId:_0x54827d,fromMe:_0x62e4b9,dateStart:_0x356014,dateEnd:_0x46ba72})=>{const _0x4a6200=a505_0x20bcca;let _0x40aa55;return _0x356014&&_0x46ba72?_0x62e4b9?_0x40aa55=await sequelize[_0x4a6200(0x199)](_0x4a6200(0x1a3)+_0x54827d+_0x4a6200(0x194)+_0x62e4b9+'\x20and\x20\x22createdAt\x22\x20\x20between\x20\x27'+_0x356014+'\x2000:00:00\x27\x20and\x20\x27'+_0x46ba72+'\x2023:59:59\x27',{'type':sequelize_1[_0x4a6200(0x1a0)][_0x4a6200(0x1a5)]}):_0x40aa55=await sequelize[_0x4a6200(0x199)](_0x4a6200(0x1a3)+_0x54827d+_0x4a6200(0x192)+_0x356014+_0x4a6200(0x1a2)+_0x46ba72+_0x4a6200(0x198),{'type':sequelize_1[_0x4a6200(0x1a0)][_0x4a6200(0x1a5)]}):_0x62e4b9?_0x40aa55=await sequelize[_0x4a6200(0x199)]('select\x20COUNT(*)\x20from\x20\x22Messages\x22\x20m\x20where\x20\x22companyId\x22\x20=\x20'+_0x54827d+'\x20and\x20\x22fromMe\x22\x20=\x20'+_0x62e4b9,{'type':sequelize_1[_0x4a6200(0x1a0)][_0x4a6200(0x1a5)]}):_0x40aa55=await sequelize[_0x4a6200(0x199)]('select\x20COUNT(*)\x20from\x20\x22Messages\x22\x20m\x20where\x20\x22companyId\x22\x20=\x20'+_0x54827d,{'type':sequelize_1['QueryTypes']['SELECT']}),{'count':_0x40aa55};};exports[a505_0x20bcca(0x1a7)]=ListMessagesServiceAll;function a505_0x5c3e(_0x91a0d7,_0x1ad92b){const _0x53b75b=a505_0x53b7();return a505_0x5c3e=function(_0x5c3e87,_0x30b80d){_0x5c3e87=_0x5c3e87-0x192;let _0x3d1f63=_0x53b75b[_0x5c3e87];return _0x3d1f63;},a505_0x5c3e(_0x91a0d7,_0x1ad92b);}function a505_0x53b7(){const _0x38ef26=['3159450qnCziv','QueryTypes','73504RqqGJl','\x2000:00:00\x27\x20and\x20\x27','select\x20COUNT(*)\x20from\x20\x22Messages\x22\x20m\x20where\x20\x22companyId\x22\x20=\x20','Sequelize','SELECT','../../config/database','default','2619354Gneqww','\x20and\x20\x22createdAt\x22\x20between\x20\x27','11052LjQVxo','\x20and\x20\x22fromMe\x22\x20=\x20','511lpgawy','sequelize','1598390ZiQTOk','\x2023:59:59\x27','query','sequelize-typescript','74CeHtgL','15189cQoaos','4794475APrxKW','452rpvajK'];a505_0x53b7=function(){return _0x38ef26;};return a505_0x53b7();}