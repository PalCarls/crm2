'use strict';const a611_0x592b80=a611_0x5416;function a611_0x5416(_0x25c1af,_0x2274f6){const _0x5f2e6d=a611_0x5f2e();return a611_0x5416=function(_0x54163a,_0x22f6c7){_0x54163a=_0x54163a-0xa6;let _0x45df34=_0x5f2e6d[_0x54163a];return _0x45df34;},a611_0x5416(_0x25c1af,_0x2274f6);}(function(_0x58e8d1,_0xf9364f){const _0x10c944=a611_0x5416,_0x4d5a6a=_0x58e8d1();while(!![]){try{const _0x3ea539=-parseInt(_0x10c944(0xa6))/0x1*(parseInt(_0x10c944(0xa9))/0x2)+parseInt(_0x10c944(0xb3))/0x3*(-parseInt(_0x10c944(0xad))/0x4)+-parseInt(_0x10c944(0xab))/0x5*(-parseInt(_0x10c944(0xba))/0x6)+parseInt(_0x10c944(0xb9))/0x7*(parseInt(_0x10c944(0xc8))/0x8)+parseInt(_0x10c944(0xb8))/0x9*(parseInt(_0x10c944(0xae))/0xa)+-parseInt(_0x10c944(0xb0))/0xb+parseInt(_0x10c944(0xc2))/0xc*(parseInt(_0x10c944(0xcc))/0xd);if(_0x3ea539===_0xf9364f)break;else _0x4d5a6a['push'](_0x4d5a6a['shift']());}catch(_0x5a720d){_0x4d5a6a['push'](_0x4d5a6a['shift']());}}}(a611_0x5f2e,0xb66cf));function a611_0x5f2e(){const _0xbe81ff=['../../models/Plan','test','81eVoykC','28uoWzPM','18gndutn','__importStar','validate','Check-email','__importDefault','string','__createBinding','create','12xBokgT','object','__esModule','queues','__setModuleDefault','min','372048QKhEyX','users','SerializeUser','company','11611119TKnImv','plan','defineProperty','email','An\x20user\x20with\x20this\x20email\x20already\x20exists.','findOne','call','get','../../helpers/SerializeUser','message','57685ugWARN','reload','configurable','10iCtkJO','Número\x20máximo\x20de\x20usuários\x20já\x20alcançado:\x20','1796295YudgjZ','default','9404sRSbAO','370010RUvaBK','../../errors/AppError','429341GCPTos','required','admin','1806QrWxLT','count','yup'];a611_0x5f2e=function(){return _0xbe81ff;};return a611_0x5f2e();}var __createBinding=this&&this[a611_0x592b80(0xc0)]||(Object['create']?function(_0x3fa1f4,_0x416b6d,_0x5e6f65,_0x22e8d7){const _0x3118d3=a611_0x592b80;if(_0x22e8d7===undefined)_0x22e8d7=_0x5e6f65;var _0x200584=Object['getOwnPropertyDescriptor'](_0x416b6d,_0x5e6f65);(!_0x200584||(_0x3118d3(0xd3)in _0x200584?!_0x416b6d[_0x3118d3(0xc4)]:_0x200584['writable']||_0x200584[_0x3118d3(0xa8)]))&&(_0x200584={'enumerable':!![],'get':function(){return _0x416b6d[_0x5e6f65];}}),Object[_0x3118d3(0xce)](_0x3fa1f4,_0x22e8d7,_0x200584);}:function(_0x55be9b,_0x460f71,_0x199841,_0x469a03){if(_0x469a03===undefined)_0x469a03=_0x199841;_0x55be9b[_0x469a03]=_0x460f71[_0x199841];}),__setModuleDefault=this&&this[a611_0x592b80(0xc6)]||(Object[a611_0x592b80(0xc1)]?function(_0x4381ea,_0x193767){const _0xd17aca=a611_0x592b80;Object[_0xd17aca(0xce)](_0x4381ea,'default',{'enumerable':!![],'value':_0x193767});}:function(_0x493c01,_0x4fe66c){const _0x1ab740=a611_0x592b80;_0x493c01[_0x1ab740(0xac)]=_0x4fe66c;}),__importStar=this&&this[a611_0x592b80(0xbb)]||function(_0x262521){const _0x4e0950=a611_0x592b80;if(_0x262521&&_0x262521['__esModule'])return _0x262521;var _0x16a583={};if(_0x262521!=null){for(var _0x534057 in _0x262521)if(_0x534057!==_0x4e0950(0xac)&&Object['prototype']['hasOwnProperty'][_0x4e0950(0xd2)](_0x262521,_0x534057))__createBinding(_0x16a583,_0x262521,_0x534057);}return __setModuleDefault(_0x16a583,_0x262521),_0x16a583;},__importDefault=this&&this[a611_0x592b80(0xbe)]||function(_0xddaa29){const _0x33ed26=a611_0x592b80;return _0xddaa29&&_0xddaa29[_0x33ed26(0xc4)]?_0xddaa29:{'default':_0xddaa29};};Object['defineProperty'](exports,a611_0x592b80(0xc4),{'value':!![]});const Yup=__importStar(require(a611_0x592b80(0xb5))),AppError_1=__importDefault(require(a611_0x592b80(0xaf))),SerializeUser_1=require(a611_0x592b80(0xd4)),User_1=__importDefault(require('../../models/User')),Plan_1=__importDefault(require(a611_0x592b80(0xb6))),Company_1=__importDefault(require('../../models/Company')),CreateUserService=async({email:_0x331a30,password:_0x2c263c,name:_0x2b57f2,queueIds:queueIds=[],companyId:_0x391b35,profile:profile=a611_0x592b80(0xb2),startWork:_0x4fb049,endWork:_0x1f7e8f,whatsappId:_0x5d3acf,allTicket:_0x11cbdb,defaultTheme:_0x41beea,defaultMenu:_0xafe621,allowGroup:_0x26b9ca,allHistoric:_0x2c20ef,allUserChat:_0x3a50fb,userClosePendingTicket:_0x432270,showDashboard:_0x1bef66,defaultTicketsManagerWidth:defaultTicketsManagerWidth=0x226})=>{const _0x3f5366=a611_0x592b80;if(_0x391b35!==undefined){const _0x5f1c25=await Company_1[_0x3f5366(0xac)][_0x3f5366(0xd1)]({'where':{'id':_0x391b35},'include':[{'model':Plan_1[_0x3f5366(0xac)],'as':_0x3f5366(0xcd)}]});if(_0x5f1c25!==null){const _0x3b2fe3=await User_1[_0x3f5366(0xac)][_0x3f5366(0xb4)]({'where':{'companyId':_0x391b35}});if(_0x3b2fe3>=_0x5f1c25[_0x3f5366(0xcd)][_0x3f5366(0xc9)])throw new AppError_1['default'](_0x3f5366(0xaa)+_0x3b2fe3);}}const _0x5e4d57=Yup[_0x3f5366(0xc3)]()['shape']({'name':Yup[_0x3f5366(0xbf)]()['required']()[_0x3f5366(0xc7)](0x2),'allHistoric':Yup['string'](),'email':Yup[_0x3f5366(0xbf)]()[_0x3f5366(0xcf)]()[_0x3f5366(0xb1)]()[_0x3f5366(0xb7)](_0x3f5366(0xbd),_0x3f5366(0xd0),async _0x561ff6=>{const _0xf1d194=_0x3f5366;if(!_0x561ff6)return![];const _0x10673e=await User_1[_0xf1d194(0xac)][_0xf1d194(0xd1)]({'where':{'email':_0x561ff6}});return!_0x10673e;}),'password':Yup['string']()[_0x3f5366(0xb1)]()[_0x3f5366(0xc7)](0x5)});try{await _0x5e4d57[_0x3f5366(0xbc)]({'email':_0x331a30,'password':_0x2c263c,'name':_0x2b57f2});}catch(_0x292049){throw new AppError_1[(_0x3f5366(0xac))](_0x292049[_0x3f5366(0xd5)]);}const _0x5cfe4b=await User_1[_0x3f5366(0xac)][_0x3f5366(0xc1)]({'email':_0x331a30,'password':_0x2c263c,'name':_0x2b57f2,'companyId':_0x391b35,'profile':profile,'startWork':_0x4fb049,'endWork':_0x1f7e8f,'whatsappId':_0x5d3acf||null,'allTicket':_0x11cbdb,'defaultTheme':_0x41beea,'defaultMenu':_0xafe621,'allowGroup':_0x26b9ca,'allHistoric':_0x2c20ef,'allUserChat':_0x3a50fb,'userClosePendingTicket':_0x432270,'showDashboard':_0x1bef66,'defaultTicketsManagerWidth':defaultTicketsManagerWidth},{'include':[_0x3f5366(0xc5),_0x3f5366(0xcb)]});await _0x5cfe4b['$set'](_0x3f5366(0xc5),queueIds),await _0x5cfe4b[_0x3f5366(0xa7)]();const _0x43b7c6=(0x0,SerializeUser_1[_0x3f5366(0xca)])(_0x5cfe4b);return _0x43b7c6;};exports['default']=CreateUserService;