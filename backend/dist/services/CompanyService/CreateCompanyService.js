'use strict';const a438_0x5cedf9=a438_0x3729;function a438_0x2e73(){const _0x422da5=['595620ANiEMZ','min','../../models/User','3189ZEjnzj','create','120kbijVS','rollback','../../errors/AppError','697890nWelJn','admin','commit','../../models/Company','yup','mudar123','configurable','1384XXWzKS','__importDefault','transaction','getOwnPropertyDescriptor','message','default','72rkvjJV','required','__esModule','../../models/CompaniesSettings','437444JZMAHY','object','prototype','enabled','email','Não\x20foi\x20possível\x20criar\x20a\x20empresa!','2528696UelmXy','__createBinding','ERR_COMPANY_INVALID_NAME','5450gwMdkx','text','defineProperty','../../database','disabled','9999999999','hasOwnProperty','18801Lojnzn'];a438_0x2e73=function(){return _0x422da5;};return a438_0x2e73();}(function(_0x1de7d8,_0x574a66){const _0x4d306e=a438_0x3729,_0x12d9b3=_0x1de7d8();while(!![]){try{const _0x80f150=-parseInt(_0x4d306e(0x206))/0x1+parseInt(_0x4d306e(0x208))/0x2*(-parseInt(_0x4d306e(0x202))/0x3)+-parseInt(_0x4d306e(0x212))/0x4*(-parseInt(_0x4d306e(0x1fb))/0x5)+-parseInt(_0x4d306e(0x203))/0x6+parseInt(_0x4d306e(0x1f2))/0x7+-parseInt(_0x4d306e(0x1f8))/0x8+-parseInt(_0x4d306e(0x1ee))/0x9*(-parseInt(_0x4d306e(0x20b))/0xa);if(_0x80f150===_0x574a66)break;else _0x12d9b3['push'](_0x12d9b3['shift']());}catch(_0x3cdcc2){_0x12d9b3['push'](_0x12d9b3['shift']());}}}(a438_0x2e73,0x31a72));function a438_0x3729(_0x323baa,_0x59f810){const _0x2e7311=a438_0x2e73();return a438_0x3729=function(_0x3729e7,_0x1b09e3){_0x3729e7=_0x3729e7-0x1ec;let _0x40c77d=_0x2e7311[_0x3729e7];return _0x40c77d;},a438_0x3729(_0x323baa,_0x59f810);}var __createBinding=this&&this[a438_0x5cedf9(0x1f9)]||(Object[a438_0x5cedf9(0x207)]?function(_0x3ddbbd,_0x12019b,_0x534004,_0x2c4b65){const _0x5c7e74=a438_0x5cedf9;if(_0x2c4b65===undefined)_0x2c4b65=_0x534004;var _0x5e6816=Object[_0x5c7e74(0x215)](_0x12019b,_0x534004);(!_0x5e6816||('get'in _0x5e6816?!_0x12019b[_0x5c7e74(0x1f0)]:_0x5e6816['writable']||_0x5e6816[_0x5c7e74(0x211)]))&&(_0x5e6816={'enumerable':!![],'get':function(){return _0x12019b[_0x534004];}}),Object[_0x5c7e74(0x1fd)](_0x3ddbbd,_0x2c4b65,_0x5e6816);}:function(_0x753093,_0x159ab4,_0x499e9c,_0x1fb97c){if(_0x1fb97c===undefined)_0x1fb97c=_0x499e9c;_0x753093[_0x1fb97c]=_0x159ab4[_0x499e9c];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a438_0x5cedf9(0x207)]?function(_0x3d536e,_0x5ed96c){const _0x2aea1f=a438_0x5cedf9;Object['defineProperty'](_0x3d536e,_0x2aea1f(0x1ed),{'enumerable':!![],'value':_0x5ed96c});}:function(_0x3bb20a,_0x4d5c43){const _0x1fdd34=a438_0x5cedf9;_0x3bb20a[_0x1fdd34(0x1ed)]=_0x4d5c43;}),__importStar=this&&this['__importStar']||function(_0x4fc2a5){const _0x479a99=a438_0x5cedf9;if(_0x4fc2a5&&_0x4fc2a5['__esModule'])return _0x4fc2a5;var _0x19a0f8={};if(_0x4fc2a5!=null){for(var _0xea16f in _0x4fc2a5)if(_0xea16f!=='default'&&Object[_0x479a99(0x1f4)][_0x479a99(0x201)]['call'](_0x4fc2a5,_0xea16f))__createBinding(_0x19a0f8,_0x4fc2a5,_0xea16f);}return __setModuleDefault(_0x19a0f8,_0x4fc2a5),_0x19a0f8;},__importDefault=this&&this[a438_0x5cedf9(0x213)]||function(_0x32b6b2){const _0x8b453a=a438_0x5cedf9;return _0x32b6b2&&_0x32b6b2[_0x8b453a(0x1f0)]?_0x32b6b2:{'default':_0x32b6b2};};Object[a438_0x5cedf9(0x1fd)](exports,a438_0x5cedf9(0x1f0),{'value':!![]});const Yup=__importStar(require(a438_0x5cedf9(0x20f))),AppError_1=__importDefault(require(a438_0x5cedf9(0x20a))),Company_1=__importDefault(require(a438_0x5cedf9(0x20e))),User_1=__importDefault(require(a438_0x5cedf9(0x205))),database_1=__importDefault(require(a438_0x5cedf9(0x1fe))),CompaniesSettings_1=__importDefault(require(a438_0x5cedf9(0x1f1))),CreateCompanyService=async _0x50f04b=>{const _0x26b721=a438_0x5cedf9,{name:_0x51c67f,phone:_0x5424d0,password:_0x17fa82,email:_0x202355,status:_0x29376e,planId:_0x3042ec,dueDate:_0x23db2c,recurrence:_0x58615a,document:_0x1dff6c,paymentMethod:_0x48bfbf,companyUserName:_0x9d1959}=_0x50f04b,_0x1543d6=Yup[_0x26b721(0x1f3)]()['shape']({'name':Yup['string']()[_0x26b721(0x204)](0x2,_0x26b721(0x1fa))[_0x26b721(0x1ef)]('ERR_COMPANY_INVALID_NAME')});try{await _0x1543d6['validate']({'name':_0x51c67f});}catch(_0x443667){throw new AppError_1[(_0x26b721(0x1ed))](_0x443667[_0x26b721(0x1ec)]);}const _0x482011=await database_1['default'][_0x26b721(0x214)]();try{const _0x1a56f7=await Company_1[_0x26b721(0x1ed)][_0x26b721(0x207)]({'name':_0x51c67f,'phone':_0x5424d0,'email':_0x202355,'status':_0x29376e,'planId':_0x3042ec,'dueDate':_0x23db2c,'recurrence':_0x58615a,'document':_0x1dff6c,'paymentMethod':_0x48bfbf},{'transaction':_0x482011}),_0x261552=await User_1['default']['create']({'name':_0x9d1959?_0x9d1959:_0x51c67f,'email':_0x1a56f7[_0x26b721(0x1f6)],'password':_0x17fa82?_0x17fa82:_0x26b721(0x210),'profile':_0x26b721(0x20c),'companyId':_0x1a56f7['id']},{'transaction':_0x482011}),_0x23a94c=await CompaniesSettings_1[_0x26b721(0x1ed)][_0x26b721(0x207)]({'companyId':_0x1a56f7['id'],'hoursCloseTicketsAuto':_0x26b721(0x200),'chatBotType':_0x26b721(0x1fc),'acceptCallWhatsapp':_0x26b721(0x1f5),'userRandom':_0x26b721(0x1f5),'sendGreetingMessageOneQueues':_0x26b721(0x1f5),'sendSignMessage':_0x26b721(0x1f5),'sendFarewellWaitingTicket':_0x26b721(0x1ff),'userRating':_0x26b721(0x1ff),'sendGreetingAccepted':_0x26b721(0x1f5),'CheckMsgIsGroup':'enabled','sendQueuePosition':_0x26b721(0x1ff),'scheduleType':_0x26b721(0x1ff),'acceptAudioMessageContact':_0x26b721(0x1f5),'sendMsgTransfTicket':_0x26b721(0x1ff),'enableLGPD':'disabled','requiredTag':_0x26b721(0x1ff),'lgpdDeleteMessage':'disabled','lgpdHideNumber':_0x26b721(0x1ff),'lgpdConsent':_0x26b721(0x1ff),'lgpdLink':'','lgpdMessage':'','createdAt':new Date(),'updatedAt':new Date(),'closeTicketOnTransfer':![],'DirectTicketsToWallets':![]},{'transaction':_0x482011});return await _0x482011[_0x26b721(0x20d)](),_0x1a56f7;}catch(_0x22a78f){await _0x482011[_0x26b721(0x209)]();throw new AppError_1['default'](_0x26b721(0x1f7),_0x22a78f);}};exports[a438_0x5cedf9(0x1ed)]=CreateCompanyService;