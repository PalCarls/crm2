'use strict';function a558_0x3807(){const _0x10ac79=['5916YRkGxu','warn','name','stringify','forEach','Failed\x20to\x20write\x20contacts\x20to\x20file:\x20','log','10nGANGi','status@broadcast','../BaileysServices/ShowBaileysService','findOne','defineProperty','754422BVofqg','2852cItlLp','includes','../ContactServices/CreateContactService','get','7kbBqPg','public','15908pqmekF','__esModule','create','save','../../utils/logger','691304ZoCUTU','configurable','hasOwnProperty','resolve','logger','105283zIiglO','call','__importDefault','parse','contatos_antes.txt','__createBinding','259821DWCRWK','../../libs/wbot','default','isArray','writeFile','isString','g.us','writable','@sentry/node','O\x20arquivo\x20contatos_antes.txt\x20foi\x20criado!','getWbot','2178OyLBeX','20fnfeOw','captureException','replace','prototype','111hYdxaO','O\x20arquivo\x20contatos_depois.txt\x20foi\x20criado!','Could\x20not\x20get\x20whatsapp\x20contacts\x20from\x20phone.\x20Err:\x20','contatos_depois.txt','contacts'];a558_0x3807=function(){return _0x10ac79;};return a558_0x3807();}const a558_0x21aac8=a558_0x4a80;(function(_0x206950,_0x20f091){const _0x52a83b=a558_0x4a80,_0x328281=_0x206950();while(!![]){try{const _0x3d2bc4=parseInt(_0x52a83b(0x120))/0x1+-parseInt(_0x52a83b(0x110))/0x2+-parseInt(_0x52a83b(0xfe))/0x3*(-parseInt(_0x52a83b(0x116))/0x4)+parseInt(_0x52a83b(0x10a))/0x5*(-parseInt(_0x52a83b(0x10f))/0x6)+-parseInt(_0x52a83b(0x114))/0x7*(-parseInt(_0x52a83b(0x11b))/0x8)+-parseInt(_0x52a83b(0xee))/0x9*(parseInt(_0x52a83b(0xfa))/0xa)+-parseInt(_0x52a83b(0xf9))/0xb*(-parseInt(_0x52a83b(0x103))/0xc);if(_0x3d2bc4===_0x20f091)break;else _0x328281['push'](_0x328281['shift']());}catch(_0x1e4b9a){_0x328281['push'](_0x328281['shift']());}}}(a558_0x3807,0x1eb7d));var __createBinding=this&&this[a558_0x21aac8(0xed)]||(Object[a558_0x21aac8(0x118)]?function(_0xbdec6b,_0x4e71f3,_0x2b54f0,_0x235a70){const _0x263add=a558_0x21aac8;if(_0x235a70===undefined)_0x235a70=_0x2b54f0;var _0x122fc6=Object['getOwnPropertyDescriptor'](_0x4e71f3,_0x2b54f0);(!_0x122fc6||(_0x263add(0x113)in _0x122fc6?!_0x4e71f3['__esModule']:_0x122fc6[_0x263add(0xf5)]||_0x122fc6[_0x263add(0x11c)]))&&(_0x122fc6={'enumerable':!![],'get':function(){return _0x4e71f3[_0x2b54f0];}}),Object[_0x263add(0x10e)](_0xbdec6b,_0x235a70,_0x122fc6);}:function(_0x1db021,_0x4083b7,_0x2b5301,_0x4c84f4){if(_0x4c84f4===undefined)_0x4c84f4=_0x2b5301;_0x1db021[_0x4c84f4]=_0x4083b7[_0x2b5301];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a558_0x21aac8(0x118)]?function(_0x3507fd,_0x5d7337){const _0x465680=a558_0x21aac8;Object[_0x465680(0x10e)](_0x3507fd,_0x465680(0xf0),{'enumerable':!![],'value':_0x5d7337});}:function(_0x10b566,_0x231fb1){const _0x2fc04c=a558_0x21aac8;_0x10b566[_0x2fc04c(0xf0)]=_0x231fb1;}),__importStar=this&&this['__importStar']||function(_0x542a0c){const _0x52a2ec=a558_0x21aac8;if(_0x542a0c&&_0x542a0c['__esModule'])return _0x542a0c;var _0x3723f5={};if(_0x542a0c!=null){for(var _0x456688 in _0x542a0c)if(_0x456688!=='default'&&Object[_0x52a2ec(0xfd)][_0x52a2ec(0x11d)][_0x52a2ec(0xe9)](_0x542a0c,_0x456688))__createBinding(_0x3723f5,_0x542a0c,_0x456688);}return __setModuleDefault(_0x3723f5,_0x542a0c),_0x3723f5;},__importDefault=this&&this[a558_0x21aac8(0xea)]||function(_0x36221f){const _0x31b2e6=a558_0x21aac8;return _0x36221f&&_0x36221f[_0x31b2e6(0x117)]?_0x36221f:{'default':_0x36221f};};function a558_0x4a80(_0x31128b,_0x7a5b24){const _0x3807ca=a558_0x3807();return a558_0x4a80=function(_0x4a8068,_0x490ffd){_0x4a8068=_0x4a8068-0xe9;let _0x1092f1=_0x3807ca[_0x4a8068];return _0x1092f1;},a558_0x4a80(_0x31128b,_0x7a5b24);}Object['defineProperty'](exports,'__esModule',{'value':!![]});const Sentry=__importStar(require(a558_0x21aac8(0xf6))),GetDefaultWhatsApp_1=__importDefault(require('../../helpers/GetDefaultWhatsApp')),wbot_1=require(a558_0x21aac8(0xef)),Contact_1=__importDefault(require('../../models/Contact')),logger_1=require(a558_0x21aac8(0x11a)),ShowBaileysService_1=__importDefault(require(a558_0x21aac8(0x10c))),CreateContactService_1=__importDefault(require(a558_0x21aac8(0x112))),lodash_1=require('lodash'),path_1=__importDefault(require('path')),fs_1=__importDefault(require('fs')),ImportContactsService=async _0x451905=>{const _0x5362e5=a558_0x21aac8,_0x557736=await(0x0,GetDefaultWhatsApp_1[_0x5362e5(0xf0)])(_0x451905),_0x2c1a3e=(0x0,wbot_1[_0x5362e5(0xf8)])(_0x557736['id']);let _0x4992b9;try{const _0x106bcd=await(0x0,ShowBaileysService_1[_0x5362e5(0xf0)])(_0x2c1a3e['id']);_0x4992b9=JSON[_0x5362e5(0xeb)](JSON[_0x5362e5(0x106)](_0x106bcd[_0x5362e5(0x102)]));const _0x9efd6f=path_1[_0x5362e5(0xf0)]['resolve'](__dirname,'..','..','..',_0x5362e5(0x115)),_0x2d673b=path_1[_0x5362e5(0xf0)]['join'](_0x9efd6f,_0x5362e5(0xec));fs_1[_0x5362e5(0xf0)][_0x5362e5(0xf2)](_0x2d673b,JSON['stringify'](_0x4992b9,null,0x2),_0x3c8e21=>{const _0x24f73c=_0x5362e5;if(_0x3c8e21){logger_1['logger']['error'](_0x24f73c(0x108)+_0x3c8e21);throw _0x3c8e21;}console['log'](_0x24f73c(0xf7));});}catch(_0x50bc49){Sentry[_0x5362e5(0xfb)](_0x50bc49),logger_1[_0x5362e5(0x11f)]['error'](_0x5362e5(0x100)+_0x50bc49);}const _0x2d1665=path_1['default'][_0x5362e5(0x11e)](__dirname,'..','..','..','public'),_0x4e55a8=path_1['default']['join'](_0x2d1665,_0x5362e5(0x101));fs_1[_0x5362e5(0xf0)]['writeFile'](_0x4e55a8,JSON[_0x5362e5(0x106)](_0x4992b9,null,0x2),_0x4d1cb=>{const _0x3fba39=_0x5362e5;if(_0x4d1cb){logger_1[_0x3fba39(0x11f)]['error'](_0x3fba39(0x108)+_0x4d1cb);throw _0x4d1cb;}console[_0x3fba39(0x109)](_0x3fba39(0xff));});const _0x750e08=(0x0,lodash_1[_0x5362e5(0xf3)])(_0x4992b9)?JSON[_0x5362e5(0xeb)](_0x4992b9):_0x4992b9;(0x0,lodash_1[_0x5362e5(0xf1)])(_0x750e08)&&_0x750e08[_0x5362e5(0x107)](async({id:_0x187f1e,name:_0x59e805,notify:_0x5de86f})=>{const _0x53f4bc=_0x5362e5;if(_0x187f1e===_0x53f4bc(0x10b)||_0x187f1e[_0x53f4bc(0x111)](_0x53f4bc(0xf4)))return;const _0x292954=_0x187f1e[_0x53f4bc(0xfc)](/\D/g,''),_0x3aa7c1=await Contact_1[_0x53f4bc(0xf0)][_0x53f4bc(0x10d)]({'where':{'number':_0x292954,'companyId':_0x451905}});if(_0x3aa7c1)_0x3aa7c1[_0x53f4bc(0x105)]=_0x59e805||_0x5de86f,await _0x3aa7c1[_0x53f4bc(0x119)]();else try{await(0x0,CreateContactService_1[_0x53f4bc(0xf0)])({'number':_0x292954,'name':_0x59e805||_0x5de86f,'companyId':_0x451905});}catch(_0x31dc18){Sentry['captureException'](_0x31dc18),logger_1[_0x53f4bc(0x11f)][_0x53f4bc(0x104)](_0x53f4bc(0x100)+_0x31dc18);}});};exports[a558_0x21aac8(0xf0)]=ImportContactsService;