'use strict';const a39_0x5a0863=a39_0x3540;(function(_0x31711b,_0x1b0fbf){const _0x23e707=a39_0x3540,_0x456ef3=_0x31711b();while(!![]){try{const _0x2abc14=parseInt(_0x23e707(0x8d))/0x1*(-parseInt(_0x23e707(0x93))/0x2)+parseInt(_0x23e707(0x90))/0x3*(parseInt(_0x23e707(0x9e))/0x4)+parseInt(_0x23e707(0x87))/0x5+-parseInt(_0x23e707(0xa1))/0x6+-parseInt(_0x23e707(0x8c))/0x7*(-parseInt(_0x23e707(0x9c))/0x8)+-parseInt(_0x23e707(0x88))/0x9*(-parseInt(_0x23e707(0x92))/0xa)+-parseInt(_0x23e707(0x91))/0xb*(-parseInt(_0x23e707(0x9f))/0xc);if(_0x2abc14===_0x1b0fbf)break;else _0x456ef3['push'](_0x456ef3['shift']());}catch(_0x5b0d6b){_0x456ef3['push'](_0x456ef3['shift']());}}}(a39_0xfb4b,0x6e65c));var __importDefault=this&&this[a39_0x5a0863(0x9b)]||function(_0x4152e1){return _0x4152e1&&_0x4152e1['__esModule']?_0x4152e1:{'default':_0x4152e1};};function a39_0x3540(_0x11dfa2,_0x3dca39){const _0xfb4b8f=a39_0xfb4b();return a39_0x3540=function(_0x35401f,_0x1f5247){_0x35401f=_0x35401f-0x87;let _0x470ce5=_0xfb4b8f[_0x35401f];return _0x470ce5;},a39_0x3540(_0x11dfa2,_0x3dca39);}Object[a39_0x5a0863(0x9a)](exports,a39_0x5a0863(0xa0),{'value':!![]});function a39_0xfb4b(){const _0x144180=['302395gWUMWM','4536vZCpHf','json','status','default','91gWoseq','291595LErVgv','logout','Session\x20disconnected.','3LSlGGs','4266614HKjgxU','9730fBlQTQ','6IlbPhm','whatsapp','getWbot','../libs/wbot','user','StartWhatsAppSession','channel','defineProperty','__importDefault','193472ynejxY','../services/BaileysServices/DeleteBaileysService','581144ekbHYB','36WuMygR','__esModule','5083188NcPoLM','params','../services/WhatsappService/UpdateWhatsAppService'];a39_0xfb4b=function(){return _0x144180;};return a39_0xfb4b();}const wbot_1=require(a39_0x5a0863(0x96)),ShowWhatsAppService_1=__importDefault(require('../services/WhatsappService/ShowWhatsAppService')),StartWhatsAppSession_1=require('../services/WbotServices/StartWhatsAppSession'),UpdateWhatsAppService_1=__importDefault(require(a39_0x5a0863(0xa3))),DeleteBaileysService_1=__importDefault(require(a39_0x5a0863(0x9d))),store=async(_0x21d558,_0x2db564)=>{const _0x50ff7b=a39_0x5a0863,{whatsappId:_0x5c1501}=_0x21d558[_0x50ff7b(0xa2)],{companyId:_0x4d0e60}=_0x21d558[_0x50ff7b(0x97)],_0x73942a=await(0x0,ShowWhatsAppService_1[_0x50ff7b(0x8b)])(_0x5c1501,_0x4d0e60);return await(0x0,StartWhatsAppSession_1[_0x50ff7b(0x98)])(_0x73942a,_0x4d0e60),_0x2db564[_0x50ff7b(0x8a)](0xc8)[_0x50ff7b(0x89)]({'message':'Starting\x20session.'});},update=async(_0x2111bb,_0x29c115)=>{const _0x47def3=a39_0x5a0863,{whatsappId:_0x247c97}=_0x2111bb[_0x47def3(0xa2)],{companyId:_0x49a4eb}=_0x2111bb[_0x47def3(0x97)],{whatsapp:_0x17f335}=await(0x0,UpdateWhatsAppService_1[_0x47def3(0x8b)])({'whatsappId':_0x247c97,'companyId':_0x49a4eb,'whatsappData':{'session':''}});return _0x17f335[_0x47def3(0x99)]===_0x47def3(0x94)&&await(0x0,StartWhatsAppSession_1[_0x47def3(0x98)])(_0x17f335,_0x49a4eb),_0x29c115['status'](0xc8)[_0x47def3(0x89)]({'message':'Starting\x20session.'});},remove=async(_0x2eee3d,_0x2fb815)=>{const _0x3ca4d1=a39_0x5a0863,{whatsappId:_0x47a5d3}=_0x2eee3d['params'],{companyId:_0x4f3b0f}=_0x2eee3d['user'],_0x5ee5bc=await(0x0,ShowWhatsAppService_1[_0x3ca4d1(0x8b)])(_0x47a5d3,_0x4f3b0f);if(_0x5ee5bc[_0x3ca4d1(0x99)]===_0x3ca4d1(0x94)){await(0x0,DeleteBaileysService_1[_0x3ca4d1(0x8b)])(_0x47a5d3);const _0x96271c=(0x0,wbot_1[_0x3ca4d1(0x95)])(_0x5ee5bc['id']);_0x96271c[_0x3ca4d1(0x8e)](),_0x96271c['ws']['close']();}return _0x2fb815[_0x3ca4d1(0x8a)](0xc8)[_0x3ca4d1(0x89)]({'message':_0x3ca4d1(0x8f)});};exports[a39_0x5a0863(0x8b)]={'store':store,'remove':remove,'update':update};