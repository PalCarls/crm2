'use strict';const a446_0x33bb7c=a446_0x4b44;(function(_0x36530b,_0x20a7b8){const _0x4db287=a446_0x4b44,_0x5b0745=_0x36530b();while(!![]){try{const _0x319aa0=-parseInt(_0x4db287(0x167))/0x1+parseInt(_0x4db287(0x169))/0x2+parseInt(_0x4db287(0x17b))/0x3+-parseInt(_0x4db287(0x16b))/0x4*(-parseInt(_0x4db287(0x179))/0x5)+-parseInt(_0x4db287(0x173))/0x6*(parseInt(_0x4db287(0x170))/0x7)+parseInt(_0x4db287(0x174))/0x8+-parseInt(_0x4db287(0x16e))/0x9*(parseInt(_0x4db287(0x16f))/0xa);if(_0x319aa0===_0x20a7b8)break;else _0x5b0745['push'](_0x5b0745['shift']());}catch(_0x2f9aab){_0x5b0745['push'](_0x5b0745['shift']());}}}(a446_0x488d,0x43666));function a446_0x4b44(_0x38eaec,_0x51754b){const _0x488d1d=a446_0x488d();return a446_0x4b44=function(_0x4b44e1,_0x1d47b8){_0x4b44e1=_0x4b44e1-0x166;let _0x18f301=_0x488d1d[_0x4b44e1];return _0x18f301;},a446_0x4b44(_0x38eaec,_0x51754b);}var __importDefault=this&&this['__importDefault']||function(_0xc5bb9){const _0x1d65ab=a446_0x4b44;return _0xc5bb9&&_0xc5bb9[_0x1d65ab(0x166)]?_0xc5bb9:{'default':_0xc5bb9};};Object[a446_0x33bb7c(0x177)](exports,a446_0x33bb7c(0x166),{'value':!![]});const sequelize_1=require('sequelize'),Help_1=__importDefault(require(a446_0x33bb7c(0x16a))),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const _0x2d4c98=a446_0x33bb7c,_0x4dfe9d={[sequelize_1['Op']['or']]:[{'title':sequelize_1[_0x2d4c98(0x168)][_0x2d4c98(0x172)](sequelize_1[_0x2d4c98(0x168)]['fn'](_0x2d4c98(0x17a),sequelize_1[_0x2d4c98(0x168)][_0x2d4c98(0x16c)](_0x2d4c98(0x16d))),_0x2d4c98(0x175),'%'+searchParam[_0x2d4c98(0x178)]()[_0x2d4c98(0x176)]()+'%')}]},_0x587ebd=0x14,_0x211ff0=_0x587ebd*(+pageNumber-0x1),{count:_0x4c4d2b,rows:_0x341031}=await Help_1['default']['findAndCountAll']({'where':_0x4dfe9d,'limit':_0x587ebd,'offset':_0x211ff0,'order':[[_0x2d4c98(0x16d),_0x2d4c98(0x171)]]}),_0x4bae70=_0x4c4d2b>_0x211ff0+_0x341031[_0x2d4c98(0x17c)];return{'records':_0x341031,'count':_0x4c4d2b,'hasMore':_0x4bae70};};function a446_0x488d(){const _0x1950c3=['toLowerCase','74690YKYggZ','LOWER','958659nMouWn','length','__esModule','131517baCZhN','Sequelize','1057768JqdtdL','../../models/Help','56editZA','col','title','79857NPTPlx','650MYUfHz','63DiiNpJ','ASC','where','69462palbgn','247648BwquOy','LIKE','trim','defineProperty'];a446_0x488d=function(){return _0x1950c3;};return a446_0x488d();}exports['default']=ListService;