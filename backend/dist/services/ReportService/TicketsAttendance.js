'use strict';function a512_0x2b42(_0x5908c4,_0x3e60c2){const _0x28544c=a512_0x2854();return a512_0x2b42=function(_0x2b42d3,_0x266eaf){_0x2b42d3=_0x2b42d3-0x1eb;let _0x7a55d1=_0x28544c[_0x2b42d3];return _0x7a55d1;},a512_0x2b42(_0x5908c4,_0x3e60c2);}const a512_0x3fb062=a512_0x2b42;(function(_0x37aaa1,_0x3caaf8){const _0x4035a8=a512_0x2b42,_0x1e8d2d=_0x37aaa1();while(!![]){try{const _0x386a1a=parseInt(_0x4035a8(0x1f6))/0x1*(-parseInt(_0x4035a8(0x207))/0x2)+-parseInt(_0x4035a8(0x201))/0x3*(parseInt(_0x4035a8(0x1fd))/0x4)+-parseInt(_0x4035a8(0x202))/0x5+parseInt(_0x4035a8(0x1ef))/0x6*(parseInt(_0x4035a8(0x1ff))/0x7)+-parseInt(_0x4035a8(0x1f1))/0x8*(parseInt(_0x4035a8(0x1f9))/0x9)+-parseInt(_0x4035a8(0x1f4))/0xa+parseInt(_0x4035a8(0x1f8))/0xb*(parseInt(_0x4035a8(0x1ec))/0xc);if(_0x386a1a===_0x3caaf8)break;else _0x1e8d2d['push'](_0x1e8d2d['shift']());}catch(_0x10461d){_0x1e8d2d['push'](_0x1e8d2d['shift']());}}}(a512_0x2854,0x9ea93));var __importDefault=this&&this[a512_0x3fb062(0x1fe)]||function(_0x273b6c){const _0x300a3b=a512_0x3fb062;return _0x273b6c&&_0x273b6c[_0x300a3b(0x205)]?_0x273b6c:{'default':_0x273b6c};};Object[a512_0x3fb062(0x208)](exports,a512_0x3fb062(0x205),{'value':!![]}),exports[a512_0x3fb062(0x206)]=void 0x0;function a512_0x2854(){const _0x27479e=['7srhVdr','query','25563UEQyEg','1925990YCoxok','SELECT','nome','__esModule','TicketsAttendance','2XtejsZ','defineProperty','\x2000:00:00\x27\x0a\x20\x20\x20\x20and\x20tt.\x22finishedAt\x22\x20<=\x20\x27','29900268uMEHGJ','sequelize','\x0a\x20\x20select\x0a\x20\x20\x20\x20COUNT(*)\x20AS\x20quantidade,\x0a\x20\x20\x20\x20u.name\x20AS\x20nome\x0a\x20\x20from\x0a\x20\x20\x20\x20\x22TicketTraking\x22\x20tt\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20u.id\x20=\x20tt.\x22userId\x22\x0a\x20\x20where\x0a\x20\x20\x20\x20tt.\x22companyId\x22\x20=\x20','4144242lUYvqw','\x2023:59:59\x27\x0a\x20\x20group\x20by\x0a\x20\x20\x20\x20nome\x0a\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20nome\x20asc','8jnGVSc','name','../../database/index','3792330edmMSa','QueryTypes','475317acvXYd','\x0a\x20\x20\x20\x20and\x20\x22ticketId\x22\x20is\x20not\x20null\x0a\x20\x20\x20\x20and\x20tt.\x22userId\x22\x20is\x20not\x20null\x0a\x20\x20\x20\x20and\x20tt.\x22finishedAt\x22\x20>=\x20\x27','11uxcFGg','4579569ciigry','push','findIndex','default','368HgpUgI','__importDefault'];a512_0x2854=function(){return _0x27479e;};return a512_0x2854();}const index_1=__importDefault(require(a512_0x3fb062(0x1f3))),sequelize_1=require(a512_0x3fb062(0x1ed)),TicketsAttendance=async({initialDate:_0x2bad7b,finalDate:_0x5e1a9f,companyId:_0x5e2f55})=>{const _0x7ab31e=a512_0x3fb062,_0x1ddd39='select\x20u.name\x20from\x20\x22Users\x22\x20u\x20where\x20u.\x22companyId\x22\x20=\x20'+_0x5e2f55,_0x3beb67=await index_1[_0x7ab31e(0x1fc)]['query'](_0x1ddd39,{'type':sequelize_1[_0x7ab31e(0x1f5)][_0x7ab31e(0x203)]}),_0x5ec364=_0x7ab31e(0x1ee)+_0x5e2f55+_0x7ab31e(0x1f7)+_0x2bad7b+_0x7ab31e(0x1eb)+_0x5e1a9f+_0x7ab31e(0x1f0),_0x4e6379=await index_1['default'][_0x7ab31e(0x200)](_0x5ec364,{'type':sequelize_1[_0x7ab31e(0x1f5)]['SELECT']});return _0x3beb67['map'](_0x1aacf2=>{const _0x284cdc=_0x7ab31e;let _0x5686e1=_0x4e6379[_0x284cdc(0x1fb)](_0x2ad6ee=>_0x2ad6ee[_0x284cdc(0x204)]===_0x1aacf2[_0x284cdc(0x1f2)]);_0x5686e1===-0x1&&_0x4e6379[_0x284cdc(0x1fa)]({'quantidade':0x0,'nome':_0x1aacf2[_0x284cdc(0x1f2)]});}),{'data':_0x4e6379};};exports[a512_0x3fb062(0x206)]=TicketsAttendance;