'use strict';function a214_0x4b96(){const _0x6faa23=['36pxuOuQ','3190xIhkcX','default','39288TThlEA','2608504gqUlsL','1449iggVzS','7202391lzzIJq','__importDefault','../errors/AppError','57990pqhIRI','922889eQkfiU','__esModule','../services/MessageServices/GetMessagesService','24nUOoMc','ERR_FETCH_WAPP_MSG','GetWbotMessage','231466Xgjzif','238570gtJWmK','defineProperty'];a214_0x4b96=function(){return _0x6faa23;};return a214_0x4b96();}const a214_0x1c3b55=a214_0x120a;(function(_0x5e679f,_0x46ada4){const _0x148576=a214_0x120a,_0x1cc61=_0x5e679f();while(!![]){try{const _0x4462ee=-parseInt(_0x148576(0xc1))/0x1+parseInt(_0x148576(0xb4))/0x2*(-parseInt(_0x148576(0xc4))/0x3)+parseInt(_0x148576(0xbb))/0x4+-parseInt(_0x148576(0xb5))/0x5*(-parseInt(_0x148576(0xb7))/0x6)+-parseInt(_0x148576(0xbd))/0x7+-parseInt(_0x148576(0xba))/0x8*(-parseInt(_0x148576(0xbc))/0x9)+parseInt(_0x148576(0xc0))/0xa*(parseInt(_0x148576(0xb8))/0xb);if(_0x4462ee===_0x46ada4)break;else _0x1cc61['push'](_0x1cc61['shift']());}catch(_0x4d8508){_0x1cc61['push'](_0x1cc61['shift']());}}}(a214_0x4b96,0x82285));function a214_0x120a(_0x3a3b82,_0x2f7dcd){const _0x4b964b=a214_0x4b96();return a214_0x120a=function(_0x120a98,_0x4b4783){_0x120a98=_0x120a98-0xb2;let _0x3c061f=_0x4b964b[_0x120a98];return _0x3c061f;},a214_0x120a(_0x3a3b82,_0x2f7dcd);}var __importDefault=this&&this[a214_0x1c3b55(0xbe)]||function(_0x1e1717){const _0x4c6063=a214_0x1c3b55;return _0x1e1717&&_0x1e1717[_0x4c6063(0xc2)]?_0x1e1717:{'default':_0x1e1717};};Object[a214_0x1c3b55(0xb6)](exports,a214_0x1c3b55(0xc2),{'value':!![]}),exports[a214_0x1c3b55(0xb3)]=void 0x0;const AppError_1=__importDefault(require(a214_0x1c3b55(0xbf))),GetMessagesService_1=__importDefault(require(a214_0x1c3b55(0xc3))),GetWbotMessage=async(_0x11e33,_0x59032a)=>{const _0x5895b1=a214_0x1c3b55,_0x3e6cbd=async()=>{const _0x22441f=a214_0x120a,_0x490159=await(0x0,GetMessagesService_1[_0x22441f(0xb9)])({'id':_0x59032a});return _0x490159;};try{const _0x383b49=await _0x3e6cbd();if(!_0x383b49)throw new Error('Cannot\x20found\x20message\x20within\x20100\x20last\x20messages');return _0x383b49;}catch(_0xc167b3){console['log'](_0xc167b3);throw new AppError_1[(_0x5895b1(0xb9))](_0x5895b1(0xb2));}};exports[a214_0x1c3b55(0xb3)]=GetWbotMessage,exports[a214_0x1c3b55(0xb9)]=exports[a214_0x1c3b55(0xb3)];