'use strict';function a266_0x2ca0(){const _0x240224=['delFromParams','177464EscUoA','util','default','78780yeukOX','54260szEkIc','1309wLvEMp','bind','80843BjpvpF','getFromParams','9416pbHggR','encryptParams','set','crypto-js/enc-base64','map','ioredis','setFromParams','15CveGnY','get','promisify','redis','instance','defineProperty','stringify','__esModule','getKeys','getInstance','del','REDIS_URI_CONNECTION','../config/redis','keys','385765Oainqj','all','3791421XEdUDk'];a266_0x2ca0=function(){return _0x240224;};return a266_0x2ca0();}function a266_0xe82e(_0x10354a,_0x1aa5b0){const _0x2ca0af=a266_0x2ca0();return a266_0xe82e=function(_0xe82efc,_0x578afe){_0xe82efc=_0xe82efc-0xdb;let _0x1d54bb=_0x2ca0af[_0xe82efc];return _0x1d54bb;},a266_0xe82e(_0x10354a,_0x1aa5b0);}const a266_0x349a94=a266_0xe82e;(function(_0x55cd49,_0x5e871a){const _0x22b32d=a266_0xe82e,_0x24973a=_0x55cd49();while(!![]){try{const _0x4b10fb=parseInt(_0x22b32d(0xf6))/0x1+parseInt(_0x22b32d(0xef))/0x2+-parseInt(_0x22b32d(0xdd))/0x3*(-parseInt(_0x22b32d(0xf3))/0x4)+parseInt(_0x22b32d(0xeb))/0x5+parseInt(_0x22b32d(0xf2))/0x6+parseInt(_0x22b32d(0xf4))/0x7*(parseInt(_0x22b32d(0xf8))/0x8)+-parseInt(_0x22b32d(0xed))/0x9;if(_0x4b10fb===_0x5e871a)break;else _0x24973a['push'](_0x24973a['shift']());}catch(_0x481975){_0x24973a['push'](_0x24973a['shift']());}}}(a266_0x2ca0,0x1ee31));var __importDefault=this&&this['__importDefault']||function(_0x2704ba){const _0x268b3f=a266_0xe82e;return _0x2704ba&&_0x2704ba[_0x268b3f(0xe4)]?_0x2704ba:{'default':_0x2704ba};};Object[a266_0x349a94(0xe2)](exports,a266_0x349a94(0xe4),{'value':!![]});const util_1=__importDefault(require(a266_0x349a94(0xf0))),ioredis_1=__importDefault(require(a266_0x349a94(0xdb))),hmac_sha512_1=__importDefault(require('crypto-js/hmac-sha512')),enc_base64_1=__importDefault(require(a266_0x349a94(0xfb))),redis_1=require(a266_0x349a94(0xe9));class CacheSingleton{constructor(_0xea671e){const _0xbb6239=a266_0x349a94;this[_0xbb6239(0xe0)]=_0xea671e,this[_0xbb6239(0xfa)]=util_1[_0xbb6239(0xf1)][_0xbb6239(0xdf)](this[_0xbb6239(0xe0)][_0xbb6239(0xfa)])['bind'](this['redis']),this['get']=util_1[_0xbb6239(0xf1)]['promisify'](this[_0xbb6239(0xe0)]['get'])[_0xbb6239(0xf5)](this[_0xbb6239(0xe0)]),this[_0xbb6239(0xea)]=util_1[_0xbb6239(0xf1)][_0xbb6239(0xdf)](this[_0xbb6239(0xe0)]['keys'])[_0xbb6239(0xf5)](this[_0xbb6239(0xe0)]),this[_0xbb6239(0xe7)]=util_1[_0xbb6239(0xf1)][_0xbb6239(0xdf)](this[_0xbb6239(0xe0)][_0xbb6239(0xe7)])[_0xbb6239(0xf5)](this[_0xbb6239(0xe0)]);}static[a266_0x349a94(0xe6)](_0x32a43e){const _0x41005e=a266_0x349a94;return!CacheSingleton[_0x41005e(0xe1)]&&(CacheSingleton[_0x41005e(0xe1)]=new CacheSingleton(_0x32a43e)),CacheSingleton['instance'];}static[a266_0x349a94(0xf9)](_0x2d629d){const _0x2c286f=a266_0x349a94,_0x42e95a=JSON['stringify'](_0x2d629d),_0x2b378b=enc_base64_1['default'][_0x2c286f(0xe3)]((0x0,hmac_sha512_1[_0x2c286f(0xf1)])(_0x2d629d,_0x42e95a));return _0x2b378b;}async[a266_0x349a94(0xfa)](_0x4d3439,_0x1e8c20,_0x6da1e1,_0x50a945){const _0x4408ee=a266_0x349a94,_0x2750d1=util_1[_0x4408ee(0xf1)]['promisify'](this[_0x4408ee(0xe0)]['set'])[_0x4408ee(0xf5)](this['redis']);if(_0x6da1e1!==undefined&&_0x50a945!==undefined)return _0x2750d1(_0x4d3439,_0x1e8c20,_0x6da1e1,_0x50a945);return _0x2750d1(_0x4d3439,_0x1e8c20);}async['get'](_0x33d3c4){const _0x3c5efc=a266_0x349a94,_0x557810=util_1['default'][_0x3c5efc(0xdf)](this['redis'][_0x3c5efc(0xde)])[_0x3c5efc(0xf5)](this[_0x3c5efc(0xe0)]);return _0x557810(_0x33d3c4);}async['getKeys'](_0x55fe21){const _0x5d3b8a=a266_0x349a94,_0x3aeaf9=util_1['default'][_0x5d3b8a(0xdf)](this['redis'][_0x5d3b8a(0xea)])[_0x5d3b8a(0xf5)](this[_0x5d3b8a(0xe0)]);return _0x3aeaf9(_0x55fe21);}async[a266_0x349a94(0xe7)](_0xff3dc5){const _0x11dc7d=a266_0x349a94,_0x3f16be=util_1[_0x11dc7d(0xf1)][_0x11dc7d(0xdf)](this[_0x11dc7d(0xe0)]['del'])[_0x11dc7d(0xf5)](this['redis']);return _0x3f16be(_0xff3dc5);}async['delFromPattern'](_0x4b6c91){const _0x2bc3de=a266_0x349a94,_0x296ccc=await this[_0x2bc3de(0xe5)](_0x4b6c91);await Promise[_0x2bc3de(0xec)](_0x296ccc[_0x2bc3de(0xfc)](_0x2c992a=>this[_0x2bc3de(0xe7)](_0x2c992a)));}async[a266_0x349a94(0xdc)](_0x37bb68,_0x33a412,_0x5806f8,_0x4e4b90,_0x1a18e0){const _0x550c1e=a266_0x349a94,_0x36bda4=_0x37bb68+':'+CacheSingleton[_0x550c1e(0xf9)](_0x33a412);if(_0x4e4b90!==undefined&&_0x1a18e0!==undefined)return this[_0x550c1e(0xfa)](_0x36bda4,_0x5806f8,_0x4e4b90,_0x1a18e0);return this[_0x550c1e(0xfa)](_0x36bda4,_0x5806f8);}async[a266_0x349a94(0xf7)](_0x53f072,_0x1879ea){const _0x2333d9=a266_0x349a94,_0x2b7319=_0x53f072+':'+CacheSingleton[_0x2333d9(0xf9)](_0x1879ea);return this[_0x2333d9(0xde)](_0x2b7319);}async[a266_0x349a94(0xee)](_0xb1b8f8,_0x2ec3d0){const _0x133de4=a266_0x349a94,_0x5e0438=_0xb1b8f8+':'+CacheSingleton[_0x133de4(0xf9)](_0x2ec3d0);return this[_0x133de4(0xe7)](_0x5e0438);}['getRedisInstance'](){return this['redis'];}}const redisInstance=new ioredis_1[(a266_0x349a94(0xf1))](redis_1[a266_0x349a94(0xe8)]);exports['default']=CacheSingleton['getInstance'](redisInstance);