'use strict';const a352_0x2b623b=a352_0x1c8d;(function(_0x5277e9,_0x163e93){const _0x25f25d=a352_0x1c8d,_0x409250=_0x5277e9();while(!![]){try{const _0x52a947=-parseInt(_0x25f25d(0x1ab))/0x1+-parseInt(_0x25f25d(0x1b9))/0x2*(-parseInt(_0x25f25d(0x1b2))/0x3)+-parseInt(_0x25f25d(0x1bc))/0x4+parseInt(_0x25f25d(0x1ad))/0x5*(-parseInt(_0x25f25d(0x1be))/0x6)+-parseInt(_0x25f25d(0x1b6))/0x7+-parseInt(_0x25f25d(0x1a8))/0x8+-parseInt(_0x25f25d(0x1b5))/0x9*(-parseInt(_0x25f25d(0x1b4))/0xa);if(_0x52a947===_0x163e93)break;else _0x409250['push'](_0x409250['shift']());}catch(_0x2d9390){_0x409250['push'](_0x409250['shift']());}}}(a352_0x153a,0xda7eb));var __importDefault=this&&this['__importDefault']||function(_0x58708f){const _0x2657ff=a352_0x1c8d;return _0x58708f&&_0x58708f[_0x2657ff(0x1bd)]?_0x58708f:{'default':_0x58708f};};Object[a352_0x2b623b(0x1aa)](exports,'__esModule',{'value':!![]}),exports[a352_0x2b623b(0x1b8)]=void 0x0;function a352_0x1c8d(_0x5dc6b6,_0x1ecc16){const _0x153a28=a352_0x153a();return a352_0x1c8d=function(_0x1c8d18,_0x49d9e7){_0x1c8d18=_0x1c8d18-0x1a8;let _0x5f3284=_0x153a28[_0x1c8d18];return _0x5f3284;},a352_0x1c8d(_0x5dc6b6,_0x1ecc16);}const jsonwebtoken_1=require(a352_0x2b623b(0x1c0)),AppError_1=__importDefault(require(a352_0x2b623b(0x1ae))),ShowUserService_1=__importDefault(require('../UserServices/ShowUserService')),auth_1=__importDefault(require('../../config/auth')),CreateTokens_1=require(a352_0x2b623b(0x1bf)),RefreshTokenService=async(_0x55ed3d,_0x1c2aa3)=>{const _0x1b3662=a352_0x2b623b;try{const _0x1b9e4e=(0x0,jsonwebtoken_1[_0x1b3662(0x1b0)])(_0x1c2aa3,auth_1[_0x1b3662(0x1ba)][_0x1b3662(0x1b7)]),{id:_0x2e113d,tokenVersion:_0xdd9c16,companyId:_0x366946}=_0x1b9e4e,_0x5ec582=await(0x0,ShowUserService_1[_0x1b3662(0x1ba)])(_0x2e113d);if(_0x5ec582[_0x1b3662(0x1bb)]!==_0xdd9c16){_0x55ed3d[_0x1b3662(0x1ac)](_0x1b3662(0x1b3));throw new AppError_1[(_0x1b3662(0x1ba))]('ERR_SESSION_EXPIRED',0x191);}const _0x16f6a2=(0x0,CreateTokens_1[_0x1b3662(0x1af)])(_0x5ec582),_0x3abba3=(0x0,CreateTokens_1[_0x1b3662(0x1b1)])(_0x5ec582);return{'user':_0x5ec582,'newToken':_0x16f6a2,'refreshToken':_0x3abba3};}catch(_0xb8ecbd){_0x55ed3d[_0x1b3662(0x1ac)](_0x1b3662(0x1b3));throw new AppError_1[(_0x1b3662(0x1ba))](_0x1b3662(0x1a9),0x191);}};exports[a352_0x2b623b(0x1b8)]=RefreshTokenService;function a352_0x153a(){const _0x23aaea=['2ZlFxro','default','tokenVersion','4733592CntwHp','__esModule','9948Rnohaf','../../helpers/CreateTokens','jsonwebtoken','2330568EjhbfH','ERR_SESSION_EXPIRED','defineProperty','1070820ficsMf','clearCookie','575PMrcaJ','../../errors/AppError','createAccessToken','verify','createRefreshToken','396885knTsMB','jrt','57210IYUlnT','6012McEjrK','2259313aQFRtJ','refreshSecret','RefreshTokenService'];a352_0x153a=function(){return _0x23aaea;};return a352_0x153a();}