'use strict';const a243_0x329292=a243_0x8701;(function(_0x5c479d,_0x48a38a){const _0x1d1967=a243_0x8701,_0x51f3=_0x5c479d();while(!![]){try{const _0x51d114=parseInt(_0x1d1967(0x14c))/0x1*(-parseInt(_0x1d1967(0x183))/0x2)+parseInt(_0x1d1967(0x152))/0x3*(parseInt(_0x1d1967(0x157))/0x4)+-parseInt(_0x1d1967(0x1c0))/0x5*(-parseInt(_0x1d1967(0x155))/0x6)+parseInt(_0x1d1967(0x1a7))/0x7*(parseInt(_0x1d1967(0x1a4))/0x8)+-parseInt(_0x1d1967(0x19a))/0x9*(-parseInt(_0x1d1967(0x1ae))/0xa)+-parseInt(_0x1d1967(0x150))/0xb*(parseInt(_0x1d1967(0x1bf))/0xc)+parseInt(_0x1d1967(0x154))/0xd;if(_0x51d114===_0x48a38a)break;else _0x51f3['push'](_0x51f3['shift']());}catch(_0x1fd6dd){_0x51f3['push'](_0x51f3['shift']());}}}(a243_0x3db8,0xdf8dd));var __createBinding=this&&this['__createBinding']||(Object[a243_0x329292(0x184)]?function(_0x4e47f9,_0x3c4e52,_0x14e54d,_0x5113ca){const _0x5233fd=a243_0x329292;if(_0x5113ca===undefined)_0x5113ca=_0x14e54d;var _0x26df3a=Object[_0x5233fd(0x17c)](_0x3c4e52,_0x14e54d);(!_0x26df3a||(_0x5233fd(0x164)in _0x26df3a?!_0x3c4e52['__esModule']:_0x26df3a[_0x5233fd(0x15e)]||_0x26df3a['configurable']))&&(_0x26df3a={'enumerable':!![],'get':function(){return _0x3c4e52[_0x14e54d];}}),Object['defineProperty'](_0x4e47f9,_0x5113ca,_0x26df3a);}:function(_0x568de5,_0x5d7cc9,_0x1cf1af,_0x4340de){if(_0x4340de===undefined)_0x4340de=_0x1cf1af;_0x568de5[_0x4340de]=_0x5d7cc9[_0x1cf1af];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a243_0x329292(0x184)]?function(_0x5d521c,_0x37d9d4){const _0x55d233=a243_0x329292;Object[_0x55d233(0x186)](_0x5d521c,'default',{'enumerable':!![],'value':_0x37d9d4});}:function(_0x58cbc2,_0x491590){const _0x12a5b2=a243_0x329292;_0x58cbc2[_0x12a5b2(0x163)]=_0x491590;}),__importStar=this&&this[a243_0x329292(0x165)]||function(_0x570a74){const _0x21ba73=a243_0x329292;if(_0x570a74&&_0x570a74[_0x21ba73(0x156)])return _0x570a74;var _0x9bc7de={};if(_0x570a74!=null){for(var _0x497933 in _0x570a74)if(_0x497933!==_0x21ba73(0x163)&&Object[_0x21ba73(0x1b0)][_0x21ba73(0x170)][_0x21ba73(0x15f)](_0x570a74,_0x497933))__createBinding(_0x9bc7de,_0x570a74,_0x497933);}return __setModuleDefault(_0x9bc7de,_0x570a74),_0x9bc7de;},__importDefault=this&&this[a243_0x329292(0x18d)]||function(_0xefa9b6){const _0x5034a0=a243_0x329292;return _0xefa9b6&&_0xefa9b6[_0x5034a0(0x156)]?_0xefa9b6:{'default':_0xefa9b6};};Object[a243_0x329292(0x186)](exports,'__esModule',{'value':!![]}),exports['initWASocket']=exports[a243_0x329292(0x189)]=exports['removeWbot']=exports[a243_0x329292(0x14e)]=exports[a243_0x329292(0x15a)]=void 0x0;const Sentry=__importStar(require(a243_0x329292(0x18b))),baileys_1=__importStar(require('@whiskeysockets/baileys')),Whatsapp_1=__importDefault(require('../models/Whatsapp')),logger_1=require(a243_0x329292(0x15c)),logger_2=__importDefault(require(a243_0x329292(0x193))),useMultiFileAuthState_1=require('../helpers/useMultiFileAuthState'),AppError_1=__importDefault(require(a243_0x329292(0x16b))),socket_1=require(a243_0x329292(0x16c)),StartWhatsAppSession_1=require(a243_0x329292(0x17a)),DeleteBaileysService_1=__importDefault(require('../services/BaileysServices/DeleteBaileysService')),cache_1=require(a243_0x329292(0x1bb)),ImportWhatsAppMessageService_1=__importDefault(require(a243_0x329292(0x177))),date_fns_1=require(a243_0x329292(0x19d)),moment_1=__importDefault(require('moment')),wbotMessageListener_1=require('../services/WbotServices/wbotMessageListener'),loggerBaileys=logger_2['default'][a243_0x329292(0x158)]({});loggerBaileys[a243_0x329292(0x15d)]=a243_0x329292(0x199);const sessions=[],retriesQrCodeMap=new Map(),getWbot=_0x4f9f2=>{const _0x4612a7=a243_0x329292,_0x51768a=sessions[_0x4612a7(0x1bd)](_0x3df2fc=>_0x3df2fc['id']===_0x4f9f2);if(_0x51768a===-0x1)throw new AppError_1[(_0x4612a7(0x163))](_0x4612a7(0x160));return sessions[_0x51768a];};exports[a243_0x329292(0x15a)]=getWbot;const restartWbot=async(_0x3632a3,_0x2524f0)=>{const _0x317410=a243_0x329292;try{const _0x4c1fe2={'where':{'companyId':_0x3632a3},'attributes':['id']},_0x2b8cd7=await Whatsapp_1[_0x317410(0x163)]['findAll'](_0x4c1fe2);_0x2b8cd7[_0x317410(0x1b4)](async _0x951a97=>{const _0xe99e9e=_0x317410,_0x5b70df=sessions[_0xe99e9e(0x1bd)](_0x2c0188=>_0x2c0188['id']===_0x951a97['id']);_0x5b70df!==-0x1&&sessions[_0x5b70df]['ws'][_0xe99e9e(0x188)]();});}catch(_0x150c1f){logger_1[_0x317410(0x175)][_0x317410(0x199)](_0x150c1f);}};exports[a243_0x329292(0x14e)]=restartWbot;function a243_0x3db8(){const _0x49df1c=['templateMessage','Starting\x20session\x20','unshift','removeWbot','logger','findOne','../services/WhatsappService/ImportWhatsAppMessageService','connection.update','add','../services/WbotServices/StartWhatsAppSession','-whatsappSession','getOwnPropertyDescriptor','10.0','output','importRecentMessages','format','buttonsMessage','companyId','3281152hOwVHi','create','listMessage','defineProperty','whatsappSession','close','dataMessages','creds','@sentry/node','isValidMsg','__importDefault','BROWSER_NAME','captureException','removeAllListeners','creds.update','key','@whiskeysockets/baileys/lib/Utils/logger','CONNECTED','remoteJid','keys','isJidBroadcast','importOldMessages','error','5560479svVcRX','logout','Mensagem\x20>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Normal','date-fns','makeCacheableSignalKeyStore','low','DisconnectReason','Running','importOldMessagesGroups','emit','128GEhRmb','split','cacheLayer','468986MXegkn','BROWSER_CLIENT','Mensagem\x20>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>De\x20Grupo','info','push','StartWhatsAppSession','DD/MM/YY\x20HH:mm:ss','10fhwitT','messages','prototype','floor','messageTimestamp','company-','map','\x20Connection\x20Update\x20','jidNormalizedUser','sessions:','fetchLatestBaileysVersion','>>>>>>>>','initWASocket','./cache','Low\x20TimeStamp>>>','findIndex',',\x20isLatest:\x20','12vsluyz','45mQAxPb','statusCode','env','1jeaYwN','findByPk','restartWbot','delete','1047288OfYIwI','Chrome','498gkOaPR','delFromPattern','4195854wylVBZ','134772CDMBOD','__esModule','10524yrMdms','child','Session\x20QRCode\x20Generate\x20','getWbot','update','../utils/logger','level','writable','call','ERR_WAPP_NOT_INITIALIZED','set','getTime','default','get','__importStar','using\x20WA\x20v','importMessages-','splice','forEach','statusImportMessages','../errors/AppError','./socket','log','type','BROWSER_VERSION','hasOwnProperty'];a243_0x3db8=function(){return _0x49df1c;};return a243_0x3db8();}function a243_0x8701(_0x29e791,_0x57d488){const _0x3db8cc=a243_0x3db8();return a243_0x8701=function(_0x8701e9,_0x21e90a){_0x8701e9=_0x8701e9-0x14a;let _0x14f0c2=_0x3db8cc[_0x8701e9];return _0x14f0c2;},a243_0x8701(_0x29e791,_0x57d488);}const removeWbot=async(_0x1daf17,_0xecabe5=!![])=>{const _0x2fe9fa=a243_0x329292;try{const _0x1e2f23=sessions['findIndex'](_0x2a4384=>_0x2a4384['id']===_0x1daf17);_0x1e2f23!==-0x1&&(_0xecabe5&&(sessions[_0x1e2f23][_0x2fe9fa(0x19b)](),sessions[_0x1e2f23]['ws'][_0x2fe9fa(0x188)]()),sessions[_0x2fe9fa(0x168)](_0x1e2f23,0x1));}catch(_0x5bd23a){logger_1[_0x2fe9fa(0x175)][_0x2fe9fa(0x199)](_0x5bd23a);}};exports['removeWbot']=removeWbot,exports['dataMessages']={};const initWASocket=async _0x2c3fbd=>{return new Promise(async(_0x3124b4,_0x1db057)=>{const _0x19724e=a243_0x8701;try{((async()=>{const _0x31ad1a=a243_0x8701,_0x195f3c=(0x0,socket_1['getIO'])(),_0x3d415c=await Whatsapp_1[_0x31ad1a(0x163)][_0x31ad1a(0x176)]({'where':{'id':_0x2c3fbd['id']}});if(!_0x3d415c)return;const {id:_0x34ba04,name:_0x42ef31,provider:_0x4dd4be}=_0x3d415c,{version:_0x5366bc,isLatest:_0x14c14d}=await(0x0,baileys_1[_0x31ad1a(0x1b8)])();logger_1['logger'][_0x31ad1a(0x1aa)](_0x31ad1a(0x166)+_0x5366bc['join']('.')+_0x31ad1a(0x1be)+_0x14c14d),logger_1[_0x31ad1a(0x175)]['info'](_0x31ad1a(0x172)+_0x42ef31);let _0x50f2b1=0x0,_0x3a352b=null;const {state:_0x43590d,saveCreds:_0x25c2d6}=await(0x0,useMultiFileAuthState_1['useMultiFileAuthState'])(_0x2c3fbd);_0x3a352b=(0x0,baileys_1[_0x31ad1a(0x163)])({'logger':loggerBaileys,'printQRInTerminal':![],'browser':[process[_0x31ad1a(0x14b)][_0x31ad1a(0x1a8)]||'TOGI\x20Talk',process[_0x31ad1a(0x14b)][_0x31ad1a(0x18e)]||_0x31ad1a(0x151),process[_0x31ad1a(0x14b)][_0x31ad1a(0x16f)]||_0x31ad1a(0x17d)],'auth':{'creds':_0x43590d[_0x31ad1a(0x18a)],'keys':(0x0,baileys_1[_0x31ad1a(0x19e)])(_0x43590d[_0x31ad1a(0x196)],logger_1[_0x31ad1a(0x175)])},'version':_0x5366bc,'shouldIgnoreJid':_0xfee8e5=>(0x0,baileys_1[_0x31ad1a(0x197)])(_0xfee8e5),'patchMessageBeforeSending':_0x509d59=>{const _0x350065=_0x31ad1a,_0x4ecdfb=!!(_0x509d59[_0x350065(0x181)]||_0x509d59[_0x350065(0x171)]||_0x509d59[_0x350065(0x185)]);return _0x4ecdfb&&(_0x509d59={'viewOnceMessageV2':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x509d59}}}),_0x509d59;}});const _0x3d4c99=await Whatsapp_1[_0x31ad1a(0x163)][_0x31ad1a(0x14d)](_0x2c3fbd['id']);if(_0x3d4c99?.[_0x31ad1a(0x198)]){const _0xafa92=new Date()['getTime']();await _0x2c3fbd['update']({'statusImportMessages':_0xafa92}),_0x3a352b['ev']['on']('messaging-history.set',async _0x578d69=>{const _0x38e925=_0x31ad1a,_0x2c0dc8=new Date()[_0x38e925(0x162)]();await _0x2c3fbd['update']({'statusImportMessages':_0x2c0dc8});const _0x7b3460=_0x2c3fbd['id'];let _0x3b467e=new Date(_0x3d4c99[_0x38e925(0x198)])[_0x38e925(0x162)](),_0xd1f14=new Date(_0x3d4c99[_0x38e925(0x17f)])[_0x38e925(0x162)](),_0x1d4910=_0x578d69[_0x38e925(0x1af)],_0x545dae=[];_0x1d4910[_0x38e925(0x169)](_0x38ada8=>{const _0x1ab5f8=_0x38e925,_0x45dec2=Math[_0x1ab5f8(0x1b1)](_0x38ada8[_0x1ab5f8(0x1b2)][_0x1ab5f8(0x19f)]*0x3e8);(0x0,wbotMessageListener_1[_0x1ab5f8(0x18c)])(_0x38ada8)&&_0x3b467e<_0x45dec2&&_0xd1f14>_0x45dec2&&(_0x38ada8[_0x1ab5f8(0x192)]?.[_0x1ab5f8(0x195)][_0x1ab5f8(0x1a5)]('@')[0x1]!='g.us'?(console[_0x1ab5f8(0x16d)](_0x1ab5f8(0x19c)),console['log'](_0x1ab5f8(0x1bc),_0x45dec2,_0x1ab5f8(0x1b9),(0x0,moment_1[_0x1ab5f8(0x163)])(_0x45dec2)['format'](_0x1ab5f8(0x1ad))),console[_0x1ab5f8(0x16d)]('dateOldLimit>>>',_0x3b467e,_0x1ab5f8(0x1b9),(0x0,moment_1[_0x1ab5f8(0x163)])(_0x3b467e)[_0x1ab5f8(0x180)]('DD/MM/YY\x20HH:mm:ss')),_0x545dae['push'](_0x38ada8)):_0x3d4c99?.[_0x1ab5f8(0x1a2)]&&(console[_0x1ab5f8(0x16d)](_0x1ab5f8(0x1a9)),console[_0x1ab5f8(0x16d)](_0x1ab5f8(0x1bc),_0x45dec2,_0x1ab5f8(0x1b9),(0x0,moment_1[_0x1ab5f8(0x163)])(_0x45dec2)[_0x1ab5f8(0x180)](_0x1ab5f8(0x1ad))),console[_0x1ab5f8(0x16d)]('dateOldLimit>>>',_0x3b467e,'>>>>>>>>',(0x0,moment_1[_0x1ab5f8(0x163)])(_0x3b467e)[_0x1ab5f8(0x180)](_0x1ab5f8(0x1ad))),_0x545dae[_0x1ab5f8(0x1ab)](_0x38ada8)));}),!exports[_0x38e925(0x189)]?.[_0x7b3460]?(exports['dataMessages'][_0x7b3460]=[],exports['dataMessages'][_0x7b3460][_0x38e925(0x173)](..._0x545dae)):exports[_0x38e925(0x189)][_0x7b3460][_0x38e925(0x173)](..._0x545dae),setTimeout(async()=>{const _0x3b9ece=_0x38e925,_0x316e53=await Whatsapp_1[_0x3b9ece(0x163)][_0x3b9ece(0x14d)](_0x7b3460);_0x195f3c[_0x3b9ece(0x1a3)](_0x3b9ece(0x167)+_0x316e53[_0x3b9ece(0x182)],{'action':_0x3b9ece(0x15b),'status':{'this':-0x1,'all':-0x1}}),_0x195f3c[_0x3b9ece(0x1a3)](_0x3b9ece(0x187),{'action':'update','session':_0x316e53});},0x1f4),setTimeout(async()=>{const _0x1a5676=_0x38e925,_0x174e22=await Whatsapp_1[_0x1a5676(0x163)][_0x1a5676(0x14d)](_0x7b3460);if(_0x174e22?.[_0x1a5676(0x198)]){let _0x1645a8=!isNaN(new Date(Math[_0x1a5676(0x1b1)](parseInt(_0x174e22?.[_0x1a5676(0x16a)])))[_0x1a5676(0x162)]());if(_0x1645a8){const _0xd9cce5=new Date(Math['floor'](parseInt(_0x174e22?.[_0x1a5676(0x16a)])))[_0x1a5676(0x162)](),_0x4841fe=+(0x0,date_fns_1[_0x1a5676(0x179)])(_0xd9cce5,{'seconds':+0x2d})[_0x1a5676(0x162)]();if(_0x4841fe<new Date()['getTime']())(0x0,ImportWhatsAppMessageService_1[_0x1a5676(0x163)])(_0x174e22['id']),_0x174e22[_0x1a5676(0x15b)]({'statusImportMessages':_0x1a5676(0x1a1)});else{}}}_0x195f3c[_0x1a5676(0x1a3)](_0x1a5676(0x187),{'action':_0x1a5676(0x15b),'session':_0x174e22});},0x3e8*0x2d);});}_0x3a352b['ev']['on'](_0x31ad1a(0x178),async({connection:_0x5deee6,lastDisconnect:_0xdc32c6,qr:_0x4387e1})=>{const _0x2a1088=_0x31ad1a;logger_1[_0x2a1088(0x175)][_0x2a1088(0x1aa)]('Socket\x20\x20'+_0x42ef31+_0x2a1088(0x1b5)+(_0x5deee6||'')+'\x20'+(_0xdc32c6||''));_0x5deee6===_0x2a1088(0x188)&&(_0xdc32c6?.[_0x2a1088(0x199)]?.[_0x2a1088(0x17e)]?.[_0x2a1088(0x14a)]===0x193&&(await _0x2c3fbd['update']({'status':'PENDING','session':''}),await(0x0,DeleteBaileysService_1['default'])(_0x2c3fbd['id']),await cache_1[_0x2a1088(0x1a6)][_0x2a1088(0x153)](_0x2a1088(0x1b7)+_0x2c3fbd['id']+':*'),_0x195f3c[_0x2a1088(0x1a3)](_0x2a1088(0x1b3)+_0x2c3fbd[_0x2a1088(0x182)]+_0x2a1088(0x17b),{'action':_0x2a1088(0x15b),'session':_0x2c3fbd}),(0x0,exports['removeWbot'])(_0x34ba04,![])),_0xdc32c6?.['error']?.[_0x2a1088(0x17e)]?.['statusCode']!==baileys_1[_0x2a1088(0x1a0)]['loggedOut']?((0x0,exports[_0x2a1088(0x174)])(_0x34ba04,![]),setTimeout(()=>(0x0,StartWhatsAppSession_1[_0x2a1088(0x1ac)])(_0x2c3fbd,_0x2c3fbd[_0x2a1088(0x182)]),0x7d0)):(await _0x2c3fbd[_0x2a1088(0x15b)]({'status':'PENDING','session':''}),await(0x0,DeleteBaileysService_1[_0x2a1088(0x163)])(_0x2c3fbd['id']),await cache_1[_0x2a1088(0x1a6)]['delFromPattern'](_0x2a1088(0x1b7)+_0x2c3fbd['id']+':*'),_0x195f3c['emit']('company-'+_0x2c3fbd[_0x2a1088(0x182)]+_0x2a1088(0x17b),{'action':_0x2a1088(0x15b),'session':_0x2c3fbd}),(0x0,exports[_0x2a1088(0x174)])(_0x34ba04,![]),setTimeout(()=>(0x0,StartWhatsAppSession_1['StartWhatsAppSession'])(_0x2c3fbd,_0x2c3fbd[_0x2a1088(0x182)]),0x7d0)));if(_0x5deee6==='open'){await _0x2c3fbd[_0x2a1088(0x15b)]({'status':_0x2a1088(0x194),'qrcode':'','retries':0x0,'number':_0x3a352b[_0x2a1088(0x16e)]==='md'?(0x0,baileys_1[_0x2a1088(0x1b6)])(_0x3a352b['user']['id'])[_0x2a1088(0x1a5)]('@')[0x0]:'-'}),_0x195f3c[_0x2a1088(0x1a3)]('company-'+_0x2c3fbd[_0x2a1088(0x182)]+_0x2a1088(0x17b),{'action':_0x2a1088(0x15b),'session':_0x2c3fbd});const _0x439cee=sessions[_0x2a1088(0x1bd)](_0x455686=>_0x455686['id']===_0x2c3fbd['id']);_0x439cee===-0x1&&(_0x3a352b['id']=_0x2c3fbd['id'],sessions['push'](_0x3a352b)),_0x3124b4(_0x3a352b);}if(_0x4387e1!==undefined){if(retriesQrCodeMap['get'](_0x34ba04)&&retriesQrCodeMap['get'](_0x34ba04)>=0x3)await _0x3d415c['update']({'status':'DISCONNECTED','qrcode':''}),await(0x0,DeleteBaileysService_1['default'])(_0x3d415c['id']),await cache_1[_0x2a1088(0x1a6)][_0x2a1088(0x153)](_0x2a1088(0x1b7)+_0x2c3fbd['id']+':*'),_0x195f3c['emit'](_0x2a1088(0x1b3)+_0x2c3fbd[_0x2a1088(0x182)]+_0x2a1088(0x17b),{'action':_0x2a1088(0x15b),'session':_0x3d415c}),_0x3a352b['ev'][_0x2a1088(0x190)](_0x2a1088(0x178)),_0x3a352b['ws']['close'](),_0x3a352b=null,retriesQrCodeMap[_0x2a1088(0x14f)](_0x34ba04);else{logger_1[_0x2a1088(0x175)][_0x2a1088(0x1aa)](_0x2a1088(0x159)+_0x42ef31),retriesQrCodeMap[_0x2a1088(0x161)](_0x34ba04,_0x50f2b1+=0x1),await _0x2c3fbd[_0x2a1088(0x15b)]({'qrcode':_0x4387e1,'status':'qrcode','retries':0x0,'number':''});const _0x2a09e6=sessions[_0x2a1088(0x1bd)](_0x5bf746=>_0x5bf746['id']===_0x2c3fbd['id']);_0x2a09e6===-0x1&&(_0x3a352b['id']=_0x2c3fbd['id'],sessions[_0x2a1088(0x1ab)](_0x3a352b)),_0x195f3c[_0x2a1088(0x1a3)](_0x2a1088(0x1b3)+_0x2c3fbd['companyId']+_0x2a1088(0x17b),{'action':_0x2a1088(0x15b),'session':_0x2c3fbd});}}}),_0x3a352b['ev']['on'](_0x31ad1a(0x191),_0x25c2d6);})());}catch(_0x4d0c18){Sentry[_0x19724e(0x18f)](_0x4d0c18),console[_0x19724e(0x16d)](_0x4d0c18),_0x1db057(_0x4d0c18);}});};exports[a243_0x329292(0x1ba)]=initWASocket;