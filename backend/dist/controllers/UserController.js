<<<<<<< HEAD
'use strict';const a39_0x491511=a39_0x280e;(function(_0xcc5218,_0x28f72c){const _0x253e6f=a39_0x280e,_0x2a3ba5=_0xcc5218();while(!![]){try{const _0x5b2e39=parseInt(_0x253e6f(0x232))/0x1*(-parseInt(_0x253e6f(0x225))/0x2)+parseInt(_0x253e6f(0x21f))/0x3+parseInt(_0x253e6f(0x1f1))/0x4+parseInt(_0x253e6f(0x231))/0x5+-parseInt(_0x253e6f(0x205))/0x6*(parseInt(_0x253e6f(0x23b))/0x7)+parseInt(_0x253e6f(0x210))/0x8*(parseInt(_0x253e6f(0x20f))/0x9)+-parseInt(_0x253e6f(0x223))/0xa*(parseInt(_0x253e6f(0x213))/0xb);if(_0x5b2e39===_0x28f72c)break;else _0x2a3ba5['push'](_0x2a3ba5['shift']());}catch(_0x442172){_0x2a3ba5['push'](_0x2a3ba5['shift']());}}}(a39_0x2b4c,0x3a903));var __importDefault=this&&this[a39_0x491511(0x20a)]||function(_0x163880){return _0x163880&&_0x163880['__esModule']?_0x163880:{'default':_0x163880};};Object['defineProperty'](exports,a39_0x491511(0x226),{'value':!![]}),exports[a39_0x491511(0x204)]=exports[a39_0x491511(0x22a)]=exports[a39_0x491511(0x207)]=exports['update']=exports[a39_0x491511(0x1f4)]=exports[a39_0x491511(0x201)]=exports[a39_0x491511(0x1f7)]=void 0x0;const socket_1=require('../libs/socket'),lodash_1=require(a39_0x491511(0x21b)),CheckSettings_1=__importDefault(require(a39_0x491511(0x20e))),AppError_1=__importDefault(require(a39_0x491511(0x22b))),CreateUserService_1=__importDefault(require(a39_0x491511(0x211))),ListUsersService_1=__importDefault(require(a39_0x491511(0x1fc))),UpdateUserService_1=__importDefault(require(a39_0x491511(0x1fb))),ShowUserService_1=__importDefault(require('../services/UserServices/ShowUserService')),DeleteUserService_1=__importDefault(require('../services/UserServices/DeleteUserService')),SimpleListService_1=__importDefault(require(a39_0x491511(0x243))),CreateCompanyService_1=__importDefault(require(a39_0x491511(0x1fa))),SendMail_1=require('../helpers/SendMail'),useDate_1=require('../utils/useDate'),ShowCompanyService_1=__importDefault(require(a39_0x491511(0x1f6))),wbot_1=require('../libs/wbot'),FindCompaniesWhatsappService_1=__importDefault(require('../services/CompanyService/FindCompaniesWhatsappService')),User_1=__importDefault(require(a39_0x491511(0x22c))),lodash_2=require('lodash'),index=async(_0x249c2b,_0x463fbd)=>{const _0x56505b=a39_0x491511,{searchParam:_0x94bc2f,pageNumber:_0x412c1d}=_0x249c2b[_0x56505b(0x215)],{companyId:_0x14763e,profile:_0x2cfd63}=_0x249c2b['user'],{users:_0x5cbf3b,count:_0x520e18,hasMore:_0x4a30c5}=await(0x0,ListUsersService_1[_0x56505b(0x23c)])({'searchParam':_0x94bc2f,'pageNumber':_0x412c1d,'companyId':_0x14763e,'profile':_0x2cfd63});return _0x463fbd[_0x56505b(0x218)]({'users':_0x5cbf3b,'count':_0x520e18,'hasMore':_0x4a30c5});};exports['index']=index;const store=async(_0x65ef4d,_0x1b2ade)=>{const _0x358e2b=a39_0x491511,{email:_0x48bb1c,password:_0x32705f,name:_0x42704e,phone:_0x59c0d7,profile:_0x3540e0,companyId:_0x59315d,queueIds:_0x346a6c,companyName:_0x9d88b2,planId:_0x5bcfd2,startWork:_0x1a13a5,endWork:_0x11ef26,whatsappId:_0x106955,allTicket:_0x1de119,defaultTheme:_0x3f3547,defaultMenu:_0x4c9a85,allowGroup:_0x8e4df4,allHistoric:_0x28257a,allUserChat:_0x3ea850}=_0x65ef4d[_0x358e2b(0x244)];let _0x45247c=null;const {dateToClient:_0x44b791}=(0x0,useDate_1[_0x358e2b(0x209)])();if(_0x65ef4d['user']!==undefined){const {companyId:_0x54a0e6}=_0x65ef4d[_0x358e2b(0x230)];_0x45247c=_0x54a0e6;}if(_0x65ef4d[_0x358e2b(0x1f8)]===_0x358e2b(0x238)&&await(0x0,CheckSettings_1['default'])(_0x358e2b(0x23d))===_0x358e2b(0x1f9))throw new AppError_1[(_0x358e2b(0x23c))](_0x358e2b(0x236),0x193);else{if(_0x65ef4d[_0x358e2b(0x1f8)]!=='/signup'&&_0x65ef4d[_0x358e2b(0x230)][_0x358e2b(0x1f5)]!=='admin')throw new AppError_1[(_0x358e2b(0x23c))](_0x358e2b(0x200),0x193);}if(process[_0x358e2b(0x1fd)]['DEMO']==='ON')throw new AppError_1[(_0x358e2b(0x23c))](_0x358e2b(0x200),0x193);const _0x31a0a6=_0x59315d||_0x45247c;if(!_0x31a0a6){const _0x63ee79=new Date();_0x63ee79[_0x358e2b(0x234)](_0x63ee79[_0x358e2b(0x229)]()+0x3);const _0x206ca4=_0x63ee79['toISOString']()['split']('T')[0x0],_0x2eb3ad={'name':_0x9d88b2,'email':_0x48bb1c,'phone':_0x59c0d7,'planId':_0x5bcfd2,'status':!![],'dueDate':_0x206ca4,'recurrence':'','document':'','paymentMethod':'','password':_0x32705f,'companyUserName':_0x42704e,'startWork':_0x1a13a5,'endWork':_0x11ef26,'defaultTheme':'light','defaultMenu':_0x358e2b(0x222),'allowGroup':![],'allHistoric':![]},_0x50b567=await(0x0,CreateCompanyService_1[_0x358e2b(0x23c)])(_0x2eb3ad);try{const _0x5af132={'to':_0x48bb1c,'subject':_0x358e2b(0x221)+_0x9d88b2,'text':_0x358e2b(0x23e)+_0x42704e+_0x358e2b(0x21e)+_0x9d88b2+_0x358e2b(0x21a)+_0x9d88b2+_0x358e2b(0x1f0)+_0x48bb1c+'<br>Senha:\x20'+_0x32705f+_0x358e2b(0x240)+_0x44b791(_0x206ca4)};await(0x0,SendMail_1[_0x358e2b(0x206)])(_0x5af132);}catch(_0x49fcac){console['log'](_0x358e2b(0x20d));}try{const _0x52d9fd=await(0x0,ShowCompanyService_1[_0x358e2b(0x23c)])(0x1),_0x43c9e7=await(0x0,FindCompaniesWhatsappService_1[_0x358e2b(0x23c)])(_0x52d9fd['id']);if(_0x43c9e7['whatsapps'][0x0][_0x358e2b(0x23a)]==='CONNECTED'&&(_0x59c0d7!==undefined||!(0x0,lodash_1[_0x358e2b(0x1ff)])(_0x59c0d7)||!(0x0,lodash_1[_0x358e2b(0x214)])(_0x59c0d7))){const _0x46f15b=_0x43c9e7[_0x358e2b(0x220)][0x0]['id'],_0x5c9232=(0x0,wbot_1[_0x358e2b(0x237)])(_0x46f15b),_0x2a129d='Olá\x20'+_0x42704e+_0x358e2b(0x224)+_0x9d88b2+_0x358e2b(0x22f)+_0x9d88b2+'\x0aEmail:\x20'+_0x48bb1c+'\x0aSenha:\x20'+_0x32705f+_0x358e2b(0x202)+_0x44b791(_0x206ca4);await _0x5c9232[_0x358e2b(0x219)]('55'+_0x59c0d7+_0x358e2b(0x1f3),{'text':_0x2a129d});}}catch(_0x2d6dab){console[_0x358e2b(0x216)](_0x358e2b(0x245));}return _0x1b2ade[_0x358e2b(0x23a)](0xc8)[_0x358e2b(0x218)](_0x50b567);}if(_0x31a0a6){const _0x210600=await(0x0,CreateUserService_1[_0x358e2b(0x23c)])({'email':_0x48bb1c,'password':_0x32705f,'name':_0x42704e,'profile':_0x3540e0,'companyId':_0x31a0a6,'queueIds':_0x346a6c,'startWork':_0x1a13a5,'endWork':_0x11ef26,'whatsappId':_0x106955,'allTicket':_0x1de119,'defaultTheme':_0x3f3547,'defaultMenu':_0x4c9a85,'allowGroup':_0x8e4df4,'allHistoric':_0x28257a,'allUserChat':_0x3ea850}),_0x42e384=(0x0,socket_1[_0x358e2b(0x227)])();return _0x42e384[_0x358e2b(0x21d)]('company-'+_0x45247c+_0x358e2b(0x20c),{'action':_0x358e2b(0x228),'user':_0x210600}),_0x1b2ade[_0x358e2b(0x23a)](0xc8)['json'](_0x210600);}};exports[a39_0x491511(0x201)]=store;function a39_0x2b4c(){const _0x431fe7=['../errors/AppError','../models/User','profileImage','findByPk','!\x0a\x0aSegue\x20os\x20dados\x20da\x20sua\x20empresa:\x0a\x0aNome:\x20','user','193560UAePve','22038ulngus','DEMO','setDate','files','ERR_USER_CREATION_DISABLED','getWbot','/signup','params','status','77NtaLSf','default','userCreation','Olá\x20','Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!','<br>Data\x20Vencimento\x20Trial:\x20','delete','User\x20deleted','../services/UserServices/SimpleListService','body','Não\x20consegui\x20enviar\x20a\x20mensagem','<br>Email:\x20','1405204gcKOYE','filename','@s.whatsapp.net','show','profile','../services/CompanyService/ShowCompanyService','index','url','disabled','../services/CompanyService/CreateCompanyService','../services/UserServices/UpdateUserService','../services/UserServices/ListUsersService','env','admin','isNil','ERR_NO_PERMISSION','store','\x0aData\x20Vencimento\x20Trial:\x20','company-','mediaUpload','175986azQPjY','SendMail','remove','head','useDate','__importDefault','update','-user','Não\x20consegui\x20enviar\x20o\x20email','../helpers/CheckSettings','27963CvMRlm','600tljpNU','../services/UserServices/CreateUserService','findOne','571703GrqNCa','isEmpty','query','log','companyId','json','sendMessage','!<br><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Segue\x20os\x20dados\x20da\x20sua\x20empresa:<br><br>Nome:\x20','lodash','save','emit',',\x20este\x20é\x20um\x20email\x20sobre\x20o\x20cadastro\x20da\x20','1344015PDQEty','whatsapps','Login\x20e\x20senha\x20da\x20Empresa\x20','closed','30ifwhto',',\x20este\x20é\x20uma\x20mensagem\x20sobre\x20o\x20cadastro\x20da\x20','32hoGWUJ','__esModule','getIO','create','getDate','list'];a39_0x2b4c=function(){return _0x431fe7;};return a39_0x2b4c();}const show=async(_0x4f95de,_0x316988)=>{const _0x511436=a39_0x491511,{userId:_0x560084}=_0x4f95de[_0x511436(0x239)],{companyId:_0x39e25d}=_0x4f95de[_0x511436(0x230)],_0x39e0cb=await(0x0,ShowUserService_1[_0x511436(0x23c)])(_0x560084,_0x39e25d);return _0x316988['status'](0xc8)[_0x511436(0x218)](_0x39e0cb);};function a39_0x280e(_0x48198d,_0x12fc8b){const _0x2b4ce3=a39_0x2b4c();return a39_0x280e=function(_0x280edb,_0x364bef){_0x280edb=_0x280edb-0x1f0;let _0x3aaac1=_0x2b4ce3[_0x280edb];return _0x3aaac1;},a39_0x280e(_0x48198d,_0x12fc8b);}exports['show']=show;const update=async(_0x44dd4f,_0x3c5115)=>{const _0x49211d=a39_0x491511;if(process[_0x49211d(0x1fd)][_0x49211d(0x233)]==='ON')throw new AppError_1[(_0x49211d(0x23c))](_0x49211d(0x200),0x193);const {id:_0x30f44,companyId:_0x167a09}=_0x44dd4f[_0x49211d(0x230)],{userId:_0x10325f}=_0x44dd4f['params'],_0x3148ee=_0x44dd4f[_0x49211d(0x244)],_0x35334d=await(0x0,UpdateUserService_1[_0x49211d(0x23c)])({'userData':_0x3148ee,'userId':_0x10325f,'companyId':_0x167a09,'requestUserId':+_0x30f44}),_0x515dc3=(0x0,socket_1[_0x49211d(0x227)])();return _0x515dc3[_0x49211d(0x21d)](_0x49211d(0x203)+_0x167a09+_0x49211d(0x20c),{'action':_0x49211d(0x20b),'user':_0x35334d}),_0x3c5115[_0x49211d(0x23a)](0xc8)[_0x49211d(0x218)](_0x35334d);};exports['update']=update;const remove=async(_0x524dfd,_0x6f0188)=>{const _0x345c6b=a39_0x491511,{userId:_0xea3cfa}=_0x524dfd[_0x345c6b(0x239)],{companyId:_0x5a7226,id:_0x4a329a,profile:_0x5e953a}=_0x524dfd[_0x345c6b(0x230)];if(_0x5e953a!==_0x345c6b(0x1fe))throw new AppError_1[(_0x345c6b(0x23c))]('ERR_NO_PERMISSION',0x193);if(process[_0x345c6b(0x1fd)][_0x345c6b(0x233)]==='ON')throw new AppError_1[(_0x345c6b(0x23c))](_0x345c6b(0x200),0x193);const _0x4c0332=await User_1[_0x345c6b(0x23c)][_0x345c6b(0x212)]({'where':{'id':_0xea3cfa}});if(_0x5a7226!==_0x4c0332[_0x345c6b(0x217)])return _0x6f0188[_0x345c6b(0x23a)](0x190)[_0x345c6b(0x218)]({'error':_0x345c6b(0x23f)});else{await(0x0,DeleteUserService_1[_0x345c6b(0x23c)])(_0xea3cfa,_0x5a7226);const _0x42930f=(0x0,socket_1[_0x345c6b(0x227)])();return _0x42930f[_0x345c6b(0x21d)](_0x345c6b(0x203)+_0x5a7226+_0x345c6b(0x20c),{'action':_0x345c6b(0x241),'userId':_0xea3cfa}),_0x6f0188[_0x345c6b(0x23a)](0xc8)[_0x345c6b(0x218)]({'message':_0x345c6b(0x242)});}};exports['remove']=remove;const list=async(_0x34f010,_0x41b306)=>{const _0x4a3fb3=a39_0x491511,{companyId:_0x4f5f65}=_0x34f010['query'],{companyId:_0x3c67d6}=_0x34f010[_0x4a3fb3(0x230)],_0x282b5b=await(0x0,SimpleListService_1[_0x4a3fb3(0x23c)])({'companyId':_0x4f5f65?+_0x4f5f65:_0x3c67d6});return _0x41b306[_0x4a3fb3(0x23a)](0xc8)[_0x4a3fb3(0x218)](_0x282b5b);};exports['list']=list;const mediaUpload=async(_0x25d365,_0x5bf765)=>{const _0x383f56=a39_0x491511,{userId:_0x411ff0}=_0x25d365['params'],_0x5504ed=_0x25d365[_0x383f56(0x235)],_0x32f16a=(0x0,lodash_2[_0x383f56(0x208)])(_0x5504ed);try{const _0x41c80f=await User_1[_0x383f56(0x23c)][_0x383f56(0x22e)](_0x411ff0);return _0x41c80f[_0x383f56(0x22d)]=_0x32f16a[_0x383f56(0x1f2)]['replace']('/','-'),await _0x41c80f[_0x383f56(0x21c)](),_0x5bf765[_0x383f56(0x23a)](0xc8)[_0x383f56(0x218)]({'user':_0x41c80f,'message':'Imagem\x20atualizada'});}catch(_0xdcf41d){throw new AppError_1['default'](_0xdcf41d['message']);}};exports[a39_0x491511(0x204)]=mediaUpload;
=======
'use strict';function a39_0x29bc(){const _0x382b9f=['json','../services/CompanyService/ShowCompanyService','useDate','Não\x20consegui\x20enviar\x20a\x20mensagem','delete','User\x20deleted','<br>Email:\x20','companyId','../services/UserServices/ShowUserService','default','SendMail','head','env','filename','defineProperty','index','../services/UserServices/DeleteUserService','save','!<br><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Segue\x20os\x20dados\x20da\x20sua\x20empresa:<br><br>Nome:\x20','792urhvSX',',\x20este\x20é\x20uma\x20mensagem\x20sobre\x20o\x20cadastro\x20da\x20','setDate','-user','profileImage','getIO','737HBfcTe','remove','<br>Data\x20Vencimento\x20Trial:\x20','findOne','split','ERR_USER_CREATION_DISABLED','log','Não\x20consegui\x20enviar\x20o\x20email','Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!','mediaUpload','../errors/AppError','!\x0a\x0aSegue\x20os\x20dados\x20da\x20sua\x20empresa:\x0a\x0aNome:\x20','store','Imagem\x20atualizada','../models/User','10003LBDZxM','query','admin','102YRGmbr','getWbot','isEmpty','ERR_NO_PERMISSION','emit','company-','create','20mutIup','lodash','profile','user','8sAkOlD','body','\x0aEmail:\x20','/signup','whatsapps','Login\x20e\x20senha\x20da\x20Empresa\x20','closed','@s.whatsapp.net','472850sGZXze','1183929QeASrS','../libs/wbot','DEMO','397170BAGhov','../libs/socket','../services/UserServices/ListUsersService','../services/UserServices/SimpleListService','toISOString','userCreation','message','../helpers/CheckSettings','5607fRszrh','replace','CONNECTED','../utils/useDate','url','list','../services/CompanyService/FindCompaniesWhatsappService','375756BbHZpx','31020VMZXiF','params','../helpers/SendMail','status','<br>Senha:\x20','../services/UserServices/CreateUserService','update'];a39_0x29bc=function(){return _0x382b9f;};return a39_0x29bc();}const a39_0x4026bd=a39_0x4a50;(function(_0x1e5a0d,_0x46c8d4){const _0xb1b374=a39_0x4a50,_0x53d782=_0x1e5a0d();while(!![]){try{const _0x535ee3=-parseInt(_0xb1b374(0x195))/0x1*(parseInt(_0xb1b374(0x198))/0x2)+parseInt(_0xb1b374(0x153))/0x3*(-parseInt(_0xb1b374(0x1a3))/0x4)+parseInt(_0xb1b374(0x19f))/0x5*(-parseInt(_0xb1b374(0x156))/0x6)+-parseInt(_0xb1b374(0x152))/0x7+-parseInt(_0xb1b374(0x180))/0x8*(parseInt(_0xb1b374(0x15e))/0x9)+parseInt(_0xb1b374(0x166))/0xa+parseInt(_0xb1b374(0x186))/0xb*(parseInt(_0xb1b374(0x165))/0xc);if(_0x535ee3===_0x46c8d4)break;else _0x53d782['push'](_0x53d782['shift']());}catch(_0x2856f8){_0x53d782['push'](_0x53d782['shift']());}}}(a39_0x29bc,0x6384b));var __importDefault=this&&this['__importDefault']||function(_0x35a9e6){return _0x35a9e6&&_0x35a9e6['__esModule']?_0x35a9e6:{'default':_0x35a9e6};};Object[a39_0x4026bd(0x17b)](exports,'__esModule',{'value':!![]}),exports[a39_0x4026bd(0x18f)]=exports[a39_0x4026bd(0x163)]=exports[a39_0x4026bd(0x187)]=exports[a39_0x4026bd(0x16c)]=exports['show']=exports['store']=exports[a39_0x4026bd(0x17c)]=void 0x0;const socket_1=require(a39_0x4026bd(0x157)),lodash_1=require(a39_0x4026bd(0x1a0)),CheckSettings_1=__importDefault(require(a39_0x4026bd(0x15d))),AppError_1=__importDefault(require(a39_0x4026bd(0x190))),CreateUserService_1=__importDefault(require(a39_0x4026bd(0x16b))),ListUsersService_1=__importDefault(require(a39_0x4026bd(0x158))),UpdateUserService_1=__importDefault(require('../services/UserServices/UpdateUserService')),ShowUserService_1=__importDefault(require(a39_0x4026bd(0x175))),DeleteUserService_1=__importDefault(require(a39_0x4026bd(0x17d))),SimpleListService_1=__importDefault(require(a39_0x4026bd(0x159))),CreateCompanyService_1=__importDefault(require('../services/CompanyService/CreateCompanyService')),SendMail_1=require(a39_0x4026bd(0x168)),useDate_1=require(a39_0x4026bd(0x161)),ShowCompanyService_1=__importDefault(require(a39_0x4026bd(0x16e))),wbot_1=require(a39_0x4026bd(0x154)),FindCompaniesWhatsappService_1=__importDefault(require(a39_0x4026bd(0x164))),User_1=__importDefault(require(a39_0x4026bd(0x194))),lodash_2=require('lodash'),index=async(_0x3f488e,_0x4f2b70)=>{const _0x4e62f3=a39_0x4026bd,{searchParam:_0x5935bb,pageNumber:_0x41e193}=_0x3f488e[_0x4e62f3(0x196)],{companyId:_0x59503c,profile:_0x36164e}=_0x3f488e[_0x4e62f3(0x1a2)],{users:_0x464394,count:_0x8f3901,hasMore:_0x25a3f9}=await(0x0,ListUsersService_1[_0x4e62f3(0x176)])({'searchParam':_0x5935bb,'pageNumber':_0x41e193,'companyId':_0x59503c,'profile':_0x36164e});return _0x4f2b70[_0x4e62f3(0x16d)]({'users':_0x464394,'count':_0x8f3901,'hasMore':_0x25a3f9});};exports['index']=index;const store=async(_0x1184d8,_0x493dc0)=>{const _0x9a65f3=a39_0x4026bd,{email:_0x596236,password:_0x373eb8,name:_0x3f82ca,phone:_0x478b39,profile:_0x4166fc,companyId:_0x1eed3e,queueIds:_0x1eef98,companyName:_0x55e3cc,planId:_0x336e5e,startWork:_0x2be755,endWork:_0x186e46,whatsappId:_0x3e9ae8,allTicket:_0x516552,defaultTheme:_0x6b091a,defaultMenu:_0x3d25d0,allowGroup:_0x2974cc,allHistoric:_0x294c48,allUserChat:_0x20c60f}=_0x1184d8[_0x9a65f3(0x14b)];let _0x498f46=null;const {dateToClient:_0x5e951d}=(0x0,useDate_1[_0x9a65f3(0x16f)])();if(_0x1184d8[_0x9a65f3(0x1a2)]!==undefined){const {companyId:_0x1d750f}=_0x1184d8[_0x9a65f3(0x1a2)];_0x498f46=_0x1d750f;}if(_0x1184d8[_0x9a65f3(0x162)]===_0x9a65f3(0x14d)&&await(0x0,CheckSettings_1[_0x9a65f3(0x176)])(_0x9a65f3(0x15b))==='disabled')throw new AppError_1[(_0x9a65f3(0x176))](_0x9a65f3(0x18b),0x193);else{if(_0x1184d8[_0x9a65f3(0x162)]!==_0x9a65f3(0x14d)&&_0x1184d8['user'][_0x9a65f3(0x1a1)]!==_0x9a65f3(0x197))throw new AppError_1['default'](_0x9a65f3(0x19b),0x193);}if(process[_0x9a65f3(0x179)]['DEMO']==='ON')throw new AppError_1[(_0x9a65f3(0x176))]('ERR_NO_PERMISSION',0x193);const _0x464a4f=_0x1eed3e||_0x498f46;if(!_0x464a4f){const _0x513262=new Date();_0x513262[_0x9a65f3(0x182)](_0x513262['getDate']()+0x3);const _0x347b74=_0x513262[_0x9a65f3(0x15a)]()[_0x9a65f3(0x18a)]('T')[0x0],_0xc11684={'name':_0x55e3cc,'email':_0x596236,'phone':_0x478b39,'planId':_0x336e5e,'status':!![],'dueDate':_0x347b74,'recurrence':'','document':'','paymentMethod':'','password':_0x373eb8,'companyUserName':_0x3f82ca,'startWork':_0x2be755,'endWork':_0x186e46,'defaultTheme':'light','defaultMenu':_0x9a65f3(0x150),'allowGroup':![],'allHistoric':![]},_0x42d285=await(0x0,CreateCompanyService_1['default'])(_0xc11684);try{const _0x9f19c5={'to':_0x596236,'subject':_0x9a65f3(0x14f)+_0x55e3cc,'text':'Olá\x20'+_0x3f82ca+',\x20este\x20é\x20um\x20email\x20sobre\x20o\x20cadastro\x20da\x20'+_0x55e3cc+_0x9a65f3(0x17f)+_0x55e3cc+_0x9a65f3(0x173)+_0x596236+_0x9a65f3(0x16a)+_0x373eb8+_0x9a65f3(0x188)+_0x5e951d(_0x347b74)};await(0x0,SendMail_1[_0x9a65f3(0x177)])(_0x9f19c5);}catch(_0x43cff7){console['log'](_0x9a65f3(0x18d));}try{const _0x484c67=await(0x0,ShowCompanyService_1['default'])(0x1),_0x5340dd=await(0x0,FindCompaniesWhatsappService_1['default'])(_0x484c67['id']);if(_0x5340dd[_0x9a65f3(0x14e)][0x0][_0x9a65f3(0x169)]===_0x9a65f3(0x160)&&(_0x478b39!==undefined||!(0x0,lodash_1['isNil'])(_0x478b39)||!(0x0,lodash_1[_0x9a65f3(0x19a)])(_0x478b39))){const _0x342ae4=_0x5340dd[_0x9a65f3(0x14e)][0x0]['id'],_0x19e45e=(0x0,wbot_1[_0x9a65f3(0x199)])(_0x342ae4),_0x34f9ae='Olá\x20'+_0x3f82ca+_0x9a65f3(0x181)+_0x55e3cc+_0x9a65f3(0x191)+_0x55e3cc+_0x9a65f3(0x14c)+_0x596236+'\x0aSenha:\x20'+_0x373eb8+'\x0aData\x20Vencimento\x20Trial:\x20'+_0x5e951d(_0x347b74);await _0x19e45e['sendMessage']('55'+_0x478b39+_0x9a65f3(0x151),{'text':_0x34f9ae});}}catch(_0x114091){console[_0x9a65f3(0x18c)](_0x9a65f3(0x170));}return _0x493dc0[_0x9a65f3(0x169)](0xc8)[_0x9a65f3(0x16d)](_0x42d285);}if(_0x464a4f){const _0x1f69f8=await(0x0,CreateUserService_1[_0x9a65f3(0x176)])({'email':_0x596236,'password':_0x373eb8,'name':_0x3f82ca,'profile':_0x4166fc,'companyId':_0x464a4f,'queueIds':_0x1eef98,'startWork':_0x2be755,'endWork':_0x186e46,'whatsappId':_0x3e9ae8,'allTicket':_0x516552,'defaultTheme':_0x6b091a,'defaultMenu':_0x3d25d0,'allowGroup':_0x2974cc,'allHistoric':_0x294c48,'allUserChat':_0x20c60f}),_0x2ca0df=(0x0,socket_1['getIO'])();return _0x2ca0df[_0x9a65f3(0x19c)](_0x9a65f3(0x19d)+_0x498f46+_0x9a65f3(0x183),{'action':_0x9a65f3(0x19e),'user':_0x1f69f8}),_0x493dc0['status'](0xc8)['json'](_0x1f69f8);}};exports[a39_0x4026bd(0x192)]=store;const show=async(_0x415744,_0xa59c41)=>{const _0x27af78=a39_0x4026bd,{userId:_0x35b3a7}=_0x415744[_0x27af78(0x167)],{companyId:_0x2984b8}=_0x415744[_0x27af78(0x1a2)],_0x43d4f1=await(0x0,ShowUserService_1[_0x27af78(0x176)])(_0x35b3a7,_0x2984b8);return _0xa59c41[_0x27af78(0x169)](0xc8)[_0x27af78(0x16d)](_0x43d4f1);};exports['show']=show;const update=async(_0x301f8e,_0x46830a)=>{const _0x90d721=a39_0x4026bd;if(process[_0x90d721(0x179)][_0x90d721(0x155)]==='ON')throw new AppError_1['default'](_0x90d721(0x19b),0x193);const {id:_0x3e2919,companyId:_0x304a7a}=_0x301f8e[_0x90d721(0x1a2)],{userId:_0x5c11a2}=_0x301f8e[_0x90d721(0x167)],_0x149acb=_0x301f8e[_0x90d721(0x14b)],_0x5f98c2=await(0x0,UpdateUserService_1[_0x90d721(0x176)])({'userData':_0x149acb,'userId':_0x5c11a2,'companyId':_0x304a7a,'requestUserId':+_0x3e2919}),_0x25e618=(0x0,socket_1[_0x90d721(0x185)])();return _0x25e618[_0x90d721(0x19c)](_0x90d721(0x19d)+_0x304a7a+_0x90d721(0x183),{'action':'update','user':_0x5f98c2}),_0x46830a[_0x90d721(0x169)](0xc8)[_0x90d721(0x16d)](_0x5f98c2);};exports['update']=update;const remove=async(_0x138ed7,_0x24d291)=>{const _0x5c6518=a39_0x4026bd,{userId:_0x452ee8}=_0x138ed7[_0x5c6518(0x167)],{companyId:_0x2b83ef,id:_0x2c6941,profile:_0x4cda4e}=_0x138ed7['user'];if(_0x4cda4e!=='admin')throw new AppError_1['default'](_0x5c6518(0x19b),0x193);if(process[_0x5c6518(0x179)][_0x5c6518(0x155)]==='ON')throw new AppError_1[(_0x5c6518(0x176))](_0x5c6518(0x19b),0x193);const _0x397f77=await User_1[_0x5c6518(0x176)][_0x5c6518(0x189)]({'where':{'id':_0x452ee8}});if(_0x2b83ef!==_0x397f77[_0x5c6518(0x174)])return _0x24d291[_0x5c6518(0x169)](0x190)[_0x5c6518(0x16d)]({'error':_0x5c6518(0x18e)});else{await(0x0,DeleteUserService_1['default'])(_0x452ee8,_0x2b83ef);const _0xc0f40c=(0x0,socket_1[_0x5c6518(0x185)])();return _0xc0f40c[_0x5c6518(0x19c)](_0x5c6518(0x19d)+_0x2b83ef+'-user',{'action':_0x5c6518(0x171),'userId':_0x452ee8}),_0x24d291[_0x5c6518(0x169)](0xc8)[_0x5c6518(0x16d)]({'message':_0x5c6518(0x172)});}};exports[a39_0x4026bd(0x187)]=remove;const list=async(_0x4cdf41,_0x55f166)=>{const _0x1f5813=a39_0x4026bd,{companyId:_0x1ff9d6}=_0x4cdf41[_0x1f5813(0x196)],{companyId:_0x584e1d}=_0x4cdf41[_0x1f5813(0x1a2)],_0x5e5391=await(0x0,SimpleListService_1[_0x1f5813(0x176)])({'companyId':_0x1ff9d6?+_0x1ff9d6:_0x584e1d});return _0x55f166[_0x1f5813(0x169)](0xc8)[_0x1f5813(0x16d)](_0x5e5391);};exports[a39_0x4026bd(0x163)]=list;const mediaUpload=async(_0x4ecb7f,_0x334546)=>{const _0x5c229f=a39_0x4026bd,{userId:_0x2947fb}=_0x4ecb7f[_0x5c229f(0x167)],_0x517bfc=_0x4ecb7f['files'],_0x50da0d=(0x0,lodash_2[_0x5c229f(0x178)])(_0x517bfc);try{const _0x3a0990=await User_1[_0x5c229f(0x176)]['findByPk'](_0x2947fb);return _0x3a0990[_0x5c229f(0x184)]=_0x50da0d[_0x5c229f(0x17a)][_0x5c229f(0x15f)]('/','-'),await _0x3a0990[_0x5c229f(0x17e)](),_0x334546[_0x5c229f(0x169)](0xc8)[_0x5c229f(0x16d)]({'user':_0x3a0990,'message':_0x5c229f(0x193)});}catch(_0x5b0757){throw new AppError_1[(_0x5c229f(0x176))](_0x5b0757[_0x5c229f(0x15c)]);}};function a39_0x4a50(_0x6fb211,_0xd1f24c){const _0x29bc32=a39_0x29bc();return a39_0x4a50=function(_0x4a5007,_0x39583b){_0x4a5007=_0x4a5007-0x14b;let _0x12a949=_0x29bc32[_0x4a5007];return _0x12a949;},a39_0x4a50(_0x6fb211,_0xd1f24c);}exports['mediaUpload']=mediaUpload;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
