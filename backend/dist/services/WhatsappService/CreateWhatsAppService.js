'use strict';const a630_0x7bd716=a630_0x4e40;(function(_0x54150e,_0x4ad76f){const _0x15cc64=a630_0x4e40,_0x308e4e=_0x54150e();while(!![]){try{const _0x3f5471=-parseInt(_0x15cc64(0x12b))/0x1*(parseInt(_0x15cc64(0x121))/0x2)+-parseInt(_0x15cc64(0x12a))/0x3*(parseInt(_0x15cc64(0x14a))/0x4)+parseInt(_0x15cc64(0x149))/0x5*(parseInt(_0x15cc64(0x125))/0x6)+parseInt(_0x15cc64(0x11c))/0x7*(parseInt(_0x15cc64(0x134))/0x8)+parseInt(_0x15cc64(0x123))/0x9+parseInt(_0x15cc64(0x132))/0xa+parseInt(_0x15cc64(0x148))/0xb;if(_0x3f5471===_0x4ad76f)break;else _0x308e4e['push'](_0x308e4e['shift']());}catch(_0x551a20){_0x308e4e['push'](_0x308e4e['shift']());}}}(a630_0x2972,0x3cbc3));function a630_0x4e40(_0x419b6a,_0x5063d2){const _0x29724a=a630_0x2972();return a630_0x4e40=function(_0x4e402b,_0x57f01b){_0x4e402b=_0x4e402b-0x11c;let _0x3366d2=_0x29724a[_0x4e402b];return _0x3366d2;},a630_0x4e40(_0x419b6a,_0x5063d2);}var __createBinding=this&&this[a630_0x7bd716(0x120)]||(Object[a630_0x7bd716(0x137)]?function(_0x3107fc,_0x172842,_0x1320e7,_0x490976){const _0x5cf515=a630_0x7bd716;if(_0x490976===undefined)_0x490976=_0x1320e7;var _0x312fda=Object[_0x5cf515(0x147)](_0x172842,_0x1320e7);(!_0x312fda||(_0x5cf515(0x13a)in _0x312fda?!_0x172842[_0x5cf515(0x12d)]:_0x312fda['writable']||_0x312fda['configurable']))&&(_0x312fda={'enumerable':!![],'get':function(){return _0x172842[_0x1320e7];}}),Object['defineProperty'](_0x3107fc,_0x490976,_0x312fda);}:function(_0x466c61,_0x47ba58,_0x4f179e,_0x1062d4){if(_0x1062d4===undefined)_0x1062d4=_0x4f179e;_0x466c61[_0x1062d4]=_0x47ba58[_0x4f179e];}),__setModuleDefault=this&&this[a630_0x7bd716(0x136)]||(Object[a630_0x7bd716(0x137)]?function(_0x1980fb,_0xe25669){Object['defineProperty'](_0x1980fb,'default',{'enumerable':!![],'value':_0xe25669});}:function(_0x1e296f,_0x41eceb){const _0x1df32a=a630_0x7bd716;_0x1e296f[_0x1df32a(0x124)]=_0x41eceb;}),__importStar=this&&this[a630_0x7bd716(0x129)]||function(_0x562f0d){const _0x21884a=a630_0x7bd716;if(_0x562f0d&&_0x562f0d[_0x21884a(0x12d)])return _0x562f0d;var _0x3a51c5={};if(_0x562f0d!=null){for(var _0x1c2624 in _0x562f0d)if(_0x1c2624!==_0x21884a(0x124)&&Object[_0x21884a(0x12e)][_0x21884a(0x139)]['call'](_0x562f0d,_0x1c2624))__createBinding(_0x3a51c5,_0x562f0d,_0x1c2624);}return __setModuleDefault(_0x3a51c5,_0x562f0d),_0x3a51c5;},__importDefault=this&&this[a630_0x7bd716(0x127)]||function(_0x35f372){return _0x35f372&&_0x35f372['__esModule']?_0x35f372:{'default':_0x35f372};};Object[a630_0x7bd716(0x122)](exports,a630_0x7bd716(0x12d),{'value':!![]});function a630_0x2972(){const _0x152b5c=['../../models/Company','hasOwnProperty','get','required','shape','plan','ERR_WAPP_GREETING_REQUIRED','object','yup','boolean','min','Esse\x20nome\x20já\x20está\x20sendo\x20utilizado\x20por\x20outra\x20conexão','../../models/Whatsapp','string','connections','getOwnPropertyDescriptor','718487ZuhRVq','6870utbNzv','16004nGZNys','message','5138NjPRzd','This\x20whatsapp\x20token\x20is\x20already\x20used.','../../models/Plan','beta','__createBinding','8KvUHPc','defineProperty','2432565LLcedq','default','252OCitxu','Número\x20máximo\x20de\x20conexões\x20já\x20alcançado:\x20','__importDefault','validate','__importStar','282kaytVo','55054zsBJSb','whatsapp','__esModule','prototype','../../errors/AppError','OPENING','findOne','921110JDbieP','Check-name','3920uIMBBD','./AssociateWhatsappQueue','__setModuleDefault','create'];a630_0x2972=function(){return _0x152b5c;};return a630_0x2972();}const Yup=__importStar(require(a630_0x7bd716(0x140))),AppError_1=__importDefault(require(a630_0x7bd716(0x12f))),Whatsapp_1=__importDefault(require(a630_0x7bd716(0x144))),Company_1=__importDefault(require(a630_0x7bd716(0x138))),Plan_1=__importDefault(require(a630_0x7bd716(0x11e))),AssociateWhatsappQueue_1=__importDefault(require(a630_0x7bd716(0x135))),CreateWhatsAppService=async({name:_0x4b2b9d,status:status=a630_0x7bd716(0x130),queueIds:queueIds=[],greetingMessage:_0x5f1b60,complationMessage:_0x231ec3,outOfHoursMessage:_0x4e0b0c,isDefault:isDefault=![],companyId:_0x27a73d,token:token='',provider:provider=a630_0x7bd716(0x11f),facebookUserId:_0x53bfeb,facebookUserToken:_0x2e6267,facebookPageUserId:_0x3a243e,tokenMeta:_0x876668,channel:channel=a630_0x7bd716(0x12c),maxUseBotQueues:_0x40a843,timeUseBotQueues:_0x1baf5a,expiresTicket:_0x5942ff,allowGroup:allowGroup=![],timeSendQueue:_0x57049f,sendIdQueue:_0x22091b,timeInactiveMessage:_0x1cad3f,inactiveMessage:_0x584ebf,ratingMessage:_0x4e3a90,maxUseBotQueuesNPS:_0x4ef9a0,expiresTicketNPS:_0x6922a5,whenExpiresTicket:_0x6d6b1b,expiresInactiveMessage:_0x1567bf,groupAsTicket:_0x35f0ab,importOldMessages:_0x20e01e,importRecentMessages:_0x4ce942,closedTicketsPostImported:_0x2de1c2,importOldMessagesGroups:_0x4cc14a,timeCreateNewTicket:_0x281bbe,integrationId:_0x19f90b,schedules:_0x1b61a7,promptId:_0x582569})=>{const _0x1583d2=a630_0x7bd716,_0x50056e=await Company_1[_0x1583d2(0x124)]['findOne']({'where':{'id':_0x27a73d},'include':[{'model':Plan_1['default'],'as':'plan'}]});if(_0x50056e!==null){const _0x566ba1=await Whatsapp_1[_0x1583d2(0x124)]['count']({'where':{'companyId':_0x27a73d,'channel':channel}});if(_0x566ba1>=_0x50056e[_0x1583d2(0x13d)][_0x1583d2(0x146)])throw new AppError_1[(_0x1583d2(0x124))](_0x1583d2(0x126)+_0x566ba1);}const _0x4d8a7a=Yup[_0x1583d2(0x13f)]()[_0x1583d2(0x13c)]({'name':Yup[_0x1583d2(0x145)]()['required']()['min'](0x2)['test'](_0x1583d2(0x133),_0x1583d2(0x143),async _0x1f8152=>{const _0x195dd6=_0x1583d2;if(!_0x1f8152)return![];const _0x5e420e=await Whatsapp_1['default'][_0x195dd6(0x131)]({'where':{'name':_0x1f8152,'channel':channel,'companyId':_0x27a73d}});return!_0x5e420e;}),'isDefault':Yup[_0x1583d2(0x141)]()[_0x1583d2(0x13b)]()});try{await _0x4d8a7a[_0x1583d2(0x128)]({'name':_0x4b2b9d,'status':status,'isDefault':isDefault});}catch(_0x103101){throw new AppError_1[(_0x1583d2(0x124))](_0x103101[_0x1583d2(0x14b)]);}const _0x142b99=await Whatsapp_1['default'][_0x1583d2(0x131)]({'where':{'companyId':_0x27a73d}});isDefault=channel===_0x1583d2(0x12c)?!_0x142b99:![];let _0x12f021=null;channel===_0x1583d2(0x12c)&&isDefault&&(_0x12f021=await Whatsapp_1[_0x1583d2(0x124)][_0x1583d2(0x131)]({'where':{'isDefault':!![],'companyId':_0x27a73d,'channel':channel}}),_0x12f021&&await _0x12f021['update']({'isDefault':![],'companyId':_0x27a73d}));if(queueIds['length']>0x1&&!_0x5f1b60)throw new AppError_1['default'](_0x1583d2(0x13e));if(token!==null&&token!==''){const _0x248a6a=Yup['object']()[_0x1583d2(0x13c)]({'token':Yup[_0x1583d2(0x145)]()[_0x1583d2(0x13b)]()[_0x1583d2(0x142)](0x2)['test']('Check-token',_0x1583d2(0x11d),async _0x2dac7e=>{const _0x22f272=_0x1583d2;if(!_0x2dac7e)return![];const _0x42ffe9=await Whatsapp_1[_0x22f272(0x124)][_0x22f272(0x131)]({'where':{'token':_0x2dac7e,'channel':channel}});return!_0x42ffe9;})});try{await _0x248a6a[_0x1583d2(0x128)]({'token':token});}catch(_0x3d9916){throw new AppError_1[(_0x1583d2(0x124))](_0x3d9916[_0x1583d2(0x14b)]);}}const _0x2edfcd=await Whatsapp_1[_0x1583d2(0x124)][_0x1583d2(0x137)]({'name':_0x4b2b9d,'status':status,'greetingMessage':_0x5f1b60,'complationMessage':_0x231ec3,'outOfHoursMessage':_0x4e0b0c,'ratingMessage':_0x4e3a90,'isDefault':isDefault,'companyId':_0x27a73d,'token':token,'provider':provider,'channel':channel,'facebookUserId':_0x53bfeb,'facebookUserToken':_0x2e6267,'facebookPageUserId':_0x3a243e,'tokenMeta':_0x876668,'maxUseBotQueues':_0x40a843,'timeUseBotQueues':_0x1baf5a,'expiresTicket':_0x5942ff,'allowGroup':allowGroup,'timeSendQueue':_0x57049f,'sendIdQueue':_0x22091b,'timeInactiveMessage':_0x1cad3f,'inactiveMessage':_0x584ebf,'maxUseBotQueuesNPS':_0x4ef9a0,'expiresTicketNPS':_0x6922a5,'whenExpiresTicket':_0x6d6b1b,'expiresInactiveMessage':_0x1567bf,'groupAsTicket':_0x35f0ab,'importOldMessages':_0x20e01e,'importRecentMessages':_0x4ce942,'closedTicketsPostImported':_0x2de1c2,'importOldMessagesGroups':_0x4cc14a,'timeCreateNewTicket':_0x281bbe,'integrationId':_0x19f90b,'schedules':_0x1b61a7,'promptId':_0x582569},{'include':['queues']});return await(0x0,AssociateWhatsappQueue_1[_0x1583d2(0x124)])(_0x2edfcd,queueIds),{'whatsapp':_0x2edfcd,'oldDefaultWhatsapp':_0x12f021};};exports[a630_0x7bd716(0x124)]=CreateWhatsAppService;