'use strict';function a642_0x2d6d(_0x2550ff,_0x5be8ab){const _0x3acbed=a642_0x3acb();return a642_0x2d6d=function(_0x2d6d98,_0x194d06){_0x2d6d98=_0x2d6d98-0xb6;let _0x5d6815=_0x3acbed[_0x2d6d98];return _0x5d6815;},a642_0x2d6d(_0x2550ff,_0x5be8ab);}function a642_0x3acb(){const _0x4d0a3b=['color','24UMppdX','default','535907HqklgK','defineProperty','2748912foZqHX','242732Jcrjer','__importDefault','greetingMessage','__esModule','../../models/Queue','1294240itVinl','prompt','178689VIKjyf','name','36tbNgql','session','151828ThCwZc','../../models/Whatsapp','../../models/Prompt','10ZQRsqh','1069410djGdpi'];a642_0x3acb=function(){return _0x4d0a3b;};return a642_0x3acb();}const a642_0x82b25=a642_0x2d6d;(function(_0x50dcfc,_0x2a7f7e){const _0x291da0=a642_0x2d6d,_0x1d0e3d=_0x50dcfc();while(!![]){try{const _0x2f1d78=-parseInt(_0x291da0(0xc1))/0x1+parseInt(_0x291da0(0xbd))/0x2+-parseInt(_0x291da0(0xcb))/0x3+parseInt(_0x291da0(0xb9))/0x4*(parseInt(_0x291da0(0xbc))/0x5)+parseInt(_0x291da0(0xbf))/0x6*(parseInt(_0x291da0(0xc4))/0x7)+-parseInt(_0x291da0(0xc3))/0x8+parseInt(_0x291da0(0xb7))/0x9*(parseInt(_0x291da0(0xc9))/0xa);if(_0x2f1d78===_0x2a7f7e)break;else _0x1d0e3d['push'](_0x1d0e3d['shift']());}catch(_0x32acdd){_0x1d0e3d['push'](_0x1d0e3d['shift']());}}}(a642_0x3acb,0x500ff));var __importDefault=this&&this[a642_0x82b25(0xc5)]||function(_0x2c131a){const _0x2caf30=a642_0x82b25;return _0x2c131a&&_0x2c131a[_0x2caf30(0xc7)]?_0x2c131a:{'default':_0x2c131a};};Object[a642_0x82b25(0xc2)](exports,a642_0x82b25(0xc7),{'value':!![]});const Queue_1=__importDefault(require(a642_0x82b25(0xc8))),Whatsapp_1=__importDefault(require(a642_0x82b25(0xba))),Prompt_1=__importDefault(require(a642_0x82b25(0xbb))),ListWhatsAppsService=async({session:_0x53a354,companyId:_0x392891})=>{const _0x5a4f85=a642_0x82b25,_0x26df1c={'where':{'companyId':_0x392891},'include':[{'model':Queue_1[_0x5a4f85(0xc0)],'as':'queues','attributes':['id',_0x5a4f85(0xb6),_0x5a4f85(0xbe),_0x5a4f85(0xc6)]},{'model':Prompt_1[_0x5a4f85(0xc0)],'as':_0x5a4f85(0xca)}]};_0x53a354!==undefined&&_0x53a354==0x0&&(_0x26df1c['attributes']={'exclude':[_0x5a4f85(0xb8)]});const _0x3b7153=await Whatsapp_1[_0x5a4f85(0xc0)]['findAll'](_0x26df1c);return _0x3b7153;};exports[a642_0x82b25(0xc0)]=ListWhatsAppsService;