'use strict';function a463_0x1115(){var _0x510cfc=['message','4SzBLqL','__importDefault','defineProperty','68237QCXmtp','__createBinding','get','string','__esModule','companyId','shape','5431122QptvVW','9aJKRXz','Não\x20é\x20possível\x20alterar\x20registros\x20de\x20outra\x20empresa','7777cpzzTq','1468360JOcPIv','../../errors/AppError','default','./ShowService','create','update','object','configurable','82077FxaxcG','7iQbvAH','20JsWieS','144olYDhu','1135885VUCefn','getOwnPropertyDescriptor','call','prototype','10049570IVXfGY','min'];a463_0x1115=function(){return _0x510cfc;};return a463_0x1115();}var a463_0x5539a9=a463_0x39e4;(function(_0x22291b,_0x4afc71){var _0x2aa09c=a463_0x39e4,_0xcd3e73=_0x22291b();while(!![]){try{var _0x42b7fb=-parseInt(_0x2aa09c(0x155))/0x1+-parseInt(_0x2aa09c(0x152))/0x2*(-parseInt(_0x2aa09c(0x147))/0x3)+-parseInt(_0x2aa09c(0x149))/0x4*(parseInt(_0x2aa09c(0x14b))/0x5)+parseInt(_0x2aa09c(0x13b))/0x6*(parseInt(_0x2aa09c(0x148))/0x7)+-parseInt(_0x2aa09c(0x13f))/0x8*(parseInt(_0x2aa09c(0x13c))/0x9)+parseInt(_0x2aa09c(0x14f))/0xa+parseInt(_0x2aa09c(0x13e))/0xb*(-parseInt(_0x2aa09c(0x14a))/0xc);if(_0x42b7fb===_0x4afc71)break;else _0xcd3e73['push'](_0xcd3e73['shift']());}catch(_0x32a21c){_0xcd3e73['push'](_0xcd3e73['shift']());}}}(a463_0x1115,0x8ad87));var __createBinding=this&&this[a463_0x5539a9(0x135)]||(Object[a463_0x5539a9(0x143)]?function(_0x2c0ab2,_0x1b0fa0,_0x52e065,_0x3a4720){var _0x1fbbec=a463_0x5539a9;if(_0x3a4720===undefined)_0x3a4720=_0x52e065;var _0x532b1d=Object[_0x1fbbec(0x14c)](_0x1b0fa0,_0x52e065);(!_0x532b1d||(_0x1fbbec(0x136)in _0x532b1d?!_0x1b0fa0[_0x1fbbec(0x138)]:_0x532b1d['writable']||_0x532b1d[_0x1fbbec(0x146)]))&&(_0x532b1d={'enumerable':!![],'get':function(){return _0x1b0fa0[_0x52e065];}}),Object['defineProperty'](_0x2c0ab2,_0x3a4720,_0x532b1d);}:function(_0x53afc9,_0x377689,_0x2d83cf,_0x151d15){if(_0x151d15===undefined)_0x151d15=_0x2d83cf;_0x53afc9[_0x151d15]=_0x377689[_0x2d83cf];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a463_0x5539a9(0x143)]?function(_0x3b8ae4,_0x291e17){var _0x18e983=a463_0x5539a9;Object[_0x18e983(0x154)](_0x3b8ae4,_0x18e983(0x141),{'enumerable':!![],'value':_0x291e17});}:function(_0x1bb165,_0xa532e8){_0x1bb165['default']=_0xa532e8;}),__importStar=this&&this['__importStar']||function(_0x5bf235){var _0x290a0a=a463_0x5539a9;if(_0x5bf235&&_0x5bf235[_0x290a0a(0x138)])return _0x5bf235;var _0xd6d870={};if(_0x5bf235!=null){for(var _0x341c2a in _0x5bf235)if(_0x341c2a!=='default'&&Object[_0x290a0a(0x14e)]['hasOwnProperty'][_0x290a0a(0x14d)](_0x5bf235,_0x341c2a))__createBinding(_0xd6d870,_0x5bf235,_0x341c2a);}return __setModuleDefault(_0xd6d870,_0x5bf235),_0xd6d870;},__importDefault=this&&this[a463_0x5539a9(0x153)]||function(_0x3d7369){var _0x573217=a463_0x5539a9;return _0x3d7369&&_0x3d7369[_0x573217(0x138)]?_0x3d7369:{'default':_0x3d7369};};Object[a463_0x5539a9(0x154)](exports,a463_0x5539a9(0x138),{'value':!![]});const Yup=__importStar(require('yup')),AppError_1=__importDefault(require(a463_0x5539a9(0x140))),ShowService_1=__importDefault(require(a463_0x5539a9(0x142))),UpdateUserService=async({scheduleData:_0x84e74,id:_0xcf9d1e,companyId:_0x136502})=>{var _0x5c5588=a463_0x5539a9;const _0x12cb33=await(0x0,ShowService_1['default'])(_0xcf9d1e,_0x136502);if(_0x12cb33?.[_0x5c5588(0x139)]!==_0x136502)throw new AppError_1[(_0x5c5588(0x141))](_0x5c5588(0x13d));const _0x26b9e5=Yup[_0x5c5588(0x145)]()[_0x5c5588(0x13a)]({'body':Yup[_0x5c5588(0x137)]()[_0x5c5588(0x150)](0x5)}),{body:_0x1a27fa,sendAt:_0x33f61d,sentAt:_0x364bf9,contactId:_0x4e346b,ticketId:_0x111f67,userId:_0x295fba}=_0x84e74;try{await _0x26b9e5['validate']({'body':_0x1a27fa});}catch(_0x57759a){throw new AppError_1['default'](_0x57759a[_0x5c5588(0x151)]);}return await _0x12cb33[_0x5c5588(0x144)]({'body':_0x1a27fa,'sendAt':_0x33f61d,'sentAt':_0x364bf9,'contactId':_0x4e346b,'ticketId':_0x111f67,'userId':_0x295fba}),await _0x12cb33['reload'](),_0x12cb33;};function a463_0x39e4(_0x34272f,_0x55d2a4){var _0x1115e9=a463_0x1115();return a463_0x39e4=function(_0x39e48a,_0xbd7d47){_0x39e48a=_0x39e48a-0x135;var _0x9ccca3=_0x1115e9[_0x39e48a];return _0x9ccca3;},a463_0x39e4(_0x34272f,_0x55d2a4);}exports[a463_0x5539a9(0x141)]=UpdateUserService;