'use strict';function a498_0x37a7(_0x2eb5c1,_0x3ec08f){const _0x1da784=a498_0x1da7();return a498_0x37a7=function(_0x37a7bd,_0x1a8468){_0x37a7bd=_0x37a7bd-0x175;let _0x3c1844=_0x1da784[_0x37a7bd];return _0x3c1844;},a498_0x37a7(_0x2eb5c1,_0x3ec08f);}const a498_0x52cb2d=a498_0x37a7;(function(_0x2f993e,_0x1e86b9){const _0x119319=a498_0x37a7,_0x2f5ebe=_0x2f993e();while(!![]){try{const _0x3c0a58=parseInt(_0x119319(0x179))/0x1+-parseInt(_0x119319(0x17b))/0x2+-parseInt(_0x119319(0x181))/0x3*(parseInt(_0x119319(0x188))/0x4)+-parseInt(_0x119319(0x183))/0x5+parseInt(_0x119319(0x17e))/0x6+-parseInt(_0x119319(0x17d))/0x7+parseInt(_0x119319(0x186))/0x8;if(_0x3c0a58===_0x1e86b9)break;else _0x2f5ebe['push'](_0x2f5ebe['shift']());}catch(_0x7b9685){_0x2f5ebe['push'](_0x2f5ebe['shift']());}}}(a498_0x1da7,0xde3d0));var __importDefault=this&&this[a498_0x52cb2d(0x192)]||function(_0x505b8f){return _0x505b8f&&_0x505b8f['__esModule']?_0x505b8f:{'default':_0x505b8f};};Object[a498_0x52cb2d(0x18c)](exports,a498_0x52cb2d(0x185),{'value':!![]});function a498_0x1da7(){const _0xafc355=['log','__esModule','20452344wtLvpJ','default','12wemsQW','contact','notification','../../helpers/GetDefaultWhatsApp','defineProperty','../../errors/AppError','ERR_CREATING_TICKET','update','../../libs/socket','getIO','__importDefault','../../helpers/GetDefaultWhatsAppByUser','-ticket','status','../ContactServices/ShowContactService','company-','1025258HieUxa','toString','2336162sLGzxw','queue','8364923keZACH','7973130TdEHMW','group','../../models/Ticket','93729pnbAIy','../WhatsappService/ShowWhatsAppService','7717845OdCVBE'];a498_0x1da7=function(){return _0xafc355;};return a498_0x1da7();}const AppError_1=__importDefault(require(a498_0x52cb2d(0x18d))),GetDefaultWhatsApp_1=__importDefault(require(a498_0x52cb2d(0x18b))),GetDefaultWhatsAppByUser_1=__importDefault(require(a498_0x52cb2d(0x193))),Ticket_1=__importDefault(require(a498_0x52cb2d(0x180))),ShowContactService_1=__importDefault(require(a498_0x52cb2d(0x177))),socket_1=require(a498_0x52cb2d(0x190)),ShowWhatsAppService_1=__importDefault(require(a498_0x52cb2d(0x182))),CheckContactOpenTickets_1=__importDefault(require('../../helpers/CheckContactOpenTickets')),CreateTicketService=async({contactId:_0x82ba4f,status:_0x68825a,userId:_0x3f34fc,queueId:_0x4b8917,companyId:_0x4a5c43,whatsappId:_0x1f7b0e})=>{const _0x516c5a=a498_0x52cb2d,_0x4f6a24=(0x0,socket_1[_0x516c5a(0x191)])();console[_0x516c5a(0x184)](_0x82ba4f,_0x68825a,_0x3f34fc,_0x4b8917,_0x4a5c43,_0x1f7b0e);let _0x507236;_0x1f7b0e!==undefined&&_0x1f7b0e!==null&&_0x1f7b0e!==''&&(_0x507236=await(0x0,ShowWhatsAppService_1[_0x516c5a(0x187)])(_0x1f7b0e,_0x4a5c43));let _0xb2a44=await(0x0,GetDefaultWhatsAppByUser_1[_0x516c5a(0x187)])(_0x3f34fc);_0x507236&&(_0xb2a44=_0x507236);if(!_0xb2a44)_0xb2a44=await(0x0,GetDefaultWhatsApp_1[_0x516c5a(0x187)])(_0x4a5c43);await(0x0,CheckContactOpenTickets_1[_0x516c5a(0x187)])(_0x82ba4f,_0xb2a44['id']);const {isGroup:_0x2d2de2}=await(0x0,ShowContactService_1[_0x516c5a(0x187)])(_0x82ba4f,_0x4a5c43),[{id:_0x43ba8c}]=await Ticket_1[_0x516c5a(0x187)]['findOrCreate']({'where':{'contactId':_0x82ba4f,'companyId':_0x4a5c43,'whatsappId':_0xb2a44['id']},'defaults':{'contactId':_0x82ba4f,'companyId':_0x4a5c43,'status':_0x68825a,'whatsappId':_0xb2a44['id'],'isGroup':_0x2d2de2,'userId':_0x3f34fc,'isBot':!![]}});await Ticket_1[_0x516c5a(0x187)][_0x516c5a(0x18f)]({'companyId':_0x4a5c43,'queueId':_0x4b8917,'userId':_0x3f34fc,'status':_0x2d2de2?_0x516c5a(0x17f):'open','isBot':!![]},{'where':{'id':_0x43ba8c}});const _0x344eb3=await Ticket_1[_0x516c5a(0x187)]['findByPk'](_0x43ba8c,{'include':[_0x516c5a(0x189),_0x516c5a(0x17c)]});if(!_0x344eb3)throw new AppError_1['default'](_0x516c5a(0x18e));return _0x4f6a24['to'](_0x344eb3[_0x516c5a(0x176)])['to'](_0x516c5a(0x18a))['to'](_0x43ba8c[_0x516c5a(0x17a)]())['emit'](_0x516c5a(0x178)+_0x4a5c43+_0x516c5a(0x175),{'action':_0x516c5a(0x18f),'ticket':_0x344eb3}),_0x344eb3;};exports[a498_0x52cb2d(0x187)]=CreateTicketService;