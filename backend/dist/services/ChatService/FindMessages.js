'use strict';const a378_0x1efac8=a378_0x2482;(function(_0x4f3547,_0x3e991b){const _0x4d2925=a378_0x2482,_0x38407a=_0x4f3547();while(!![]){try{const _0x4cb4ed=-parseInt(_0x4d2925(0x72))/0x1*(-parseInt(_0x4d2925(0x6f))/0x2)+parseInt(_0x4d2925(0x81))/0x3+-parseInt(_0x4d2925(0x6d))/0x4*(-parseInt(_0x4d2925(0x7b))/0x5)+-parseInt(_0x4d2925(0x7d))/0x6*(parseInt(_0x4d2925(0x74))/0x7)+-parseInt(_0x4d2925(0x76))/0x8*(parseInt(_0x4d2925(0x70))/0x9)+-parseInt(_0x4d2925(0x7a))/0xa+parseInt(_0x4d2925(0x6a))/0xb*(parseInt(_0x4d2925(0x6b))/0xc);if(_0x4cb4ed===_0x3e991b)break;else _0x38407a['push'](_0x38407a['shift']());}catch(_0x208140){_0x38407a['push'](_0x38407a['shift']());}}}(a378_0x13b3,0x798bd));var __importDefault=this&&this['__importDefault']||function(_0x1b0bff){const _0x29673c=a378_0x2482;return _0x1b0bff&&_0x1b0bff[_0x29673c(0x7c)]?_0x1b0bff:{'default':_0x1b0bff};};Object[a378_0x1efac8(0x7f)](exports,a378_0x1efac8(0x7c),{'value':!![]});function a378_0x13b3(){const _0x56511d=['length','6033HSjlDm','../../models/ChatUser','4977WtTarl','findAndCountAll','64gWzoKE','name','ASC','count','2258420HYwCgK','48895kknVdt','__esModule','198sCgrnd','sortBy','defineProperty','lodash','1754640LPDRYS','../../errors/AppError','sender','createdAt','11AxRyQE','3081300yIUnME','UNAUTHORIZED','16wiSVqF','default','38dlmwGW','279270pQJIyP'];a378_0x13b3=function(){return _0x56511d;};return a378_0x13b3();}const AppError_1=__importDefault(require(a378_0x1efac8(0x67))),ChatMessage_1=__importDefault(require('../../models/ChatMessage')),ChatUser_1=__importDefault(require(a378_0x1efac8(0x73))),User_1=__importDefault(require('../../models/User')),lodash_1=require(a378_0x1efac8(0x80)),FindMessages=async({chatId:_0x103975,ownerId:_0x1c4388,pageNumber:pageNumber='1'})=>{const _0x66a169=a378_0x1efac8,_0x3995fd=await ChatUser_1[_0x66a169(0x6e)][_0x66a169(0x79)]({'where':{'chatId':_0x103975,'userId':_0x1c4388}});if(_0x3995fd===0x0)throw new AppError_1[(_0x66a169(0x6e))](_0x66a169(0x6c),0x190);const _0x32885f=0x14,_0x582ad9=_0x32885f*(+pageNumber-0x1),{count:_0x2d712c,rows:_0x150246}=await ChatMessage_1[_0x66a169(0x6e)][_0x66a169(0x75)]({'where':{'chatId':_0x103975},'include':[{'model':User_1[_0x66a169(0x6e)],'as':_0x66a169(0x68),'attributes':['id',_0x66a169(0x77)]}],'limit':_0x32885f,'offset':_0x582ad9,'order':[[_0x66a169(0x69),'DESC']]}),_0xe38963=_0x2d712c>_0x582ad9+_0x150246[_0x66a169(0x71)],_0x366fe5=(0x0,lodash_1[_0x66a169(0x7e)])(_0x150246,['id',_0x66a169(0x78)]);return{'records':_0x366fe5,'count':_0x2d712c,'hasMore':_0xe38963};};function a378_0x2482(_0x4e425f,_0x46c6b9){const _0x13b335=a378_0x13b3();return a378_0x2482=function(_0x248294,_0x206c6c){_0x248294=_0x248294-0x67;let _0x33be77=_0x13b335[_0x248294];return _0x33be77;},a378_0x2482(_0x4e425f,_0x46c6b9);}exports[a378_0x1efac8(0x6e)]=FindMessages;