'use strict';const a0_0x1e804c=a0_0x5351;function a0_0x567c(){const _0x48166e=['default','20YvkgPO','call','4Shvsgl','29lfMejD','https://pps.whatsapp.net/','getOwnPropertyDescriptor','create','set','./errors/AppError','Handlers','__setModuleDefault','4016jOvzIB','urlencoded','configurable','status','defineProperty','messageQueue','requestHandler','42536nPZPPk','2170869rfMAin','6376700qUwJtw','__createBinding','Internal\x20server\x20error','10TBWhYC','errorHandler','__esModule','__importStar','cookie-parser','./bootstrap','sendScheduledMessages','directory','13226748RlRFiE','@sentry/node','env','FRONTEND_URL','express','./utils/logger','./database','body-parser','use','message','5mb','hasOwnProperty','init','static','logger','873buOfxO','get','4957449ylhLVc','./routes','./queues','cors','1458882nRrIeb','/public','json'];a0_0x567c=function(){return _0x48166e;};return a0_0x567c();}(function(_0x55cd61,_0x4c97ca){const _0x364cfc=a0_0x5351,_0xd560f2=_0x55cd61();while(!![]){try{const _0x1f6bc1=parseInt(_0x364cfc(0xc5))/0x1*(parseInt(_0x364cfc(0x95))/0x2)+-parseInt(_0x364cfc(0x9d))/0x3*(-parseInt(_0x364cfc(0xc4))/0x4)+parseInt(_0x364cfc(0xc2))/0x5*(-parseInt(_0x364cfc(0xbe))/0x6)+parseInt(_0x364cfc(0xba))/0x7+-parseInt(_0x364cfc(0x9c))/0x8*(-parseInt(_0x364cfc(0xb8))/0x9)+parseInt(_0x364cfc(0xa1))/0xa*(parseInt(_0x364cfc(0x9e))/0xb)+-parseInt(_0x364cfc(0xa9))/0xc;if(_0x1f6bc1===_0x4c97ca)break;else _0xd560f2['push'](_0xd560f2['shift']());}catch(_0x1fc73b){_0xd560f2['push'](_0xd560f2['shift']());}}}(a0_0x567c,0x7cae6));var __createBinding=this&&this[a0_0x1e804c(0x9f)]||(Object['create']?function(_0x44a376,_0x2be4c8,_0x6ef833,_0x38a5b3){const _0x179286=a0_0x1e804c;if(_0x38a5b3===undefined)_0x38a5b3=_0x6ef833;var _0x493c4c=Object[_0x179286(0xc7)](_0x2be4c8,_0x6ef833);(!_0x493c4c||(_0x179286(0xb9)in _0x493c4c?!_0x2be4c8[_0x179286(0xa3)]:_0x493c4c['writable']||_0x493c4c[_0x179286(0x97)]))&&(_0x493c4c={'enumerable':!![],'get':function(){return _0x2be4c8[_0x6ef833];}}),Object[_0x179286(0x99)](_0x44a376,_0x38a5b3,_0x493c4c);}:function(_0x2a53b9,_0xa2fbd9,_0x38f771,_0x25c8a2){if(_0x25c8a2===undefined)_0x25c8a2=_0x38f771;_0x2a53b9[_0x25c8a2]=_0xa2fbd9[_0x38f771];}),__setModuleDefault=this&&this[a0_0x1e804c(0x94)]||(Object[a0_0x1e804c(0xc8)]?function(_0x56567e,_0x1b8dbf){const _0x5be3b0=a0_0x1e804c;Object[_0x5be3b0(0x99)](_0x56567e,_0x5be3b0(0xc1),{'enumerable':!![],'value':_0x1b8dbf});}:function(_0xa66e4f,_0x5789a7){const _0x1d3553=a0_0x1e804c;_0xa66e4f[_0x1d3553(0xc1)]=_0x5789a7;}),__importStar=this&&this[a0_0x1e804c(0xa4)]||function(_0x467304){const _0x47e5b6=a0_0x1e804c;if(_0x467304&&_0x467304[_0x47e5b6(0xa3)])return _0x467304;var _0x286e58={};if(_0x467304!=null){for(var _0x435952 in _0x467304)if(_0x435952!=='default'&&Object['prototype'][_0x47e5b6(0xb4)][_0x47e5b6(0xc3)](_0x467304,_0x435952))__createBinding(_0x286e58,_0x467304,_0x435952);}return __setModuleDefault(_0x286e58,_0x467304),_0x286e58;},__importDefault=this&&this['__importDefault']||function(_0x1e1b14){const _0x2611e1=a0_0x1e804c;return _0x1e1b14&&_0x1e1b14[_0x2611e1(0xa3)]?_0x1e1b14:{'default':_0x1e1b14};};Object[a0_0x1e804c(0x99)](exports,a0_0x1e804c(0xa3),{'value':!![]}),require(a0_0x1e804c(0xa6)),require('reflect-metadata'),require('express-async-errors');const express_1=__importDefault(require(a0_0x1e804c(0xad))),cors_1=__importDefault(require(a0_0x1e804c(0xbd))),cookie_parser_1=__importDefault(require(a0_0x1e804c(0xa5))),Sentry=__importStar(require(a0_0x1e804c(0xaa)));require(a0_0x1e804c(0xaf));const upload_1=__importDefault(require('./config/upload')),AppError_1=__importDefault(require(a0_0x1e804c(0xca))),routes_1=__importDefault(require(a0_0x1e804c(0xbb))),logger_1=require(a0_0x1e804c(0xae)),queues_1=require(a0_0x1e804c(0xbc));function a0_0x5351(_0x192323,_0x46156c){const _0x567ca6=a0_0x567c();return a0_0x5351=function(_0x535152,_0x23be09){_0x535152=_0x535152-0x93;let _0x5a670d=_0x567ca6[_0x535152];return _0x5a670d;},a0_0x5351(_0x192323,_0x46156c);}Sentry[a0_0x1e804c(0xb5)]({'dsn':process[a0_0x1e804c(0xab)]['SENTRY_DSN']});const app=(0x0,express_1[a0_0x1e804c(0xc1)])();app[a0_0x1e804c(0xc9)]('queues',{'messageQueue':queues_1[a0_0x1e804c(0x9a)],'sendScheduledMessages':queues_1[a0_0x1e804c(0xa7)]});const allowedOrigins=[process[a0_0x1e804c(0xab)][a0_0x1e804c(0xac)],a0_0x1e804c(0xc6)],bodyParser=require(a0_0x1e804c(0xb0));app['use'](bodyParser[a0_0x1e804c(0xc0)]({'limit':a0_0x1e804c(0xb3)})),app[a0_0x1e804c(0xb1)](bodyParser[a0_0x1e804c(0x96)]({'limit':a0_0x1e804c(0xb3),'extended':!![]})),app[a0_0x1e804c(0xb1)]((0x0,cors_1[a0_0x1e804c(0xc1)])({'credentials':!![],'origin':allowedOrigins})),app[a0_0x1e804c(0xb1)]((0x0,cookie_parser_1[a0_0x1e804c(0xc1)])()),app['use'](express_1[a0_0x1e804c(0xc1)][a0_0x1e804c(0xc0)]()),app['use'](Sentry[a0_0x1e804c(0x93)][a0_0x1e804c(0x9b)]()),app['use'](a0_0x1e804c(0xbf),express_1[a0_0x1e804c(0xc1)][a0_0x1e804c(0xb6)](upload_1[a0_0x1e804c(0xc1)][a0_0x1e804c(0xa8)])),app[a0_0x1e804c(0xb1)](routes_1['default']),app[a0_0x1e804c(0xb1)](Sentry['Handlers'][a0_0x1e804c(0xa2)]()),app[a0_0x1e804c(0xb1)](async(_0xb13151,_0x11e8f9,_0x3e14dd,_0x2ffaeb)=>{const _0xe7518a=a0_0x1e804c;if(_0xb13151 instanceof AppError_1[_0xe7518a(0xc1)])return logger_1[_0xe7518a(0xb7)]['warn'](_0xb13151),_0x3e14dd['status'](_0xb13151['statusCode'])[_0xe7518a(0xc0)]({'error':_0xb13151[_0xe7518a(0xb2)]});return logger_1[_0xe7518a(0xb7)]['error'](_0xb13151),_0x3e14dd[_0xe7518a(0x98)](0x1f4)[_0xe7518a(0xc0)]({'error':_0xe7518a(0xa0)});}),exports[a0_0x1e804c(0xc1)]=app;