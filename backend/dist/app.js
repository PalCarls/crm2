'use strict';const a0_0x781921=a0_0x42a3;(function(_0xf55954,_0x167abb){const _0x233492=a0_0x42a3,_0x7f9c3f=_0xf55954();while(!![]){try{const _0x219586=parseInt(_0x233492(0xe0))/0x1+parseInt(_0x233492(0xdc))/0x2+-parseInt(_0x233492(0xe3))/0x3*(-parseInt(_0x233492(0xf5))/0x4)+parseInt(_0x233492(0x10d))/0x5*(parseInt(_0x233492(0x112))/0x6)+-parseInt(_0x233492(0xe6))/0x7*(-parseInt(_0x233492(0xfc))/0x8)+-parseInt(_0x233492(0x10b))/0x9+parseInt(_0x233492(0x108))/0xa*(-parseInt(_0x233492(0x105))/0xb);if(_0x219586===_0x167abb)break;else _0x7f9c3f['push'](_0x7f9c3f['shift']());}catch(_0x585816){_0x7f9c3f['push'](_0x7f9c3f['shift']());}}}(a0_0x337a,0xa79fd));var __createBinding=this&&this[a0_0x781921(0xdf)]||(Object[a0_0x781921(0xec)]?function(_0x3087f0,_0x158a9a,_0x138d2c,_0xcc0a17){const _0x15bd88=a0_0x781921;if(_0xcc0a17===undefined)_0xcc0a17=_0x138d2c;var _0xfed6fc=Object[_0x15bd88(0x100)](_0x158a9a,_0x138d2c);(!_0xfed6fc||(_0x15bd88(0xe4)in _0xfed6fc?!_0x158a9a[_0x15bd88(0x103)]:_0xfed6fc[_0x15bd88(0xe1)]||_0xfed6fc[_0x15bd88(0x106)]))&&(_0xfed6fc={'enumerable':!![],'get':function(){return _0x158a9a[_0x138d2c];}}),Object['defineProperty'](_0x3087f0,_0xcc0a17,_0xfed6fc);}:function(_0x310162,_0x26078a,_0x5eb8cb,_0x1be69a){if(_0x1be69a===undefined)_0x1be69a=_0x5eb8cb;_0x310162[_0x1be69a]=_0x26078a[_0x5eb8cb];}),__setModuleDefault=this&&this[a0_0x781921(0xf7)]||(Object['create']?function(_0x33faf9,_0x307b17){const _0x4819db=a0_0x781921;Object[_0x4819db(0xeb)](_0x33faf9,_0x4819db(0xf1),{'enumerable':!![],'value':_0x307b17});}:function(_0x329570,_0x1e9ad8){_0x329570['default']=_0x1e9ad8;}),__importStar=this&&this[a0_0x781921(0xdd)]||function(_0x1014a3){const _0x3129f1=a0_0x781921;if(_0x1014a3&&_0x1014a3['__esModule'])return _0x1014a3;var _0x200713={};if(_0x1014a3!=null){for(var _0x241091 in _0x1014a3)if(_0x241091!=='default'&&Object[_0x3129f1(0xf4)][_0x3129f1(0xff)][_0x3129f1(0xfe)](_0x1014a3,_0x241091))__createBinding(_0x200713,_0x1014a3,_0x241091);}return __setModuleDefault(_0x200713,_0x1014a3),_0x200713;},__importDefault=this&&this['__importDefault']||function(_0x3d9cbf){return _0x3d9cbf&&_0x3d9cbf['__esModule']?_0x3d9cbf:{'default':_0x3d9cbf};};Object[a0_0x781921(0xeb)](exports,'__esModule',{'value':!![]}),require(a0_0x781921(0x104)),require(a0_0x781921(0x113)),require(a0_0x781921(0xfb));function a0_0x337a(){const _0x259c20=['writable','./queues','3rdTanu','get','@sentry/node','7fMXMPe','sendScheduledMessages','status','cors','directory','defineProperty','create','use','./database','messageQueue','logger','default','queues','SENTRY_DSN','prototype','3944360YirDpc','requestHandler','__setModuleDefault','set','FRONTEND_URL','/public','express-async-errors','4498328ERPzrT','env','call','hasOwnProperty','getOwnPropertyDescriptor','https://pps.whatsapp.net/','./config/upload','__esModule','./bootstrap','107646FWcBom','configurable','Handlers','2810wFOfvt','./utils/logger','errorHandler','7045911hQeIfh','message','25xNAtpq','./routes','json','cookie-parser','error','613974wIxPNI','reflect-metadata','2068114FrAfDW','__importStar','init','__createBinding','1125251rMHifC'];a0_0x337a=function(){return _0x259c20;};return a0_0x337a();}const express_1=__importDefault(require('express')),cors_1=__importDefault(require(a0_0x781921(0xe9))),cookie_parser_1=__importDefault(require(a0_0x781921(0x110))),Sentry=__importStar(require(a0_0x781921(0xe5)));require(a0_0x781921(0xee));const upload_1=__importDefault(require(a0_0x781921(0x102))),AppError_1=__importDefault(require('./errors/AppError')),routes_1=__importDefault(require(a0_0x781921(0x10e))),logger_1=require(a0_0x781921(0x109)),queues_1=require(a0_0x781921(0xe2));Sentry[a0_0x781921(0xde)]({'dsn':process[a0_0x781921(0xfd)][a0_0x781921(0xf3)]});const app=(0x0,express_1[a0_0x781921(0xf1)])();app[a0_0x781921(0xf8)](a0_0x781921(0xf2),{'messageQueue':queues_1[a0_0x781921(0xef)],'sendScheduledMessages':queues_1[a0_0x781921(0xe7)]});const allowedOrigins=[process[a0_0x781921(0xfd)][a0_0x781921(0xf9)],a0_0x781921(0x101)];function a0_0x42a3(_0x15a52d,_0x4ce1e8){const _0x337ac8=a0_0x337a();return a0_0x42a3=function(_0x42a37b,_0x10ceab){_0x42a37b=_0x42a37b-0xdc;let _0x5136d0=_0x337ac8[_0x42a37b];return _0x5136d0;},a0_0x42a3(_0x15a52d,_0x4ce1e8);}app['use']((0x0,cors_1[a0_0x781921(0xf1)])({'credentials':!![],'origin':allowedOrigins})),app[a0_0x781921(0xed)]((0x0,cookie_parser_1[a0_0x781921(0xf1)])()),app[a0_0x781921(0xed)](express_1['default'][a0_0x781921(0x10f)]()),app[a0_0x781921(0xed)](Sentry[a0_0x781921(0x107)][a0_0x781921(0xf6)]()),app[a0_0x781921(0xed)](a0_0x781921(0xfa),express_1['default']['static'](upload_1[a0_0x781921(0xf1)][a0_0x781921(0xea)])),app[a0_0x781921(0xed)](routes_1[a0_0x781921(0xf1)]),app[a0_0x781921(0xed)](Sentry[a0_0x781921(0x107)][a0_0x781921(0x10a)]()),app[a0_0x781921(0xed)](async(_0x119fd2,_0x252767,_0x5d393a,_0x304521)=>{const _0x285678=a0_0x781921;if(_0x119fd2 instanceof AppError_1['default'])return logger_1[_0x285678(0xf0)]['warn'](_0x119fd2),_0x5d393a[_0x285678(0xe8)](_0x119fd2['statusCode'])[_0x285678(0x10f)]({'error':_0x119fd2[_0x285678(0x10c)]});return logger_1[_0x285678(0xf0)][_0x285678(0x111)](_0x119fd2),_0x5d393a[_0x285678(0xe8)](0x1f4)['json']({'error':'Internal\x20server\x20error'});}),exports[a0_0x781921(0xf1)]=app;