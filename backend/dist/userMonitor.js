'use strict';const a584_0xb7e8e3=a584_0x2e88;function a584_0x4da0(){const _0x3c28c8=['14616PJRyDZ','Usuário\x20passado\x20para\x20offline:\x20','__importDefault','sequelize','logger','initUserMonitorQueues','userMonitor','query','*\x20*\x20*\x20*\x20*','__importStar','__createBinding','4096695AirRXr','isNil','128489cLOjBm','process','VerifyLoginStatus','REDIS_URI','5656Yllrjb','data','defineProperty','4228322GGWxMy','__setModuleDefault','./database','bull','update','1317225ffKCeD','./utils/logger','./models/User','env','Queue:\x20monitoramento\x20de\x20status\x20de\x20usuário\x20inicializado','key','6325620jFxSyj','writable','verify-login-status','__esModule','default','save','QueryTypes','2191996DxyqYM','create','captureException','UserMonitor','lodash','6jteEiA','findByPk','configurable','info','hasOwnProperty','get'];a584_0x4da0=function(){return _0x3c28c8;};return a584_0x4da0();}function a584_0x2e88(_0x204e32,_0x207f30){const _0x4da095=a584_0x4da0();return a584_0x2e88=function(_0x2e8822,_0x5c4122){_0x2e8822=_0x2e8822-0x1c5;let _0x4a0235=_0x4da095[_0x2e8822];return _0x4a0235;},a584_0x2e88(_0x204e32,_0x207f30);}(function(_0x45dfdd,_0x13974e){const _0x77b40e=a584_0x2e88,_0x406ef0=_0x45dfdd();while(!![]){try{const _0xb9c302=-parseInt(_0x77b40e(0x1c9))/0x1*(parseInt(_0x77b40e(0x1e7))/0x2)+-parseInt(_0x77b40e(0x1d5))/0x3+-parseInt(_0x77b40e(0x1e2))/0x4+-parseInt(_0x77b40e(0x1c7))/0x5+parseInt(_0x77b40e(0x1db))/0x6+parseInt(_0x77b40e(0x1d0))/0x7+parseInt(_0x77b40e(0x1cd))/0x8*(parseInt(_0x77b40e(0x1ed))/0x9);if(_0xb9c302===_0x13974e)break;else _0x406ef0['push'](_0x406ef0['shift']());}catch(_0x39a168){_0x406ef0['push'](_0x406ef0['shift']());}}}(a584_0x4da0,0x960cc));var __createBinding=this&&this[a584_0xb7e8e3(0x1c6)]||(Object[a584_0xb7e8e3(0x1e3)]?function(_0x46455e,_0x3d612a,_0x36e6eb,_0x1cbbee){const _0x99a1a0=a584_0xb7e8e3;if(_0x1cbbee===undefined)_0x1cbbee=_0x36e6eb;var _0x2f036e=Object['getOwnPropertyDescriptor'](_0x3d612a,_0x36e6eb);(!_0x2f036e||(_0x99a1a0(0x1ec)in _0x2f036e?!_0x3d612a[_0x99a1a0(0x1de)]:_0x2f036e[_0x99a1a0(0x1dc)]||_0x2f036e[_0x99a1a0(0x1e9)]))&&(_0x2f036e={'enumerable':!![],'get':function(){return _0x3d612a[_0x36e6eb];}}),Object[_0x99a1a0(0x1cf)](_0x46455e,_0x1cbbee,_0x2f036e);}:function(_0x45850f,_0x295072,_0xccd9e5,_0x4431da){if(_0x4431da===undefined)_0x4431da=_0xccd9e5;_0x45850f[_0x4431da]=_0x295072[_0xccd9e5];}),__setModuleDefault=this&&this[a584_0xb7e8e3(0x1d1)]||(Object[a584_0xb7e8e3(0x1e3)]?function(_0x5dd8f9,_0x2200b4){const _0x3c069a=a584_0xb7e8e3;Object[_0x3c069a(0x1cf)](_0x5dd8f9,'default',{'enumerable':!![],'value':_0x2200b4});}:function(_0x3b1a02,_0x39298a){const _0x3541e0=a584_0xb7e8e3;_0x3b1a02[_0x3541e0(0x1df)]=_0x39298a;}),__importStar=this&&this[a584_0xb7e8e3(0x1c5)]||function(_0x5a7570){const _0x48f762=a584_0xb7e8e3;if(_0x5a7570&&_0x5a7570['__esModule'])return _0x5a7570;var _0x4b175e={};if(_0x5a7570!=null){for(var _0x1949d6 in _0x5a7570)if(_0x1949d6!==_0x48f762(0x1df)&&Object['prototype'][_0x48f762(0x1eb)]['call'](_0x5a7570,_0x1949d6))__createBinding(_0x4b175e,_0x5a7570,_0x1949d6);}return __setModuleDefault(_0x4b175e,_0x5a7570),_0x4b175e;},__importDefault=this&&this[a584_0xb7e8e3(0x1ef)]||function(_0x352e38){return _0x352e38&&_0x352e38['__esModule']?_0x352e38:{'default':_0x352e38};};Object['defineProperty'](exports,a584_0xb7e8e3(0x1de),{'value':!![]}),exports[a584_0xb7e8e3(0x1f2)]=exports[a584_0xb7e8e3(0x1f3)]=void 0x0;const bull_1=__importDefault(require(a584_0xb7e8e3(0x1d3))),Sentry=__importStar(require('@sentry/node')),sequelize_1=require(a584_0xb7e8e3(0x1f0)),lodash_1=require(a584_0xb7e8e3(0x1e6)),logger_1=require(a584_0xb7e8e3(0x1d6)),database_1=__importDefault(require(a584_0xb7e8e3(0x1d2))),User_1=__importDefault(require(a584_0xb7e8e3(0x1d7))),connection=process[a584_0xb7e8e3(0x1d8)][a584_0xb7e8e3(0x1cc)]||'';exports['userMonitor']=new bull_1['default'](a584_0xb7e8e3(0x1e5),connection);async function handleLoginStatus(_0x5be33f){const _0x1c69fe=a584_0xb7e8e3,_0x4dd200=await database_1['default'][_0x1c69fe(0x1f4)]('select\x20id\x20from\x20\x22Users\x22\x20where\x20\x22updatedAt\x22\x20<\x20now()\x20-\x20\x275\x20minutes\x27::interval\x20and\x20online\x20=\x20true',{'type':sequelize_1[_0x1c69fe(0x1e1)]['SELECT']});for(let _0x52deb5 of _0x4dd200){try{const _0x18bdf6=await User_1[_0x1c69fe(0x1df)][_0x1c69fe(0x1e8)](_0x52deb5['id']);await _0x18bdf6[_0x1c69fe(0x1d4)]({'online':![]}),logger_1[_0x1c69fe(0x1f1)][_0x1c69fe(0x1ea)](_0x1c69fe(0x1ee)+_0x52deb5['id']);}catch(_0x2d335c){Sentry[_0x1c69fe(0x1e4)](_0x2d335c);}}}async function handleUserConnection(_0x59d22){const _0x279e3e=a584_0xb7e8e3;try{const {id:_0x49ac71}=_0x59d22[_0x279e3e(0x1ce)];if(!(0x0,lodash_1[_0x279e3e(0x1c8)])(_0x49ac71)&&_0x49ac71!=='null'){const _0xfa6ca4=await User_1[_0x279e3e(0x1df)]['findByPk'](_0x49ac71);_0xfa6ca4&&(_0xfa6ca4['online']=!![],await _0xfa6ca4[_0x279e3e(0x1e0)]());}}catch(_0x2f732a){Sentry[_0x279e3e(0x1e4)](_0x2f732a);}}exports[a584_0xb7e8e3(0x1f3)][a584_0xb7e8e3(0x1ca)]('UserConnection',handleUserConnection),exports[a584_0xb7e8e3(0x1f3)]['process'](a584_0xb7e8e3(0x1cb),handleLoginStatus);async function initUserMonitorQueues(){const _0x489787=a584_0xb7e8e3,_0x45b046=await exports['userMonitor']['getRepeatableJobs']();for(let _0x2cf5dc of _0x45b046){await exports[_0x489787(0x1f3)]['removeRepeatableByKey'](_0x2cf5dc[_0x489787(0x1da)]);}exports[_0x489787(0x1f3)]['add'](_0x489787(0x1cb),{},{'repeat':{'cron':_0x489787(0x1f5),'key':_0x489787(0x1dd)},'removeOnComplete':{'age':0x3c*0x3c,'count':0xa},'removeOnFail':{'age':0x3c*0x3c,'count':0xa}}),logger_1['logger'][_0x489787(0x1ea)](_0x489787(0x1d9));}exports[a584_0xb7e8e3(0x1f2)]=initUserMonitorQueues;