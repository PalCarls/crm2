'use strict';function a546_0x3bfb(_0x3900bd,_0x5b0996){const _0x11584a=a546_0x1158();return a546_0x3bfb=function(_0x3bfbb9,_0x52dc9e){_0x3bfbb9=_0x3bfbb9-0x1be;let _0x13c727=_0x11584a[_0x3bfbb9];return _0x13c727;},a546_0x3bfb(_0x3900bd,_0x5b0996);}const a546_0xfbbaf0=a546_0x3bfb;function a546_0x1158(){const _0x49a923=['32212GpWTga','__importDefault','default','4299262ngpBnl','ASC','1017qdqKSP','company','18680bBSDfc','1208168SHAvlH','149282ENEyvW','550138swZJhH','4357648xYZkTv','132qnkcfi','__esModule','shortcode','5PKLUQs','114YoDnpc'];a546_0x1158=function(){return _0x49a923;};return a546_0x1158();}(function(_0x29101b,_0x3960c4){const _0x2f86b1=a546_0x3bfb,_0x49137f=_0x29101b();while(!![]){try{const _0x62bcd9=-parseInt(_0x2f86b1(0x1c0))/0x1+parseInt(_0x2f86b1(0x1c7))/0x2*(-parseInt(_0x2f86b1(0x1c6))/0x3)+-parseInt(_0x2f86b1(0x1be))/0x4*(-parseInt(_0x2f86b1(0x1c5))/0x5)+parseInt(_0x2f86b1(0x1c2))/0x6*(parseInt(_0x2f86b1(0x1bf))/0x7)+parseInt(_0x2f86b1(0x1c1))/0x8+parseInt(_0x2f86b1(0x1cc))/0x9*(-parseInt(_0x2f86b1(0x1ce))/0xa)+parseInt(_0x2f86b1(0x1ca))/0xb;if(_0x62bcd9===_0x3960c4)break;else _0x49137f['push'](_0x49137f['shift']());}catch(_0x131e80){_0x49137f['push'](_0x49137f['shift']());}}}(a546_0x1158,0x516c8));var __importDefault=this&&this[a546_0xfbbaf0(0x1c8)]||function(_0x411d58){const _0x330f2f=a546_0xfbbaf0;return _0x411d58&&_0x411d58[_0x330f2f(0x1c3)]?_0x411d58:{'default':_0x411d58};};Object['defineProperty'](exports,a546_0xfbbaf0(0x1c3),{'value':!![]});const QuickMessage_1=__importDefault(require('../../models/QuickMessage')),Company_1=__importDefault(require('../../models/Company')),FindService=async({companyId:_0x4c6c35,userId:_0x34d04b})=>{const _0x32544f=a546_0xfbbaf0,_0x24b1b2=await QuickMessage_1[_0x32544f(0x1c9)]['findAll']({'where':{'companyId':_0x4c6c35},'include':[{'model':Company_1[_0x32544f(0x1c9)],'as':_0x32544f(0x1cd),'attributes':['id','name']}],'order':[[_0x32544f(0x1c4),_0x32544f(0x1cb)]]});return _0x24b1b2;};exports[a546_0xfbbaf0(0x1c9)]=FindService;