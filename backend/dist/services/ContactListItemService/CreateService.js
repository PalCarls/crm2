'use strict';const a381_0x18fcda=a381_0x5322;function a381_0x5322(_0x5c1774,_0x4b282f){const _0x5b3cfe=a381_0x5b3c();return a381_0x5322=function(_0x53228d,_0x2ca876){_0x53228d=_0x53228d-0xe4;let _0x4f4118=_0x5b3cfe[_0x53228d];return _0x4f4118;},a381_0x5322(_0x5c1774,_0x4b282f);}(function(_0x104d33,_0x1a21f2){const _0x515b5c=a381_0x5322,_0x1f6bd7=_0x104d33();while(!![]){try{const _0x238fef=parseInt(_0x515b5c(0xe6))/0x1+-parseInt(_0x515b5c(0xea))/0x2*(-parseInt(_0x515b5c(0xf9))/0x3)+-parseInt(_0x515b5c(0xf1))/0x4*(parseInt(_0x515b5c(0xfb))/0x5)+parseInt(_0x515b5c(0xfc))/0x6*(-parseInt(_0x515b5c(0xf5))/0x7)+parseInt(_0x515b5c(0xf0))/0x8+parseInt(_0x515b5c(0xe4))/0x9+-parseInt(_0x515b5c(0xf8))/0xa;if(_0x238fef===_0x1a21f2)break;else _0x1f6bd7['push'](_0x1f6bd7['shift']());}catch(_0x18fa92){_0x1f6bd7['push'](_0x1f6bd7['shift']());}}}(a381_0x5b3c,0x71a8d));var __createBinding=this&&this[a381_0x18fcda(0xe5)]||(Object[a381_0x18fcda(0xf2)]?function(_0x4568a8,_0x5e101d,_0x4039e2,_0xbae6bb){const _0xd6af67=a381_0x18fcda;if(_0xbae6bb===undefined)_0xbae6bb=_0x4039e2;var _0x106aa4=Object[_0xd6af67(0xf4)](_0x5e101d,_0x4039e2);(!_0x106aa4||(_0xd6af67(0xfa)in _0x106aa4?!_0x5e101d[_0xd6af67(0xe9)]:_0x106aa4[_0xd6af67(0xff)]||_0x106aa4[_0xd6af67(0xe8)]))&&(_0x106aa4={'enumerable':!![],'get':function(){return _0x5e101d[_0x4039e2];}}),Object[_0xd6af67(0x100)](_0x4568a8,_0xbae6bb,_0x106aa4);}:function(_0x1578bb,_0x49be1c,_0x36a862,_0x5f098a){if(_0x5f098a===undefined)_0x5f098a=_0x36a862;_0x1578bb[_0x5f098a]=_0x49be1c[_0x36a862];}),__setModuleDefault=this&&this[a381_0x18fcda(0xeb)]||(Object[a381_0x18fcda(0xf2)]?function(_0x727bf4,_0xa48903){Object['defineProperty'](_0x727bf4,'default',{'enumerable':!![],'value':_0xa48903});}:function(_0x243fe2,_0x329912){const _0x573128=a381_0x18fcda;_0x243fe2[_0x573128(0xfd)]=_0x329912;}),__importStar=this&&this[a381_0x18fcda(0xfe)]||function(_0x1c0015){const _0x53d91e=a381_0x18fcda;if(_0x1c0015&&_0x1c0015[_0x53d91e(0xe9)])return _0x1c0015;var _0x15b0b2={};if(_0x1c0015!=null){for(var _0x1f5f09 in _0x1c0015)if(_0x1f5f09!==_0x53d91e(0xfd)&&Object['prototype'][_0x53d91e(0x102)]['call'](_0x1c0015,_0x1f5f09))__createBinding(_0x15b0b2,_0x1c0015,_0x1f5f09);}return __setModuleDefault(_0x15b0b2,_0x1c0015),_0x15b0b2;},__importDefault=this&&this[a381_0x18fcda(0xf3)]||function(_0x3cf14b){return _0x3cf14b&&_0x3cf14b['__esModule']?_0x3cf14b:{'default':_0x3cf14b};};Object[a381_0x18fcda(0x100)](exports,a381_0x18fcda(0xe9),{'value':!![]});function a381_0x5b3c(){const _0x475976=['619306SzUlEE','__setModuleDefault','error','string','../../utils/logger','../WbotServices/CheckNumber','1916968tSZEKU','4izvwdy','create','__importDefault','getOwnPropertyDescriptor','541079FPOwro','../../errors/AppError','shape','1321200smHsXa','3NGPRtR','get','4428665PThLQh','6pqSWGL','default','__importStar','writable','defineProperty','validate','hasOwnProperty','Número\x20de\x20contato\x20inválido:\x20','findOrCreate','number','yup','message','isWhatsappValid','companyId','2940201RVBpWm','__createBinding','684736htPGyb','ERR_CONTACTLISTITEM_REQUIRED','configurable','__esModule'];a381_0x5b3c=function(){return _0x475976;};return a381_0x5b3c();}const Yup=__importStar(require(a381_0x18fcda(0x106))),AppError_1=__importDefault(require(a381_0x18fcda(0xf6))),ContactListItem_1=__importDefault(require('../../models/ContactListItem')),logger_1=require(a381_0x18fcda(0xee)),CheckNumber_1=__importDefault(require(a381_0x18fcda(0xef))),CreateService=async _0x5875b5=>{const _0x46f08b=a381_0x18fcda,{name:_0x3542b5}=_0x5875b5,_0x30d820=Yup['object']()[_0x46f08b(0xf7)]({'name':Yup[_0x46f08b(0xed)]()['min'](0x3,'ERR_CONTACTLISTITEM_INVALID_NAME')['required'](_0x46f08b(0xe7))});try{await _0x30d820[_0x46f08b(0x101)]({'name':_0x3542b5});}catch(_0x4fd5d9){throw new AppError_1['default'](_0x4fd5d9[_0x46f08b(0x107)]);}const [_0x56c8d4]=await ContactListItem_1['default'][_0x46f08b(0x104)]({'where':{'number':_0x5875b5['number'],'companyId':_0x5875b5[_0x46f08b(0x109)],'contactListId':_0x5875b5['contactListId']},'defaults':_0x5875b5});try{const _0x256aa4=await(0x0,CheckNumber_1['default'])(_0x56c8d4[_0x46f08b(0x105)],_0x56c8d4['companyId']);_0x56c8d4[_0x46f08b(0x108)]=_0x256aa4?!![]:![];const _0x85a773=_0x256aa4;_0x56c8d4[_0x46f08b(0x105)]=_0x85a773,await _0x56c8d4['save']();}catch(_0x2c125b){logger_1['logger'][_0x46f08b(0xec)](_0x46f08b(0x103)+_0x56c8d4['number']);}return _0x56c8d4;};exports[a381_0x18fcda(0xfd)]=CreateService;