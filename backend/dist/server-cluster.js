'use strict';const a393_0x1a35e6=a393_0x43a1;(function(_0x54625d,_0x379f5b){const _0x2ed77e=a393_0x43a1,_0x5acb59=_0x54625d();while(!![]){try{const _0x37e5d1=-parseInt(_0x2ed77e(0x114))/0x1*(-parseInt(_0x2ed77e(0x13a))/0x2)+parseInt(_0x2ed77e(0x12d))/0x3+-parseInt(_0x2ed77e(0x115))/0x4+parseInt(_0x2ed77e(0x130))/0x5+parseInt(_0x2ed77e(0x121))/0x6+parseInt(_0x2ed77e(0x123))/0x7*(parseInt(_0x2ed77e(0x131))/0x8)+-parseInt(_0x2ed77e(0x11d))/0x9;if(_0x37e5d1===_0x379f5b)break;else _0x5acb59['push'](_0x5acb59['shift']());}catch(_0x482024){_0x5acb59['push'](_0x5acb59['shift']());}}}(a393_0x3436,0x8c63d));var __importDefault=this&&this['__importDefault']||function(_0x585788){return _0x585788&&_0x585788['__esModule']?_0x585788:{'default':_0x585788};};Object[a393_0x1a35e6(0x11a)](exports,a393_0x1a35e6(0x112),{'value':!![]});const http_graceful_shutdown_1=__importDefault(require(a393_0x1a35e6(0x135))),socket_1=require(a393_0x1a35e6(0x11c)),logger_1=require(a393_0x1a35e6(0x12a)),StartAllWhatsAppsSessions_1=require(a393_0x1a35e6(0x138)),Company_1=__importDefault(require(a393_0x1a35e6(0x119))),queues_1=require(a393_0x1a35e6(0x134)),express=require(a393_0x1a35e6(0x124)),os=require('os'),cluster=require('cluster'),PORT=process[a393_0x1a35e6(0x13f)][a393_0x1a35e6(0x120)]||0xfa0,clusterWorkerSize=os[a393_0x1a35e6(0x133)]()[a393_0x1a35e6(0x132)];console['log'](a393_0x1a35e6(0x122),clusterWorkerSize);function a393_0x43a1(_0xd07a2,_0x57ac9d){const _0x3436fb=a393_0x3436();return a393_0x43a1=function(_0x43a19d,_0x1c7617){_0x43a19d=_0x43a19d-0x110;let _0x14c88b=_0x3436fb[_0x43a19d];return _0x14c88b;},a393_0x43a1(_0xd07a2,_0x57ac9d);}function a393_0x3436(){const _0x52dcf7=['env','toUTCString','then','default','__esModule','fork','5ZznDsE','1007936QYDJDq','\x20uncaughtException:','pid','\x20has\x20exitted.','./models/Company','defineProperty','isMaster','./libs/socket','28817271eiKDaq','\x20and\x20worker\x20','listen','PORT','4539144CVciQi','clusterWorkerSize','7082208dPmfAF','express','uncaughtException','\x20with\x20the\x20single\x20worker\x20','message','error','findAll','./utils/logger','logger','\x20unhandledRejection:','3257661qDfENR','log','Worker','559950lwqxAV','8FQVcxB','length','cpus','./queues','http-graceful-shutdown','exit','startQueueProcess','./services/WbotServices/StartAllWhatsAppsSessions','all','425118WvVrPc','unhandledRejection','StartAllWhatsAppsSessions','map','Express\x20server\x20listening\x20on\x20port\x20'];a393_0x3436=function(){return _0x52dcf7;};return a393_0x3436();}if(clusterWorkerSize>0x1){if(cluster[a393_0x1a35e6(0x11b)]){for(let i=0x0;i<clusterWorkerSize;i++){cluster[a393_0x1a35e6(0x113)]();}cluster['on']('exit',function(_0x4a20ad){const _0xf0502d=a393_0x1a35e6;console['log'](_0xf0502d(0x12f),_0x4a20ad['id'],_0xf0502d(0x118));});}else{const app=express(),server=app[a393_0x1a35e6(0x11f)](process['env']['PORT'],async()=>{const _0x1900eb=a393_0x1a35e6,_0x441597=await Company_1[_0x1900eb(0x111)][_0x1900eb(0x129)](),_0x178a59=[];_0x441597[_0x1900eb(0x13d)](async _0xe52acb=>{const _0x2e8f31=_0x1900eb,_0x10f8bc=(0x0,StartAllWhatsAppsSessions_1[_0x2e8f31(0x13c)])(_0xe52acb['id']);_0x178a59['push'](_0x10f8bc);}),Promise[_0x1900eb(0x139)](_0x178a59)[_0x1900eb(0x110)](async()=>{const _0x4edcd6=_0x1900eb;await(0x0,queues_1[_0x4edcd6(0x137)])();}),logger_1[_0x1900eb(0x12b)]['info']('Server\x20started\x20on\x20port:\x20'+process['env'][_0x1900eb(0x120)]+_0x1900eb(0x11e)+process['pid']);});process['on'](a393_0x1a35e6(0x125),_0x751905=>{const _0x217b95=a393_0x1a35e6;console[_0x217b95(0x128)](new Date()['toUTCString']()+_0x217b95(0x116),_0x751905[_0x217b95(0x127)]),console[_0x217b95(0x128)](_0x751905['stack']),process[_0x217b95(0x136)](0x1);}),process['on'](a393_0x1a35e6(0x13b),(_0x331eb6,_0x1f544f)=>{const _0x149202=a393_0x1a35e6;console['error'](new Date()[_0x149202(0x140)]()+_0x149202(0x12c),_0x331eb6,_0x1f544f),process[_0x149202(0x136)](0x1);}),(0x0,socket_1['initIO'])(server),(0x0,http_graceful_shutdown_1[a393_0x1a35e6(0x111)])(server);}}else{const app=express();app[a393_0x1a35e6(0x11f)](PORT,function(){const _0x5f257b=a393_0x1a35e6;console[_0x5f257b(0x12e)](_0x5f257b(0x13e)+PORT+_0x5f257b(0x126)+process[_0x5f257b(0x117)]);});}