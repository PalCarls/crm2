'use strict';const a370_0x540adc=a370_0x141e;(function(_0x2c345c,_0x1ec485){const _0x459aa8=a370_0x141e,_0x218931=_0x2c345c();while(!![]){try{const _0x3337cd=-parseInt(_0x459aa8(0x179))/0x1+parseInt(_0x459aa8(0x17e))/0x2*(-parseInt(_0x459aa8(0x174))/0x3)+parseInt(_0x459aa8(0x16d))/0x4*(-parseInt(_0x459aa8(0x16a))/0x5)+parseInt(_0x459aa8(0x182))/0x6*(parseInt(_0x459aa8(0x170))/0x7)+parseInt(_0x459aa8(0x171))/0x8+parseInt(_0x459aa8(0x17a))/0x9*(-parseInt(_0x459aa8(0x169))/0xa)+-parseInt(_0x459aa8(0x175))/0xb*(-parseInt(_0x459aa8(0x17d))/0xc);if(_0x3337cd===_0x1ec485)break;else _0x218931['push'](_0x218931['shift']());}catch(_0x1d9c80){_0x218931['push'](_0x218931['shift']());}}}(a370_0x49d6,0xa1056));function a370_0x49d6(){const _0x4f334d=['3220180sxCmwm','../../helpers/CreateTokens','../../errors/AppError','4uldMka','__esModule','createRefreshToken','168203MQIxdr','6339664rcqhEo','default','jrt','3chwNMY','64537ltYOuj','../../config/auth','RefreshTokenService','ERR_SESSION_EXPIRED','1253332mElCwT','5199327bWzYLl','tokenVersion','verify','4332GNAEeq','2050680ZuwSHA','../UserServices/ShowUserService','jsonwebtoken','__importDefault','312nXkJkm','clearCookie','10lQuxho'];a370_0x49d6=function(){return _0x4f334d;};return a370_0x49d6();}var __importDefault=this&&this[a370_0x540adc(0x181)]||function(_0x2356ec){const _0x10efa6=a370_0x540adc;return _0x2356ec&&_0x2356ec[_0x10efa6(0x16e)]?_0x2356ec:{'default':_0x2356ec};};Object['defineProperty'](exports,a370_0x540adc(0x16e),{'value':!![]}),exports[a370_0x540adc(0x177)]=void 0x0;const jsonwebtoken_1=require(a370_0x540adc(0x180)),AppError_1=__importDefault(require(a370_0x540adc(0x16c))),ShowUserService_1=__importDefault(require(a370_0x540adc(0x17f))),auth_1=__importDefault(require(a370_0x540adc(0x176))),CreateTokens_1=require(a370_0x540adc(0x16b)),RefreshTokenService=async(_0x3b56f5,_0x54760a)=>{const _0x136f4d=a370_0x540adc;try{const _0xdc8131=(0x0,jsonwebtoken_1[_0x136f4d(0x17c)])(_0x54760a,auth_1[_0x136f4d(0x172)]['refreshSecret']),{id:_0x17de46,tokenVersion:_0x2ae43a,companyId:_0x11db0c}=_0xdc8131,_0x1b9385=await(0x0,ShowUserService_1[_0x136f4d(0x172)])(_0x17de46);if(_0x1b9385[_0x136f4d(0x17b)]!==_0x2ae43a){_0x3b56f5['clearCookie'](_0x136f4d(0x173));throw new AppError_1[(_0x136f4d(0x172))]('ERR_SESSION_EXPIRED',0x191);}const _0x2748d2=(0x0,CreateTokens_1['createAccessToken'])(_0x1b9385),_0x2ee33b=(0x0,CreateTokens_1[_0x136f4d(0x16f)])(_0x1b9385);return{'user':_0x1b9385,'newToken':_0x2748d2,'refreshToken':_0x2ee33b};}catch(_0x376235){_0x3b56f5[_0x136f4d(0x183)](_0x136f4d(0x173));throw new AppError_1['default'](_0x136f4d(0x178),0x191);}};function a370_0x141e(_0x13b136,_0x335680){const _0x49d6c4=a370_0x49d6();return a370_0x141e=function(_0x141e53,_0x37ee31){_0x141e53=_0x141e53-0x169;let _0x17724e=_0x49d6c4[_0x141e53];return _0x17724e;},a370_0x141e(_0x13b136,_0x335680);}exports[a370_0x540adc(0x177)]=RefreshTokenService;