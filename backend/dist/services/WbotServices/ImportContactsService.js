'use strict';const a522_0x4a173b=a522_0x6c2c;(function(_0x3f5d56,_0x492484){const _0x17e1ac=a522_0x6c2c,_0x205352=_0x3f5d56();while(!![]){try{const _0x43aacd=-parseInt(_0x17e1ac(0x88))/0x1+-parseInt(_0x17e1ac(0x9e))/0x2*(-parseInt(_0x17e1ac(0x83))/0x3)+-parseInt(_0x17e1ac(0x8f))/0x4*(-parseInt(_0x17e1ac(0x98))/0x5)+-parseInt(_0x17e1ac(0x7c))/0x6+-parseInt(_0x17e1ac(0x99))/0x7+parseInt(_0x17e1ac(0x77))/0x8+-parseInt(_0x17e1ac(0x7a))/0x9*(-parseInt(_0x17e1ac(0x90))/0xa);if(_0x43aacd===_0x492484)break;else _0x205352['push'](_0x205352['shift']());}catch(_0x5797d4){_0x205352['push'](_0x205352['shift']());}}}(a522_0x4878,0xe93d8));function a522_0x4878(){const _0x58de97=['__createBinding','1188jbwRaB','__importDefault','replaceAll','__importStar','includes','191566AozvOG','writable','prototype','status@broadcast','@sentry/node','error','phoneContacts','12Fdylxf','106840mzBfzC','writeFile','parse','resolve','__esModule','isArray','forEach','../BaileysServices/ShowBaileysService','283435rHWhYV','102634eeKFSH','g.us','create','getWbot','captureException','4244WnOHUt','hasOwnProperty','public','log','lodash','../../utils/logger','default','get','__setModuleDefault','contacts','O\x20arquivo\x20foi\x20criado!','7864912zNKtMU','logger','../../models/Contact','90kngXue','defineProperty','5632482HavydE','Could\x20not\x20get\x20whatsapp\x20contacts\x20from\x20phone.\x20Err:\x20','\x5ccontatos_antes.txt','../../helpers/GetDefaultWhatsApp','getOwnPropertyDescriptor','stringify'];a522_0x4878=function(){return _0x58de97;};return a522_0x4878();}var __createBinding=this&&this[a522_0x4a173b(0x82)]||(Object[a522_0x4a173b(0x9b)]?function(_0x2d35d9,_0x2d9117,_0x68a12c,_0x44b80a){const _0x1e2c01=a522_0x4a173b;if(_0x44b80a===undefined)_0x44b80a=_0x68a12c;var _0x5923bf=Object[_0x1e2c01(0x80)](_0x2d9117,_0x68a12c);(!_0x5923bf||(_0x1e2c01(0x73)in _0x5923bf?!_0x2d9117[_0x1e2c01(0x94)]:_0x5923bf[_0x1e2c01(0x89)]||_0x5923bf['configurable']))&&(_0x5923bf={'enumerable':!![],'get':function(){return _0x2d9117[_0x68a12c];}}),Object[_0x1e2c01(0x7b)](_0x2d35d9,_0x44b80a,_0x5923bf);}:function(_0x12a722,_0x51ca55,_0x55e2df,_0x5578af){if(_0x5578af===undefined)_0x5578af=_0x55e2df;_0x12a722[_0x5578af]=_0x51ca55[_0x55e2df];}),__setModuleDefault=this&&this[a522_0x4a173b(0x74)]||(Object['create']?function(_0x2b76c2,_0x500679){const _0x12dc7c=a522_0x4a173b;Object[_0x12dc7c(0x7b)](_0x2b76c2,'default',{'enumerable':!![],'value':_0x500679});}:function(_0x50e484,_0x382305){const _0x161064=a522_0x4a173b;_0x50e484[_0x161064(0x72)]=_0x382305;}),__importStar=this&&this[a522_0x4a173b(0x86)]||function(_0x5a1a2b){const _0x3cb4c7=a522_0x4a173b;if(_0x5a1a2b&&_0x5a1a2b['__esModule'])return _0x5a1a2b;var _0x4b472b={};if(_0x5a1a2b!=null){for(var _0x370000 in _0x5a1a2b)if(_0x370000!==_0x3cb4c7(0x72)&&Object[_0x3cb4c7(0x8a)][_0x3cb4c7(0x9f)]['call'](_0x5a1a2b,_0x370000))__createBinding(_0x4b472b,_0x5a1a2b,_0x370000);}return __setModuleDefault(_0x4b472b,_0x5a1a2b),_0x4b472b;},__importDefault=this&&this[a522_0x4a173b(0x84)]||function(_0x742904){const _0x54963d=a522_0x4a173b;return _0x742904&&_0x742904[_0x54963d(0x94)]?_0x742904:{'default':_0x742904};};Object['defineProperty'](exports,a522_0x4a173b(0x94),{'value':!![]});function a522_0x6c2c(_0x3b4e21,_0x45e82b){const _0x487864=a522_0x4878();return a522_0x6c2c=function(_0x6c2c8a,_0x459bb4){_0x6c2c8a=_0x6c2c8a-0x6f;let _0x2716cf=_0x487864[_0x6c2c8a];return _0x2716cf;},a522_0x6c2c(_0x3b4e21,_0x45e82b);}const Sentry=__importStar(require(a522_0x4a173b(0x8c))),GetDefaultWhatsApp_1=__importDefault(require(a522_0x4a173b(0x7f))),wbot_1=require('../../libs/wbot'),Contact_1=__importDefault(require(a522_0x4a173b(0x79))),logger_1=require(a522_0x4a173b(0x71)),ShowBaileysService_1=__importDefault(require(a522_0x4a173b(0x97))),CreateContactService_1=__importDefault(require('../ContactServices/CreateContactService')),lodash_1=require(a522_0x4a173b(0x70)),path_1=__importDefault(require('path')),fs=require('fs'),ImportContactsService=async _0x4ea5ed=>{const _0xf2aa81=a522_0x4a173b,_0x17bf07=await(0x0,GetDefaultWhatsApp_1[_0xf2aa81(0x72)])(_0x4ea5ed),_0x2a61ff=(0x0,wbot_1[_0xf2aa81(0x9c)])(_0x17bf07['id']);let _0x2062e7;try{const _0x4ff220=await(0x0,ShowBaileysService_1[_0xf2aa81(0x72)])(_0x2a61ff['id']);_0x2062e7=JSON[_0xf2aa81(0x92)](JSON[_0xf2aa81(0x81)](_0x4ff220[_0xf2aa81(0x75)]));const _0x3409e6=path_1[_0xf2aa81(0x72)][_0xf2aa81(0x93)](__dirname,'..','..','..','public'),_0x219ad9=_0x3409e6+_0xf2aa81(0x7e);fs[_0xf2aa81(0x91)](_0x219ad9,_0x2062e7,_0x96b850=>{const _0x7a61e4=_0xf2aa81;if(_0x96b850)throw _0x96b850;console[_0x7a61e4(0x6f)]('O\x20arquivo\x20foi\x20criado!');}),_0x2062e7=_0x2062e7[_0xf2aa81(0x85)]('\x27',''),_0x2062e7=_0x2062e7['replaceAll'](/\\"/g,''),_0x2062e7=_0x2062e7[_0xf2aa81(0x85)](/\//g,'\x20'),_0x2062e7=_0x2062e7[_0xf2aa81(0x85)](/\\/g,''),_0x2062e7=_0x2062e7[_0xf2aa81(0x85)]('\x22\x22','\x22'),_0x2062e7=_0x2062e7[_0xf2aa81(0x85)](/""""""/g,''),_0x2062e7=_0x2062e7[_0xf2aa81(0x85)](/""""""""""""/g,'');}catch(_0x5306e8){Sentry[_0xf2aa81(0x9d)](_0x5306e8),logger_1[_0xf2aa81(0x78)][_0xf2aa81(0x8d)](_0xf2aa81(0x7d)+_0x5306e8);}const _0x22852d=path_1[_0xf2aa81(0x72)][_0xf2aa81(0x93)](__dirname,'..','..','..',_0xf2aa81(0xa0)),_0x5a71c9=_0x22852d+'\x5ccontatos_depois.txt';fs[_0xf2aa81(0x91)](_0x5a71c9,_0x2062e7,_0x27345a=>{const _0x4b34c8=_0xf2aa81;if(_0x27345a)throw _0x27345a;console['log'](_0x4b34c8(0x76));}),console['log'](_0xf2aa81(0x8e),_0x2062e7);const _0xb9dbfa=(0x0,lodash_1['isString'])(_0x2062e7)?JSON['parse'](_0x2062e7):_0x2062e7;(0x0,lodash_1[_0xf2aa81(0x95)])(_0xb9dbfa)&&_0xb9dbfa[_0xf2aa81(0x96)](async({id:_0x4270e1,name:_0x4c773d,notify:_0x3ef2bf})=>{const _0x2419e3=_0xf2aa81;if(_0x4270e1===_0x2419e3(0x8b)||_0x4270e1[_0x2419e3(0x87)](_0x2419e3(0x9a))===_0x2419e3(0x9a))return;const _0x20b720=_0x4270e1['replace'](/\D/g,''),_0x541091=await Contact_1['default']['findOne']({'where':{'number':_0x20b720,'companyId':_0x4ea5ed}});if(!_0x541091)try{await(0x0,CreateContactService_1[_0x2419e3(0x72)])({'number':_0x20b720,'name':_0x4c773d||_0x3ef2bf,'companyId':_0x4ea5ed});}catch(_0x3612d2){Sentry['captureException'](_0x3612d2),console['log'](_0x3612d2),logger_1[_0x2419e3(0x78)]['warn']('Could\x20not\x20get\x20whatsapp\x20contacts\x20from\x20phone.\x20Err:\x20'+_0x3612d2);}});};exports[a522_0x4a173b(0x72)]=ImportContactsService;