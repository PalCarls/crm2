'use strict';const a511_0x2a6736=a511_0x3f0d;function a511_0x3f0d(_0x53aec2,_0x38082f){const _0x27dffa=a511_0x27df();return a511_0x3f0d=function(_0x3f0d32,_0x285905){_0x3f0d32=_0x3f0d32-0x1ae;let _0x334761=_0x27dffa[_0x3f0d32];return _0x334761;},a511_0x3f0d(_0x53aec2,_0x38082f);}(function(_0x1f539e,_0xdab56a){const _0x51c59c=a511_0x3f0d,_0x1050f0=_0x1f539e();while(!![]){try{const _0x5bdde3=parseInt(_0x51c59c(0x1c0))/0x1+parseInt(_0x51c59c(0x1b8))/0x2+parseInt(_0x51c59c(0x1be))/0x3+-parseInt(_0x51c59c(0x1ae))/0x4+-parseInt(_0x51c59c(0x1b2))/0x5+parseInt(_0x51c59c(0x1bc))/0x6*(-parseInt(_0x51c59c(0x1bd))/0x7)+-parseInt(_0x51c59c(0x1bf))/0x8*(-parseInt(_0x51c59c(0x1b4))/0x9);if(_0x5bdde3===_0xdab56a)break;else _0x1050f0['push'](_0x1050f0['shift']());}catch(_0x1da8c2){_0x1050f0['push'](_0x1050f0['shift']());}}}(a511_0x27df,0x88fce));function a511_0x27df(){const _0x272c43=['defineProperty','$get','../../models/User','354fVXzOE','39473CrdnZx','2464125LiQTVR','16728POgKQU','238214cCoBPC','2421280hnupVF','findOne','__importDefault','ERR_NO_USER_FOUND','1969140HtVCqG','__esModule','3303wUXXGN','../../errors/AppError','destroy','default','131930DSYcAC'];a511_0x27df=function(){return _0x272c43;};return a511_0x27df();}var __importDefault=this&&this[a511_0x2a6736(0x1b0)]||function(_0x7453ee){const _0x31875a=a511_0x2a6736;return _0x7453ee&&_0x7453ee[_0x31875a(0x1b3)]?_0x7453ee:{'default':_0x7453ee};};Object[a511_0x2a6736(0x1b9)](exports,'__esModule',{'value':!![]});const User_1=__importDefault(require(a511_0x2a6736(0x1bb))),AppError_1=__importDefault(require(a511_0x2a6736(0x1b5))),UpdateDeletedUserOpenTicketsStatus_1=__importDefault(require('../../helpers/UpdateDeletedUserOpenTicketsStatus')),DeleteUserService=async(_0x3167b2,_0x46f60b)=>{const _0x25b026=a511_0x2a6736,_0x4a4612=await User_1[_0x25b026(0x1b7)][_0x25b026(0x1af)]({'where':{'id':_0x3167b2}});if(!_0x4a4612)throw new AppError_1[(_0x25b026(0x1b7))](_0x25b026(0x1b1),0x194);const _0x1c0bc2=await _0x4a4612[_0x25b026(0x1ba)]('tickets',{'where':{'status':'open'}});_0x1c0bc2['length']>0x0&&(0x0,UpdateDeletedUserOpenTicketsStatus_1[_0x25b026(0x1b7)])(_0x1c0bc2,_0x46f60b),await _0x4a4612[_0x25b026(0x1b6)]();};exports['default']=DeleteUserService;