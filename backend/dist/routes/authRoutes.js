'use strict';var a358_0x45e751=a358_0x3a5a;(function(_0x26095a,_0xe74988){var _0x2d194d=a358_0x3a5a,_0x39008e=_0x26095a();while(!![]){try{var _0x559fac=parseInt(_0x2d194d(0xf1))/0x1*(-parseInt(_0x2d194d(0xf3))/0x2)+parseInt(_0x2d194d(0xfa))/0x3+-parseInt(_0x2d194d(0xf4))/0x4*(parseInt(_0x2d194d(0x10b))/0x5)+-parseInt(_0x2d194d(0xf5))/0x6*(parseInt(_0x2d194d(0xf9))/0x7)+-parseInt(_0x2d194d(0x104))/0x8+-parseInt(_0x2d194d(0x10a))/0x9*(-parseInt(_0x2d194d(0xf0))/0xa)+parseInt(_0x2d194d(0x112))/0xb;if(_0x559fac===_0xe74988)break;else _0x39008e['push'](_0x39008e['shift']());}catch(_0x11c520){_0x39008e['push'](_0x39008e['shift']());}}}(a358_0x1c07,0xd8170));var __createBinding=this&&this[a358_0x45e751(0xfe)]||(Object[a358_0x45e751(0xff)]?function(_0x18459e,_0x29938b,_0x382f17,_0x550e75){var _0xb61f04=a358_0x45e751;if(_0x550e75===undefined)_0x550e75=_0x382f17;var _0x1a3b99=Object['getOwnPropertyDescriptor'](_0x29938b,_0x382f17);(!_0x1a3b99||(_0xb61f04(0xfc)in _0x1a3b99?!_0x29938b['__esModule']:_0x1a3b99[_0xb61f04(0x109)]||_0x1a3b99[_0xb61f04(0x110)]))&&(_0x1a3b99={'enumerable':!![],'get':function(){return _0x29938b[_0x382f17];}}),Object[_0xb61f04(0x113)](_0x18459e,_0x550e75,_0x1a3b99);}:function(_0x529aa3,_0x27fd48,_0x515e77,_0x2b4e8){if(_0x2b4e8===undefined)_0x2b4e8=_0x515e77;_0x529aa3[_0x2b4e8]=_0x27fd48[_0x515e77];}),__setModuleDefault=this&&this[a358_0x45e751(0x100)]||(Object[a358_0x45e751(0xff)]?function(_0x6586db,_0x30d545){var _0x30fc1e=a358_0x45e751;Object[_0x30fc1e(0x113)](_0x6586db,_0x30fc1e(0x111),{'enumerable':!![],'value':_0x30d545});}:function(_0x40ec56,_0x4b912b){var _0x54e32c=a358_0x45e751;_0x40ec56[_0x54e32c(0x111)]=_0x4b912b;}),__importStar=this&&this[a358_0x45e751(0x10c)]||function(_0x1265e5){var _0x503c49=a358_0x45e751;if(_0x1265e5&&_0x1265e5[_0x503c49(0x105)])return _0x1265e5;var _0x5979da={};if(_0x1265e5!=null){for(var _0x2c283e in _0x1265e5)if(_0x2c283e!=='default'&&Object[_0x503c49(0xf6)]['hasOwnProperty'][_0x503c49(0x108)](_0x1265e5,_0x2c283e))__createBinding(_0x5979da,_0x1265e5,_0x2c283e);}return __setModuleDefault(_0x5979da,_0x1265e5),_0x5979da;},__importDefault=this&&this['__importDefault']||function(_0x559528){return _0x559528&&_0x559528['__esModule']?_0x559528:{'default':_0x559528};};function a358_0x1c07(){var _0x50a40c=['10qDZbKk','__importStar','../middleware/isAuth','../controllers/UserController','/refresh_token','configurable','default','24647007HHEttu','defineProperty','40OVNuxw','123706uEUhil','update','18fGeRpx','2681288qxbUzE','1148682gfDZVD','prototype','/signup','/login','7aemIrW','2998446vcoMiG','Router','get','/me','__createBinding','create','__setModuleDefault','../controllers/SessionController','express','store','8248400hKiNUX','__esModule','/logout','post','call','writable','2973330abGCfu'];a358_0x1c07=function(){return _0x50a40c;};return a358_0x1c07();}function a358_0x3a5a(_0x21d67a,_0x16a5fb){var _0x1c076d=a358_0x1c07();return a358_0x3a5a=function(_0x3a5a31,_0x5f196d){_0x3a5a31=_0x3a5a31-0xf0;var _0x3f763f=_0x1c076d[_0x3a5a31];return _0x3f763f;},a358_0x3a5a(_0x21d67a,_0x16a5fb);}Object['defineProperty'](exports,a358_0x45e751(0x105),{'value':!![]});const express_1=require(a358_0x45e751(0x102)),SessionController=__importStar(require(a358_0x45e751(0x101))),UserController=__importStar(require(a358_0x45e751(0x10e))),isAuth_1=__importDefault(require(a358_0x45e751(0x10d))),authRoutes=(0x0,express_1[a358_0x45e751(0xfb)])();authRoutes['post'](a358_0x45e751(0xf7),UserController[a358_0x45e751(0x103)]),authRoutes[a358_0x45e751(0x107)](a358_0x45e751(0xf8),SessionController[a358_0x45e751(0x103)]),authRoutes[a358_0x45e751(0x107)](a358_0x45e751(0x10f),SessionController[a358_0x45e751(0xf2)]),authRoutes['delete'](a358_0x45e751(0x106),isAuth_1[a358_0x45e751(0x111)],SessionController['remove']),authRoutes[a358_0x45e751(0xfc)](a358_0x45e751(0xfd),isAuth_1[a358_0x45e751(0x111)],SessionController['me']),exports[a358_0x45e751(0x111)]=authRoutes;