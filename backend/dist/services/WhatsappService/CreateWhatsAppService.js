<<<<<<< HEAD
'use strict';const a619_0x2c2054=a619_0x3c71;(function(_0x31d744,_0x35202d){const _0x563141=a619_0x3c71,_0x25bdfc=_0x31d744();while(!![]){try{const _0x32c365=-parseInt(_0x563141(0x1f4))/0x1+-parseInt(_0x563141(0x20f))/0x2+-parseInt(_0x563141(0x205))/0x3+-parseInt(_0x563141(0x218))/0x4*(parseInt(_0x563141(0x214))/0x5)+parseInt(_0x563141(0x211))/0x6+parseInt(_0x563141(0x1fa))/0x7*(-parseInt(_0x563141(0x1ff))/0x8)+parseInt(_0x563141(0x1f8))/0x9;if(_0x32c365===_0x35202d)break;else _0x25bdfc['push'](_0x25bdfc['shift']());}catch(_0x35f717){_0x25bdfc['push'](_0x25bdfc['shift']());}}}(a619_0x18aa,0x4409b));function a619_0x3c71(_0x33750a,_0x124823){const _0x18aac1=a619_0x18aa();return a619_0x3c71=function(_0x3c71b4,_0x127cda){_0x3c71b4=_0x3c71b4-0x1eb;let _0x2e0361=_0x18aac1[_0x3c71b4];return _0x2e0361;},a619_0x3c71(_0x33750a,_0x124823);}var __createBinding=this&&this[a619_0x2c2054(0x212)]||(Object[a619_0x2c2054(0x1ec)]?function(_0x1f435c,_0x3f002c,_0x38ef6c,_0x470a6a){const _0x1706ad=a619_0x2c2054;if(_0x470a6a===undefined)_0x470a6a=_0x38ef6c;var _0x33fd0f=Object['getOwnPropertyDescriptor'](_0x3f002c,_0x38ef6c);(!_0x33fd0f||(_0x1706ad(0x20a)in _0x33fd0f?!_0x3f002c[_0x1706ad(0x207)]:_0x33fd0f['writable']||_0x33fd0f['configurable']))&&(_0x33fd0f={'enumerable':!![],'get':function(){return _0x3f002c[_0x38ef6c];}}),Object[_0x1706ad(0x206)](_0x1f435c,_0x470a6a,_0x33fd0f);}:function(_0xd41d79,_0x324d33,_0x3e18dd,_0xd66b4b){if(_0xd66b4b===undefined)_0xd66b4b=_0x3e18dd;_0xd41d79[_0xd66b4b]=_0x324d33[_0x3e18dd];}),__setModuleDefault=this&&this[a619_0x2c2054(0x1f7)]||(Object[a619_0x2c2054(0x1ec)]?function(_0xddc127,_0x2b2e7e){const _0x80c636=a619_0x2c2054;Object[_0x80c636(0x206)](_0xddc127,_0x80c636(0x1f6),{'enumerable':!![],'value':_0x2b2e7e});}:function(_0x3682a8,_0x15b610){_0x3682a8['default']=_0x15b610;}),__importStar=this&&this['__importStar']||function(_0x5a0eac){const _0x429712=a619_0x2c2054;if(_0x5a0eac&&_0x5a0eac['__esModule'])return _0x5a0eac;var _0x5a8236={};if(_0x5a0eac!=null){for(var _0x5c1823 in _0x5a0eac)if(_0x5c1823!==_0x429712(0x1f6)&&Object[_0x429712(0x1f5)][_0x429712(0x1ef)][_0x429712(0x20d)](_0x5a0eac,_0x5c1823))__createBinding(_0x5a8236,_0x5a0eac,_0x5c1823);}return __setModuleDefault(_0x5a8236,_0x5a0eac),_0x5a8236;},__importDefault=this&&this[a619_0x2c2054(0x1eb)]||function(_0x32989b){const _0x19f66d=a619_0x2c2054;return _0x32989b&&_0x32989b[_0x19f66d(0x207)]?_0x32989b:{'default':_0x32989b};};Object['defineProperty'](exports,a619_0x2c2054(0x207),{'value':!![]});const Yup=__importStar(require(a619_0x2c2054(0x1f3))),AppError_1=__importDefault(require(a619_0x2c2054(0x1fd))),Whatsapp_1=__importDefault(require(a619_0x2c2054(0x203))),Company_1=__importDefault(require(a619_0x2c2054(0x201))),Plan_1=__importDefault(require(a619_0x2c2054(0x1fc))),AssociateWhatsappQueue_1=__importDefault(require(a619_0x2c2054(0x1f1))),CreateWhatsAppService=async({name:_0x3b2e6c,status:status=a619_0x2c2054(0x217),queueIds:queueIds=[],greetingMessage:_0x3336c9,complationMessage:_0x37d9fa,outOfHoursMessage:_0x27a5ad,isDefault:isDefault=![],companyId:_0x5d6bef,token:token='',provider:provider=a619_0x2c2054(0x1ed),facebookUserId:_0x3e28db,facebookUserToken:_0x20b915,facebookPageUserId:_0x428f53,tokenMeta:_0x2ffc93,channel:channel=a619_0x2c2054(0x1fe),maxUseBotQueues:_0x15f158,timeUseBotQueues:_0x522c9a,expiresTicket:_0x6bc232,allowGroup:allowGroup=![],timeSendQueue:_0x11f83c,sendIdQueue:_0x519ab4,timeInactiveMessage:_0x557618,inactiveMessage:_0x2e65e4,ratingMessage:_0x5c09f3,maxUseBotQueuesNPS:_0x4efe06,expiresTicketNPS:_0x1df39b,whenExpiresTicket:_0x58212c,expiresInactiveMessage:_0x1888ca,groupAsTicket:_0xb0175,importOldMessages:_0xcf7e48,importRecentMessages:_0x2631ff,closedTicketsPostImported:_0x551702,importOldMessagesGroups:_0x5097fc,timeCreateNewTicket:_0x2de60c,integrationId:_0x336b06,schedules:_0x5c17b1,promptId:_0x28f9cf})=>{const _0x40edf8=a619_0x2c2054,_0x1c4bdc=await Company_1[_0x40edf8(0x1f6)][_0x40edf8(0x208)]({'where':{'id':_0x5d6bef},'include':[{'model':Plan_1[_0x40edf8(0x1f6)],'as':_0x40edf8(0x1ee)}]});if(_0x1c4bdc!==null){const _0x139a9a=await Whatsapp_1[_0x40edf8(0x1f6)]['count']({'where':{'companyId':_0x5d6bef,'channel':channel}});if(_0x139a9a>=_0x1c4bdc[_0x40edf8(0x1ee)]['connections'])throw new AppError_1[(_0x40edf8(0x1f6))]('Número\x20máximo\x20de\x20conexões\x20já\x20alcançado:\x20'+_0x139a9a);}const _0x335024=Yup[_0x40edf8(0x1fb)]()[_0x40edf8(0x200)]({'name':Yup['string']()['required']()[_0x40edf8(0x20b)](0x2)[_0x40edf8(0x1f2)](_0x40edf8(0x20c),_0x40edf8(0x20e),async _0x3534ea=>{const _0x1e9dcd=_0x40edf8;if(!_0x3534ea)return![];const _0x2f0dfe=await Whatsapp_1['default'][_0x1e9dcd(0x208)]({'where':{'name':_0x3534ea,'channel':channel,'companyId':_0x5d6bef}});return!_0x2f0dfe;}),'isDefault':Yup[_0x40edf8(0x21a)]()['required']()});try{await _0x335024[_0x40edf8(0x209)]({'name':_0x3b2e6c,'status':status,'isDefault':isDefault});}catch(_0x2249a3){throw new AppError_1[(_0x40edf8(0x1f6))](_0x2249a3[_0x40edf8(0x1f0)]);}const _0xecb7ee=await Whatsapp_1[_0x40edf8(0x1f6)]['findOne']({'where':{'companyId':_0x5d6bef}});isDefault=channel===_0x40edf8(0x1fe)?!_0xecb7ee:![];let _0x55c811=null;channel===_0x40edf8(0x1fe)&&isDefault&&(_0x55c811=await Whatsapp_1[_0x40edf8(0x1f6)][_0x40edf8(0x208)]({'where':{'isDefault':!![],'companyId':_0x5d6bef,'channel':channel}}),_0x55c811&&await _0x55c811[_0x40edf8(0x204)]({'isDefault':![],'companyId':_0x5d6bef}));if(queueIds[_0x40edf8(0x202)]>0x1&&!_0x3336c9)throw new AppError_1[(_0x40edf8(0x1f6))](_0x40edf8(0x219));if(token!==null&&token!==''){const _0x22742f=Yup[_0x40edf8(0x1fb)]()[_0x40edf8(0x200)]({'token':Yup[_0x40edf8(0x210)]()[_0x40edf8(0x1f9)]()['min'](0x2)['test'](_0x40edf8(0x216),_0x40edf8(0x213),async _0x2f7cda=>{const _0x4e59f7=_0x40edf8;if(!_0x2f7cda)return![];const _0x22a09b=await Whatsapp_1['default'][_0x4e59f7(0x208)]({'where':{'token':_0x2f7cda,'channel':channel}});return!_0x22a09b;})});try{await _0x22742f[_0x40edf8(0x209)]({'token':token});}catch(_0x178a98){throw new AppError_1[(_0x40edf8(0x1f6))](_0x178a98['message']);}}const _0x1a927a=await Whatsapp_1[_0x40edf8(0x1f6)][_0x40edf8(0x1ec)]({'name':_0x3b2e6c,'status':status,'greetingMessage':_0x3336c9,'complationMessage':_0x37d9fa,'outOfHoursMessage':_0x27a5ad,'ratingMessage':_0x5c09f3,'isDefault':isDefault,'companyId':_0x5d6bef,'token':token,'provider':provider,'channel':channel,'facebookUserId':_0x3e28db,'facebookUserToken':_0x20b915,'facebookPageUserId':_0x428f53,'tokenMeta':_0x2ffc93,'maxUseBotQueues':_0x15f158,'timeUseBotQueues':_0x522c9a,'expiresTicket':_0x6bc232,'allowGroup':allowGroup,'timeSendQueue':_0x11f83c,'sendIdQueue':_0x519ab4,'timeInactiveMessage':_0x557618,'inactiveMessage':_0x2e65e4,'maxUseBotQueuesNPS':_0x4efe06,'expiresTicketNPS':_0x1df39b,'whenExpiresTicket':_0x58212c,'expiresInactiveMessage':_0x1888ca,'groupAsTicket':_0xb0175,'importOldMessages':_0xcf7e48,'importRecentMessages':_0x2631ff,'closedTicketsPostImported':_0x551702,'importOldMessagesGroups':_0x5097fc,'timeCreateNewTicket':_0x2de60c,'integrationId':_0x336b06,'schedules':_0x5c17b1,'promptId':_0x28f9cf},{'include':[_0x40edf8(0x215)]});return await(0x0,AssociateWhatsappQueue_1['default'])(_0x1a927a,queueIds),{'whatsapp':_0x1a927a,'oldDefaultWhatsapp':_0x55c811};};exports['default']=CreateWhatsAppService;function a619_0x18aa(){const _0x8cb025=['beta','plan','hasOwnProperty','message','./AssociateWhatsappQueue','test','yup','476395qUvIfw','prototype','default','__setModuleDefault','19669455mhojyZ','required','2004457gUQbZm','object','../../models/Plan','../../errors/AppError','whatsapp','8jMjeNm','shape','../../models/Company','length','../../models/Whatsapp','update','1269582NKXjeU','defineProperty','__esModule','findOne','validate','get','min','Check-name','call','Esse\x20nome\x20já\x20está\x20sendo\x20utilizado\x20por\x20outra\x20conexão','599856aNyZjV','string','170394VetpJy','__createBinding','This\x20whatsapp\x20token\x20is\x20already\x20used.','5mjgQQy','queues','Check-token','OPENING','1797372rYYEkM','ERR_WAPP_GREETING_REQUIRED','boolean','__importDefault','create'];a619_0x18aa=function(){return _0x8cb025;};return a619_0x18aa();}
=======
'use strict';const a618_0xb7e1cb=a618_0x19a3;(function(_0x546392,_0x3de81e){const _0x1454ff=a618_0x19a3,_0x5bec8b=_0x546392();while(!![]){try{const _0x1dcd19=-parseInt(_0x1454ff(0x150))/0x1*(parseInt(_0x1454ff(0x14e))/0x2)+parseInt(_0x1454ff(0x14a))/0x3+parseInt(_0x1454ff(0x174))/0x4+parseInt(_0x1454ff(0x153))/0x5*(-parseInt(_0x1454ff(0x155))/0x6)+-parseInt(_0x1454ff(0x164))/0x7*(parseInt(_0x1454ff(0x178))/0x8)+parseInt(_0x1454ff(0x172))/0x9*(parseInt(_0x1454ff(0x15a))/0xa)+parseInt(_0x1454ff(0x169))/0xb;if(_0x1dcd19===_0x3de81e)break;else _0x5bec8b['push'](_0x5bec8b['shift']());}catch(_0x546f14){_0x5bec8b['push'](_0x5bec8b['shift']());}}}(a618_0x47cc,0x2704f));function a618_0x47cc(){const _0x4af0f4=['7czlnvS','get','beta','findOne','validate','3871648dIDgQk','../../models/Whatsapp','length','update','plan','object','OPENING','connections','default','24210XbedFy','../../errors/AppError','460548sFGcLw','string','yup','create','1223080jnvReV','min','./AssociateWhatsappQueue','queues','shape','377616yuNRUo','This\x20whatsapp\x20token\x20is\x20already\x20used.','count','Check-name','94PhdRwy','../../models/Company','2704KDBjdQ','Check-token','__esModule','5PNSZBi','__importStar','935226OZTbcQ','__importDefault','test','getOwnPropertyDescriptor','message','10GWnHBJ','writable','required','Esse\x20nome\x20já\x20está\x20sendo\x20utilizado\x20por\x20outra\x20conexão','__setModuleDefault','defineProperty','whatsapp','__createBinding','ERR_WAPP_GREETING_REQUIRED','../../models/Plan'];a618_0x47cc=function(){return _0x4af0f4;};return a618_0x47cc();}var __createBinding=this&&this[a618_0xb7e1cb(0x161)]||(Object[a618_0xb7e1cb(0x177)]?function(_0x46d152,_0x3fa1b5,_0x23c33a,_0xa7a7b7){const _0x1a6247=a618_0xb7e1cb;if(_0xa7a7b7===undefined)_0xa7a7b7=_0x23c33a;var _0x4c4eb5=Object[_0x1a6247(0x158)](_0x3fa1b5,_0x23c33a);(!_0x4c4eb5||(_0x1a6247(0x165)in _0x4c4eb5?!_0x3fa1b5['__esModule']:_0x4c4eb5[_0x1a6247(0x15b)]||_0x4c4eb5['configurable']))&&(_0x4c4eb5={'enumerable':!![],'get':function(){return _0x3fa1b5[_0x23c33a];}}),Object['defineProperty'](_0x46d152,_0xa7a7b7,_0x4c4eb5);}:function(_0x52cfb4,_0x4bddfd,_0x14d5d6,_0x42579a){if(_0x42579a===undefined)_0x42579a=_0x14d5d6;_0x52cfb4[_0x42579a]=_0x4bddfd[_0x14d5d6];}),__setModuleDefault=this&&this[a618_0xb7e1cb(0x15e)]||(Object[a618_0xb7e1cb(0x177)]?function(_0x38a8a9,_0x2a570b){const _0x2579cc=a618_0xb7e1cb;Object['defineProperty'](_0x38a8a9,_0x2579cc(0x171),{'enumerable':!![],'value':_0x2a570b});}:function(_0x3bbcbe,_0x389404){const _0x4a9194=a618_0xb7e1cb;_0x3bbcbe[_0x4a9194(0x171)]=_0x389404;}),__importStar=this&&this[a618_0xb7e1cb(0x154)]||function(_0x41ee65){const _0x32a1eb=a618_0xb7e1cb;if(_0x41ee65&&_0x41ee65[_0x32a1eb(0x152)])return _0x41ee65;var _0x4f6c04={};if(_0x41ee65!=null){for(var _0x40e70b in _0x41ee65)if(_0x40e70b!==_0x32a1eb(0x171)&&Object['prototype']['hasOwnProperty']['call'](_0x41ee65,_0x40e70b))__createBinding(_0x4f6c04,_0x41ee65,_0x40e70b);}return __setModuleDefault(_0x4f6c04,_0x41ee65),_0x4f6c04;},__importDefault=this&&this[a618_0xb7e1cb(0x156)]||function(_0x3b1bd1){const _0x3b63cf=a618_0xb7e1cb;return _0x3b1bd1&&_0x3b1bd1[_0x3b63cf(0x152)]?_0x3b1bd1:{'default':_0x3b1bd1};};Object[a618_0xb7e1cb(0x15f)](exports,a618_0xb7e1cb(0x152),{'value':!![]});function a618_0x19a3(_0x7575ed,_0x1c551d){const _0x47cc80=a618_0x47cc();return a618_0x19a3=function(_0x19a39c,_0x2492f7){_0x19a39c=_0x19a39c-0x14a;let _0x53c252=_0x47cc80[_0x19a39c];return _0x53c252;},a618_0x19a3(_0x7575ed,_0x1c551d);}const Yup=__importStar(require(a618_0xb7e1cb(0x176))),AppError_1=__importDefault(require(a618_0xb7e1cb(0x173))),Whatsapp_1=__importDefault(require(a618_0xb7e1cb(0x16a))),Company_1=__importDefault(require(a618_0xb7e1cb(0x14f))),Plan_1=__importDefault(require(a618_0xb7e1cb(0x163))),AssociateWhatsappQueue_1=__importDefault(require(a618_0xb7e1cb(0x17a))),CreateWhatsAppService=async({name:_0x5ee733,status:status=a618_0xb7e1cb(0x16f),queueIds:queueIds=[],greetingMessage:_0x351473,complationMessage:_0x4a7e38,outOfHoursMessage:_0x41592b,isDefault:isDefault=![],companyId:_0xc135cc,token:token='',provider:provider=a618_0xb7e1cb(0x166),facebookUserId:_0x45fe67,facebookUserToken:_0x2e1134,facebookPageUserId:_0x263a40,tokenMeta:_0x3f75b8,channel:channel=a618_0xb7e1cb(0x160),maxUseBotQueues:_0x6a0907,timeUseBotQueues:_0xc61ad9,expiresTicket:_0x180abf,allowGroup:allowGroup=![],timeSendQueue:_0xc9a95c,sendIdQueue:_0x3786de,timeInactiveMessage:_0x35f525,inactiveMessage:_0x55777a,ratingMessage:_0x167059,maxUseBotQueuesNPS:_0x4fb075,expiresTicketNPS:_0x47f98c,whenExpiresTicket:_0x52f471,expiresInactiveMessage:_0x2c3ec5,groupAsTicket:_0x3c232d,importOldMessages:_0x1b1402,importRecentMessages:_0x583c66,closedTicketsPostImported:_0x13089f,importOldMessagesGroups:_0x56ee98,timeCreateNewTicket:_0xf3cafe,integrationId:_0x10c1e8,schedules:_0x2d045b,promptId:_0x286fae})=>{const _0x39d0e1=a618_0xb7e1cb,_0x246a92=await Company_1['default'][_0x39d0e1(0x167)]({'where':{'id':_0xc135cc},'include':[{'model':Plan_1[_0x39d0e1(0x171)],'as':_0x39d0e1(0x16d)}]});if(_0x246a92!==null){const _0x4b76f7=await Whatsapp_1[_0x39d0e1(0x171)][_0x39d0e1(0x14c)]({'where':{'companyId':_0xc135cc,'channel':channel}});if(_0x4b76f7>=_0x246a92[_0x39d0e1(0x16d)][_0x39d0e1(0x170)])throw new AppError_1[(_0x39d0e1(0x171))]('Número\x20máximo\x20de\x20conexões\x20já\x20alcançado:\x20'+_0x4b76f7);}const _0x2ea851=Yup[_0x39d0e1(0x16e)]()[_0x39d0e1(0x17c)]({'name':Yup[_0x39d0e1(0x175)]()[_0x39d0e1(0x15c)]()[_0x39d0e1(0x179)](0x2)[_0x39d0e1(0x157)](_0x39d0e1(0x14d),_0x39d0e1(0x15d),async _0x9f37e8=>{const _0x283200=_0x39d0e1;if(!_0x9f37e8)return![];const _0x5dfafc=await Whatsapp_1[_0x283200(0x171)][_0x283200(0x167)]({'where':{'name':_0x9f37e8,'channel':channel,'companyId':_0xc135cc}});return!_0x5dfafc;}),'isDefault':Yup['boolean']()['required']()});try{await _0x2ea851[_0x39d0e1(0x168)]({'name':_0x5ee733,'status':status,'isDefault':isDefault});}catch(_0x5438c0){throw new AppError_1[(_0x39d0e1(0x171))](_0x5438c0[_0x39d0e1(0x159)]);}const _0x51dcee=await Whatsapp_1[_0x39d0e1(0x171)][_0x39d0e1(0x167)]({'where':{'companyId':_0xc135cc}});isDefault=channel===_0x39d0e1(0x160)?!_0x51dcee:![];let _0x2edcd1=null;channel===_0x39d0e1(0x160)&&isDefault&&(_0x2edcd1=await Whatsapp_1['default'][_0x39d0e1(0x167)]({'where':{'isDefault':!![],'companyId':_0xc135cc,'channel':channel}}),_0x2edcd1&&await _0x2edcd1[_0x39d0e1(0x16c)]({'isDefault':![],'companyId':_0xc135cc}));if(queueIds[_0x39d0e1(0x16b)]>0x1&&!_0x351473)throw new AppError_1[(_0x39d0e1(0x171))](_0x39d0e1(0x162));if(token!==null&&token!==''){const _0x7fb3f7=Yup[_0x39d0e1(0x16e)]()[_0x39d0e1(0x17c)]({'token':Yup[_0x39d0e1(0x175)]()['required']()[_0x39d0e1(0x179)](0x2)[_0x39d0e1(0x157)](_0x39d0e1(0x151),_0x39d0e1(0x14b),async _0x4b304f=>{const _0x5c0956=_0x39d0e1;if(!_0x4b304f)return![];const _0x2e4bab=await Whatsapp_1[_0x5c0956(0x171)][_0x5c0956(0x167)]({'where':{'token':_0x4b304f,'channel':channel}});return!_0x2e4bab;})});try{await _0x7fb3f7['validate']({'token':token});}catch(_0x113a8f){throw new AppError_1[(_0x39d0e1(0x171))](_0x113a8f[_0x39d0e1(0x159)]);}}const _0x27c720=await Whatsapp_1[_0x39d0e1(0x171)][_0x39d0e1(0x177)]({'name':_0x5ee733,'status':status,'greetingMessage':_0x351473,'complationMessage':_0x4a7e38,'outOfHoursMessage':_0x41592b,'ratingMessage':_0x167059,'isDefault':isDefault,'companyId':_0xc135cc,'token':token,'provider':provider,'channel':channel,'facebookUserId':_0x45fe67,'facebookUserToken':_0x2e1134,'facebookPageUserId':_0x263a40,'tokenMeta':_0x3f75b8,'maxUseBotQueues':_0x6a0907,'timeUseBotQueues':_0xc61ad9,'expiresTicket':_0x180abf,'allowGroup':allowGroup,'timeSendQueue':_0xc9a95c,'sendIdQueue':_0x3786de,'timeInactiveMessage':_0x35f525,'inactiveMessage':_0x55777a,'maxUseBotQueuesNPS':_0x4fb075,'expiresTicketNPS':_0x47f98c,'whenExpiresTicket':_0x52f471,'expiresInactiveMessage':_0x2c3ec5,'groupAsTicket':_0x3c232d,'importOldMessages':_0x1b1402,'importRecentMessages':_0x583c66,'closedTicketsPostImported':_0x13089f,'importOldMessagesGroups':_0x56ee98,'timeCreateNewTicket':_0xf3cafe,'integrationId':_0x10c1e8,'schedules':_0x2d045b,'promptId':_0x286fae},{'include':[_0x39d0e1(0x17b)]});return await(0x0,AssociateWhatsappQueue_1[_0x39d0e1(0x171)])(_0x27c720,queueIds),{'whatsapp':_0x27c720,'oldDefaultWhatsapp':_0x2edcd1};};exports[a618_0xb7e1cb(0x171)]=CreateWhatsAppService;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
