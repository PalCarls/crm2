'use strict';const a541_0x41434a=a541_0x2f30;(function(_0x339c48,_0x53d452){const _0x33d793=a541_0x2f30,_0x1afcec=_0x339c48();while(!![]){try{const _0x4647d0=-parseInt(_0x33d793(0x69))/0x1*(parseInt(_0x33d793(0x84))/0x2)+parseInt(_0x33d793(0x8b))/0x3*(parseInt(_0x33d793(0x8c))/0x4)+parseInt(_0x33d793(0x71))/0x5+parseInt(_0x33d793(0x8e))/0x6+parseInt(_0x33d793(0x80))/0x7*(parseInt(_0x33d793(0x6a))/0x8)+parseInt(_0x33d793(0x7b))/0x9*(parseInt(_0x33d793(0x7e))/0xa)+-parseInt(_0x33d793(0x7c))/0xb;if(_0x4647d0===_0x53d452)break;else _0x1afcec['push'](_0x1afcec['shift']());}catch(_0x336bd4){_0x1afcec['push'](_0x1afcec['shift']());}}}(a541_0x4586,0xcd1b5));var __importDefault=this&&this['__importDefault']||function(_0x4f6e93){const _0x26dce4=a541_0x2f30;return _0x4f6e93&&_0x4f6e93[_0x26dce4(0x79)]?_0x4f6e93:{'default':_0x4f6e93};};function a541_0x2f30(_0x20aac0,_0x2a73db){const _0x4586cf=a541_0x4586();return a541_0x2f30=function(_0x2f30fa,_0x160624){_0x2f30fa=_0x2f30fa-0x66;let _0x467230=_0x4586cf[_0x2f30fa];return _0x467230;},a541_0x2f30(_0x20aac0,_0x2a73db);}Object[a541_0x41434a(0x81)](exports,a541_0x41434a(0x79),{'value':!![]});const Ticket_1=__importDefault(require(a541_0x41434a(0x6f))),AppError_1=__importDefault(require(a541_0x41434a(0x74))),Contact_1=__importDefault(require(a541_0x41434a(0x8a))),User_1=__importDefault(require(a541_0x41434a(0x77))),Queue_1=__importDefault(require(a541_0x41434a(0x82))),Tag_1=__importDefault(require(a541_0x41434a(0x6c))),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),Company_1=__importDefault(require('../../models/Company')),QueueIntegrations_1=__importDefault(require(a541_0x41434a(0x8d))),ShowTicketService=async(_0x359e9c,_0x51573e)=>{const _0x9abaf6=a541_0x41434a,_0x188e9d=await Ticket_1[_0x9abaf6(0x87)][_0x9abaf6(0x83)]({'where':{'id':_0x359e9c},'include':[{'model':Contact_1[_0x9abaf6(0x87)],'as':_0x9abaf6(0x89),'attributes':['id',_0x9abaf6(0x85),'number','email',_0x9abaf6(0x68),_0x9abaf6(0x72),_0x9abaf6(0x6e),_0x9abaf6(0x70),_0x9abaf6(0x6b)],'include':[_0x9abaf6(0x7d),_0x9abaf6(0x88),'tags']},{'model':Queue_1[_0x9abaf6(0x87)],'as':_0x9abaf6(0x7f),'attributes':['id','name',_0x9abaf6(0x73)],'include':[_0x9abaf6(0x6d)]},{'model':User_1['default'],'as':_0x9abaf6(0x78),'attributes':['id','name']},{'model':Tag_1[_0x9abaf6(0x87)],'as':_0x9abaf6(0x7a),'attributes':['id',_0x9abaf6(0x85),_0x9abaf6(0x73)]},{'model':Whatsapp_1[_0x9abaf6(0x87)],'as':_0x9abaf6(0x75)},{'model':Company_1[_0x9abaf6(0x87)],'as':_0x9abaf6(0x66),'attributes':['id',_0x9abaf6(0x85)]},{'model':QueueIntegrations_1[_0x9abaf6(0x87)],'as':_0x9abaf6(0x76),'attributes':['id',_0x9abaf6(0x85)]}]});if(_0x188e9d?.['companyId']!==_0x51573e)throw new AppError_1['default'](_0x9abaf6(0x67));if(!_0x188e9d)throw new AppError_1[(_0x9abaf6(0x87))](_0x9abaf6(0x86),0x194);return _0x188e9d;};exports[a541_0x41434a(0x87)]=ShowTicketService;function a541_0x4586(){const _0x7482e=['tags','1427211clRmxE','21806620UsUUCB','extraInfo','100DGFbqN','queue','335867EDhZld','defineProperty','../../models/Queue','findOne','2759228uDOUtX','name','ERR_NO_TICKET_FOUND','default','contactTags','contact','../../models/Contact','4869489MLlhXx','4iivuZh','../../models/QueueIntegrations','1150812jOdTYz','company','Não\x20é\x20possível\x20consultar\x20registros\x20de\x20outra\x20empresa','profilePicUrl','1JDQIKv','8BGXYWy','remoteJid','../../models/Tag','chatbots','active','../../models/Ticket','disableBot','3767075ZeQClq','acceptAudioMessage','color','../../errors/AppError','whatsapp','queueIntegration','../../models/User','user','__esModule'];a541_0x4586=function(){return _0x7482e;};return a541_0x4586();}