'use strict';const a534_0x4f778f=a534_0x257f;(function(_0x130ae3,_0x39581e){const _0x441571=a534_0x257f,_0x3c1af7=_0x130ae3();while(!![]){try{const _0x498e7a=-parseInt(_0x441571(0x170))/0x1+parseInt(_0x441571(0x159))/0x2*(-parseInt(_0x441571(0x14f))/0x3)+parseInt(_0x441571(0x150))/0x4*(-parseInt(_0x441571(0x15d))/0x5)+-parseInt(_0x441571(0x178))/0x6+parseInt(_0x441571(0x166))/0x7*(parseInt(_0x441571(0x16e))/0x8)+parseInt(_0x441571(0x17d))/0x9+parseInt(_0x441571(0x169))/0xa;if(_0x498e7a===_0x39581e)break;else _0x3c1af7['push'](_0x3c1af7['shift']());}catch(_0x54d1a3){_0x3c1af7['push'](_0x3c1af7['shift']());}}}(a534_0x4283,0xbff66));function a534_0x4283(){const _0x1ad48d=['../../models/Ticket','defineProperty','call_log','getMinutes','error','sendMessage','@sentry/node','1197623FoBXyh','__importDefault','__createBinding','25426510YCZtuQ','../../models/Contact','hasOwnProperty','Chamada\x20de\x20voz/vídeo\x20perdida\x20às\x20','replace','24dZNvlT','from','115281rxcRFz','captureException','getHours','../BaileysServices/CreateOrUpdateBaileysService','getOwnPropertyDescriptor','enabled','__importStar','value','2151144axjNHG','findOne','status','default','tag','3310839MwJFqw','log','2790651qjFnws','4VYsGdD','\x20is\x20calling\x20you\x20with\x20id\x20','acceptCallWhatsapp','__esModule','attrs','update','../MessageServices/CreateMessageService','offer','logger','2dTPpRX','configurable','create','call','6167445MQPflf','get'];a534_0x4283=function(){return _0x1ad48d;};return a534_0x4283();}var __createBinding=this&&this[a534_0x4f778f(0x168)]||(Object[a534_0x4f778f(0x15b)]?function(_0x4ba3b9,_0x458565,_0xa96f03,_0x2bc186){const _0x5b0b46=a534_0x4f778f;if(_0x2bc186===undefined)_0x2bc186=_0xa96f03;var _0x2c2690=Object[_0x5b0b46(0x174)](_0x458565,_0xa96f03);(!_0x2c2690||(_0x5b0b46(0x15e)in _0x2c2690?!_0x458565[_0x5b0b46(0x153)]:_0x2c2690['writable']||_0x2c2690[_0x5b0b46(0x15a)]))&&(_0x2c2690={'enumerable':!![],'get':function(){return _0x458565[_0xa96f03];}}),Object['defineProperty'](_0x4ba3b9,_0x2bc186,_0x2c2690);}:function(_0x89ed8c,_0xdde9c,_0xdc64a2,_0x22ce8e){if(_0x22ce8e===undefined)_0x22ce8e=_0xdc64a2;_0x89ed8c[_0x22ce8e]=_0xdde9c[_0xdc64a2];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a534_0x4f778f(0x15b)]?function(_0x1982fa,_0x43db51){Object['defineProperty'](_0x1982fa,'default',{'enumerable':!![],'value':_0x43db51});}:function(_0x4f8a43,_0x1aa4e0){const _0x3b9173=a534_0x4f778f;_0x4f8a43[_0x3b9173(0x17b)]=_0x1aa4e0;}),__importStar=this&&this[a534_0x4f778f(0x176)]||function(_0x473bc6){const _0x11d733=a534_0x4f778f;if(_0x473bc6&&_0x473bc6[_0x11d733(0x153)])return _0x473bc6;var _0x3f3f87={};if(_0x473bc6!=null){for(var _0x429f7c in _0x473bc6)if(_0x429f7c!=='default'&&Object['prototype'][_0x11d733(0x16b)][_0x11d733(0x15c)](_0x473bc6,_0x429f7c))__createBinding(_0x3f3f87,_0x473bc6,_0x429f7c);}return __setModuleDefault(_0x3f3f87,_0x473bc6),_0x3f3f87;},__importDefault=this&&this[a534_0x4f778f(0x167)]||function(_0x72d653){const _0xf15219=a534_0x4f778f;return _0x72d653&&_0x72d653[_0xf15219(0x153)]?_0x72d653:{'default':_0x72d653};};function a534_0x257f(_0x4b8751,_0x455cab){const _0x4283f7=a534_0x4283();return a534_0x257f=function(_0x257f77,_0x189e78){_0x257f77=_0x257f77-0x14e;let _0x17b959=_0x4283f7[_0x257f77];return _0x17b959;},a534_0x257f(_0x4b8751,_0x455cab);}Object[a534_0x4f778f(0x160)](exports,a534_0x4f778f(0x153),{'value':!![]});const Sentry=__importStar(require(a534_0x4f778f(0x165))),Setting_1=__importDefault(require('../../models/Setting')),Ticket_1=__importDefault(require(a534_0x4f778f(0x15f))),Contact_1=__importDefault(require(a534_0x4f778f(0x16a))),logger_1=require('../../utils/logger'),CreateOrUpdateBaileysService_1=__importDefault(require(a534_0x4f778f(0x173))),CreateMessageService_1=__importDefault(require(a534_0x4f778f(0x156))),wbotMonitor=async(_0x120592,_0xc89bd2,_0x518800)=>{const _0x447bcc=a534_0x4f778f;try{_0x120592['ws']['on']('CB:call',async _0x1d2962=>{const _0x6da356=a534_0x257f,_0x374213=_0x1d2962['content'][0x0];if(_0x374213[_0x6da356(0x17c)]===_0x6da356(0x157)){const {from:_0x351100,id:_0x2e1121}=_0x1d2962['attrs'];console[_0x6da356(0x14e)](_0x351100+_0x6da356(0x151)+_0x2e1121);}if(_0x374213[_0x6da356(0x17c)]==='terminate'){const _0x2a18fb=await Setting_1['default'][_0x6da356(0x179)]({'where':{'key':_0x6da356(0x152),'companyId':_0x518800}});if(_0x2a18fb?.[_0x6da356(0x177)]===_0x6da356(0x175)){await _0x120592[_0x6da356(0x164)](_0x1d2962[_0x6da356(0x154)][_0x6da356(0x16f)],{'text':'*Mensagem\x20Automática:*\x0aAs\x20chamadas\x20de\x20voz\x20e\x20vídeo\x20estão\x20desabilitas\x20para\x20esse\x20WhatsApp,\x20favor\x20enviar\x20uma\x20mensagem\x20de\x20texto.\x0a\x0aObrigado!'});const _0x29b304=_0x1d2962['attrs'][_0x6da356(0x16f)][_0x6da356(0x16d)](/\D/g,''),_0x162bc4=await Contact_1[_0x6da356(0x17b)][_0x6da356(0x179)]({'where':{'number':_0x29b304,'companyId':_0x518800}}),_0x2579a9=await Ticket_1[_0x6da356(0x17b)]['findOne']({'where':{'contactId':_0x162bc4['id'],'whatsappId':_0x120592['id'],'companyId':_0x518800}});if(!_0x2579a9)return;const _0x1b9bb3=new Date(),_0x458534=_0x1b9bb3[_0x6da356(0x172)](),_0x29c272=_0x1b9bb3[_0x6da356(0x162)](),_0x22b2b6=_0x6da356(0x16c)+_0x458534+':'+_0x29c272,_0x498056={'wid':_0x374213['attrs']['call-id'],'ticketId':_0x2579a9['id'],'contactId':_0x162bc4['id'],'body':_0x22b2b6,'fromMe':![],'mediaType':_0x6da356(0x161),'read':!![],'quotedMsgId':null,'ack':0x1};return await _0x2579a9[_0x6da356(0x155)]({'lastMessage':_0x22b2b6}),_0x2579a9[_0x6da356(0x17a)]==='closed'&&await _0x2579a9[_0x6da356(0x155)]({'status':'pending'}),(0x0,CreateMessageService_1[_0x6da356(0x17b)])({'messageData':_0x498056,'companyId':_0x518800});}}}),_0x120592['ev']['on']('contacts.upsert',async _0x359de4=>{const _0x1b77e6=a534_0x257f;await(0x0,CreateOrUpdateBaileysService_1[_0x1b77e6(0x17b)])({'whatsappId':_0xc89bd2['id'],'contacts':_0x359de4});});}catch(_0x42115a){Sentry[_0x447bcc(0x171)](_0x42115a),logger_1[_0x447bcc(0x158)][_0x447bcc(0x163)](_0x42115a);}};exports[a534_0x4f778f(0x17b)]=wbotMonitor;