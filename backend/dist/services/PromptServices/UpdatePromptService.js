'use strict';var a524_0x3865c6=a524_0x3c28;(function(_0x17aa3e,_0x23db54){var _0x5b5044=a524_0x3c28,_0x4ed6ff=_0x17aa3e();while(!![]){try{var _0x404aba=parseInt(_0x5b5044(0xff))/0x1*(-parseInt(_0x5b5044(0x103))/0x2)+parseInt(_0x5b5044(0x10e))/0x3*(parseInt(_0x5b5044(0x10f))/0x4)+-parseInt(_0x5b5044(0xf7))/0x5+parseInt(_0x5b5044(0xf5))/0x6*(-parseInt(_0x5b5044(0x11a))/0x7)+parseInt(_0x5b5044(0x110))/0x8+parseInt(_0x5b5044(0xf8))/0x9*(parseInt(_0x5b5044(0x10a))/0xa)+parseInt(_0x5b5044(0x106))/0xb*(parseInt(_0x5b5044(0x111))/0xc);if(_0x404aba===_0x23db54)break;else _0x4ed6ff['push'](_0x4ed6ff['shift']());}catch(_0x6bcf6a){_0x4ed6ff['push'](_0x4ed6ff['shift']());}}}(a524_0x220e,0xbb553));var __createBinding=this&&this[a524_0x3865c6(0x115)]||(Object['create']?function(_0x3058f4,_0x437cbe,_0x553c8a,_0x620ba7){var _0x67ce77=a524_0x3865c6;if(_0x620ba7===undefined)_0x620ba7=_0x553c8a;var _0x9bcf1e=Object['getOwnPropertyDescriptor'](_0x437cbe,_0x553c8a);(!_0x9bcf1e||(_0x67ce77(0x116)in _0x9bcf1e?!_0x437cbe[_0x67ce77(0xfd)]:_0x9bcf1e[_0x67ce77(0x105)]||_0x9bcf1e[_0x67ce77(0x114)]))&&(_0x9bcf1e={'enumerable':!![],'get':function(){return _0x437cbe[_0x553c8a];}}),Object[_0x67ce77(0x119)](_0x3058f4,_0x620ba7,_0x9bcf1e);}:function(_0x12bd9d,_0xf15c60,_0x58201d,_0xa8749a){if(_0xa8749a===undefined)_0xa8749a=_0x58201d;_0x12bd9d[_0xa8749a]=_0xf15c60[_0x58201d];}),__setModuleDefault=this&&this[a524_0x3865c6(0x100)]||(Object[a524_0x3865c6(0x118)]?function(_0x15b75d,_0xfb40a){var _0x2d593f=a524_0x3865c6;Object[_0x2d593f(0x119)](_0x15b75d,_0x2d593f(0x113),{'enumerable':!![],'value':_0xfb40a});}:function(_0x176ceb,_0x559183){var _0x328ccb=a524_0x3865c6;_0x176ceb[_0x328ccb(0x113)]=_0x559183;}),__importStar=this&&this[a524_0x3865c6(0x112)]||function(_0x161585){var _0x1effab=a524_0x3865c6;if(_0x161585&&_0x161585[_0x1effab(0xfd)])return _0x161585;var _0x78b757={};if(_0x161585!=null){for(var _0x4c361e in _0x161585)if(_0x4c361e!=='default'&&Object[_0x1effab(0x101)][_0x1effab(0x10b)][_0x1effab(0xfe)](_0x161585,_0x4c361e))__createBinding(_0x78b757,_0x161585,_0x4c361e);}return __setModuleDefault(_0x78b757,_0x161585),_0x78b757;},__importDefault=this&&this['__importDefault']||function(_0x1ef9bb){return _0x1ef9bb&&_0x1ef9bb['__esModule']?_0x1ef9bb:{'default':_0x1ef9bb};};Object[a524_0x3865c6(0x119)](exports,a524_0x3865c6(0xfd),{'value':!![]});function a524_0x3c28(_0x380146,_0x2c41e6){var _0x220ed7=a524_0x220e();return a524_0x3c28=function(_0x3c28eb,_0x353221){_0x3c28eb=_0x3c28eb-0xf5;var _0x299141=_0x220ed7[_0x3c28eb];return _0x299141;},a524_0x3c28(_0x380146,_0x2c41e6);}const Yup=__importStar(require(a524_0x3865c6(0x102))),AppError_1=__importDefault(require('../../errors/AppError')),ShowPromptService_1=__importDefault(require(a524_0x3865c6(0xfc))),UpdatePromptService=async({promptId:_0x4bbcaf,promptData:_0xb6104f,companyId:_0x5ee90d})=>{var _0x233dde=a524_0x3865c6;const _0x37f790=await(0x0,ShowPromptService_1[_0x233dde(0x113)])({'promptId':_0x4bbcaf,'companyId':_0x5ee90d}),_0x4500a9=Yup['object']()[_0x233dde(0xfb)]({'name':Yup['string']()[_0x233dde(0x107)]('ERR_PROMPT_NAME_INVALID'),'prompt':Yup[_0x233dde(0xfa)]()[_0x233dde(0x107)](_0x233dde(0x10d)),'apiKey':Yup['string']()[_0x233dde(0x107)]('ERR_PROMPT_APIKEY_INVALID'),'queueId':Yup['number']()['required'](_0x233dde(0x10c)),'maxMessages':Yup[_0x233dde(0x104)]()[_0x233dde(0x107)](_0x233dde(0xf9))}),{name:_0x26fae8,apiKey:_0x409bd9,prompt:_0x1d350f,maxTokens:_0x3b63e1,temperature:_0x5a1401,promptTokens:_0x6a22fd,completionTokens:_0x4c7fdf,totalTokens:_0x4081d2,queueId:_0x5cad1c,maxMessages:_0x5456cf,voice:_0x45d927,voiceKey:_0x19976d,voiceRegion:_0x29c0a4}=_0xb6104f;try{await _0x4500a9[_0x233dde(0xf6)]({'name':_0x26fae8,'apiKey':_0x409bd9,'prompt':_0x1d350f,'maxTokens':_0x3b63e1,'temperature':_0x5a1401,'promptTokens':_0x6a22fd,'completionTokens':_0x4c7fdf,'totalTokens':_0x4081d2,'queueId':_0x5cad1c,'maxMessages':_0x5456cf});}catch(_0x26c945){throw new AppError_1[(_0x233dde(0x113))](''+JSON[_0x233dde(0x109)](_0x26c945,undefined,0x2));}return await _0x37f790[_0x233dde(0x117)]({'name':_0x26fae8,'apiKey':_0x409bd9,'prompt':_0x1d350f,'maxTokens':_0x3b63e1,'temperature':_0x5a1401,'promptTokens':_0x6a22fd,'completionTokens':_0x4c7fdf,'totalTokens':_0x4081d2,'queueId':_0x5cad1c,'maxMessages':_0x5456cf,'voice':_0x45d927,'voiceKey':_0x19976d,'voiceRegion':_0x29c0a4}),await _0x37f790[_0x233dde(0x108)](),_0x37f790;};function a524_0x220e(){var _0x560d49=['get','update','create','defineProperty','13097iaoZme','4734UvdGMb','validate','5930185fQShss','3492GGRSUk','ERR_PROMPT_MAX_MESSAGES_INVALID','string','shape','./ShowPromptService','__esModule','call','496234yAXtQv','__setModuleDefault','prototype','yup','6sYdMJT','number','writable','44yKqhRL','required','reload','stringify','5030NDlLEw','hasOwnProperty','ERR_PROMPT_QUEUEID_INVALID','ERR_PROMPT_PROMPT_INVALID','81DXrkdp','107108uaMlOX','1117808EjEcGJ','11581212WpNuAq','__importStar','default','configurable','__createBinding'];a524_0x220e=function(){return _0x560d49;};return a524_0x220e();}exports[a524_0x3865c6(0x113)]=UpdatePromptService;