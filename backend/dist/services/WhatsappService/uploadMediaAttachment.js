'use strict';const a561_0x54b2ae=a561_0x4059;(function(_0x4718ea,_0x770f4e){const _0x406efe=a561_0x4059,_0x1ee7cf=_0x4718ea();while(!![]){try{const _0x76c419=parseInt(_0x406efe(0x142))/0x1*(parseInt(_0x406efe(0x14b))/0x2)+-parseInt(_0x406efe(0x135))/0x3+parseInt(_0x406efe(0x13c))/0x4+-parseInt(_0x406efe(0x148))/0x5+-parseInt(_0x406efe(0x13a))/0x6*(parseInt(_0x406efe(0x149))/0x7)+-parseInt(_0x406efe(0x136))/0x8+parseInt(_0x406efe(0x141))/0x9;if(_0x76c419===_0x770f4e)break;else _0x1ee7cf['push'](_0x1ee7cf['shift']());}catch(_0x26b48e){_0x1ee7cf['push'](_0x1ee7cf['shift']());}}}(a561_0x2bca,0x809c2));var __importDefault=this&&this['__importDefault']||function(_0x41b387){const _0x48327c=a561_0x4059;return _0x41b387&&_0x41b387[_0x48327c(0x13e)]?_0x41b387:{'default':_0x41b387};};function a561_0x2bca(){const _0x2b2f80=['greetingMediaAttachment','json','deleteMedia','Arquivo\x20adicionado!','public','../../errors/AppError','990108FeZpEm','3807512ntbbma','params','mediaUpload','save','6582kuflYY','status','1329928DMFpaP','../../models/Whatsapp','__esModule','existsSync','defineProperty','23596677HAoDSc','1841frUEAc','send','resolve','message','default','findByPk','3066150Yyygpe','6587mggyot','head','26mvxZJQ','lodash','files','unlinkSync'];a561_0x2bca=function(){return _0x2b2f80;};return a561_0x2bca();}Object[a561_0x54b2ae(0x140)](exports,a561_0x54b2ae(0x13e),{'value':!![]}),exports[a561_0x54b2ae(0x131)]=exports[a561_0x54b2ae(0x138)]=void 0x0;const lodash_1=require(a561_0x54b2ae(0x14c)),AppError_1=__importDefault(require(a561_0x54b2ae(0x134))),Whatsapp_1=__importDefault(require(a561_0x54b2ae(0x13d))),path_1=__importDefault(require('path')),fs_1=__importDefault(require('fs')),mediaUpload=async(_0x59d9e9,_0x4f2202)=>{const _0x5247de=a561_0x54b2ae,{whatsappId:_0x1f25b7}=_0x59d9e9[_0x5247de(0x137)],_0x2f3794=_0x59d9e9[_0x5247de(0x12d)],_0x425469=(0x0,lodash_1[_0x5247de(0x14a)])(_0x2f3794);try{const _0x2c7f83=await Whatsapp_1[_0x5247de(0x146)][_0x5247de(0x147)](_0x1f25b7);return _0x2c7f83['greetingMediaAttachment']=_0x425469['filename'],await _0x2c7f83[_0x5247de(0x139)](),_0x4f2202[_0x5247de(0x13b)](0xc8)[_0x5247de(0x130)]({'mensagem':_0x5247de(0x132)});}catch(_0x3bb6fe){throw new AppError_1['default'](_0x3bb6fe['message']);}};function a561_0x4059(_0x130877,_0x34ee41){const _0x2bcad4=a561_0x2bca();return a561_0x4059=function(_0x40598d,_0x18cf3f){_0x40598d=_0x40598d-0x12d;let _0x35aa54=_0x2bcad4[_0x40598d];return _0x35aa54;},a561_0x4059(_0x130877,_0x34ee41);}exports[a561_0x54b2ae(0x138)]=mediaUpload;const deleteMedia=async(_0x4613cd,_0x251fd9)=>{const _0x1ee928=a561_0x54b2ae,{whatsappId:_0x268832}=_0x4613cd['params'];try{const _0x5dd24a=await Whatsapp_1['default'][_0x1ee928(0x147)](_0x268832),_0x3e4283=path_1[_0x1ee928(0x146)][_0x1ee928(0x144)](_0x1ee928(0x133),_0x5dd24a[_0x1ee928(0x12f)]),_0x247748=fs_1[_0x1ee928(0x146)][_0x1ee928(0x13f)](_0x3e4283);return _0x247748&&fs_1[_0x1ee928(0x146)][_0x1ee928(0x12e)](_0x3e4283),_0x5dd24a[_0x1ee928(0x12f)]=null,await _0x5dd24a[_0x1ee928(0x139)](),_0x251fd9[_0x1ee928(0x143)]({'message':'Arquivo\x20excluído'});}catch(_0x368081){throw new AppError_1[(_0x1ee928(0x146))](_0x368081[_0x1ee928(0x145)]);}};exports[a561_0x54b2ae(0x131)]=deleteMedia;