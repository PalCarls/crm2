'use strict';const a360_0x2d57a0=a360_0x3ef1;function a360_0x464f(){const _0x2f20bf=['6572580ADtqdm','findAll','exit','default','express','1615557PpEcjk','2YBdNHg','./queues','\x20unhandledRejection:','PORT','__esModule','http-graceful-shutdown','length','stack','info','101200pFxbKo','fork','StartAllWhatsAppsSessions','error','./services/WbotServices/StartAllWhatsAppsSessions','log','logger','162ntgskz','initIO','cpus','toUTCString','map','defineProperty','listen','835qhLtYF','./models/Company','4796408utTjoo','663664oAOtPC','__importDefault','unhandledRejection','\x20and\x20worker\x20','message','env','\x20with\x20the\x20single\x20worker\x20','Server\x20started\x20on\x20port:\x20','startQueueProcess','2105330uxQIuj','clusterWorkerSize','42036svYvvG','cluster'];a360_0x464f=function(){return _0x2f20bf;};return a360_0x464f();}(function(_0x4d1d1f,_0x4efb99){const _0x342501=a360_0x3ef1,_0x380523=_0x4d1d1f();while(!![]){try{const _0x4e8454=-parseInt(_0x342501(0x130))/0x1*(-parseInt(_0x342501(0x143))/0x2)+parseInt(_0x342501(0x142))/0x3+parseInt(_0x342501(0x12f))/0x4+parseInt(_0x342501(0x12d))/0x5*(parseInt(_0x342501(0x13b))/0x6)+parseInt(_0x342501(0x13d))/0x7+parseInt(_0x342501(0x14c))/0x8+-parseInt(_0x342501(0x126))/0x9*(parseInt(_0x342501(0x139))/0xa);if(_0x4e8454===_0x4efb99)break;else _0x380523['push'](_0x380523['shift']());}catch(_0x19befe){_0x380523['push'](_0x380523['shift']());}}}(a360_0x464f,0xb3063));var __importDefault=this&&this[a360_0x2d57a0(0x131)]||function(_0xbd7f69){const _0x18f8ae=a360_0x2d57a0;return _0xbd7f69&&_0xbd7f69[_0x18f8ae(0x147)]?_0xbd7f69:{'default':_0xbd7f69};};function a360_0x3ef1(_0x1cced8,_0x12ce76){const _0x464f0b=a360_0x464f();return a360_0x3ef1=function(_0x3ef16f,_0x89958a){_0x3ef16f=_0x3ef16f-0x120;let _0x301bf3=_0x464f0b[_0x3ef16f];return _0x301bf3;},a360_0x3ef1(_0x1cced8,_0x12ce76);}Object[a360_0x2d57a0(0x12b)](exports,'__esModule',{'value':!![]});const http_graceful_shutdown_1=__importDefault(require(a360_0x2d57a0(0x148))),socket_1=require('./libs/socket'),logger_1=require('./utils/logger'),StartAllWhatsAppsSessions_1=require(a360_0x2d57a0(0x123)),Company_1=__importDefault(require(a360_0x2d57a0(0x12e))),queues_1=require(a360_0x2d57a0(0x144)),express=require(a360_0x2d57a0(0x141)),os=require('os'),cluster=require(a360_0x2d57a0(0x13c)),PORT=process[a360_0x2d57a0(0x135)][a360_0x2d57a0(0x146)]||0xfa0,clusterWorkerSize=os[a360_0x2d57a0(0x128)]()[a360_0x2d57a0(0x149)];console[a360_0x2d57a0(0x124)](a360_0x2d57a0(0x13a),clusterWorkerSize);if(clusterWorkerSize>0x1){if(cluster['isMaster']){for(let i=0x0;i<clusterWorkerSize;i++){cluster[a360_0x2d57a0(0x120)]();}cluster['on'](a360_0x2d57a0(0x13f),function(_0x37b838){const _0x21d83f=a360_0x2d57a0;console[_0x21d83f(0x124)]('Worker',_0x37b838['id'],'\x20has\x20exitted.');});}else{const app=express(),server=app[a360_0x2d57a0(0x12c)](process[a360_0x2d57a0(0x135)][a360_0x2d57a0(0x146)],async()=>{const _0xa1b6bc=a360_0x2d57a0,_0x3babd8=await Company_1[_0xa1b6bc(0x140)][_0xa1b6bc(0x13e)](),_0x29dcb7=[];_0x3babd8[_0xa1b6bc(0x12a)](async _0x3cd6af=>{const _0xf9848d=_0xa1b6bc,_0x438f42=(0x0,StartAllWhatsAppsSessions_1[_0xf9848d(0x121)])(_0x3cd6af['id']);_0x29dcb7['push'](_0x438f42);}),Promise['all'](_0x29dcb7)['then'](async()=>{const _0x5f012c=_0xa1b6bc;await(0x0,queues_1[_0x5f012c(0x138)])();}),logger_1[_0xa1b6bc(0x125)][_0xa1b6bc(0x14b)](_0xa1b6bc(0x137)+process[_0xa1b6bc(0x135)][_0xa1b6bc(0x146)]+_0xa1b6bc(0x133)+process['pid']);});process['on']('uncaughtException',_0x515015=>{const _0x4f2b61=a360_0x2d57a0;console['error'](new Date()[_0x4f2b61(0x129)]()+'\x20uncaughtException:',_0x515015[_0x4f2b61(0x134)]),console[_0x4f2b61(0x122)](_0x515015[_0x4f2b61(0x14a)]),process[_0x4f2b61(0x13f)](0x1);}),process['on'](a360_0x2d57a0(0x132),(_0x587478,_0xdf01ec)=>{const _0x2578ea=a360_0x2d57a0;console[_0x2578ea(0x122)](new Date()[_0x2578ea(0x129)]()+_0x2578ea(0x145),_0x587478,_0xdf01ec),process[_0x2578ea(0x13f)](0x1);}),(0x0,socket_1[a360_0x2d57a0(0x127)])(server),(0x0,http_graceful_shutdown_1['default'])(server);}}else{const app=express();app['listen'](PORT,function(){const _0x4d6577=a360_0x2d57a0;console['log']('Express\x20server\x20listening\x20on\x20port\x20'+PORT+_0x4d6577(0x136)+process['pid']);});}