'use strict';const a35_0x45fa4a=a35_0x1c32;(function(_0xc2c71a,_0xbb5e94){const _0x3fdf9e=a35_0x1c32,_0x2cc37e=_0xc2c71a();while(!![]){try{const _0xc0771=-parseInt(_0x3fdf9e(0x20f))/0x1+-parseInt(_0x3fdf9e(0x1e0))/0x2*(parseInt(_0x3fdf9e(0x205))/0x3)+parseInt(_0x3fdf9e(0x1fb))/0x4+-parseInt(_0x3fdf9e(0x1e1))/0x5*(parseInt(_0x3fdf9e(0x221))/0x6)+parseInt(_0x3fdf9e(0x220))/0x7*(parseInt(_0x3fdf9e(0x219))/0x8)+parseInt(_0x3fdf9e(0x212))/0x9*(-parseInt(_0x3fdf9e(0x201))/0xa)+parseInt(_0x3fdf9e(0x1f9))/0xb;if(_0xc0771===_0xbb5e94)break;else _0x2cc37e['push'](_0x2cc37e['shift']());}catch(_0x471f4d){_0x2cc37e['push'](_0x2cc37e['shift']());}}}(a35_0x1fed,0x8500c));var __importDefault=this&&this[a35_0x45fa4a(0x216)]||function(_0x4cb92f){const _0x2a3be2=a35_0x45fa4a;return _0x4cb92f&&_0x4cb92f[_0x2a3be2(0x1f2)]?_0x4cb92f:{'default':_0x4cb92f};};function a35_0x1c32(_0x4cb7a1,_0x3aa4fd){const _0x1fedfd=a35_0x1fed();return a35_0x1c32=function(_0x1c327c,_0x493230){_0x1c327c=_0x1c327c-0x1d2;let _0x16aa9a=_0x1fedfd[_0x1c327c];return _0x16aa9a;},a35_0x1c32(_0x4cb7a1,_0x3aa4fd);}Object['defineProperty'](exports,a35_0x45fa4a(0x1f2),{'value':!![]}),exports[a35_0x45fa4a(0x1f0)]=exports['remove']=exports[a35_0x45fa4a(0x218)]=exports[a35_0x45fa4a(0x1f6)]=exports['store']=exports[a35_0x45fa4a(0x1db)]=void 0x0;const socket_1=require('../libs/socket'),lodash_1=require(a35_0x45fa4a(0x207)),CheckSettings_1=__importDefault(require(a35_0x45fa4a(0x217))),AppError_1=__importDefault(require(a35_0x45fa4a(0x1d8))),CreateUserService_1=__importDefault(require(a35_0x45fa4a(0x21e))),ListUsersService_1=__importDefault(require(a35_0x45fa4a(0x1fc))),UpdateUserService_1=__importDefault(require(a35_0x45fa4a(0x20c))),ShowUserService_1=__importDefault(require(a35_0x45fa4a(0x1fe))),DeleteUserService_1=__importDefault(require(a35_0x45fa4a(0x1d7))),SimpleListService_1=__importDefault(require(a35_0x45fa4a(0x1d2))),CreateCompanyService_1=__importDefault(require(a35_0x45fa4a(0x210))),SendMail_1=require('../helpers/SendMail'),useDate_1=require(a35_0x45fa4a(0x20e)),ShowCompanyService_1=__importDefault(require(a35_0x45fa4a(0x1e5))),wbot_1=require(a35_0x45fa4a(0x1d5)),FindCompaniesWhatsappService_1=__importDefault(require(a35_0x45fa4a(0x21c))),User_1=__importDefault(require(a35_0x45fa4a(0x21b))),index=async(_0x20fd45,_0x2419d6)=>{const _0x2fb981=a35_0x45fa4a,{searchParam:_0x43c3b0,pageNumber:_0x2272eb}=_0x20fd45[_0x2fb981(0x1f5)],{companyId:_0x243122,profile:_0x597a44}=_0x20fd45[_0x2fb981(0x1e8)],{users:_0x2f3412,count:_0x4c9372,hasMore:_0x1c73e8}=await(0x0,ListUsersService_1[_0x2fb981(0x1ec)])({'searchParam':_0x43c3b0,'pageNumber':_0x2272eb,'companyId':_0x243122,'profile':_0x597a44});return _0x2419d6[_0x2fb981(0x21f)]({'users':_0x2f3412,'count':_0x4c9372,'hasMore':_0x1c73e8});};exports['index']=index;const store=async(_0x38ac27,_0x223393)=>{const _0x253b96=a35_0x45fa4a,{email:_0x17af68,password:_0x274bb4,name:_0x3823b5,phone:_0x3fd95b,profile:_0x1bba1d,companyId:_0xa0b9e4,queueIds:_0x168315,companyName:_0x266b41,planId:_0x542e5c,startWork:_0x52d59e,endWork:_0x50f05e,whatsappId:_0x319ded,allTicket:_0xf629e6,defaultTheme:_0x3a0421,defaultMenu:_0x25f9f1,allowGroup:_0x5c8642}=_0x38ac27[_0x253b96(0x1de)];let _0x32011b=null;const {dateToClient:_0x5daa6e}=(0x0,useDate_1[_0x253b96(0x206)])();if(_0x38ac27['user']!==undefined){const {companyId:_0x24551b}=_0x38ac27[_0x253b96(0x1e8)];_0x32011b=_0x24551b;}if(_0x38ac27['url']===_0x253b96(0x203)&&await(0x0,CheckSettings_1['default'])(_0x253b96(0x1f7))==='disabled')throw new AppError_1[(_0x253b96(0x1ec))](_0x253b96(0x213),0x193);else{if(_0x38ac27[_0x253b96(0x214)]!=='/signup'&&_0x38ac27[_0x253b96(0x1e8)][_0x253b96(0x20d)]!==_0x253b96(0x1e3))throw new AppError_1[(_0x253b96(0x1ec))]('ERR_NO_PERMISSION',0x193);}if(process[_0x253b96(0x1e7)][_0x253b96(0x1f3)]==='ON')throw new AppError_1['default'](_0x253b96(0x1d3),0x193);const _0x3deca6=_0xa0b9e4||_0x32011b;if(!_0x3deca6){const _0x5a92ac=new Date();_0x5a92ac['setDate'](_0x5a92ac[_0x253b96(0x20a)]()+0x3);const _0x251ccd=_0x5a92ac[_0x253b96(0x1fd)]()[_0x253b96(0x222)]('T')[0x0],_0x1b53b2={'name':_0x266b41,'email':_0x17af68,'phone':_0x3fd95b,'planId':_0x542e5c,'status':!![],'dueDate':_0x251ccd,'recurrence':'','document':'','paymentMethod':'','password':_0x274bb4,'companyUserName':_0x3823b5,'startWork':_0x52d59e,'endWork':_0x50f05e,'defaultTheme':_0x253b96(0x1ef),'defaultMenu':'closed','allowGroup':![]},_0x321c4b=await(0x0,CreateCompanyService_1['default'])(_0x1b53b2);try{const _0x3fce0f={'to':_0x17af68,'subject':'Login\x20e\x20senha\x20da\x20Empresa\x20'+_0x266b41,'text':_0x253b96(0x1ff)+_0x3823b5+_0x253b96(0x1ee)+_0x266b41+_0x253b96(0x1ea)+_0x266b41+_0x253b96(0x215)+_0x17af68+_0x253b96(0x1da)+_0x274bb4+_0x253b96(0x1eb)+_0x5daa6e(_0x251ccd)};await(0x0,SendMail_1[_0x253b96(0x1f8)])(_0x3fce0f);}catch(_0x5840a0){console['log'](_0x253b96(0x211));}try{const _0x105a1d=await(0x0,ShowCompanyService_1[_0x253b96(0x1ec)])(0x1),_0x3cb59a=await(0x0,FindCompaniesWhatsappService_1[_0x253b96(0x1ec)])(_0x105a1d['id']);if(_0x3cb59a[_0x253b96(0x1f4)][0x0]['status']===_0x253b96(0x1dc)&&(_0x3fd95b!==undefined||!(0x0,lodash_1['isNil'])(_0x3fd95b)||!(0x0,lodash_1[_0x253b96(0x1d9)])(_0x3fd95b))){const _0x512e2f=_0x3cb59a['whatsapps'][0x0]['id'],_0x52800d=(0x0,wbot_1[_0x253b96(0x1e4)])(_0x512e2f),_0x10480c=_0x253b96(0x1ff)+_0x3823b5+',\x20este\x20é\x20uma\x20mensagem\x20sobre\x20o\x20cadastro\x20da\x20'+_0x266b41+_0x253b96(0x1f1)+_0x266b41+'\x0aEmail:\x20'+_0x17af68+_0x253b96(0x202)+_0x274bb4+'\x0aData\x20Vencimento\x20Trial:\x20'+_0x5daa6e(_0x251ccd);await _0x52800d[_0x253b96(0x21d)]('55'+_0x3fd95b+_0x253b96(0x1fa),{'text':_0x10480c});}}catch(_0x8b2cd9){console[_0x253b96(0x21a)](_0x253b96(0x1dd));}return _0x223393[_0x253b96(0x1d4)](0xc8)[_0x253b96(0x21f)](_0x321c4b);}if(_0x3deca6){const _0x58716f=await(0x0,CreateUserService_1[_0x253b96(0x1ec)])({'email':_0x17af68,'password':_0x274bb4,'name':_0x3823b5,'profile':_0x1bba1d,'companyId':_0x3deca6,'queueIds':_0x168315,'startWork':_0x52d59e,'endWork':_0x50f05e,'whatsappId':_0x319ded,'allTicket':_0xf629e6,'defaultTheme':_0x3a0421,'defaultMenu':_0x25f9f1,'allowGroup':_0x5c8642}),_0x3ea181=(0x0,socket_1[_0x253b96(0x209)])();return _0x3ea181[_0x253b96(0x204)](_0x253b96(0x200)+_0x32011b+_0x253b96(0x208),{'action':_0x253b96(0x1e6),'user':_0x58716f}),_0x223393[_0x253b96(0x1d4)](0xc8)[_0x253b96(0x21f)](_0x58716f);}};function a35_0x1fed(){const _0x991a4=['sendMessage','../services/UserServices/CreateUserService','json','280154gjGscZ','84yGCYXS','split','../services/UserServices/SimpleListService','ERR_NO_PERMISSION','status','../libs/wbot','Você\x20não\x20possui\x20permissão\x20para\x20acessar\x20este\x20recurso!','../services/UserServices/DeleteUserService','../errors/AppError','isEmpty','<br>Senha:\x20','index','CONNECTED','Não\x20consegui\x20enviar\x20a\x20mensagem','body','User\x20deleted','288448oCZgvy','326930UZCooH','params','admin','getWbot','../services/CompanyService/ShowCompanyService','create','env','user','remove','!<br><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Segue\x20os\x20dados\x20da\x20sua\x20empresa:<br><br>Nome:\x20','<br>Data\x20Vencimento\x20Trial:\x20','default','store',',\x20este\x20é\x20um\x20email\x20sobre\x20o\x20cadastro\x20da\x20','light','list','!\x0a\x0aSegue\x20os\x20dados\x20da\x20sua\x20empresa:\x0a\x0aNome:\x20','__esModule','DEMO','whatsapps','query','show','userCreation','SendMail','12836131vHFAHB','@s.whatsapp.net','1385812DdKvyx','../services/UserServices/ListUsersService','toISOString','../services/UserServices/ShowUserService','Olá\x20','company-','30JEbPmN','\x0aSenha:\x20','/signup','emit','6QEMZBV','useDate','lodash','-user','getIO','getDate','delete','../services/UserServices/UpdateUserService','profile','../utils/useDate','344887uvntQk','../services/CompanyService/CreateCompanyService','Não\x20consegui\x20enviar\x20o\x20email','540819bmNhxj','ERR_USER_CREATION_DISABLED','url','<br>Email:\x20','__importDefault','../helpers/CheckSettings','update','152IBQkLn','log','../models/User','../services/CompanyService/FindCompaniesWhatsappService'];a35_0x1fed=function(){return _0x991a4;};return a35_0x1fed();}exports[a35_0x45fa4a(0x1ed)]=store;const show=async(_0x261a5f,_0x5e6ef0)=>{const _0x4b922c=a35_0x45fa4a,{userId:_0x192dd7}=_0x261a5f[_0x4b922c(0x1e2)],_0x474d58=await(0x0,ShowUserService_1['default'])(_0x192dd7);return _0x5e6ef0['status'](0xc8)[_0x4b922c(0x21f)](_0x474d58);};exports[a35_0x45fa4a(0x1f6)]=show;const update=async(_0x36b9ef,_0x48f737)=>{const _0x54a287=a35_0x45fa4a;if(_0x36b9ef[_0x54a287(0x1e8)][_0x54a287(0x20d)]!==_0x54a287(0x1e3))throw new AppError_1['default']('ERR_NO_PERMISSION',0x193);if(process['env'][_0x54a287(0x1f3)]==='ON')throw new AppError_1[(_0x54a287(0x1ec))]('ERR_NO_PERMISSION',0x193);const {id:_0x531290,companyId:_0x2d702}=_0x36b9ef[_0x54a287(0x1e8)],{userId:_0x1beaf6}=_0x36b9ef[_0x54a287(0x1e2)],_0x5c51b2=_0x36b9ef[_0x54a287(0x1de)],_0x5ddc0f=await(0x0,UpdateUserService_1[_0x54a287(0x1ec)])({'userData':_0x5c51b2,'userId':_0x1beaf6,'companyId':_0x2d702,'requestUserId':+_0x531290}),_0x53be4f=(0x0,socket_1['getIO'])();return _0x53be4f[_0x54a287(0x204)](_0x54a287(0x200)+_0x2d702+'-user',{'action':_0x54a287(0x218),'user':_0x5ddc0f}),_0x48f737[_0x54a287(0x1d4)](0xc8)[_0x54a287(0x21f)](_0x5ddc0f);};exports[a35_0x45fa4a(0x218)]=update;const remove=async(_0x2034ea,_0x56b91f)=>{const _0x51b3f5=a35_0x45fa4a,{userId:_0x5b15ae}=_0x2034ea[_0x51b3f5(0x1e2)],{companyId:_0x2b8d9b,id:_0x23c2a,profile:_0x4396dc}=_0x2034ea[_0x51b3f5(0x1e8)];if(_0x4396dc!==_0x51b3f5(0x1e3))throw new AppError_1['default'](_0x51b3f5(0x1d3),0x193);if(process['env'][_0x51b3f5(0x1f3)]==='ON')throw new AppError_1[(_0x51b3f5(0x1ec))](_0x51b3f5(0x1d3),0x193);const _0x18896b=await User_1[_0x51b3f5(0x1ec)]['findOne']({'where':{'id':_0x5b15ae}});if(_0x2b8d9b!==_0x18896b['companyId'])return _0x56b91f['status'](0x190)['json']({'error':_0x51b3f5(0x1d6)});else{await(0x0,DeleteUserService_1[_0x51b3f5(0x1ec)])(_0x5b15ae,_0x2b8d9b);const _0x5f060a=(0x0,socket_1[_0x51b3f5(0x209)])();return _0x5f060a[_0x51b3f5(0x204)]('company-'+_0x2b8d9b+_0x51b3f5(0x208),{'action':_0x51b3f5(0x20b),'userId':_0x5b15ae}),_0x56b91f[_0x51b3f5(0x1d4)](0xc8)[_0x51b3f5(0x21f)]({'message':_0x51b3f5(0x1df)});}};exports[a35_0x45fa4a(0x1e9)]=remove;const list=async(_0x310640,_0x4e27be)=>{const _0x352e55=a35_0x45fa4a,{companyId:_0x359d16}=_0x310640[_0x352e55(0x1f5)],{companyId:_0x371b0d}=_0x310640[_0x352e55(0x1e8)],_0x2759c1=await(0x0,SimpleListService_1['default'])({'companyId':_0x359d16?+_0x359d16:_0x371b0d});return _0x4e27be[_0x352e55(0x1d4)](0xc8)['json'](_0x2759c1);};exports[a35_0x45fa4a(0x1f0)]=list;