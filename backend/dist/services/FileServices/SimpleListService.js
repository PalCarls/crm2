'use strict';function a440_0x1988(){const _0x269255=['Rating.id','3053776ubwuRH','2844LwfVKd','10330BheRDy','default','218nwSFbL','4164NUWuqS','1843700DQVfvs','__esModule','findAll','5801208qwjQEM','454062YBGLnl','updatedAt','ASC','5tStvbr','name','12MLCoQl','133AkooAg','195592rXISky','defineProperty'];a440_0x1988=function(){return _0x269255;};return a440_0x1988();}const a440_0x4c211d=a440_0x3d21;function a440_0x3d21(_0x379f40,_0x33536b){const _0x1988be=a440_0x1988();return a440_0x3d21=function(_0x3d216f,_0x5e3048){_0x3d216f=_0x3d216f-0x142;let _0x456094=_0x1988be[_0x3d216f];return _0x456094;},a440_0x3d21(_0x379f40,_0x33536b);}(function(_0x32fa51,_0xf6459a){const _0x99b9f4=a440_0x3d21,_0x166e08=_0x32fa51();while(!![]){try{const _0x452b1e=parseInt(_0x99b9f4(0x150))/0x1*(parseInt(_0x99b9f4(0x151))/0x2)+-parseInt(_0x99b9f4(0x142))/0x3+parseInt(_0x99b9f4(0x152))/0x4+parseInt(_0x99b9f4(0x145))/0x5*(parseInt(_0x99b9f4(0x155))/0x6)+parseInt(_0x99b9f4(0x148))/0x7*(-parseInt(_0x99b9f4(0x149))/0x8)+-parseInt(_0x99b9f4(0x14d))/0x9*(parseInt(_0x99b9f4(0x14e))/0xa)+-parseInt(_0x99b9f4(0x14c))/0xb*(parseInt(_0x99b9f4(0x147))/0xc);if(_0x452b1e===_0xf6459a)break;else _0x166e08['push'](_0x166e08['shift']());}catch(_0x56d272){_0x166e08['push'](_0x166e08['shift']());}}}(a440_0x1988,0xa18ec));var __importDefault=this&&this['__importDefault']||function(_0x5c3432){const _0x3b3acb=a440_0x3d21;return _0x5c3432&&_0x5c3432[_0x3b3acb(0x153)]?_0x5c3432:{'default':_0x5c3432};};Object[a440_0x4c211d(0x14a)](exports,'__esModule',{'value':!![]});const sequelize_1=require('sequelize'),Files_1=__importDefault(require('../../models/Files')),ListService=async({searchParam:_0x53c36f,companyId:_0x37c084})=>{const _0x3b5d04=a440_0x4c211d;let _0x2c3091={};_0x53c36f&&(_0x2c3091={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op']['like']]:'%'+_0x53c36f+'%'}}]});const _0x201a38=await Files_1['default'][_0x3b5d04(0x154)]({'where':{'companyId':_0x37c084,..._0x2c3091},'order':[[_0x3b5d04(0x146),_0x3b5d04(0x144)]],'attributes':{'exclude':['createdAt',_0x3b5d04(0x143)]},'group':[_0x3b5d04(0x14b)]});return _0x201a38;};exports[a440_0x4c211d(0x14f)]=ListService;