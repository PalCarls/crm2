'use strict';const a479_0x52b402=a479_0x48cd;(function(_0x5d60eb,_0x52f5b7){const _0x285aa9=a479_0x48cd,_0x31d3e8=_0x5d60eb();while(!![]){try{const _0x15b0af=parseInt(_0x285aa9(0x88))/0x1*(-parseInt(_0x285aa9(0xcd))/0x2)+-parseInt(_0x285aa9(0xc2))/0x3+-parseInt(_0x285aa9(0xd1))/0x4+parseInt(_0x285aa9(0x7f))/0x5*(parseInt(_0x285aa9(0x95))/0x6)+-parseInt(_0x285aa9(0x8e))/0x7+parseInt(_0x285aa9(0x99))/0x8+-parseInt(_0x285aa9(0x9a))/0x9*(-parseInt(_0x285aa9(0x82))/0xa);if(_0x15b0af===_0x52f5b7)break;else _0x31d3e8['push'](_0x31d3e8['shift']());}catch(_0x3e8f10){_0x31d3e8['push'](_0x31d3e8['shift']());}}}(a479_0x30a3,0x9885c));function a479_0x48cd(_0x36a96d,_0x187fc3){const _0x30a3c7=a479_0x30a3();return a479_0x48cd=function(_0x48cdd6,_0x561192){_0x48cdd6=_0x48cdd6-0x75;let _0x3e25fc=_0x30a3c7[_0x48cdd6];return _0x3e25fc;},a479_0x48cd(_0x36a96d,_0x187fc3);}function a479_0x30a3(){const _0x13f887=['354rjnUDL','lgpdMessage','join','number','959532QIqFyr','facebookUserToken','ext','complationMessage','status','chatbots','getTime','ASC','forEach','profilePsid','nps','maxUseBotQueues','verifyMessageMedia','farewellMessage','isNil','queues','queueId','10SNBMTL','queue','get','80Vlrhpb','message','existsSync','writeFileSync','isNaN','reload','5533gnJxaM','base64',']\x20-\x20','../../models/Queue','toDate','pending','7063644aNAVTR','maxUseBotQueuesNPS','name','stringify','head','type','../ContactServices/CreateOrUpdateContactService','1145982lDTEui','verifyMessageFace','../TicketServices/FindOrCreateATicketTrakingService','../WbotServices/ChatbotListenerFacebook','3538720KuoskM','2497761JzLavF','sendText','handleMessage','amountUseBotQueuesNPS','sayChatbot','lgpdConsent','‎Opção\x20inválida,\x20tente\x20novamente.\x0a','\x0a[#]\x20Voltar\x20para\x20o\x20menu\x20principal','lgpdAcceptedAt','update','../../models/Message','lgpd','./graphAPI','destroy','chmodSync','facebookPageUserId','findOne','color','amountUsedBotQueues','lodash','url','enabled','attachments','lgpdSendMessageAt','is_echo','../TicketServices/UpdateTicketService','axios','text','enableLGPD','payload','‎Estou\x20ciente\x20sobre\x20o\x20tratamento\x20dos\x20meus\x20dados\x20pessoais.\x20\x0a\x0a*[1]*\x20Sim\x0a*[2]*\x20Não','../../models/Whatsapp','moment','__esModule','closed','../WbotServices/wbotMessageListener','recipient','companyId','../MessageServices/CreateMessageService','file-type','574554lDhCkY','default','defineProperty','handleRating','mid','ratingMessage','lgpdLink','length','first_name','greetingMessage','reply_to'];a479_0x30a3=function(){return _0x13f887;};return a479_0x30a3();}var __importDefault=this&&this['__importDefault']||function(_0x4a35bb){const _0x344aa3=a479_0x48cd;return _0x4a35bb&&_0x4a35bb[_0x344aa3(0xbb)]?_0x4a35bb:{'default':_0x4a35bb};};Object[a479_0x52b402(0xc4)](exports,a479_0x52b402(0xbb),{'value':!![]}),exports[a479_0x52b402(0x9c)]=exports['verifyMessageMedia']=exports['verifyMessageFace']=void 0x0;const fs_1=require('fs'),fs_2=__importDefault(require('fs')),axios_1=__importDefault(require(a479_0x52b402(0xb4))),moment_1=__importDefault(require(a479_0x52b402(0xba))),path_1=require('path'),CreateOrUpdateContactService_1=__importDefault(require(a479_0x52b402(0x94))),CreateMessageService_1=__importDefault(require(a479_0x52b402(0xc0))),FindOrCreateTicketService_1=__importDefault(require('../TicketServices/FindOrCreateTicketService')),graphAPI_1=require(a479_0x52b402(0xa6)),Whatsapp_1=__importDefault(require(a479_0x52b402(0xb9))),UpdateTicketService_1=__importDefault(require(a479_0x52b402(0xb3))),ShowWhatsAppService_1=__importDefault(require('../WhatsappService/ShowWhatsAppService')),Mustache_1=__importDefault(require('../../helpers/Mustache')),Queue_1=__importDefault(require(a479_0x52b402(0x8b))),Chatbot_1=__importDefault(require('../../models/Chatbot')),Message_1=__importDefault(require(a479_0x52b402(0xa4))),ChatbotListenerFacebook_1=require(a479_0x52b402(0x98)),lodash_1=require(a479_0x52b402(0xad)),FindOrCreateATicketTrakingService_1=__importDefault(require(a479_0x52b402(0x97))),wbotMessageListener_1=require(a479_0x52b402(0xbd)),CompaniesSettings_1=__importDefault(require('../../models/CompaniesSettings')),sendFacebookMessage_1=__importDefault(require('./sendFacebookMessage')),verifyContact=async(_0x2e3dd5,_0x5c9e4e,_0x5ab042)=>{const _0x29f574=a479_0x52b402;if(!_0x2e3dd5)return null;const _0x1bd5a1={'name':_0x2e3dd5?.[_0x29f574(0x90)]||_0x2e3dd5?.[_0x29f574(0xca)]+'\x20'+_0x2e3dd5?.['last_name'],'number':_0x2e3dd5['id'],'profilePicUrl':'','isGroup':![],'companyId':_0x5ab042,'channel':_0x5c9e4e},_0x2d70e7=(0x0,CreateOrUpdateContactService_1['default'])(_0x1bd5a1);return _0x2d70e7;},verifyMessageFace=async(_0x7a1673,_0x393b94,_0x355190,_0xa274fa)=>{const _0x26fcf8=a479_0x52b402,_0x5dcb05=await verifyQuotedMessage(_0x7a1673),_0x9a68fd={'wid':_0x7a1673[_0x26fcf8(0xc6)]||_0x7a1673['message_id'],'ticketId':_0x355190['id'],'contactId':_0x7a1673['is_echo']?undefined:_0xa274fa['id'],'body':_0x7a1673[_0x26fcf8(0xb5)]||_0x393b94,'fromMe':_0x7a1673[_0x26fcf8(0xb2)]?!![]:![],'read':_0x7a1673?.[_0x26fcf8(0xb2)],'quotedMsgId':_0x5dcb05?.['id'],'ack':0x3,'dataJson':JSON['stringify'](_0x7a1673)};await(0x0,CreateMessageService_1[_0x26fcf8(0xc3)])({'messageData':_0x9a68fd,'companyId':_0x355190[_0x26fcf8(0xbf)]}),await _0x355190['update']({'lastMessage':_0x7a1673['text']});};exports['verifyMessageFace']=verifyMessageFace;const verifyMessageMedia=async(_0xf584a5,_0x15d8e1,_0x142e94)=>{const _0x2af0a9=a479_0x52b402,{data:_0x4d4b31}=await axios_1[_0x2af0a9(0xc3)][_0x2af0a9(0x81)](_0xf584a5[_0x2af0a9(0xb0)][0x0][_0x2af0a9(0xb7)][_0x2af0a9(0xae)],{'responseType':'arraybuffer'}),{fileTypeFromBuffer:_0x3bef0d}=await eval('const _0x214581 = _0x2af0a9;import(_0x214581(193));'),_0x37b076=await _0x3bef0d(_0x4d4b31),_0x25978e=new Date()[_0x2af0a9(0xd7)]()+'.'+_0x37b076[_0x2af0a9(0xd3)],_0x37f676='public/company'+_0x15d8e1['companyId'];!fs_2[_0x2af0a9(0xc3)][_0x2af0a9(0x84)](_0x37f676)&&(fs_2[_0x2af0a9(0xc3)]['mkdirSync'](_0x37f676),fs_2['default'][_0x2af0a9(0xa8)](_0x37f676,0x1ff));(0x0,fs_1[_0x2af0a9(0x85)])((0x0,path_1[_0x2af0a9(0xcf)])(__dirname,'..','..','..',_0x37f676,_0x25978e),_0x4d4b31,_0x2af0a9(0x89));const _0x344d85={'wid':_0xf584a5[_0x2af0a9(0xc6)],'ticketId':_0x15d8e1['id'],'contactId':_0xf584a5[_0x2af0a9(0xb2)]?undefined:_0x142e94['id'],'body':_0xf584a5[_0x2af0a9(0xb5)]||_0x25978e,'fromMe':_0xf584a5[_0x2af0a9(0xb2)]?!![]:![],'mediaType':_0xf584a5[_0x2af0a9(0xb0)][0x0][_0x2af0a9(0x93)],'mediaUrl':_0x25978e,'read':_0xf584a5[_0x2af0a9(0xb2)],'quotedMsgId':null,'ack':0x3,'dataJson':JSON[_0x2af0a9(0x91)](_0xf584a5)};await(0x0,CreateMessageService_1['default'])({'messageData':_0x344d85,'companyId':_0x15d8e1[_0x2af0a9(0xbf)]}),await _0x15d8e1['update']({'lastMessage':_0xf584a5['text']});};exports['verifyMessageMedia']=verifyMessageMedia;const verifyQuotedMessage=async _0xb02208=>{const _0x4b1ef3=a479_0x52b402;if(!_0xb02208)return null;const _0x43acf9=_0xb02208?.[_0x4b1ef3(0xcc)]?.[_0x4b1ef3(0xc6)];if(!_0x43acf9)return null;const _0x39317c=await Message_1[_0x4b1ef3(0xc3)][_0x4b1ef3(0xaa)]({'where':{'id':_0x43acf9}});if(!_0x39317c)return null;return _0x39317c;},handleMessage=async(_0x38c747,_0x646a3b,_0x2411ac,_0x1a3dad)=>{const _0x1e4ad5=a479_0x52b402;try{if(_0x646a3b[_0x1e4ad5(0x83)]){let _0x8e6bce,_0x4a7545=null;const _0x8b4727=_0x646a3b['sender']['id'],_0x2ca314=_0x646a3b[_0x1e4ad5(0xbe)]['id'],{message:_0x211b8c}=_0x646a3b,_0x892379=_0x211b8c[_0x1e4ad5(0xb2)];let _0x111893=_0x211b8c[_0x1e4ad5(0xb5)];if(_0x892379){if(/\u200e/['test'](_0x211b8c[_0x1e4ad5(0xb5)]))return;_0x8e6bce=await(0x0,graphAPI_1[_0x1e4ad5(0x77)])(_0x2ca314,_0x38c747[_0x1e4ad5(0xd2)]);}else _0x8e6bce=await(0x0,graphAPI_1[_0x1e4ad5(0x77)])(_0x8b4727,_0x38c747['facebookUserToken']);const _0x3bbc1a=await verifyContact(_0x8e6bce,_0x2411ac,_0x1a3dad),_0x5d5749=_0x892379?0x0:0x1,_0x143690=await Whatsapp_1[_0x1e4ad5(0xc3)][_0x1e4ad5(0xaa)]({'where':{'facebookPageUserId':_0x38c747[_0x1e4ad5(0xa9)]},'include':[{'model':Queue_1[_0x1e4ad5(0xc3)],'as':_0x1e4ad5(0x7d),'attributes':['id','name',_0x1e4ad5(0xab),'greetingMessage'],'include':[{'model':Chatbot_1['default'],'as':_0x1e4ad5(0xd6),'attributes':['id',_0x1e4ad5(0x90),_0x1e4ad5(0xcb)]}]}],'order':[[_0x1e4ad5(0x7d),'id',_0x1e4ad5(0x75)],[_0x1e4ad5(0x7d),_0x1e4ad5(0xd6),'id',_0x1e4ad5(0x75)]]}),_0x5767ac=await CompaniesSettings_1['default'][_0x1e4ad5(0xaa)]({'where':{'companyId':_0x1a3dad}}),{ticket:_0x5a5812}=await(0x0,FindOrCreateTicketService_1[_0x1e4ad5(0xc3)])(_0x3bbc1a,_0x143690,_0x5d5749,_0x1a3dad,0x0,0x0,null,_0x2411ac,null,![],_0x5767ac);_0x4a7545=_0x5a5812;const _0xdaea20=await(0x0,FindOrCreateATicketTrakingService_1[_0x1e4ad5(0xc3)])({'ticketId':_0x4a7545['id'],'companyId':_0x1a3dad,'whatsappId':_0x143690?.['id']});if(_0x143690[_0x1e4ad5(0x7b)]&&(0x0,Mustache_1[_0x1e4ad5(0xc3)])(_0x143690[_0x1e4ad5(0x7b)],_0x4a7545)===_0x211b8c[_0x1e4ad5(0xb5)])return;await _0x4a7545[_0x1e4ad5(0xa3)]({'lastMessage':_0x211b8c[_0x1e4ad5(0xb5)]});try{if(!_0x892379){if(_0x4a7545[_0x1e4ad5(0xd5)]===_0x1e4ad5(0x78)&&_0xdaea20!==null&&(0x0,wbotMessageListener_1['verifyRating'])(_0xdaea20)){if(!isNaN(parseFloat(_0x111893))){(0x0,wbotMessageListener_1[_0x1e4ad5(0xc5)])(parseFloat(_0x111893),_0x4a7545,_0xdaea20),await _0xdaea20['update']({'ratingAt':(0x0,moment_1[_0x1e4ad5(0xc3)])()[_0x1e4ad5(0x8c)](),'finishedAt':(0x0,moment_1[_0x1e4ad5(0xc3)])()[_0x1e4ad5(0x8c)](),'rated':!![]});return;}else{if(_0x4a7545[_0x1e4ad5(0x9d)]<_0x143690[_0x1e4ad5(0x8f)]){let _0x21dc2b=_0x1e4ad5(0xa0);const _0x49b190=await(0x0,graphAPI_1[_0x1e4ad5(0x9b)])(_0x3bbc1a[_0x1e4ad5(0xd0)],_0x21dc2b,_0x143690[_0x1e4ad5(0xd2)]);await(0x0,exports[_0x1e4ad5(0x96)])(_0x49b190,_0x21dc2b,_0x4a7545,_0x3bbc1a);let _0x51ad52='‎'+_0x143690[_0x1e4ad5(0xc7)]+'\x0a';const _0x146ff7=await(0x0,graphAPI_1['sendText'])(_0x3bbc1a[_0x1e4ad5(0xd0)],_0x51ad52,_0x143690[_0x1e4ad5(0xd2)]);await(0x0,exports[_0x1e4ad5(0x96)])(_0x49b190,_0x51ad52,_0x4a7545,_0x3bbc1a),await _0x4a7545[_0x1e4ad5(0xa3)]({'amountUseBotQueuesNPS':_0x4a7545[_0x1e4ad5(0x9d)]+0x1});}return;}}const _0x135230=_0x5767ac[_0x1e4ad5(0xb6)]===_0x1e4ad5(0xaf);if(_0x135230&&_0x4a7545[_0x1e4ad5(0xd5)]===_0x1e4ad5(0xa5)){if((0x0,lodash_1['isNil'])(_0x4a7545[_0x1e4ad5(0xa2)])&&!(0x0,lodash_1['isNil'])(_0x4a7545[_0x1e4ad5(0xb1)])){let _0x2e3c19=null;!isNaN(parseFloat(_0x111893))&&(_0x2e3c19=parseFloat(_0x111893));if(!Number[_0x1e4ad5(0x86)](_0x2e3c19)&&Number['isInteger'](_0x2e3c19)&&!(0x0,lodash_1['isNull'])(_0x2e3c19)&&_0x2e3c19>0x0){if(_0x2e3c19===0x1)await _0x3bbc1a[_0x1e4ad5(0xa3)]({'lgpdAcceptedAt':(0x0,moment_1['default'])()[_0x1e4ad5(0x8c)]()}),await _0x4a7545[_0x1e4ad5(0xa3)]({'lgpdAcceptedAt':(0x0,moment_1['default'])()['toDate'](),'amountUsedBotQueues':0x0});else{if(_0x2e3c19===0x2){if(_0x143690['complationMessage']!==''&&_0x143690[_0x1e4ad5(0xd4)]!==undefined){const _0x2639ca=await(0x0,graphAPI_1['sendText'])(_0x3bbc1a[_0x1e4ad5(0xd0)],'‎'+_0x143690[_0x1e4ad5(0xd4)],_0x143690[_0x1e4ad5(0xd2)]);(0x0,exports[_0x1e4ad5(0x96)])(_0x2639ca,'‎'+_0x143690[_0x1e4ad5(0xd4)],_0x4a7545,_0x3bbc1a);}await _0x4a7545[_0x1e4ad5(0xa3)]({'status':_0x1e4ad5(0xbc),'amountUsedBotQueues':0x0}),await _0xdaea20[_0x1e4ad5(0xa7)];return;}else _0x4a7545[_0x1e4ad5(0xac)]<_0x143690[_0x1e4ad5(0x79)]&&await _0x4a7545['update']({'amountUsedBotQueues':_0x4a7545['amountUsedBotQueues']+0x1,'lgpdSendMessageAt':null});}}else _0x4a7545[_0x1e4ad5(0xac)]<_0x143690[_0x1e4ad5(0x79)]&&await _0x4a7545[_0x1e4ad5(0xa3)]({'amountUsedBotQueues':_0x4a7545['amountUsedBotQueues']+0x1,'lgpdSendMessageAt':null});}if((_0x3bbc1a[_0x1e4ad5(0xa2)]===null||_0x5767ac?.[_0x1e4ad5(0x9f)]===_0x1e4ad5(0xaf))&&!_0x3bbc1a['isGroup']&&(0x0,lodash_1[_0x1e4ad5(0x7c)])(_0x4a7545['lgpdSendMessageAt'])&&_0x4a7545['amountUsedBotQueues']<=_0x143690[_0x1e4ad5(0x79)]&&!(0x0,lodash_1[_0x1e4ad5(0x7c)])(_0x5767ac?.[_0x1e4ad5(0xce)])){_0x211b8c[_0x1e4ad5(0xb0)]?await(0x0,exports[_0x1e4ad5(0x7a)])(_0x211b8c,_0x4a7545,_0x3bbc1a):await(0x0,exports[_0x1e4ad5(0x96)])(_0x211b8c,_0x211b8c[_0x1e4ad5(0xb5)],_0x4a7545,_0x3bbc1a);if(!(0x0,lodash_1[_0x1e4ad5(0x7c)])(_0x5767ac?.[_0x1e4ad5(0xce)])&&_0x5767ac['lgpdMessage']!==''){const _0x2fc0e2=(0x0,Mustache_1[_0x1e4ad5(0xc3)])('‎'+_0x5767ac[_0x1e4ad5(0xce)],_0x4a7545),_0x3bb624=await(0x0,graphAPI_1[_0x1e4ad5(0x9b)])(_0x3bbc1a[_0x1e4ad5(0xd0)],_0x2fc0e2,_0x143690['facebookUserToken']);(0x0,exports[_0x1e4ad5(0x96)])(_0x3bb624,_0x2fc0e2,_0x4a7545,_0x3bbc1a);}if(!(0x0,lodash_1[_0x1e4ad5(0x7c)])(_0x5767ac?.['lgpdLink'])&&_0x5767ac?.[_0x1e4ad5(0xc8)]!==''){const _0x38f609=(0x0,Mustache_1['default'])('‎'+_0x5767ac['lgpdLink'],_0x4a7545),_0x4025e6=await(0x0,graphAPI_1[_0x1e4ad5(0x9b)])(_0x3bbc1a[_0x1e4ad5(0xd0)],_0x38f609,_0x143690[_0x1e4ad5(0xd2)]);(0x0,exports[_0x1e4ad5(0x96)])(_0x4025e6,_0x38f609,_0x4a7545,_0x3bbc1a);};const _0x2b254c=(0x0,Mustache_1[_0x1e4ad5(0xc3)])(_0x1e4ad5(0xb8),_0x4a7545),_0x15709d=await(0x0,graphAPI_1[_0x1e4ad5(0x9b)])(_0x3bbc1a[_0x1e4ad5(0xd0)],_0x2b254c,_0x143690[_0x1e4ad5(0xd2)]);(0x0,exports[_0x1e4ad5(0x96)])(_0x15709d,_0x2b254c,_0x4a7545,_0x3bbc1a),await _0x4a7545[_0x1e4ad5(0xa3)]({'lgpdSendMessageAt':(0x0,moment_1['default'])()[_0x1e4ad5(0x8c)](),'amountUsedBotQueues':_0x4a7545[_0x1e4ad5(0xac)]+0x1}),await _0x4a7545[_0x1e4ad5(0x87)]();return;};if(!(0x0,lodash_1[_0x1e4ad5(0x7c)])(_0x4a7545[_0x1e4ad5(0xb1)])&&(0x0,lodash_1[_0x1e4ad5(0x7c)])(_0x4a7545[_0x1e4ad5(0xa2)]))return;}}}catch(_0x421887){throw new Error(_0x421887);console['log'](_0x421887);}_0x211b8c['attachments']?await(0x0,exports['verifyMessageMedia'])(_0x211b8c,_0x4a7545,_0x3bbc1a):await(0x0,exports[_0x1e4ad5(0x96)])(_0x211b8c,_0x211b8c['text'],_0x4a7545,_0x3bbc1a),!_0x4a7545['queue']&&!_0x892379&&!_0x4a7545['userId']&&_0x143690[_0x1e4ad5(0x7d)]['length']>=0x1&&await verifyQueue(_0x143690,_0x211b8c,_0x4a7545,_0x3bbc1a),_0x4a7545[_0x1e4ad5(0x80)]&&_0x4a7545[_0x1e4ad5(0x7e)]&&(!_0x4a7545['user']&&await(0x0,ChatbotListenerFacebook_1[_0x1e4ad5(0x9e)])(_0x4a7545[_0x1e4ad5(0x7e)],_0x143690,_0x4a7545,_0x3bbc1a,_0x211b8c));}return;}catch(_0x7e94b5){throw new Error(_0x7e94b5);}};exports[a479_0x52b402(0x9c)]=handleMessage;const verifyQueue=async(_0x4fadf4,_0x20a17f,_0x11c88f,_0x4a9596)=>{const _0x3d37f1=a479_0x52b402,{queues:_0x48b618,greetingMessage:_0x170070}=await(0x0,ShowWhatsAppService_1[_0x3d37f1(0xc3)])(_0x4fadf4['id'],_0x11c88f[_0x3d37f1(0xbf)]);if(_0x48b618['length']===0x1){const _0x474233=(0x0,lodash_1[_0x3d37f1(0x92)])(_0x48b618);let _0x35d7a0=![];_0x474233?.['chatbots']&&(_0x35d7a0=_0x474233?.[_0x3d37f1(0xd6)]?.['length']>0x0);await(0x0,UpdateTicketService_1[_0x3d37f1(0xc3)])({'ticketData':{'queueId':_0x48b618[0x0]['id'],'isBot':_0x35d7a0},'ticketId':_0x11c88f['id'],'companyId':_0x11c88f['companyId']});return;}let _0x171d2e='';if(_0x11c88f['status']!=='lgpd')_0x171d2e=_0x20a17f[_0x3d37f1(0xb5)];else{if(!(0x0,lodash_1[_0x3d37f1(0x7c)])(_0x11c88f[_0x3d37f1(0xa2)]))await _0x11c88f[_0x3d37f1(0xa3)]({'status':_0x3d37f1(0x8d)});await _0x11c88f[_0x3d37f1(0x87)]();}const _0x26c5c1=_0x48b618[+_0x171d2e-0x1];if(_0x26c5c1){await(0x0,UpdateTicketService_1[_0x3d37f1(0xc3)])({'ticketData':{'queueId':_0x26c5c1['id']},'ticketId':_0x11c88f['id'],'companyId':_0x11c88f[_0x3d37f1(0xbf)]});if(_0x26c5c1['chatbots'][_0x3d37f1(0xc9)]>0x0){let _0x4b3bac='';_0x26c5c1['chatbots'][_0x3d37f1(0x76)]((_0x127860,_0x15164f)=>{const _0x4fdbc0=_0x3d37f1;_0x4b3bac+='['+(_0x15164f+0x1)+_0x4fdbc0(0x8a)+_0x127860[_0x4fdbc0(0x90)]+'\x0a';});const _0x48eae5=(0x0,Mustache_1[_0x3d37f1(0xc3)])(_0x26c5c1[_0x3d37f1(0xcb)]+'\x0a\x0a'+_0x4b3bac+_0x3d37f1(0xa1),_0x11c88f),_0x4287e7=await(0x0,sendFacebookMessage_1[_0x3d37f1(0xc3)])({'ticket':_0x11c88f,'body':_0x48eae5});}if(!_0x26c5c1[_0x3d37f1(0xd6)][_0x3d37f1(0xc9)]){const _0x1c760d=(0x0,Mustache_1[_0x3d37f1(0xc3)])(''+_0x26c5c1[_0x3d37f1(0xcb)],_0x11c88f),_0x1600bb=await(0x0,sendFacebookMessage_1['default'])({'ticket':_0x11c88f,'body':_0x1c760d});}}else{let _0x17b6cb='';_0x48b618[_0x3d37f1(0x76)]((_0x10164c,_0x587e1e)=>{const _0x50f179=_0x3d37f1;_0x17b6cb+='['+(_0x587e1e+0x1)+_0x50f179(0x8a)+_0x10164c[_0x50f179(0x90)]+'\x0a';});const _0x25ecf2=(0x0,Mustache_1[_0x3d37f1(0xc3)])(_0x170070+'\x0a\x0a'+_0x17b6cb,_0x11c88f),_0x47ee1e=await(0x0,sendFacebookMessage_1['default'])({'ticket':_0x11c88f,'body':_0x25ecf2});}};