'use strict';const a601_0x5f16a2=a601_0x2651;(function(_0x5e9040,_0x3599e5){const _0x3771ac=a601_0x2651,_0x453ee1=_0x5e9040();while(!![]){try{const _0x391b00=-parseInt(_0x3771ac(0x153))/0x1*(-parseInt(_0x3771ac(0x168))/0x2)+parseInt(_0x3771ac(0x164))/0x3+parseInt(_0x3771ac(0x17a))/0x4+-parseInt(_0x3771ac(0x178))/0x5+parseInt(_0x3771ac(0x156))/0x6+-parseInt(_0x3771ac(0x15e))/0x7+-parseInt(_0x3771ac(0x17d))/0x8;if(_0x391b00===_0x3599e5)break;else _0x453ee1['push'](_0x453ee1['shift']());}catch(_0x4dbfb7){_0x453ee1['push'](_0x453ee1['shift']());}}}(a601_0x133b,0x9d4cb));function a601_0x2651(_0x51019e,_0x303dbe){const _0x133bc2=a601_0x133b();return a601_0x2651=function(_0x2651f8,_0x15a26a){_0x2651f8=_0x2651f8-0x152;let _0x2765f8=_0x133bc2[_0x2651f8];return _0x2765f8;},a601_0x2651(_0x51019e,_0x303dbe);}var __importDefault=this&&this[a601_0x5f16a2(0x17f)]||function(_0x5b8779){const _0x450524=a601_0x5f16a2;return _0x5b8779&&_0x5b8779[_0x450524(0x167)]?_0x5b8779:{'default':_0x5b8779};};Object[a601_0x5f16a2(0x16c)](exports,a601_0x5f16a2(0x167),{'value':!![]});const path_1=__importDefault(require('path')),axios_1=__importDefault(require('axios')),wbotMessageListener_1=require(a601_0x5f16a2(0x16b)),SendWhatsAppMedia_1=require(a601_0x5f16a2(0x16f)),logger_1=require(a601_0x5f16a2(0x171)),lodash_1=require('lodash'),publicFolder=path_1[a601_0x5f16a2(0x163)]['resolve'](__dirname,'..','..','..',a601_0x5f16a2(0x15d));async function createSession(_0xe86789,_0x702a46,_0x3ff61a){const _0x229f99=a601_0x5f16a2;try{const _0x1d0a8f=Math[_0x229f99(0x17b)](Math[_0x229f99(0x17c)]()*0x2540be400)['toString'](),_0x3c1da8={'sessionId':_0xe86789[_0x229f99(0x175)][_0x229f99(0x182)],'startParams':{'typebot':_0x702a46['typebotSlug'],'prefilledVariables':{'number':_0x3ff61a,'name':_0xe86789[_0x229f99(0x175)][_0x229f99(0x15a)]}}},_0x7e4d82=await axios_1['default'][_0x229f99(0x183)](_0x702a46[_0x229f99(0x15b)],_0x3c1da8),_0x451828=''+_0x7e4d82['data']['sessionId'];return _0x451828;}catch(_0x152f3f){logger_1['logger'][_0x229f99(0x174)]('Erro\x20ao\x20criar\x20sessão\x20do\x20typebot:\x20',_0x152f3f);throw _0x152f3f;}}function a601_0x133b(){const _0x5ebb67=['1405692TroaCP','bold','Atendimento\x20automático\x20reiniciado.','__esModule','2130FWfYZH','reload','length','../WbotServices/wbotMessageListener','defineProperty','children','typebotUnknownMessage','../WbotServices/SendWhatsAppMedia','isNil','../../utils/logger','error','italic','info','key','underline','filename','4957295OAlxTX','messages','1382700MICLBF','floor','random','9739712RAzMAJ','sendMessage','__importDefault','update','text','remoteJid','post','Error\x20on\x20typebotListener:\x20','@c.us','log','1148PsQMgO','replace','getBodyMessage','5874384eFSUxt','typebotSessionId','data','companyId','pushName','urlN8N','typebotKeywordFinish','public','1138907UbwFpU','logger','content','richText','downloadMedia','default'];a601_0x133b=function(){return _0x5ebb67;};return a601_0x133b();}const typebotListener=async({wbot:_0x5e2f86,msg:_0x512fd9,ticket:_0x36cb26,typebot:_0x17cb71})=>{const _0x1d58e6=a601_0x5f16a2,_0x4e9be4=_0x512fd9[_0x1d58e6(0x175)]['remoteJid'][_0x1d58e6(0x154)](/\D/g,'');let _0x541eab;try{(0x0,lodash_1[_0x1d58e6(0x170)])(_0x36cb26[_0x1d58e6(0x157)])?(_0x541eab=await createSession(_0x512fd9,_0x17cb71,_0x4e9be4),await _0x36cb26['update']({'typebotSessionId':_0x541eab})):_0x541eab=_0x36cb26[_0x1d58e6(0x157)];let _0x13f684=(0x0,wbotMessageListener_1[_0x1d58e6(0x155)])(_0x512fd9);if(_0x13f684!==_0x17cb71[_0x1d58e6(0x15c)]){const _0x32ab49={'message':_0x13f684,'sessionId':_0x541eab};console['log'](_0x32ab49);const _0x82b743=await axios_1[_0x1d58e6(0x163)][_0x1d58e6(0x183)](_0x17cb71['urlN8N'],_0x32ab49),_0x454ab4=_0x82b743[_0x1d58e6(0x158)]?.[_0x1d58e6(0x179)];if(_0x454ab4[_0x1d58e6(0x16a)]===0x0)await _0x5e2f86['sendMessage'](_0x4e9be4+'@c.us',{'text':_0x17cb71[_0x1d58e6(0x16e)]});else for(const _0x3ac16d of _0x454ab4){if(_0x3ac16d['type']===_0x1d58e6(0x181)){let _0x4fe0b4='';for(const _0x2effbf of _0x3ac16d[_0x1d58e6(0x160)][_0x1d58e6(0x161)]){for(const _0x3426c9 of _0x2effbf[_0x1d58e6(0x16d)]){let _0x300674='';_0x3426c9[_0x1d58e6(0x181)]&&(_0x300674=_0x3426c9[_0x1d58e6(0x181)]),_0x3426c9[_0x1d58e6(0x165)]&&(_0x300674='*'+_0x300674+'*'),_0x3426c9[_0x1d58e6(0x173)]&&(_0x300674='_'+_0x300674+'_'),_0x3426c9[_0x1d58e6(0x176)]&&(_0x300674='~'+_0x300674+'~'),_0x4fe0b4+=_0x300674;}_0x4fe0b4+='\x0a';}_0x4fe0b4=_0x4fe0b4['replace'](/\n$/,''),await _0x5e2f86[_0x1d58e6(0x17e)](_0x4e9be4+_0x1d58e6(0x185),{'text':_0x4fe0b4});}else try{console[_0x1d58e6(0x152)](_0x3ac16d);const _0x40774d=await(0x0,wbotMessageListener_1[_0x1d58e6(0x162)])(_0x3ac16d);console[_0x1d58e6(0x152)](_0x40774d);const _0x209774=path_1[_0x1d58e6(0x163)]['resolve'](publicFolder,'company'+_0x36cb26[_0x1d58e6(0x159)],_0x40774d[_0x1d58e6(0x177)]),_0xc02b68=await(0x0,SendWhatsAppMedia_1['getMessageOptions'])(_0x40774d[_0x1d58e6(0x177)],_0x209774,_0x36cb26[_0x1d58e6(0x159)]['toString'](),_0x3ac16d?.[_0x1d58e6(0x160)]?.[_0x1d58e6(0x161)]),_0x3c762d=await _0x5e2f86['sendMessage'](_0x4e9be4+_0x1d58e6(0x185),{..._0xc02b68});}catch(_0x160d34){logger_1[_0x1d58e6(0x15f)][_0x1d58e6(0x172)]('Erro\x20ao\x20processar\x20mensagem\x20de\x20midia\x20no\x20typebot:\x20',_0x160d34);}}}_0x13f684===_0x17cb71[_0x1d58e6(0x15c)]&&(await _0x36cb26[_0x1d58e6(0x180)]({'integrationId':null,'useIntegration':![],'isBot':!![]}),await _0x36cb26[_0x1d58e6(0x169)],await _0x36cb26[_0x1d58e6(0x180)]({'typebotSessionId':null}),await _0x5e2f86[_0x1d58e6(0x17e)](_0x4e9be4+'@c.us',{'text':_0x1d58e6(0x166)}));}catch(_0x3d4dd5){logger_1[_0x1d58e6(0x15f)]['info'](_0x1d58e6(0x184),_0x3d4dd5);throw _0x3d4dd5;}};exports[a601_0x5f16a2(0x163)]=typebotListener;