'use strict';const a533_0x51cbdb=a533_0x5430;(function(_0x1bb621,_0x5b870a){const _0xf9c7f1=a533_0x5430,_0x40e477=_0x1bb621();while(!![]){try{const _0x427cb6=parseInt(_0xf9c7f1(0x16a))/0x1*(parseInt(_0xf9c7f1(0x172))/0x2)+-parseInt(_0xf9c7f1(0x17c))/0x3*(-parseInt(_0xf9c7f1(0x180))/0x4)+parseInt(_0xf9c7f1(0x16e))/0x5*(-parseInt(_0xf9c7f1(0x170))/0x6)+parseInt(_0xf9c7f1(0x186))/0x7+parseInt(_0xf9c7f1(0x17a))/0x8*(parseInt(_0xf9c7f1(0x187))/0x9)+parseInt(_0xf9c7f1(0x169))/0xa+parseInt(_0xf9c7f1(0x185))/0xb*(-parseInt(_0xf9c7f1(0x171))/0xc);if(_0x427cb6===_0x5b870a)break;else _0x40e477['push'](_0x40e477['shift']());}catch(_0x1adb0c){_0x40e477['push'](_0x40e477['shift']());}}}(a533_0x10d3,0x9291a));function a533_0x10d3(){const _0x392fd7=['jsonContent','SessionsClient','projectName','5uVRyeg','__esModule','6791604ukjjIs','324bXjGAi','1046632jkQtqM','@google-cloud/dialogflow','path','default','__importDefault','log','Openig\x20new\x20dialogflow\x20session\x20#','set','8tdHbQF','has','95739CscvBD','createDialogflowSession','\x20in\x20\x27','ID:','52SIEwzE','defineProperty','writeFileSync','../../utils/logger','tmpdir','763114oSptoJ','7147483LDdbVy','5615091XnFquD','createDialogflowSessionWithModel','10222250kTnsTr','1eclUPX'];a533_0x10d3=function(){return _0x392fd7;};return a533_0x10d3();}function a533_0x5430(_0x53e3ef,_0x2a6c7f){const _0x10d367=a533_0x10d3();return a533_0x5430=function(_0x54304b,_0x25b185){_0x54304b=_0x54304b-0x168;let _0xb724a3=_0x10d367[_0x54304b];return _0xb724a3;},a533_0x5430(_0x53e3ef,_0x2a6c7f);}var __importDefault=this&&this[a533_0x51cbdb(0x176)]||function(_0x3c7d4e){const _0xddef2=a533_0x51cbdb;return _0x3c7d4e&&_0x3c7d4e[_0xddef2(0x16f)]?_0x3c7d4e:{'default':_0x3c7d4e};};Object[a533_0x51cbdb(0x181)](exports,a533_0x51cbdb(0x16f),{'value':!![]}),exports['createDialogflowSessionWithModel']=exports[a533_0x51cbdb(0x17d)]=void 0x0;const dialogflow_1=require(a533_0x51cbdb(0x173)),path_1=__importDefault(require(a533_0x51cbdb(0x174))),fs_1=__importDefault(require('fs')),os_1=__importDefault(require('os')),logger_1=require(a533_0x51cbdb(0x183)),sessions=new Map(),createDialogflowSession=async(_0x144c76,_0x1fad76,_0x20c47b)=>{const _0x173af4=a533_0x51cbdb;if(sessions[_0x173af4(0x17b)](_0x144c76))return sessions['get'](_0x144c76);const _0x5a6144=path_1['default']['join'](os_1[_0x173af4(0x175)][_0x173af4(0x184)](),'whaticket_'+_0x144c76+'.json');logger_1['logger']['info'](_0x173af4(0x178)+_0x1fad76+_0x173af4(0x17e)+_0x5a6144+'\x27'),await fs_1['default'][_0x173af4(0x182)](_0x5a6144,_0x20c47b);const _0x5110a3=new dialogflow_1[(_0x173af4(0x16c))]({'keyFilename':_0x5a6144});return sessions[_0x173af4(0x179)](_0x144c76,_0x5110a3),_0x5110a3;};exports['createDialogflowSession']=createDialogflowSession;const createDialogflowSessionWithModel=async _0x4ae13c=>{const _0x42327b=a533_0x51cbdb;return console[_0x42327b(0x177)](_0x42327b(0x17f)+_0x4ae13c['id']+'\x20name:'+_0x4ae13c[_0x42327b(0x16d)]+'\x20json:'+_0x4ae13c['jsonContent']),createDialogflowSession(_0x4ae13c['id'],_0x4ae13c[_0x42327b(0x16d)],_0x4ae13c[_0x42327b(0x16b)]);};exports[a533_0x51cbdb(0x168)]=createDialogflowSessionWithModel;