'use strict';function a487_0x3ab1(){const _0x2f65a3=['36627tLPzhd','../../models/Files','3835517OXQKue','5315472ZPdoOB','default','options','22284567YcrXDi','21696DRYEqd','3357306uqXXKe','../../models/FilesOptions','__importDefault','2111948PHGiAt','defineProperty','__esModule','findOne','../../errors/AppError','10pOrLnn','182PzdwIG','ERR_NO_FILE_FOUND'];a487_0x3ab1=function(){return _0x2f65a3;};return a487_0x3ab1();}const a487_0x30d016=a487_0x1034;(function(_0x2be175,_0x43300d){const _0x54d558=a487_0x1034,_0xbe52ac=_0x2be175();while(!![]){try{const _0x4bfb19=parseInt(_0x54d558(0x108))/0x1+parseInt(_0x54d558(0x112))/0x2*(-parseInt(_0x54d558(0x114))/0x3)+-parseInt(_0x54d558(0x10c))/0x4*(parseInt(_0x54d558(0x111))/0x5)+-parseInt(_0x54d558(0x109))/0x6+parseInt(_0x54d558(0x103))/0x7+parseInt(_0x54d558(0x104))/0x8+parseInt(_0x54d558(0x107))/0x9;if(_0x4bfb19===_0x43300d)break;else _0xbe52ac['push'](_0xbe52ac['shift']());}catch(_0x96e116){_0xbe52ac['push'](_0xbe52ac['shift']());}}}(a487_0x3ab1,0xf021c));var __importDefault=this&&this[a487_0x30d016(0x10b)]||function(_0x22e4d5){const _0x48955e=a487_0x30d016;return _0x22e4d5&&_0x22e4d5[_0x48955e(0x10e)]?_0x22e4d5:{'default':_0x22e4d5};};Object[a487_0x30d016(0x10d)](exports,a487_0x30d016(0x10e),{'value':!![]});const Files_1=__importDefault(require(a487_0x30d016(0x115))),AppError_1=__importDefault(require(a487_0x30d016(0x110))),FilesOptions_1=__importDefault(require(a487_0x30d016(0x10a))),ShowFileService=async(_0x1a7c6a,_0x56d4ad)=>{const _0x16429a=a487_0x30d016,_0x1480d4=await Files_1['default'][_0x16429a(0x10f)]({'where':{'id':_0x1a7c6a,'companyId':_0x56d4ad},'include':[_0x16429a(0x106),{'model':FilesOptions_1[_0x16429a(0x105)],'as':_0x16429a(0x106),'order':[['id','ASC']]}]});if(!_0x1480d4)throw new AppError_1[(_0x16429a(0x105))](_0x16429a(0x113),0x194);return _0x1480d4;};function a487_0x1034(_0x30fa69,_0x1038f7){const _0x3ab174=a487_0x3ab1();return a487_0x1034=function(_0x1034aa,_0x333d9d){_0x1034aa=_0x1034aa-0x103;let _0x39708e=_0x3ab174[_0x1034aa];return _0x39708e;},a487_0x1034(_0x30fa69,_0x1038f7);}exports[a487_0x30d016(0x105)]=ShowFileService;