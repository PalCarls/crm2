'use strict';const a535_0x4b00d4=a535_0x15c6;(function(_0x307e66,_0x5cbbf3){const _0x12a2ad=a535_0x15c6,_0x351c65=_0x307e66();while(!![]){try{const _0x1cd33f=-parseInt(_0x12a2ad(0xf8))/0x1+-parseInt(_0x12a2ad(0xc3))/0x2*(-parseInt(_0x12a2ad(0xe8))/0x3)+parseInt(_0x12a2ad(0xdb))/0x4+-parseInt(_0x12a2ad(0xa8))/0x5*(parseInt(_0x12a2ad(0xa0))/0x6)+-parseInt(_0x12a2ad(0xe6))/0x7+-parseInt(_0x12a2ad(0xb9))/0x8+parseInt(_0x12a2ad(0xc9))/0x9;if(_0x1cd33f===_0x5cbbf3)break;else _0x351c65['push'](_0x351c65['shift']());}catch(_0x22aca0){_0x351c65['push'](_0x351c65['shift']());}}}(a535_0x4154,0x4ccf8));var __importDefault=this&&this[a535_0x4b00d4(0xb5)]||function(_0x5ab2a0){const _0x3e56b2=a535_0x4b00d4;return _0x5ab2a0&&_0x5ab2a0[_0x3e56b2(0xac)]?_0x5ab2a0:{'default':_0x5ab2a0};};Object[a535_0x4b00d4(0xb0)](exports,a535_0x4b00d4(0xac),{'value':!![]}),exports['sayChatbot']=exports[a535_0x4b00d4(0xc2)]=void 0x0;const path_1=__importDefault(require(a535_0x4b00d4(0xe2))),wbotMessageListener_1=require(a535_0x4b00d4(0xdc)),ShowDialogChatBotsServices_1=__importDefault(require(a535_0x4b00d4(0xa3))),ShowQueueService_1=__importDefault(require('../QueueService/ShowQueueService')),ShowChatBotServices_1=__importDefault(require('../ChatBotServices/ShowChatBotServices')),DeleteDialogChatBotsServices_1=__importDefault(require(a535_0x4b00d4(0xb7))),ShowChatBotByChatbotIdServices_1=__importDefault(require(a535_0x4b00d4(0xdd))),CreateDialogChatBotsServices_1=__importDefault(require('../DialogChatBotsServices/CreateDialogChatBotsServices')),ShowWhatsAppService_1=__importDefault(require(a535_0x4b00d4(0xaa))),Mustache_1=__importDefault(require(a535_0x4b00d4(0xa1))),UpdateTicketService_1=__importDefault(require(a535_0x4b00d4(0xfc))),User_1=__importDefault(require('../../models/User')),Setting_1=__importDefault(require('../../models/Setting')),ShowService_1=__importDefault(require('../../services/FileServices/ShowService')),SendWhatsAppMedia_1=__importDefault(require(a535_0x4b00d4(0xf2))),fs=require('fs');var axios=require(a535_0x4b00d4(0xf7));function a535_0x4154(){const _0x36cdef=['application/pdf','verifyMessage','closed','company','medias','resolve','getDate','image/jpeg','chatbotId','public/temp/','forEach','random','toLocaleLowerCase','1240032fxQEsR','./wbotMessageListener','../ChatBotServices/ShowChatBotByChatbotIdServices','value','name','text','list','path','‎Não\x20consegui\x20enviar\x20o\x20PDF,\x20tente\x20novamente!','optQueueId','selectedRowId','297325WoMqmI','dueDate','37095DYolxP','singleSelectReply','substring','getMonth','open','Não\x20consegui\x20enviar\x20o\x20PDF,\x20tente\x20novamente!','update','test','chatBotType','pending','./SendWhatsAppMedia','finalizar','queueType','options','queueId','axios','175353sakQnv','Escolha\x20uma\x20opção','length','findOne','../TicketServices/UpdateTicketService','optUserId','s.whatsapp.net','companyId','chatbots','push','37794IaElmF','../../helpers/Mustache','mediaType','../DialogChatBotsServices/ShowDialogChatBotsServices','getBodyMessage','optFileId','getFullYear','Menu','335HcThfH','\x0a*#*\x20Voltar\x20para\x20o\x20menu\x20principal','../WhatsappService/ShowWhatsAppService','entries','__esModule','g.us','7bit','readFileSync','defineProperty','default','message','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','toString','__importDefault','Estamos\x20finalizando\x20esta\x20conversa!\x20Caso\x20precise\x20entre\x20em\x20contato\x20conosco!','../DialogChatBotsServices/DeleteDialogChatBotsServices','listResponseMessage','1425520vpNLsz','split','localeCompare','queue','trim','key','ticketId','*\x20-\x20','greetingMessage','deleteAndCreateDialogStage','78wCHrIC','attendent','sendMessage','button','isGroup','ticketData','3063816BaFBpB','replace','number','buttonsResponseMessage','charAt'];a535_0x4154=function(){return _0x36cdef;};return a535_0x4154();}function a535_0x15c6(_0x3f6350,_0x93f241){const _0x415499=a535_0x4154();return a535_0x15c6=function(_0x15c6dc,_0x421a1c){_0x15c6dc=_0x15c6dc-0x9d;let _0x3d6f7f=_0x415499[_0x15c6dc];return _0x3d6f7f;},a535_0x15c6(_0x3f6350,_0x93f241);}const isNumeric=_0x48f522=>/^-?\d+$/[a535_0x4b00d4(0xef)](_0x48f522),deleteAndCreateDialogStage=async(_0x349f87,_0x55d491,_0x432a0e)=>{const _0x1bec08=a535_0x4b00d4;try{await(0x0,DeleteDialogChatBotsServices_1[_0x1bec08(0xb1)])(_0x349f87['id']);const _0xb1a5b0=await(0x0,ShowChatBotByChatbotIdServices_1['default'])(_0x55d491);return!_0xb1a5b0&&await _0x432a0e[_0x1bec08(0xee)]({'isBot':![]}),await(0x0,CreateDialogChatBotsServices_1[_0x1bec08(0xb1)])({'awaiting':0x1,'contactId':_0x349f87['id'],'chatbotId':_0x55d491,'queueId':_0xb1a5b0[_0x1bec08(0xf6)]});}catch(_0x445237){await _0x432a0e[_0x1bec08(0xee)]({'isBot':![]});}};exports[a535_0x4b00d4(0xc2)]=deleteAndCreateDialogStage;const sendMessage=async(_0x5d554f,_0x1f8816,_0x2e2be2,_0x32a81c)=>{const _0x139a41=a535_0x4b00d4,_0x5ab13d=await _0x5d554f['sendMessage'](_0x1f8816[_0x139a41(0xcb)]+'@'+(_0x2e2be2[_0x139a41(0xc7)]?'g.us':_0x139a41(0xfe)),{'text':(0x0,Mustache_1['default'])(_0x32a81c,_0x2e2be2)});(0x0,wbotMessageListener_1['verifyMessage'])(_0x5ab13d,_0x2e2be2,_0x1f8816);},sendMessageLink=async(_0x5e202e,_0x378930,_0x250b97,_0x307a37,_0x1f452f)=>{const _0x2645fc=a535_0x4b00d4;let _0x4751ac;try{_0x4751ac=await _0x5e202e[_0x2645fc(0xc5)](_0x378930[_0x2645fc(0xcb)]+'@'+(_0x250b97['isGroup']?_0x2645fc(0xad):_0x2645fc(0xfe)),{'document':_0x307a37?{'url':_0x307a37}:fs[_0x2645fc(0xaf)](_0x2645fc(0xd7)+_0x1f452f+'-'+makeid(0xa)),'fileName':_0x1f452f,'mimetype':_0x2645fc(0xce)});}catch(_0x2bf473){_0x4751ac=await _0x5e202e[_0x2645fc(0xc5)](_0x378930[_0x2645fc(0xcb)]+'@'+(_0x250b97[_0x2645fc(0xc7)]?_0x2645fc(0xad):_0x2645fc(0xfe)),{'text':(0x0,Mustache_1[_0x2645fc(0xb1)])(_0x2645fc(0xe3),_0x250b97)});}(0x0,wbotMessageListener_1[_0x2645fc(0xcf)])(_0x4751ac,_0x250b97,_0x378930);},sendMessageImage=async(_0x4d8e12,_0x324668,_0x22d0d2,_0x1a5861,_0xc6a0ed)=>{const _0x5a09da=a535_0x4b00d4;let _0x25559b;try{_0x25559b=await _0x4d8e12[_0x5a09da(0xc5)](_0x324668['number']+'@'+(_0x22d0d2[_0x5a09da(0xc7)]?_0x5a09da(0xad):'s.whatsapp.net'),{'image':_0x1a5861?{'url':_0x1a5861}:fs[_0x5a09da(0xaf)]('public/temp/'+_0xc6a0ed+'-'+makeid(0xa)),'fileName':_0xc6a0ed,'caption':_0xc6a0ed,'mimetype':_0x5a09da(0xd5)});}catch(_0x496704){_0x25559b=await _0x4d8e12[_0x5a09da(0xc5)](_0x324668[_0x5a09da(0xcb)]+'@'+(_0x22d0d2[_0x5a09da(0xc7)]?'g.us':_0x5a09da(0xfe)),{'text':(0x0,Mustache_1[_0x5a09da(0xb1)])(_0x5a09da(0xed),_0x22d0d2)});}(0x0,wbotMessageListener_1[_0x5a09da(0xcf)])(_0x25559b,_0x22d0d2,_0x324668);},sendDialog=async(_0x31ccdf,_0x36e7b2,_0x2bc1d0,_0xc3e18b)=>{const _0x2ec749=a535_0x4b00d4,_0x570c1a=await(0x0,ShowChatBotServices_1[_0x2ec749(0xb1)])(_0x31ccdf['id']);if(_0x570c1a['options']){const _0x5a68e1=await Setting_1[_0x2ec749(0xb1)][_0x2ec749(0xfb)]({'where':{'key':_0x2ec749(0xf0),'companyId':_0xc3e18b['companyId']}}),_0x3d3564=_0x5a68e1?.['value']||_0x2ec749(0xe0),_0x35514e=async()=>{const _0x4ee9ac=_0x2ec749;let _0x1612d4='';_0x570c1a[_0x4ee9ac(0xf5)][_0x4ee9ac(0xd8)]((_0x7c0c6f,_0x139654)=>{const _0xbf06ad=_0x4ee9ac;_0x1612d4+='*'+(_0x139654+0x1)+'*\x20-\x20'+_0x7c0c6f[_0xbf06ad(0xdf)]+'\x0a';});const _0x2405de=_0x1612d4[_0x4ee9ac(0xfa)]>0x0?_0x1612d4+_0x4ee9ac(0xa9):_0x1612d4;if(_0x1612d4[_0x4ee9ac(0xfa)]>0x0){const _0x522c7e='‎'+_0x31ccdf['greetingMessage']+'\x0a\x0a'+_0x2405de,_0x245e7f=await sendMessage(_0x36e7b2,_0x2bc1d0,_0xc3e18b,_0x522c7e);return _0x245e7f;}const _0x442b6b='‎'+_0x31ccdf['greetingMessage'],_0x4f847a=await sendMessage(_0x36e7b2,_0x2bc1d0,_0xc3e18b,_0x442b6b);return _0x4f847a;},_0x2c0f21=async()=>{const _0x586c26=_0x2ec749,_0xc690fd=[];_0x570c1a[_0x586c26(0xf5)][_0x586c26(0xd8)]((_0x3ef670,_0x57acb9)=>{const _0x59c74f=_0x586c26;_0xc690fd[_0x59c74f(0x9f)]({'buttonId':''+(_0x57acb9+0x1),'buttonText':{'displayText':_0x3ef670[_0x59c74f(0xdf)]},'type':0x1});});if(_0xc690fd[_0x586c26(0xfa)]>0x0){const _0x34dfa4={'text':'‎'+_0x31ccdf[_0x586c26(0xc1)],'buttons':_0xc690fd,'headerType':0x1},_0x914414=await _0x36e7b2['sendMessage'](_0x2bc1d0[_0x586c26(0xcb)]+'@'+(_0xc3e18b['isGroup']?_0x586c26(0xad):_0x586c26(0xfe)),_0x34dfa4);return await(0x0,wbotMessageListener_1[_0x586c26(0xcf)])(_0x914414,_0xc3e18b,_0x2bc1d0),_0x914414;}const _0x189150='‎'+_0x31ccdf[_0x586c26(0xc1)],_0x7e78ce=await sendMessage(_0x36e7b2,_0x2bc1d0,_0xc3e18b,_0x189150);return _0x7e78ce;},_0x407146=async()=>{const _0x25e2f3=_0x2ec749,_0x1724d5=[];_0x570c1a['options'][_0x25e2f3(0xd8)]((_0x128e77,_0x2d487b)=>{const _0x21dcd6=_0x25e2f3;_0x1724d5[_0x21dcd6(0x9f)]({'title':_0x128e77[_0x21dcd6(0xdf)],'rowId':''+(_0x2d487b+0x1)});});if(_0x1724d5[_0x25e2f3(0xfa)]>0x0){const _0x45d8ff=[{'title':'Menu','rows':_0x1724d5}],_0x9c8059={'text':(0x0,Mustache_1['default'])('‎'+_0x31ccdf[_0x25e2f3(0xc1)],_0xc3e18b),'buttonText':_0x25e2f3(0xf9),'sections':_0x45d8ff},_0x9d2c01=await _0x36e7b2[_0x25e2f3(0xc5)](_0x2bc1d0[_0x25e2f3(0xcb)]+'@'+(_0xc3e18b['isGroup']?_0x25e2f3(0xad):'s.whatsapp.net'),_0x9c8059);return await(0x0,wbotMessageListener_1[_0x25e2f3(0xcf)])(_0x9d2c01,_0xc3e18b,_0x2bc1d0),_0x9d2c01;}const _0x43da16='‎'+_0x31ccdf['greetingMessage'],_0x1508a0=await sendMessage(_0x36e7b2,_0x2bc1d0,_0xc3e18b,_0x43da16);return _0x1508a0;};if(_0x3d3564===_0x2ec749(0xe0))return await _0x35514e();if(_0x3d3564===_0x2ec749(0xc6)&&_0x570c1a[_0x2ec749(0xf5)][_0x2ec749(0xfa)]>0x4)return await _0x35514e();if(_0x3d3564==='button'&&_0x570c1a['options']['length']<=0x4)return await _0x2c0f21();if(_0x3d3564===_0x2ec749(0xe1))return await _0x407146();}},backToMainMenu=async(_0x28aeb9,_0x443d55,_0x1968f1)=>{const _0xa59c4b=a535_0x4b00d4;await(0x0,UpdateTicketService_1[_0xa59c4b(0xb1)])({'ticketData':{'queueId':null,'userId':null},'ticketId':_0x1968f1['id'],'companyId':_0x1968f1[_0xa59c4b(0x9d)]});const {queues:_0x4244a0,greetingMessage:_0x19df65}=await(0x0,ShowWhatsAppService_1[_0xa59c4b(0xb1)])(_0x28aeb9['id'],_0x1968f1[_0xa59c4b(0x9d)]),_0x4472c8=await Setting_1['default'][_0xa59c4b(0xfb)]({'where':{'key':_0xa59c4b(0xf0)}}),_0x4f6c68=async()=>{const _0x18a6dc=_0xa59c4b;let _0x335443='';_0x4244a0['forEach']((_0x241956,_0x6e0fb5)=>{const _0x4ec8cd=a535_0x15c6;_0x335443+='*'+(_0x6e0fb5+0x1)+_0x4ec8cd(0xc0)+_0x241956[_0x4ec8cd(0xdf)]+'\x0a';});const _0x4905d6=(0x0,Mustache_1[_0x18a6dc(0xb1)])('‎'+_0x19df65+'\x0a\x0a'+_0x335443,_0x1968f1);await sendMessage(_0x28aeb9,_0x443d55,_0x1968f1,_0x4905d6);const _0x52cbeb=await(0x0,DeleteDialogChatBotsServices_1[_0x18a6dc(0xb1)])(_0x443d55['id']);return _0x52cbeb;},_0x19e6e4=async()=>{const _0x3d0b7b=_0xa59c4b,_0x199c49=[];_0x4244a0[_0x3d0b7b(0xd8)]((_0x20817a,_0x17d9e7)=>{const _0x9b594f=_0x3d0b7b;_0x199c49[_0x9b594f(0x9f)]({'buttonId':''+(_0x17d9e7+0x1),'buttonText':{'displayText':_0x20817a[_0x9b594f(0xdf)]},'type':0x1});});const _0xece511={'text':(0x0,Mustache_1[_0x3d0b7b(0xb1)])('‎'+_0x19df65,_0x1968f1),'buttons':_0x199c49,'headerType':0x1},_0x46ba67=await _0x28aeb9[_0x3d0b7b(0xc5)](_0x443d55[_0x3d0b7b(0xcb)]+'@'+(_0x1968f1[_0x3d0b7b(0xc7)]?'g.us':_0x3d0b7b(0xfe)),_0xece511);await(0x0,wbotMessageListener_1['verifyMessage'])(_0x46ba67,_0x1968f1,_0x443d55);const _0x5dfc4d=await(0x0,DeleteDialogChatBotsServices_1['default'])(_0x443d55['id']);return _0x5dfc4d;},_0x4766ec=async()=>{const _0xe78d62=_0xa59c4b,_0x4af5db=[];_0x4244a0[_0xe78d62(0xd8)]((_0x3d61af,_0x1b6108)=>{const _0x4c15d9=_0xe78d62;_0x4af5db[_0x4c15d9(0x9f)]({'title':_0x3d61af['name'],'rowId':''+(_0x1b6108+0x1)});});const _0x348cf1=[{'title':_0xe78d62(0xa7),'rows':_0x4af5db}],_0x3ea97d={'text':(0x0,Mustache_1['default'])('‎'+_0x19df65,_0x1968f1),'buttonText':_0xe78d62(0xf9),'sections':_0x348cf1},_0x902f5=await _0x28aeb9[_0xe78d62(0xc5)](_0x443d55[_0xe78d62(0xcb)]+'@'+(_0x1968f1['isGroup']?_0xe78d62(0xad):_0xe78d62(0xfe)),_0x3ea97d);await(0x0,wbotMessageListener_1[_0xe78d62(0xcf)])(_0x902f5,_0x1968f1,_0x443d55);const _0x390796=await(0x0,DeleteDialogChatBotsServices_1[_0xe78d62(0xb1)])(_0x443d55['id']);return _0x390796;};if(_0x4472c8[_0xa59c4b(0xde)]==='text')return _0x4f6c68();if(_0x4472c8[_0xa59c4b(0xde)]===_0xa59c4b(0xc6)&&_0x4244a0['length']>0x4)return _0x4f6c68();if(_0x4472c8[_0xa59c4b(0xde)]===_0xa59c4b(0xc6)&&_0x4244a0[_0xa59c4b(0xfa)]<=0x4)return _0x19e6e4();if(_0x4472c8[_0xa59c4b(0xde)]==='list')return _0x4766ec();};function validaCpfCnpj(_0x3b08c7){const _0x179679=a535_0x4b00d4;if(_0x3b08c7[_0x179679(0xfa)]==0xb){var _0x548097=_0x3b08c7[_0x179679(0xbd)]();_0x548097=_0x548097[_0x179679(0xca)](/\./g,''),_0x548097=_0x548097['replace']('-',''),_0x548097=_0x548097[_0x179679(0xba)]('');var _0x5374b5=0x0,_0x305597=0x0,_0x5033a1=![];for(var _0x2c7061=0x1;_0x548097['length']>_0x2c7061;_0x2c7061++){_0x548097[_0x2c7061-0x1]!=_0x548097[_0x2c7061]&&(_0x5033a1=!![]);}if(_0x5033a1==![])return![];for(var _0x2c7061=0x0,_0x13d294=0xa;_0x548097[_0x179679(0xfa)]-0x2>_0x2c7061;_0x2c7061++,_0x13d294--){_0x5374b5+=_0x548097[_0x2c7061]*_0x13d294;}_0x5374b5=_0x5374b5*0xa%0xb;_0x5374b5==0xa&&(_0x5374b5=0x0);if(_0x5374b5!=_0x548097[0x9])return![];for(var _0x2c7061=0x0,_0x13d294=0xb;_0x548097[_0x179679(0xfa)]-0x1>_0x2c7061;_0x2c7061++,_0x13d294--){_0x305597+=_0x548097[_0x2c7061]*_0x13d294;}return _0x305597=_0x305597*0xa%0xb,_0x305597==0xa&&(_0x305597=0x0),_0x305597!=_0x548097[0xa]?![]:!![];}else{if(_0x3b08c7[_0x179679(0xfa)]==0xe){var _0x4bf809=_0x3b08c7[_0x179679(0xbd)]();_0x4bf809=_0x4bf809['replace'](/\./g,''),_0x4bf809=_0x4bf809['replace']('-',''),_0x4bf809=_0x4bf809[_0x179679(0xca)]('/',''),_0x4bf809=_0x4bf809[_0x179679(0xba)]('');var _0x5374b5=0x0,_0x305597=0x0,_0x5033a1=![];for(var _0x2c7061=0x1;_0x4bf809[_0x179679(0xfa)]>_0x2c7061;_0x2c7061++){_0x4bf809[_0x2c7061-0x1]!=_0x4bf809[_0x2c7061]&&(_0x5033a1=!![]);}if(_0x5033a1==![])return![];for(var _0x2c7061=0x0,_0x7e8dd3=0x5,_0x5bfccb=0xd;_0x4bf809[_0x179679(0xfa)]-0x2>_0x2c7061;_0x2c7061++,_0x7e8dd3--,_0x5bfccb--){_0x7e8dd3>=0x2?_0x5374b5+=_0x4bf809[_0x2c7061]*_0x7e8dd3:_0x5374b5+=_0x4bf809[_0x2c7061]*_0x5bfccb;}_0x5374b5=_0x5374b5%0xb;_0x5374b5<0x2?_0x5374b5=0x0:_0x5374b5=0xb-_0x5374b5;if(_0x5374b5!=_0x4bf809[0xc])return![];for(var _0x2c7061=0x0,_0x7e8dd3=0x6,_0x5bfccb=0xe;_0x4bf809['length']-0x1>_0x2c7061;_0x2c7061++,_0x7e8dd3--,_0x5bfccb--){_0x7e8dd3>=0x2?_0x305597+=_0x4bf809[_0x2c7061]*_0x7e8dd3:_0x305597+=_0x4bf809[_0x2c7061]*_0x5bfccb;}return _0x305597=_0x305597%0xb,_0x305597<0x2?_0x305597=0x0:_0x305597=0xb-_0x305597,_0x305597!=_0x4bf809[0xd]?![]:!![];}else return![];}}function timeout(_0x2448df){return new Promise(_0x538da4=>setTimeout(_0x538da4,_0x2448df));}async function sleep(_0x161c21){await timeout(_0x161c21);}function firstDayOfMonth(_0x38e7f6){const _0x538c58=a535_0x4b00d4,_0x3c21ed=new Date(),_0x39724f=new Date(_0x3c21ed[_0x538c58(0xa6)](),_0x3c21ed['getMonth']()-_0x38e7f6,0x1);return _0x39724f;};function lastDayOfMonth(_0x57b039){const _0x57da40=a535_0x4b00d4,_0x1a6886=new Date(),_0x49bd72=new Date(_0x1a6886['getFullYear'](),_0x1a6886[_0x57da40(0xeb)]()+_0x57b039,0x0);return _0x49bd72;};function dataAtualFormatada(_0x8667f8){const _0x178cb7=a535_0x4b00d4;var _0x48a55b=_0x8667f8[_0x178cb7(0xd4)]()['toString'](),_0x102df0=_0x48a55b['length']==0x1?'0'+_0x48a55b:_0x48a55b,_0x36d017=(_0x8667f8[_0x178cb7(0xeb)]()+0x1)[_0x178cb7(0xb4)](),_0x42cff9=_0x36d017[_0x178cb7(0xfa)]==0x1?'0'+_0x36d017:_0x36d017,_0x98c6be=_0x8667f8[_0x178cb7(0xa6)]();return _0x102df0+'/'+_0x42cff9+'/'+_0x98c6be;}function makeid(_0x3b9fb8){const _0xd607ea=a535_0x4b00d4;var _0x595f4e='',_0x50f74a=_0xd607ea(0xb3),_0x32b17f=_0x50f74a[_0xd607ea(0xfa)];for(var _0x4dce46=0x0;_0x4dce46<_0x3b9fb8;_0x4dce46++){_0x595f4e+=_0x50f74a[_0xd607ea(0xcd)](Math['floor'](Math[_0xd607ea(0xd9)]()*_0x32b17f));}return _0x595f4e;}function replaceAll(_0x369595,_0x46e946,_0x6467a4){return _0x369595['replace'](new RegExp(_0x46e946,'g'),_0x6467a4);}function formatDate(_0x4feaa1){const _0xb6e3b9=a535_0x4b00d4;return _0x4feaa1[_0xb6e3b9(0xea)](0x8,0xa)+'/'+_0x4feaa1['substring'](0x5,0x7)+'/'+_0x4feaa1[_0xb6e3b9(0xea)](0x0,0x4);}function sortfunction(_0x5b2341,_0x45bc21){const _0x105342=a535_0x4b00d4;return _0x5b2341[_0x105342(0xe7)][_0x105342(0xbb)](_0x45bc21[_0x105342(0xe7)]);}async function sendMsgAndCloseTicket(_0x19b8fd,_0x2cb5bc,_0x284f05){const _0x4ba527=a535_0x4b00d4,_0x32a8a7=_0x4ba527(0xb6);await sleep(0x7d0),await sendMessage(_0x19b8fd,_0x2cb5bc,_0x284f05,_0x32a8a7);const _0x182d06={'ticketData':{'status':_0x4ba527(0xd0),'userId':0x1,'sendFarewellMessage':![],'amountUsedBotQueues':0x0},'ticketId':_0x284f05['id'],'companyId':_0x284f05[_0x4ba527(0x9d)],'ratingId':undefined};await sleep(0x7d0),await(0x0,UpdateTicketService_1['default'])(_0x182d06);}const sayChatbot=async(_0x48e0ed,_0xfacfd2,_0x3da347,_0x1346f9,_0x1c8cd0)=>{const _0x27af32=a535_0x4b00d4,_0x5cebe9=_0x1c8cd0?.[_0x27af32(0xb2)]?.[_0x27af32(0xcc)]?.['selectedButtonId']||_0x1c8cd0?.['message']?.[_0x27af32(0xb8)]?.[_0x27af32(0xe9)][_0x27af32(0xe5)]||(0x0,wbotMessageListener_1[_0x27af32(0xa4)])(_0x1c8cd0);if(!_0x48e0ed&&_0x5cebe9&&_0x1c8cd0[_0x27af32(0xbe)]['fromMe'])return;const _0x3bd831=await(0x0,ShowDialogChatBotsServices_1[_0x27af32(0xb1)])(_0x1346f9['id']),_0x5a19a0=await(0x0,ShowQueueService_1[_0x27af32(0xb1)])(_0x48e0ed,_0x3da347[_0x27af32(0x9d)]);let _0x32c410;if(_0x5cebe9[_0x27af32(0xda)]()===_0x27af32(0xf3)){const _0x2c3a0d={'ticketData':{'status':'closed','sendFarewellMessage':![],'amountUsedBotQueues':0x0},'ticketId':_0x3da347['id'],'companyId':_0x3da347[_0x27af32(0x9d)]};await(0x0,UpdateTicketService_1[_0x27af32(0xb1)])(_0x2c3a0d);}if(_0x5cebe9==='#'){const _0x4f2f79=await backToMainMenu(_0xfacfd2,_0x1346f9,_0x3da347);return _0x4f2f79;}if(!_0x3bd831){const _0x5032bd=await(0x0,ShowQueueService_1[_0x27af32(0xb1)])(_0x48e0ed,_0x3da347[_0x27af32(0x9d)]),_0xd1dcb7=_0x1c8cd0?.[_0x27af32(0xb2)]?.[_0x27af32(0xcc)]?.['selectedButtonId']||_0x1c8cd0?.[_0x27af32(0xb2)]?.[_0x27af32(0xb8)]?.[_0x27af32(0xe9)][_0x27af32(0xe5)]||(0x0,wbotMessageListener_1['getBodyMessage'])(_0x1c8cd0),_0xd5d0a0=_0x5032bd[_0x27af32(0x9e)][+_0xd1dcb7-0x1];if(_0xd5d0a0){if(_0xd5d0a0['queueType']===_0x27af32(0xbc))try{const _0xaf3098={'ticketData':{'queueId':_0xd5d0a0[_0x27af32(0xe4)],'status':_0x27af32(0xf1)},'ticketId':_0x3da347['id']};await(0x0,UpdateTicketService_1[_0x27af32(0xb1)])({'ticketData':{..._0xaf3098[_0x27af32(0xc8)]},'ticketId':_0xaf3098[_0x27af32(0xbf)],'companyId':_0x3da347[_0x27af32(0x9d)]});}catch(_0xcf88eb){await(0x0,exports['deleteAndCreateDialogStage'])(_0x1346f9,_0xd5d0a0['id'],_0x3da347);}if(_0xd5d0a0[_0x27af32(0xf4)]===_0x27af32(0xc4))try{const _0x4790e0={'ticketData':{'queueId':_0xd5d0a0[_0x27af32(0xe4)],'userId':_0xd5d0a0[_0x27af32(0xfd)],'status':_0x27af32(0xf1)},'ticketId':_0x3da347['id']};await(0x0,UpdateTicketService_1[_0x27af32(0xb1)])({'ticketData':{..._0x4790e0[_0x27af32(0xc8)]},'ticketId':_0x4790e0[_0x27af32(0xbf)],'companyId':_0x3da347[_0x27af32(0x9d)]});}catch(_0x5c6ac4){await(0x0,exports['deleteAndCreateDialogStage'])(_0x1346f9,_0xd5d0a0['id'],_0x3da347);}await(0x0,exports[_0x27af32(0xc2)])(_0x1346f9,_0xd5d0a0['id'],_0x3da347);let _0xc7df4;_0xd5d0a0?.['greetingMessage']&&(_0xc7df4=await sendDialog(_0xd5d0a0,_0xfacfd2,_0x1346f9,_0x3da347));if(_0xd5d0a0[_0x27af32(0xf4)]==='file')try{const _0x76aba4=path_1[_0x27af32(0xb1)][_0x27af32(0xd3)](__dirname,'..','..','..','public'),_0x1fffc0=await(0x0,ShowService_1[_0x27af32(0xb1)])(_0xd5d0a0[_0x27af32(0xa5)],_0x3da347[_0x27af32(0x9d)]),_0x4cbb72=path_1[_0x27af32(0xb1)]['resolve'](_0x76aba4,_0x27af32(0xd1)+_0x3da347[_0x27af32(0x9d)],'fileList',String(_0x1fffc0['id']));for(const [_0x4c5743,_0xe3ae3]of _0x1fffc0['options'][_0x27af32(0xab)]()){const _0x1fa4ae={'fieldname':_0x27af32(0xd2),'originalname':_0xe3ae3[_0x27af32(0xe2)],'encoding':_0x27af32(0xae),'mimetype':_0xe3ae3[_0x27af32(0xa2)],'filename':_0xe3ae3[_0x27af32(0xe2)],'path':path_1[_0x27af32(0xb1)]['resolve'](_0x4cbb72,_0xe3ae3[_0x27af32(0xe2)])};await(0x0,SendWhatsAppMedia_1[_0x27af32(0xb1)])({'media':_0x1fa4ae,'ticket':_0x3da347,'body':_0xe3ae3[_0x27af32(0xdf)]});};}catch(_0x422bf1){await(0x0,exports['deleteAndCreateDialogStage'])(_0x1346f9,_0xd5d0a0['id'],_0x3da347);}return _0xc7df4;}}if(_0x3bd831){const _0x195d7c=isNumeric(_0x5cebe9)?_0x5cebe9:0x1,_0x517388=await(0x0,ShowChatBotServices_1['default'])(_0x3bd831[_0x27af32(0xd6)]),_0x2e0662=_0x517388['options'][+_0x195d7c-0x1]?_0x517388[_0x27af32(0xf5)][+_0x195d7c-0x1]:_0x517388[_0x27af32(0xf5)][0x0];if(!_0x2e0662[_0x27af32(0xc1)]){await(0x0,DeleteDialogChatBotsServices_1[_0x27af32(0xb1)])(_0x1346f9['id']);return;}if(_0x2e0662){if(_0x2e0662['isAgent']){const _0x320605=await User_1[_0x27af32(0xb1)][_0x27af32(0xfb)]({'where':{'name':_0x2e0662['name']}}),_0x213c2f={'ticketData':{'userId':_0x320605['id'],'status':_0x27af32(0xec)},'ticketId':_0x3da347['id']};await(0x0,UpdateTicketService_1[_0x27af32(0xb1)])({'ticketData':{..._0x213c2f[_0x27af32(0xc8)]},'ticketId':_0x213c2f[_0x27af32(0xbf)],'companyId':_0x3da347[_0x27af32(0x9d)]});}await(0x0,exports[_0x27af32(0xc2)])(_0x1346f9,_0x2e0662['id'],_0x3da347);const _0x16419b=await sendDialog(_0x2e0662,_0xfacfd2,_0x1346f9,_0x3da347);return _0x16419b;}}};exports['sayChatbot']=sayChatbot;