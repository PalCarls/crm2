'use strict';const a552_0x5c42c8=a552_0x5b52;(function(_0x8ef736,_0xa30262){const _0x2a98d5=a552_0x5b52,_0x256e77=_0x8ef736();while(!![]){try{const _0x2369fb=-parseInt(_0x2a98d5(0x12c))/0x1+-parseInt(_0x2a98d5(0x116))/0x2*(parseInt(_0x2a98d5(0x11f))/0x3)+-parseInt(_0x2a98d5(0x114))/0x4+parseInt(_0x2a98d5(0x126))/0x5+parseInt(_0x2a98d5(0x100))/0x6*(parseInt(_0x2a98d5(0x105))/0x7)+parseInt(_0x2a98d5(0x137))/0x8*(-parseInt(_0x2a98d5(0x10b))/0x9)+-parseInt(_0x2a98d5(0xfe))/0xa*(-parseInt(_0x2a98d5(0x111))/0xb);if(_0x2369fb===_0xa30262)break;else _0x256e77['push'](_0x256e77['shift']());}catch(_0x1f3aad){_0x256e77['push'](_0x256e77['shift']());}}}(a552_0x430e,0xb483f));var __importDefault=this&&this['__importDefault']||function(_0x4da235){const _0x224dc9=a552_0x5b52;return _0x4da235&&_0x4da235[_0x224dc9(0x113)]?_0x4da235:{'default':_0x4da235};};Object[a552_0x5c42c8(0x102)](exports,a552_0x5c42c8(0x113),{'value':!![]}),exports[a552_0x5c42c8(0x101)]=exports['deleteAndCreateDialogStage']=void 0x0;const path_1=__importDefault(require(a552_0x5c42c8(0xf6))),wbotMessageListener_1=require(a552_0x5c42c8(0xdd)),ShowDialogChatBotsServices_1=__importDefault(require('../DialogChatBotsServices/ShowDialogChatBotsServices')),ShowQueueService_1=__importDefault(require(a552_0x5c42c8(0x120))),ShowChatBotServices_1=__importDefault(require(a552_0x5c42c8(0xf0))),DeleteDialogChatBotsServices_1=__importDefault(require(a552_0x5c42c8(0xf3))),ShowChatBotByChatbotIdServices_1=__importDefault(require('../ChatBotServices/ShowChatBotByChatbotIdServices')),CreateDialogChatBotsServices_1=__importDefault(require(a552_0x5c42c8(0x115))),ShowWhatsAppService_1=__importDefault(require(a552_0x5c42c8(0x11b))),Mustache_1=__importDefault(require(a552_0x5c42c8(0x12e))),UpdateTicketService_1=__importDefault(require(a552_0x5c42c8(0x124))),User_1=__importDefault(require('../../models/User')),ShowService_1=__importDefault(require(a552_0x5c42c8(0x119))),SendWhatsAppMedia_1=__importDefault(require('./SendWhatsAppMedia')),CompaniesSettings_1=__importDefault(require(a552_0x5c42c8(0xeb))),fs=require('fs');var axios=require(a552_0x5c42c8(0xea));const isNumeric=_0xf65023=>/^-?\d+$/[a552_0x5c42c8(0xf5)](_0xf65023),deleteAndCreateDialogStage=async(_0x118b69,_0x459082,_0x1e8e4d)=>{const _0x5881a2=a552_0x5c42c8;try{await(0x0,DeleteDialogChatBotsServices_1[_0x5881a2(0x109)])(_0x118b69['id']);const _0x51fc88=await(0x0,ShowChatBotByChatbotIdServices_1[_0x5881a2(0x109)])(_0x459082);return!_0x51fc88&&await _0x1e8e4d['update']({'isBot':![]}),await(0x0,CreateDialogChatBotsServices_1[_0x5881a2(0x109)])({'awaiting':0x1,'contactId':_0x118b69['id'],'chatbotId':_0x459082,'queueId':_0x51fc88[_0x5881a2(0xe9)]});}catch(_0x36ddd5){await _0x1e8e4d[_0x5881a2(0x127)]({'isBot':![]});}};exports[a552_0x5c42c8(0x136)]=deleteAndCreateDialogStage;const sendMessage=async(_0x363db0,_0x1c5d08,_0xd141c,_0x27fb66)=>{const _0x211ec4=a552_0x5c42c8,_0xad80e6=await _0x363db0[_0x211ec4(0x133)](_0x1c5d08[_0x211ec4(0x108)]+'@'+(_0xd141c[_0x211ec4(0x10c)]?_0x211ec4(0xfc):_0x211ec4(0xde)),{'text':(0x0,Mustache_1[_0x211ec4(0x109)])(_0x27fb66,_0xd141c)});(0x0,wbotMessageListener_1['verifyMessage'])(_0xad80e6,_0xd141c,_0x1c5d08);},sendMessageLink=async(_0x213ec7,_0xe84d1a,_0x3c28e6,_0x40488b,_0x30160e)=>{const _0x337c05=a552_0x5c42c8;let _0x57b2ab;try{_0x57b2ab=await _0x213ec7[_0x337c05(0x133)](_0xe84d1a[_0x337c05(0x108)]+'@'+(_0x3c28e6[_0x337c05(0x10c)]?_0x337c05(0xfc):_0x337c05(0xde)),{'document':_0x40488b?{'url':_0x40488b}:fs[_0x337c05(0xfb)](_0x337c05(0x121)+_0x30160e+'-'+makeid(0xa)),'fileName':_0x30160e,'mimetype':'application/pdf'});}catch(_0x2fa015){_0x57b2ab=await _0x213ec7[_0x337c05(0x133)](_0xe84d1a[_0x337c05(0x108)]+'@'+(_0x3c28e6[_0x337c05(0x10c)]?_0x337c05(0xfc):_0x337c05(0xde)),{'text':(0x0,Mustache_1[_0x337c05(0x109)])('‎Não\x20consegui\x20enviar\x20o\x20PDF,\x20tente\x20novamente!',_0x3c28e6)});}(0x0,wbotMessageListener_1['verifyMessage'])(_0x57b2ab,_0x3c28e6,_0xe84d1a);},sendMessageImage=async(_0x121f66,_0x4c93a7,_0x4461d7,_0x1da6cd,_0x21015e)=>{const _0x3bd429=a552_0x5c42c8;let _0x4e6be3;try{_0x4e6be3=await _0x121f66[_0x3bd429(0x133)](_0x4c93a7[_0x3bd429(0x108)]+'@'+(_0x4461d7[_0x3bd429(0x10c)]?_0x3bd429(0xfc):_0x3bd429(0xde)),{'image':_0x1da6cd?{'url':_0x1da6cd}:fs[_0x3bd429(0xfb)](_0x3bd429(0x121)+_0x21015e+'-'+makeid(0xa)),'fileName':_0x21015e,'caption':_0x21015e,'mimetype':_0x3bd429(0x129)});}catch(_0x35d882){_0x4e6be3=await _0x121f66[_0x3bd429(0x133)](_0x4c93a7[_0x3bd429(0x108)]+'@'+(_0x4461d7[_0x3bd429(0x10c)]?_0x3bd429(0xfc):_0x3bd429(0xde)),{'text':(0x0,Mustache_1[_0x3bd429(0x109)])('Não\x20consegui\x20enviar\x20o\x20PDF,\x20tente\x20novamente!',_0x4461d7)});}(0x0,wbotMessageListener_1['verifyMessage'])(_0x4e6be3,_0x4461d7,_0x4c93a7);},sendDialog=async(_0x1d2e57,_0x526b51,_0x1a2d74,_0x29c8d3)=>{const _0x51e7ce=a552_0x5c42c8,_0x382951=await(0x0,ShowChatBotServices_1['default'])(_0x1d2e57['id']);if(_0x382951[_0x51e7ce(0xf7)]){let _0x26f61c=_0x29c8d3[_0x51e7ce(0x117)];const _0x518f28=await CompaniesSettings_1['default'][_0x51e7ce(0xef)]({'where':{'companyId':_0x26f61c}}),_0x302567=_0x518f28?.[_0x51e7ce(0x135)]||'text',_0x2609f1=async()=>{const _0x502fbc=_0x51e7ce;let _0x17f308='';_0x382951['options']['forEach']((_0x14ff2b,_0x42243c)=>{const _0x3db8c7=a552_0x5b52;_0x17f308+='*'+(_0x42243c+0x1)+_0x3db8c7(0x138)+_0x14ff2b['name']+'\x0a';});const _0x4d7d53=_0x17f308['length']>0x0?_0x17f308+_0x502fbc(0x10d):_0x17f308;if(_0x17f308[_0x502fbc(0x12f)]>0x0){const _0x48ccab='‎'+_0x1d2e57['greetingMessage']+'\x0a\x0a'+_0x4d7d53,_0x49b7a1=await sendMessage(_0x526b51,_0x1a2d74,_0x29c8d3,_0x48ccab);return _0x49b7a1;}const _0x5ef49d='‎'+_0x1d2e57[_0x502fbc(0xff)],_0x4bca44=await sendMessage(_0x526b51,_0x1a2d74,_0x29c8d3,_0x5ef49d);return _0x4bca44;},_0x4057f1=async()=>{const _0xfdc611=_0x51e7ce,_0x35f407=[];_0x382951[_0xfdc611(0xf7)][_0xfdc611(0xfa)]((_0x394d6d,_0x2a7133)=>{const _0x323f6f=_0xfdc611;_0x35f407[_0x323f6f(0x139)]({'buttonId':''+(_0x2a7133+0x1),'buttonText':{'displayText':_0x394d6d[_0x323f6f(0x13a)]},'type':0x1});});if(_0x35f407['length']>0x0){const _0x5bb30c={'text':'‎'+_0x1d2e57[_0xfdc611(0xff)],'buttons':_0x35f407,'headerType':0x1},_0x11a02d=await _0x526b51['sendMessage'](_0x1a2d74[_0xfdc611(0x108)]+'@'+(_0x29c8d3['isGroup']?_0xfdc611(0xfc):_0xfdc611(0xde)),_0x5bb30c);return await(0x0,wbotMessageListener_1[_0xfdc611(0xd7)])(_0x11a02d,_0x29c8d3,_0x1a2d74),_0x11a02d;}const _0x114e5c='‎'+_0x1d2e57['greetingMessage'],_0xec9b46=await sendMessage(_0x526b51,_0x1a2d74,_0x29c8d3,_0x114e5c);return _0xec9b46;},_0xd5af34=async()=>{const _0x43d077=_0x51e7ce,_0x35fd13=[];_0x382951[_0x43d077(0xf7)]['forEach']((_0x15c4ae,_0xbdf4c0)=>{const _0x6f70e3=_0x43d077;_0x35fd13[_0x6f70e3(0x139)]({'title':_0x15c4ae[_0x6f70e3(0x13a)],'rowId':''+(_0xbdf4c0+0x1)});});if(_0x35fd13['length']>0x0){const _0x2d17e6=[{'title':_0x43d077(0xd6),'rows':_0x35fd13}],_0x36f84d={'text':(0x0,Mustache_1['default'])('‎'+_0x1d2e57[_0x43d077(0xff)],_0x29c8d3),'buttonText':_0x43d077(0xe3),'sections':_0x2d17e6},_0x2786cb=await _0x526b51[_0x43d077(0x133)](_0x1a2d74[_0x43d077(0x108)]+'@'+(_0x29c8d3[_0x43d077(0x10c)]?_0x43d077(0xfc):_0x43d077(0xde)),_0x36f84d);return await(0x0,wbotMessageListener_1[_0x43d077(0xd7)])(_0x2786cb,_0x29c8d3,_0x1a2d74),_0x2786cb;}const _0x44f3cc='‎'+_0x1d2e57[_0x43d077(0xff)],_0x4c5e2c=await sendMessage(_0x526b51,_0x1a2d74,_0x29c8d3,_0x44f3cc);return _0x4c5e2c;};if(_0x302567==='text')return await _0x2609f1();if(_0x302567==='button'&&_0x382951['options'][_0x51e7ce(0x12f)]>0x4)return await _0x2609f1();if(_0x302567===_0x51e7ce(0xda)&&_0x382951[_0x51e7ce(0xf7)][_0x51e7ce(0x12f)]<=0x4)return await _0x4057f1();if(_0x302567===_0x51e7ce(0x131))return await _0xd5af34();}},backToMainMenu=async(_0x34c772,_0x4baf24,_0x41aac5)=>{const _0x213677=a552_0x5c42c8;await(0x0,UpdateTicketService_1[_0x213677(0x109)])({'ticketData':{'queueId':null,'userId':null},'ticketId':_0x41aac5['id'],'companyId':_0x41aac5['companyId']});const {queues:_0x26636a,greetingMessage:_0x257e82}=await(0x0,ShowWhatsAppService_1['default'])(_0x34c772['id'],_0x41aac5[_0x213677(0x117)]),_0x340d0e=await CompaniesSettings_1['default'][_0x213677(0xef)]({'where':{'key':_0x213677(0x135)}}),_0x5f4672=async()=>{const _0x615290=_0x213677;let _0x57281e='';_0x26636a[_0x615290(0xfa)]((_0x49f547,_0x16bb42)=>{const _0x5ad8b4=_0x615290;_0x57281e+='*'+(_0x16bb42+0x1)+_0x5ad8b4(0x138)+_0x49f547['name']+'\x0a';});const _0x5b6ba1=(0x0,Mustache_1[_0x615290(0x109)])('‎'+_0x257e82+'\x0a\x0a'+_0x57281e,_0x41aac5);await sendMessage(_0x34c772,_0x4baf24,_0x41aac5,_0x5b6ba1);const _0x5c4703=await(0x0,DeleteDialogChatBotsServices_1[_0x615290(0x109)])(_0x4baf24['id']);return _0x5c4703;},_0x4d01a4=async()=>{const _0x3e8918=_0x213677,_0x119777=[];_0x26636a[_0x3e8918(0xfa)]((_0x23e73c,_0x5ca4cd)=>{const _0x74b03f=_0x3e8918;_0x119777[_0x74b03f(0x139)]({'buttonId':''+(_0x5ca4cd+0x1),'buttonText':{'displayText':_0x23e73c[_0x74b03f(0x13a)]},'type':0x1});});const _0xeef3e5={'text':(0x0,Mustache_1['default'])('‎'+_0x257e82,_0x41aac5),'buttons':_0x119777,'headerType':0x1},_0xb25dca=await _0x34c772[_0x3e8918(0x133)](_0x4baf24[_0x3e8918(0x108)]+'@'+(_0x41aac5['isGroup']?_0x3e8918(0xfc):_0x3e8918(0xde)),_0xeef3e5);await(0x0,wbotMessageListener_1[_0x3e8918(0xd7)])(_0xb25dca,_0x41aac5,_0x4baf24);const _0x25e0e1=await(0x0,DeleteDialogChatBotsServices_1['default'])(_0x4baf24['id']);return _0x25e0e1;},_0x5d7f26=async()=>{const _0x1367a0=_0x213677,_0x39d07b=[];_0x26636a[_0x1367a0(0xfa)]((_0x17f8e5,_0x26770a)=>{_0x39d07b['push']({'title':_0x17f8e5['name'],'rowId':''+(_0x26770a+0x1)});});const _0x3f6f37=[{'title':'Menu','rows':_0x39d07b}],_0x48f512={'text':(0x0,Mustache_1['default'])('‎'+_0x257e82,_0x41aac5),'buttonText':_0x1367a0(0xe3),'sections':_0x3f6f37},_0x117fd0=await _0x34c772[_0x1367a0(0x133)](_0x4baf24[_0x1367a0(0x108)]+'@'+(_0x41aac5[_0x1367a0(0x10c)]?'g.us':_0x1367a0(0xde)),_0x48f512);await(0x0,wbotMessageListener_1[_0x1367a0(0xd7)])(_0x117fd0,_0x41aac5,_0x4baf24);const _0x1cba6f=await(0x0,DeleteDialogChatBotsServices_1['default'])(_0x4baf24['id']);return _0x1cba6f;};if(_0x340d0e['chatBotType']==='text')return _0x5f4672();if(_0x340d0e[_0x213677(0x135)]===_0x213677(0xda)&&_0x26636a[_0x213677(0x12f)]>0x4)return _0x5f4672();if(_0x340d0e['chatBotType']==='button'&&_0x26636a[_0x213677(0x12f)]<=0x4)return _0x4d01a4();if(_0x340d0e[_0x213677(0x135)]===_0x213677(0x131))return _0x5d7f26();};function validaCpfCnpj(_0x2ad961){const _0x625dc3=a552_0x5c42c8;if(_0x2ad961[_0x625dc3(0x12f)]==0xb){var _0x411b77=_0x2ad961[_0x625dc3(0xdf)]();_0x411b77=_0x411b77[_0x625dc3(0xd8)](/\./g,''),_0x411b77=_0x411b77[_0x625dc3(0xd8)]('-',''),_0x411b77=_0x411b77[_0x625dc3(0xdc)]('');var _0x23891d=0x0,_0x270dfd=0x0,_0x1536c9=![];for(var _0x4cb3cb=0x1;_0x411b77[_0x625dc3(0x12f)]>_0x4cb3cb;_0x4cb3cb++){_0x411b77[_0x4cb3cb-0x1]!=_0x411b77[_0x4cb3cb]&&(_0x1536c9=!![]);}if(_0x1536c9==![])return![];for(var _0x4cb3cb=0x0,_0x5d0cb4=0xa;_0x411b77['length']-0x2>_0x4cb3cb;_0x4cb3cb++,_0x5d0cb4--){_0x23891d+=_0x411b77[_0x4cb3cb]*_0x5d0cb4;}_0x23891d=_0x23891d*0xa%0xb;_0x23891d==0xa&&(_0x23891d=0x0);if(_0x23891d!=_0x411b77[0x9])return![];for(var _0x4cb3cb=0x0,_0x5d0cb4=0xb;_0x411b77[_0x625dc3(0x12f)]-0x1>_0x4cb3cb;_0x4cb3cb++,_0x5d0cb4--){_0x270dfd+=_0x411b77[_0x4cb3cb]*_0x5d0cb4;}return _0x270dfd=_0x270dfd*0xa%0xb,_0x270dfd==0xa&&(_0x270dfd=0x0),_0x270dfd!=_0x411b77[0xa]?![]:!![];}else{if(_0x2ad961['length']==0xe){var _0x17c9a9=_0x2ad961[_0x625dc3(0xdf)]();_0x17c9a9=_0x17c9a9[_0x625dc3(0xd8)](/\./g,''),_0x17c9a9=_0x17c9a9[_0x625dc3(0xd8)]('-',''),_0x17c9a9=_0x17c9a9['replace']('/',''),_0x17c9a9=_0x17c9a9[_0x625dc3(0xdc)]('');var _0x23891d=0x0,_0x270dfd=0x0,_0x1536c9=![];for(var _0x4cb3cb=0x1;_0x17c9a9[_0x625dc3(0x12f)]>_0x4cb3cb;_0x4cb3cb++){_0x17c9a9[_0x4cb3cb-0x1]!=_0x17c9a9[_0x4cb3cb]&&(_0x1536c9=!![]);}if(_0x1536c9==![])return![];for(var _0x4cb3cb=0x0,_0x4a1111=0x5,_0x29e6df=0xd;_0x17c9a9['length']-0x2>_0x4cb3cb;_0x4cb3cb++,_0x4a1111--,_0x29e6df--){_0x4a1111>=0x2?_0x23891d+=_0x17c9a9[_0x4cb3cb]*_0x4a1111:_0x23891d+=_0x17c9a9[_0x4cb3cb]*_0x29e6df;}_0x23891d=_0x23891d%0xb;_0x23891d<0x2?_0x23891d=0x0:_0x23891d=0xb-_0x23891d;if(_0x23891d!=_0x17c9a9[0xc])return![];for(var _0x4cb3cb=0x0,_0x4a1111=0x6,_0x29e6df=0xe;_0x17c9a9[_0x625dc3(0x12f)]-0x1>_0x4cb3cb;_0x4cb3cb++,_0x4a1111--,_0x29e6df--){_0x4a1111>=0x2?_0x270dfd+=_0x17c9a9[_0x4cb3cb]*_0x4a1111:_0x270dfd+=_0x17c9a9[_0x4cb3cb]*_0x29e6df;}return _0x270dfd=_0x270dfd%0xb,_0x270dfd<0x2?_0x270dfd=0x0:_0x270dfd=0xb-_0x270dfd,_0x270dfd!=_0x17c9a9[0xd]?![]:!![];}else return![];}}function timeout(_0x38cfd4){return new Promise(_0x356078=>setTimeout(_0x356078,_0x38cfd4));}async function sleep(_0x40c6ed){await timeout(_0x40c6ed);}function firstDayOfMonth(_0x5787f9){const _0x2b637e=a552_0x5c42c8,_0xac64a7=new Date(),_0x312a2b=new Date(_0xac64a7[_0x2b637e(0x10e)](),_0xac64a7[_0x2b637e(0x11d)]()-_0x5787f9,0x1);return _0x312a2b;};function lastDayOfMonth(_0x7adf05){const _0x6e98cb=a552_0x5c42c8,_0x572a47=new Date(),_0x52de3d=new Date(_0x572a47[_0x6e98cb(0x10e)](),_0x572a47[_0x6e98cb(0x11d)]()+_0x7adf05,0x0);return _0x52de3d;}function a552_0x5b52(_0x493a75,_0x54311b){const _0x430ef1=a552_0x430e();return a552_0x5b52=function(_0x5b5264,_0x431731){_0x5b5264=_0x5b5264-0xd6;let _0x17c2cb=_0x430ef1[_0x5b5264];return _0x17c2cb;},a552_0x5b52(_0x493a75,_0x54311b);};function dataAtualFormatada(_0x17eb27){const _0x333b64=a552_0x5c42c8;var _0x3c1ac9=_0x17eb27[_0x333b64(0x12a)]()[_0x333b64(0x132)](),_0x91f27=_0x3c1ac9[_0x333b64(0x12f)]==0x1?'0'+_0x3c1ac9:_0x3c1ac9,_0x3e0558=(_0x17eb27[_0x333b64(0x11d)]()+0x1)[_0x333b64(0x132)](),_0x104ae1=_0x3e0558[_0x333b64(0x12f)]==0x1?'0'+_0x3e0558:_0x3e0558,_0x2c2383=_0x17eb27['getFullYear']();return _0x91f27+'/'+_0x104ae1+'/'+_0x2c2383;}function makeid(_0x2e6b47){const _0x4b92f9=a552_0x5c42c8;var _0x2e311c='',_0x56823b=_0x4b92f9(0x11e),_0xdcc9dc=_0x56823b[_0x4b92f9(0x12f)];for(var _0x8dc920=0x0;_0x8dc920<_0x2e6b47;_0x8dc920++){_0x2e311c+=_0x56823b[_0x4b92f9(0xe4)](Math[_0x4b92f9(0xf1)](Math[_0x4b92f9(0xf9)]()*_0xdcc9dc));}return _0x2e311c;}function replaceAll(_0xe83214,_0x16244f,_0x12a8e8){return _0xe83214['replace'](new RegExp(_0x16244f,'g'),_0x12a8e8);}function a552_0x430e(){const _0x3f59e9=['charAt','listResponseMessage','selectedRowId','file','closed','queueId','axios','../../models/CompaniesSettings','key','substring','ticketId','findOne','../ChatBotServices/ShowChatBotServices','floor','queueType','../DialogChatBotsServices/DeleteDialogChatBotsServices','open','test','path','options','finalizar','random','forEach','readFileSync','g.us','optQueueId','87650IQbWKN','greetingMessage','102yQbxgA','sayChatbot','defineProperty','log','chatbots','9443iWEiov','ticketData','pending','number','default','integration','18MBcXrT','isGroup','\x0a*#*\x20Voltar\x20para\x20o\x20menu\x20principal','getFullYear','chatbotId','buttonsResponseMessage','3454CVKhJf','resolve','__esModule','1697780imkTkT','../DialogChatBotsServices/CreateDialogChatBotsServices','93664aFREen','companyId','selectedButtonId','../../services/FileServices/ShowService','optUserId','../WhatsappService/ShowWhatsAppService','attendent','getMonth','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','78EUaaRh','../QueueService/ShowQueueService','public/temp/','message','7bit','../TicketServices/UpdateTicketService','isAgent','3483625QSjZlu','update','fileList','image/jpeg','getDate','optFileId','877842VllrWe','getBodyMessage','../../helpers/Mustache','length','toLocaleLowerCase','list','toString','sendMessage','entries','chatBotType','deleteAndCreateDialogStage','850232JcwZNs','*\x20-\x20','push','name','company','Menu','verifyMessage','replace','medias','button','localeCompare','split','./wbotMessageListener','s.whatsapp.net','trim','singleSelectReply','fromMe','mediaType','Escolha\x20uma\x20opção'];a552_0x430e=function(){return _0x3f59e9;};return a552_0x430e();}function formatDate(_0x147ab6){const _0x4ee6b5=a552_0x5c42c8;return _0x147ab6['substring'](0x8,0xa)+'/'+_0x147ab6['substring'](0x5,0x7)+'/'+_0x147ab6[_0x4ee6b5(0xed)](0x0,0x4);}function sortfunction(_0x2cddd8,_0x4cfea8){const _0xefea0b=a552_0x5c42c8;return _0x2cddd8['dueDate'][_0xefea0b(0xdb)](_0x4cfea8['dueDate']);}async function sendMsgAndCloseTicket(_0x52ef2d,_0x16d3f2,_0x29ad8c){const _0x12b84d='Estamos\x20finalizando\x20esta\x20conversa!\x20Caso\x20precise\x20entre\x20em\x20contato\x20conosco!';await sleep(0x7d0),await sendMessage(_0x52ef2d,_0x16d3f2,_0x29ad8c,_0x12b84d);const _0x231c55={'ticketData':{'status':'closed','userId':0x1,'sendFarewellMessage':![],'amountUsedBotQueues':0x0},'ticketId':_0x29ad8c['id'],'companyId':_0x29ad8c['companyId'],'ratingId':undefined};await sleep(0x7d0),await(0x0,UpdateTicketService_1['default'])(_0x231c55);}const sayChatbot=async(_0x234855,_0xcf165b,_0x54f160,_0x47f456,_0x46b12e)=>{const _0x387775=a552_0x5c42c8,_0x458edd=_0x46b12e?.[_0x387775(0x122)]?.[_0x387775(0x110)]?.[_0x387775(0x118)]||_0x46b12e?.['message']?.[_0x387775(0xe5)]?.['singleSelectReply'][_0x387775(0xe6)]||(0x0,wbotMessageListener_1[_0x387775(0x12d)])(_0x46b12e);if(!_0x234855&&_0x458edd&&_0x46b12e[_0x387775(0xec)][_0x387775(0xe1)])return;const _0x4cb873=await(0x0,ShowDialogChatBotsServices_1[_0x387775(0x109)])(_0x47f456['id']),_0x2add37=await(0x0,ShowQueueService_1[_0x387775(0x109)])(_0x234855,_0x54f160[_0x387775(0x117)]);let _0x6356c8;if(_0x458edd[_0x387775(0x130)]()===_0x387775(0xf8)){const _0x3ddbae={'ticketData':{'status':_0x387775(0xe8),'sendFarewellMessage':![],'amountUsedBotQueues':0x0},'ticketId':_0x54f160['id'],'companyId':_0x54f160[_0x387775(0x117)]};await(0x0,UpdateTicketService_1[_0x387775(0x109)])(_0x3ddbae);}if(_0x458edd==='#'){const _0x543547=await backToMainMenu(_0xcf165b,_0x47f456,_0x54f160);return _0x543547;}if(!_0x4cb873){const _0x5f5df1=await(0x0,ShowQueueService_1[_0x387775(0x109)])(_0x234855,_0x54f160['companyId']),_0x39f0c0=_0x46b12e?.[_0x387775(0x122)]?.[_0x387775(0x110)]?.[_0x387775(0x118)]||_0x46b12e?.[_0x387775(0x122)]?.[_0x387775(0xe5)]?.[_0x387775(0xe0)][_0x387775(0xe6)]||(0x0,wbotMessageListener_1[_0x387775(0x12d)])(_0x46b12e),_0x5c151f=_0x5f5df1[_0x387775(0x104)][+_0x39f0c0-0x1];if(_0x5c151f){console[_0x387775(0x103)]('djsdlaskjasa');if(_0x5c151f[_0x387775(0xf2)]===_0x387775(0x10a))try{const _0x4b84c8={'ticketData':{'integrationId':_0x5c151f['optIntegrationId'],'useIntegration':!![],'status':_0x387775(0x107)},'ticketId':_0x54f160['id']};await(0x0,UpdateTicketService_1['default'])({'ticketData':{..._0x4b84c8[_0x387775(0x106)]},'ticketId':_0x4b84c8[_0x387775(0xee)],'companyId':_0x54f160[_0x387775(0x117)]});}catch(_0x52fff4){await(0x0,exports[_0x387775(0x136)])(_0x47f456,_0x5c151f['id'],_0x54f160);}if(_0x5c151f[_0x387775(0xf2)]==='queue')try{const _0xdf9c0f={'ticketData':{'queueId':_0x5c151f[_0x387775(0xfd)],'status':_0x387775(0x107)},'ticketId':_0x54f160['id']};await(0x0,UpdateTicketService_1['default'])({'ticketData':{..._0xdf9c0f[_0x387775(0x106)]},'ticketId':_0xdf9c0f[_0x387775(0xee)],'companyId':_0x54f160[_0x387775(0x117)]});}catch(_0x1c3474){await(0x0,exports[_0x387775(0x136)])(_0x47f456,_0x5c151f['id'],_0x54f160);}if(_0x5c151f[_0x387775(0xf2)]===_0x387775(0x11c))try{const _0x55ce63={'ticketData':{'queueId':_0x5c151f[_0x387775(0xfd)],'userId':_0x5c151f[_0x387775(0x11a)],'status':'pending'},'ticketId':_0x54f160['id']};await(0x0,UpdateTicketService_1[_0x387775(0x109)])({'ticketData':{..._0x55ce63[_0x387775(0x106)]},'ticketId':_0x55ce63[_0x387775(0xee)],'companyId':_0x54f160['companyId']});}catch(_0x183ef3){await(0x0,exports[_0x387775(0x136)])(_0x47f456,_0x5c151f['id'],_0x54f160);}await(0x0,exports[_0x387775(0x136)])(_0x47f456,_0x5c151f['id'],_0x54f160);let _0x3b1cc3;_0x5c151f?.['greetingMessage']&&(_0x3b1cc3=await sendDialog(_0x5c151f,_0xcf165b,_0x47f456,_0x54f160));if(_0x5c151f[_0x387775(0xf2)]===_0x387775(0xe7))try{const _0x35b55f=path_1[_0x387775(0x109)][_0x387775(0x112)](__dirname,'..','..','..','public'),_0x190f66=await(0x0,ShowService_1[_0x387775(0x109)])(_0x5c151f[_0x387775(0x12b)],_0x54f160['companyId']),_0x3de24d=path_1['default']['resolve'](_0x35b55f,_0x387775(0x13b)+_0x54f160[_0x387775(0x117)],_0x387775(0x128),String(_0x190f66['id']));for(const [_0x4427d8,_0x33e5d7]of _0x190f66[_0x387775(0xf7)][_0x387775(0x134)]()){const _0x118cb4={'fieldname':_0x387775(0xd9),'originalname':_0x33e5d7[_0x387775(0xf6)],'encoding':_0x387775(0x123),'mimetype':_0x33e5d7[_0x387775(0xe2)],'filename':_0x33e5d7[_0x387775(0xf6)],'path':path_1['default'][_0x387775(0x112)](_0x3de24d,_0x33e5d7[_0x387775(0xf6)])};await(0x0,SendWhatsAppMedia_1[_0x387775(0x109)])({'media':_0x118cb4,'ticket':_0x54f160,'body':_0x33e5d7[_0x387775(0x13a)],'isForwarded':![]});};}catch(_0x29ce3e){await(0x0,exports[_0x387775(0x136)])(_0x47f456,_0x5c151f['id'],_0x54f160);}return _0x3b1cc3;}}if(_0x4cb873){const _0x52a994=isNumeric(_0x458edd)?_0x458edd:0x1,_0x366f98=await(0x0,ShowChatBotServices_1[_0x387775(0x109)])(_0x4cb873[_0x387775(0x10f)]),_0x45f145=_0x366f98[_0x387775(0xf7)][+_0x52a994-0x1]?_0x366f98['options'][+_0x52a994-0x1]:_0x366f98[_0x387775(0xf7)][0x0];if(!_0x45f145['greetingMessage']){await(0x0,DeleteDialogChatBotsServices_1[_0x387775(0x109)])(_0x47f456['id']);return;}if(_0x45f145){if(_0x45f145[_0x387775(0x125)]){const _0xbb1563=await User_1[_0x387775(0x109)][_0x387775(0xef)]({'where':{'name':_0x45f145[_0x387775(0x13a)]}}),_0x560541={'ticketData':{'userId':_0xbb1563['id'],'status':_0x387775(0xf4)},'ticketId':_0x54f160['id']};await(0x0,UpdateTicketService_1[_0x387775(0x109)])({'ticketData':{..._0x560541['ticketData']},'ticketId':_0x560541['ticketId'],'companyId':_0x54f160[_0x387775(0x117)]});}await(0x0,exports[_0x387775(0x136)])(_0x47f456,_0x45f145['id'],_0x54f160);const _0x50d83d=await sendDialog(_0x45f145,_0xcf165b,_0x47f456,_0x54f160);return _0x50d83d;}}};exports[a552_0x5c42c8(0x101)]=sayChatbot;