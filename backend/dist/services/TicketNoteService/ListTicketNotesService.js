'use strict';const a528_0x13c32a=a528_0x16c4;(function(_0xa6c99c,_0x2fd446){const _0x2fc8e4=a528_0x16c4,_0x321fde=_0xa6c99c();while(!![]){try{const _0x35fd4a=parseInt(_0x2fc8e4(0x10f))/0x1*(-parseInt(_0x2fc8e4(0x10c))/0x2)+-parseInt(_0x2fc8e4(0x109))/0x3*(parseInt(_0x2fc8e4(0x111))/0x4)+-parseInt(_0x2fc8e4(0x110))/0x5*(parseInt(_0x2fc8e4(0x106))/0x6)+parseInt(_0x2fc8e4(0x11b))/0x7*(parseInt(_0x2fc8e4(0x112))/0x8)+-parseInt(_0x2fc8e4(0x10a))/0x9*(-parseInt(_0x2fc8e4(0x117))/0xa)+parseInt(_0x2fc8e4(0x11d))/0xb+-parseInt(_0x2fc8e4(0x10b))/0xc*(-parseInt(_0x2fc8e4(0x113))/0xd);if(_0x35fd4a===_0x2fd446)break;else _0x321fde['push'](_0x321fde['shift']());}catch(_0xd2db9){_0x321fde['push'](_0x321fde['shift']());}}}(a528_0xfa09,0xd9947));var __importDefault=this&&this['__importDefault']||function(_0xb2b97a){return _0xb2b97a&&_0xb2b97a['__esModule']?_0xb2b97a:{'default':_0xb2b97a};};Object[a528_0x13c32a(0x107)](exports,a528_0x13c32a(0x115),{'value':!![]});const sequelize_1=require(a528_0x13c32a(0x104)),TicketNote_1=__importDefault(require(a528_0x13c32a(0x116))),ListTicketNotesService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const _0x10a3a5=a528_0x13c32a,_0x266ba3={[sequelize_1['Op']['or']]:[{'note':sequelize_1[_0x10a3a5(0x108)][_0x10a3a5(0x119)](sequelize_1[_0x10a3a5(0x108)]['fn'](_0x10a3a5(0x11a),sequelize_1[_0x10a3a5(0x108)][_0x10a3a5(0x10e)]('note')),'LIKE','%'+searchParam[_0x10a3a5(0x114)]()[_0x10a3a5(0x105)]()+'%')}]},_0x53dee2=0x14,_0x37dff9=_0x53dee2*(+pageNumber-0x1),{count:_0x42ae33,rows:_0x590da1}=await TicketNote_1[_0x10a3a5(0x11c)][_0x10a3a5(0x10d)]({'where':_0x266ba3,'limit':_0x53dee2,'offset':_0x37dff9,'order':[['createdAt',_0x10a3a5(0x118)]]}),_0x54d6d8=_0x42ae33>_0x37dff9+_0x590da1['length'];return{'ticketNotes':_0x590da1,'count':_0x42ae33,'hasMore':_0x54d6d8};};function a528_0x16c4(_0x12be89,_0x3f9ce5){const _0xfa09a7=a528_0xfa09();return a528_0x16c4=function(_0x16c46b,_0x11e9df){_0x16c46b=_0x16c46b-0x104;let _0x8cb586=_0xfa09a7[_0x16c46b];return _0x8cb586;},a528_0x16c4(_0x12be89,_0x3f9ce5);}exports[a528_0x13c32a(0x11c)]=ListTicketNotesService;function a528_0xfa09(){const _0x2fac53=['findAndCountAll','col','13505oMhchn','3666865WZMCMt','1672604iktOUF','7203032ZOzeGd','14752556ZpOSVg','toLowerCase','__esModule','../../models/TicketNote','20splkgQ','DESC','where','LOWER','7tzTGQc','default','11013387tRqfEn','sequelize','trim','6QXOQFK','defineProperty','Sequelize','3MNeuEz','572571sykZBJ','12uPayiO','166bAoHME'];a528_0xfa09=function(){return _0x2fac53;};return a528_0xfa09();}