'use strict';const a431_0x199590=a431_0x1344;(function(_0x5b17ca,_0x533414){const _0x56bb6e=a431_0x1344,_0x41cfea=_0x5b17ca();while(!![]){try{const _0x2cff7b=-parseInt(_0x56bb6e(0x11f))/0x1*(parseInt(_0x56bb6e(0x10e))/0x2)+-parseInt(_0x56bb6e(0xfa))/0x3*(-parseInt(_0x56bb6e(0x102))/0x4)+parseInt(_0x56bb6e(0x10c))/0x5+parseInt(_0x56bb6e(0x119))/0x6*(parseInt(_0x56bb6e(0x103))/0x7)+-parseInt(_0x56bb6e(0xfe))/0x8+parseInt(_0x56bb6e(0xf7))/0x9+-parseInt(_0x56bb6e(0x115))/0xa*(-parseInt(_0x56bb6e(0x118))/0xb);if(_0x2cff7b===_0x533414)break;else _0x41cfea['push'](_0x41cfea['shift']());}catch(_0x29164b){_0x41cfea['push'](_0x41cfea['shift']());}}}(a431_0xd217,0xd7456));function a431_0xd217(){const _0x2a34e3=['17krFDsL','318141kplAfW','__importStar','defineProperty','1805805baFyBT','yup','prototype','transaction','3711720PJEkWA','enabled','__importDefault','create','4mQMLDw','7FNQQrD','__esModule','message','shape','writable','../../errors/AppError','admin','required','configurable','4256855FtBynA','get','199598HUlFqE','commit','Não\x20foi\x20possível\x20criar\x20a\x20empresa!','__setModuleDefault','../../models/Company','email','../../models/User','432260CbvTjw','../../models/CompaniesSettings','rollback','11jkNVjo','9062502eMHHnq','disabled','min','default','9999999999','mudar123'];a431_0xd217=function(){return _0x2a34e3;};return a431_0xd217();}function a431_0x1344(_0x3af9be,_0x4e23c0){const _0xd2171e=a431_0xd217();return a431_0x1344=function(_0x1344a9,_0x528368){_0x1344a9=_0x1344a9-0xf7;let _0x357706=_0xd2171e[_0x1344a9];return _0x357706;},a431_0x1344(_0x3af9be,_0x4e23c0);}var __createBinding=this&&this['__createBinding']||(Object['create']?function(_0x872cb5,_0x588370,_0x2c60f5,_0x1726f0){const _0x5f5ce3=a431_0x1344;if(_0x1726f0===undefined)_0x1726f0=_0x2c60f5;var _0xa75a08=Object['getOwnPropertyDescriptor'](_0x588370,_0x2c60f5);(!_0xa75a08||(_0x5f5ce3(0x10d)in _0xa75a08?!_0x588370[_0x5f5ce3(0x104)]:_0xa75a08[_0x5f5ce3(0x107)]||_0xa75a08[_0x5f5ce3(0x10b)]))&&(_0xa75a08={'enumerable':!![],'get':function(){return _0x588370[_0x2c60f5];}}),Object[_0x5f5ce3(0xf9)](_0x872cb5,_0x1726f0,_0xa75a08);}:function(_0x3c81d5,_0x338a5c,_0x2646a9,_0x8bf8e3){if(_0x8bf8e3===undefined)_0x8bf8e3=_0x2646a9;_0x3c81d5[_0x8bf8e3]=_0x338a5c[_0x2646a9];}),__setModuleDefault=this&&this[a431_0x199590(0x111)]||(Object[a431_0x199590(0x101)]?function(_0x5a8c8e,_0x332992){const _0x37b286=a431_0x199590;Object['defineProperty'](_0x5a8c8e,_0x37b286(0x11c),{'enumerable':!![],'value':_0x332992});}:function(_0x323d23,_0x3d952c){const _0x364d68=a431_0x199590;_0x323d23[_0x364d68(0x11c)]=_0x3d952c;}),__importStar=this&&this[a431_0x199590(0xf8)]||function(_0x3c112b){const _0x10064f=a431_0x199590;if(_0x3c112b&&_0x3c112b['__esModule'])return _0x3c112b;var _0x89c31e={};if(_0x3c112b!=null){for(var _0x2c95fb in _0x3c112b)if(_0x2c95fb!==_0x10064f(0x11c)&&Object[_0x10064f(0xfc)]['hasOwnProperty']['call'](_0x3c112b,_0x2c95fb))__createBinding(_0x89c31e,_0x3c112b,_0x2c95fb);}return __setModuleDefault(_0x89c31e,_0x3c112b),_0x89c31e;},__importDefault=this&&this[a431_0x199590(0x100)]||function(_0x2d715b){return _0x2d715b&&_0x2d715b['__esModule']?_0x2d715b:{'default':_0x2d715b};};Object[a431_0x199590(0xf9)](exports,a431_0x199590(0x104),{'value':!![]});const Yup=__importStar(require(a431_0x199590(0xfb))),AppError_1=__importDefault(require(a431_0x199590(0x108))),Company_1=__importDefault(require(a431_0x199590(0x112))),User_1=__importDefault(require(a431_0x199590(0x114))),database_1=__importDefault(require('../../database')),CompaniesSettings_1=__importDefault(require(a431_0x199590(0x116))),CreateCompanyService=async _0x107727=>{const _0x2f99e5=a431_0x199590,{name:_0x21d3d5,phone:_0x163188,password:_0x361484,email:_0x5f2af5,status:_0x1ec4b1,planId:_0x149f79,dueDate:_0x14d501,recurrence:_0x348771,document:_0x26933b,paymentMethod:_0x3946bc,companyUserName:_0x208123}=_0x107727,_0x2f5056=Yup['object']()[_0x2f99e5(0x106)]({'name':Yup['string']()[_0x2f99e5(0x11b)](0x2,'ERR_COMPANY_INVALID_NAME')[_0x2f99e5(0x10a)]('ERR_COMPANY_INVALID_NAME')});try{await _0x2f5056['validate']({'name':_0x21d3d5});}catch(_0x2696af){throw new AppError_1[(_0x2f99e5(0x11c))](_0x2696af[_0x2f99e5(0x105)]);}const _0x252db7=await database_1['default'][_0x2f99e5(0xfd)]();try{const _0x26ec63=await Company_1['default']['create']({'name':_0x21d3d5,'phone':_0x163188,'email':_0x5f2af5,'status':_0x1ec4b1,'planId':_0x149f79,'dueDate':_0x14d501,'recurrence':_0x348771,'document':_0x26933b,'paymentMethod':_0x3946bc},{'transaction':_0x252db7}),_0x244b4c=await User_1[_0x2f99e5(0x11c)][_0x2f99e5(0x101)]({'name':_0x208123?_0x208123:_0x21d3d5,'email':_0x26ec63[_0x2f99e5(0x113)],'password':_0x361484?_0x361484:_0x2f99e5(0x11e),'profile':_0x2f99e5(0x109),'companyId':_0x26ec63['id']},{'transaction':_0x252db7}),_0x4c7bbd=await CompaniesSettings_1['default'][_0x2f99e5(0x101)]({'companyId':_0x26ec63['id'],'hoursCloseTicketsAuto':_0x2f99e5(0x11d),'chatBotType':'text','acceptCallWhatsapp':'enabled','userRandom':_0x2f99e5(0xff),'sendGreetingMessageOneQueues':_0x2f99e5(0xff),'sendSignMessage':_0x2f99e5(0xff),'sendFarewellWaitingTicket':'disabled','userRating':_0x2f99e5(0x11a),'sendGreetingAccepted':'enabled','CheckMsgIsGroup':_0x2f99e5(0xff),'sendQueuePosition':_0x2f99e5(0x11a),'scheduleType':_0x2f99e5(0x11a),'acceptAudioMessageContact':_0x2f99e5(0xff),'sendMsgTransfTicket':_0x2f99e5(0x11a),'enableLGPD':_0x2f99e5(0x11a),'requiredTag':'disabled','lgpdDeleteMessage':_0x2f99e5(0x11a),'lgpdHideNumber':'disabled','lgpdConsent':'disabled','lgpdLink':'','lgpdMessage':'','createdAt':new Date(),'updatedAt':new Date(),'closeTicketOnTransfer':![],'DirectTicketsToWallets':![]},{'transaction':_0x252db7});return await _0x252db7[_0x2f99e5(0x10f)](),_0x26ec63;}catch(_0x4e7351){await _0x252db7[_0x2f99e5(0x117)]();throw new AppError_1[(_0x2f99e5(0x11c))](_0x2f99e5(0x110),_0x4e7351);}};exports['default']=CreateCompanyService;