'use strict';const a535_0x222d05=a535_0x3c71;(function(_0x273e63,_0x57d28c){const _0x260cb7=a535_0x3c71,_0x5a2601=_0x273e63();while(!![]){try{const _0x3f51d0=-parseInt(_0x260cb7(0x17d))/0x1+parseInt(_0x260cb7(0x158))/0x2+parseInt(_0x260cb7(0x15b))/0x3*(-parseInt(_0x260cb7(0x16d))/0x4)+parseInt(_0x260cb7(0x12b))/0x5*(-parseInt(_0x260cb7(0x133))/0x6)+parseInt(_0x260cb7(0x162))/0x7*(parseInt(_0x260cb7(0x15c))/0x8)+parseInt(_0x260cb7(0x122))/0x9*(parseInt(_0x260cb7(0x146))/0xa)+parseInt(_0x260cb7(0x149))/0xb*(-parseInt(_0x260cb7(0x150))/0xc);if(_0x3f51d0===_0x57d28c)break;else _0x5a2601['push'](_0x5a2601['shift']());}catch(_0x3002d0){_0x5a2601['push'](_0x5a2601['shift']());}}}(a535_0xca93,0x85be2));var __importDefault=this&&this[a535_0x222d05(0x124)]||function(_0x21f15f){const _0x91702=a535_0x222d05;return _0x21f15f&&_0x21f15f[_0x91702(0x17f)]?_0x21f15f:{'default':_0x21f15f};};Object[a535_0x222d05(0x175)](exports,'__esModule',{'value':!![]}),exports['sayChatbot']=exports[a535_0x222d05(0x14b)]=void 0x0;const path_1=__importDefault(require(a535_0x222d05(0x164))),wbotMessageListener_1=require(a535_0x222d05(0x179)),ShowDialogChatBotsServices_1=__importDefault(require(a535_0x222d05(0x121))),ShowQueueService_1=__importDefault(require('../QueueService/ShowQueueService')),ShowChatBotServices_1=__importDefault(require(a535_0x222d05(0x144))),DeleteDialogChatBotsServices_1=__importDefault(require(a535_0x222d05(0x13d))),ShowChatBotByChatbotIdServices_1=__importDefault(require(a535_0x222d05(0x169))),CreateDialogChatBotsServices_1=__importDefault(require(a535_0x222d05(0x182))),ShowWhatsAppService_1=__importDefault(require('../WhatsappService/ShowWhatsAppService')),Mustache_1=__importDefault(require('../../helpers/Mustache')),UpdateTicketService_1=__importDefault(require(a535_0x222d05(0x156))),User_1=__importDefault(require(a535_0x222d05(0x155))),Setting_1=__importDefault(require(a535_0x222d05(0x174))),ShowService_1=__importDefault(require(a535_0x222d05(0x127))),SendWhatsAppMedia_1=__importDefault(require(a535_0x222d05(0x17e))),fs=require('fs');var axios=require(a535_0x222d05(0x12a));const isNumeric=_0x528c57=>/^-?\d+$/[a535_0x222d05(0x170)](_0x528c57),deleteAndCreateDialogStage=async(_0x798ac9,_0x4cfd94,_0x118f2c)=>{const _0x525b34=a535_0x222d05;try{await(0x0,DeleteDialogChatBotsServices_1[_0x525b34(0x181)])(_0x798ac9['id']);const _0x4b208d=await(0x0,ShowChatBotByChatbotIdServices_1[_0x525b34(0x181)])(_0x4cfd94);return!_0x4b208d&&await _0x118f2c[_0x525b34(0x13f)]({'isBot':![]}),await(0x0,CreateDialogChatBotsServices_1[_0x525b34(0x181)])({'awaiting':0x1,'contactId':_0x798ac9['id'],'chatbotId':_0x4cfd94,'queueId':_0x4b208d[_0x525b34(0x129)]});}catch(_0x3a5353){await _0x118f2c[_0x525b34(0x13f)]({'isBot':![]});}};exports[a535_0x222d05(0x14b)]=deleteAndCreateDialogStage;const sendMessage=async(_0x38eb4f,_0x16e276,_0x2d1bfb,_0x8135d2)=>{const _0x3db0d0=a535_0x222d05,_0x45a8cc=await _0x38eb4f[_0x3db0d0(0x167)](_0x16e276[_0x3db0d0(0x16a)]+'@'+(_0x2d1bfb[_0x3db0d0(0x132)]?'g.us':_0x3db0d0(0x14c)),{'text':(0x0,Mustache_1[_0x3db0d0(0x181)])(_0x8135d2,_0x2d1bfb)});(0x0,wbotMessageListener_1['verifyMessage'])(_0x45a8cc,_0x2d1bfb,_0x16e276);},sendMessageLink=async(_0x404c35,_0x44229b,_0x1f8cbc,_0x4b0e40,_0x2967ed)=>{const _0x529616=a535_0x222d05;let _0x9238fe;try{_0x9238fe=await _0x404c35[_0x529616(0x167)](_0x44229b['number']+'@'+(_0x1f8cbc[_0x529616(0x132)]?_0x529616(0x165):_0x529616(0x14c)),{'document':_0x4b0e40?{'url':_0x4b0e40}:fs[_0x529616(0x138)]('public/temp/'+_0x2967ed+'-'+makeid(0xa)),'fileName':_0x2967ed,'mimetype':_0x529616(0x172)});}catch(_0x239851){_0x9238fe=await _0x404c35[_0x529616(0x167)](_0x44229b[_0x529616(0x16a)]+'@'+(_0x1f8cbc[_0x529616(0x132)]?_0x529616(0x165):_0x529616(0x14c)),{'text':(0x0,Mustache_1[_0x529616(0x181)])('‎Não\x20consegui\x20enviar\x20o\x20PDF,\x20tente\x20novamente!',_0x1f8cbc)});}(0x0,wbotMessageListener_1[_0x529616(0x173)])(_0x9238fe,_0x1f8cbc,_0x44229b);},sendMessageImage=async(_0x4393af,_0x4e9218,_0x5033c9,_0x336628,_0x474ae4)=>{const _0x3728d7=a535_0x222d05;let _0x5ed24a;try{_0x5ed24a=await _0x4393af['sendMessage'](_0x4e9218['number']+'@'+(_0x5033c9[_0x3728d7(0x132)]?_0x3728d7(0x165):'s.whatsapp.net'),{'image':_0x336628?{'url':_0x336628}:fs[_0x3728d7(0x138)](_0x3728d7(0x143)+_0x474ae4+'-'+makeid(0xa)),'fileName':_0x474ae4,'caption':_0x474ae4,'mimetype':_0x3728d7(0x153)});}catch(_0x1dc34c){_0x5ed24a=await _0x4393af[_0x3728d7(0x167)](_0x4e9218[_0x3728d7(0x16a)]+'@'+(_0x5033c9[_0x3728d7(0x132)]?_0x3728d7(0x165):'s.whatsapp.net'),{'text':(0x0,Mustache_1[_0x3728d7(0x181)])(_0x3728d7(0x148),_0x5033c9)});}(0x0,wbotMessageListener_1[_0x3728d7(0x173)])(_0x5ed24a,_0x5033c9,_0x4e9218);},sendDialog=async(_0x4b44e8,_0x11c70a,_0x3ac9da,_0x4981d6)=>{const _0x1e3163=a535_0x222d05,_0x301e5a=await(0x0,ShowChatBotServices_1[_0x1e3163(0x181)])(_0x4b44e8['id']);if(_0x301e5a[_0x1e3163(0x140)]){const _0x2a30c5=await Setting_1['default'][_0x1e3163(0x141)]({'where':{'key':_0x1e3163(0x11f),'companyId':_0x4981d6[_0x1e3163(0x178)]}}),_0xd4bae7=_0x2a30c5?.['value']||_0x1e3163(0x135),_0x2488ea=async()=>{const _0x536783=_0x1e3163;let _0x3b1f25='';_0x301e5a[_0x536783(0x140)][_0x536783(0x184)]((_0x304fe6,_0x32c4ce)=>{const _0x465950=_0x536783;_0x3b1f25+='*'+(_0x32c4ce+0x1)+_0x465950(0x126)+_0x304fe6['name']+'\x0a';});const _0x4fdcf5=_0x3b1f25[_0x536783(0x13c)]>0x0?_0x3b1f25+'\x0a*#*\x20Voltar\x20para\x20o\x20menu\x20principal':_0x3b1f25;if(_0x3b1f25[_0x536783(0x13c)]>0x0){const _0x47d526='‎'+_0x4b44e8[_0x536783(0x159)]+'\x0a\x0a'+_0x4fdcf5,_0x54a1b7=await sendMessage(_0x11c70a,_0x3ac9da,_0x4981d6,_0x47d526);return _0x54a1b7;}const _0x2658eb='‎'+_0x4b44e8[_0x536783(0x159)],_0x43e1fa=await sendMessage(_0x11c70a,_0x3ac9da,_0x4981d6,_0x2658eb);return _0x43e1fa;},_0x53b648=async()=>{const _0x483c06=_0x1e3163,_0x599b6e=[];_0x301e5a[_0x483c06(0x140)][_0x483c06(0x184)]((_0x22b16b,_0x4f1a13)=>{const _0x5f2821=_0x483c06;_0x599b6e['push']({'buttonId':''+(_0x4f1a13+0x1),'buttonText':{'displayText':_0x22b16b[_0x5f2821(0x180)]},'type':0x1});});if(_0x599b6e['length']>0x0){const _0x451b47={'text':'‎'+_0x4b44e8[_0x483c06(0x159)],'buttons':_0x599b6e,'headerType':0x1},_0x50eded=await _0x11c70a[_0x483c06(0x167)](_0x3ac9da[_0x483c06(0x16a)]+'@'+(_0x4981d6['isGroup']?'g.us':_0x483c06(0x14c)),_0x451b47);return await(0x0,wbotMessageListener_1[_0x483c06(0x173)])(_0x50eded,_0x4981d6,_0x3ac9da),_0x50eded;}const _0x5b6aac='‎'+_0x4b44e8[_0x483c06(0x159)],_0x22d293=await sendMessage(_0x11c70a,_0x3ac9da,_0x4981d6,_0x5b6aac);return _0x22d293;},_0x221bd5=async()=>{const _0x29e243=_0x1e3163,_0x321d0e=[];_0x301e5a['options'][_0x29e243(0x184)]((_0x7224c7,_0x59eca2)=>{const _0x28c4f7=_0x29e243;_0x321d0e[_0x28c4f7(0x11e)]({'title':_0x7224c7[_0x28c4f7(0x180)],'rowId':''+(_0x59eca2+0x1)});});if(_0x321d0e[_0x29e243(0x13c)]>0x0){const _0x18a241=[{'title':_0x29e243(0x152),'rows':_0x321d0e}],_0x206ecf={'text':(0x0,Mustache_1[_0x29e243(0x181)])('‎'+_0x4b44e8[_0x29e243(0x159)],_0x4981d6),'buttonText':_0x29e243(0x151),'sections':_0x18a241},_0x4ef9cb=await _0x11c70a[_0x29e243(0x167)](_0x3ac9da['number']+'@'+(_0x4981d6['isGroup']?'g.us':_0x29e243(0x14c)),_0x206ecf);return await(0x0,wbotMessageListener_1[_0x29e243(0x173)])(_0x4ef9cb,_0x4981d6,_0x3ac9da),_0x4ef9cb;}const _0x5e385d='‎'+_0x4b44e8[_0x29e243(0x159)],_0x49cfea=await sendMessage(_0x11c70a,_0x3ac9da,_0x4981d6,_0x5e385d);return _0x49cfea;};if(_0xd4bae7==='text')return await _0x2488ea();if(_0xd4bae7===_0x1e3163(0x177)&&_0x301e5a[_0x1e3163(0x140)][_0x1e3163(0x13c)]>0x4)return await _0x2488ea();if(_0xd4bae7===_0x1e3163(0x177)&&_0x301e5a['options'][_0x1e3163(0x13c)]<=0x4)return await _0x53b648();if(_0xd4bae7==='list')return await _0x221bd5();}},backToMainMenu=async(_0x574f3c,_0x5bd7aa,_0x552e32)=>{const _0x4c71f1=a535_0x222d05;await(0x0,UpdateTicketService_1[_0x4c71f1(0x181)])({'ticketData':{'queueId':null,'userId':null},'ticketId':_0x552e32['id'],'companyId':_0x552e32[_0x4c71f1(0x178)]});const {queues:_0x3b977a,greetingMessage:_0x37ee14}=await(0x0,ShowWhatsAppService_1[_0x4c71f1(0x181)])(_0x574f3c['id'],_0x552e32['companyId']),_0x388cba=await Setting_1['default'][_0x4c71f1(0x141)]({'where':{'key':_0x4c71f1(0x11f)}}),_0x588315=async()=>{const _0x13ce14=_0x4c71f1;let _0x5bd7b3='';_0x3b977a[_0x13ce14(0x184)]((_0x10d672,_0x105100)=>{const _0x342474=_0x13ce14;_0x5bd7b3+='*'+(_0x105100+0x1)+_0x342474(0x126)+_0x10d672[_0x342474(0x180)]+'\x0a';});const _0x4fe674=(0x0,Mustache_1[_0x13ce14(0x181)])('‎'+_0x37ee14+'\x0a\x0a'+_0x5bd7b3,_0x552e32);await sendMessage(_0x574f3c,_0x5bd7aa,_0x552e32,_0x4fe674);const _0xf7db96=await(0x0,DeleteDialogChatBotsServices_1[_0x13ce14(0x181)])(_0x5bd7aa['id']);return _0xf7db96;},_0x213125=async()=>{const _0x3a9ee7=_0x4c71f1,_0x54523c=[];_0x3b977a[_0x3a9ee7(0x184)]((_0x1d949f,_0x3acb92)=>{const _0x91b93e=_0x3a9ee7;_0x54523c[_0x91b93e(0x11e)]({'buttonId':''+(_0x3acb92+0x1),'buttonText':{'displayText':_0x1d949f[_0x91b93e(0x180)]},'type':0x1});});const _0x34fcf5={'text':(0x0,Mustache_1[_0x3a9ee7(0x181)])('‎'+_0x37ee14,_0x552e32),'buttons':_0x54523c,'headerType':0x1},_0x3c731c=await _0x574f3c[_0x3a9ee7(0x167)](_0x5bd7aa[_0x3a9ee7(0x16a)]+'@'+(_0x552e32[_0x3a9ee7(0x132)]?_0x3a9ee7(0x165):_0x3a9ee7(0x14c)),_0x34fcf5);await(0x0,wbotMessageListener_1[_0x3a9ee7(0x173)])(_0x3c731c,_0x552e32,_0x5bd7aa);const _0xbf7ee8=await(0x0,DeleteDialogChatBotsServices_1[_0x3a9ee7(0x181)])(_0x5bd7aa['id']);return _0xbf7ee8;},_0x4c1f09=async()=>{const _0x276385=_0x4c71f1,_0x3ac896=[];_0x3b977a[_0x276385(0x184)]((_0x248284,_0x57a970)=>{const _0x4529a1=_0x276385;_0x3ac896['push']({'title':_0x248284[_0x4529a1(0x180)],'rowId':''+(_0x57a970+0x1)});});const _0x15d47f=[{'title':_0x276385(0x152),'rows':_0x3ac896}],_0x485ad0={'text':(0x0,Mustache_1[_0x276385(0x181)])('‎'+_0x37ee14,_0x552e32),'buttonText':_0x276385(0x151),'sections':_0x15d47f},_0x176efd=await _0x574f3c[_0x276385(0x167)](_0x5bd7aa['number']+'@'+(_0x552e32[_0x276385(0x132)]?_0x276385(0x165):'s.whatsapp.net'),_0x485ad0);await(0x0,wbotMessageListener_1[_0x276385(0x173)])(_0x176efd,_0x552e32,_0x5bd7aa);const _0x2e215c=await(0x0,DeleteDialogChatBotsServices_1[_0x276385(0x181)])(_0x5bd7aa['id']);return _0x2e215c;};if(_0x388cba['value']===_0x4c71f1(0x135))return _0x588315();if(_0x388cba['value']===_0x4c71f1(0x177)&&_0x3b977a[_0x4c71f1(0x13c)]>0x4)return _0x588315();if(_0x388cba[_0x4c71f1(0x12e)]===_0x4c71f1(0x177)&&_0x3b977a[_0x4c71f1(0x13c)]<=0x4)return _0x213125();if(_0x388cba[_0x4c71f1(0x12e)]===_0x4c71f1(0x15d))return _0x4c1f09();};function a535_0x3c71(_0x5e881b,_0x20d1bb){const _0xca93ba=a535_0xca93();return a535_0x3c71=function(_0x3c718b,_0x269436){_0x3c718b=_0x3c718b-0x11d;let _0x4958a1=_0xca93ba[_0x3c718b];return _0x4958a1;},a535_0x3c71(_0x5e881b,_0x20d1bb);}function validaCpfCnpj(_0x5eb818){const _0x283bc7=a535_0x222d05;if(_0x5eb818[_0x283bc7(0x13c)]==0xb){var _0x2a5a78=_0x5eb818[_0x283bc7(0x130)]();_0x2a5a78=_0x2a5a78[_0x283bc7(0x14d)](/\./g,''),_0x2a5a78=_0x2a5a78['replace']('-',''),_0x2a5a78=_0x2a5a78[_0x283bc7(0x136)]('');var _0x1c306b=0x0,_0x173d5a=0x0,_0x262220=![];for(var _0x15413d=0x1;_0x2a5a78[_0x283bc7(0x13c)]>_0x15413d;_0x15413d++){_0x2a5a78[_0x15413d-0x1]!=_0x2a5a78[_0x15413d]&&(_0x262220=!![]);}if(_0x262220==![])return![];for(var _0x15413d=0x0,_0x16990c=0xa;_0x2a5a78[_0x283bc7(0x13c)]-0x2>_0x15413d;_0x15413d++,_0x16990c--){_0x1c306b+=_0x2a5a78[_0x15413d]*_0x16990c;}_0x1c306b=_0x1c306b*0xa%0xb;_0x1c306b==0xa&&(_0x1c306b=0x0);if(_0x1c306b!=_0x2a5a78[0x9])return![];for(var _0x15413d=0x0,_0x16990c=0xb;_0x2a5a78[_0x283bc7(0x13c)]-0x1>_0x15413d;_0x15413d++,_0x16990c--){_0x173d5a+=_0x2a5a78[_0x15413d]*_0x16990c;}return _0x173d5a=_0x173d5a*0xa%0xb,_0x173d5a==0xa&&(_0x173d5a=0x0),_0x173d5a!=_0x2a5a78[0xa]?![]:!![];}else{if(_0x5eb818[_0x283bc7(0x13c)]==0xe){var _0x8a6b9a=_0x5eb818[_0x283bc7(0x130)]();_0x8a6b9a=_0x8a6b9a['replace'](/\./g,''),_0x8a6b9a=_0x8a6b9a[_0x283bc7(0x14d)]('-',''),_0x8a6b9a=_0x8a6b9a['replace']('/',''),_0x8a6b9a=_0x8a6b9a[_0x283bc7(0x136)]('');var _0x1c306b=0x0,_0x173d5a=0x0,_0x262220=![];for(var _0x15413d=0x1;_0x8a6b9a['length']>_0x15413d;_0x15413d++){_0x8a6b9a[_0x15413d-0x1]!=_0x8a6b9a[_0x15413d]&&(_0x262220=!![]);}if(_0x262220==![])return![];for(var _0x15413d=0x0,_0x15bd66=0x5,_0xde5b8=0xd;_0x8a6b9a[_0x283bc7(0x13c)]-0x2>_0x15413d;_0x15413d++,_0x15bd66--,_0xde5b8--){_0x15bd66>=0x2?_0x1c306b+=_0x8a6b9a[_0x15413d]*_0x15bd66:_0x1c306b+=_0x8a6b9a[_0x15413d]*_0xde5b8;}_0x1c306b=_0x1c306b%0xb;_0x1c306b<0x2?_0x1c306b=0x0:_0x1c306b=0xb-_0x1c306b;if(_0x1c306b!=_0x8a6b9a[0xc])return![];for(var _0x15413d=0x0,_0x15bd66=0x6,_0xde5b8=0xe;_0x8a6b9a[_0x283bc7(0x13c)]-0x1>_0x15413d;_0x15413d++,_0x15bd66--,_0xde5b8--){_0x15bd66>=0x2?_0x173d5a+=_0x8a6b9a[_0x15413d]*_0x15bd66:_0x173d5a+=_0x8a6b9a[_0x15413d]*_0xde5b8;}return _0x173d5a=_0x173d5a%0xb,_0x173d5a<0x2?_0x173d5a=0x0:_0x173d5a=0xb-_0x173d5a,_0x173d5a!=_0x8a6b9a[0xd]?![]:!![];}else return![];}}function timeout(_0x44e607){return new Promise(_0x2d6a17=>setTimeout(_0x2d6a17,_0x44e607));}async function sleep(_0x50deeb){await timeout(_0x50deeb);}function firstDayOfMonth(_0x36d771){const _0xd378c8=a535_0x222d05,_0x4a9a31=new Date(),_0x3caf4a=new Date(_0x4a9a31[_0xd378c8(0x120)](),_0x4a9a31['getMonth']()-_0x36d771,0x1);return _0x3caf4a;};function lastDayOfMonth(_0x65bdde){const _0x100b9d=new Date(),_0x4fbde8=new Date(_0x100b9d['getFullYear'](),_0x100b9d['getMonth']()+_0x65bdde,0x0);return _0x4fbde8;};function dataAtualFormatada(_0x2315fc){const _0x1e3dff=a535_0x222d05;var _0x22ffaf=_0x2315fc[_0x1e3dff(0x145)]()['toString'](),_0x596004=_0x22ffaf[_0x1e3dff(0x13c)]==0x1?'0'+_0x22ffaf:_0x22ffaf,_0x4b6b5d=(_0x2315fc[_0x1e3dff(0x12f)]()+0x1)[_0x1e3dff(0x17a)](),_0x38a910=_0x4b6b5d[_0x1e3dff(0x13c)]==0x1?'0'+_0x4b6b5d:_0x4b6b5d,_0x41a8c3=_0x2315fc[_0x1e3dff(0x120)]();return _0x596004+'/'+_0x38a910+'/'+_0x41a8c3;}function makeid(_0x1a5a50){const _0x154ab9=a535_0x222d05;var _0xb62c65='',_0x511e2e=_0x154ab9(0x13b),_0x25826c=_0x511e2e['length'];for(var _0x140adf=0x0;_0x140adf<_0x1a5a50;_0x140adf++){_0xb62c65+=_0x511e2e[_0x154ab9(0x13e)](Math[_0x154ab9(0x154)](Math[_0x154ab9(0x14a)]()*_0x25826c));}return _0xb62c65;}function replaceAll(_0x30cf9c,_0xe2e4d,_0x1fa297){const _0x3a3a18=a535_0x222d05;return _0x30cf9c[_0x3a3a18(0x14d)](new RegExp(_0xe2e4d,'g'),_0x1fa297);}function formatDate(_0x36613a){const _0x38ca8f=a535_0x222d05;return _0x36613a[_0x38ca8f(0x11d)](0x8,0xa)+'/'+_0x36613a[_0x38ca8f(0x11d)](0x5,0x7)+'/'+_0x36613a[_0x38ca8f(0x11d)](0x0,0x4);}function sortfunction(_0x595a38,_0x4211ef){const _0x3a9925=a535_0x222d05;return _0x595a38['dueDate'][_0x3a9925(0x17b)](_0x4211ef[_0x3a9925(0x123)]);}async function sendMsgAndCloseTicket(_0x1082fa,_0x6d049a,_0x40f4da){const _0x1727d8=a535_0x222d05,_0x9612a3=_0x1727d8(0x163);await sleep(0x7d0),await sendMessage(_0x1082fa,_0x6d049a,_0x40f4da,_0x9612a3);const _0x460f8f={'ticketData':{'status':_0x1727d8(0x16f),'userId':0x1,'sendFarewellMessage':![],'amountUsedBotQueues':0x0},'ticketId':_0x40f4da['id'],'companyId':_0x40f4da[_0x1727d8(0x178)],'ratingId':undefined};await sleep(0x7d0),await(0x0,UpdateTicketService_1[_0x1727d8(0x181)])(_0x460f8f);}const sayChatbot=async(_0x2fc36d,_0x57ad89,_0xae4625,_0x2ce4dd,_0x134ade)=>{const _0x7d6886=a535_0x222d05,_0xcd65aa=_0x134ade?.[_0x7d6886(0x15e)]?.[_0x7d6886(0x15f)]?.['selectedButtonId']||_0x134ade?.['message']?.['listResponseMessage']?.[_0x7d6886(0x12c)]['selectedRowId']||(0x0,wbotMessageListener_1[_0x7d6886(0x13a)])(_0x134ade);if(!_0x2fc36d&&_0xcd65aa&&_0x134ade[_0x7d6886(0x176)][_0x7d6886(0x16b)])return;const _0x195730=await(0x0,ShowDialogChatBotsServices_1[_0x7d6886(0x181)])(_0x2ce4dd['id']),_0x4370cc=await(0x0,ShowQueueService_1['default'])(_0x2fc36d,_0xae4625[_0x7d6886(0x178)]);let _0x5ae056;if(_0xcd65aa['toLocaleLowerCase']()===_0x7d6886(0x16c)){const _0xe0a189={'ticketData':{'status':_0x7d6886(0x16f),'sendFarewellMessage':![],'amountUsedBotQueues':0x0},'ticketId':_0xae4625['id'],'companyId':_0xae4625[_0x7d6886(0x178)]};await(0x0,UpdateTicketService_1[_0x7d6886(0x181)])(_0xe0a189);}if(_0xcd65aa==='#'){const _0x5b8c8c=await backToMainMenu(_0x57ad89,_0x2ce4dd,_0xae4625);return _0x5b8c8c;}if(!_0x195730){const _0x5af9f0=await(0x0,ShowQueueService_1['default'])(_0x2fc36d,_0xae4625['companyId']),_0x372c0b=_0x134ade?.['message']?.[_0x7d6886(0x15f)]?.[_0x7d6886(0x168)]||_0x134ade?.[_0x7d6886(0x15e)]?.[_0x7d6886(0x16e)]?.['singleSelectReply'][_0x7d6886(0x160)]||(0x0,wbotMessageListener_1[_0x7d6886(0x13a)])(_0x134ade),_0x58d2fe=_0x5af9f0['chatbots'][+_0x372c0b-0x1];if(_0x58d2fe){if(_0x58d2fe[_0x7d6886(0x147)]===_0x7d6886(0x17c))try{const _0x2fd6b2={'ticketData':{'queueId':_0x58d2fe[_0x7d6886(0x183)],'status':_0x7d6886(0x125)},'ticketId':_0xae4625['id']};await(0x0,UpdateTicketService_1[_0x7d6886(0x181)])({'ticketData':{..._0x2fd6b2[_0x7d6886(0x157)]},'ticketId':_0x2fd6b2[_0x7d6886(0x161)],'companyId':_0xae4625[_0x7d6886(0x178)]});}catch(_0x541e5e){await(0x0,exports[_0x7d6886(0x14b)])(_0x2ce4dd,_0x58d2fe['id'],_0xae4625);}if(_0x58d2fe[_0x7d6886(0x147)]===_0x7d6886(0x12d))try{const _0x329b3c={'ticketData':{'queueId':_0x58d2fe[_0x7d6886(0x183)],'userId':_0x58d2fe[_0x7d6886(0x139)],'status':_0x7d6886(0x125)},'ticketId':_0xae4625['id']};await(0x0,UpdateTicketService_1[_0x7d6886(0x181)])({'ticketData':{..._0x329b3c['ticketData']},'ticketId':_0x329b3c[_0x7d6886(0x161)],'companyId':_0xae4625[_0x7d6886(0x178)]});}catch(_0x10e38d){await(0x0,exports[_0x7d6886(0x14b)])(_0x2ce4dd,_0x58d2fe['id'],_0xae4625);}await(0x0,exports[_0x7d6886(0x14b)])(_0x2ce4dd,_0x58d2fe['id'],_0xae4625);let _0x5d52cd;_0x58d2fe?.[_0x7d6886(0x159)]&&(_0x5d52cd=await sendDialog(_0x58d2fe,_0x57ad89,_0x2ce4dd,_0xae4625));if(_0x58d2fe['queueType']==='file')try{const _0x27acac=path_1['default'][_0x7d6886(0x128)](__dirname,'..','..','..',_0x7d6886(0x131)),_0x496eab=await(0x0,ShowService_1[_0x7d6886(0x181)])(_0x58d2fe[_0x7d6886(0x15a)],_0xae4625[_0x7d6886(0x178)]),_0x4688ef=path_1[_0x7d6886(0x181)][_0x7d6886(0x128)](_0x27acac,'company'+_0xae4625[_0x7d6886(0x178)],'fileList',String(_0x496eab['id']));for(const [_0xb34775,_0xa9dfbe]of _0x496eab['options'][_0x7d6886(0x166)]()){const _0x2c3df2={'fieldname':'medias','originalname':_0xa9dfbe[_0x7d6886(0x164)],'encoding':_0x7d6886(0x134),'mimetype':_0xa9dfbe[_0x7d6886(0x142)],'filename':_0xa9dfbe[_0x7d6886(0x164)],'path':path_1[_0x7d6886(0x181)][_0x7d6886(0x128)](_0x4688ef,_0xa9dfbe[_0x7d6886(0x164)])};await(0x0,SendWhatsAppMedia_1[_0x7d6886(0x181)])({'media':_0x2c3df2,'ticket':_0xae4625,'body':_0xa9dfbe[_0x7d6886(0x180)]});};}catch(_0x3485a0){await(0x0,exports[_0x7d6886(0x14b)])(_0x2ce4dd,_0x58d2fe['id'],_0xae4625);}return _0x5d52cd;}}if(_0x195730){const _0x58aaca=isNumeric(_0xcd65aa)?_0xcd65aa:0x1,_0x1cd564=await(0x0,ShowChatBotServices_1[_0x7d6886(0x181)])(_0x195730[_0x7d6886(0x14e)]),_0x36a88c=_0x1cd564[_0x7d6886(0x140)][+_0x58aaca-0x1]?_0x1cd564[_0x7d6886(0x140)][+_0x58aaca-0x1]:_0x1cd564[_0x7d6886(0x140)][0x0];if(!_0x36a88c[_0x7d6886(0x159)]){await(0x0,DeleteDialogChatBotsServices_1['default'])(_0x2ce4dd['id']);return;}if(_0x36a88c){if(_0x36a88c[_0x7d6886(0x171)]){const _0xc5dd6d=await User_1[_0x7d6886(0x181)][_0x7d6886(0x141)]({'where':{'name':_0x36a88c['name']}}),_0x26d7ff={'ticketData':{'userId':_0xc5dd6d['id'],'status':_0x7d6886(0x137)},'ticketId':_0xae4625['id']};await(0x0,UpdateTicketService_1[_0x7d6886(0x181)])({'ticketData':{..._0x26d7ff['ticketData']},'ticketId':_0x26d7ff[_0x7d6886(0x161)],'companyId':_0xae4625[_0x7d6886(0x178)]});}await(0x0,exports['deleteAndCreateDialogStage'])(_0x2ce4dd,_0x36a88c['id'],_0xae4625);const _0x36c780=await sendDialog(_0x36a88c,_0x57ad89,_0x2ce4dd,_0xae4625);return _0x36c780;}}};exports[a535_0x222d05(0x14f)]=sayChatbot;function a535_0xca93(){const _0x5483b1=['../DialogChatBotsServices/DeleteDialogChatBotsServices','charAt','update','options','findOne','mediaType','public/temp/','../ChatBotServices/ShowChatBotServices','getDate','6654920IukRfV','queueType','Não\x20consegui\x20enviar\x20o\x20PDF,\x20tente\x20novamente!','44yrxWYo','random','deleteAndCreateDialogStage','s.whatsapp.net','replace','chatbotId','sayChatbot','589452pZsJKC','Escolha\x20uma\x20opção','Menu','image/jpeg','floor','../../models/User','../TicketServices/UpdateTicketService','ticketData','1879396vvIoxM','greetingMessage','optFileId','60834wxZVAb','1133192OZzKWl','list','message','buttonsResponseMessage','selectedRowId','ticketId','14qRarhv','Estamos\x20finalizando\x20esta\x20conversa!\x20Caso\x20precise\x20entre\x20em\x20contato\x20conosco!','path','g.us','entries','sendMessage','selectedButtonId','../ChatBotServices/ShowChatBotByChatbotIdServices','number','fromMe','finalizar','76iEezRv','listResponseMessage','closed','test','isAgent','application/pdf','verifyMessage','../../models/Setting','defineProperty','key','button','companyId','./wbotMessageListener','toString','localeCompare','queue','169905bkmQVi','./SendWhatsAppMedia','__esModule','name','default','../DialogChatBotsServices/CreateDialogChatBotsServices','optQueueId','forEach','substring','push','chatBotType','getFullYear','../DialogChatBotsServices/ShowDialogChatBotsServices','9zIMsQF','dueDate','__importDefault','pending','*\x20-\x20','../../services/FileServices/ShowService','resolve','queueId','axios','128045gzERct','singleSelectReply','attendent','value','getMonth','trim','public','isGroup','138xFHdrm','7bit','text','split','open','readFileSync','optUserId','getBodyMessage','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','length'];a535_0xca93=function(){return _0x5483b1;};return a535_0xca93();}