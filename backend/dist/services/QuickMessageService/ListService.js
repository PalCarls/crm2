'use strict';const a502_0x54a0c2=a502_0xfe96;function a502_0x40e7(){const _0x1c298b=['356jmSEWs','1130470oBDyUL','LIKE','col','log','491876HlIOyz','defineProperty','65186yKNEnx','shortcode','775953aOlVYf','sequelize','1421250dxSEop','__importDefault','1307KdVROl','1490LHENqC','length','Sequelize','792HCdVda','4caSmzB','14928vVmvGZ','trim','findAndCountAll','__esModule','default'];a502_0x40e7=function(){return _0x1c298b;};return a502_0x40e7();}(function(_0x467788,_0x1d56cb){const _0x4b70bd=a502_0xfe96,_0x456c0f=_0x467788();while(!![]){try{const _0x525de8=parseInt(_0x4b70bd(0x1c2))/0x1*(-parseInt(_0x4b70bd(0x1cd))/0x2)+-parseInt(_0x4b70bd(0x1be))/0x3*(parseInt(_0x4b70bd(0x1c7))/0x4)+parseInt(_0x4b70bd(0x1ce))/0x5+-parseInt(_0x4b70bd(0x1c0))/0x6+-parseInt(_0x4b70bd(0x1ba))/0x7+-parseInt(_0x4b70bd(0x1c8))/0x8*(parseInt(_0x4b70bd(0x1c6))/0x9)+parseInt(_0x4b70bd(0x1c3))/0xa*(parseInt(_0x4b70bd(0x1bc))/0xb);if(_0x525de8===_0x1d56cb)break;else _0x456c0f['push'](_0x456c0f['shift']());}catch(_0x26c0d0){_0x456c0f['push'](_0x456c0f['shift']());}}}(a502_0x40e7,0x23bf4));var __importDefault=this&&this[a502_0x54a0c2(0x1c1)]||function(_0x10cb83){const _0x22118c=a502_0x54a0c2;return _0x10cb83&&_0x10cb83[_0x22118c(0x1cb)]?_0x10cb83:{'default':_0x10cb83};};function a502_0xfe96(_0x2ec518,_0x2a508d){const _0x40e780=a502_0x40e7();return a502_0xfe96=function(_0xfe9657,_0x6a06cf){_0xfe9657=_0xfe9657-0x1b9;let _0x17efed=_0x40e780[_0xfe9657];return _0x17efed;},a502_0xfe96(_0x2ec518,_0x2a508d);}Object[a502_0x54a0c2(0x1bb)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a502_0x54a0c2(0x1bf)),QuickMessage_1=__importDefault(require('../../models/QuickMessage')),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x75821})=>{const _0x1f9523=a502_0x54a0c2;let _0x34c23f={[sequelize_1['Op']['or']]:[{'shortcode':sequelize_1[_0x1f9523(0x1c5)]['where'](sequelize_1[_0x1f9523(0x1c5)]['fn']('LOWER',sequelize_1[_0x1f9523(0x1c5)][_0x1f9523(0x1d0)](_0x1f9523(0x1bd))),_0x1f9523(0x1cf),'%'+searchParam['toLowerCase']()[_0x1f9523(0x1c9)]()+'%')}],'companyId':{[sequelize_1['Op']['eq']]:_0x75821}};console[_0x1f9523(0x1b9)](searchParam);const _0x2759a2=0x14,_0x5459df=_0x2759a2*(+pageNumber-0x1),{count:_0x1ccba1,rows:_0x2ae279}=await QuickMessage_1[_0x1f9523(0x1cc)][_0x1f9523(0x1ca)]({'where':_0x34c23f,'limit':_0x2759a2,'offset':_0x5459df,'order':[[_0x1f9523(0x1bd),'ASC']]}),_0x52aeca=_0x1ccba1>_0x5459df+_0x2ae279[_0x1f9523(0x1c4)];return{'records':_0x2ae279,'count':_0x1ccba1,'hasMore':_0x52aeca};};exports['default']=ListService;