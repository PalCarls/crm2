'use strict';function a317_0x5378(_0x1381aa,_0x18e466){var _0x369338=a317_0x3693();return a317_0x5378=function(_0x5378b0,_0x58f2a1){_0x5378b0=_0x5378b0-0x189;var _0x17a95e=_0x369338[_0x5378b0];return _0x17a95e;},a317_0x5378(_0x1381aa,_0x18e466);}var a317_0x56eb51=a317_0x5378;function a317_0x3693(){var _0x548ea6=['writable','19346160XztDvB','call','../middleware/isAuth','673813SjZkny','defineProperty','548812OvgItC','__importStar','default','express','3748122sNqYrV','2578jMhKdH','post','/subscription/create/webhook','createSubscription','create','delete','get','__importDefault','webhook','__setModuleDefault','3742290AUbVmO','/subscription/return/c5c0f5a4-efe2-447f-8c73-55f8c0f07284/pix','6547068QMgasg','configurable','getOwnPropertyDescriptor','deleteWebhook','23PbAuWg','__createBinding','prototype','Router','__esModule','createWebhook'];a317_0x3693=function(){return _0x548ea6;};return a317_0x3693();}(function(_0x42e801,_0x147111){var _0x4f2b40=a317_0x5378,_0xb5cadf=_0x42e801();while(!![]){try{var _0x36afc9=parseInt(_0x4f2b40(0x1a7))/0x1*(-parseInt(_0x4f2b40(0x197))/0x2)+parseInt(_0x4f2b40(0x196))/0x3+parseInt(_0x4f2b40(0x192))/0x4+parseInt(_0x4f2b40(0x1a1))/0x5+parseInt(_0x4f2b40(0x1a3))/0x6+-parseInt(_0x4f2b40(0x190))/0x7+-parseInt(_0x4f2b40(0x18d))/0x8;if(_0x36afc9===_0x147111)break;else _0xb5cadf['push'](_0xb5cadf['shift']());}catch(_0x57b0f6){_0xb5cadf['push'](_0xb5cadf['shift']());}}}(a317_0x3693,0xa6835));var __createBinding=this&&this[a317_0x56eb51(0x1a8)]||(Object[a317_0x56eb51(0x19b)]?function(_0x5bd136,_0x23de01,_0x1e9d0a,_0x506f1f){var _0x329893=a317_0x56eb51;if(_0x506f1f===undefined)_0x506f1f=_0x1e9d0a;var _0x1e7fc9=Object[_0x329893(0x1a5)](_0x23de01,_0x1e9d0a);(!_0x1e7fc9||(_0x329893(0x19d)in _0x1e7fc9?!_0x23de01[_0x329893(0x18a)]:_0x1e7fc9[_0x329893(0x18c)]||_0x1e7fc9[_0x329893(0x1a4)]))&&(_0x1e7fc9={'enumerable':!![],'get':function(){return _0x23de01[_0x1e9d0a];}}),Object[_0x329893(0x191)](_0x5bd136,_0x506f1f,_0x1e7fc9);}:function(_0x136d5a,_0x14a970,_0x21bf12,_0x5d7fc4){if(_0x5d7fc4===undefined)_0x5d7fc4=_0x21bf12;_0x136d5a[_0x5d7fc4]=_0x14a970[_0x21bf12];}),__setModuleDefault=this&&this[a317_0x56eb51(0x1a0)]||(Object[a317_0x56eb51(0x19b)]?function(_0x171c65,_0x3c9400){var _0x2fac29=a317_0x56eb51;Object[_0x2fac29(0x191)](_0x171c65,'default',{'enumerable':!![],'value':_0x3c9400});}:function(_0x304c85,_0xa4800c){var _0x14bd64=a317_0x56eb51;_0x304c85[_0x14bd64(0x194)]=_0xa4800c;}),__importStar=this&&this[a317_0x56eb51(0x193)]||function(_0x4e2f84){var _0x5d4d8b=a317_0x56eb51;if(_0x4e2f84&&_0x4e2f84[_0x5d4d8b(0x18a)])return _0x4e2f84;var _0x3eb0c4={};if(_0x4e2f84!=null){for(var _0xcf8ce4 in _0x4e2f84)if(_0xcf8ce4!=='default'&&Object[_0x5d4d8b(0x1a9)]['hasOwnProperty'][_0x5d4d8b(0x18e)](_0x4e2f84,_0xcf8ce4))__createBinding(_0x3eb0c4,_0x4e2f84,_0xcf8ce4);}return __setModuleDefault(_0x3eb0c4,_0x4e2f84),_0x3eb0c4;},__importDefault=this&&this[a317_0x56eb51(0x19e)]||function(_0x43f05e){var _0x3b1e9d=a317_0x56eb51;return _0x43f05e&&_0x43f05e[_0x3b1e9d(0x18a)]?_0x43f05e:{'default':_0x43f05e};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require(a317_0x56eb51(0x195))),isAuth_1=__importDefault(require(a317_0x56eb51(0x18f))),SubscriptionController=__importStar(require('../controllers/SubscriptionController')),subscriptionRoutes=express_1['default'][a317_0x56eb51(0x189)]();subscriptionRoutes[a317_0x56eb51(0x198)]('/subscription',isAuth_1['default'],SubscriptionController[a317_0x56eb51(0x19a)]),subscriptionRoutes[a317_0x56eb51(0x198)]('/subscription/create/webhook',SubscriptionController[a317_0x56eb51(0x18b)]),subscriptionRoutes[a317_0x56eb51(0x19c)](a317_0x56eb51(0x199),isAuth_1[a317_0x56eb51(0x194)],SubscriptionController[a317_0x56eb51(0x1a6)]),subscriptionRoutes['post'](a317_0x56eb51(0x1a2),SubscriptionController[a317_0x56eb51(0x19f)]),exports[a317_0x56eb51(0x194)]=subscriptionRoutes;