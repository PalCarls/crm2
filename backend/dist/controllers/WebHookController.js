'use strict';const a39_0x3cfbbf=a39_0x5a94;(function(_0x1ac0d4,_0x197427){const _0x327044=a39_0x5a94,_0x3c90d7=_0x1ac0d4();while(!![]){try{const _0x5290dc=-parseInt(_0x327044(0x13d))/0x1*(-parseInt(_0x327044(0x134))/0x2)+-parseInt(_0x327044(0x146))/0x3*(-parseInt(_0x327044(0x13b))/0x4)+-parseInt(_0x327044(0x12c))/0x5+-parseInt(_0x327044(0x131))/0x6*(parseInt(_0x327044(0x140))/0x7)+parseInt(_0x327044(0x144))/0x8*(parseInt(_0x327044(0x136))/0x9)+parseInt(_0x327044(0x13a))/0xa*(-parseInt(_0x327044(0x143))/0xb)+parseInt(_0x327044(0x139))/0xc;if(_0x5290dc===_0x197427)break;else _0x3c90d7['push'](_0x3c90d7['shift']());}catch(_0x5ec4dc){_0x3c90d7['push'](_0x3c90d7['shift']());}}}(a39_0x5af1,0xc9bd4));function a39_0x5a94(_0x552554,_0x49dbee){const _0x5af1e8=a39_0x5af1();return a39_0x5a94=function(_0x5a94c2,_0xaa7daf){_0x5a94c2=_0x5a94c2-0x12a;let _0x4a55bb=_0x5af1e8[_0x5a94c2];return _0x4a55bb;},a39_0x5a94(_0x552554,_0x49dbee);}var __importDefault=this&&this['__importDefault']||function(_0x5b6e54){const _0x506a9f=a39_0x5a94;return _0x5b6e54&&_0x5b6e54[_0x506a9f(0x13f)]?_0x5b6e54:{'default':_0x5b6e54};};function a39_0x5af1(){const _0x743272=['object','7068888GdREEW','79630RJyRvI','4752WtUXzu','entry','71oSygDH','webHook','__esModule','7924HhwXxL','default','forEach','2123VAbQPp','8ZmcYDv','handleMessage','2979DqZuTl','json','send','defineProperty','messaging','findOne','../models/Whatsapp','instagram','1827705RWQHGz','../services/FacebookServices/facebookMessageListener','status','query','facebook','7506OsOZeN','whaticket','env','36382gldhAe','index','9760833diRcCS','EVENT_RECEIVED'];a39_0x5af1=function(){return _0x743272;};return a39_0x5af1();}Object[a39_0x3cfbbf(0x149)](exports,a39_0x3cfbbf(0x13f),{'value':!![]}),exports['webHook']=exports[a39_0x3cfbbf(0x135)]=void 0x0;const Whatsapp_1=__importDefault(require(a39_0x3cfbbf(0x12a))),facebookMessageListener_1=require(a39_0x3cfbbf(0x12d)),index=async(_0x289b6c,_0x20b801)=>{const _0x42065d=a39_0x3cfbbf,_0x435e16=process[_0x42065d(0x133)]['VERIFY_TOKEN']||_0x42065d(0x132),_0xcfc373=_0x289b6c['query']['hub.mode'],_0x86b1aa=_0x289b6c[_0x42065d(0x12f)]['hub.verify_token'],_0x57e130=_0x289b6c[_0x42065d(0x12f)]['hub.challenge'];if(_0xcfc373&&_0x86b1aa){if(_0xcfc373==='subscribe'&&_0x86b1aa===_0x435e16)return _0x20b801[_0x42065d(0x12e)](0xc8)[_0x42065d(0x148)](_0x57e130);}return _0x20b801[_0x42065d(0x12e)](0x193)[_0x42065d(0x147)]({'message':'Forbidden'});};exports[a39_0x3cfbbf(0x135)]=index;const webHook=async(_0x33fc70,_0x144b23)=>{const _0x7d03d9=a39_0x3cfbbf;try{const {body:_0x22cedb}=_0x33fc70;if(_0x22cedb[_0x7d03d9(0x138)]==='page'||_0x22cedb[_0x7d03d9(0x138)]==='instagram'){let _0x37da3a;return _0x22cedb[_0x7d03d9(0x138)]==='page'?_0x37da3a=_0x7d03d9(0x130):_0x37da3a=_0x7d03d9(0x12b),_0x22cedb[_0x7d03d9(0x13c)]?.['forEach'](async _0x3b1e96=>{const _0x1eb1b4=_0x7d03d9,_0x36b3b9=await Whatsapp_1[_0x1eb1b4(0x141)][_0x1eb1b4(0x14b)]({'where':{'facebookPageUserId':_0x3b1e96['id'],'channel':_0x37da3a}});_0x36b3b9&&_0x3b1e96[_0x1eb1b4(0x14a)]?.[_0x1eb1b4(0x142)](_0x501971=>{const _0xdca70c=_0x1eb1b4;(0x0,facebookMessageListener_1[_0xdca70c(0x145)])(_0x36b3b9,_0x501971,_0x37da3a,_0x36b3b9['companyId']);});}),_0x144b23['status'](0xc8)[_0x7d03d9(0x147)]({'message':_0x7d03d9(0x137)});}return _0x144b23[_0x7d03d9(0x12e)](0x194)['json']({'message':_0x22cedb});}catch(_0x704bc9){return _0x144b23[_0x7d03d9(0x12e)](0x1f4)[_0x7d03d9(0x147)]({'message':_0x704bc9});}};exports[a39_0x3cfbbf(0x13e)]=webHook;