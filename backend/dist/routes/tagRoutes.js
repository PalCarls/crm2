'use strict';var a303_0x1d3ce7=a303_0x2fe9;(function(_0x5810b8,_0x4e2f23){var _0x6a5bfb=a303_0x2fe9,_0x5ec20a=_0x5810b8();while(!![]){try{var _0x6d7350=-parseInt(_0x6a5bfb(0x93))/0x1*(-parseInt(_0x6a5bfb(0x7e))/0x2)+-parseInt(_0x6a5bfb(0x87))/0x3+parseInt(_0x6a5bfb(0x8d))/0x4+-parseInt(_0x6a5bfb(0x91))/0x5+-parseInt(_0x6a5bfb(0x92))/0x6+parseInt(_0x6a5bfb(0x81))/0x7+-parseInt(_0x6a5bfb(0x7f))/0x8*(parseInt(_0x6a5bfb(0x98))/0x9);if(_0x6d7350===_0x4e2f23)break;else _0x5ec20a['push'](_0x5ec20a['shift']());}catch(_0x336bc5){_0x5ec20a['push'](_0x5ec20a['shift']());}}}(a303_0x5d2e,0x9c7bc));var __createBinding=this&&this[a303_0x1d3ce7(0x8a)]||(Object[a303_0x1d3ce7(0x8f)]?function(_0x5178db,_0x2efd33,_0x2f8c59,_0x408c71){var _0x56b8f3=a303_0x1d3ce7;if(_0x408c71===undefined)_0x408c71=_0x2f8c59;var _0x3353b=Object['getOwnPropertyDescriptor'](_0x2efd33,_0x2f8c59);(!_0x3353b||(_0x56b8f3(0x8c)in _0x3353b?!_0x2efd33[_0x56b8f3(0x94)]:_0x3353b[_0x56b8f3(0x96)]||_0x3353b['configurable']))&&(_0x3353b={'enumerable':!![],'get':function(){return _0x2efd33[_0x2f8c59];}}),Object[_0x56b8f3(0x97)](_0x5178db,_0x408c71,_0x3353b);}:function(_0x33de49,_0x59c0b7,_0x100e8f,_0x47921d){if(_0x47921d===undefined)_0x47921d=_0x100e8f;_0x33de49[_0x47921d]=_0x59c0b7[_0x100e8f];}),__setModuleDefault=this&&this[a303_0x1d3ce7(0x86)]||(Object[a303_0x1d3ce7(0x8f)]?function(_0x2337a3,_0x4abb06){var _0x360685=a303_0x1d3ce7;Object[_0x360685(0x97)](_0x2337a3,_0x360685(0x95),{'enumerable':!![],'value':_0x4abb06});}:function(_0x296ac5,_0x3c1624){var _0x1cd99a=a303_0x1d3ce7;_0x296ac5[_0x1cd99a(0x95)]=_0x3c1624;}),__importStar=this&&this['__importStar']||function(_0x1c35f6){var _0x18cba7=a303_0x1d3ce7;if(_0x1c35f6&&_0x1c35f6['__esModule'])return _0x1c35f6;var _0x603328={};if(_0x1c35f6!=null){for(var _0x108ac8 in _0x1c35f6)if(_0x108ac8!==_0x18cba7(0x95)&&Object['prototype']['hasOwnProperty'][_0x18cba7(0x99)](_0x1c35f6,_0x108ac8))__createBinding(_0x603328,_0x1c35f6,_0x108ac8);}return __setModuleDefault(_0x603328,_0x1c35f6),_0x603328;},__importDefault=this&&this[a303_0x1d3ce7(0x7d)]||function(_0x3261c0){var _0x313c51=a303_0x1d3ce7;return _0x3261c0&&_0x3261c0[_0x313c51(0x94)]?_0x3261c0:{'default':_0x3261c0};};function a303_0x5d2e(){var _0x286583=['../controllers/TagController','__importDefault','2hcqJzA','584MPaSrz','list','7573881fMKZwR','post','index','update','/tags','__setModuleDefault','1387131yJqIVL','remove','/tags/:tagId','__createBinding','show','get','2871760xseIPH','delete','create','syncTags','119430CdNvpV','3032526PEolQJ','1148396unxbJY','__esModule','default','writable','defineProperty','162207KmsGNu','call','put'];a303_0x5d2e=function(){return _0x286583;};return a303_0x5d2e();}function a303_0x2fe9(_0x165e73,_0x42a16d){var _0x5d2efe=a303_0x5d2e();return a303_0x2fe9=function(_0x2fe92c,_0x5a255c){_0x2fe92c=_0x2fe92c-0x7d;var _0x45a538=_0x5d2efe[_0x2fe92c];return _0x45a538;},a303_0x2fe9(_0x165e73,_0x42a16d);}Object[a303_0x1d3ce7(0x97)](exports,a303_0x1d3ce7(0x94),{'value':!![]});const express_1=__importDefault(require('express')),isAuth_1=__importDefault(require('../middleware/isAuth')),TagController=__importStar(require(a303_0x1d3ce7(0x9b))),tagRoutes=express_1[a303_0x1d3ce7(0x95)]['Router']();tagRoutes['get']('/tags/list',isAuth_1['default'],TagController[a303_0x1d3ce7(0x80)]),tagRoutes[a303_0x1d3ce7(0x8c)](a303_0x1d3ce7(0x85),isAuth_1[a303_0x1d3ce7(0x95)],TagController[a303_0x1d3ce7(0x83)]),tagRoutes[a303_0x1d3ce7(0x82)]('/tags',isAuth_1[a303_0x1d3ce7(0x95)],TagController['store']),tagRoutes[a303_0x1d3ce7(0x9a)](a303_0x1d3ce7(0x89),isAuth_1['default'],TagController[a303_0x1d3ce7(0x84)]),tagRoutes[a303_0x1d3ce7(0x8c)]('/tags/:tagId',isAuth_1[a303_0x1d3ce7(0x95)],TagController[a303_0x1d3ce7(0x8b)]),tagRoutes[a303_0x1d3ce7(0x8e)]('/tags/:tagId',isAuth_1[a303_0x1d3ce7(0x95)],TagController[a303_0x1d3ce7(0x88)]),tagRoutes['post']('/tags/sync',isAuth_1[a303_0x1d3ce7(0x95)],TagController[a303_0x1d3ce7(0x90)]),exports[a303_0x1d3ce7(0x95)]=tagRoutes;