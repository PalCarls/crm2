'use strict';const a25_0x4f658c=a25_0x27f8;function a25_0x43ba(){const _0x1f68cb=['49719gtSkuT','send','user','index','default','1936228gJkJyI','remove','json','4448360xhwwrr','body','64542NWYaxV','__importDefault','show','52WkvrjQ','40FkzaQa','../services/QueueService/CreateQueueService','306735ZuKqSy','company-','-queue','emit','830nMZDkh','getIO','query','update','store','3187719shMIgo','__esModule','35645IblAzU','params','../services/QueueService/UpdateQueueService','../services/QueueService/ListQueuesService','426JuSinA','defineProperty','../services/QueueService/DeleteQueueService','status'];a25_0x43ba=function(){return _0x1f68cb;};return a25_0x43ba();}(function(_0x38b39e,_0x34988a){const _0x494952=a25_0x27f8,_0x2d0e15=_0x38b39e();while(!![]){try{const _0x10390f=parseInt(_0x494952(0x207))/0x1+-parseInt(_0x494952(0x202))/0x2+parseInt(_0x494952(0x1fd))/0x3*(parseInt(_0x494952(0x20a))/0x4)+-parseInt(_0x494952(0x1f5))/0x5*(-parseInt(_0x494952(0x1f9))/0x6)+parseInt(_0x494952(0x205))/0x7+parseInt(_0x494952(0x20b))/0x8*(-parseInt(_0x494952(0x1f3))/0x9)+-parseInt(_0x494952(0x1ee))/0xa*(-parseInt(_0x494952(0x20d))/0xb);if(_0x10390f===_0x34988a)break;else _0x2d0e15['push'](_0x2d0e15['shift']());}catch(_0x1d0196){_0x2d0e15['push'](_0x2d0e15['shift']());}}}(a25_0x43ba,0xf3698));var __importDefault=this&&this[a25_0x4f658c(0x208)]||function(_0x3c5b14){const _0xd8bdd5=a25_0x4f658c;return _0x3c5b14&&_0x3c5b14[_0xd8bdd5(0x1f4)]?_0x3c5b14:{'default':_0x3c5b14};};Object[a25_0x4f658c(0x1fa)](exports,a25_0x4f658c(0x1f4),{'value':!![]}),exports[a25_0x4f658c(0x203)]=exports[a25_0x4f658c(0x1f1)]=exports[a25_0x4f658c(0x209)]=exports[a25_0x4f658c(0x1f2)]=exports['index']=void 0x0;const socket_1=require('../libs/socket'),CreateQueueService_1=__importDefault(require(a25_0x4f658c(0x20c))),DeleteQueueService_1=__importDefault(require(a25_0x4f658c(0x1fb))),ListQueuesService_1=__importDefault(require(a25_0x4f658c(0x1f8))),ShowQueueService_1=__importDefault(require('../services/QueueService/ShowQueueService')),UpdateQueueService_1=__importDefault(require(a25_0x4f658c(0x1f7))),lodash_1=require('lodash'),index=async(_0x2820ba,_0x306da8)=>{const _0x1866d2=a25_0x4f658c,{companyId:_0x17bb36}=_0x2820ba['user'],{companyId:_0x59acc2}=_0x2820ba[_0x1866d2(0x1f0)];let _0x5a2dc7=_0x17bb36;!(0x0,lodash_1['isNil'])(_0x59acc2)&&(_0x5a2dc7=+_0x59acc2);const _0x54bc8c=await(0x0,ListQueuesService_1[_0x1866d2(0x201)])({'companyId':_0x5a2dc7});return _0x306da8[_0x1866d2(0x1fc)](0xc8)['json'](_0x54bc8c);};exports[a25_0x4f658c(0x200)]=index;const store=async(_0xa3c499,_0x43bccc)=>{const _0x46f27e=a25_0x4f658c,{name:_0x15dca6,color:_0x5a6b2d,greetingMessage:_0x107c5a,outOfHoursMessage:_0x570b30,schedules:_0x46d734,chatbots:_0x34f504,orderQueue:_0x39a668,tempoRoteador:_0x564928,ativarRoteador:_0x582bfb}=_0xa3c499[_0x46f27e(0x206)],{companyId:_0x3d229e}=_0xa3c499[_0x46f27e(0x1ff)],_0x3379f4=await(0x0,CreateQueueService_1['default'])({'name':_0x15dca6,'color':_0x5a6b2d,'greetingMessage':_0x107c5a,'companyId':_0x3d229e,'outOfHoursMessage':_0x570b30,'tempoRoteador':_0x564928===''?0x0:_0x564928,'ativarRoteador':_0x582bfb,'schedules':_0x46d734,'chatbots':_0x34f504,'orderQueue':_0x39a668===''?null:_0x39a668}),_0x28ebb0=(0x0,socket_1[_0x46f27e(0x1ef)])();return _0x28ebb0['emit']('company-'+_0x3d229e+'-queue',{'action':_0x46f27e(0x1f1),'queue':_0x3379f4}),_0x43bccc[_0x46f27e(0x1fc)](0xc8)[_0x46f27e(0x204)](_0x3379f4);};exports['store']=store;const show=async(_0x807f65,_0x4d720b)=>{const _0x5388e1=a25_0x4f658c,{queueId:_0xdb4b43}=_0x807f65[_0x5388e1(0x1f6)],{companyId:_0x29e18f}=_0x807f65[_0x5388e1(0x1ff)],_0x4f139e=await(0x0,ShowQueueService_1[_0x5388e1(0x201)])(_0xdb4b43,_0x29e18f);return _0x4d720b[_0x5388e1(0x1fc)](0xc8)[_0x5388e1(0x204)](_0x4f139e);};exports[a25_0x4f658c(0x209)]=show;const update=async(_0x490ec1,_0x1c1836)=>{const _0x5955bc=a25_0x4f658c,{queueId:_0x3703f1}=_0x490ec1['params'],{companyId:_0x3368e1}=_0x490ec1[_0x5955bc(0x1ff)],_0x58170d=await(0x0,UpdateQueueService_1[_0x5955bc(0x201)])(_0x3703f1,_0x490ec1[_0x5955bc(0x206)],_0x3368e1),_0x3c4c97=(0x0,socket_1[_0x5955bc(0x1ef)])();return _0x3c4c97[_0x5955bc(0x1ed)](_0x5955bc(0x20e)+_0x3368e1+_0x5955bc(0x20f),{'action':_0x5955bc(0x1f1),'queue':_0x58170d}),_0x1c1836['status'](0xc9)[_0x5955bc(0x204)](_0x58170d);};exports[a25_0x4f658c(0x1f1)]=update;function a25_0x27f8(_0x5a36da,_0x23791c){const _0x43bac7=a25_0x43ba();return a25_0x27f8=function(_0x27f824,_0x1fd84c){_0x27f824=_0x27f824-0x1ed;let _0x3c7bd9=_0x43bac7[_0x27f824];return _0x3c7bd9;},a25_0x27f8(_0x5a36da,_0x23791c);}const remove=async(_0x41f794,_0x1e2016)=>{const _0x16bcd0=a25_0x4f658c,{queueId:_0x482221}=_0x41f794[_0x16bcd0(0x1f6)],{companyId:_0x13d1d3}=_0x41f794['user'];await(0x0,DeleteQueueService_1[_0x16bcd0(0x201)])(_0x482221,_0x13d1d3);const _0x22e982=(0x0,socket_1[_0x16bcd0(0x1ef)])();return _0x22e982['emit'](_0x16bcd0(0x20e)+_0x13d1d3+'-queue',{'action':'delete','queueId':+_0x482221}),_0x1e2016[_0x16bcd0(0x1fc)](0xc8)[_0x16bcd0(0x1fe)]();};exports[a25_0x4f658c(0x203)]=remove;