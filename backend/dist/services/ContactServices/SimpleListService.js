'use strict';const a390_0x2e22d8=a390_0x130c;(function(_0x35b968,_0x19af82){const _0x17462f=a390_0x130c,_0x1bda11=_0x35b968();while(!![]){try{const _0x2c762e=parseInt(_0x17462f(0x118))/0x1*(parseInt(_0x17462f(0x10d))/0x2)+parseInt(_0x17462f(0x10f))/0x3*(parseInt(_0x17462f(0x110))/0x4)+parseInt(_0x17462f(0x11f))/0x5+parseInt(_0x17462f(0x120))/0x6+parseInt(_0x17462f(0x11b))/0x7+parseInt(_0x17462f(0x11e))/0x8+-parseInt(_0x17462f(0x10e))/0x9*(parseInt(_0x17462f(0x114))/0xa);if(_0x2c762e===_0x19af82)break;else _0x1bda11['push'](_0x1bda11['shift']());}catch(_0x59c9a8){_0x1bda11['push'](_0x1bda11['shift']());}}}(a390_0x41ba,0x8f257));function a390_0x41ba(){const _0x5c8bd1=['ASC','2xlzSTH','117ViFJHb','3goaVKq','4138860hhokRd','where','sequelize','findAll','2454770aoYXnA','defineProperty','__esModule','ERR_NO_CONTACT_FOUND','898273DFqFuJ','default','name','701309nxPsvH','like','../../errors/AppError','6716816CpqVVk','454170xZYLDK','4883502OrmGvp'];a390_0x41ba=function(){return _0x5c8bd1;};return a390_0x41ba();}var __importDefault=this&&this['__importDefault']||function(_0x10e3ba){const _0x1e86a8=a390_0x130c;return _0x10e3ba&&_0x10e3ba[_0x1e86a8(0x116)]?_0x10e3ba:{'default':_0x10e3ba};};Object[a390_0x2e22d8(0x115)](exports,a390_0x2e22d8(0x116),{'value':!![]});const Contact_1=__importDefault(require('../../models/Contact')),AppError_1=__importDefault(require(a390_0x2e22d8(0x11d))),sequelize_1=require(a390_0x2e22d8(0x112)),SimpleListService=async({name:_0x2b2b6c,companyId:_0x3fe51c})=>{const _0x3f2852=a390_0x2e22d8;let _0x3fb856={'order':[[_0x3f2852(0x11a),_0x3f2852(0x10c)]]};_0x2b2b6c&&(_0x3fb856[_0x3f2852(0x111)]={'name':{[sequelize_1['Op'][_0x3f2852(0x11c)]]:'%'+_0x2b2b6c+'%'}});_0x3fb856[_0x3f2852(0x111)]={..._0x3fb856[_0x3f2852(0x111)],'companyId':_0x3fe51c};const _0x33d11e=await Contact_1['default'][_0x3f2852(0x113)](_0x3fb856);if(!_0x33d11e)throw new AppError_1[(_0x3f2852(0x119))](_0x3f2852(0x117),0x194);return _0x33d11e;};function a390_0x130c(_0x28ad7f,_0xd60d57){const _0x41bad8=a390_0x41ba();return a390_0x130c=function(_0x130c75,_0x1fd663){_0x130c75=_0x130c75-0x10c;let _0x8ce3b4=_0x41bad8[_0x130c75];return _0x8ce3b4;},a390_0x130c(_0x28ad7f,_0xd60d57);}exports[a390_0x2e22d8(0x119)]=SimpleListService;