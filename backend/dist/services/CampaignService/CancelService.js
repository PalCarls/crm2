'use strict';const a400_0x3dea51=a400_0x38dd;(function(_0x45ff2e,_0x3bc516){const _0x533ef6=a400_0x38dd,_0x5db60b=_0x45ff2e();while(!![]){try{const _0x471c3c=parseInt(_0x533ef6(0x8d))/0x1*(parseInt(_0x533ef6(0x9e))/0x2)+-parseInt(_0x533ef6(0x8e))/0x3*(parseInt(_0x533ef6(0xa1))/0x4)+-parseInt(_0x533ef6(0x98))/0x5+parseInt(_0x533ef6(0x9c))/0x6*(-parseInt(_0x533ef6(0x94))/0x7)+parseInt(_0x533ef6(0x93))/0x8*(-parseInt(_0x533ef6(0x8f))/0x9)+-parseInt(_0x533ef6(0x9f))/0xa+parseInt(_0x533ef6(0xa2))/0xb;if(_0x471c3c===_0x3bc516)break;else _0x5db60b['push'](_0x5db60b['shift']());}catch(_0x4698f6){_0x5db60b['push'](_0x5db60b['shift']());}}}(a400_0x55e3,0xefbb2));var __importDefault=this&&this[a400_0x3dea51(0x91)]||function(_0x3c9f4d){const _0x31a338=a400_0x3dea51;return _0x3c9f4d&&_0x3c9f4d[_0x31a338(0x90)]?_0x3c9f4d:{'default':_0x3c9f4d};};Object[a400_0x3dea51(0x99)](exports,a400_0x3dea51(0x90),{'value':!![]}),exports['CancelService']=void 0x0;const sequelize_1=require(a400_0x3dea51(0xa0)),Campaign_1=__importDefault(require(a400_0x3dea51(0xa4))),CampaignShipping_1=__importDefault(require(a400_0x3dea51(0x95))),queues_1=require(a400_0x3dea51(0x92));function a400_0x38dd(_0x457913,_0x1c5747){const _0x55e31=a400_0x55e3();return a400_0x38dd=function(_0x38ddf8,_0x1f0c65){_0x38ddf8=_0x38ddf8-0x8c;let _0xb7b8ed=_0x55e31[_0x38ddf8];return _0xb7b8ed;},a400_0x38dd(_0x457913,_0x1c5747);}function a400_0x55e3(){const _0x56f34f=['6hghrfG','findByPk','2CowcPj','16237300gRxULi','sequelize','56QhBBqs','49305465IbDhak','push','../../models/Campaign','jobId','455165yPuOGQ','232971uRYFKM','158031lepjRJ','__esModule','__importDefault','../../queues','272tBRcql','4316844mjmvmM','../../models/CampaignShipping','update','CANCELADA','154580usbfPj','defineProperty','default','remove'];a400_0x55e3=function(){return _0x56f34f;};return a400_0x55e3();}async function CancelService(_0x5db167){const _0x2d5423=a400_0x3dea51,_0x555028=await Campaign_1['default'][_0x2d5423(0x9d)](_0x5db167);await _0x555028[_0x2d5423(0x96)]({'status':_0x2d5423(0x97)});const _0x58536c=await CampaignShipping_1[_0x2d5423(0x9a)]['findAll']({'where':{'campaignId':_0x555028['id'],'jobId':{[sequelize_1['Op']['not']]:null},'deliveredAt':null}}),_0x3fd197=[];for(let _0x1072f0 of _0x58536c){const _0x271d74=await queues_1['campaignQueue']['getJob'](+_0x1072f0[_0x2d5423(0x8c)]);_0x3fd197[_0x2d5423(0xa3)](_0x271d74[_0x2d5423(0x9b)]());}await Promise['all'](_0x3fd197);}exports['CancelService']=CancelService;