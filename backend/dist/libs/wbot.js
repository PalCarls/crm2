'use strict';const a258_0x5cdbab=a258_0x1bc7;(function(_0x25bc38,_0x163e6b){const _0x28d5c1=a258_0x1bc7,_0xfc0959=_0x25bc38();while(!![]){try{const _0x8ed794=parseInt(_0x28d5c1(0x1c8))/0x1*(-parseInt(_0x28d5c1(0x1e9))/0x2)+parseInt(_0x28d5c1(0x1d4))/0x3+-parseInt(_0x28d5c1(0x1b2))/0x4*(parseInt(_0x28d5c1(0x1fe))/0x5)+parseInt(_0x28d5c1(0x1fb))/0x6+parseInt(_0x28d5c1(0x1b3))/0x7+parseInt(_0x28d5c1(0x185))/0x8+-parseInt(_0x28d5c1(0x1e1))/0x9*(parseInt(_0x28d5c1(0x1dc))/0xa);if(_0x8ed794===_0x163e6b)break;else _0xfc0959['push'](_0xfc0959['shift']());}catch(_0x429d43){_0xfc0959['push'](_0xfc0959['shift']());}}}(a258_0x4188,0x5d1c2));function a258_0x1bc7(_0x39b438,_0x583a37){const _0x4188f4=a258_0x4188();return a258_0x1bc7=function(_0x1bc758,_0x5a9504){_0x1bc758=_0x1bc758-0x17b;let _0x4e7b29=_0x4188f4[_0x1bc758];return _0x4e7b29;},a258_0x1bc7(_0x39b438,_0x583a37);}var __createBinding=this&&this[a258_0x5cdbab(0x1c9)]||(Object['create']?function(_0x105de6,_0x192981,_0x2246f5,_0x1e451f){const _0x4264a7=a258_0x5cdbab;if(_0x1e451f===undefined)_0x1e451f=_0x2246f5;var _0x733fb9=Object['getOwnPropertyDescriptor'](_0x192981,_0x2246f5);(!_0x733fb9||('get'in _0x733fb9?!_0x192981[_0x4264a7(0x198)]:_0x733fb9[_0x4264a7(0x1dd)]||_0x733fb9['configurable']))&&(_0x733fb9={'enumerable':!![],'get':function(){return _0x192981[_0x2246f5];}}),Object[_0x4264a7(0x18d)](_0x105de6,_0x1e451f,_0x733fb9);}:function(_0x52f4d5,_0xbb968b,_0x130836,_0x4c3936){if(_0x4c3936===undefined)_0x4c3936=_0x130836;_0x52f4d5[_0x4c3936]=_0xbb968b[_0x130836];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object['create']?function(_0x2e4b3b,_0x52c1ca){const _0x50743f=a258_0x5cdbab;Object[_0x50743f(0x18d)](_0x2e4b3b,'default',{'enumerable':!![],'value':_0x52c1ca});}:function(_0x5a9402,_0x2249ae){const _0x2d268b=a258_0x5cdbab;_0x5a9402[_0x2d268b(0x1cf)]=_0x2249ae;}),__importStar=this&&this[a258_0x5cdbab(0x1d9)]||function(_0x2b1b57){const _0xdb3f33=a258_0x5cdbab;if(_0x2b1b57&&_0x2b1b57[_0xdb3f33(0x198)])return _0x2b1b57;var _0x5ccc86={};if(_0x2b1b57!=null){for(var _0x666320 in _0x2b1b57)if(_0x666320!=='default'&&Object[_0xdb3f33(0x1d5)]['hasOwnProperty'][_0xdb3f33(0x1ea)](_0x2b1b57,_0x666320))__createBinding(_0x5ccc86,_0x2b1b57,_0x666320);}return __setModuleDefault(_0x5ccc86,_0x2b1b57),_0x5ccc86;},__importDefault=this&&this[a258_0x5cdbab(0x1ee)]||function(_0x3c518a){return _0x3c518a&&_0x3c518a['__esModule']?_0x3c518a:{'default':_0x3c518a};};Object[a258_0x5cdbab(0x18d)](exports,a258_0x5cdbab(0x198),{'value':!![]}),exports['initWASocket']=exports[a258_0x5cdbab(0x1d0)]=exports[a258_0x5cdbab(0x1a1)]=exports[a258_0x5cdbab(0x1d1)]=exports['getWbot']=void 0x0;const Sentry=__importStar(require('@sentry/node')),baileys_1=__importStar(require(a258_0x5cdbab(0x1c5))),Whatsapp_1=__importDefault(require(a258_0x5cdbab(0x1fa))),logger_1=require(a258_0x5cdbab(0x1aa)),logger_2=__importDefault(require('@whiskeysockets/baileys/lib/Utils/logger')),useMultiFileAuthState_1=require(a258_0x5cdbab(0x187)),AppError_1=__importDefault(require('../errors/AppError')),socket_1=require(a258_0x5cdbab(0x1f5)),StartWhatsAppSession_1=require(a258_0x5cdbab(0x19a)),DeleteBaileysService_1=__importDefault(require('../services/BaileysServices/DeleteBaileysService')),cache_1=__importDefault(require('../libs/cache')),ImportWhatsAppMessageService_1=__importDefault(require(a258_0x5cdbab(0x1b1))),date_fns_1=require(a258_0x5cdbab(0x1e2)),moment_1=__importDefault(require(a258_0x5cdbab(0x1bc))),wbotMessageListener_1=require('../services/WbotServices/wbotMessageListener'),addLogs_1=require(a258_0x5cdbab(0x1cd)),loggerBaileys=logger_2[a258_0x5cdbab(0x1cf)][a258_0x5cdbab(0x1db)]({});loggerBaileys[a258_0x5cdbab(0x192)]=a258_0x5cdbab(0x19e);const sessions=[],retriesQrCodeMap=new Map(),getWbot=_0x3b9d69=>{const _0x300837=a258_0x5cdbab,_0x2ea5cc=sessions[_0x300837(0x197)](_0x4517b8=>_0x4517b8['id']===_0x3b9d69);if(_0x2ea5cc===-0x1)throw new AppError_1[(_0x300837(0x1cf))](_0x300837(0x17c));return sessions[_0x2ea5cc];};exports['getWbot']=getWbot;const restartWbot=async(_0xf3d08a,_0x278b00)=>{const _0x13eb30=a258_0x5cdbab;try{const _0x483315={'where':{'companyId':_0xf3d08a},'attributes':['id']},_0xb28fc0=await Whatsapp_1[_0x13eb30(0x1cf)]['findAll'](_0x483315);_0xb28fc0['map'](async _0x5c507f=>{const _0x58d3db=_0x13eb30,_0x8a92e5=sessions[_0x58d3db(0x197)](_0x38ca45=>_0x38ca45['id']===_0x5c507f['id']);_0x8a92e5!==-0x1&&sessions[_0x8a92e5]['ws'][_0x58d3db(0x18b)]();});}catch(_0x20cc32){logger_1[_0x13eb30(0x1b7)][_0x13eb30(0x19e)](_0x20cc32);}};exports['restartWbot']=restartWbot;const removeWbot=async(_0x3289aa,_0x4a359c=!![])=>{const _0x4a4feb=a258_0x5cdbab;try{const _0x5ee197=sessions['findIndex'](_0x3a7334=>_0x3a7334['id']===_0x3289aa);_0x5ee197!==-0x1&&(_0x4a359c&&(sessions[_0x5ee197][_0x4a4feb(0x17d)](),sessions[_0x5ee197]['ws'][_0x4a4feb(0x18b)]()),sessions[_0x4a4feb(0x182)](_0x5ee197,0x1));}catch(_0x371783){logger_1[_0x4a4feb(0x1b7)][_0x4a4feb(0x19e)](_0x371783);}};exports['removeWbot']=removeWbot,exports[a258_0x5cdbab(0x1d0)]={};function a258_0x4188(){const _0x1f82f5=['messages','default','dataMessages','restartWbot','log','forEach','495546zFOxiG','prototype','keys','DD/MM/YYYY\x20HH:mm:ss','format','__importStar','Status:::::','child','190CIBHPb','writable','\x20\x0a\x20\x20Selecionado\x20Data\x20final\x20da\x20importação:\x20','name','10.0','180936xyDoRL','date-fns','TOGI\x20Talk','qrcode','status','companyId','add','DISCONNECTED','556478XMJhnD','call','\x0a\x20\x20Contato\x20da\x20Mensagem\x20:\x20','isValidMsg','Session\x20QRCode\x20Generate\x20','__importDefault','\x20Connection\x20Update\x20','isJidBroadcast','emit','split','.txt','set','./socket','\x20\x0a\x20\x20',',\x20isLatest:\x20','Adicionando\x20mensagem\x20para\x20pos\x20processamento:\x0a\x20\x20Mensagem\x20de\x20GRUPO\x20>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\x0a\x20\x20Data\x20e\x20hora\x20da\x20mensagem:\x20','\x0a\x20\x20Criação\x20do\x20arquivo\x20de\x20logs:\x20','../models/Whatsapp','2746470isrmuA','preparingImportMessagesWppId','messageTimestamp','30KWFIZw','makeCacheableSignalKeyStore','ERR_WAPP_NOT_INITIALIZED','logout','BROWSER_VERSION','delete','getTime','\x0a\x20\x20Selecionado\x20Data\x20de\x20inicio\x20de\x20importação:\x20','splice','update','Adicionando\x20mensagem\x20para\x20pos\x20processamento:\x0a\x20\x20Não\x20é\x20Mensagem\x20de\x20GRUPO\x20>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\x0a\x20\x20Data\x20e\x20hora\x20da\x20mensagem:\x20','1142536jbhmQl','findOne','../helpers/useMultiFileAuthState','statusCode','StartWhatsAppSession','g.us','close','initWASocket','defineProperty','-whatsappSession','type','BROWSER_CLIENT','unshift','level','Running','DisconnectReason','findByPk','statusImportMessages','findIndex','__esModule','output','../services/WbotServices/StartWhatsAppSession','loggedOut','captureException','delFromPattern','error','whatsappSession','importOldMessages','removeWbot','\x0a\x20\x20Tipo\x20da\x20mensagem\x20:\x20','removeAllListeners','Chrome','open','get','floor','templateMessage','jidNormalizedUser','../utils/logger','push','\x0a\x20\x20\x0a\x20\x20','fetchLatestBaileysVersion','low','join','info','../services/WhatsappService/ImportWhatsAppMessageService','309956HRIDgy','5185481RncEbF','using\x20WA\x20v','CONNECTED','Socket\x20\x20','logger','sessions:','PENDING','env','messaging-history.set','moment','importOldMessagesGroups','key','creds','company-','connection.update','getIO','importRecentMessages','Starting\x20session\x20','@whiskeysockets/baileys','\x0a\x20\x20Whatsapp\x20Id:\x20','user','1nYAVUw','__createBinding','addLogs','Aguardando\x20conexão\x20para\x20iniciar\x20a\x20importação\x20de\x20mensagens:\x0a\x20\x20Whatsapp\x20nome:\x20','remoteJid','../helpers/addLogs'];a258_0x4188=function(){return _0x1f82f5;};return a258_0x4188();}const initWASocket=async _0x2101de=>{return new Promise(async(_0x5443dc,_0x335d92)=>{const _0x4e5c73=a258_0x1bc7;try{((async()=>{const _0x57d915=a258_0x1bc7,_0x2192a4=(0x0,socket_1[_0x57d915(0x1c2)])(),_0x14b142=await Whatsapp_1['default'][_0x57d915(0x186)]({'where':{'id':_0x2101de['id']}});if(!_0x14b142)return;const {id:_0x46331c,name:_0xffa551,provider:_0x3682dd}=_0x14b142,{version:_0x384170,isLatest:_0x12eb3a}=await(0x0,baileys_1[_0x57d915(0x1ad)])();logger_1[_0x57d915(0x1b7)][_0x57d915(0x1b0)](_0x57d915(0x1b4)+_0x384170[_0x57d915(0x1af)]('.')+_0x57d915(0x1f7)+_0x12eb3a),logger_1['logger'][_0x57d915(0x1b0)](_0x57d915(0x1c4)+_0xffa551);let _0x11c06a=0x0,_0x2f9814=null;const {state:_0x31d7fc,saveCreds:_0x32a0a9}=await(0x0,useMultiFileAuthState_1['useMultiFileAuthState'])(_0x2101de);_0x2f9814=(0x0,baileys_1['default'])({'logger':loggerBaileys,'printQRInTerminal':![],'browser':[process['env'][_0x57d915(0x190)]||_0x57d915(0x1e3),process[_0x57d915(0x1ba)]['BROWSER_NAME']||_0x57d915(0x1a4),process[_0x57d915(0x1ba)][_0x57d915(0x17e)]||_0x57d915(0x1e0)],'auth':{'creds':_0x31d7fc[_0x57d915(0x1bf)],'keys':(0x0,baileys_1[_0x57d915(0x17b)])(_0x31d7fc[_0x57d915(0x1d6)],logger_1[_0x57d915(0x1b7)])},'version':_0x384170,'shouldIgnoreJid':_0x2e0461=>(0x0,baileys_1[_0x57d915(0x1f0)])(_0x2e0461),'patchMessageBeforeSending':_0x104d03=>{const _0x163945=_0x57d915,_0x33bdc5=!!(_0x104d03['buttonsMessage']||_0x104d03[_0x163945(0x1a8)]||_0x104d03['listMessage']);return _0x33bdc5&&(_0x104d03={'viewOnceMessageV2':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x104d03}}}),_0x104d03;}}),setTimeout(async()=>{const _0x37443a=_0x57d915,_0xb36b3e=await Whatsapp_1[_0x37443a(0x1cf)]['findByPk'](_0x2101de['id']);console[_0x37443a(0x1d2)](_0x37443a(0x1da),_0xb36b3e['status']);if(_0xb36b3e?.[_0x37443a(0x1a0)]&&_0xb36b3e[_0x37443a(0x1e5)]===_0x37443a(0x1b5)){let _0x121be5=new Date(_0xb36b3e['importOldMessages'])['getTime'](),_0x38cf60=new Date(_0xb36b3e[_0x37443a(0x1c3)])['getTime']();(0x0,addLogs_1['addLogs'])({'fileName':'preparingImportMessagesWppId'+_0x2101de['id']+_0x37443a(0x1f3),'forceNewFile':!![],'text':_0x37443a(0x1cb)+_0xb36b3e[_0x37443a(0x1df)]+_0x37443a(0x1c6)+_0xb36b3e['id']+_0x37443a(0x1f9)+(0x0,moment_1[_0x37443a(0x1cf)])()[_0x37443a(0x1d8)](_0x37443a(0x1d7))+_0x37443a(0x181)+(0x0,moment_1[_0x37443a(0x1cf)])(_0x121be5)[_0x37443a(0x1d8)](_0x37443a(0x1d7))+_0x37443a(0x1de)+(0x0,moment_1[_0x37443a(0x1cf)])(_0x38cf60)['format'](_0x37443a(0x1d7))+_0x37443a(0x1f6)});const _0x46d3a0=new Date()[_0x37443a(0x180)]();await _0xb36b3e[_0x37443a(0x183)]({'statusImportMessages':_0x46d3a0}),_0x2f9814['ev']['on'](_0x37443a(0x1bb),async _0x19d42f=>{const _0x24ad60=_0x37443a,_0x39656e=new Date()[_0x24ad60(0x180)]();await _0xb36b3e[_0x24ad60(0x183)]({'statusImportMessages':_0x39656e});const _0x1d577b=_0x2101de['id'];let _0x553b31=_0x19d42f[_0x24ad60(0x1ce)],_0x4ad9f0=[];_0x553b31[_0x24ad60(0x1d3)](_0x29592c=>{const _0x2992c6=_0x24ad60,_0x59cb7f=Math['floor'](_0x29592c[_0x2992c6(0x1fd)][_0x2992c6(0x1ae)]*0x3e8);(0x0,wbotMessageListener_1[_0x2992c6(0x1ec)])(_0x29592c)&&_0x121be5<_0x59cb7f&&_0x38cf60>_0x59cb7f&&(_0x29592c['key']?.['remoteJid']['split']('@')[0x1]!=_0x2992c6(0x18a)?((0x0,addLogs_1[_0x2992c6(0x1ca)])({'fileName':_0x2992c6(0x1fc)+_0x2101de['id']+_0x2992c6(0x1f3),'text':_0x2992c6(0x184)+(0x0,moment_1[_0x2992c6(0x1cf)])(_0x59cb7f)[_0x2992c6(0x1d8)](_0x2992c6(0x1d7))+_0x2992c6(0x1eb)+_0x29592c[_0x2992c6(0x1be)]?.[_0x2992c6(0x1cc)]+_0x2992c6(0x1a2)+(0x0,wbotMessageListener_1['getTypeMessage'])(_0x29592c)+_0x2992c6(0x1ac)}),_0x4ad9f0['push'](_0x29592c)):_0xb36b3e?.[_0x2992c6(0x1bd)]&&((0x0,addLogs_1['addLogs'])({'fileName':_0x2992c6(0x1fc)+_0x2101de['id']+_0x2992c6(0x1f3),'text':_0x2992c6(0x1f8)+(0x0,moment_1[_0x2992c6(0x1cf)])(_0x59cb7f)[_0x2992c6(0x1d8)](_0x2992c6(0x1d7))+_0x2992c6(0x1eb)+_0x29592c[_0x2992c6(0x1be)]?.['remoteJid']+'\x0a\x20\x20Tipo\x20da\x20mensagem\x20:\x20'+(0x0,wbotMessageListener_1['getTypeMessage'])(_0x29592c)+'\x0a\x20\x20\x0a\x20\x20'}),_0x4ad9f0[_0x2992c6(0x1ab)](_0x29592c)));}),!exports[_0x24ad60(0x1d0)]?.[_0x1d577b]?(exports[_0x24ad60(0x1d0)][_0x1d577b]=[],exports[_0x24ad60(0x1d0)][_0x1d577b][_0x24ad60(0x191)](..._0x4ad9f0)):exports[_0x24ad60(0x1d0)][_0x1d577b][_0x24ad60(0x191)](..._0x4ad9f0),setTimeout(async()=>{const _0x442966=_0x24ad60,_0x27f689=await Whatsapp_1[_0x442966(0x1cf)]['findByPk'](_0x1d577b);_0x2192a4[_0x442966(0x1f1)]('importMessages-'+_0x27f689[_0x442966(0x1e6)],{'action':_0x442966(0x183),'status':{'this':-0x1,'all':-0x1}}),_0x2192a4[_0x442966(0x1f1)](_0x442966(0x19f),{'action':'update','session':_0x27f689});},0x1f4),setTimeout(async()=>{const _0x2c7473=_0x24ad60,_0x1a5289=await Whatsapp_1[_0x2c7473(0x1cf)][_0x2c7473(0x195)](_0x1d577b);if(_0x1a5289?.[_0x2c7473(0x1a0)]){let _0x3e785c=!isNaN(new Date(Math[_0x2c7473(0x1a7)](parseInt(_0x1a5289?.[_0x2c7473(0x196)])))[_0x2c7473(0x180)]());if(_0x3e785c){const _0x2031d2=new Date(Math[_0x2c7473(0x1a7)](parseInt(_0x1a5289?.[_0x2c7473(0x196)])))[_0x2c7473(0x180)](),_0x538831=+(0x0,date_fns_1[_0x2c7473(0x1e7)])(_0x2031d2,{'seconds':+0x2d})[_0x2c7473(0x180)]();if(_0x538831<new Date()[_0x2c7473(0x180)]())(0x0,ImportWhatsAppMessageService_1[_0x2c7473(0x1cf)])(_0x1a5289['id']),_0x1a5289[_0x2c7473(0x183)]({'statusImportMessages':_0x2c7473(0x193)});else{}}}_0x2192a4[_0x2c7473(0x1f1)](_0x2c7473(0x19f),{'action':'update','session':_0x1a5289});},0x3e8*0x2d);});}},0x9c4),_0x2f9814['ev']['on']('connection.update',async({connection:_0x48967f,lastDisconnect:_0x2b50f7,qr:_0x1c89ef})=>{const _0x382f1e=_0x57d915;logger_1[_0x382f1e(0x1b7)]['info'](_0x382f1e(0x1b6)+_0xffa551+_0x382f1e(0x1ef)+(_0x48967f||'')+'\x20'+(_0x2b50f7||''));_0x48967f===_0x382f1e(0x18b)&&(_0x2b50f7?.[_0x382f1e(0x19e)]?.[_0x382f1e(0x199)]?.[_0x382f1e(0x188)]===0x193&&(await _0x2101de[_0x382f1e(0x183)]({'status':_0x382f1e(0x1b9),'session':''}),await(0x0,DeleteBaileysService_1[_0x382f1e(0x1cf)])(_0x2101de['id']),await cache_1[_0x382f1e(0x1cf)][_0x382f1e(0x19d)](_0x382f1e(0x1b8)+_0x2101de['id']+':*'),_0x2192a4[_0x382f1e(0x1f1)](_0x382f1e(0x1c0)+_0x2101de['companyId']+'-whatsappSession',{'action':_0x382f1e(0x183),'session':_0x2101de}),(0x0,exports[_0x382f1e(0x1a1)])(_0x46331c,![])),_0x2b50f7?.['error']?.['output']?.[_0x382f1e(0x188)]!==baileys_1[_0x382f1e(0x194)][_0x382f1e(0x19b)]?((0x0,exports[_0x382f1e(0x1a1)])(_0x46331c,![]),setTimeout(()=>(0x0,StartWhatsAppSession_1[_0x382f1e(0x189)])(_0x2101de,_0x2101de[_0x382f1e(0x1e6)]),0x7d0)):(await _0x2101de[_0x382f1e(0x183)]({'status':_0x382f1e(0x1b9),'session':''}),await(0x0,DeleteBaileysService_1['default'])(_0x2101de['id']),await cache_1[_0x382f1e(0x1cf)][_0x382f1e(0x19d)](_0x382f1e(0x1b8)+_0x2101de['id']+':*'),_0x2192a4[_0x382f1e(0x1f1)](_0x382f1e(0x1c0)+_0x2101de[_0x382f1e(0x1e6)]+_0x382f1e(0x18e),{'action':_0x382f1e(0x183),'session':_0x2101de}),(0x0,exports[_0x382f1e(0x1a1)])(_0x46331c,![]),setTimeout(()=>(0x0,StartWhatsAppSession_1[_0x382f1e(0x189)])(_0x2101de,_0x2101de['companyId']),0x7d0)));if(_0x48967f===_0x382f1e(0x1a5)){await _0x2101de[_0x382f1e(0x183)]({'status':_0x382f1e(0x1b5),'qrcode':'','retries':0x0,'number':_0x2f9814[_0x382f1e(0x18f)]==='md'?(0x0,baileys_1[_0x382f1e(0x1a9)])(_0x2f9814[_0x382f1e(0x1c7)]['id'])[_0x382f1e(0x1f2)]('@')[0x0]:'-'}),_0x2192a4[_0x382f1e(0x1f1)](_0x382f1e(0x1c0)+_0x2101de['companyId']+_0x382f1e(0x18e),{'action':_0x382f1e(0x183),'session':_0x2101de});const _0x5b8a59=sessions[_0x382f1e(0x197)](_0x1ffe6a=>_0x1ffe6a['id']===_0x2101de['id']);_0x5b8a59===-0x1&&(_0x2f9814['id']=_0x2101de['id'],sessions['push'](_0x2f9814)),_0x5443dc(_0x2f9814);}if(_0x1c89ef!==undefined){if(retriesQrCodeMap[_0x382f1e(0x1a6)](_0x46331c)&&retriesQrCodeMap['get'](_0x46331c)>=0x3)await _0x14b142['update']({'status':_0x382f1e(0x1e8),'qrcode':''}),await(0x0,DeleteBaileysService_1['default'])(_0x14b142['id']),await cache_1[_0x382f1e(0x1cf)][_0x382f1e(0x19d)](_0x382f1e(0x1b8)+_0x2101de['id']+':*'),_0x2192a4['emit'](_0x382f1e(0x1c0)+_0x2101de[_0x382f1e(0x1e6)]+_0x382f1e(0x18e),{'action':_0x382f1e(0x183),'session':_0x14b142}),_0x2f9814['ev'][_0x382f1e(0x1a3)](_0x382f1e(0x1c1)),_0x2f9814['ws'][_0x382f1e(0x18b)](),_0x2f9814=null,retriesQrCodeMap[_0x382f1e(0x17f)](_0x46331c);else{logger_1[_0x382f1e(0x1b7)]['info'](_0x382f1e(0x1ed)+_0xffa551),retriesQrCodeMap[_0x382f1e(0x1f4)](_0x46331c,_0x11c06a+=0x1),await _0x2101de[_0x382f1e(0x183)]({'qrcode':_0x1c89ef,'status':_0x382f1e(0x1e4),'retries':0x0,'number':''});const _0x73be5f=sessions[_0x382f1e(0x197)](_0x31aca6=>_0x31aca6['id']===_0x2101de['id']);_0x73be5f===-0x1&&(_0x2f9814['id']=_0x2101de['id'],sessions['push'](_0x2f9814)),_0x2192a4['emit']('company-'+_0x2101de[_0x382f1e(0x1e6)]+'-whatsappSession',{'action':_0x382f1e(0x183),'session':_0x2101de});}}}),_0x2f9814['ev']['on']('creds.update',_0x32a0a9);})());}catch(_0x2b557d){Sentry[_0x4e5c73(0x19c)](_0x2b557d),console[_0x4e5c73(0x1d2)](_0x2b557d),_0x335d92(_0x2b557d);}});};exports[a258_0x5cdbab(0x18c)]=initWASocket;