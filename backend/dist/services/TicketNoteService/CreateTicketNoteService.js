'use strict';var a524_0x14b609=a524_0x39d5;function a524_0x2ef2(){var _0x31b408=['get','3852144cIKZTY','2848920nGXCXL','message','min','create','1RMnOsK','object','7376290eAgCNw','default','__setModuleDefault','2136799EpGXLE','yup','__importDefault','6lrisVh','4532844StMjni','writable','__esModule','getOwnPropertyDescriptor','configurable','shape','4CoMsRV','__createBinding','ERR_TICKETNOTE_INVALID_NAME','prototype','defineProperty','11028328PFpuEw','string','1110908krhUps','33QnDSFF','__importStar','validate'];a524_0x2ef2=function(){return _0x31b408;};return a524_0x2ef2();}(function(_0x2c193f,_0x792452){var _0x4e0a69=a524_0x39d5,_0x22d916=_0x2c193f();while(!![]){try{var _0x4d26be=parseInt(_0x4e0a69(0x202))/0x1*(parseInt(_0x4e0a69(0x1f8))/0x2)+parseInt(_0x4e0a69(0x20b))/0x3*(-parseInt(_0x4e0a69(0x211))/0x4)+parseInt(_0x4e0a69(0x204))/0x5+-parseInt(_0x4e0a69(0x20a))/0x6*(-parseInt(_0x4e0a69(0x207))/0x7)+parseInt(_0x4e0a69(0x1f6))/0x8+-parseInt(_0x4e0a69(0x1fd))/0x9+parseInt(_0x4e0a69(0x1fe))/0xa*(-parseInt(_0x4e0a69(0x1f9))/0xb);if(_0x4d26be===_0x792452)break;else _0x22d916['push'](_0x22d916['shift']());}catch(_0x1d2fd7){_0x22d916['push'](_0x22d916['shift']());}}}(a524_0x2ef2,0xe0d26));var __createBinding=this&&this[a524_0x14b609(0x1f2)]||(Object[a524_0x14b609(0x201)]?function(_0x53d024,_0x1442c0,_0x43af3a,_0x10f000){var _0x3985ec=a524_0x14b609;if(_0x10f000===undefined)_0x10f000=_0x43af3a;var _0x36e4ea=Object[_0x3985ec(0x20e)](_0x1442c0,_0x43af3a);(!_0x36e4ea||(_0x3985ec(0x1fc)in _0x36e4ea?!_0x1442c0[_0x3985ec(0x20d)]:_0x36e4ea[_0x3985ec(0x20c)]||_0x36e4ea[_0x3985ec(0x20f)]))&&(_0x36e4ea={'enumerable':!![],'get':function(){return _0x1442c0[_0x43af3a];}}),Object[_0x3985ec(0x1f5)](_0x53d024,_0x10f000,_0x36e4ea);}:function(_0x4cfa2a,_0x3d9e7b,_0x991180,_0x3386eb){if(_0x3386eb===undefined)_0x3386eb=_0x991180;_0x4cfa2a[_0x3386eb]=_0x3d9e7b[_0x991180];}),__setModuleDefault=this&&this[a524_0x14b609(0x206)]||(Object[a524_0x14b609(0x201)]?function(_0x3b4f2c,_0x180332){var _0x2fae8c=a524_0x14b609;Object[_0x2fae8c(0x1f5)](_0x3b4f2c,'default',{'enumerable':!![],'value':_0x180332});}:function(_0x551803,_0x3c4aa7){_0x551803['default']=_0x3c4aa7;}),__importStar=this&&this[a524_0x14b609(0x1fa)]||function(_0x2ec9d8){var _0x79af59=a524_0x14b609;if(_0x2ec9d8&&_0x2ec9d8['__esModule'])return _0x2ec9d8;var _0x200224={};if(_0x2ec9d8!=null){for(var _0x5a48fa in _0x2ec9d8)if(_0x5a48fa!==_0x79af59(0x205)&&Object[_0x79af59(0x1f4)]['hasOwnProperty']['call'](_0x2ec9d8,_0x5a48fa))__createBinding(_0x200224,_0x2ec9d8,_0x5a48fa);}return __setModuleDefault(_0x200224,_0x2ec9d8),_0x200224;},__importDefault=this&&this[a524_0x14b609(0x209)]||function(_0x1171fd){var _0x1aaff8=a524_0x14b609;return _0x1171fd&&_0x1171fd[_0x1aaff8(0x20d)]?_0x1171fd:{'default':_0x1171fd};};Object[a524_0x14b609(0x1f5)](exports,a524_0x14b609(0x20d),{'value':!![]});function a524_0x39d5(_0xc08493,_0x589adf){var _0x2ef223=a524_0x2ef2();return a524_0x39d5=function(_0x39d589,_0x16c1cb){_0x39d589=_0x39d589-0x1f2;var _0x442916=_0x2ef223[_0x39d589];return _0x442916;},a524_0x39d5(_0xc08493,_0x589adf);}const Yup=__importStar(require(a524_0x14b609(0x208))),AppError_1=__importDefault(require('../../errors/AppError')),TicketNote_1=__importDefault(require('../../models/TicketNote')),CreateTicketNoteService=async _0x4e66e6=>{var _0x1e8bc3=a524_0x14b609;const {note:_0x49b2d4}=_0x4e66e6,_0x1509d3=Yup[_0x1e8bc3(0x203)]()[_0x1e8bc3(0x210)]({'note':Yup[_0x1e8bc3(0x1f7)]()[_0x1e8bc3(0x200)](0x3,'ERR_TICKETNOTE_INVALID_NAME')['required'](_0x1e8bc3(0x1f3))});try{await _0x1509d3[_0x1e8bc3(0x1fb)]({'note':_0x49b2d4});}catch(_0x18d904){throw new AppError_1[(_0x1e8bc3(0x205))](_0x18d904[_0x1e8bc3(0x1ff)]);}const _0x12d6cf=await TicketNote_1[_0x1e8bc3(0x205)][_0x1e8bc3(0x201)](_0x4e66e6);return _0x12d6cf;};exports[a524_0x14b609(0x205)]=CreateTicketNoteService;