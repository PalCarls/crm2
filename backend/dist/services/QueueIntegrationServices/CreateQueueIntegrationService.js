'use strict';var a448_0x34e6f4=a448_0x3f2e;function a448_0x3f2e(_0x55889c,_0x50cca0){var _0x3bc086=a448_0x3bc0();return a448_0x3f2e=function(_0x3f2edf,_0x270d15){_0x3f2edf=_0x3f2edf-0x1bb;var _0x44b0ba=_0x3bc086[_0x3f2edf];return _0x44b0ba;},a448_0x3f2e(_0x55889c,_0x50cca0);}(function(_0x5d4e14,_0xc1d699){var _0x296005=a448_0x3f2e,_0x5f2eb6=_0x5d4e14();while(!![]){try{var _0x19c89a=-parseInt(_0x296005(0x1bb))/0x1+-parseInt(_0x296005(0x1d2))/0x2*(-parseInt(_0x296005(0x1c4))/0x3)+parseInt(_0x296005(0x1bc))/0x4+-parseInt(_0x296005(0x1d1))/0x5*(-parseInt(_0x296005(0x1c3))/0x6)+-parseInt(_0x296005(0x1bd))/0x7+parseInt(_0x296005(0x1d8))/0x8+-parseInt(_0x296005(0x1c7))/0x9*(parseInt(_0x296005(0x1ce))/0xa);if(_0x19c89a===_0xc1d699)break;else _0x5f2eb6['push'](_0x5f2eb6['shift']());}catch(_0xf25ad7){_0x5f2eb6['push'](_0x5f2eb6['shift']());}}}(a448_0x3bc0,0xab558));var __createBinding=this&&this['__createBinding']||(Object[a448_0x34e6f4(0x1c9)]?function(_0x40e285,_0x26fd4b,_0x5bf2aa,_0x9533c1){var _0x33fc37=a448_0x34e6f4;if(_0x9533c1===undefined)_0x9533c1=_0x5bf2aa;var _0x18bd89=Object[_0x33fc37(0x1cf)](_0x26fd4b,_0x5bf2aa);(!_0x18bd89||(_0x33fc37(0x1c5)in _0x18bd89?!_0x26fd4b[_0x33fc37(0x1c8)]:_0x18bd89[_0x33fc37(0x1d0)]||_0x18bd89['configurable']))&&(_0x18bd89={'enumerable':!![],'get':function(){return _0x26fd4b[_0x5bf2aa];}}),Object['defineProperty'](_0x40e285,_0x9533c1,_0x18bd89);}:function(_0x15563c,_0x2f38ef,_0x2e5fe3,_0x2a7a66){if(_0x2a7a66===undefined)_0x2a7a66=_0x2e5fe3;_0x15563c[_0x2a7a66]=_0x2f38ef[_0x2e5fe3];}),__setModuleDefault=this&&this[a448_0x34e6f4(0x1ca)]||(Object[a448_0x34e6f4(0x1c9)]?function(_0x5746e5,_0x504803){var _0x3be6f6=a448_0x34e6f4;Object['defineProperty'](_0x5746e5,_0x3be6f6(0x1c6),{'enumerable':!![],'value':_0x504803});}:function(_0x5009fd,_0x556a2b){var _0x46b327=a448_0x34e6f4;_0x5009fd[_0x46b327(0x1c6)]=_0x556a2b;}),__importStar=this&&this[a448_0x34e6f4(0x1d4)]||function(_0x15cd93){var _0x202843=a448_0x34e6f4;if(_0x15cd93&&_0x15cd93[_0x202843(0x1c8)])return _0x15cd93;var _0x2f89f9={};if(_0x15cd93!=null){for(var _0x464101 in _0x15cd93)if(_0x464101!==_0x202843(0x1c6)&&Object[_0x202843(0x1cd)][_0x202843(0x1c1)][_0x202843(0x1c0)](_0x15cd93,_0x464101))__createBinding(_0x2f89f9,_0x15cd93,_0x464101);}return __setModuleDefault(_0x2f89f9,_0x15cd93),_0x2f89f9;},__importDefault=this&&this[a448_0x34e6f4(0x1c2)]||function(_0x2bda10){var _0xea368a=a448_0x34e6f4;return _0x2bda10&&_0x2bda10[_0xea368a(0x1c8)]?_0x2bda10:{'default':_0x2bda10};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const Yup=__importStar(require(a448_0x34e6f4(0x1bf))),AppError_1=__importDefault(require(a448_0x34e6f4(0x1d5))),QueueIntegrations_1=__importDefault(require('../../models/QueueIntegrations')),CreateQueueIntegrationService=async({type:_0x3e7771,name:_0x596032,projectName:_0x41e495,jsonContent:_0x28b021,language:_0x337af6,urlN8N:_0x5adfee,companyId:_0x31a06f})=>{var _0x52426b=a448_0x34e6f4;const _0x199f3e=Yup['object']()[_0x52426b(0x1cb)]({'name':Yup[_0x52426b(0x1be)]()['required']()[_0x52426b(0x1d3)](0x2)[_0x52426b(0x1d6)]('Check-name',_0x52426b(0x1d7),async _0xbcb18f=>{var _0x1048bf=_0x52426b;if(!_0xbcb18f)return![];const _0x8ebaa8=await QueueIntegrations_1[_0x1048bf(0x1c6)]['findOne']({'where':{'name':_0xbcb18f}});return!_0x8ebaa8;})});try{await _0x199f3e[_0x52426b(0x1d9)]({'type':_0x3e7771,'name':_0x596032,'projectName':_0x41e495,'jsonContent':_0x28b021,'language':_0x337af6,'urlN8N':_0x5adfee,'companyId':_0x31a06f});}catch(_0x4effe8){throw new AppError_1[(_0x52426b(0x1c6))](_0x4effe8[_0x52426b(0x1cc)]);}const _0x278145=await QueueIntegrations_1['default'][_0x52426b(0x1c9)]({'type':_0x3e7771,'name':_0x596032,'projectName':_0x41e495,'jsonContent':_0x28b021,'language':_0x337af6,'urlN8N':_0x5adfee,'companyId':_0x31a06f});return _0x278145;};exports[a448_0x34e6f4(0x1c6)]=CreateQueueIntegrationService;function a448_0x3bc0(){var _0x35cbef=['__importStar','../../errors/AppError','test','This\x20integration\x20name\x20is\x20already\x20used.','1217416xOSqcg','validate','10903qjSVPb','5361780pHeTrG','2748186JqwWeG','string','yup','call','hasOwnProperty','__importDefault','588678CwDUtv','7767IyXddt','get','default','12584619TppXUh','__esModule','create','__setModuleDefault','shape','message','prototype','10oaiFTc','getOwnPropertyDescriptor','writable','25TxVrCf','402ikbwEx','min'];a448_0x3bc0=function(){return _0x35cbef;};return a448_0x3bc0();}