'use strict';const a233_0x4d453c=a233_0x3c3c;function a233_0x3c3c(_0x52c31a,_0x1e3eca){const _0x59dfc3=a233_0x59df();return a233_0x3c3c=function(_0x3c3c3f,_0x12b9d6){_0x3c3c3f=_0x3c3c3f-0x105;let _0x5383f9=_0x59dfc3[_0x3c3c3f];return _0x5383f9;},a233_0x3c3c(_0x52c31a,_0x1e3eca);}(function(_0x379508,_0x755e2){const _0x1c27e1=a233_0x3c3c,_0x25a85c=_0x379508();while(!![]){try{const _0x57c92a=parseInt(_0x1c27e1(0x120))/0x1*(-parseInt(_0x1c27e1(0x111))/0x2)+parseInt(_0x1c27e1(0x10c))/0x3*(-parseInt(_0x1c27e1(0x10a))/0x4)+-parseInt(_0x1c27e1(0x123))/0x5*(-parseInt(_0x1c27e1(0x11c))/0x6)+-parseInt(_0x1c27e1(0x112))/0x7+-parseInt(_0x1c27e1(0x108))/0x8*(-parseInt(_0x1c27e1(0x117))/0x9)+-parseInt(_0x1c27e1(0x122))/0xa*(-parseInt(_0x1c27e1(0x10e))/0xb)+parseInt(_0x1c27e1(0x110))/0xc*(parseInt(_0x1c27e1(0x11e))/0xd);if(_0x57c92a===_0x755e2)break;else _0x25a85c['push'](_0x25a85c['shift']());}catch(_0x1227b7){_0x25a85c['push'](_0x25a85c['shift']());}}}(a233_0x59df,0x820c6));var __importDefault=this&&this[a233_0x4d453c(0x11f)]||function(_0x6b72ae){return _0x6b72ae&&_0x6b72ae['__esModule']?_0x6b72ae:{'default':_0x6b72ae};};Object[a233_0x4d453c(0x107)](exports,a233_0x4d453c(0x11b),{'value':!![]});const jsonwebtoken_1=require(a233_0x4d453c(0x11a)),AppError_1=__importDefault(require(a233_0x4d453c(0x113))),auth_1=__importDefault(require('../config/auth')),socket_1=require(a233_0x4d453c(0x114)),ShowUserService_1=__importDefault(require(a233_0x4d453c(0x106))),updateUser=async _0x307541=>{const _0x521d91=a233_0x4d453c,_0x38643b=await(0x0,ShowUserService_1['default'])(_0x307541);_0x38643b[_0x521d91(0x121)]('updatedAt',!![]);let _0xfebcc7=null;_0xfebcc7={'updatedAt':new Date()};if(!_0x38643b[_0x521d91(0x11d)]){_0xfebcc7={..._0xfebcc7,'online':!![]},await _0x38643b[_0x521d91(0x118)](_0xfebcc7),await _0x38643b[_0x521d91(0x115)]();const _0x181fda=(0x0,socket_1['getIO'])();_0x181fda[_0x521d91(0x10f)](_0x521d91(0x125)+_0x38643b['companyId'],{'action':_0x521d91(0x118),'user':_0x38643b});}else await _0x38643b[_0x521d91(0x118)](_0xfebcc7);},isAuth=async(_0x59888d,_0x55dcdb,_0x3f6a6b)=>{const _0x3338f0=a233_0x4d453c,_0x24cdd1=_0x59888d['headers'][_0x3338f0(0x10d)];if(!_0x24cdd1)throw new AppError_1['default'](_0x3338f0(0x119),0x191);const [,_0x420d07]=_0x24cdd1['split']('\x20');try{const _0x4cd25c=(0x0,jsonwebtoken_1[_0x3338f0(0x10b)])(_0x420d07,auth_1['default']['secret']),{id:_0x22c985,profile:_0x588cf9,companyId:_0xbeffef}=_0x4cd25c;updateUser(_0x22c985),_0x59888d['user']={'id':_0x22c985,'profile':_0x588cf9,'companyId':_0xbeffef};}catch(_0x148ce3){if(_0x148ce3[_0x3338f0(0x109)]===_0x3338f0(0x119)&&_0x148ce3[_0x3338f0(0x105)]===0x191)throw new AppError_1[(_0x3338f0(0x124))](_0x148ce3[_0x3338f0(0x109)],0x191);else throw new AppError_1[(_0x3338f0(0x124))](_0x3338f0(0x116),0x193);}return _0x3f6a6b();};exports['default']=isAuth;function a233_0x59df(){const _0x17f5f7=['../services/UserServices/ShowUserService','defineProperty','31592uigtzf','message','224XnGFGF','verify','53043Gijtyv','authorization','11EEBfcO','emit','12WEoMCW','1104974OvYBjU','321020wdpISB','../errors/AppError','../libs/socket','reload','Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request','666cipEQf','update','ERR_SESSION_EXPIRED','jsonwebtoken','__esModule','204636CLTurN','online','12722541WbYKKu','__importDefault','1ihdkNf','changed','6456420HkbHrb','30cYAFbV','default','user','statusCode'];a233_0x59df=function(){return _0x17f5f7;};return a233_0x59df();}