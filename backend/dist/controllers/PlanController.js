'use strict';const a23_0x10897f=a23_0x4820;(function(_0x58a60a,_0x393014){const _0x48afb6=a23_0x4820,_0x5fbfb9=_0x58a60a();while(!![]){try{const _0x48cdfb=-parseInt(_0x48afb6(0x1e0))/0x1+-parseInt(_0x48afb6(0x1e5))/0x2+-parseInt(_0x48afb6(0x1d1))/0x3+-parseInt(_0x48afb6(0x1f9))/0x4+parseInt(_0x48afb6(0x1f2))/0x5+parseInt(_0x48afb6(0x1e7))/0x6+parseInt(_0x48afb6(0x1dd))/0x7*(parseInt(_0x48afb6(0x1de))/0x8);if(_0x48cdfb===_0x393014)break;else _0x5fbfb9['push'](_0x5fbfb9['shift']());}catch(_0x14dbb0){_0x5fbfb9['push'](_0x5fbfb9['shift']());}}}(a23_0x1a91,0x48384));function a23_0x1a91(){const _0x417f57=['index','remove','findByPk','259DQmIkC','163728lWKdtG','headers','173012VGIJMY','__importDefault','__importStar','secret','default','289698Ihhnol','name','127536cSfpvG','string','yup','../services/PlanService/ListPlansService','super','shape','call','store','message','query','__esModule','2606700frwGdW','../models/Plan','list','verify','../services/PlanService/CreatePlanService','show','body','807228wjtFzo','planId','required','toString','validate','get','split','status','prototype','../models/User','../errors/AppError','../models/Company','defineProperty','update','../config/auth','__createBinding','jsonwebtoken','writable','1453074OWGkgA','object','Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!','authorization','hasOwnProperty','../services/PlanService/DeletePlanService','__setModuleDefault','create','json'];a23_0x1a91=function(){return _0x417f57;};return a23_0x1a91();}var __createBinding=this&&this[a23_0x10897f(0x1ce)]||(Object['create']?function(_0x3bce01,_0x5b6e7b,_0x46f54c,_0x1f0184){const _0x28f155=a23_0x10897f;if(_0x1f0184===undefined)_0x1f0184=_0x46f54c;var _0x346fdd=Object['getOwnPropertyDescriptor'](_0x5b6e7b,_0x46f54c);(!_0x346fdd||(_0x28f155(0x1fe)in _0x346fdd?!_0x5b6e7b[_0x28f155(0x1f1)]:_0x346fdd[_0x28f155(0x1d0)]||_0x346fdd['configurable']))&&(_0x346fdd={'enumerable':!![],'get':function(){return _0x5b6e7b[_0x46f54c];}}),Object['defineProperty'](_0x3bce01,_0x1f0184,_0x346fdd);}:function(_0x5cf48d,_0x3c0a39,_0x30f61c,_0xbec3de){if(_0xbec3de===undefined)_0xbec3de=_0x30f61c;_0x5cf48d[_0xbec3de]=_0x3c0a39[_0x30f61c];}),__setModuleDefault=this&&this[a23_0x10897f(0x1d7)]||(Object[a23_0x10897f(0x1d8)]?function(_0x5d8786,_0x482d8d){const _0x30a686=a23_0x10897f;Object[_0x30a686(0x1cb)](_0x5d8786,_0x30a686(0x1e4),{'enumerable':!![],'value':_0x482d8d});}:function(_0x5e3237,_0x5707db){const _0x16ed27=a23_0x10897f;_0x5e3237[_0x16ed27(0x1e4)]=_0x5707db;}),__importStar=this&&this[a23_0x10897f(0x1e2)]||function(_0x5498cd){const _0x3038bb=a23_0x10897f;if(_0x5498cd&&_0x5498cd['__esModule'])return _0x5498cd;var _0x4fe0e8={};if(_0x5498cd!=null){for(var _0x12ba59 in _0x5498cd)if(_0x12ba59!=='default'&&Object[_0x3038bb(0x201)][_0x3038bb(0x1d5)][_0x3038bb(0x1ed)](_0x5498cd,_0x12ba59))__createBinding(_0x4fe0e8,_0x5498cd,_0x12ba59);}return __setModuleDefault(_0x4fe0e8,_0x5498cd),_0x4fe0e8;},__importDefault=this&&this[a23_0x10897f(0x1e1)]||function(_0x14260d){const _0x27d651=a23_0x10897f;return _0x14260d&&_0x14260d[_0x27d651(0x1f1)]?_0x14260d:{'default':_0x14260d};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['remove']=exports[a23_0x10897f(0x1cc)]=exports['show']=exports['store']=exports[a23_0x10897f(0x1f4)]=exports[a23_0x10897f(0x1da)]=void 0x0;const jsonwebtoken_1=require(a23_0x10897f(0x1cf)),auth_1=__importDefault(require(a23_0x10897f(0x1cd))),Yup=__importStar(require(a23_0x10897f(0x1e9))),AppError_1=__importDefault(require(a23_0x10897f(0x203))),Plan_1=__importDefault(require(a23_0x10897f(0x1f3))),ListPlansService_1=__importDefault(require(a23_0x10897f(0x1ea))),CreatePlanService_1=__importDefault(require(a23_0x10897f(0x1f6))),UpdatePlanService_1=__importDefault(require('../services/PlanService/UpdatePlanService')),ShowPlanService_1=__importDefault(require('../services/PlanService/ShowPlanService')),FindAllPlanService_1=__importDefault(require('../services/PlanService/FindAllPlanService')),DeletePlanService_1=__importDefault(require(a23_0x10897f(0x1d6))),User_1=__importDefault(require(a23_0x10897f(0x202))),Company_1=__importDefault(require(a23_0x10897f(0x1ca))),index=async(_0xb8307c,_0x2fb0d8)=>{const _0x5c9dc1=a23_0x10897f,{searchParam:_0xc2f050,pageNumber:_0x33af90}=_0xb8307c[_0x5c9dc1(0x1f0)],_0x64ae3c=_0xb8307c['headers']['authorization'],[,_0x4a6e28]=_0x64ae3c[_0x5c9dc1(0x1ff)]('\x20'),_0x455372=(0x0,jsonwebtoken_1[_0x5c9dc1(0x1f5)])(_0x4a6e28,auth_1['default']['secret']),{id:_0x203691,profile:_0x2f30e2,companyId:_0x263db7}=_0x455372,_0x11c81b=await User_1[_0x5c9dc1(0x1e4)][_0x5c9dc1(0x1dc)](_0x203691),_0x199b17=await Company_1[_0x5c9dc1(0x1e4)][_0x5c9dc1(0x1dc)](_0x263db7),_0x60415a=_0x199b17[_0x5c9dc1(0x1fa)],_0x105d0a=await Plan_1[_0x5c9dc1(0x1e4)][_0x5c9dc1(0x1dc)](_0x60415a),_0x219a3f=_0x105d0a[_0x5c9dc1(0x1e6)];if(_0x11c81b[_0x5c9dc1(0x1eb)]===!![]){const {plans:_0x778064,count:_0x32be04,hasMore:_0x490367}=await(0x0,ListPlansService_1[_0x5c9dc1(0x1e4)])({'searchParam':_0xc2f050,'pageNumber':_0x33af90});return _0x2fb0d8[_0x5c9dc1(0x1d9)]({'plans':_0x778064,'count':_0x32be04,'hasMore':_0x490367});}else{const {plans:_0x10e42c,count:_0x385dac,hasMore:_0x3d57e6}=await(0x0,ListPlansService_1[_0x5c9dc1(0x1e4)])({'searchParam':_0x219a3f,'pageNumber':_0x33af90});return _0x2fb0d8[_0x5c9dc1(0x1d9)]({'plans':_0x10e42c,'count':_0x385dac,'hasMore':_0x3d57e6});}};exports['index']=index;const list=async(_0x2130b9,_0x1e03bf)=>{const _0x10619c=a23_0x10897f,_0x26856b=await(0x0,FindAllPlanService_1['default'])();return _0x1e03bf[_0x10619c(0x200)](0xc8)['json'](_0x26856b);};exports[a23_0x10897f(0x1f4)]=list;const store=async(_0x31951d,_0x30b13d)=>{const _0x400add=a23_0x10897f,_0x500096=_0x31951d[_0x400add(0x1f8)],_0x24ce83=Yup[_0x400add(0x1d2)]()[_0x400add(0x1ec)]({'name':Yup[_0x400add(0x1e8)]()[_0x400add(0x1fb)]()});try{await _0x24ce83['validate'](_0x500096);}catch(_0x49b492){throw new AppError_1['default'](_0x49b492['message']);}const _0x5813ca=await(0x0,CreatePlanService_1['default'])(_0x500096);return _0x30b13d[_0x400add(0x200)](0xc8)[_0x400add(0x1d9)](_0x5813ca);};exports[a23_0x10897f(0x1ee)]=store;const show=async(_0x3c3213,_0x1be610)=>{const _0xe113c4=a23_0x10897f,{id:_0x5210bd}=_0x3c3213['params'],_0x748d33=_0x3c3213['headers'][_0xe113c4(0x1d4)],[,_0x4ae4b1]=_0x748d33['split']('\x20'),_0x4f9465=(0x0,jsonwebtoken_1[_0xe113c4(0x1f5)])(_0x4ae4b1,auth_1['default']['secret']),{id:_0x5a3361,profile:_0x56ff84,companyId:_0x4ff208}=_0x4f9465,_0x1b4625=await User_1[_0xe113c4(0x1e4)]['findByPk'](_0x5a3361),_0x1b156a=await Company_1[_0xe113c4(0x1e4)][_0xe113c4(0x1dc)](_0x4ff208),_0x2064e5=_0x1b156a[_0xe113c4(0x1fa)];if(_0x1b4625['super']===!![]){const _0x3f3dcd=await(0x0,ShowPlanService_1[_0xe113c4(0x1e4)])(_0x5210bd);return _0x1be610[_0xe113c4(0x200)](0xc8)[_0xe113c4(0x1d9)](_0x3f3dcd);}else{if(_0x5210bd!==_0x2064e5['toString']())return _0x1be610[_0xe113c4(0x200)](0x190)['json']({'error':_0xe113c4(0x1d3)});else{if(_0x5210bd===_0x2064e5['toString']()){const _0x3f69ca=await(0x0,ShowPlanService_1[_0xe113c4(0x1e4)])(_0x5210bd);return _0x1be610[_0xe113c4(0x200)](0xc8)['json'](_0x3f69ca);}}}};exports[a23_0x10897f(0x1f7)]=show;const update=async(_0x22967d,_0x3d9364)=>{const _0x5c00be=a23_0x10897f,_0x11e5c8=_0x22967d['body'],_0x1c3dee=Yup[_0x5c00be(0x1d2)]()['shape']({'name':Yup[_0x5c00be(0x1e8)]()});try{await _0x1c3dee[_0x5c00be(0x1fd)](_0x11e5c8);}catch(_0x9afde4){throw new AppError_1[(_0x5c00be(0x1e4))](_0x9afde4[_0x5c00be(0x1ef)]);}const {id:_0x221f6f,name:_0x436625,users:_0x4316a4,connections:_0x4221f6,queues:_0xe49b86,amount:_0x2fab3d,useWhatsapp:_0x440cf2,useFacebook:_0x14985a,useInstagram:_0x1b46f3,useCampaigns:_0x5f1a0e,useSchedules:_0x30d7f3,useInternalChat:_0xbe0b5f,useExternalApi:_0x41cda9,useKanban:_0xd5c10f}=_0x11e5c8,_0x2f5fa1=_0x22967d[_0x5c00be(0x1df)][_0x5c00be(0x1d4)],[,_0x132e38]=_0x2f5fa1[_0x5c00be(0x1ff)]('\x20'),_0x5281d5=(0x0,jsonwebtoken_1['verify'])(_0x132e38,auth_1[_0x5c00be(0x1e4)]['secret']),{id:_0xb98df1,profile:_0x3a2dc2,companyId:_0x21ab4c}=_0x5281d5,_0x3afc5a=await User_1[_0x5c00be(0x1e4)]['findByPk'](_0xb98df1),_0x91d133=await Company_1[_0x5c00be(0x1e4)][_0x5c00be(0x1dc)](_0x21ab4c),_0x89dee0=_0x91d133[_0x5c00be(0x1fa)];if(_0x3afc5a[_0x5c00be(0x1eb)]===!![]){const _0x202b7a=await(0x0,UpdatePlanService_1['default'])({'id':_0x221f6f,'name':_0x436625,'users':_0x4316a4,'connections':_0x4221f6,'queues':_0xe49b86,'amount':_0x2fab3d,'useWhatsapp':_0x440cf2,'useFacebook':_0x14985a,'useInstagram':_0x1b46f3,'useCampaigns':_0x5f1a0e,'useSchedules':_0x30d7f3,'useInternalChat':_0xbe0b5f,'useExternalApi':_0x41cda9,'useKanban':_0xd5c10f});return _0x3d9364[_0x5c00be(0x200)](0xc8)[_0x5c00be(0x1d9)](_0x202b7a);}else{if(_0x89dee0[_0x5c00be(0x1fc)]()!==_0x221f6f)return _0x3d9364[_0x5c00be(0x200)](0x190)[_0x5c00be(0x1d9)]({'error':'Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!'});}};exports['update']=update;const remove=async(_0x4ae32a,_0x3a35f4)=>{const _0x560f8a=a23_0x10897f,{id:_0x403f41}=_0x4ae32a['params'],_0x2d49de=_0x4ae32a[_0x560f8a(0x1df)][_0x560f8a(0x1d4)],[,_0x2fc47b]=_0x2d49de['split']('\x20'),_0x4e69e8=(0x0,jsonwebtoken_1['verify'])(_0x2fc47b,auth_1['default'][_0x560f8a(0x1e3)]),{id:_0x18505f,profile:_0x134a9f,companyId:_0x2d6e66}=_0x4e69e8,_0x2bc0af=await User_1[_0x560f8a(0x1e4)][_0x560f8a(0x1dc)](_0x18505f);if(_0x2bc0af['super']===!![]){const _0x32aeef=await(0x0,DeletePlanService_1[_0x560f8a(0x1e4)])(_0x403f41);return _0x3a35f4['status'](0xc8)[_0x560f8a(0x1d9)](_0x32aeef);}else{if(_0x2d6e66[_0x560f8a(0x1fc)]()!==_0x403f41)return _0x3a35f4[_0x560f8a(0x200)](0x190)[_0x560f8a(0x1d9)]({'error':_0x560f8a(0x1d3)});}};function a23_0x4820(_0xe14142,_0x14271a){const _0x1a9111=a23_0x1a91();return a23_0x4820=function(_0x48207c,_0x5b0766){_0x48207c=_0x48207c-0x1ca;let _0x2c3541=_0x1a9111[_0x48207c];return _0x2c3541;},a23_0x4820(_0xe14142,_0x14271a);}exports[a23_0x10897f(0x1db)]=remove;