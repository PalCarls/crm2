'use strict';const a37_0x30a2b6=a37_0x4b86;(function(_0x142198,_0x28cd3c){const _0x4c772c=a37_0x4b86,_0x246055=_0x142198();while(!![]){try{const _0x56cc22=-parseInt(_0x4c772c(0x139))/0x1*(-parseInt(_0x4c772c(0x142))/0x2)+-parseInt(_0x4c772c(0x13e))/0x3+-parseInt(_0x4c772c(0x124))/0x4+parseInt(_0x4c772c(0x147))/0x5*(-parseInt(_0x4c772c(0x143))/0x6)+parseInt(_0x4c772c(0x129))/0x7*(-parseInt(_0x4c772c(0x141))/0x8)+parseInt(_0x4c772c(0x135))/0x9+parseInt(_0x4c772c(0x12e))/0xa;if(_0x56cc22===_0x28cd3c)break;else _0x246055['push'](_0x246055['shift']());}catch(_0x103640){_0x246055['push'](_0x246055['shift']());}}}(a37_0x3916,0x3bb33));function a37_0x3916(){const _0x5d3281=['webHook','default','facebook','707985aqyqIi','whaticket','page','__esModule','3auFVlP','index','defineProperty','__importDefault','messaging','32685UtWGeE','handleMessage','hub.mode','8aDpOtW','312864BWsTbJ','54Dmoldi','../services/FacebookServices/facebookMessageListener','entry','findOne','156505nclNzS','status','send','hub.verify_token','1593628uDaZhn','env','hub.challenge','instagram','subscribe','2560537mVJEzi','../models/Whatsapp','EVENT_RECEIVED','VERIFY_TOKEN','object','7533720enNURL','json','query','companyId'];a37_0x3916=function(){return _0x5d3281;};return a37_0x3916();}function a37_0x4b86(_0xbaf600,_0x44ef5b){const _0x391680=a37_0x3916();return a37_0x4b86=function(_0x4b8680,_0x259d2c){_0x4b8680=_0x4b8680-0x122;let _0x18db72=_0x391680[_0x4b8680];return _0x18db72;},a37_0x4b86(_0xbaf600,_0x44ef5b);}var __importDefault=this&&this[a37_0x30a2b6(0x13c)]||function(_0x4ec83f){const _0x4df489=a37_0x30a2b6;return _0x4ec83f&&_0x4ec83f[_0x4df489(0x138)]?_0x4ec83f:{'default':_0x4ec83f};};Object[a37_0x30a2b6(0x13b)](exports,a37_0x30a2b6(0x138),{'value':!![]}),exports[a37_0x30a2b6(0x132)]=exports['index']=void 0x0;const Whatsapp_1=__importDefault(require(a37_0x30a2b6(0x12a))),facebookMessageListener_1=require(a37_0x30a2b6(0x144)),index=async(_0x5c83d3,_0x155607)=>{const _0x35b32c=a37_0x30a2b6,_0x1cfb34=process[_0x35b32c(0x125)][_0x35b32c(0x12c)]||_0x35b32c(0x136),_0x34e829=_0x5c83d3['query'][_0x35b32c(0x140)],_0x5d204e=_0x5c83d3[_0x35b32c(0x130)][_0x35b32c(0x123)],_0x364943=_0x5c83d3['query'][_0x35b32c(0x126)];if(_0x34e829&&_0x5d204e){if(_0x34e829===_0x35b32c(0x128)&&_0x5d204e===_0x1cfb34)return _0x155607[_0x35b32c(0x148)](0xc8)[_0x35b32c(0x122)](_0x364943);}return _0x155607[_0x35b32c(0x148)](0x193)[_0x35b32c(0x12f)]({'message':'Forbidden'});};exports[a37_0x30a2b6(0x13a)]=index;const webHook=async(_0x5b3701,_0x17ef95)=>{const _0xfc3386=a37_0x30a2b6;try{const {body:_0x22ab51}=_0x5b3701;if(_0x22ab51[_0xfc3386(0x12d)]===_0xfc3386(0x137)||_0x22ab51['object']===_0xfc3386(0x127)){let _0xbb3be2;return _0x22ab51['object']===_0xfc3386(0x137)?_0xbb3be2=_0xfc3386(0x134):_0xbb3be2='instagram',_0x22ab51[_0xfc3386(0x145)]?.['forEach'](async _0x4c93ff=>{const _0x2160ff=_0xfc3386,_0x3bba3f=await Whatsapp_1[_0x2160ff(0x133)][_0x2160ff(0x146)]({'where':{'facebookPageUserId':_0x4c93ff['id'],'channel':_0xbb3be2}});_0x3bba3f&&_0x4c93ff[_0x2160ff(0x13d)]?.['forEach'](_0x17e87d=>{const _0x2db376=_0x2160ff;(0x0,facebookMessageListener_1[_0x2db376(0x13f)])(_0x3bba3f,_0x17e87d,_0xbb3be2,_0x3bba3f[_0x2db376(0x131)]);});}),_0x17ef95[_0xfc3386(0x148)](0xc8)[_0xfc3386(0x12f)]({'message':_0xfc3386(0x12b)});}return _0x17ef95[_0xfc3386(0x148)](0x194)[_0xfc3386(0x12f)]({'message':_0x22ab51});}catch(_0x283e15){return _0x17ef95[_0xfc3386(0x148)](0x1f4)['json']({'message':_0x283e15});}};exports[a37_0x30a2b6(0x132)]=webHook;