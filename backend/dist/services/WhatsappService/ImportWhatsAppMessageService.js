'use strict';const a574_0x950af=a574_0x2d3b;(function(_0x282ff7,_0x49d80e){const _0x3bfde5=a574_0x2d3b,_0x39e3fc=_0x282ff7();while(!![]){try{const _0x383f24=-parseInt(_0x3bfde5(0x1aa))/0x1+-parseInt(_0x3bfde5(0x1a0))/0x2+-parseInt(_0x3bfde5(0x17f))/0x3*(-parseInt(_0x3bfde5(0x1b2))/0x4)+-parseInt(_0x3bfde5(0x1a6))/0x5*(parseInt(_0x3bfde5(0x183))/0x6)+parseInt(_0x3bfde5(0x1a5))/0x7+-parseInt(_0x3bfde5(0x1a9))/0x8*(-parseInt(_0x3bfde5(0x1a8))/0x9)+parseInt(_0x3bfde5(0x187))/0xa;if(_0x383f24===_0x49d80e)break;else _0x39e3fc['push'](_0x39e3fc['shift']());}catch(_0x214042){_0x39e3fc['push'](_0x39e3fc['shift']());}}}(a574_0x2047,0xe7605));var __importDefault=this&&this[a574_0x950af(0x1a7)]||function(_0x14d995){const _0x35e44a=a574_0x950af;return _0x14d995&&_0x14d995[_0x35e44a(0x1b8)]?_0x14d995:{'default':_0x14d995};};Object[a574_0x950af(0x19c)](exports,a574_0x950af(0x1b8),{'value':!![]}),exports[a574_0x950af(0x1a2)]=void 0x0;const AppError_1=__importDefault(require(a574_0x950af(0x19b))),Whatsapp_1=__importDefault(require(a574_0x950af(0x181))),socket_1=require(a574_0x950af(0x18a)),Ticket_1=__importDefault(require(a574_0x950af(0x17e))),sequelize_1=require(a574_0x950af(0x191)),date_fns_1=require(a574_0x950af(0x192)),UpdateTicketService_1=__importDefault(require(a574_0x950af(0x185))),wbot_1=require(a574_0x950af(0x1ae)),wbotMessageListener_1=require(a574_0x950af(0x18b)),moment_1=__importDefault(require('moment')),addLogs_1=require(a574_0x950af(0x18d)),closeTicketsImported=async _0x1d51fb=>{const _0xb766d3=a574_0x950af,_0x467e70=await Ticket_1[_0xb766d3(0x190)][_0xb766d3(0x1ad)]({'where':{'status':'pending','whatsappId':_0x1d51fb,'imported':{[sequelize_1['Op']['lt']]:+(0x0,date_fns_1[_0xb766d3(0x1ac)])(new Date(),{'hours':+0x5})}}});for(const _0x5b0a2b of _0x467e70){await new Promise(_0x3b1384=>setTimeout(_0x3b1384,0x14a)),await(0x0,UpdateTicketService_1[_0xb766d3(0x190)])({'ticketData':{'status':'closed'},'ticketId':_0x5b0a2b['id'],'companyId':_0x5b0a2b['companyId']});}let _0x3f132a=await Whatsapp_1[_0xb766d3(0x190)][_0xb766d3(0x19a)](_0x1d51fb);_0x3f132a['update']({'statusImportMessages':null});const _0x4584b1=(0x0,socket_1[_0xb766d3(0x180)])();_0x4584b1[_0xb766d3(0x19f)](_0xb766d3(0x199)+_0x3f132a['companyId'],{'action':_0xb766d3(0x19d)});};function a574_0x2d3b(_0xe675b4,_0x31105a){const _0x2047d5=a574_0x2047();return a574_0x2d3b=function(_0x2d3bc9,_0x352b42){_0x2d3bc9=_0x2d3bc9-0x17e;let _0x9fff2=_0x2047d5[_0x2d3bc9];return _0x9fff2;},a574_0x2d3b(_0xe675b4,_0x31105a);}exports[a574_0x950af(0x1a2)]=closeTicketsImported;function sortByMessageTimestamp(_0x4ec18a,_0x1311de){const _0x232c58=a574_0x950af;return _0x1311de['messageTimestamp']-_0x4ec18a[_0x232c58(0x184)];}function a574_0x2047(){const _0x39f784=['findAll','../../libs/wbot','low','importOldMessages','dataMessages','4QHVveE','addLogs','\x0a\x20\x20\x20\x20Criação\x20do\x20arquivo\x20de\x20logs:\x20','processImportMessagesWppId','getWbot','\x0aMensagem\x20','__esModule','DD/MM/YY\x20HH:mm:ss','../../models/Ticket','4226301uveChS','getIO','../../models/Whatsapp','push','159270tyNXvm','messageTimestamp','../TicketServices/UpdateTicketService','length','14984640xOSevi','has','\x0a\x20\x20\x20\x20Selecionado\x20Data\x20de\x20inicio\x20de\x20importação:\x20','../../libs/socket','../WbotServices/wbotMessageListener','getTime','../../helpers/addLogs','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','format','default','sequelize','date-fns','importRecentMessages','companyId','renderButtonCloseTickets','set','update','closedTicketsPostImported','importMessages-','findByPk','../../errors/AppError','defineProperty','refresh','.txt','emit','634874OkHntJ','DD/MM/YYYY\x20HH:mm:ss','closeTicketsImported','\x20\x0a\x20\x20\x20\x20Selecionado\x20Data\x20final\x20da\x20importação:\x20','handleMessage','4951982LcAkwd','250rptnuI','__importDefault','1743003VsmkxS','32nZrqoC','1796921fTNaiK','sort','add'];a574_0x2047=function(){return _0x39f784;};return a574_0x2047();}function cleaner(_0x38a077){const _0x49962c=a574_0x950af,_0x32eaea=new Map(),_0x144e3d=[];for(const _0x1b8a29 of _0x38a077){const _0x391262=_0x1b8a29['key']['id'];!_0x32eaea[_0x49962c(0x188)](_0x391262)&&(_0x32eaea[_0x49962c(0x196)](_0x391262,!![]),_0x144e3d[_0x49962c(0x182)](_0x1b8a29));}return _0x144e3d[_0x49962c(0x1ab)](sortByMessageTimestamp);}const ImportWhatsAppMessageService=async _0x51c346=>{const _0x27e49a=a574_0x950af;let _0x115dd5=await Whatsapp_1[_0x27e49a(0x190)][_0x27e49a(0x19a)](_0x51c346);const _0x30c58f=(0x0,wbot_1[_0x27e49a(0x1b6)])(_0x115dd5['id']);try{const _0x59df33=(0x0,socket_1[_0x27e49a(0x180)])(),_0x332d10=cleaner(wbot_1[_0x27e49a(0x1b1)][_0x51c346]);let _0x3332d9=new Date(_0x115dd5[_0x27e49a(0x1b0)])['getTime'](),_0x3a56e7=new Date(_0x115dd5[_0x27e49a(0x193)])[_0x27e49a(0x18c)]();(0x0,addLogs_1[_0x27e49a(0x1b3)])({'fileName':_0x27e49a(0x1b5)+_0x51c346+_0x27e49a(0x19e),'forceNewFile':!![],'text':'Aguardando\x20conexão\x20para\x20iniciar\x20a\x20importação\x20de\x20mensagens:\x0a\x20\x20\x20\x20Whatsapp\x20nome:\x20'+_0x115dd5['name']+'\x0a\x20\x20\x20\x20Whatsapp\x20Id:\x20'+_0x115dd5['id']+_0x27e49a(0x1b4)+(0x0,moment_1[_0x27e49a(0x190)])()['format'](_0x27e49a(0x1a1))+_0x27e49a(0x189)+(0x0,moment_1[_0x27e49a(0x190)])(_0x3332d9)['format'](_0x27e49a(0x1a1))+_0x27e49a(0x1a3)+(0x0,moment_1[_0x27e49a(0x190)])(_0x3a56e7)[_0x27e49a(0x18f)](_0x27e49a(0x1a1))+'\x20\x0a\x20\x20\x20\x20'});const _0x1c369e=_0x332d10[_0x27e49a(0x186)];let _0x57fd85=0x0;while(_0x57fd85<_0x1c369e){try{const _0x3d576d=_0x332d10[_0x57fd85];(0x0,addLogs_1[_0x27e49a(0x1b3)])({'fileName':_0x27e49a(0x1b5)+_0x51c346+'.txt','text':_0x27e49a(0x1b7)+(_0x57fd85+0x1)+'\x20de\x20'+_0x1c369e+_0x27e49a(0x18e)}),await(0x0,wbotMessageListener_1[_0x27e49a(0x1a4)])(_0x3d576d,_0x30c58f,_0x115dd5[_0x27e49a(0x194)],!![]);if(_0x57fd85%0x2===0x0){const _0xb18a8a=Math['floor'](_0x3d576d[_0x27e49a(0x184)][_0x27e49a(0x1af)]*0x3e8);_0x59df33[_0x27e49a(0x19f)](_0x27e49a(0x199)+_0x115dd5[_0x27e49a(0x194)],{'action':_0x27e49a(0x197),'status':{'this':_0x57fd85+0x1,'all':_0x1c369e,'date':(0x0,moment_1['default'])(_0xb18a8a)[_0x27e49a(0x18f)](_0x27e49a(0x1b9))}});}_0x57fd85+0x1===_0x1c369e&&(wbot_1['dataMessages'][_0x51c346]=[],_0x115dd5[_0x27e49a(0x198)]&&await(0x0,exports[_0x27e49a(0x1a2)])(_0x51c346),await _0x115dd5[_0x27e49a(0x197)]({'statusImportMessages':_0x115dd5[_0x27e49a(0x198)]?null:_0x27e49a(0x195),'importOldMessages':null,'importRecentMessages':null}),_0x59df33[_0x27e49a(0x19f)](_0x27e49a(0x199)+_0x115dd5['companyId'],{'action':'refresh'}));}catch(_0xf84900){}_0x57fd85++;}}catch(_0x5e3b53){throw new AppError_1[(_0x27e49a(0x190))]('ERR_NOT_MESSAGE_TO_IMPORT',0x193);}return'whatsapps';};exports[a574_0x950af(0x190)]=ImportWhatsAppMessageService;