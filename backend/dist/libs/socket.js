'use strict';const a293_0x32c552=a293_0x119e;(function(_0x250b12,_0x1944fa){const _0x3a028c=a293_0x119e,_0x324e10=_0x250b12();while(!![]){try{const _0x58b260=-parseInt(_0x3a028c(0xcb))/0x1+parseInt(_0x3a028c(0xd2))/0x2*(parseInt(_0x3a028c(0xcf))/0x3)+parseInt(_0x3a028c(0xcd))/0x4*(parseInt(_0x3a028c(0xc7))/0x5)+-parseInt(_0x3a028c(0xd1))/0x6+parseInt(_0x3a028c(0xcc))/0x7+parseInt(_0x3a028c(0xbe))/0x8*(parseInt(_0x3a028c(0xd8))/0x9)+parseInt(_0x3a028c(0xce))/0xa*(parseInt(_0x3a028c(0xd4))/0xb);if(_0x58b260===_0x1944fa)break;else _0x324e10['push'](_0x324e10['shift']());}catch(_0x574c77){_0x324e10['push'](_0x324e10['shift']());}}}(a293_0x47b6,0x26000));function a293_0x47b6(){const _0xffc67a=['join','handshake','__esModule','297KyTwGi','env','socket.io','Socket\x20IO\x20not\x20initialized','query','Server','__importDefault','18296hXpJpJ','UserConnection','userMonitor','joinTickets','../queues/userMonitor','default','FRONTEND_URL','connection','initIO','969685MmtpuQ','joinNotification','notification','../errors/AppError','286612jLaybI','443562BUCikP','4lmRJfd','10MrOxyh','3ZOxENP','getIO','1812606ewUQao','162662OxMNWt','joinChatBox','3632816vSTRHo'];a293_0x47b6=function(){return _0xffc67a;};return a293_0x47b6();}var __importDefault=this&&this[a293_0x32c552(0xbd)]||function(_0x75e1fb){const _0x4c602f=a293_0x32c552;return _0x75e1fb&&_0x75e1fb[_0x4c602f(0xd7)]?_0x75e1fb:{'default':_0x75e1fb};};function a293_0x119e(_0x40fb4c,_0x1a587a){const _0x47b619=a293_0x47b6();return a293_0x119e=function(_0x119ef0,_0xaa3fd2){_0x119ef0=_0x119ef0-0xbd;let _0x2dca13=_0x47b619[_0x119ef0];return _0x2dca13;},a293_0x119e(_0x40fb4c,_0x1a587a);}Object['defineProperty'](exports,a293_0x32c552(0xd7),{'value':!![]}),exports['getIO']=exports[a293_0x32c552(0xc6)]=void 0x0;const socket_io_1=require(a293_0x32c552(0xda)),AppError_1=__importDefault(require(a293_0x32c552(0xca))),userMonitor_1=require(a293_0x32c552(0xc2));let io;const initIO=_0x38faf7=>{const _0x19d05c=a293_0x32c552;return io=new socket_io_1[(_0x19d05c(0xdd))](_0x38faf7,{'cors':{'origin':process[_0x19d05c(0xd9)][_0x19d05c(0xc4)]}}),io['on'](_0x19d05c(0xc5),async _0x11919e=>{const _0x290466=_0x19d05c,{userId:_0x4697a2}=_0x11919e[_0x290466(0xd6)][_0x290466(0xdc)];_0x11919e['on'](_0x290466(0xd3),_0x307d84=>{const _0x3d62ac=_0x290466;_0x11919e[_0x3d62ac(0xd5)](_0x307d84);}),_0x11919e['on'](_0x290466(0xc8),()=>{const _0x4d8643=_0x290466;_0x11919e['join'](_0x4d8643(0xc9));}),_0x11919e['on'](_0x290466(0xc1),_0x463103=>{_0x11919e['join'](_0x463103);}),userMonitor_1[_0x290466(0xc0)]['add'](_0x290466(0xbf),{'id':_0x4697a2},{'removeOnComplete':{'age':0x3c*0x3c,'count':0xa},'removeOnFail':{'age':0x3c*0x3c,'count':0xa}});}),io;};exports[a293_0x32c552(0xc6)]=initIO;const getIO=()=>{const _0x5a8cb7=a293_0x32c552;if(!io)throw new AppError_1[(_0x5a8cb7(0xc3))](_0x5a8cb7(0xdb));return io;};exports[a293_0x32c552(0xd0)]=getIO;