'use strict';const a345_0x1508ed=a345_0x4cce;(function(_0x2d0f96,_0x3986c5){const _0xfa287f=a345_0x4cce,_0x44b450=_0x2d0f96();while(!![]){try{const _0x2852fe=-parseInt(_0xfa287f(0x1c1))/0x1+parseInt(_0xfa287f(0x1d5))/0x2*(-parseInt(_0xfa287f(0x1bb))/0x3)+-parseInt(_0xfa287f(0x1dd))/0x4*(-parseInt(_0xfa287f(0x1cc))/0x5)+parseInt(_0xfa287f(0x1cb))/0x6*(parseInt(_0xfa287f(0x1c8))/0x7)+parseInt(_0xfa287f(0x1e4))/0x8+-parseInt(_0xfa287f(0x1d6))/0x9*(parseInt(_0xfa287f(0x1be))/0xa)+-parseInt(_0xfa287f(0x1d1))/0xb*(-parseInt(_0xfa287f(0x1c6))/0xc);if(_0x2852fe===_0x3986c5)break;else _0x44b450['push'](_0x44b450['shift']());}catch(_0x1a0e33){_0x44b450['push'](_0x44b450['shift']());}}}(a345_0x22ab,0x76457));var __createBinding=this&&this['__createBinding']||(Object[a345_0x1508ed(0x1d2)]?function(_0x842a35,_0x4afa46,_0x780fd2,_0x34037a){const _0x39d202=a345_0x1508ed;if(_0x34037a===undefined)_0x34037a=_0x780fd2;var _0x292055=Object[_0x39d202(0x1da)](_0x4afa46,_0x780fd2);(!_0x292055||(_0x39d202(0x1c5)in _0x292055?!_0x4afa46[_0x39d202(0x1b9)]:_0x292055[_0x39d202(0x1e2)]||_0x292055[_0x39d202(0x1dc)]))&&(_0x292055={'enumerable':!![],'get':function(){return _0x4afa46[_0x780fd2];}}),Object[_0x39d202(0x1c9)](_0x842a35,_0x34037a,_0x292055);}:function(_0x25e035,_0x9929bd,_0x30de65,_0xbe94b3){if(_0xbe94b3===undefined)_0xbe94b3=_0x30de65;_0x25e035[_0xbe94b3]=_0x9929bd[_0x30de65];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a345_0x1508ed(0x1d2)]?function(_0x5d547e,_0x514c6f){const _0x14d935=a345_0x1508ed;Object[_0x14d935(0x1c9)](_0x5d547e,_0x14d935(0x1d0),{'enumerable':!![],'value':_0x514c6f});}:function(_0x36b0f9,_0x50cd17){const _0x1b849a=a345_0x1508ed;_0x36b0f9[_0x1b849a(0x1d0)]=_0x50cd17;}),__importStar=this&&this[a345_0x1508ed(0x1e3)]||function(_0x2b3295){const _0x685af9=a345_0x1508ed;if(_0x2b3295&&_0x2b3295[_0x685af9(0x1b9)])return _0x2b3295;var _0x3077de={};if(_0x2b3295!=null){for(var _0x291af9 in _0x2b3295)if(_0x291af9!==_0x685af9(0x1d0)&&Object[_0x685af9(0x1db)][_0x685af9(0x1bf)][_0x685af9(0x1e5)](_0x2b3295,_0x291af9))__createBinding(_0x3077de,_0x2b3295,_0x291af9);}return __setModuleDefault(_0x3077de,_0x2b3295),_0x3077de;},__importDefault=this&&this[a345_0x1508ed(0x1b5)]||function(_0x488950){const _0x4107ad=a345_0x1508ed;return _0x488950&&_0x488950[_0x4107ad(0x1b9)]?_0x488950:{'default':_0x488950};};function a345_0x22ab(){const _0x28130f=['@sentry/node','20vHQEvW','hasOwnProperty','captureException','852142uieRsv','UserConnection','process','removeRepeatableByKey','get','24wCGETe','SELECT','2632315upSSrq','defineProperty','*\x20*\x20*\x20*\x20*','12WQZrvN','5mIpLSc','../utils/logger','update','isNil','default','5962231dzAtvP','create','VerifyLoginStatus','findByPk','2ZVstjx','2410371dwcgIR','QueryTypes','../database','info','getOwnPropertyDescriptor','prototype','configurable','2520536TbRynD','select\x20id\x20from\x20\x22Users\x22\x20where\x20\x22updatedAt\x22\x20<\x20now()\x20-\x20\x275\x20minutes\x27::interval\x20and\x20online\x20=\x20true','UserMonitor','query','userMonitor','writable','__importStar','564368euZTZx','call','initUserMonitorQueues','__importDefault','lodash','data','verify-loginstatus','__esModule','key','1993779sSHVLJ','Queue:\x20monitoramento\x20de\x20status\x20de\x20usuário\x20inicializado'];a345_0x22ab=function(){return _0x28130f;};return a345_0x22ab();}Object[a345_0x1508ed(0x1c9)](exports,a345_0x1508ed(0x1b9),{'value':!![]}),exports['initUserMonitorQueues']=exports[a345_0x1508ed(0x1e1)]=void 0x0;const bull_1=__importDefault(require('bull')),Sentry=__importStar(require(a345_0x1508ed(0x1bd))),sequelize_1=require('sequelize'),lodash_1=require(a345_0x1508ed(0x1b6)),logger_1=require(a345_0x1508ed(0x1cd)),database_1=__importDefault(require(a345_0x1508ed(0x1d8))),User_1=__importDefault(require('../models/User')),connection=process['env']['REDIS_URI']||'';function a345_0x4cce(_0x5bfaa4,_0xf00def){const _0x22ab6c=a345_0x22ab();return a345_0x4cce=function(_0x4cce00,_0x3e3e17){_0x4cce00=_0x4cce00-0x1b4;let _0xae6c2b=_0x22ab6c[_0x4cce00];return _0xae6c2b;},a345_0x4cce(_0x5bfaa4,_0xf00def);}exports[a345_0x1508ed(0x1e1)]=new bull_1[(a345_0x1508ed(0x1d0))](a345_0x1508ed(0x1df),connection);async function handleLoginStatus(_0x2d1f95){const _0x1b07e9=a345_0x1508ed,_0x33f820=await database_1[_0x1b07e9(0x1d0)][_0x1b07e9(0x1e0)](_0x1b07e9(0x1de),{'type':sequelize_1[_0x1b07e9(0x1d7)][_0x1b07e9(0x1c7)]});for(let _0x108de7 of _0x33f820){try{const _0x27ad27=await User_1[_0x1b07e9(0x1d0)][_0x1b07e9(0x1d4)](_0x108de7['id']);await _0x27ad27[_0x1b07e9(0x1ce)]({'online':![]}),logger_1['logger'][_0x1b07e9(0x1d9)]('Usuario\x20passado\x20para\x20offline:\x20'+_0x108de7['id']);}catch(_0x5b14ea){Sentry[_0x1b07e9(0x1c0)](_0x5b14ea);}}}async function handleUserConnection(_0x40dc9e){const _0xf19f55=a345_0x1508ed;try{const {id:_0x17c662}=_0x40dc9e[_0xf19f55(0x1b7)];if(!(0x0,lodash_1[_0xf19f55(0x1cf)])(_0x17c662)&&_0x17c662!=='null'){const _0x917601=await User_1[_0xf19f55(0x1d0)][_0xf19f55(0x1d4)](_0x17c662);_0x917601&&(_0x917601['online']=!![],await _0x917601['save']());}}catch(_0x218a8f){Sentry['captureException'](_0x218a8f);}}exports[a345_0x1508ed(0x1e1)]['process'](a345_0x1508ed(0x1c2),handleUserConnection),exports[a345_0x1508ed(0x1e1)][a345_0x1508ed(0x1c3)](a345_0x1508ed(0x1d3),handleLoginStatus);async function initUserMonitorQueues(){const _0x2d383e=a345_0x1508ed,_0x18a79e=await exports['userMonitor']['getRepeatableJobs']();for(let _0x71a63c of _0x18a79e){await exports[_0x2d383e(0x1e1)][_0x2d383e(0x1c4)](_0x71a63c[_0x2d383e(0x1ba)]);}exports[_0x2d383e(0x1e1)]['add'](_0x2d383e(0x1d3),{},{'repeat':{'cron':_0x2d383e(0x1ca),'key':_0x2d383e(0x1b8)},'removeOnComplete':{'age':0x3c*0x3c,'count':0xa},'removeOnFail':{'age':0x3c*0x3c,'count':0xa}}),logger_1['logger'][_0x2d383e(0x1d9)](_0x2d383e(0x1bc));}exports[a345_0x1508ed(0x1b4)]=initUserMonitorQueues;