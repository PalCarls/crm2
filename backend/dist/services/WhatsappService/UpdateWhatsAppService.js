<<<<<<< HEAD
'use strict';const a624_0x385948=a624_0x1ba3;(function(_0x26e4cd,_0x2b2361){const _0x570a9f=a624_0x1ba3,_0x35a1af=_0x26e4cd();while(!![]){try{const _0x4c3add=-parseInt(_0x570a9f(0x132))/0x1+-parseInt(_0x570a9f(0x133))/0x2*(parseInt(_0x570a9f(0x14a))/0x3)+-parseInt(_0x570a9f(0x13f))/0x4+-parseInt(_0x570a9f(0x140))/0x5+-parseInt(_0x570a9f(0x149))/0x6*(-parseInt(_0x570a9f(0x14d))/0x7)+-parseInt(_0x570a9f(0x148))/0x8+parseInt(_0x570a9f(0x146))/0x9;if(_0x4c3add===_0x2b2361)break;else _0x35a1af['push'](_0x35a1af['shift']());}catch(_0x50c09f){_0x35a1af['push'](_0x35a1af['shift']());}}}(a624_0x2709,0x6bbb0));var __createBinding=this&&this[a624_0x385948(0x147)]||(Object[a624_0x385948(0x13a)]?function(_0x34918c,_0x195159,_0x45b96d,_0x543046){const _0x4a67c2=a624_0x385948;if(_0x543046===undefined)_0x543046=_0x45b96d;var _0x26555e=Object[_0x4a67c2(0x142)](_0x195159,_0x45b96d);(!_0x26555e||('get'in _0x26555e?!_0x195159['__esModule']:_0x26555e['writable']||_0x26555e[_0x4a67c2(0x14c)]))&&(_0x26555e={'enumerable':!![],'get':function(){return _0x195159[_0x45b96d];}}),Object['defineProperty'](_0x34918c,_0x543046,_0x26555e);}:function(_0x5cf3cb,_0x490db7,_0x3b431e,_0x2b200e){if(_0x2b200e===undefined)_0x2b200e=_0x3b431e;_0x5cf3cb[_0x2b200e]=_0x490db7[_0x3b431e];}),__setModuleDefault=this&&this[a624_0x385948(0x141)]||(Object[a624_0x385948(0x13a)]?function(_0x5acc24,_0x31917f){const _0x2be1cc=a624_0x385948;Object[_0x2be1cc(0x138)](_0x5acc24,'default',{'enumerable':!![],'value':_0x31917f});}:function(_0x4a5a34,_0x51c62c){const _0x2c9ec4=a624_0x385948;_0x4a5a34[_0x2c9ec4(0x137)]=_0x51c62c;}),__importStar=this&&this[a624_0x385948(0x136)]||function(_0x42c577){const _0x6f9a7b=a624_0x385948;if(_0x42c577&&_0x42c577[_0x6f9a7b(0x13e)])return _0x42c577;var _0x17cf50={};if(_0x42c577!=null){for(var _0x4172a in _0x42c577)if(_0x4172a!==_0x6f9a7b(0x137)&&Object[_0x6f9a7b(0x130)][_0x6f9a7b(0x143)][_0x6f9a7b(0x12f)](_0x42c577,_0x4172a))__createBinding(_0x17cf50,_0x42c577,_0x4172a);}return __setModuleDefault(_0x17cf50,_0x42c577),_0x17cf50;},__importDefault=this&&this['__importDefault']||function(_0x257855){const _0x2b3946=a624_0x385948;return _0x257855&&_0x257855[_0x2b3946(0x13e)]?_0x257855:{'default':_0x257855};};function a624_0x2709(){const _0x486d89=['call','prototype','message','421348yQhNRv','1167226SEheVo','../../errors/AppError','string','__importStar','default','defineProperty','yup','create','./ShowWhatsAppService','findOne','sequelize','__esModule','3119608yCmkcv','3939275usMIhs','__setModuleDefault','getOwnPropertyDescriptor','hasOwnProperty','object','validate','29081268qvrbsX','__createBinding','4162200saJkaU','6tZxaKF','3IGPYGK','not','configurable','2121035cfvzrV','./AssociateWhatsappQueue'];a624_0x2709=function(){return _0x486d89;};return a624_0x2709();}function a624_0x1ba3(_0x11fb29,_0x55de3c){const _0x270944=a624_0x2709();return a624_0x1ba3=function(_0x1ba3f9,_0x166fc4){_0x1ba3f9=_0x1ba3f9-0x12f;let _0xe8a781=_0x270944[_0x1ba3f9];return _0xe8a781;},a624_0x1ba3(_0x11fb29,_0x55de3c);}Object['defineProperty'](exports,a624_0x385948(0x13e),{'value':!![]});const Yup=__importStar(require(a624_0x385948(0x139))),sequelize_1=require(a624_0x385948(0x13d)),AppError_1=__importDefault(require(a624_0x385948(0x134))),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),ShowWhatsAppService_1=__importDefault(require(a624_0x385948(0x13b))),AssociateWhatsappQueue_1=__importDefault(require(a624_0x385948(0x14e))),UpdateWhatsAppService=async({whatsappData:_0x251f59,whatsappId:_0x590659,companyId:_0x493ef7})=>{const _0x141a6d=a624_0x385948,_0xb59a31=Yup[_0x141a6d(0x144)]()['shape']({'name':Yup[_0x141a6d(0x135)]()['min'](0x2),'status':Yup['string'](),'isDefault':Yup['boolean']()}),{name:_0x32982e,status:_0x3357b8,isDefault:_0x1877e1,session:_0x412cab,greetingMessage:_0x3f4bfb,complationMessage:_0x53555d,outOfHoursMessage:_0x3793d2,queueIds:queueIds=[],token:_0x3fd46a,maxUseBotQueues:maxUseBotQueues=0x0,timeUseBotQueues:timeUseBotQueues=0x0,expiresTicket:expiresTicket=0x0,allowGroup:_0x334c72,timeSendQueue:timeSendQueue=0x0,sendIdQueue:sendIdQueue=null,timeInactiveMessage:timeInactiveMessage=0x0,inactiveMessage:_0xa885e6,ratingMessage:_0xf947c0,maxUseBotQueuesNPS:_0x2b3f5e,expiresTicketNPS:expiresTicketNPS=0x0,whenExpiresTicket:_0x51c9dd,expiresInactiveMessage:_0x2bce8e,groupAsTicket:_0x1a1f28,importOldMessages:_0x3adf68,importRecentMessages:_0x550d8a,closedTicketsPostImported:_0x319718,importOldMessagesGroups:_0x236bed,timeCreateNewTicket:timeCreateNewTicket=null,integrationId:_0x4ad104,schedules:_0x20e677,promptId:_0x569c72,requestQR:requestQR=![]}=_0x251f59;try{await _0xb59a31[_0x141a6d(0x145)]({'name':_0x32982e,'status':_0x3357b8,'isDefault':_0x1877e1});}catch(_0x2ef0da){throw new AppError_1['default'](_0x2ef0da[_0x141a6d(0x131)]);}if(queueIds['length']>0x1&&!_0x3f4bfb)throw new AppError_1[(_0x141a6d(0x137))]('ERR_WAPP_GREETING_REQUIRED');let _0x259a8d=null;_0x1877e1&&(_0x259a8d=await Whatsapp_1[_0x141a6d(0x137)][_0x141a6d(0x13c)]({'where':{'isDefault':!![],'id':{[sequelize_1['Op'][_0x141a6d(0x14b)]]:_0x590659},'companyId':_0x493ef7}}),_0x259a8d&&await _0x259a8d['update']({'isDefault':![]}));const _0x4d96ce=await(0x0,ShowWhatsAppService_1['default'])(_0x590659,_0x493ef7);return await _0x4d96ce['update']({'name':_0x32982e,'status':_0x3357b8,'session':_0x412cab,'greetingMessage':_0x3f4bfb,'complationMessage':_0x53555d,'outOfHoursMessage':_0x3793d2,'isDefault':_0x1877e1,'companyId':_0x493ef7,'token':_0x3fd46a,'maxUseBotQueues':maxUseBotQueues||0x0,'timeUseBotQueues':timeUseBotQueues||0x0,'expiresTicket':expiresTicket||0x0,'allowGroup':_0x334c72,'timeSendQueue':timeSendQueue,'sendIdQueue':sendIdQueue,'timeInactiveMessage':timeInactiveMessage,'inactiveMessage':_0xa885e6,'ratingMessage':_0xf947c0,'maxUseBotQueuesNPS':_0x2b3f5e,'expiresTicketNPS':expiresTicketNPS,'whenExpiresTicket':_0x51c9dd,'expiresInactiveMessage':_0x2bce8e,'groupAsTicket':_0x1a1f28,'importOldMessages':_0x3adf68,'importRecentMessages':_0x550d8a,'closedTicketsPostImported':_0x319718,'importOldMessagesGroups':_0x236bed,'timeCreateNewTicket':timeCreateNewTicket,'integrationId':_0x4ad104,'schedules':_0x20e677,'promptId':_0x569c72}),!requestQR&&await(0x0,AssociateWhatsappQueue_1['default'])(_0x4d96ce,queueIds),{'whatsapp':_0x4d96ce,'oldDefaultWhatsapp':_0x259a8d};};exports[a624_0x385948(0x137)]=UpdateWhatsAppService;
=======
'use strict';function a623_0x35a8(_0x3ab843,_0x58e172){const _0x132aad=a623_0x132a();return a623_0x35a8=function(_0x35a8e7,_0x15748a){_0x35a8e7=_0x35a8e7-0x10a;let _0x33d4c2=_0x132aad[_0x35a8e7];return _0x33d4c2;},a623_0x35a8(_0x3ab843,_0x58e172);}const a623_0x5458ce=a623_0x35a8;(function(_0x154f96,_0x4ba2fe){const _0x2c152f=a623_0x35a8,_0x44d402=_0x154f96();while(!![]){try{const _0x2d5e94=parseInt(_0x2c152f(0x127))/0x1*(-parseInt(_0x2c152f(0x12a))/0x2)+parseInt(_0x2c152f(0x11d))/0x3*(parseInt(_0x2c152f(0x12c))/0x4)+-parseInt(_0x2c152f(0x126))/0x5*(-parseInt(_0x2c152f(0x110))/0x6)+-parseInt(_0x2c152f(0x116))/0x7+parseInt(_0x2c152f(0x10b))/0x8*(-parseInt(_0x2c152f(0x114))/0x9)+-parseInt(_0x2c152f(0x125))/0xa*(parseInt(_0x2c152f(0x11e))/0xb)+parseInt(_0x2c152f(0x117))/0xc;if(_0x2d5e94===_0x4ba2fe)break;else _0x44d402['push'](_0x44d402['shift']());}catch(_0x3b0188){_0x44d402['push'](_0x44d402['shift']());}}}(a623_0x132a,0x65fb2));function a623_0x132a(){const _0x44cea3=['3pQNChh','getOwnPropertyDescriptor','update','432554jdPBFE','validate','12eHPGys','../../models/Whatsapp','__createBinding','ERR_WAPP_GREETING_REQUIRED','16qkrXnv','length','string','shape','call','12PhjXmq','defineProperty','hasOwnProperty','./ShowWhatsAppService','3478689kRNPfq','boolean','3319260SHdAaj','19879680MESnSS','message','min','__esModule','default','object','448893EKyWsc','275jhuFaD','writable','prototype','create','get','configurable','yup','77620NjJcxF','1005710MpAVPc'];a623_0x132a=function(){return _0x44cea3;};return a623_0x132a();}var __createBinding=this&&this[a623_0x5458ce(0x12e)]||(Object[a623_0x5458ce(0x121)]?function(_0x298ea5,_0x1fb4d1,_0x3c8251,_0x26115d){const _0x35609b=a623_0x5458ce;if(_0x26115d===undefined)_0x26115d=_0x3c8251;var _0x128743=Object[_0x35609b(0x128)](_0x1fb4d1,_0x3c8251);(!_0x128743||(_0x35609b(0x122)in _0x128743?!_0x1fb4d1[_0x35609b(0x11a)]:_0x128743[_0x35609b(0x11f)]||_0x128743[_0x35609b(0x123)]))&&(_0x128743={'enumerable':!![],'get':function(){return _0x1fb4d1[_0x3c8251];}}),Object[_0x35609b(0x111)](_0x298ea5,_0x26115d,_0x128743);}:function(_0x351b45,_0x36aea7,_0xe54bdc,_0x32067e){if(_0x32067e===undefined)_0x32067e=_0xe54bdc;_0x351b45[_0x32067e]=_0x36aea7[_0xe54bdc];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a623_0x5458ce(0x121)]?function(_0x2b649a,_0x4b3944){const _0x52892a=a623_0x5458ce;Object[_0x52892a(0x111)](_0x2b649a,_0x52892a(0x11b),{'enumerable':!![],'value':_0x4b3944});}:function(_0x2bca0b,_0xfc4d47){_0x2bca0b['default']=_0xfc4d47;}),__importStar=this&&this['__importStar']||function(_0x52fe46){const _0x523335=a623_0x5458ce;if(_0x52fe46&&_0x52fe46['__esModule'])return _0x52fe46;var _0x54097a={};if(_0x52fe46!=null){for(var _0x52e898 in _0x52fe46)if(_0x52e898!==_0x523335(0x11b)&&Object[_0x523335(0x120)][_0x523335(0x112)][_0x523335(0x10f)](_0x52fe46,_0x52e898))__createBinding(_0x54097a,_0x52fe46,_0x52e898);}return __setModuleDefault(_0x54097a,_0x52fe46),_0x54097a;},__importDefault=this&&this['__importDefault']||function(_0x5b5263){const _0x14ae13=a623_0x5458ce;return _0x5b5263&&_0x5b5263[_0x14ae13(0x11a)]?_0x5b5263:{'default':_0x5b5263};};Object[a623_0x5458ce(0x111)](exports,'__esModule',{'value':!![]});const Yup=__importStar(require(a623_0x5458ce(0x124))),sequelize_1=require('sequelize'),AppError_1=__importDefault(require('../../errors/AppError')),Whatsapp_1=__importDefault(require(a623_0x5458ce(0x12d))),ShowWhatsAppService_1=__importDefault(require(a623_0x5458ce(0x113))),AssociateWhatsappQueue_1=__importDefault(require('./AssociateWhatsappQueue')),UpdateWhatsAppService=async({whatsappData:_0x2b3351,whatsappId:_0x60da23,companyId:_0x1d73e4})=>{const _0x29c498=a623_0x5458ce,_0x1c7301=Yup[_0x29c498(0x11c)]()[_0x29c498(0x10e)]({'name':Yup[_0x29c498(0x10d)]()[_0x29c498(0x119)](0x2),'status':Yup[_0x29c498(0x10d)](),'isDefault':Yup[_0x29c498(0x115)]()}),{name:_0x38fb9a,status:_0xe6598b,isDefault:_0x3ddc04,session:_0x4256ca,greetingMessage:_0x407bc3,complationMessage:_0x478b69,outOfHoursMessage:_0x475a69,queueIds:queueIds=[],token:_0x30fefd,maxUseBotQueues:maxUseBotQueues=0x0,timeUseBotQueues:timeUseBotQueues=0x0,expiresTicket:expiresTicket=0x0,allowGroup:_0x37f2b8,timeSendQueue:timeSendQueue=0x0,sendIdQueue:sendIdQueue=null,timeInactiveMessage:timeInactiveMessage=0x0,inactiveMessage:_0x549a78,ratingMessage:_0x27fcd1,maxUseBotQueuesNPS:_0x51493b,expiresTicketNPS:expiresTicketNPS=0x0,whenExpiresTicket:_0x3e0b05,expiresInactiveMessage:_0x32d8cd,groupAsTicket:_0x3850da,importOldMessages:_0x3d5b27,importRecentMessages:_0xe4660f,closedTicketsPostImported:_0x33623a,importOldMessagesGroups:_0x29a097,timeCreateNewTicket:timeCreateNewTicket=null,integrationId:_0x5ca9af,schedules:_0x4c5c6d,promptId:_0x4a43b5,requestQR:requestQR=![]}=_0x2b3351;try{await _0x1c7301[_0x29c498(0x12b)]({'name':_0x38fb9a,'status':_0xe6598b,'isDefault':_0x3ddc04});}catch(_0xd1ea4){throw new AppError_1[(_0x29c498(0x11b))](_0xd1ea4[_0x29c498(0x118)]);}if(queueIds[_0x29c498(0x10c)]>0x1&&!_0x407bc3)throw new AppError_1[(_0x29c498(0x11b))](_0x29c498(0x10a));let _0x3be534=null;_0x3ddc04&&(_0x3be534=await Whatsapp_1['default']['findOne']({'where':{'isDefault':!![],'id':{[sequelize_1['Op']['not']]:_0x60da23},'companyId':_0x1d73e4}}),_0x3be534&&await _0x3be534[_0x29c498(0x129)]({'isDefault':![]}));const _0x5a1472=await(0x0,ShowWhatsAppService_1[_0x29c498(0x11b)])(_0x60da23,_0x1d73e4);return await _0x5a1472[_0x29c498(0x129)]({'name':_0x38fb9a,'status':_0xe6598b,'session':_0x4256ca,'greetingMessage':_0x407bc3,'complationMessage':_0x478b69,'outOfHoursMessage':_0x475a69,'isDefault':_0x3ddc04,'companyId':_0x1d73e4,'token':_0x30fefd,'maxUseBotQueues':maxUseBotQueues||0x0,'timeUseBotQueues':timeUseBotQueues||0x0,'expiresTicket':expiresTicket||0x0,'allowGroup':_0x37f2b8,'timeSendQueue':timeSendQueue,'sendIdQueue':sendIdQueue,'timeInactiveMessage':timeInactiveMessage,'inactiveMessage':_0x549a78,'ratingMessage':_0x27fcd1,'maxUseBotQueuesNPS':_0x51493b,'expiresTicketNPS':expiresTicketNPS,'whenExpiresTicket':_0x3e0b05,'expiresInactiveMessage':_0x32d8cd,'groupAsTicket':_0x3850da,'importOldMessages':_0x3d5b27,'importRecentMessages':_0xe4660f,'closedTicketsPostImported':_0x33623a,'importOldMessagesGroups':_0x29a097,'timeCreateNewTicket':timeCreateNewTicket,'integrationId':_0x5ca9af,'schedules':_0x4c5c6d,'promptId':_0x4a43b5}),!requestQR&&await(0x0,AssociateWhatsappQueue_1[_0x29c498(0x11b)])(_0x5a1472,queueIds),{'whatsapp':_0x5a1472,'oldDefaultWhatsapp':_0x3be534};};exports[a623_0x5458ce(0x11b)]=UpdateWhatsAppService;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
