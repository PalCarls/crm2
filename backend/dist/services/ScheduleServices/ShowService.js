'use strict';const a496_0x2e72a8=a496_0x69db;function a496_0x69db(_0x3775a7,_0x4ea2d1){const _0x21d23a=a496_0x21d2();return a496_0x69db=function(_0x69dbbd,_0x96fa9f){_0x69dbbd=_0x69dbbd-0x1b2;let _0xac0f25=_0x21d23a[_0x69dbbd];return _0xac0f25;},a496_0x69db(_0x3775a7,_0x4ea2d1);}(function(_0x2aecda,_0x5aa787){const _0x5ad85b=a496_0x69db,_0x38a237=_0x2aecda();while(!![]){try{const _0x1f136c=-parseInt(_0x5ad85b(0x1be))/0x1+-parseInt(_0x5ad85b(0x1c1))/0x2+-parseInt(_0x5ad85b(0x1b6))/0x3*(parseInt(_0x5ad85b(0x1c5))/0x4)+-parseInt(_0x5ad85b(0x1b7))/0x5+-parseInt(_0x5ad85b(0x1bb))/0x6+-parseInt(_0x5ad85b(0x1b8))/0x7*(parseInt(_0x5ad85b(0x1c3))/0x8)+-parseInt(_0x5ad85b(0x1c2))/0x9*(-parseInt(_0x5ad85b(0x1c0))/0xa);if(_0x1f136c===_0x5aa787)break;else _0x38a237['push'](_0x38a237['shift']());}catch(_0x142db2){_0x38a237['push'](_0x38a237['shift']());}}}(a496_0x21d2,0x5d863));function a496_0x21d2(){const _0x525a35=['524393jbwUal','../../models/Schedule','10sixJZp','632096PHpIaF','25064163DqaFbx','1264EZhuls','name','628mlzkYH','findByPk','default','companyId','../../models/Contact','__esModule','8412oONhRo','864315iAZYIu','8925KavUDI','Não\x20é\x20possível\x20excluir\x20registro\x20de\x20outra\x20empresa','contact','4481100TQPOnz','__importDefault','user'];a496_0x21d2=function(){return _0x525a35;};return a496_0x21d2();}var __importDefault=this&&this[a496_0x2e72a8(0x1bc)]||function(_0x2b22e2){const _0x32ca48=a496_0x2e72a8;return _0x2b22e2&&_0x2b22e2[_0x32ca48(0x1b5)]?_0x2b22e2:{'default':_0x2b22e2};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const Schedule_1=__importDefault(require(a496_0x2e72a8(0x1bf))),AppError_1=__importDefault(require('../../errors/AppError')),Contact_1=__importDefault(require(a496_0x2e72a8(0x1b4))),User_1=__importDefault(require('../../models/User')),ScheduleService=async(_0x3a171c,_0x2eeb56)=>{const _0x4a49b0=a496_0x2e72a8,_0x5bb819=await Schedule_1[_0x4a49b0(0x1b2)][_0x4a49b0(0x1c6)](_0x3a171c,{'include':[{'model':Contact_1[_0x4a49b0(0x1b2)],'as':_0x4a49b0(0x1ba),'attributes':['id',_0x4a49b0(0x1c4)]},{'model':User_1[_0x4a49b0(0x1b2)],'as':_0x4a49b0(0x1bd),'attributes':['id',_0x4a49b0(0x1c4)]}]});if(_0x5bb819?.[_0x4a49b0(0x1b3)]!==_0x2eeb56)throw new AppError_1[(_0x4a49b0(0x1b2))](_0x4a49b0(0x1b9));if(!_0x5bb819)throw new AppError_1[(_0x4a49b0(0x1b2))]('ERR_NO_SCHEDULE_FOUND',0x194);return _0x5bb819;};exports[a496_0x2e72a8(0x1b2)]=ScheduleService;