'use strict';function a559_0x2fed(_0x24e46b,_0x4f548f){const _0x8dcdf5=a559_0x8dcd();return a559_0x2fed=function(_0x2fed9e,_0x39c91c){_0x2fed9e=_0x2fed9e-0x15f;let _0x133b3d=_0x8dcdf5[_0x2fed9e];return _0x133b3d;},a559_0x2fed(_0x24e46b,_0x4f548f);}function a559_0x8dcd(){const _0x25e789=['\x27\x0a\x20\x20\x20\x20AND\x20DATE(tick.\x22createdAt\x22)\x20<=\x20\x27','default','../../database/index','2094071bwWysV','__esModule','415671BWhuQF','\x27\x0a\x20\x20GROUP\x20BY\x0a\x20\x20\x20\x20to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)\x0a\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20data\x20asc;\x0a\x20\x20','15538050jWRGoT','\x0a\x20\x20\x20\x20\x20\x20and\x20DATE(tick.\x22createdAt\x22)\x20>=\x20\x27','32yOOFaL','trim','2YDHAHn','\x2023:59:59\x27\x0a\x20\x20\x20\x20GROUP\x20BY\x0a\x20\x20\x20\x20\x20\x20extract(hour\x20from\x20tick.\x22createdAt\x22)\x0a\x20\x20\x20\x20\x20\x20--to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd-mm-YYYY\x27)\x0a\x20\x20\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20\x20\x20horario\x20asc;\x0a\x20\x20\x20\x20','total','TicketsDayService','8852688gxFoUn','\x2000:00:00\x27\x0a\x20\x20\x20\x20\x20\x20AND\x20DATE(tick.\x22createdAt\x22)\x20<=\x20\x27','\x0a\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20COUNT(*)\x20AS\x20total,\x0a\x20\x20\x20\x20to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)\x20as\x20data\x0a\x20\x20FROM\x0a\x20\x20\x20\x20\x22TicketTraking\x22\x20tick\x0a\x20\x20WHERE\x0a\x20\x20\x20\x20tick.\x22companyId\x22\x20=\x20','14582570yecdCV','6181770hdPoqK','1580171PaQZiT','16GREpeN','sequelize','QueryTypes'];a559_0x8dcd=function(){return _0x25e789;};return a559_0x8dcd();}const a559_0x27d4a6=a559_0x2fed;(function(_0x304525,_0x131589){const _0x1ef062=a559_0x2fed,_0xb64f78=_0x304525();while(!![]){try{const _0x126e32=-parseInt(_0x1ef062(0x16e))/0x1*(-parseInt(_0x1ef062(0x165))/0x2)+parseInt(_0x1ef062(0x15f))/0x3*(parseInt(_0x1ef062(0x16f))/0x4)+-parseInt(_0x1ef062(0x16d))/0x5+parseInt(_0x1ef062(0x169))/0x6+parseInt(_0x1ef062(0x175))/0x7*(-parseInt(_0x1ef062(0x163))/0x8)+-parseInt(_0x1ef062(0x161))/0x9+parseInt(_0x1ef062(0x16c))/0xa;if(_0x126e32===_0x131589)break;else _0xb64f78['push'](_0xb64f78['shift']());}catch(_0x460e37){_0xb64f78['push'](_0xb64f78['shift']());}}}(a559_0x8dcd,0xddd90));var __importDefault=this&&this['__importDefault']||function(_0x2a6b7b){const _0xe98d0a=a559_0x2fed;return _0x2a6b7b&&_0x2a6b7b[_0xe98d0a(0x176)]?_0x2a6b7b:{'default':_0x2a6b7b};};Object['defineProperty'](exports,a559_0x27d4a6(0x176),{'value':!![]}),exports[a559_0x27d4a6(0x168)]=void 0x0;const index_1=__importDefault(require(a559_0x27d4a6(0x174))),sequelize_1=require(a559_0x27d4a6(0x170)),TicketsDayService=async({initialDate:_0x5392da,finalDate:_0x459381,companyId:_0x90d580})=>{const _0x10dd1c=a559_0x27d4a6;let _0x4defcc='',_0x411e1f=0x0;_0x5392da&&_0x5392da[_0x10dd1c(0x164)]()===_0x459381&&_0x459381[_0x10dd1c(0x164)]()?_0x4defcc='\x0a\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20COUNT(*)\x20AS\x20total,\x0a\x20\x20\x20\x20\x20\x20extract(hour\x20from\x20tick.\x22createdAt\x22)\x20AS\x20horario\x0a\x20\x20\x20\x20\x20\x20--to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd-mm-YYYY\x27)\x20as\x20horario\x0a\x20\x20\x20\x20FROM\x0a\x20\x20\x20\x20\x20\x20\x22TicketTraking\x22\x20tick\x0a\x20\x20\x20\x20WHERE\x0a\x20\x20\x20\x20\x20\x20tick.\x22companyId\x22\x20=\x20'+_0x90d580+_0x10dd1c(0x162)+_0x5392da+_0x10dd1c(0x16a)+_0x459381+_0x10dd1c(0x166):_0x4defcc=_0x10dd1c(0x16b)+_0x90d580+'\x0a\x20\x20\x20\x20and\x20DATE(tick.\x22createdAt\x22)\x20>=\x20\x27'+_0x5392da+_0x10dd1c(0x172)+_0x459381+_0x10dd1c(0x160);const _0x39958e=await index_1[_0x10dd1c(0x173)]['query'](_0x4defcc,{'type':sequelize_1[_0x10dd1c(0x171)]['SELECT']});return _0x39958e['forEach'](_0x4938bf=>{const _0x321343=_0x10dd1c;_0x411e1f+=Number(_0x4938bf[_0x321343(0x167)]);}),{'data':_0x39958e,'count':_0x411e1f};};exports[a559_0x27d4a6(0x168)]=TicketsDayService;