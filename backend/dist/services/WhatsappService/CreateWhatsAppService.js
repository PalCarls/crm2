'use strict';const a555_0x3513e8=a555_0x106f;(function(_0x3d68d8,_0x12abe7){const _0x3a679b=a555_0x106f,_0x1b516b=_0x3d68d8();while(!![]){try{const _0x4855e9=-parseInt(_0x3a679b(0xdb))/0x1*(-parseInt(_0x3a679b(0xd7))/0x2)+parseInt(_0x3a679b(0xd3))/0x3+parseInt(_0x3a679b(0xcc))/0x4*(-parseInt(_0x3a679b(0xd8))/0x5)+-parseInt(_0x3a679b(0xcf))/0x6+parseInt(_0x3a679b(0xdc))/0x7+-parseInt(_0x3a679b(0xe1))/0x8*(parseInt(_0x3a679b(0xd4))/0x9)+parseInt(_0x3a679b(0xdd))/0xa*(parseInt(_0x3a679b(0xb7))/0xb);if(_0x4855e9===_0x12abe7)break;else _0x1b516b['push'](_0x1b516b['shift']());}catch(_0x15a7dd){_0x1b516b['push'](_0x1b516b['shift']());}}}(a555_0x49db,0x6fbe1));var __createBinding=this&&this[a555_0x3513e8(0xda)]||(Object[a555_0x3513e8(0xc5)]?function(_0x53418b,_0xe8d2b4,_0x419737,_0x3675ad){const _0x23c2f3=a555_0x3513e8;if(_0x3675ad===undefined)_0x3675ad=_0x419737;var _0x3a684c=Object[_0x23c2f3(0xbe)](_0xe8d2b4,_0x419737);(!_0x3a684c||('get'in _0x3a684c?!_0xe8d2b4[_0x23c2f3(0xce)]:_0x3a684c['writable']||_0x3a684c[_0x23c2f3(0xe5)]))&&(_0x3a684c={'enumerable':!![],'get':function(){return _0xe8d2b4[_0x419737];}}),Object[_0x23c2f3(0xd5)](_0x53418b,_0x3675ad,_0x3a684c);}:function(_0x8c913e,_0x4fdaf7,_0x132c0f,_0x1ae493){if(_0x1ae493===undefined)_0x1ae493=_0x132c0f;_0x8c913e[_0x1ae493]=_0x4fdaf7[_0x132c0f];}),__setModuleDefault=this&&this[a555_0x3513e8(0xd9)]||(Object[a555_0x3513e8(0xc5)]?function(_0x1e14df,_0x1c8bfb){const _0x939765=a555_0x3513e8;Object[_0x939765(0xd5)](_0x1e14df,_0x939765(0xdf),{'enumerable':!![],'value':_0x1c8bfb});}:function(_0x16f762,_0x1e5615){const _0xc11446=a555_0x3513e8;_0x16f762[_0xc11446(0xdf)]=_0x1e5615;}),__importStar=this&&this[a555_0x3513e8(0xc4)]||function(_0x4d09f7){const _0x59e118=a555_0x3513e8;if(_0x4d09f7&&_0x4d09f7[_0x59e118(0xce)])return _0x4d09f7;var _0x35dc3d={};if(_0x4d09f7!=null){for(var _0x5e9f73 in _0x4d09f7)if(_0x5e9f73!=='default'&&Object[_0x59e118(0xcd)]['hasOwnProperty'][_0x59e118(0xd1)](_0x4d09f7,_0x5e9f73))__createBinding(_0x35dc3d,_0x4d09f7,_0x5e9f73);}return __setModuleDefault(_0x35dc3d,_0x4d09f7),_0x35dc3d;},__importDefault=this&&this[a555_0x3513e8(0xd0)]||function(_0x597268){const _0xbf4c0c=a555_0x3513e8;return _0x597268&&_0x597268[_0xbf4c0c(0xce)]?_0x597268:{'default':_0x597268};};function a555_0x106f(_0x147cf0,_0x465615){const _0x49db1b=a555_0x49db();return a555_0x106f=function(_0x106fae,_0x534ed7){_0x106fae=_0x106fae-0xb6;let _0x55cd2f=_0x49db1b[_0x106fae];return _0x55cd2f;},a555_0x106f(_0x147cf0,_0x465615);}Object[a555_0x3513e8(0xd5)](exports,a555_0x3513e8(0xce),{'value':!![]});const Yup=__importStar(require(a555_0x3513e8(0xb9))),AppError_1=__importDefault(require('../../errors/AppError')),Whatsapp_1=__importDefault(require(a555_0x3513e8(0xc6))),Company_1=__importDefault(require(a555_0x3513e8(0xbb))),Plan_1=__importDefault(require(a555_0x3513e8(0xc9))),AssociateWhatsappQueue_1=__importDefault(require(a555_0x3513e8(0xe4))),CreateWhatsAppService=async({name:_0x89fc33,status:status=a555_0x3513e8(0xe2),queueIds:queueIds=[],greetingMessage:_0x53b361,complationMessage:_0x1457c7,outOfHoursMessage:_0x2e2a27,isDefault:isDefault=![],companyId:_0x36da8f,token:token='',provider:provider=a555_0x3513e8(0xc0),facebookUserId:_0x193fc2,facebookUserToken:_0x5558f4,facebookPageUserId:_0x11032c,tokenMeta:_0x49f353,channel:channel=a555_0x3513e8(0xc2),maxUseBotQueues:_0x362b39,timeUseBotQueues:_0x570daa,expiresTicket:_0x106870,allowGroup:allowGroup=![],timeSendQueue:_0x589734,sendIdQueue:_0x86d0db,timeInactiveMessage:_0xe9b9e0,inactiveMessage:_0x304748,ratingMessage:_0x55f1e0,maxUseBotQueuesNPS:_0x1f7132,expiresTicketNPS:_0x5d310f,whenExpiresTicket:_0x339a9f,expiresInactiveMessage:_0x27b401,groupAsTicket:_0x3f9f47,importOldMessages:_0x3d4d42,importRecentMessages:_0x3b982b,closedTicketsPostImported:_0x2b78ce,importOldMessagesGroups:_0x513957,timeCreateNewTicket:_0x2e85d6})=>{const _0x4f3cbd=a555_0x3513e8,_0x57853b=await Company_1[_0x4f3cbd(0xdf)][_0x4f3cbd(0xc3)]({'where':{'id':_0x36da8f},'include':[{'model':Plan_1[_0x4f3cbd(0xdf)],'as':_0x4f3cbd(0xca)}]});if(_0x57853b!==null){const _0x348c47=await Whatsapp_1[_0x4f3cbd(0xdf)][_0x4f3cbd(0xb6)]({'where':{'companyId':_0x36da8f,'channel':channel}});if(_0x348c47>=_0x57853b['plan']['connections'])throw new AppError_1['default'](_0x4f3cbd(0xc7)+_0x348c47);}const _0x30de82=Yup['object']()['shape']({'name':Yup['string']()[_0x4f3cbd(0xe0)]()[_0x4f3cbd(0xc8)](0x2)[_0x4f3cbd(0xc1)](_0x4f3cbd(0xbf),_0x4f3cbd(0xde),async _0x2d0c86=>{const _0x4874e8=_0x4f3cbd;if(!_0x2d0c86)return![];const _0x5d5c5a=await Whatsapp_1[_0x4874e8(0xdf)]['findOne']({'where':{'name':_0x2d0c86,'channel':channel,'companyId':_0x36da8f}});return!_0x5d5c5a;}),'isDefault':Yup['boolean']()[_0x4f3cbd(0xe0)]()});try{await _0x30de82[_0x4f3cbd(0xba)]({'name':_0x89fc33,'status':status,'isDefault':isDefault});}catch(_0x1c267c){throw new AppError_1['default'](_0x1c267c['message']);}const _0x48fc26=await Whatsapp_1[_0x4f3cbd(0xdf)][_0x4f3cbd(0xc3)]({'where':{'companyId':_0x36da8f}});isDefault=channel==='whatsapp'?!_0x48fc26:![];let _0x171142=null;channel===_0x4f3cbd(0xc2)&&isDefault&&(_0x171142=await Whatsapp_1[_0x4f3cbd(0xdf)]['findOne']({'where':{'isDefault':!![],'companyId':_0x36da8f,'channel':channel}}),_0x171142&&await _0x171142[_0x4f3cbd(0xd6)]({'isDefault':![],'companyId':_0x36da8f}));if(queueIds[_0x4f3cbd(0xb8)]>0x1&&!_0x53b361)throw new AppError_1[(_0x4f3cbd(0xdf))](_0x4f3cbd(0xe6));if(token!==null&&token!==''){const _0x27771a=Yup[_0x4f3cbd(0xd2)]()[_0x4f3cbd(0xbc)]({'token':Yup['string']()['required']()[_0x4f3cbd(0xc8)](0x2)[_0x4f3cbd(0xc1)]('Check-token',_0x4f3cbd(0xcb),async _0x576177=>{const _0x40d406=_0x4f3cbd;if(!_0x576177)return![];const _0x5b9f76=await Whatsapp_1[_0x40d406(0xdf)]['findOne']({'where':{'token':_0x576177,'channel':channel}});return!_0x5b9f76;})});try{await _0x27771a[_0x4f3cbd(0xba)]({'token':token});}catch(_0x3482f6){throw new AppError_1[(_0x4f3cbd(0xdf))](_0x3482f6[_0x4f3cbd(0xe3)]);}}const _0x1ddc0d=await Whatsapp_1[_0x4f3cbd(0xdf)]['create']({'name':_0x89fc33,'status':status,'greetingMessage':_0x53b361,'complationMessage':_0x1457c7,'outOfHoursMessage':_0x2e2a27,'ratingMessage':_0x55f1e0,'isDefault':isDefault,'companyId':_0x36da8f,'token':token,'provider':provider,'channel':channel,'facebookUserId':_0x193fc2,'facebookUserToken':_0x5558f4,'facebookPageUserId':_0x11032c,'tokenMeta':_0x49f353,'maxUseBotQueues':_0x362b39,'timeUseBotQueues':_0x570daa,'expiresTicket':_0x106870,'allowGroup':allowGroup,'timeSendQueue':_0x589734,'sendIdQueue':_0x86d0db,'timeInactiveMessage':_0xe9b9e0,'inactiveMessage':_0x304748,'maxUseBotQueuesNPS':_0x1f7132,'expiresTicketNPS':_0x5d310f,'whenExpiresTicket':_0x339a9f,'expiresInactiveMessage':_0x27b401,'groupAsTicket':_0x3f9f47,'importOldMessages':_0x3d4d42,'importRecentMessages':_0x3b982b,'closedTicketsPostImported':_0x2b78ce,'importOldMessagesGroups':_0x513957,'timeCreateNewTicket':_0x2e85d6},{'include':[_0x4f3cbd(0xbd)]});return await(0x0,AssociateWhatsappQueue_1[_0x4f3cbd(0xdf)])(_0x1ddc0d,queueIds),{'whatsapp':_0x1ddc0d,'oldDefaultWhatsapp':_0x171142};};exports[a555_0x3513e8(0xdf)]=CreateWhatsAppService;function a555_0x49db(){const _0x4ca9ba=['./AssociateWhatsappQueue','configurable','ERR_WAPP_GREETING_REQUIRED','count','847HgwSZu','length','yup','validate','../../models/Company','shape','queues','getOwnPropertyDescriptor','Check-name','beta','test','whatsapp','findOne','__importStar','create','../../models/Whatsapp','Número\x20máximo\x20de\x20conexões\x20já\x20alcançado:\x20','min','../../models/Plan','plan','This\x20whatsapp\x20token\x20is\x20already\x20used.','100060QNdtng','prototype','__esModule','5410104PjiFVc','__importDefault','call','object','1497291rhVYtB','9OzNhzZ','defineProperty','update','34PfEtWR','115HwnHsj','__setModuleDefault','__createBinding','4957LBEiKp','2576378hdYMpl','203140TLsKex','Esse\x20nome\x20já\x20está\x20sendo\x20utilizado\x20por\x20outra\x20conexão','default','required','4646976zlVDxz','OPENING','message'];a555_0x49db=function(){return _0x4ca9ba;};return a555_0x49db();}