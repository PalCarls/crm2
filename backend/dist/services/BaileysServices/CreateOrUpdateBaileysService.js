'use strict';const a337_0x473903=a337_0x2dd6;function a337_0x326a(){const _0x551267=['parse','18PsTNem','2400762seFxrf','242532JrCCEx','default','2704025pqKGod','4182336sbsBwy','error','update','sort','filter','stringify','findOne','push','__importDefault','chats','findIndex','create','1069595MvzkKm','9044399IuGEwm','contacts','defineProperty','165094qLgvCD','272ofTsFC','logger'];a337_0x326a=function(){return _0x551267;};return a337_0x326a();}(function(_0x21d5b0,_0x320d0e){const _0x2518c5=a337_0x2dd6,_0x13b999=_0x21d5b0();while(!![]){try{const _0xcaad37=parseInt(_0x2518c5(0x1ca))/0x1+parseInt(_0x2518c5(0x1ce))/0x2+-parseInt(_0x2518c5(0x1d3))/0x3+parseInt(_0x2518c5(0x1d7))/0x4+parseInt(_0x2518c5(0x1d6))/0x5*(parseInt(_0x2518c5(0x1d2))/0x6)+-parseInt(_0x2518c5(0x1cb))/0x7+parseInt(_0x2518c5(0x1cf))/0x8*(-parseInt(_0x2518c5(0x1d4))/0x9);if(_0xcaad37===_0x320d0e)break;else _0x13b999['push'](_0x13b999['shift']());}catch(_0x44cabe){_0x13b999['push'](_0x13b999['shift']());}}}(a337_0x326a,0xc624e));var __importDefault=this&&this[a337_0x473903(0x1c6)]||function(_0x367378){return _0x367378&&_0x367378['__esModule']?_0x367378:{'default':_0x367378};};Object[a337_0x473903(0x1cd)](exports,'__esModule',{'value':!![]});function a337_0x2dd6(_0x3bb015,_0x584ad3){const _0x326ad9=a337_0x326a();return a337_0x2dd6=function(_0x2dd69a,_0x1c2480){_0x2dd69a=_0x2dd69a-0x1c5;let _0x5778c3=_0x326ad9[_0x2dd69a];return _0x5778c3;},a337_0x2dd6(_0x3bb015,_0x584ad3);}const Baileys_1=__importDefault(require('../../models/Baileys')),logger_1=require('../../utils/logger'),createOrUpdateBaileysService=async({whatsappId:_0x88e4a5,contacts:_0x494aa0,chats:_0x511763})=>{const _0x4ece8f=a337_0x473903;try{const _0x3a7737=await Baileys_1[_0x4ece8f(0x1d5)][_0x4ece8f(0x1dd)]({'where':{'whatsappId':_0x88e4a5}});if(_0x3a7737){const _0x1037b0=_0x3a7737[_0x4ece8f(0x1c7)]?JSON[_0x4ece8f(0x1d1)](_0x3a7737['chats']):[],_0xbd19ca=_0x3a7737[_0x4ece8f(0x1cc)]?JSON[_0x4ece8f(0x1d1)](_0x3a7737[_0x4ece8f(0x1cc)]):[];if(_0x511763){_0x1037b0['push'](..._0x511763),_0x1037b0[_0x4ece8f(0x1da)]();const _0x19e1be=_0x1037b0[_0x4ece8f(0x1db)]((_0x5df11b,_0x2f1ce8,_0xb38670)=>_0xb38670[_0x4ece8f(0x1c8)](_0x1d9f54=>_0x1d9f54['id']===_0x5df11b['id'])===_0x2f1ce8);return await _0x3a7737[_0x4ece8f(0x1d9)]({'chats':JSON[_0x4ece8f(0x1dc)](_0x19e1be)});}if(_0x494aa0){_0xbd19ca[_0x4ece8f(0x1c5)](..._0x494aa0),_0xbd19ca[_0x4ece8f(0x1da)]();const _0x4b4b93=_0xbd19ca[_0x4ece8f(0x1db)]((_0x525c3d,_0x3baa4d,_0x348f6f)=>_0x348f6f[_0x4ece8f(0x1c8)](_0x4b01ad=>_0x4b01ad['id']===_0x525c3d['id'])===_0x3baa4d);return await _0x3a7737['update']({'contacts':JSON[_0x4ece8f(0x1dc)](_0x4b4b93)});}}const _0x3648be=await Baileys_1[_0x4ece8f(0x1d5)][_0x4ece8f(0x1c9)]({'whatsappId':_0x88e4a5,'contacts':JSON['stringify'](_0x494aa0),'chats':JSON[_0x4ece8f(0x1dc)](_0x511763)});return await new Promise(_0x2a2df5=>setTimeout(_0x2a2df5,0x3e8)),_0x3648be;}catch(_0x31a0dc){logger_1[_0x4ece8f(0x1d0)][_0x4ece8f(0x1d8)](_0x31a0dc);throw new Error(_0x31a0dc);}};exports[a337_0x473903(0x1d5)]=createOrUpdateBaileysService;