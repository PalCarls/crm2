'use strict';const a516_0x2bff40=a516_0x34a5;(function(_0x2ddf1c,_0x45c4e0){const _0x379377=a516_0x34a5,_0xe0b510=_0x2ddf1c();while(!![]){try{const _0x568500=parseInt(_0x379377(0x127))/0x1+parseInt(_0x379377(0x12f))/0x2*(parseInt(_0x379377(0x143))/0x3)+parseInt(_0x379377(0x14e))/0x4*(parseInt(_0x379377(0x12e))/0x5)+-parseInt(_0x379377(0x144))/0x6+parseInt(_0x379377(0x133))/0x7*(-parseInt(_0x379377(0x14b))/0x8)+parseInt(_0x379377(0x108))/0x9+parseInt(_0x379377(0x158))/0xa;if(_0x568500===_0x45c4e0)break;else _0xe0b510['push'](_0xe0b510['shift']());}catch(_0x3835fe){_0xe0b510['push'](_0xe0b510['shift']());}}}(a516_0x1c08,0x53c3c));var __importDefault=this&&this['__importDefault']||function(_0x28abb3){return _0x28abb3&&_0x28abb3['__esModule']?_0x28abb3:{'default':_0x28abb3};};Object[a516_0x2bff40(0x15a)](exports,a516_0x2bff40(0x114),{'value':!![]}),exports[a516_0x2bff40(0x10f)]=exports[a516_0x2bff40(0x134)]=void 0x0;const wbotMessageListener_1=require(a516_0x2bff40(0x11d)),ShowDialogChatBotsServices_1=__importDefault(require(a516_0x2bff40(0x15c))),ShowQueueService_1=__importDefault(require('../QueueService/ShowQueueService')),ShowChatBotServices_1=__importDefault(require(a516_0x2bff40(0x13c))),DeleteDialogChatBotsServices_1=__importDefault(require(a516_0x2bff40(0x132))),ShowChatBotByChatbotIdServices_1=__importDefault(require('../ChatBotServices/ShowChatBotByChatbotIdServices')),CreateDialogChatBotsServices_1=__importDefault(require(a516_0x2bff40(0x112))),ShowWhatsAppService_1=__importDefault(require('../WhatsappService/ShowWhatsAppService')),Mustache_1=__importDefault(require(a516_0x2bff40(0x11b))),UpdateTicketService_1=__importDefault(require(a516_0x2bff40(0x159))),User_1=__importDefault(require('../../models/User')),Setting_1=__importDefault(require(a516_0x2bff40(0x10c))),fs=require('fs');var axios=require(a516_0x2bff40(0x12c));function a516_0x1c08(){const _0x41942a=['split','random','default','isGroup','companyId','public/temp/','../ChatBotServices/ShowChatBotServices','pending','message','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','substring','number','length','21495FAbHjt','3027714hlDwyf','application/pdf','selectedButtonId','floor','greetingMessage','Escolha\x20uma\x20opção','trim','240ScpAyA','g.us','selectedRowId','4mJxUkB','*\x20-\x20','open','s.whatsapp.net','getDate','Não\x20consegui\x20enviar\x20o\x20PDF,\x20tente\x20novamente!','name','chatBotType','attendent','queue','1522980CrQHZF','../TicketServices/UpdateTicketService','defineProperty','sendMessage','../DialogChatBotsServices/ShowDialogChatBotsServices','toString','isAgent','dueDate','chatbotId','2711169qhTWTW','queueId','Menu','test','../../models/Setting','getMonth','getBodyMessage','sayChatbot','forEach','update','../DialogChatBotsServices/CreateDialogChatBotsServices','chatbots','__esModule','push','‎Não\x20consegui\x20enviar\x20o\x20PDF,\x20tente\x20novamente!','findOne','fromMe','replace','value','../../helpers/Mustache','verifyMessage','./wbotMessageListener','ticketId','\x0a*#*\x20Voltar\x20para\x20o\x20menu\x20principal','readFileSync','list','optUserId','closed','buttonsResponseMessage','text','localeCompare','369059EKIzmH','getFullYear','singleSelectReply','optQueueId','finalizar','axios','button','968530piPtZF','30eXybry','ticketData','options','../DialogChatBotsServices/DeleteDialogChatBotsServices','64414xSmdPm','deleteAndCreateDialogStage','listResponseMessage'];a516_0x1c08=function(){return _0x41942a;};return a516_0x1c08();}const isNumeric=_0x4f8885=>/^-?\d+$/[a516_0x2bff40(0x10b)](_0x4f8885),deleteAndCreateDialogStage=async(_0x494269,_0x3b6b32,_0x7e2fc4)=>{const _0x4d3fff=a516_0x2bff40;try{await(0x0,DeleteDialogChatBotsServices_1[_0x4d3fff(0x138)])(_0x494269['id']);const _0xe9ada=await(0x0,ShowChatBotByChatbotIdServices_1['default'])(_0x3b6b32);return!_0xe9ada&&await _0x7e2fc4[_0x4d3fff(0x111)]({'isBot':![]}),await(0x0,CreateDialogChatBotsServices_1[_0x4d3fff(0x138)])({'awaiting':0x1,'contactId':_0x494269['id'],'chatbotId':_0x3b6b32,'queueId':_0xe9ada[_0x4d3fff(0x109)]});}catch(_0x3a30a2){await _0x7e2fc4[_0x4d3fff(0x111)]({'isBot':![]});}};exports[a516_0x2bff40(0x134)]=deleteAndCreateDialogStage;const sendMessage=async(_0x431008,_0x3d42ba,_0x3c5dd1,_0x4c0b5a)=>{const _0x5789d9=a516_0x2bff40,_0x40015b=await _0x431008['sendMessage'](_0x3d42ba[_0x5789d9(0x141)]+'@'+(_0x3c5dd1[_0x5789d9(0x139)]?_0x5789d9(0x14c):_0x5789d9(0x151)),{'text':(0x0,Mustache_1['default'])(_0x4c0b5a,_0x3c5dd1)});(0x0,wbotMessageListener_1[_0x5789d9(0x11c)])(_0x40015b,_0x3c5dd1,_0x3d42ba);},sendMessageLink=async(_0x105258,_0x5e7ffd,_0xcb2fbf,_0x92553e,_0x5e01ae)=>{const _0x40ceb2=a516_0x2bff40;let _0xbc0be6;try{_0xbc0be6=await _0x105258[_0x40ceb2(0x15b)](_0x5e7ffd[_0x40ceb2(0x141)]+'@'+(_0xcb2fbf[_0x40ceb2(0x139)]?_0x40ceb2(0x14c):_0x40ceb2(0x151)),{'document':_0x92553e?{'url':_0x92553e}:fs[_0x40ceb2(0x120)]('public/temp/'+_0x5e01ae+'-'+makeid(0xa)),'fileName':_0x5e01ae,'mimetype':_0x40ceb2(0x145)});}catch(_0x30daf9){_0xbc0be6=await _0x105258['sendMessage'](_0x5e7ffd[_0x40ceb2(0x141)]+'@'+(_0xcb2fbf['isGroup']?'g.us':_0x40ceb2(0x151)),{'text':(0x0,Mustache_1[_0x40ceb2(0x138)])(_0x40ceb2(0x116),_0xcb2fbf)});}(0x0,wbotMessageListener_1['verifyMessage'])(_0xbc0be6,_0xcb2fbf,_0x5e7ffd);},sendMessageImage=async(_0x52424b,_0x4a799d,_0x3331ea,_0x306ed9,_0xb74f4)=>{const _0x2085f2=a516_0x2bff40;let _0x119ff9;try{_0x119ff9=await _0x52424b['sendMessage'](_0x4a799d[_0x2085f2(0x141)]+'@'+(_0x3331ea['isGroup']?_0x2085f2(0x14c):'s.whatsapp.net'),{'image':_0x306ed9?{'url':_0x306ed9}:fs[_0x2085f2(0x120)](_0x2085f2(0x13b)+_0xb74f4+'-'+makeid(0xa)),'fileName':_0xb74f4,'caption':_0xb74f4,'mimetype':'image/jpeg'});}catch(_0x3d0007){_0x119ff9=await _0x52424b['sendMessage'](_0x4a799d[_0x2085f2(0x141)]+'@'+(_0x3331ea[_0x2085f2(0x139)]?_0x2085f2(0x14c):_0x2085f2(0x151)),{'text':(0x0,Mustache_1[_0x2085f2(0x138)])(_0x2085f2(0x153),_0x3331ea)});}(0x0,wbotMessageListener_1[_0x2085f2(0x11c)])(_0x119ff9,_0x3331ea,_0x4a799d);},sendDialog=async(_0x587fae,_0x42bc46,_0x23f80c,_0x4cc7ee)=>{const _0x6790b0=a516_0x2bff40,_0x3a09b8=await(0x0,ShowChatBotServices_1[_0x6790b0(0x138)])(_0x587fae['id']);if(_0x3a09b8[_0x6790b0(0x131)]){const _0xbffdce=await Setting_1['default'][_0x6790b0(0x117)]({'where':{'key':_0x6790b0(0x155),'companyId':_0x4cc7ee[_0x6790b0(0x13a)]}}),_0x491669=_0xbffdce?.[_0x6790b0(0x11a)]||_0x6790b0(0x125),_0x38a964=async()=>{const _0x273bd3=_0x6790b0;let _0x387d8a='';_0x3a09b8[_0x273bd3(0x131)][_0x273bd3(0x110)]((_0x354739,_0x345446)=>{const _0x2ccf52=_0x273bd3;_0x387d8a+='*'+(_0x345446+0x1)+_0x2ccf52(0x14f)+_0x354739['name']+'\x0a';});const _0x3c6564=_0x387d8a[_0x273bd3(0x142)]>0x0?_0x387d8a+_0x273bd3(0x11f):_0x387d8a;if(_0x387d8a['length']>0x0){const _0x5ea2a0='‎'+_0x587fae[_0x273bd3(0x148)]+'\x0a\x0a'+_0x3c6564,_0x2a0a2c=await sendMessage(_0x42bc46,_0x23f80c,_0x4cc7ee,_0x5ea2a0);return _0x2a0a2c;}const _0x199eee='‎'+_0x587fae['greetingMessage'],_0xaa5b99=await sendMessage(_0x42bc46,_0x23f80c,_0x4cc7ee,_0x199eee);return _0xaa5b99;},_0x530f57=async()=>{const _0x3772d0=_0x6790b0,_0x348b3d=[];_0x3a09b8[_0x3772d0(0x131)]['forEach']((_0x1694aa,_0x10932b)=>{const _0x2598e8=_0x3772d0;_0x348b3d[_0x2598e8(0x115)]({'buttonId':''+(_0x10932b+0x1),'buttonText':{'displayText':_0x1694aa[_0x2598e8(0x154)]},'type':0x1});});if(_0x348b3d['length']>0x0){const _0xe56c8b={'text':'‎'+_0x587fae[_0x3772d0(0x148)],'buttons':_0x348b3d,'headerType':0x1},_0x31923e=await _0x42bc46['sendMessage'](_0x23f80c[_0x3772d0(0x141)]+'@'+(_0x4cc7ee['isGroup']?_0x3772d0(0x14c):'s.whatsapp.net'),_0xe56c8b);return await(0x0,wbotMessageListener_1['verifyMessage'])(_0x31923e,_0x4cc7ee,_0x23f80c),_0x31923e;}const _0x27d5ab='‎'+_0x587fae['greetingMessage'],_0x50fd98=await sendMessage(_0x42bc46,_0x23f80c,_0x4cc7ee,_0x27d5ab);return _0x50fd98;},_0x3a7b6f=async()=>{const _0x5e4b94=_0x6790b0,_0x589519=[];_0x3a09b8[_0x5e4b94(0x131)][_0x5e4b94(0x110)]((_0x5a49f5,_0xb57729)=>{const _0x13da0f=_0x5e4b94;_0x589519[_0x13da0f(0x115)]({'title':_0x5a49f5[_0x13da0f(0x154)],'rowId':''+(_0xb57729+0x1)});});if(_0x589519[_0x5e4b94(0x142)]>0x0){const _0x5ea6e9=[{'title':_0x5e4b94(0x10a),'rows':_0x589519}],_0x4c69b7={'text':(0x0,Mustache_1[_0x5e4b94(0x138)])('‎'+_0x587fae[_0x5e4b94(0x148)],_0x4cc7ee),'buttonText':_0x5e4b94(0x149),'sections':_0x5ea6e9},_0x45f860=await _0x42bc46[_0x5e4b94(0x15b)](_0x23f80c[_0x5e4b94(0x141)]+'@'+(_0x4cc7ee[_0x5e4b94(0x139)]?_0x5e4b94(0x14c):_0x5e4b94(0x151)),_0x4c69b7);return await(0x0,wbotMessageListener_1[_0x5e4b94(0x11c)])(_0x45f860,_0x4cc7ee,_0x23f80c),_0x45f860;}const _0x4d2f19='‎'+_0x587fae['greetingMessage'],_0x296d71=await sendMessage(_0x42bc46,_0x23f80c,_0x4cc7ee,_0x4d2f19);return _0x296d71;};if(_0x491669==='text')return await _0x38a964();if(_0x491669===_0x6790b0(0x12d)&&_0x3a09b8['options']['length']>0x4)return await _0x38a964();if(_0x491669===_0x6790b0(0x12d)&&_0x3a09b8[_0x6790b0(0x131)][_0x6790b0(0x142)]<=0x4)return await _0x530f57();if(_0x491669==='list')return await _0x3a7b6f();}},backToMainMenu=async(_0x2e4e8b,_0x1cdb3e,_0x163d51)=>{const _0x1e9778=a516_0x2bff40;await(0x0,UpdateTicketService_1[_0x1e9778(0x138)])({'ticketData':{'queueId':null,'userId':null},'ticketId':_0x163d51['id'],'companyId':_0x163d51[_0x1e9778(0x13a)]});const {queues:_0x4950cc,greetingMessage:_0x28fed3}=await(0x0,ShowWhatsAppService_1[_0x1e9778(0x138)])(_0x2e4e8b['id'],_0x163d51[_0x1e9778(0x13a)]),_0x401cc7=await Setting_1[_0x1e9778(0x138)][_0x1e9778(0x117)]({'where':{'key':_0x1e9778(0x155)}}),_0x402902=async()=>{const _0x4dd950=_0x1e9778;let _0x29a069='';_0x4950cc[_0x4dd950(0x110)]((_0x22a014,_0x2dbf34)=>{const _0x2d4fb6=_0x4dd950;_0x29a069+='*'+(_0x2dbf34+0x1)+_0x2d4fb6(0x14f)+_0x22a014[_0x2d4fb6(0x154)]+'\x0a';});const _0x1bb8d2=(0x0,Mustache_1['default'])('‎'+_0x28fed3+'\x0a\x0a'+_0x29a069,_0x163d51);await sendMessage(_0x2e4e8b,_0x1cdb3e,_0x163d51,_0x1bb8d2);const _0x2a8e2a=await(0x0,DeleteDialogChatBotsServices_1[_0x4dd950(0x138)])(_0x1cdb3e['id']);return _0x2a8e2a;},_0x124886=async()=>{const _0x47e29f=_0x1e9778,_0x5265ba=[];_0x4950cc[_0x47e29f(0x110)]((_0x4c78bf,_0x3820fd)=>{const _0x4edf84=_0x47e29f;_0x5265ba[_0x4edf84(0x115)]({'buttonId':''+(_0x3820fd+0x1),'buttonText':{'displayText':_0x4c78bf[_0x4edf84(0x154)]},'type':0x1});});const _0x3327c2={'text':(0x0,Mustache_1[_0x47e29f(0x138)])('‎'+_0x28fed3,_0x163d51),'buttons':_0x5265ba,'headerType':0x1},_0x46314d=await _0x2e4e8b[_0x47e29f(0x15b)](_0x1cdb3e[_0x47e29f(0x141)]+'@'+(_0x163d51[_0x47e29f(0x139)]?_0x47e29f(0x14c):_0x47e29f(0x151)),_0x3327c2);await(0x0,wbotMessageListener_1[_0x47e29f(0x11c)])(_0x46314d,_0x163d51,_0x1cdb3e);const _0x46a68a=await(0x0,DeleteDialogChatBotsServices_1[_0x47e29f(0x138)])(_0x1cdb3e['id']);return _0x46a68a;},_0x1a8722=async()=>{const _0x3d8f9c=_0x1e9778,_0x1a3f16=[];_0x4950cc['forEach']((_0x27b92f,_0x3e1314)=>{const _0x50fb52=a516_0x34a5;_0x1a3f16['push']({'title':_0x27b92f[_0x50fb52(0x154)],'rowId':''+(_0x3e1314+0x1)});});const _0x18351d=[{'title':_0x3d8f9c(0x10a),'rows':_0x1a3f16}],_0x1b558f={'text':(0x0,Mustache_1['default'])('‎'+_0x28fed3,_0x163d51),'buttonText':_0x3d8f9c(0x149),'sections':_0x18351d},_0x38b6bc=await _0x2e4e8b[_0x3d8f9c(0x15b)](_0x1cdb3e[_0x3d8f9c(0x141)]+'@'+(_0x163d51[_0x3d8f9c(0x139)]?_0x3d8f9c(0x14c):'s.whatsapp.net'),_0x1b558f);await(0x0,wbotMessageListener_1[_0x3d8f9c(0x11c)])(_0x38b6bc,_0x163d51,_0x1cdb3e);const _0x43485a=await(0x0,DeleteDialogChatBotsServices_1[_0x3d8f9c(0x138)])(_0x1cdb3e['id']);return _0x43485a;};if(_0x401cc7[_0x1e9778(0x11a)]===_0x1e9778(0x125))return _0x402902();if(_0x401cc7['value']===_0x1e9778(0x12d)&&_0x4950cc['length']>0x4)return _0x402902();if(_0x401cc7['value']===_0x1e9778(0x12d)&&_0x4950cc[_0x1e9778(0x142)]<=0x4)return _0x124886();if(_0x401cc7['value']===_0x1e9778(0x121))return _0x1a8722();};function validaCpfCnpj(_0x1ec3ec){const _0x31bf0f=a516_0x2bff40;if(_0x1ec3ec[_0x31bf0f(0x142)]==0xb){var _0x37dd86=_0x1ec3ec[_0x31bf0f(0x14a)]();_0x37dd86=_0x37dd86['replace'](/\./g,''),_0x37dd86=_0x37dd86['replace']('-',''),_0x37dd86=_0x37dd86['split']('');var _0x15d99e=0x0,_0x5236cc=0x0,_0x2965dc=![];for(var _0x71a3da=0x1;_0x37dd86[_0x31bf0f(0x142)]>_0x71a3da;_0x71a3da++){_0x37dd86[_0x71a3da-0x1]!=_0x37dd86[_0x71a3da]&&(_0x2965dc=!![]);}if(_0x2965dc==![])return![];for(var _0x71a3da=0x0,_0x572a39=0xa;_0x37dd86[_0x31bf0f(0x142)]-0x2>_0x71a3da;_0x71a3da++,_0x572a39--){_0x15d99e+=_0x37dd86[_0x71a3da]*_0x572a39;}_0x15d99e=_0x15d99e*0xa%0xb;_0x15d99e==0xa&&(_0x15d99e=0x0);if(_0x15d99e!=_0x37dd86[0x9])return![];for(var _0x71a3da=0x0,_0x572a39=0xb;_0x37dd86[_0x31bf0f(0x142)]-0x1>_0x71a3da;_0x71a3da++,_0x572a39--){_0x5236cc+=_0x37dd86[_0x71a3da]*_0x572a39;}return _0x5236cc=_0x5236cc*0xa%0xb,_0x5236cc==0xa&&(_0x5236cc=0x0),_0x5236cc!=_0x37dd86[0xa]?![]:!![];}else{if(_0x1ec3ec[_0x31bf0f(0x142)]==0xe){var _0xa49fde=_0x1ec3ec['trim']();_0xa49fde=_0xa49fde[_0x31bf0f(0x119)](/\./g,''),_0xa49fde=_0xa49fde[_0x31bf0f(0x119)]('-',''),_0xa49fde=_0xa49fde[_0x31bf0f(0x119)]('/',''),_0xa49fde=_0xa49fde[_0x31bf0f(0x136)]('');var _0x15d99e=0x0,_0x5236cc=0x0,_0x2965dc=![];for(var _0x71a3da=0x1;_0xa49fde[_0x31bf0f(0x142)]>_0x71a3da;_0x71a3da++){_0xa49fde[_0x71a3da-0x1]!=_0xa49fde[_0x71a3da]&&(_0x2965dc=!![]);}if(_0x2965dc==![])return![];for(var _0x71a3da=0x0,_0xad1ffd=0x5,_0x4bd228=0xd;_0xa49fde[_0x31bf0f(0x142)]-0x2>_0x71a3da;_0x71a3da++,_0xad1ffd--,_0x4bd228--){_0xad1ffd>=0x2?_0x15d99e+=_0xa49fde[_0x71a3da]*_0xad1ffd:_0x15d99e+=_0xa49fde[_0x71a3da]*_0x4bd228;}_0x15d99e=_0x15d99e%0xb;_0x15d99e<0x2?_0x15d99e=0x0:_0x15d99e=0xb-_0x15d99e;if(_0x15d99e!=_0xa49fde[0xc])return![];for(var _0x71a3da=0x0,_0xad1ffd=0x6,_0x4bd228=0xe;_0xa49fde[_0x31bf0f(0x142)]-0x1>_0x71a3da;_0x71a3da++,_0xad1ffd--,_0x4bd228--){_0xad1ffd>=0x2?_0x5236cc+=_0xa49fde[_0x71a3da]*_0xad1ffd:_0x5236cc+=_0xa49fde[_0x71a3da]*_0x4bd228;}return _0x5236cc=_0x5236cc%0xb,_0x5236cc<0x2?_0x5236cc=0x0:_0x5236cc=0xb-_0x5236cc,_0x5236cc!=_0xa49fde[0xd]?![]:!![];}else return![];}}function timeout(_0x192fa1){return new Promise(_0x1f442d=>setTimeout(_0x1f442d,_0x192fa1));}async function sleep(_0x3bce7f){await timeout(_0x3bce7f);}function firstDayOfMonth(_0x4b0ec2){const _0x2f8d07=a516_0x2bff40,_0x3c6161=new Date(),_0x14ecd8=new Date(_0x3c6161[_0x2f8d07(0x128)](),_0x3c6161[_0x2f8d07(0x10d)]()-_0x4b0ec2,0x1);return _0x14ecd8;};function lastDayOfMonth(_0x461cd2){const _0xa545fb=a516_0x2bff40,_0x5e0b27=new Date(),_0x342dae=new Date(_0x5e0b27[_0xa545fb(0x128)](),_0x5e0b27[_0xa545fb(0x10d)]()+_0x461cd2,0x0);return _0x342dae;};function dataAtualFormatada(_0x5b50d6){const _0x521bb4=a516_0x2bff40;var _0x21ea4f=_0x5b50d6[_0x521bb4(0x152)]()[_0x521bb4(0x15d)](),_0x579db5=_0x21ea4f['length']==0x1?'0'+_0x21ea4f:_0x21ea4f,_0x435d77=(_0x5b50d6[_0x521bb4(0x10d)]()+0x1)['toString'](),_0x398dea=_0x435d77['length']==0x1?'0'+_0x435d77:_0x435d77,_0x275b5b=_0x5b50d6[_0x521bb4(0x128)]();return _0x579db5+'/'+_0x398dea+'/'+_0x275b5b;}function makeid(_0x3721f3){const _0xfc447a=a516_0x2bff40;var _0x4e0546='',_0x2d428c=_0xfc447a(0x13f),_0x145c75=_0x2d428c[_0xfc447a(0x142)];for(var _0xc77ee9=0x0;_0xc77ee9<_0x3721f3;_0xc77ee9++){_0x4e0546+=_0x2d428c['charAt'](Math[_0xfc447a(0x147)](Math[_0xfc447a(0x137)]()*_0x145c75));}return _0x4e0546;}function a516_0x34a5(_0x514659,_0x42d4e0){const _0x1c081c=a516_0x1c08();return a516_0x34a5=function(_0x34a5f6,_0x2be830){_0x34a5f6=_0x34a5f6-0x106;let _0x1db783=_0x1c081c[_0x34a5f6];return _0x1db783;},a516_0x34a5(_0x514659,_0x42d4e0);}function replaceAll(_0x396822,_0x13a65f,_0x55f9c0){const _0xbeb7b7=a516_0x2bff40;return _0x396822[_0xbeb7b7(0x119)](new RegExp(_0x13a65f,'g'),_0x55f9c0);}function formatDate(_0x476602){const _0x3beed4=a516_0x2bff40;return _0x476602[_0x3beed4(0x140)](0x8,0xa)+'/'+_0x476602[_0x3beed4(0x140)](0x5,0x7)+'/'+_0x476602[_0x3beed4(0x140)](0x0,0x4);}function sortfunction(_0x35fb47,_0x6e9ddd){const _0x10d1f6=a516_0x2bff40;return _0x35fb47[_0x10d1f6(0x106)][_0x10d1f6(0x126)](_0x6e9ddd[_0x10d1f6(0x106)]);}async function sendMsgAndCloseTicket(_0xafbab6,_0x34e549,_0x30e160){const _0x1bcc18=a516_0x2bff40,_0x3fe5c9='Estamos\x20finalizando\x20esta\x20conversa!\x20Caso\x20precise\x20entre\x20em\x20contato\x20conosco!';await sleep(0x7d0),await sendMessage(_0xafbab6,_0x34e549,_0x30e160,_0x3fe5c9);const _0x14c94d={'ticketData':{'status':_0x1bcc18(0x123),'userId':0x1,'sendFarewellMessage':![],'amountUsedBotQueues':0x0},'ticketId':_0x30e160['id'],'companyId':_0x30e160[_0x1bcc18(0x13a)],'ratingId':undefined};await sleep(0x7d0),await(0x0,UpdateTicketService_1['default'])(_0x14c94d);}const sayChatbot=async(_0x5e5771,_0x1358e5,_0x4d3393,_0x404146,_0x47e94d)=>{const _0x214f83=a516_0x2bff40,_0x48f828=_0x47e94d?.[_0x214f83(0x13e)]?.[_0x214f83(0x124)]?.[_0x214f83(0x146)]||_0x47e94d?.[_0x214f83(0x13e)]?.['listResponseMessage']?.[_0x214f83(0x129)][_0x214f83(0x14d)]||(0x0,wbotMessageListener_1[_0x214f83(0x10e)])(_0x47e94d);if(!_0x5e5771&&_0x48f828&&_0x47e94d['key'][_0x214f83(0x118)])return;const _0x2ce2b7=await(0x0,ShowDialogChatBotsServices_1[_0x214f83(0x138)])(_0x404146['id']),_0x5ae2af=await(0x0,ShowQueueService_1[_0x214f83(0x138)])(_0x5e5771,_0x4d3393[_0x214f83(0x13a)]);let _0x4943da;if(_0x48f828===_0x214f83(0x12b)){const _0x4c8c6d={'ticketData':{'status':_0x214f83(0x123),'sendFarewellMessage':![],'amountUsedBotQueues':0x0},'ticketId':_0x4d3393['id'],'companyId':_0x4d3393['companyId']};await(0x0,UpdateTicketService_1['default'])(_0x4c8c6d);}if(_0x48f828==='#'){const _0x23e02d=await backToMainMenu(_0x1358e5,_0x404146,_0x4d3393);return _0x23e02d;}if(!_0x2ce2b7){const _0x9f509b=await(0x0,ShowQueueService_1[_0x214f83(0x138)])(_0x5e5771,_0x4d3393[_0x214f83(0x13a)]),_0x4c9b13=_0x47e94d?.[_0x214f83(0x13e)]?.[_0x214f83(0x124)]?.['selectedButtonId']||_0x47e94d?.['message']?.[_0x214f83(0x135)]?.[_0x214f83(0x129)]['selectedRowId']||(0x0,wbotMessageListener_1[_0x214f83(0x10e)])(_0x47e94d),_0x263f60=_0x9f509b[_0x214f83(0x113)][+_0x4c9b13-0x1];if(!_0x263f60?.[_0x214f83(0x148)]){await(0x0,DeleteDialogChatBotsServices_1[_0x214f83(0x138)])(_0x404146['id']);return;}if(_0x263f60){if(_0x263f60[_0x214f83(0x15e)])try{const _0x5c289d=await User_1[_0x214f83(0x138)][_0x214f83(0x117)]({'where':{'name':_0x263f60['name']}}),_0x1c7490={'ticketData':{'userId':_0x5c289d['id'],'status':_0x214f83(0x150)},'ticketId':_0x4d3393['id']};await(0x0,UpdateTicketService_1[_0x214f83(0x138)])({'ticketData':{..._0x1c7490[_0x214f83(0x130)]},'ticketId':_0x1c7490['ticketId'],'companyId':_0x4d3393[_0x214f83(0x13a)]});}catch(_0x29f1d9){await(0x0,exports['deleteAndCreateDialogStage'])(_0x404146,_0x263f60['id'],_0x4d3393);}if(_0x263f60['queueType']===_0x214f83(0x157))try{const _0x43a2db={'ticketData':{'queueId':_0x263f60[_0x214f83(0x12a)],'status':_0x214f83(0x13d)},'ticketId':_0x4d3393['id']};await(0x0,UpdateTicketService_1[_0x214f83(0x138)])({'ticketData':{..._0x43a2db[_0x214f83(0x130)]},'ticketId':_0x43a2db[_0x214f83(0x11e)],'companyId':_0x4d3393[_0x214f83(0x13a)]});}catch(_0x21281c){await(0x0,exports[_0x214f83(0x134)])(_0x404146,_0x263f60['id'],_0x4d3393);}if(_0x263f60['queueType']===_0x214f83(0x156))try{const _0x47e11f={'ticketData':{'queueId':_0x263f60[_0x214f83(0x12a)],'userId':_0x263f60[_0x214f83(0x122)],'status':_0x214f83(0x13d)},'ticketId':_0x4d3393['id']};await(0x0,UpdateTicketService_1[_0x214f83(0x138)])({'ticketData':{..._0x47e11f[_0x214f83(0x130)]},'ticketId':_0x47e11f[_0x214f83(0x11e)],'companyId':_0x4d3393[_0x214f83(0x13a)]});}catch(_0x2ed4e3){await(0x0,exports[_0x214f83(0x134)])(_0x404146,_0x263f60['id'],_0x4d3393);}await(0x0,exports[_0x214f83(0x134)])(_0x404146,_0x263f60['id'],_0x4d3393);const _0x151e2f=await sendDialog(_0x263f60,_0x1358e5,_0x404146,_0x4d3393);return _0x151e2f;}}if(_0x2ce2b7){const _0x4e0d89=isNumeric(_0x48f828)?_0x48f828:0x1,_0x368e17=await(0x0,ShowChatBotServices_1[_0x214f83(0x138)])(_0x2ce2b7[_0x214f83(0x107)]),_0x3ab36b=_0x368e17[_0x214f83(0x131)][+_0x4e0d89-0x1]?_0x368e17[_0x214f83(0x131)][+_0x4e0d89-0x1]:_0x368e17[_0x214f83(0x131)][0x0];if(!_0x3ab36b[_0x214f83(0x148)]){await(0x0,DeleteDialogChatBotsServices_1[_0x214f83(0x138)])(_0x404146['id']);return;}if(_0x3ab36b){if(_0x3ab36b[_0x214f83(0x15e)]){const _0x4406dc=await User_1['default'][_0x214f83(0x117)]({'where':{'name':_0x3ab36b[_0x214f83(0x154)]}}),_0x48d872={'ticketData':{'userId':_0x4406dc['id'],'status':'open'},'ticketId':_0x4d3393['id']};await(0x0,UpdateTicketService_1[_0x214f83(0x138)])({'ticketData':{..._0x48d872[_0x214f83(0x130)]},'ticketId':_0x48d872['ticketId'],'companyId':_0x4d3393['companyId']});}await(0x0,exports['deleteAndCreateDialogStage'])(_0x404146,_0x3ab36b['id'],_0x4d3393);const _0x547055=await sendDialog(_0x3ab36b,_0x1358e5,_0x404146,_0x4d3393);return _0x547055;}}};exports[a516_0x2bff40(0x10f)]=sayChatbot;