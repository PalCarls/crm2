'use strict';const a601_0x17b09d=a601_0x3b4f;(function(_0x497c0b,_0x14655b){const _0x3089b8=a601_0x3b4f,_0x401656=_0x497c0b();while(!![]){try{const _0x1f83d4=-parseInt(_0x3089b8(0x10d))/0x1*(-parseInt(_0x3089b8(0x12c))/0x2)+parseInt(_0x3089b8(0x114))/0x3*(parseInt(_0x3089b8(0x138))/0x4)+-parseInt(_0x3089b8(0x139))/0x5*(parseInt(_0x3089b8(0x140))/0x6)+parseInt(_0x3089b8(0x11a))/0x7+-parseInt(_0x3089b8(0x13d))/0x8+-parseInt(_0x3089b8(0x119))/0x9*(parseInt(_0x3089b8(0x12b))/0xa)+parseInt(_0x3089b8(0x126))/0xb;if(_0x1f83d4===_0x14655b)break;else _0x401656['push'](_0x401656['shift']());}catch(_0x550557){_0x401656['push'](_0x401656['shift']());}}}(a601_0x2203,0xcd791));var __importDefault=this&&this[a601_0x17b09d(0x11d)]||function(_0x11bc93){const _0x2d540b=a601_0x17b09d;return _0x11bc93&&_0x11bc93[_0x2d540b(0x117)]?_0x11bc93:{'default':_0x11bc93};};function a601_0x3b4f(_0x59e851,_0x2690a8){const _0x2203e3=a601_0x2203();return a601_0x3b4f=function(_0x3b4f2a,_0xe4a0ed){_0x3b4f2a=_0x3b4f2a-0x108;let _0x20fbbd=_0x2203e3[_0x3b4f2a];return _0x20fbbd;},a601_0x3b4f(_0x59e851,_0x2690a8);}function a601_0x2203(){const _0x1a2708=['urlN8N','__importDefault','defineProperty','update','reload','children','typebotUnknownMessage','content','downloadMedia','default','2505712iyrHIq','Atendimento\x20automático\x20reiniciado.','post','sendMessage','typebotKeywordFinish','5140HTZPSn','2vNzmOT','floor','getMessageOptions','@c.us','../WbotServices/SendWhatsAppMedia','random','company','Error\x20on\x20typebotListener:\x20','key','log','error','companyId','28ODNNst','205SrxCbn','italic','../WbotServices/wbotMessageListener','data','9581008oODYBu','filename','logger','81078sLtOOw','text','typebotSessionId','underline','remoteJid','path','65009sNUkVx','sessionId','type','typebotSlug','replace','public','getBodyMessage','591042DGnSft','toString','lodash','__esModule','info','9981exWCpQ','10439821qIldpO','resolve'];a601_0x2203=function(){return _0x1a2708;};return a601_0x2203();}Object[a601_0x17b09d(0x11e)](exports,'__esModule',{'value':!![]});const path_1=__importDefault(require(a601_0x17b09d(0x10c))),axios_1=__importDefault(require('axios')),wbotMessageListener_1=require(a601_0x17b09d(0x13b)),SendWhatsAppMedia_1=require(a601_0x17b09d(0x130)),logger_1=require('../../utils/logger'),lodash_1=require(a601_0x17b09d(0x116)),publicFolder=path_1['default'][a601_0x17b09d(0x11b)](__dirname,'..','..','..',a601_0x17b09d(0x112));async function createSession(_0x1540c1,_0x4ddfe2,_0x4ade88){const _0x3ee0e1=a601_0x17b09d;try{const _0x53c8b5=Math[_0x3ee0e1(0x12d)](Math[_0x3ee0e1(0x131)]()*0x2540be400)[_0x3ee0e1(0x115)](),_0x209ddc={'sessionId':_0x1540c1[_0x3ee0e1(0x134)][_0x3ee0e1(0x10b)],'startParams':{'typebot':_0x4ddfe2[_0x3ee0e1(0x110)],'prefilledVariables':{'number':_0x4ade88,'name':_0x1540c1[_0x3ee0e1(0x134)]['pushName']}}},_0x3c67ff=await axios_1[_0x3ee0e1(0x125)][_0x3ee0e1(0x128)](_0x4ddfe2[_0x3ee0e1(0x11c)],_0x209ddc),_0x2d94c9=''+_0x3c67ff[_0x3ee0e1(0x13c)][_0x3ee0e1(0x10e)];return _0x2d94c9;}catch(_0x2a8994){logger_1[_0x3ee0e1(0x13f)][_0x3ee0e1(0x118)]('Erro\x20ao\x20criar\x20sessão\x20do\x20typebot:\x20',_0x2a8994);throw _0x2a8994;}}const typebotListener=async({wbot:_0x158421,msg:_0x71615d,ticket:_0x4cea74,typebot:_0x1411af})=>{const _0x316f05=a601_0x17b09d,_0x249a57=_0x71615d[_0x316f05(0x134)]['remoteJid'][_0x316f05(0x111)](/\D/g,'');let _0x3aae86;try{(0x0,lodash_1['isNil'])(_0x4cea74[_0x316f05(0x109)])?(_0x3aae86=await createSession(_0x71615d,_0x1411af,_0x249a57),await _0x4cea74[_0x316f05(0x11f)]({'typebotSessionId':_0x3aae86})):_0x3aae86=_0x4cea74[_0x316f05(0x109)];let _0x134db0=(0x0,wbotMessageListener_1[_0x316f05(0x113)])(_0x71615d);if(_0x134db0!==_0x1411af[_0x316f05(0x12a)]){const _0x5e89af={'message':_0x134db0,'sessionId':_0x3aae86};console[_0x316f05(0x135)](_0x5e89af);const _0x5b89e9=await axios_1[_0x316f05(0x125)]['post'](_0x1411af[_0x316f05(0x11c)],_0x5e89af),_0x5a3aa=_0x5b89e9[_0x316f05(0x13c)]?.['messages'];if(_0x5a3aa['length']===0x0)await _0x158421['sendMessage'](_0x249a57+_0x316f05(0x12f),{'text':_0x1411af[_0x316f05(0x122)]});else for(const _0x847c58 of _0x5a3aa){if(_0x847c58[_0x316f05(0x10f)]===_0x316f05(0x108)){let _0x23074f='';for(const _0x1f72f5 of _0x847c58[_0x316f05(0x123)]['richText']){for(const _0x14fa83 of _0x1f72f5[_0x316f05(0x121)]){let _0x2afac3='';_0x14fa83[_0x316f05(0x108)]&&(_0x2afac3=_0x14fa83[_0x316f05(0x108)]),_0x14fa83['bold']&&(_0x2afac3='*'+_0x2afac3+'*'),_0x14fa83[_0x316f05(0x13a)]&&(_0x2afac3='_'+_0x2afac3+'_'),_0x14fa83[_0x316f05(0x10a)]&&(_0x2afac3='~'+_0x2afac3+'~'),_0x23074f+=_0x2afac3;}_0x23074f+='\x0a';}_0x23074f=_0x23074f['replace'](/\n$/,''),await _0x158421['sendMessage'](_0x249a57+'@c.us',{'text':_0x23074f});}else try{console[_0x316f05(0x135)](_0x847c58);const _0x15857f=await(0x0,wbotMessageListener_1[_0x316f05(0x124)])(_0x847c58);console[_0x316f05(0x135)](_0x15857f);const _0x33413f=path_1[_0x316f05(0x125)]['resolve'](publicFolder,_0x316f05(0x132)+_0x4cea74[_0x316f05(0x137)],_0x15857f[_0x316f05(0x13e)]),_0x14d764=await(0x0,SendWhatsAppMedia_1[_0x316f05(0x12e)])(_0x15857f[_0x316f05(0x13e)],_0x33413f,_0x4cea74['companyId'][_0x316f05(0x115)](),_0x847c58?.['content']?.['richText']),_0x583e08=await _0x158421[_0x316f05(0x129)](_0x249a57+_0x316f05(0x12f),{..._0x14d764});}catch(_0xc56241){logger_1[_0x316f05(0x13f)][_0x316f05(0x136)]('Erro\x20ao\x20processar\x20mensagem\x20de\x20midia\x20no\x20typebot:\x20',_0xc56241);}}}_0x134db0===_0x1411af[_0x316f05(0x12a)]&&(await _0x4cea74[_0x316f05(0x11f)]({'integrationId':null,'useIntegration':![],'isBot':!![]}),await _0x4cea74[_0x316f05(0x120)],await _0x4cea74[_0x316f05(0x11f)]({'typebotSessionId':null}),await _0x158421['sendMessage'](_0x249a57+'@c.us',{'text':_0x316f05(0x127)}));}catch(_0x4708a7){logger_1[_0x316f05(0x13f)][_0x316f05(0x118)](_0x316f05(0x133),_0x4708a7);throw _0x4708a7;}};exports[a601_0x17b09d(0x125)]=typebotListener;