'use strict';function a552_0x37e9(){const _0x1a1a35=['3577386RuaWQz','133149oVoClY','92MwgSPN','6945430ztSTGZ','\x27\x0a\x20\x20GROUP\x20BY\x0a\x20\x20\x20\x20to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)\x0a\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20data\x20asc;\x0a\x20\x20','\x2023:59:59\x27\x0a\x20\x20\x20\x20GROUP\x20BY\x0a\x20\x20\x20\x20\x20\x20extract(hour\x20from\x20tick.\x22createdAt\x22)\x0a\x20\x20\x20\x20\x20\x20--to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd-mm-YYYY\x27)\x0a\x20\x20\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20\x20\x20horario\x20asc;\x0a\x20\x20\x20\x20','15934765vqvEjl','default','trim','query','16795EOpDrJ','104RhnRDl','465057QkKfVy','\x0a\x20\x20\x20\x20and\x20DATE(tick.\x22createdAt\x22)\x20>=\x20\x27','sequelize','../../database/index','\x2000:00:00\x27\x0a\x20\x20\x20\x20\x20\x20AND\x20DATE(tick.\x22createdAt\x22)\x20<=\x20\x27','7bLpZSk','TicketsDayService','__importDefault','\x0a\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20COUNT(*)\x20AS\x20total,\x0a\x20\x20\x20\x20\x20\x20extract(hour\x20from\x20tick.\x22createdAt\x22)\x20AS\x20horario\x0a\x20\x20\x20\x20\x20\x20--to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd-mm-YYYY\x27)\x20as\x20horario\x0a\x20\x20\x20\x20FROM\x0a\x20\x20\x20\x20\x20\x20\x22TicketTraking\x22\x20tick\x0a\x20\x20\x20\x20WHERE\x0a\x20\x20\x20\x20\x20\x20tick.\x22companyId\x22\x20=\x20','forEach','defineProperty','total','__esModule','\x0a\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20COUNT(*)\x20AS\x20total,\x0a\x20\x20\x20\x20to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)\x20as\x20data\x0a\x20\x20FROM\x0a\x20\x20\x20\x20\x22TicketTraking\x22\x20tick\x0a\x20\x20WHERE\x0a\x20\x20\x20\x20tick.\x22companyId\x22\x20=\x20','2tVANCH','248684PddtdE','\x0a\x20\x20\x20\x20\x20\x20and\x20DATE(tick.\x22createdAt\x22)\x20>=\x20\x27'];a552_0x37e9=function(){return _0x1a1a35;};return a552_0x37e9();}const a552_0x2e982c=a552_0x3b78;(function(_0xd606a8,_0x1beac4){const _0xc196ed=a552_0x3b78,_0x132579=_0xd606a8();while(!![]){try{const _0x49d43e=parseInt(_0xc196ed(0x116))/0x1+parseInt(_0xc196ed(0x115))/0x2*(-parseInt(_0xc196ed(0x119))/0x3)+-parseInt(_0xc196ed(0xfd))/0x4*(parseInt(_0xc196ed(0x105))/0x5)+parseInt(_0xc196ed(0x118))/0x6*(parseInt(_0xc196ed(0x10c))/0x7)+-parseInt(_0xc196ed(0x106))/0x8*(parseInt(_0xc196ed(0x107))/0x9)+-parseInt(_0xc196ed(0xfe))/0xa+parseInt(_0xc196ed(0x101))/0xb;if(_0x49d43e===_0x1beac4)break;else _0x132579['push'](_0x132579['shift']());}catch(_0x28207e){_0x132579['push'](_0x132579['shift']());}}}(a552_0x37e9,0xc4ade));function a552_0x3b78(_0x179eee,_0x19afd4){const _0x37e98b=a552_0x37e9();return a552_0x3b78=function(_0x3b78ef,_0x238339){_0x3b78ef=_0x3b78ef-0xfd;let _0x2e6b9d=_0x37e98b[_0x3b78ef];return _0x2e6b9d;},a552_0x3b78(_0x179eee,_0x19afd4);}var __importDefault=this&&this[a552_0x2e982c(0x10e)]||function(_0x4be3de){const _0x4d8834=a552_0x2e982c;return _0x4be3de&&_0x4be3de[_0x4d8834(0x113)]?_0x4be3de:{'default':_0x4be3de};};Object[a552_0x2e982c(0x111)](exports,'__esModule',{'value':!![]}),exports[a552_0x2e982c(0x10d)]=void 0x0;const index_1=__importDefault(require(a552_0x2e982c(0x10a))),sequelize_1=require(a552_0x2e982c(0x109)),TicketsDayService=async({initialDate:_0x35f698,finalDate:_0x4d300b,companyId:_0x234d14})=>{const _0x1539ca=a552_0x2e982c;let _0x2993cc='',_0x39e20c=0x0;_0x35f698&&_0x35f698[_0x1539ca(0x103)]()===_0x4d300b&&_0x4d300b[_0x1539ca(0x103)]()?_0x2993cc=_0x1539ca(0x10f)+_0x234d14+_0x1539ca(0x117)+_0x35f698+_0x1539ca(0x10b)+_0x4d300b+_0x1539ca(0x100):_0x2993cc=_0x1539ca(0x114)+_0x234d14+_0x1539ca(0x108)+_0x35f698+'\x27\x0a\x20\x20\x20\x20AND\x20DATE(tick.\x22createdAt\x22)\x20<=\x20\x27'+_0x4d300b+_0x1539ca(0xff);const _0x2961a9=await index_1[_0x1539ca(0x102)][_0x1539ca(0x104)](_0x2993cc,{'type':sequelize_1['QueryTypes']['SELECT']});return _0x2961a9[_0x1539ca(0x110)](_0x228b38=>{const _0x57b188=_0x1539ca;_0x39e20c+=Number(_0x228b38[_0x57b188(0x112)]);}),{'data':_0x2961a9,'count':_0x39e20c};};exports[a552_0x2e982c(0x10d)]=TicketsDayService;