<<<<<<< HEAD
'use strict';const a621_0x2ab841=a621_0x3a48;(function(_0x5302a6,_0x1abc2){const _0x24f7bc=a621_0x3a48,_0xad77c7=_0x5302a6();while(!![]){try{const _0x26431c=parseInt(_0x24f7bc(0xda))/0x1*(-parseInt(_0x24f7bc(0xed))/0x2)+parseInt(_0x24f7bc(0xde))/0x3+parseInt(_0x24f7bc(0xe9))/0x4*(-parseInt(_0x24f7bc(0xdd))/0x5)+parseInt(_0x24f7bc(0xf7))/0x6*(parseInt(_0x24f7bc(0x113))/0x7)+parseInt(_0x24f7bc(0xe8))/0x8*(parseInt(_0x24f7bc(0xfa))/0x9)+parseInt(_0x24f7bc(0xf3))/0xa+-parseInt(_0x24f7bc(0xfb))/0xb;if(_0x26431c===_0x1abc2)break;else _0xad77c7['push'](_0xad77c7['shift']());}catch(_0x222db9){_0xad77c7['push'](_0xad77c7['shift']());}}}(a621_0xdedd,0xeba21));var __importDefault=this&&this[a621_0x2ab841(0xe0)]||function(_0x50b50f){return _0x50b50f&&_0x50b50f['__esModule']?_0x50b50f:{'default':_0x50b50f};};Object['defineProperty'](exports,a621_0x2ab841(0xf0),{'value':!![]}),exports[a621_0x2ab841(0xf5)]=void 0x0;const AppError_1=__importDefault(require(a621_0x2ab841(0xe1))),Whatsapp_1=__importDefault(require(a621_0x2ab841(0xef))),socket_1=require(a621_0x2ab841(0xfc)),Ticket_1=__importDefault(require(a621_0x2ab841(0xe2))),sequelize_1=require(a621_0x2ab841(0x101)),date_fns_1=require(a621_0x2ab841(0x109)),UpdateTicketService_1=__importDefault(require(a621_0x2ab841(0x100))),wbot_1=require(a621_0x2ab841(0xfd)),wbotMessageListener_1=require('../WbotServices/wbotMessageListener'),moment_1=__importDefault(require(a621_0x2ab841(0xec))),addLogs_1=require(a621_0x2ab841(0x114)),closeTicketsImported=async _0x2b0424=>{const _0x263541=a621_0x2ab841,_0x5d4115=await Ticket_1[_0x263541(0x103)][_0x263541(0xf8)]({'where':{'status':_0x263541(0x108),'whatsappId':_0x2b0424,'imported':{[sequelize_1['Op']['lt']]:+(0x0,date_fns_1['add'])(new Date(),{'hours':+0x5})}}});for(const _0x186066 of _0x5d4115){await new Promise(_0x340665=>setTimeout(_0x340665,0x14a)),await(0x0,UpdateTicketService_1[_0x263541(0x103)])({'ticketData':{'status':_0x263541(0x10c)},'ticketId':_0x186066['id'],'companyId':_0x186066['companyId']});}let _0x44ebb8=await Whatsapp_1[_0x263541(0x103)][_0x263541(0xf1)](_0x2b0424);_0x44ebb8[_0x263541(0x107)]({'statusImportMessages':null});const _0x4d8bd1=(0x0,socket_1[_0x263541(0xf6)])();_0x4d8bd1[_0x263541(0x105)](_0x263541(0x110)+_0x44ebb8['companyId'],{'action':_0x263541(0xd8)});};function a621_0xdedd(){const _0xdfa82f=['importRecentMessages','has','5688dYcyDC','36KUkLsA','\x0aMensagem\x20','floor','moment','90KUcyic','importOldMessages','../../models/Whatsapp','__esModule','findByPk','key','597980VVYSsW','.txt','closeTicketsImported','getIO','9110886RKTavi','findAll','\x20\x0a\x20\x20\x20\x20Selecionado\x20Data\x20final\x20da\x20importação:\x20','11574kDCjOK','20843647qIAlhk','../../libs/socket','../../libs/wbot','set','format','../TicketServices/UpdateTicketService','sequelize','\x0a\x20\x20\x20\x20Whatsapp\x20Id:\x20','default','DD/MM/YYYY\x20HH:mm:ss','emit','getWbot','update','pending','date-fns','renderButtonCloseTickets','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','closed','\x20de\x20','getTime','\x0a\x20\x20\x20\x20Selecionado\x20Data\x20de\x20inicio\x20de\x20importação:\x20','importMessages-','processImportMessagesWppId','whatsapps','7iBtjCE','../../helpers/addLogs','handleMessage','refresh','companyId','4459VzUWxp','closedTicketsPostImported','DD/MM/YY\x20HH:mm:ss','100735ctrEpY','2248149wLleoU','length','__importDefault','../../errors/AppError','../../models/Ticket','messageTimestamp','sort','addLogs'];a621_0xdedd=function(){return _0xdfa82f;};return a621_0xdedd();}exports[a621_0x2ab841(0xf5)]=closeTicketsImported;function sortByMessageTimestamp(_0xc3978f,_0xe7e9a0){const _0x45e1a4=a621_0x2ab841;return _0xe7e9a0[_0x45e1a4(0xe3)]-_0xc3978f['messageTimestamp'];}function cleaner(_0x313884){const _0x576ad3=a621_0x2ab841,_0x981555=new Map(),_0x1c51ff=[];for(const _0x5995f4 of _0x313884){const _0x48408d=_0x5995f4[_0x576ad3(0xf2)]['id'];!_0x981555[_0x576ad3(0xe7)](_0x48408d)&&(_0x981555[_0x576ad3(0xfe)](_0x48408d,!![]),_0x1c51ff['push'](_0x5995f4));}return _0x1c51ff[_0x576ad3(0xe4)](sortByMessageTimestamp);}function a621_0x3a48(_0x489d69,_0x2fe833){const _0xdeddbb=a621_0xdedd();return a621_0x3a48=function(_0x3a488b,_0xda6ba5){_0x3a488b=_0x3a488b-0xd8;let _0x27f2ff=_0xdeddbb[_0x3a488b];return _0x27f2ff;},a621_0x3a48(_0x489d69,_0x2fe833);}const ImportWhatsAppMessageService=async _0x37c806=>{const _0x26e5c1=a621_0x2ab841;let _0x20ef83=await Whatsapp_1['default'][_0x26e5c1(0xf1)](_0x37c806);const _0x12ae45=(0x0,wbot_1[_0x26e5c1(0x106)])(_0x20ef83['id']);try{const _0x151612=(0x0,socket_1[_0x26e5c1(0xf6)])(),_0xf0704d=cleaner(wbot_1['dataMessages'][_0x37c806]);let _0x2d166c=new Date(_0x20ef83[_0x26e5c1(0xee)])[_0x26e5c1(0x10e)](),_0x3ac2ab=new Date(_0x20ef83[_0x26e5c1(0xe6)])[_0x26e5c1(0x10e)]();(0x0,addLogs_1[_0x26e5c1(0xe5)])({'fileName':'processImportMessagesWppId'+_0x37c806+_0x26e5c1(0xf4),'forceNewFile':!![],'text':'Aguardando\x20conexão\x20para\x20iniciar\x20a\x20importação\x20de\x20mensagens:\x0a\x20\x20\x20\x20Whatsapp\x20nome:\x20'+_0x20ef83['name']+_0x26e5c1(0x102)+_0x20ef83['id']+'\x0a\x20\x20\x20\x20Criação\x20do\x20arquivo\x20de\x20logs:\x20'+(0x0,moment_1[_0x26e5c1(0x103)])()['format'](_0x26e5c1(0x104))+_0x26e5c1(0x10f)+(0x0,moment_1[_0x26e5c1(0x103)])(_0x2d166c)[_0x26e5c1(0xff)]('DD/MM/YYYY\x20HH:mm:ss')+_0x26e5c1(0xf9)+(0x0,moment_1[_0x26e5c1(0x103)])(_0x3ac2ab)[_0x26e5c1(0xff)](_0x26e5c1(0x104))+'\x20\x0a\x20\x20\x20\x20'});const _0x18eba2=_0xf0704d[_0x26e5c1(0xdf)];let _0x1a07a1=0x0;while(_0x1a07a1<_0x18eba2){try{const _0x1eff36=_0xf0704d[_0x1a07a1];(0x0,addLogs_1[_0x26e5c1(0xe5)])({'fileName':_0x26e5c1(0x111)+_0x37c806+_0x26e5c1(0xf4),'text':_0x26e5c1(0xea)+(_0x1a07a1+0x1)+_0x26e5c1(0x10d)+_0x18eba2+_0x26e5c1(0x10b)}),await(0x0,wbotMessageListener_1[_0x26e5c1(0x115)])(_0x1eff36,_0x12ae45,_0x20ef83['companyId'],!![]);if(_0x1a07a1%0x2===0x0){const _0xb77fd3=Math[_0x26e5c1(0xeb)](_0x1eff36[_0x26e5c1(0xe3)]['low']*0x3e8);_0x151612[_0x26e5c1(0x105)](_0x26e5c1(0x110)+_0x20ef83[_0x26e5c1(0xd9)],{'action':_0x26e5c1(0x107),'status':{'this':_0x1a07a1+0x1,'all':_0x18eba2,'date':(0x0,moment_1['default'])(_0xb77fd3)[_0x26e5c1(0xff)](_0x26e5c1(0xdc))}});}_0x1a07a1+0x1===_0x18eba2&&(wbot_1['dataMessages'][_0x37c806]=[],_0x20ef83[_0x26e5c1(0xdb)]&&await(0x0,exports['closeTicketsImported'])(_0x37c806),await _0x20ef83[_0x26e5c1(0x107)]({'statusImportMessages':_0x20ef83[_0x26e5c1(0xdb)]?null:_0x26e5c1(0x10a),'importOldMessages':null,'importRecentMessages':null}),_0x151612[_0x26e5c1(0x105)](_0x26e5c1(0x110)+_0x20ef83[_0x26e5c1(0xd9)],{'action':_0x26e5c1(0xd8)}));}catch(_0x3eb6c2){}_0x1a07a1++;}}catch(_0x3d0820){throw new AppError_1['default']('ERR_NOT_MESSAGE_TO_IMPORT',0x193);}return _0x26e5c1(0x112);};exports[a621_0x2ab841(0x103)]=ImportWhatsAppMessageService;
=======
'use strict';function a620_0x5b32(_0x2b9bf0,_0x2fb0d6){const _0x32d90b=a620_0x32d9();return a620_0x5b32=function(_0x5b3233,_0x69a3a){_0x5b3233=_0x5b3233-0xa7;let _0x49aa6a=_0x32d90b[_0x5b3233];return _0x49aa6a;},a620_0x5b32(_0x2b9bf0,_0x2fb0d6);}const a620_0x3a3026=a620_0x5b32;(function(_0xf2207f,_0x4efa05){const _0x285b4a=a620_0x5b32,_0x21f214=_0xf2207f();while(!![]){try{const _0x18607b=parseInt(_0x285b4a(0xdb))/0x1*(-parseInt(_0x285b4a(0xb3))/0x2)+-parseInt(_0x285b4a(0xc4))/0x3*(-parseInt(_0x285b4a(0xb9))/0x4)+-parseInt(_0x285b4a(0xbc))/0x5*(parseInt(_0x285b4a(0xd1))/0x6)+parseInt(_0x285b4a(0xd4))/0x7+-parseInt(_0x285b4a(0xd6))/0x8+parseInt(_0x285b4a(0xbd))/0x9+-parseInt(_0x285b4a(0xc0))/0xa*(-parseInt(_0x285b4a(0xb1))/0xb);if(_0x18607b===_0x4efa05)break;else _0x21f214['push'](_0x21f214['shift']());}catch(_0x107ac8){_0x21f214['push'](_0x21f214['shift']());}}}(a620_0x32d9,0x2af21));var __importDefault=this&&this[a620_0x3a3026(0xc6)]||function(_0x669377){const _0x9cf9d6=a620_0x3a3026;return _0x669377&&_0x669377[_0x9cf9d6(0xaf)]?_0x669377:{'default':_0x669377};};Object[a620_0x3a3026(0xbb)](exports,a620_0x3a3026(0xaf),{'value':!![]}),exports[a620_0x3a3026(0xcf)]=void 0x0;const AppError_1=__importDefault(require(a620_0x3a3026(0xd8))),Whatsapp_1=__importDefault(require(a620_0x3a3026(0xb4))),socket_1=require(a620_0x3a3026(0xd9)),Ticket_1=__importDefault(require(a620_0x3a3026(0xb6))),sequelize_1=require('sequelize'),date_fns_1=require(a620_0x3a3026(0xda)),UpdateTicketService_1=__importDefault(require(a620_0x3a3026(0xaa))),wbot_1=require(a620_0x3a3026(0xc8)),wbotMessageListener_1=require(a620_0x3a3026(0xb7)),moment_1=__importDefault(require(a620_0x3a3026(0xdd))),addLogs_1=require(a620_0x3a3026(0xab)),closeTicketsImported=async _0x27782f=>{const _0x3dd434=a620_0x3a3026,_0x5a6ba6=await Ticket_1[_0x3dd434(0xc7)][_0x3dd434(0xa9)]({'where':{'status':_0x3dd434(0xd2),'whatsappId':_0x27782f,'imported':{[sequelize_1['Op']['lt']]:+(0x0,date_fns_1['add'])(new Date(),{'hours':+0x5})}}});for(const _0x35ca1a of _0x5a6ba6){await new Promise(_0x1a130f=>setTimeout(_0x1a130f,0x14a)),await(0x0,UpdateTicketService_1['default'])({'ticketData':{'status':_0x3dd434(0xdf)},'ticketId':_0x35ca1a['id'],'companyId':_0x35ca1a[_0x3dd434(0xdc)]});}let _0x5c7437=await Whatsapp_1[_0x3dd434(0xc7)][_0x3dd434(0xe1)](_0x27782f);_0x5c7437[_0x3dd434(0xac)]({'statusImportMessages':null});const _0x38b4c7=(0x0,socket_1[_0x3dd434(0xd5)])();_0x38b4c7[_0x3dd434(0xa7)](_0x3dd434(0xe6)+_0x5c7437['companyId'],{'action':_0x3dd434(0xbf)});};exports[a620_0x3a3026(0xcf)]=closeTicketsImported;function sortByMessageTimestamp(_0x5ed211,_0x174a5d){return _0x174a5d['messageTimestamp']-_0x5ed211['messageTimestamp'];}function cleaner(_0x149ecd){const _0x4595fb=a620_0x3a3026,_0x4af04f=new Map(),_0xadba45=[];for(const _0x402709 of _0x149ecd){const _0xf05f06=_0x402709[_0x4595fb(0xcc)]['id'];!_0x4af04f[_0x4595fb(0xa8)](_0xf05f06)&&(_0x4af04f[_0x4595fb(0xcd)](_0xf05f06,!![]),_0xadba45[_0x4595fb(0xbe)](_0x402709));}return _0xadba45[_0x4595fb(0xc9)](sortByMessageTimestamp);}function a620_0x32d9(){const _0x3127cf=['name','102ktRBFJ','pending','floor','46333DxkrxZ','getIO','2735728gHlzks','\x0a\x20\x20\x20\x20Criação\x20do\x20arquivo\x20de\x20logs:\x20','../../errors/AppError','../../libs/socket','date-fns','32SzHTsR','companyId','moment','processImportMessagesWppId','closed','low','findByPk','getTime','DD/MM/YY\x20HH:mm:ss','ERR_NOT_MESSAGE_TO_IMPORT','messageTimestamp','importMessages-','whatsapps','handleMessage','emit','has','findAll','../TicketServices/UpdateTicketService','../../helpers/addLogs','update','\x20\x0a\x20\x20\x20\x20Selecionado\x20Data\x20final\x20da\x20importação:\x20','importOldMessages','__esModule','format','6754FmNTDr','length','21070ETlhHm','../../models/Whatsapp','\x0a\x20\x20\x20\x20Whatsapp\x20Id:\x20','../../models/Ticket','../WbotServices/wbotMessageListener','addLogs','635892JGltxK','\x20de\x20','defineProperty','85335EnlEot','1422054aPiAEj','push','refresh','13380tRHuuk','dataMessages','\x20\x0a\x20\x20\x20\x20','.txt','3GbDAbS','getWbot','__importDefault','default','../../libs/wbot','sort','renderButtonCloseTickets','importRecentMessages','key','set','closedTicketsPostImported','closeTicketsImported'];a620_0x32d9=function(){return _0x3127cf;};return a620_0x32d9();}const ImportWhatsAppMessageService=async _0x48889a=>{const _0x571192=a620_0x3a3026;let _0x225d5f=await Whatsapp_1[_0x571192(0xc7)][_0x571192(0xe1)](_0x48889a);const _0x352251=(0x0,wbot_1[_0x571192(0xc5)])(_0x225d5f['id']);try{const _0x5081d7=(0x0,socket_1[_0x571192(0xd5)])(),_0x1c39be=cleaner(wbot_1[_0x571192(0xc1)][_0x48889a]);let _0x3531f0=new Date(_0x225d5f[_0x571192(0xae)])[_0x571192(0xe2)](),_0x2a7f6f=new Date(_0x225d5f[_0x571192(0xcb)])[_0x571192(0xe2)]();(0x0,addLogs_1[_0x571192(0xb8)])({'fileName':_0x571192(0xde)+_0x48889a+_0x571192(0xc3),'forceNewFile':!![],'text':'Aguardando\x20conexão\x20para\x20iniciar\x20a\x20importação\x20de\x20mensagens:\x0a\x20\x20\x20\x20Whatsapp\x20nome:\x20'+_0x225d5f[_0x571192(0xd0)]+_0x571192(0xb5)+_0x225d5f['id']+_0x571192(0xd7)+(0x0,moment_1[_0x571192(0xc7)])()['format']('DD/MM/YYYY\x20HH:mm:ss')+'\x0a\x20\x20\x20\x20Selecionado\x20Data\x20de\x20inicio\x20de\x20importação:\x20'+(0x0,moment_1[_0x571192(0xc7)])(_0x3531f0)[_0x571192(0xb0)]('DD/MM/YYYY\x20HH:mm:ss')+_0x571192(0xad)+(0x0,moment_1[_0x571192(0xc7)])(_0x2a7f6f)[_0x571192(0xb0)]('DD/MM/YYYY\x20HH:mm:ss')+_0x571192(0xc2)});const _0x552f6b=_0x1c39be[_0x571192(0xb2)];let _0x3f1ae7=0x0;while(_0x3f1ae7<_0x552f6b){try{const _0x2e1f2a=_0x1c39be[_0x3f1ae7];(0x0,addLogs_1[_0x571192(0xb8)])({'fileName':_0x571192(0xde)+_0x48889a+_0x571192(0xc3),'text':'\x0aMensagem\x20'+(_0x3f1ae7+0x1)+_0x571192(0xba)+_0x552f6b+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'}),await(0x0,wbotMessageListener_1[_0x571192(0xe8)])(_0x2e1f2a,_0x352251,_0x225d5f[_0x571192(0xdc)],!![]);if(_0x3f1ae7%0x2===0x0){const _0x3fb859=Math[_0x571192(0xd3)](_0x2e1f2a[_0x571192(0xe5)][_0x571192(0xe0)]*0x3e8);_0x5081d7[_0x571192(0xa7)]('importMessages-'+_0x225d5f['companyId'],{'action':'update','status':{'this':_0x3f1ae7+0x1,'all':_0x552f6b,'date':(0x0,moment_1[_0x571192(0xc7)])(_0x3fb859)['format'](_0x571192(0xe3))}});}_0x3f1ae7+0x1===_0x552f6b&&(wbot_1[_0x571192(0xc1)][_0x48889a]=[],_0x225d5f[_0x571192(0xce)]&&await(0x0,exports['closeTicketsImported'])(_0x48889a),await _0x225d5f[_0x571192(0xac)]({'statusImportMessages':_0x225d5f[_0x571192(0xce)]?null:_0x571192(0xca),'importOldMessages':null,'importRecentMessages':null}),_0x5081d7[_0x571192(0xa7)](_0x571192(0xe6)+_0x225d5f[_0x571192(0xdc)],{'action':_0x571192(0xbf)}));}catch(_0x1b941f){}_0x3f1ae7++;}}catch(_0x14a8fa){throw new AppError_1['default'](_0x571192(0xe4),0x193);}return _0x571192(0xe7);};exports[a620_0x3a3026(0xc7)]=ImportWhatsAppMessageService;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
