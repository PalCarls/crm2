'use strict';const a513_0x49b7cd=a513_0x26cd;(function(_0x36607c,_0x120c02){const _0x3f1049=a513_0x26cd,_0x177b79=_0x36607c();while(!![]){try{const _0x3a8481=-parseInt(_0x3f1049(0x12f))/0x1*(-parseInt(_0x3f1049(0x132))/0x2)+-parseInt(_0x3f1049(0x131))/0x3+parseInt(_0x3f1049(0x142))/0x4+parseInt(_0x3f1049(0x138))/0x5+-parseInt(_0x3f1049(0x136))/0x6+parseInt(_0x3f1049(0x130))/0x7*(parseInt(_0x3f1049(0x137))/0x8)+-parseInt(_0x3f1049(0x144))/0x9*(-parseInt(_0x3f1049(0x141))/0xa);if(_0x3a8481===_0x120c02)break;else _0x177b79['push'](_0x177b79['shift']());}catch(_0x14f9fa){_0x177b79['push'](_0x177b79['shift']());}}}(a513_0x1425,0x6d060));function a513_0x26cd(_0x1d7c45,_0x31fc39){const _0x142513=a513_0x1425();return a513_0x26cd=function(_0x26cdcd,_0x58a987){_0x26cdcd=_0x26cdcd-0x12d;let _0x1c839e=_0x142513[_0x26cdcd];return _0x1c839e;},a513_0x26cd(_0x1d7c45,_0x31fc39);}var __importDefault=this&&this[a513_0x49b7cd(0x13d)]||function(_0x5a1041){return _0x5a1041&&_0x5a1041['__esModule']?_0x5a1041:{'default':_0x5a1041};};function a513_0x1425(){const _0x2b532d=['where','4011759mWVRJS','default','findAndCountAll','9806kqweLW','561029Ivdblt','1734756fLEhaf','4USiCgQ','trim','length','createdAt','4333038KfEcVs','8TiwEHw','3376710EsOXle','toLowerCase','LIKE','Sequelize','sequelize','__importDefault','defineProperty','../../models/TicketNote','__esModule','20GlWVPD','321528hxJCJW'];a513_0x1425=function(){return _0x2b532d;};return a513_0x1425();}Object[a513_0x49b7cd(0x13e)](exports,a513_0x49b7cd(0x140),{'value':!![]});const sequelize_1=require(a513_0x49b7cd(0x13c)),TicketNote_1=__importDefault(require(a513_0x49b7cd(0x13f))),ListTicketNotesService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const _0x12ab3c=a513_0x49b7cd,_0x2ebe4f={[sequelize_1['Op']['or']]:[{'note':sequelize_1[_0x12ab3c(0x13b)][_0x12ab3c(0x143)](sequelize_1[_0x12ab3c(0x13b)]['fn']('LOWER',sequelize_1['Sequelize']['col']('note')),_0x12ab3c(0x13a),'%'+searchParam[_0x12ab3c(0x139)]()[_0x12ab3c(0x133)]()+'%')}]},_0x26713c=0x14,_0x36d0ee=_0x26713c*(+pageNumber-0x1),{count:_0x161384,rows:_0x65ebed}=await TicketNote_1['default'][_0x12ab3c(0x12e)]({'where':_0x2ebe4f,'limit':_0x26713c,'offset':_0x36d0ee,'order':[[_0x12ab3c(0x135),'DESC']]}),_0xf00a6b=_0x161384>_0x36d0ee+_0x65ebed[_0x12ab3c(0x134)];return{'ticketNotes':_0x65ebed,'count':_0x161384,'hasMore':_0xf00a6b};};exports[a513_0x49b7cd(0x12d)]=ListTicketNotesService;