'use strict';const a423_0x1a3111=a423_0x457c;(function(_0x7651d8,_0x17430f){const _0x59a4b8=a423_0x457c,_0x2a01ab=_0x7651d8();while(!![]){try{const _0x5d7fde=parseInt(_0x59a4b8(0x1e0))/0x1*(parseInt(_0x59a4b8(0x1f0))/0x2)+parseInt(_0x59a4b8(0x1ef))/0x3+parseInt(_0x59a4b8(0x1e6))/0x4+parseInt(_0x59a4b8(0x1e8))/0x5*(-parseInt(_0x59a4b8(0x1e7))/0x6)+-parseInt(_0x59a4b8(0x1f2))/0x7*(parseInt(_0x59a4b8(0x1ee))/0x8)+parseInt(_0x59a4b8(0x1eb))/0x9*(-parseInt(_0x59a4b8(0x1dd))/0xa)+-parseInt(_0x59a4b8(0x1ea))/0xb;if(_0x5d7fde===_0x17430f)break;else _0x2a01ab['push'](_0x2a01ab['shift']());}catch(_0x3ba106){_0x2a01ab['push'](_0x2a01ab['shift']());}}}(a423_0x2bdb,0x4c9ca));function a423_0x457c(_0x2e3c5d,_0x7b1567){const _0x2bdb0b=a423_0x2bdb();return a423_0x457c=function(_0x457cd3,_0x32e734){_0x457cd3=_0x457cd3-0x1dd;let _0x59162e=_0x2bdb0b[_0x457cd3];return _0x59162e;},a423_0x457c(_0x2e3c5d,_0x7b1567);}var __importDefault=this&&this[a423_0x1a3111(0x1de)]||function(_0x335029){const _0x1f3fc3=a423_0x1a3111;return _0x335029&&_0x335029[_0x1f3fc3(0x1e3)]?_0x335029:{'default':_0x335029};};Object[a423_0x1a3111(0x1e2)](exports,a423_0x1a3111(0x1e3),{'value':!![]});function a423_0x2bdb(){const _0x756222=['../../models/Contact','defineProperty','__esModule','name','where','1746700AWTojo','5862cYCuGg','175VanRMA','findAll','368269VHnDyo','774wrVuId','default','../../errors/AppError','90512xONPHH','1724925JgTlkd','472CaMjKK','like','231XWswzZ','48440ZwsVic','__importDefault','sequelize','677sosHwt'];a423_0x2bdb=function(){return _0x756222;};return a423_0x2bdb();}const Contact_1=__importDefault(require(a423_0x1a3111(0x1e1))),AppError_1=__importDefault(require(a423_0x1a3111(0x1ed))),sequelize_1=require(a423_0x1a3111(0x1df)),SimpleListService=async({name:_0x306302,companyId:_0x36bd26})=>{const _0x5e44af=a423_0x1a3111;let _0x140eef={'order':[[_0x5e44af(0x1e4),'ASC']]};_0x306302&&(_0x140eef[_0x5e44af(0x1e5)]={'name':{[sequelize_1['Op'][_0x5e44af(0x1f1)]]:'%'+_0x306302+'%'}});_0x140eef['where']={..._0x140eef[_0x5e44af(0x1e5)],'companyId':_0x36bd26};const _0x40280d=await Contact_1['default'][_0x5e44af(0x1e9)](_0x140eef);if(!_0x40280d)throw new AppError_1[(_0x5e44af(0x1ec))]('ERR_NO_CONTACT_FOUND',0x194);return _0x40280d;};exports[a423_0x1a3111(0x1ec)]=SimpleListService;