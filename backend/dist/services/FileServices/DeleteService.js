'use strict';const a437_0x40a6b6=a437_0xc859;(function(_0x4a9c0f,_0x426053){const _0x5ee2af=a437_0xc859,_0xcae292=_0x4a9c0f();while(!![]){try{const _0x4828bb=parseInt(_0x5ee2af(0x6b))/0x1+parseInt(_0x5ee2af(0x6d))/0x2+-parseInt(_0x5ee2af(0x72))/0x3*(-parseInt(_0x5ee2af(0x6f))/0x4)+parseInt(_0x5ee2af(0x6a))/0x5+parseInt(_0x5ee2af(0x68))/0x6+-parseInt(_0x5ee2af(0x71))/0x7+-parseInt(_0x5ee2af(0x6c))/0x8;if(_0x4828bb===_0x426053)break;else _0xcae292['push'](_0xcae292['shift']());}catch(_0x4bff31){_0xcae292['push'](_0xcae292['shift']());}}}(a437_0x135b,0x9c6d8));var __importDefault=this&&this[a437_0x40a6b6(0x74)]||function(_0x338652){const _0x18f36e=a437_0x40a6b6;return _0x338652&&_0x338652[_0x18f36e(0x69)]?_0x338652:{'default':_0x338652};};function a437_0x135b(){const _0x5bc9d4=['default','8798426owZfQA','414963uBDFIm','destroy','__importDefault','ERR_NO_RATING_FOUND','../../errors/AppError','4732788GLnQLn','__esModule','3843780vViVOM','15751pfHVxc','13680480TtEpRf','1855666DdYCTv','../../models/Files','32nTWNyk'];a437_0x135b=function(){return _0x5bc9d4;};return a437_0x135b();}function a437_0xc859(_0x1a7f4f,_0x4c69c7){const _0x135b18=a437_0x135b();return a437_0xc859=function(_0xc8593e,_0x4c2cc4){_0xc8593e=_0xc8593e-0x66;let _0x1e0970=_0x135b18[_0xc8593e];return _0x1e0970;},a437_0xc859(_0x1a7f4f,_0x4c69c7);}Object['defineProperty'](exports,'__esModule',{'value':!![]});const Files_1=__importDefault(require(a437_0x40a6b6(0x6e))),AppError_1=__importDefault(require(a437_0x40a6b6(0x67))),DeleteService=async(_0x20c8b8,_0x1844b5)=>{const _0x480784=a437_0x40a6b6,_0x5362de=await Files_1[_0x480784(0x70)]['findOne']({'where':{'id':_0x20c8b8,'companyId':_0x1844b5}});if(!_0x5362de)throw new AppError_1[(_0x480784(0x70))](_0x480784(0x66),0x194);await _0x5362de[_0x480784(0x73)]();};exports[a437_0x40a6b6(0x70)]=DeleteService;