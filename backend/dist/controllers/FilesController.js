'use strict';const a19_0x35e435=a19_0x2362;(function(_0x26b37a,_0x4398d0){const _0x44269c=a19_0x2362,_0x3e6eec=_0x26b37a();while(!![]){try{const _0x2e8f81=parseInt(_0x44269c(0x102))/0x1+-parseInt(_0x44269c(0x10b))/0x2*(-parseInt(_0x44269c(0xe8))/0x3)+parseInt(_0x44269c(0x105))/0x4+-parseInt(_0x44269c(0xfd))/0x5+-parseInt(_0x44269c(0x112))/0x6+parseInt(_0x44269c(0xf0))/0x7*(parseInt(_0x44269c(0x10a))/0x8)+-parseInt(_0x44269c(0x111))/0x9;if(_0x2e8f81===_0x4398d0)break;else _0x3e6eec['push'](_0x3e6eec['shift']());}catch(_0x189a43){_0x3e6eec['push'](_0x3e6eec['shift']());}}}(a19_0x5393,0x31476));var __importDefault=this&&this['__importDefault']||function(_0x172806){return _0x172806&&_0x172806['__esModule']?_0x172806:{'default':_0x172806};};Object[a19_0x35e435(0xe4)](exports,a19_0x35e435(0x110),{'value':!![]}),exports[a19_0x35e435(0xf2)]=exports[a19_0x35e435(0xfc)]=exports[a19_0x35e435(0x103)]=exports[a19_0x35e435(0xea)]=exports[a19_0x35e435(0x10e)]=exports[a19_0x35e435(0xf3)]=exports[a19_0x35e435(0xf6)]=exports['index']=void 0x0;function a19_0x5393(){const _0x30f11b=['292139edEBKR','remove','../services/FileServices/UpdateService','1402188GxilWL','getIO','index','emit','ERR_NO_PERMISSION','62368ZumuKo','2012mjOoKz','isArray','query','uploadMedias','filename','__esModule','1708326cXWmkE','1343892KMPcus','../models/FilesOptions','head','length','defineProperty','profile','default','../services/FileServices/DeleteService','1047JwuKEv','-file','update','Arquivos\x20atualizados','params','../libs/socket','delete','body','7DNhEMs','send','list','show','message','lodash','store','status','json','findOne','create','entries','removeAll','1929670zVSzYh','company','replace','File\x20List\x20deleted','user'];a19_0x5393=function(){return _0x30f11b;};return a19_0x5393();}const socket_1=require(a19_0x35e435(0xed)),AppError_1=__importDefault(require('../errors/AppError')),lodash_1=require(a19_0x35e435(0xf5)),CreateService_1=__importDefault(require('../services/FileServices/CreateService')),ListService_1=__importDefault(require('../services/FileServices/ListService')),UpdateService_1=__importDefault(require(a19_0x35e435(0x104))),ShowService_1=__importDefault(require('../services/FileServices/ShowService')),DeleteService_1=__importDefault(require(a19_0x35e435(0xe7))),SimpleListService_1=__importDefault(require('../services/FileServices/SimpleListService')),DeleteAllService_1=__importDefault(require('../services/FileServices/DeleteAllService')),FilesOptions_1=__importDefault(require(a19_0x35e435(0xe1))),index=async(_0x3c2f46,_0x3fa5f4)=>{const _0x3ac1e8=a19_0x35e435,{pageNumber:_0x17089c,searchParam:_0x1757da}=_0x3c2f46[_0x3ac1e8(0x10d)],{companyId:_0x5aafab}=_0x3c2f46[_0x3ac1e8(0x101)],{files:_0x4f809e,count:_0x3fba5c,hasMore:_0x44201c}=await(0x0,ListService_1[_0x3ac1e8(0xe6)])({'searchParam':_0x1757da,'pageNumber':_0x17089c,'companyId':_0x5aafab});return _0x3fa5f4[_0x3ac1e8(0xf8)]({'files':_0x4f809e,'count':_0x3fba5c,'hasMore':_0x44201c});};exports[a19_0x35e435(0x107)]=index;const store=async(_0x6c8866,_0x14780b)=>{const _0x2857cb=a19_0x35e435,{name:_0x5a23b3,message:_0x4e7182,options:_0x80906d}=_0x6c8866[_0x2857cb(0xef)],{companyId:_0x4e73be}=_0x6c8866[_0x2857cb(0x101)],_0x57dbc5=await(0x0,CreateService_1[_0x2857cb(0xe6)])({'name':_0x5a23b3,'message':_0x4e7182,'options':_0x80906d,'companyId':_0x4e73be}),_0x157bd9=(0x0,socket_1[_0x2857cb(0x106)])();return _0x157bd9[_0x2857cb(0x108)](_0x2857cb(0xfe)+_0x4e73be+_0x2857cb(0xe9),{'action':_0x2857cb(0xfa),'fileList':_0x57dbc5}),_0x14780b['status'](0xc8)[_0x2857cb(0xf8)](_0x57dbc5);};function a19_0x2362(_0x1a7885,_0x493399){const _0x5393c5=a19_0x5393();return a19_0x2362=function(_0x2362f3,_0x220067){_0x2362f3=_0x2362f3-0xe1;let _0x2aef72=_0x5393c5[_0x2362f3];return _0x2aef72;},a19_0x2362(_0x1a7885,_0x493399);}exports[a19_0x35e435(0xf6)]=store;const show=async(_0x372d24,_0x49174b)=>{const _0x1e6328=a19_0x35e435,{fileId:_0x2dce30}=_0x372d24[_0x1e6328(0xec)],{companyId:_0x4047b1}=_0x372d24[_0x1e6328(0x101)],_0x5161c2=await(0x0,ShowService_1['default'])(_0x2dce30,_0x4047b1);return _0x49174b['status'](0xc8)[_0x1e6328(0xf8)](_0x5161c2);};exports[a19_0x35e435(0xf3)]=show;const uploadMedias=async(_0x436619,_0x31c5f9)=>{const _0x1eef07=a19_0x35e435,{fileId:_0x2ee9d3,id:_0x463605,mediaType:_0x132872}=_0x436619[_0x1eef07(0xef)],_0x1b3b5a=_0x436619['files'],_0xe7b5f6=(0x0,lodash_1[_0x1eef07(0xe2)])(_0x1b3b5a);try{let _0x498975;if(_0x1b3b5a[_0x1eef07(0xe3)]>0x0)for(const [_0x63ccb,_0x46ef7d]of _0x1b3b5a[_0x1eef07(0xfb)]()){_0x498975=await FilesOptions_1[_0x1eef07(0xe6)][_0x1eef07(0xf9)]({'where':{'fileId':_0x2ee9d3,'id':Array[_0x1eef07(0x10c)](_0x463605)?_0x463605[_0x63ccb]:_0x463605}}),_0x498975[_0x1eef07(0xea)]({'path':_0x46ef7d[_0x1eef07(0x10f)][_0x1eef07(0xff)]('/','-'),'mediaType':Array[_0x1eef07(0x10c)](_0x132872)?_0x132872[_0x63ccb]:_0x132872});}return _0x31c5f9['send']({'mensagem':_0x1eef07(0xeb)});}catch(_0x2427ee){throw new AppError_1[(_0x1eef07(0xe6))](_0x2427ee[_0x1eef07(0xf4)]);}};exports[a19_0x35e435(0x10e)]=uploadMedias;const update=async(_0xe5c693,_0x703082)=>{const _0x5df282=a19_0x35e435;if(_0xe5c693[_0x5df282(0x101)][_0x5df282(0xe5)]!=='admin')throw new AppError_1[(_0x5df282(0xe6))](_0x5df282(0x109),0x193);const {fileId:_0x1457ac}=_0xe5c693['params'],_0x45b3a6=_0xe5c693[_0x5df282(0xef)],{companyId:_0x24c47a}=_0xe5c693[_0x5df282(0x101)],_0x2ebb84=await(0x0,UpdateService_1[_0x5df282(0xe6)])({'fileData':_0x45b3a6,'id':_0x1457ac,'companyId':_0x24c47a}),_0x44f6f3=(0x0,socket_1[_0x5df282(0x106)])();return _0x44f6f3['emit'](_0x5df282(0xfe)+_0x24c47a+_0x5df282(0xe9),{'action':_0x5df282(0xea),'fileList':_0x2ebb84}),_0x703082[_0x5df282(0xf7)](0xc8)[_0x5df282(0xf8)](_0x2ebb84);};exports['update']=update;const remove=async(_0x555ac4,_0x273488)=>{const _0x2622bf=a19_0x35e435,{fileId:_0x376a95}=_0x555ac4[_0x2622bf(0xec)],{companyId:_0x52fec9}=_0x555ac4[_0x2622bf(0x101)];await(0x0,DeleteService_1[_0x2622bf(0xe6)])(_0x376a95,_0x52fec9);const _0x31561f=(0x0,socket_1[_0x2622bf(0x106)])();return _0x31561f['emit']('company'+_0x52fec9+'-file',{'action':_0x2622bf(0xee),'fileId':_0x376a95}),_0x273488[_0x2622bf(0xf7)](0xc8)[_0x2622bf(0xf8)]({'message':_0x2622bf(0x100)});};exports[a19_0x35e435(0x103)]=remove;const removeAll=async(_0x1df30f,_0x1cfee4)=>{const _0x271516=a19_0x35e435,{companyId:_0x1e3d55}=_0x1df30f[_0x271516(0x101)];return await(0x0,DeleteAllService_1[_0x271516(0xe6)])(_0x1e3d55),_0x1cfee4[_0x271516(0xf1)]();};exports[a19_0x35e435(0xfc)]=removeAll;const list=async(_0x4b47a7,_0x85e5a6)=>{const _0x40fbe2=a19_0x35e435,{searchParam:_0x1e36d8}=_0x4b47a7[_0x40fbe2(0x10d)],{companyId:_0x498d11}=_0x4b47a7['user'],_0x3c183=await(0x0,SimpleListService_1[_0x40fbe2(0xe6)])({'searchParam':_0x1e36d8,'companyId':_0x498d11});return _0x85e5a6[_0x40fbe2(0xf8)](_0x3c183);};exports[a19_0x35e435(0xf2)]=list;