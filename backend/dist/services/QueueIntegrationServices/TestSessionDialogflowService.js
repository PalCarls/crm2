'use strict';function a454_0x3b68(){const _0xedda63=['450200AgkPAE','1910586kgQyPr','1BYgCDu','20230182CXWGXL','../../errors/AppError','5yFQQKT','__setModuleDefault','min','ERR_TEST_REPLY_DIALOG','message','string','Ola','prototype','text','writable','create','4754498jxOPdu','responses','default','configurable','__importDefault','required','./CreateSessionDialogflow','__esModule','hasOwnProperty','yup','defineProperty','queryDialogFlow','3802395jLSmkD','ERR_TEST_SESSION_DIALOG','push','./QueryDialogflow','675988ZKBOow','TestSession','call','1760284BAdYhD','__importStar'];a454_0x3b68=function(){return _0xedda63;};return a454_0x3b68();}const a454_0x9dad93=a454_0x1e64;(function(_0x502cf1,_0x46278e){const _0x2785c7=a454_0x1e64,_0x4a258a=_0x502cf1();while(!![]){try{const _0x409b9d=parseInt(_0x2785c7(0x15f))/0x1*(parseInt(_0x2785c7(0x15b))/0x2)+parseInt(_0x2785c7(0x154))/0x3+-parseInt(_0x2785c7(0x158))/0x4+-parseInt(_0x2785c7(0x13d))/0x5*(-parseInt(_0x2785c7(0x15e))/0x6)+parseInt(_0x2785c7(0x148))/0x7+parseInt(_0x2785c7(0x15d))/0x8+-parseInt(_0x2785c7(0x160))/0x9;if(_0x409b9d===_0x46278e)break;else _0x4a258a['push'](_0x4a258a['shift']());}catch(_0x424eb8){_0x4a258a['push'](_0x4a258a['shift']());}}}(a454_0x3b68,0xbf95c));var __createBinding=this&&this['__createBinding']||(Object[a454_0x9dad93(0x147)]?function(_0x58b81d,_0x23f6ba,_0x23f63a,_0x398aed){const _0x261ccd=a454_0x9dad93;if(_0x398aed===undefined)_0x398aed=_0x23f63a;var _0x447aa9=Object['getOwnPropertyDescriptor'](_0x23f6ba,_0x23f63a);(!_0x447aa9||('get'in _0x447aa9?!_0x23f6ba[_0x261ccd(0x14f)]:_0x447aa9[_0x261ccd(0x146)]||_0x447aa9[_0x261ccd(0x14b)]))&&(_0x447aa9={'enumerable':!![],'get':function(){return _0x23f6ba[_0x23f63a];}}),Object[_0x261ccd(0x152)](_0x58b81d,_0x398aed,_0x447aa9);}:function(_0x95c0a9,_0xa67d53,_0x53c10c,_0x23f182){if(_0x23f182===undefined)_0x23f182=_0x53c10c;_0x95c0a9[_0x23f182]=_0xa67d53[_0x53c10c];}),__setModuleDefault=this&&this[a454_0x9dad93(0x13e)]||(Object['create']?function(_0x52827d,_0x469c){const _0x4f9d7e=a454_0x9dad93;Object[_0x4f9d7e(0x152)](_0x52827d,'default',{'enumerable':!![],'value':_0x469c});}:function(_0x1b9b8e,_0x1f6309){const _0x2f13b=a454_0x9dad93;_0x1b9b8e[_0x2f13b(0x14a)]=_0x1f6309;}),__importStar=this&&this[a454_0x9dad93(0x15c)]||function(_0x37b2ff){const _0x4983fd=a454_0x9dad93;if(_0x37b2ff&&_0x37b2ff[_0x4983fd(0x14f)])return _0x37b2ff;var _0x438cc5={};if(_0x37b2ff!=null){for(var _0x3e66fb in _0x37b2ff)if(_0x3e66fb!==_0x4983fd(0x14a)&&Object[_0x4983fd(0x144)][_0x4983fd(0x150)][_0x4983fd(0x15a)](_0x37b2ff,_0x3e66fb))__createBinding(_0x438cc5,_0x37b2ff,_0x3e66fb);}return __setModuleDefault(_0x438cc5,_0x37b2ff),_0x438cc5;},__importDefault=this&&this[a454_0x9dad93(0x14c)]||function(_0x569634){const _0x15ed67=a454_0x9dad93;return _0x569634&&_0x569634[_0x15ed67(0x14f)]?_0x569634:{'default':_0x569634};};function a454_0x1e64(_0x3028c2,_0x3476af){const _0x3b68ef=a454_0x3b68();return a454_0x1e64=function(_0x1e64e8,_0x3f3323){_0x1e64e8=_0x1e64e8-0x13d;let _0x5aa23e=_0x3b68ef[_0x1e64e8];return _0x5aa23e;},a454_0x1e64(_0x3028c2,_0x3476af);}Object['defineProperty'](exports,'__esModule',{'value':!![]});const Yup=__importStar(require(a454_0x9dad93(0x151))),AppError_1=__importDefault(require(a454_0x9dad93(0x161))),QueryDialogflow_1=require(a454_0x9dad93(0x157)),CreateSessionDialogflow_1=require(a454_0x9dad93(0x14e)),TestDialogflowSession=async({projectName:_0x178818,jsonContent:_0x445345,language:_0x48dcb2})=>{const _0x5629ff=a454_0x9dad93,_0x18e580=Yup['object']()['shape']({'projectName':Yup['string']()[_0x5629ff(0x14d)]()[_0x5629ff(0x13f)](0x2),'jsonContent':Yup[_0x5629ff(0x142)]()['required'](),'language':Yup['string']()[_0x5629ff(0x14d)]()[_0x5629ff(0x13f)](0x2)});try{await _0x18e580['validate']({'projectName':_0x178818,'jsonContent':_0x445345,'language':_0x48dcb2});}catch(_0x5a3418){throw new AppError_1[(_0x5629ff(0x14a))](_0x5a3418[_0x5629ff(0x141)]);}const _0x461faa=await(0x0,CreateSessionDialogflow_1['createDialogflowSession'])(0x3e7,_0x178818,_0x445345);if(!_0x461faa)throw new AppError_1['default'](_0x5629ff(0x155),0x190);let _0x114978=await(0x0,QueryDialogflow_1[_0x5629ff(0x153)])(_0x461faa,_0x178818,_0x5629ff(0x159),_0x5629ff(0x143),_0x48dcb2,undefined);await _0x461faa['close']();if(!_0x114978)throw new AppError_1[(_0x5629ff(0x14a))](_0x5629ff(0x140),0x190);const _0x4150b5=[];for(let _0x48101d of _0x114978[_0x5629ff(0x149)]){_0x4150b5[_0x5629ff(0x156)](_0x48101d['text'][_0x5629ff(0x145)][0x0]);}return{'messages':_0x4150b5};};exports[a454_0x9dad93(0x14a)]=TestDialogflowSession;