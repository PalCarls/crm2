'use strict';const a406_0x23e25a=a406_0x3c55;(function(_0x20884f,_0x2b9d08){const _0x2f7194=a406_0x3c55,_0x10eb60=_0x20884f();while(!![]){try{const _0x1ebc09=parseInt(_0x2f7194(0x122))/0x1*(parseInt(_0x2f7194(0x116))/0x2)+-parseInt(_0x2f7194(0x12a))/0x3+-parseInt(_0x2f7194(0x123))/0x4*(-parseInt(_0x2f7194(0x111))/0x5)+-parseInt(_0x2f7194(0x11c))/0x6*(parseInt(_0x2f7194(0x11b))/0x7)+parseInt(_0x2f7194(0x126))/0x8*(parseInt(_0x2f7194(0x11f))/0x9)+parseInt(_0x2f7194(0x119))/0xa*(parseInt(_0x2f7194(0x115))/0xb)+parseInt(_0x2f7194(0x11a))/0xc*(-parseInt(_0x2f7194(0x114))/0xd);if(_0x1ebc09===_0x2b9d08)break;else _0x10eb60['push'](_0x10eb60['shift']());}catch(_0x3c706c){_0x10eb60['push'](_0x10eb60['shift']());}}}(a406_0x64d8,0xd2f23));var __importDefault=this&&this[a406_0x23e25a(0x113)]||function(_0x2d964c){const _0x2716e1=a406_0x23e25a;return _0x2d964c&&_0x2d964c[_0x2716e1(0x112)]?_0x2d964c:{'default':_0x2d964c};};function a406_0x64d8(){const _0x240130=['1577118sjiBhN','name','findOne','15561640jzAoZC','72rgJKGi','361186eNcGmg','18UPoOwa','options','../../models/FilesOptions','1263951UMNyUz','path','default','1zcQyju','4334140DwuJAK','defineProperty','companyId','40FJJVDE','message','../../models/Files','../../errors/AppError','634482fvdKDK','ERR_NO_FILE_FOUND','5iMGHAt','__esModule','__importDefault','6283615cAUJft','11BNEdTV'];a406_0x64d8=function(){return _0x240130;};return a406_0x64d8();}function a406_0x3c55(_0x4cfd6f,_0x298f64){const _0x64d865=a406_0x64d8();return a406_0x3c55=function(_0x3c55f7,_0x5a1d4f){_0x3c55f7=_0x3c55f7-0x111;let _0x5de125=_0x64d865[_0x3c55f7];return _0x5de125;},a406_0x3c55(_0x4cfd6f,_0x298f64);}Object[a406_0x23e25a(0x124)](exports,'__esModule',{'value':!![]});const Files_1=__importDefault(require(a406_0x23e25a(0x128))),AppError_1=__importDefault(require(a406_0x23e25a(0x129))),FilesOptions_1=__importDefault(require(a406_0x23e25a(0x11e))),FileService=async(_0x5e2f50,_0x47e009)=>{const _0x198fa0=a406_0x23e25a,_0x1dd6f9=await Files_1[_0x198fa0(0x121)][_0x198fa0(0x118)]({'where':{'id':_0x5e2f50,'companyId':_0x47e009},'attributes':['id','name',_0x198fa0(0x127),_0x198fa0(0x125)],'include':['options',{'model':FilesOptions_1[_0x198fa0(0x121)],'as':_0x198fa0(0x11d),'attributes':['id',_0x198fa0(0x117),_0x198fa0(0x120)]}]});if(!_0x1dd6f9)throw new AppError_1[(_0x198fa0(0x121))](_0x198fa0(0x12b),0x194);return _0x1dd6f9;};exports[a406_0x23e25a(0x121)]=FileService;