'use strict';const a513_0xe06203=a513_0xff03;function a513_0xff03(_0x4b0f46,_0x4d3b09){const _0x3eb89c=a513_0x3eb8();return a513_0xff03=function(_0xff035a,_0x348c7a){_0xff035a=_0xff035a-0xc5;let _0x565df5=_0x3eb89c[_0xff035a];return _0x565df5;},a513_0xff03(_0x4b0f46,_0x4d3b09);}(function(_0x58b572,_0x2e798e){const _0x177a51=a513_0xff03,_0x1b15e1=_0x58b572();while(!![]){try{const _0x483fba=-parseInt(_0x177a51(0xd0))/0x1*(-parseInt(_0x177a51(0xdb))/0x2)+-parseInt(_0x177a51(0xc6))/0x3*(parseInt(_0x177a51(0xde))/0x4)+parseInt(_0x177a51(0xc7))/0x5+parseInt(_0x177a51(0xd6))/0x6+parseInt(_0x177a51(0xda))/0x7+parseInt(_0x177a51(0xd3))/0x8*(parseInt(_0x177a51(0xd9))/0x9)+-parseInt(_0x177a51(0xc5))/0xa*(parseInt(_0x177a51(0xd7))/0xb);if(_0x483fba===_0x2e798e)break;else _0x1b15e1['push'](_0x1b15e1['shift']());}catch(_0x89bea1){_0x1b15e1['push'](_0x1b15e1['shift']());}}}(a513_0x3eb8,0x842d4));var __importDefault=this&&this[a513_0xe06203(0xca)]||function(_0xd208e5){return _0xd208e5&&_0xd208e5['__esModule']?_0xd208e5:{'default':_0xd208e5};};Object[a513_0xe06203(0xc9)](exports,'__esModule',{'value':!![]});function a513_0x3eb8(){const _0x578dce=['279FwzSFP','2310791xPtvso','404186MfPrEQ','DESC','sequelize','28XIApUB','10bPBKFW','184713npNgEl','2616135bpNWzU','Sequelize','defineProperty','__importDefault','trim','col','default','findAndCountAll','LOWER','1Fvosrp','toLowerCase','createdAt','19592KbMMFu','LIKE','../../models/TicketNote','3593988IxYpDz','8337527fAmQEv','length'];a513_0x3eb8=function(){return _0x578dce;};return a513_0x3eb8();}const sequelize_1=require(a513_0xe06203(0xdd)),TicketNote_1=__importDefault(require(a513_0xe06203(0xd5))),ListTicketNotesService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const _0x5010b8=a513_0xe06203,_0x507d6e={[sequelize_1['Op']['or']]:[{'note':sequelize_1[_0x5010b8(0xc8)]['where'](sequelize_1[_0x5010b8(0xc8)]['fn'](_0x5010b8(0xcf),sequelize_1['Sequelize'][_0x5010b8(0xcc)]('note')),_0x5010b8(0xd4),'%'+searchParam[_0x5010b8(0xd1)]()[_0x5010b8(0xcb)]()+'%')}]},_0xa57717=0x14,_0x548852=_0xa57717*(+pageNumber-0x1),{count:_0x450984,rows:_0x65073e}=await TicketNote_1[_0x5010b8(0xcd)][_0x5010b8(0xce)]({'where':_0x507d6e,'limit':_0xa57717,'offset':_0x548852,'order':[[_0x5010b8(0xd2),_0x5010b8(0xdc)]]}),_0x333a75=_0x450984>_0x548852+_0x65073e[_0x5010b8(0xd8)];return{'ticketNotes':_0x65073e,'count':_0x450984,'hasMore':_0x333a75};};exports[a513_0xe06203(0xcd)]=ListTicketNotesService;