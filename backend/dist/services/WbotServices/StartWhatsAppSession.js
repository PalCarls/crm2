'use strict';const a531_0x4335bd=a531_0x2f04;(function(_0x343ac1,_0xbc338a){const _0x1eb96a=a531_0x2f04,_0x223946=_0x343ac1();while(!![]){try{const _0xe53df5=-parseInt(_0x1eb96a(0x1b9))/0x1+-parseInt(_0x1eb96a(0x1bf))/0x2+-parseInt(_0x1eb96a(0x1b7))/0x3+parseInt(_0x1eb96a(0x1c4))/0x4+parseInt(_0x1eb96a(0x1d0))/0x5*(-parseInt(_0x1eb96a(0x1c5))/0x6)+parseInt(_0x1eb96a(0x1b4))/0x7+parseInt(_0x1eb96a(0x1d6))/0x8*(parseInt(_0x1eb96a(0x1c7))/0x9);if(_0xe53df5===_0xbc338a)break;else _0x223946['push'](_0x223946['shift']());}catch(_0x460751){_0x223946['push'](_0x223946['shift']());}}}(a531_0x5c2c,0x860b3));function a531_0x2f04(_0x200d95,_0xab786b){const _0x5c2c3b=a531_0x5c2c();return a531_0x2f04=function(_0x2f0438,_0x3847e8){_0x2f0438=_0x2f0438-0x1b3;let _0x4c1b98=_0x5c2c3b[_0x2f0438];return _0x4c1b98;},a531_0x2f04(_0x200d95,_0xab786b);}function a531_0x5c2c(){const _0x1c0d18=['./wbotMessageListener','get','emit','48jZAKyU','../../utils/logger','5501209WExUpQ','initWASocket','prototype','244815NEFwkW','__esModule','815662wynJhf','__importDefault','captureException','StartWhatsAppSession','configurable','update','724908YhXBHe','wbotMessageListener','company-','call','hasOwnProperty','2068836dDIlSv','102834gdZEfw','__setModuleDefault','1581174BNLQcM','default','defineProperty','@sentry/node','getOwnPropertyDescriptor','create','__importStar','error','__createBinding','160wFRVWv','../../libs/socket','./wbotMonitor'];a531_0x5c2c=function(){return _0x1c0d18;};return a531_0x5c2c();}var __createBinding=this&&this[a531_0x4335bd(0x1cf)]||(Object[a531_0x4335bd(0x1cc)]?function(_0x5755fa,_0x4818b2,_0x2c0b01,_0x2a1eeb){const _0x262cc3=a531_0x4335bd;if(_0x2a1eeb===undefined)_0x2a1eeb=_0x2c0b01;var _0x17655c=Object[_0x262cc3(0x1cb)](_0x4818b2,_0x2c0b01);(!_0x17655c||(_0x262cc3(0x1d4)in _0x17655c?!_0x4818b2['__esModule']:_0x17655c['writable']||_0x17655c[_0x262cc3(0x1bd)]))&&(_0x17655c={'enumerable':!![],'get':function(){return _0x4818b2[_0x2c0b01];}}),Object[_0x262cc3(0x1c9)](_0x5755fa,_0x2a1eeb,_0x17655c);}:function(_0x7293cf,_0x29a4d0,_0x557f25,_0xe28bc5){if(_0xe28bc5===undefined)_0xe28bc5=_0x557f25;_0x7293cf[_0xe28bc5]=_0x29a4d0[_0x557f25];}),__setModuleDefault=this&&this[a531_0x4335bd(0x1c6)]||(Object['create']?function(_0x3965fa,_0x13d7e7){const _0x2aabd7=a531_0x4335bd;Object[_0x2aabd7(0x1c9)](_0x3965fa,_0x2aabd7(0x1c8),{'enumerable':!![],'value':_0x13d7e7});}:function(_0x1ea136,_0x5a9501){_0x1ea136['default']=_0x5a9501;}),__importStar=this&&this[a531_0x4335bd(0x1cd)]||function(_0x704277){const _0x3ff525=a531_0x4335bd;if(_0x704277&&_0x704277[_0x3ff525(0x1b8)])return _0x704277;var _0x24753c={};if(_0x704277!=null){for(var _0x40391e in _0x704277)if(_0x40391e!==_0x3ff525(0x1c8)&&Object[_0x3ff525(0x1b6)][_0x3ff525(0x1c3)][_0x3ff525(0x1c2)](_0x704277,_0x40391e))__createBinding(_0x24753c,_0x704277,_0x40391e);}return __setModuleDefault(_0x24753c,_0x704277),_0x24753c;},__importDefault=this&&this[a531_0x4335bd(0x1ba)]||function(_0x57a0f8){const _0x7a03f7=a531_0x4335bd;return _0x57a0f8&&_0x57a0f8[_0x7a03f7(0x1b8)]?_0x57a0f8:{'default':_0x57a0f8};};Object[a531_0x4335bd(0x1c9)](exports,'__esModule',{'value':!![]}),exports[a531_0x4335bd(0x1bc)]=void 0x0;const wbot_1=require('../../libs/wbot'),wbotMessageListener_1=require(a531_0x4335bd(0x1d3)),socket_1=require(a531_0x4335bd(0x1d1)),wbotMonitor_1=__importDefault(require(a531_0x4335bd(0x1d2))),logger_1=require(a531_0x4335bd(0x1b3)),Sentry=__importStar(require(a531_0x4335bd(0x1ca))),StartWhatsAppSession=async(_0xcb9878,_0x3ae204)=>{const _0x376cd7=a531_0x4335bd;await _0xcb9878[_0x376cd7(0x1be)]({'status':'OPENING'});const _0x1fa638=(0x0,socket_1['getIO'])();_0x1fa638[_0x376cd7(0x1d5)](_0x376cd7(0x1c1)+_0x3ae204+'-whatsappSession',{'action':_0x376cd7(0x1be),'session':_0xcb9878});try{const _0x36be5d=await(0x0,wbot_1[_0x376cd7(0x1b5)])(_0xcb9878);(0x0,wbotMessageListener_1[_0x376cd7(0x1c0)])(_0x36be5d,_0x3ae204),(0x0,wbotMonitor_1[_0x376cd7(0x1c8)])(_0x36be5d,_0xcb9878,_0x3ae204);}catch(_0xeb49f4){Sentry[_0x376cd7(0x1bb)](_0xeb49f4),logger_1['logger'][_0x376cd7(0x1ce)](_0xeb49f4);}};exports[a531_0x4335bd(0x1bc)]=StartWhatsAppSession;