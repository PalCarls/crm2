'use strict';const a458_0x38a453=a458_0xe74f;function a458_0xe74f(_0x208dee,_0x418164){const _0x5273d7=a458_0x5273();return a458_0xe74f=function(_0xe74f89,_0x134066){_0xe74f89=_0xe74f89-0x138;let _0xbcfb1a=_0x5273d7[_0xe74f89];return _0xbcfb1a;},a458_0xe74f(_0x208dee,_0x418164);}(function(_0x583f76,_0xb9fc04){const _0xbdea90=a458_0xe74f,_0x17b1d0=_0x583f76();while(!![]){try{const _0x22313c=parseInt(_0xbdea90(0x143))/0x1*(-parseInt(_0xbdea90(0x139))/0x2)+parseInt(_0xbdea90(0x145))/0x3*(-parseInt(_0xbdea90(0x141))/0x4)+parseInt(_0xbdea90(0x14e))/0x5*(parseInt(_0xbdea90(0x13a))/0x6)+-parseInt(_0xbdea90(0x14a))/0x7*(parseInt(_0xbdea90(0x14c))/0x8)+-parseInt(_0xbdea90(0x13d))/0x9*(parseInt(_0xbdea90(0x148))/0xa)+-parseInt(_0xbdea90(0x142))/0xb+parseInt(_0xbdea90(0x140))/0xc;if(_0x22313c===_0xb9fc04)break;else _0x17b1d0['push'](_0x17b1d0['shift']());}catch(_0x4afbe9){_0x17b1d0['push'](_0x17b1d0['shift']());}}}(a458_0x5273,0x4b6a3));function a458_0x5273(){const _0x3900ed=['2387728nqPqrT','\x0a\x20\x20\x20\x20and\x20DATE(tick.\x22createdAt\x22)\x20>=\x20\x27','10EGhegu','default','TicketsDayService','forEach','\x2023:59:59\x27\x0a\x20\x20\x20\x20GROUP\x20BY\x0a\x20\x20\x20\x20\x20\x20extract(hour\x20from\x20tick.\x22createdAt\x22)\x0a\x20\x20\x20\x20\x20\x20--to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd-mm-YYYY\x27)\x0a\x20\x20\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20\x20\x20horario\x20asc;\x0a\x20\x20\x20\x20','\x0a\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20COUNT(*)\x20AS\x20total,\x0a\x20\x20\x20\x20to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)\x20as\x20data\x0a\x20\x20FROM\x0a\x20\x20\x20\x20\x22TicketTraking\x22\x20tick\x0a\x20\x20WHERE\x0a\x20\x20\x20\x20tick.\x22companyId\x22\x20=\x20','../../database/index','2IHjFZI','568614KTgmyk','SELECT','total','79731tboaKb','\x0a\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20COUNT(*)\x20AS\x20total,\x0a\x20\x20\x20\x20\x20\x20extract(hour\x20from\x20tick.\x22createdAt\x22)\x20AS\x20horario\x0a\x20\x20\x20\x20\x20\x20--to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd-mm-YYYY\x27)\x20as\x20horario\x0a\x20\x20\x20\x20FROM\x0a\x20\x20\x20\x20\x20\x20\x22TicketTraking\x22\x20tick\x0a\x20\x20\x20\x20WHERE\x0a\x20\x20\x20\x20\x20\x20tick.\x22companyId\x22\x20=\x20','trim','15444672kvKHvp','36iVmzhZ','109813cxfxad','1994zsRkCC','defineProperty','94719CBbbaJ','\x2000:00:00\x27\x0a\x20\x20\x20\x20\x20\x20AND\x20DATE(tick.\x22createdAt\x22)\x20<=\x20\x27','\x27\x0a\x20\x20GROUP\x20BY\x0a\x20\x20\x20\x20to_char(DATE(tick.\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)\x0a\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20data\x20asc;\x0a\x20\x20','310gKunnV','\x27\x0a\x20\x20\x20\x20AND\x20DATE(tick.\x22createdAt\x22)\x20<=\x20\x27','14OSNAZe','__esModule'];a458_0x5273=function(){return _0x3900ed;};return a458_0x5273();}var __importDefault=this&&this['__importDefault']||function(_0x38ee40){const _0x195b6c=a458_0xe74f;return _0x38ee40&&_0x38ee40[_0x195b6c(0x14b)]?_0x38ee40:{'default':_0x38ee40};};Object[a458_0x38a453(0x144)](exports,a458_0x38a453(0x14b),{'value':!![]}),exports['TicketsDayService']=void 0x0;const index_1=__importDefault(require(a458_0x38a453(0x138))),sequelize_1=require('sequelize'),TicketsDayService=async({initialDate:_0x54519f,finalDate:_0x488efc,companyId:_0xdeccbe})=>{const _0x41502c=a458_0x38a453;let _0x32258e='',_0x200d99=0x0;_0x54519f&&_0x54519f[_0x41502c(0x13f)]()===_0x488efc&&_0x488efc[_0x41502c(0x13f)]()?_0x32258e=_0x41502c(0x13e)+_0xdeccbe+'\x0a\x20\x20\x20\x20\x20\x20and\x20DATE(tick.\x22createdAt\x22)\x20>=\x20\x27'+_0x54519f+_0x41502c(0x146)+_0x488efc+_0x41502c(0x152):_0x32258e=_0x41502c(0x153)+_0xdeccbe+_0x41502c(0x14d)+_0x54519f+_0x41502c(0x149)+_0x488efc+_0x41502c(0x147);const _0x37e857=await index_1[_0x41502c(0x14f)]['query'](_0x32258e,{'type':sequelize_1['QueryTypes'][_0x41502c(0x13b)]});return _0x37e857[_0x41502c(0x151)](_0x2da4ac=>{const _0x22d17f=_0x41502c;_0x200d99+=Number(_0x2da4ac[_0x22d17f(0x13c)]);}),{'data':_0x37e857,'count':_0x200d99};};exports[a458_0x38a453(0x150)]=TicketsDayService;