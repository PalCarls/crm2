'use strict';const a41_0x4836b9=a41_0x3000;(function(_0x45a391,_0x3f0c53){const _0x344566=a41_0x3000,_0x36e107=_0x45a391();while(!![]){try{const _0x253461=-parseInt(_0x344566(0x1ed))/0x1+parseInt(_0x344566(0x1d3))/0x2*(parseInt(_0x344566(0x1ea))/0x3)+-parseInt(_0x344566(0x1db))/0x4+parseInt(_0x344566(0x1ec))/0x5*(parseInt(_0x344566(0x1e3))/0x6)+parseInt(_0x344566(0x1cf))/0x7+-parseInt(_0x344566(0x1e2))/0x8*(-parseInt(_0x344566(0x1e4))/0x9)+-parseInt(_0x344566(0x1de))/0xa*(parseInt(_0x344566(0x1f2))/0xb);if(_0x253461===_0x3f0c53)break;else _0x36e107['push'](_0x36e107['shift']());}catch(_0xfebe6c){_0x36e107['push'](_0x36e107['shift']());}}}(a41_0x1070,0x7f7f4));var __importDefault=this&&this['__importDefault']||function(_0x1b04fc){const _0x4f2016=a41_0x3000;return _0x1b04fc&&_0x1b04fc[_0x4f2016(0x1d2)]?_0x1b04fc:{'default':_0x1b04fc};};Object[a41_0x4836b9(0x1e6)](exports,a41_0x4836b9(0x1d2),{'value':!![]}),exports[a41_0x4836b9(0x1d1)]=exports[a41_0x4836b9(0x1e0)]=void 0x0;const Whatsapp_1=__importDefault(require('../models/Whatsapp')),facebookMessageListener_1=require(a41_0x4836b9(0x1e9)),index=async(_0x4ca9c1,_0x3be5da)=>{const _0x91445f=a41_0x4836b9,_0x37ec69=process[_0x91445f(0x1dd)][_0x91445f(0x1e5)]||_0x91445f(0x1da),_0x2fad7b=_0x4ca9c1['query'][_0x91445f(0x1d0)],_0x58c609=_0x4ca9c1[_0x91445f(0x1d7)][_0x91445f(0x1f4)],_0x29845f=_0x4ca9c1[_0x91445f(0x1d7)]['hub.challenge'];if(_0x2fad7b&&_0x58c609){if(_0x2fad7b===_0x91445f(0x1ef)&&_0x58c609===_0x37ec69)return _0x3be5da[_0x91445f(0x1e8)](0xc8)[_0x91445f(0x1f3)](_0x29845f);}return _0x3be5da[_0x91445f(0x1e8)](0x193)[_0x91445f(0x1dc)]({'message':_0x91445f(0x1ee)});};exports[a41_0x4836b9(0x1e0)]=index;function a41_0x3000(_0x259331,_0x29bf97){const _0x1070ac=a41_0x1070();return a41_0x3000=function(_0x300090,_0x3c9104){_0x300090=_0x300090-0x1cf;let _0x22c999=_0x1070ac[_0x300090];return _0x22c999;},a41_0x3000(_0x259331,_0x29bf97);}const webHook=async(_0x58bc8d,_0x2fadab)=>{const _0x2995f3=a41_0x4836b9;try{const {body:_0x518051}=_0x58bc8d;if(_0x518051[_0x2995f3(0x1f1)]===_0x2995f3(0x1e7)||_0x518051[_0x2995f3(0x1f1)]===_0x2995f3(0x1d6)){let _0x55f524;return _0x518051[_0x2995f3(0x1f1)]==='page'?_0x55f524=_0x2995f3(0x1d4):_0x55f524=_0x2995f3(0x1d6),_0x518051[_0x2995f3(0x1eb)]?.[_0x2995f3(0x1d8)](async _0x12caf0=>{const _0x5a1cb8=_0x2995f3,_0x485be7=await Whatsapp_1[_0x5a1cb8(0x1df)][_0x5a1cb8(0x1f0)]({'where':{'facebookPageUserId':_0x12caf0['id'],'channel':_0x55f524}});_0x485be7&&_0x12caf0['messaging']?.['forEach'](_0x1313c9=>{const _0x252567=_0x5a1cb8;(0x0,facebookMessageListener_1[_0x252567(0x1d5)])(_0x485be7,_0x1313c9,_0x55f524,_0x485be7[_0x252567(0x1d9)]);});}),_0x2fadab['status'](0xc8)[_0x2995f3(0x1dc)]({'message':_0x2995f3(0x1e1)});}return _0x2fadab[_0x2995f3(0x1e8)](0x194)['json']({'message':_0x518051});}catch(_0x5c50a9){return _0x2fadab['status'](0x1f4)[_0x2995f3(0x1dc)]({'message':_0x5c50a9});}};function a41_0x1070(){const _0x2c79da=['facebook','handleMessage','instagram','query','forEach','companyId','whaticket','648244AvdOVY','json','env','1810nKdhad','default','index','EVENT_RECEIVED','26944ZuJYvD','84fUqwAG','2007zCgXMe','VERIFY_TOKEN','defineProperty','page','status','../services/FacebookServices/facebookMessageListener','10083khYhcO','entry','96245xRmwTY','447509ITRxHQ','Forbidden','subscribe','findOne','object','99088izPLWE','send','hub.verify_token','6380703xzMtTS','hub.mode','webHook','__esModule','494eJHIPe'];a41_0x1070=function(){return _0x2c79da;};return a41_0x1070();}exports[a41_0x4836b9(0x1d1)]=webHook;