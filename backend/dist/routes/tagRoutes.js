'use strict';var a384_0x1096de=a384_0x4164;(function(_0x1a566a,_0x263a67){var _0x4be1f6=a384_0x4164,_0x14fd9c=_0x1a566a();while(!![]){try{var _0x5be2bd=-parseInt(_0x4be1f6(0x1a3))/0x1*(parseInt(_0x4be1f6(0x1ad))/0x2)+-parseInt(_0x4be1f6(0x19d))/0x3*(parseInt(_0x4be1f6(0x1a4))/0x4)+-parseInt(_0x4be1f6(0x19f))/0x5*(parseInt(_0x4be1f6(0x1a9))/0x6)+parseInt(_0x4be1f6(0x1ac))/0x7*(-parseInt(_0x4be1f6(0x1a0))/0x8)+-parseInt(_0x4be1f6(0x1a6))/0x9+parseInt(_0x4be1f6(0x19b))/0xa*(-parseInt(_0x4be1f6(0x19a))/0xb)+parseInt(_0x4be1f6(0x195))/0xc;if(_0x5be2bd===_0x263a67)break;else _0x14fd9c['push'](_0x14fd9c['shift']());}catch(_0x4d72bb){_0x14fd9c['push'](_0x14fd9c['shift']());}}}(a384_0x360e,0x633dc));function a384_0x360e(){var _0x5b5a6b=['/tags/list','../middleware/isAuth','39122556WwsAyh','prototype','list','defineProperty','/tags','913VCgmcB','78230bYNgDc','get','3SDVIRf','create','720nolAjo','478096txtels','delete','default','4979rPaCoP','1062956GmhBuz','/tags/:tagId','5455170VWuUSx','put','__importStar','14232zUCoxF','show','syncTags','77KUEyjW','134auCCTl','call','index','__importDefault','store','post','__esModule','remove'];a384_0x360e=function(){return _0x5b5a6b;};return a384_0x360e();}var __createBinding=this&&this['__createBinding']||(Object['create']?function(_0x33d6eb,_0x52fb6b,_0x4d22c8,_0x5a4f49){var _0x4e72f1=a384_0x4164;if(_0x5a4f49===undefined)_0x5a4f49=_0x4d22c8;var _0x3c10e9=Object['getOwnPropertyDescriptor'](_0x52fb6b,_0x4d22c8);(!_0x3c10e9||(_0x4e72f1(0x19c)in _0x3c10e9?!_0x52fb6b[_0x4e72f1(0x1b3)]:_0x3c10e9['writable']||_0x3c10e9['configurable']))&&(_0x3c10e9={'enumerable':!![],'get':function(){return _0x52fb6b[_0x4d22c8];}}),Object[_0x4e72f1(0x198)](_0x33d6eb,_0x5a4f49,_0x3c10e9);}:function(_0x5b609e,_0x2856dd,_0x5930d7,_0x14828d){if(_0x14828d===undefined)_0x14828d=_0x5930d7;_0x5b609e[_0x14828d]=_0x2856dd[_0x5930d7];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a384_0x1096de(0x19e)]?function(_0x203588,_0x35e390){var _0x4613fd=a384_0x1096de;Object[_0x4613fd(0x198)](_0x203588,'default',{'enumerable':!![],'value':_0x35e390});}:function(_0xc7ed97,_0x27538a){_0xc7ed97['default']=_0x27538a;}),__importStar=this&&this[a384_0x1096de(0x1a8)]||function(_0x2d4e40){var _0x40c32d=a384_0x1096de;if(_0x2d4e40&&_0x2d4e40[_0x40c32d(0x1b3)])return _0x2d4e40;var _0xfbb225={};if(_0x2d4e40!=null){for(var _0x27e01d in _0x2d4e40)if(_0x27e01d!==_0x40c32d(0x1a2)&&Object[_0x40c32d(0x196)]['hasOwnProperty'][_0x40c32d(0x1ae)](_0x2d4e40,_0x27e01d))__createBinding(_0xfbb225,_0x2d4e40,_0x27e01d);}return __setModuleDefault(_0xfbb225,_0x2d4e40),_0xfbb225;},__importDefault=this&&this[a384_0x1096de(0x1b0)]||function(_0x233a38){var _0x2dcd23=a384_0x1096de;return _0x233a38&&_0x233a38[_0x2dcd23(0x1b3)]?_0x233a38:{'default':_0x233a38};};function a384_0x4164(_0x5b1031,_0x5d767c){var _0x360e68=a384_0x360e();return a384_0x4164=function(_0x416411,_0x36a225){_0x416411=_0x416411-0x192;var _0x1f96db=_0x360e68[_0x416411];return _0x1f96db;},a384_0x4164(_0x5b1031,_0x5d767c);}Object['defineProperty'](exports,a384_0x1096de(0x1b3),{'value':!![]});const express_1=__importDefault(require('express')),isAuth_1=__importDefault(require(a384_0x1096de(0x194))),TagController=__importStar(require('../controllers/TagController')),tagRoutes=express_1[a384_0x1096de(0x1a2)]['Router']();tagRoutes[a384_0x1096de(0x19c)](a384_0x1096de(0x193),isAuth_1[a384_0x1096de(0x1a2)],TagController[a384_0x1096de(0x197)]),tagRoutes[a384_0x1096de(0x19c)]('/tags',isAuth_1[a384_0x1096de(0x1a2)],TagController[a384_0x1096de(0x1af)]),tagRoutes['get']('/tags/kanban',isAuth_1[a384_0x1096de(0x1a2)],TagController['kanban']),tagRoutes[a384_0x1096de(0x1b2)](a384_0x1096de(0x199),isAuth_1[a384_0x1096de(0x1a2)],TagController[a384_0x1096de(0x1b1)]),tagRoutes[a384_0x1096de(0x1a7)]('/tags/:tagId',isAuth_1[a384_0x1096de(0x1a2)],TagController['update']),tagRoutes[a384_0x1096de(0x19c)](a384_0x1096de(0x1a5),isAuth_1[a384_0x1096de(0x1a2)],TagController[a384_0x1096de(0x1aa)]),tagRoutes[a384_0x1096de(0x1a1)](a384_0x1096de(0x1a5),isAuth_1['default'],TagController[a384_0x1096de(0x192)]),tagRoutes[a384_0x1096de(0x1b2)]('/tags/sync',isAuth_1[a384_0x1096de(0x1a2)],TagController[a384_0x1096de(0x1ab)]),exports[a384_0x1096de(0x1a2)]=tagRoutes;