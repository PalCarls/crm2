'use strict';const a638_0xbd7e60=a638_0x5a37;(function(_0x544c3e,_0x524e3e){const _0x2db3bb=a638_0x5a37,_0x50efb2=_0x544c3e();while(!![]){try{const _0x2d2505=-parseInt(_0x2db3bb(0x1a7))/0x1*(parseInt(_0x2db3bb(0x1a4))/0x2)+parseInt(_0x2db3bb(0x1b5))/0x3*(-parseInt(_0x2db3bb(0x1a0))/0x4)+parseInt(_0x2db3bb(0x1c3))/0x5+-parseInt(_0x2db3bb(0x1b8))/0x6*(-parseInt(_0x2db3bb(0x1be))/0x7)+-parseInt(_0x2db3bb(0x1b2))/0x8+parseInt(_0x2db3bb(0x1ac))/0x9+parseInt(_0x2db3bb(0x1ad))/0xa;if(_0x2d2505===_0x524e3e)break;else _0x50efb2['push'](_0x50efb2['shift']());}catch(_0x38a60f){_0x50efb2['push'](_0x50efb2['shift']());}}}(a638_0x3bb5,0xe1e2b));var __createBinding=this&&this[a638_0xbd7e60(0x1b6)]||(Object[a638_0xbd7e60(0x1b9)]?function(_0x14864b,_0x2a553a,_0x47368d,_0x44bd85){const _0x603045=a638_0xbd7e60;if(_0x44bd85===undefined)_0x44bd85=_0x47368d;var _0xf05752=Object[_0x603045(0x1b4)](_0x2a553a,_0x47368d);(!_0xf05752||('get'in _0xf05752?!_0x2a553a[_0x603045(0x1ab)]:_0xf05752[_0x603045(0x1b7)]||_0xf05752[_0x603045(0x1bd)]))&&(_0xf05752={'enumerable':!![],'get':function(){return _0x2a553a[_0x47368d];}}),Object[_0x603045(0x1a3)](_0x14864b,_0x44bd85,_0xf05752);}:function(_0x448a36,_0x40e721,_0x465d12,_0x10b062){if(_0x10b062===undefined)_0x10b062=_0x465d12;_0x448a36[_0x10b062]=_0x40e721[_0x465d12];}),__setModuleDefault=this&&this[a638_0xbd7e60(0x1ae)]||(Object[a638_0xbd7e60(0x1b9)]?function(_0xd206aa,_0x20f8e1){const _0x432a27=a638_0xbd7e60;Object[_0x432a27(0x1a3)](_0xd206aa,_0x432a27(0x1b1),{'enumerable':!![],'value':_0x20f8e1});}:function(_0x16b817,_0x2425fb){const _0x13f249=a638_0xbd7e60;_0x16b817[_0x13f249(0x1b1)]=_0x2425fb;}),__importStar=this&&this[a638_0xbd7e60(0x1c2)]||function(_0x5da421){const _0x5e6158=a638_0xbd7e60;if(_0x5da421&&_0x5da421['__esModule'])return _0x5da421;var _0x4a90c1={};if(_0x5da421!=null){for(var _0x5b588b in _0x5da421)if(_0x5b588b!=='default'&&Object[_0x5e6158(0x1c0)][_0x5e6158(0x1a8)]['call'](_0x5da421,_0x5b588b))__createBinding(_0x4a90c1,_0x5da421,_0x5b588b);}return __setModuleDefault(_0x4a90c1,_0x5da421),_0x4a90c1;},__importDefault=this&&this[a638_0xbd7e60(0x1b0)]||function(_0x5861da){return _0x5861da&&_0x5861da['__esModule']?_0x5861da:{'default':_0x5861da};};function a638_0x5a37(_0x34c123,_0xd38444){const _0x3bb520=a638_0x3bb5();return a638_0x5a37=function(_0x5a3735,_0x4000a3){_0x5a3735=_0x5a3735-0x1a0;let _0x591e2e=_0x3bb520[_0x5a3735];return _0x591e2e;},a638_0x5a37(_0x34c123,_0xd38444);}Object[a638_0xbd7e60(0x1a3)](exports,a638_0xbd7e60(0x1ab),{'value':!![]});function a638_0x3bb5(){const _0x487c62=['hasOwnProperty','../../models/Whatsapp','yup','__esModule','5224986TuvFeu','12011800PBUsZx','__setModuleDefault','ERR_WAPP_GREETING_REQUIRED','__importDefault','default','13832184EvzwtS','length','getOwnPropertyDescriptor','1002rMZXtI','__createBinding','writable','196950UFQAsy','create','sequelize','shape','findOne','configurable','357bpDgkI','message','prototype','../../errors/AppError','__importStar','8230625FeJIEH','11836hgCcit','string','validate','defineProperty','2IYEQGf','update','boolean','1459378DxXsSe'];a638_0x3bb5=function(){return _0x487c62;};return a638_0x3bb5();}const Yup=__importStar(require(a638_0xbd7e60(0x1aa))),sequelize_1=require(a638_0xbd7e60(0x1ba)),AppError_1=__importDefault(require(a638_0xbd7e60(0x1c1))),Whatsapp_1=__importDefault(require(a638_0xbd7e60(0x1a9))),AssociateWhatsappQueue_1=__importDefault(require('./AssociateWhatsappQueue')),ShowWhatsAppServiceAdmin_1=__importDefault(require('./ShowWhatsAppServiceAdmin')),UpdateWhatsAppServiceAdmin=async({whatsappData:_0x50e7ba,whatsappId:_0x4a7206,companyId:_0x241683})=>{const _0x3f8dac=a638_0xbd7e60,_0x430045=Yup['object']()[_0x3f8dac(0x1bb)]({'name':Yup[_0x3f8dac(0x1a1)]()['min'](0x2),'status':Yup[_0x3f8dac(0x1a1)](),'isDefault':Yup[_0x3f8dac(0x1a6)]()}),{name:_0x5edc9d,status:_0x196514,isDefault:_0x2f0df6,session:_0x43b693,greetingMessage:_0xf7bd4a,complationMessage:_0x47cccc,outOfHoursMessage:_0x1bb4c9,queueIds:queueIds=[],token:_0xfd44e1,maxUseBotQueues:maxUseBotQueues=0x0,timeUseBotQueues:timeUseBotQueues=0x0,expiresTicket:expiresTicket=0x0,allowGroup:_0x4b828c,timeSendQueue:timeSendQueue=0x0,sendIdQueue:sendIdQueue=null,timeInactiveMessage:timeInactiveMessage=0x0,inactiveMessage:_0x59fd0e,ratingMessage:_0x29cb60,maxUseBotQueuesNPS:_0x320b30,expiresTicketNPS:expiresTicketNPS=0x0,whenExpiresTicket:_0x4a15aa,expiresInactiveMessage:_0x1a8ee1,groupAsTicket:_0x4beabf,importOldMessages:_0x1b8f25,importRecentMessages:_0x23f446,closedTicketsPostImported:_0x4d4e5a,importOldMessagesGroups:_0x5755eb,timeCreateNewTicket:timeCreateNewTicket=null,integrationId:_0x28bffa,schedules:_0x403c6b,promptId:_0x4f42cf,requestQR:requestQR=![]}=_0x50e7ba;try{await _0x430045[_0x3f8dac(0x1a2)]({'name':_0x5edc9d,'status':_0x196514,'isDefault':_0x2f0df6});}catch(_0xe01f1b){throw new AppError_1[(_0x3f8dac(0x1b1))](_0xe01f1b[_0x3f8dac(0x1bf)]);}if(queueIds[_0x3f8dac(0x1b3)]>0x1&&!_0xf7bd4a)throw new AppError_1['default'](_0x3f8dac(0x1af));let _0x484589=null;_0x2f0df6&&(_0x484589=await Whatsapp_1[_0x3f8dac(0x1b1)][_0x3f8dac(0x1bc)]({'where':{'isDefault':!![],'id':{[sequelize_1['Op']['not']]:_0x4a7206}}}),_0x484589&&await _0x484589['update']({'isDefault':![]}));const _0x1d47e0=await(0x0,ShowWhatsAppServiceAdmin_1[_0x3f8dac(0x1b1)])(_0x4a7206);return await _0x1d47e0[_0x3f8dac(0x1a5)]({'name':_0x5edc9d,'status':_0x196514,'session':_0x43b693,'greetingMessage':_0xf7bd4a,'complationMessage':_0x47cccc,'outOfHoursMessage':_0x1bb4c9,'isDefault':_0x2f0df6,'companyId':_0x241683,'token':_0xfd44e1,'maxUseBotQueues':maxUseBotQueues||0x0,'timeUseBotQueues':timeUseBotQueues||0x0,'expiresTicket':expiresTicket||0x0,'allowGroup':_0x4b828c,'timeSendQueue':timeSendQueue,'sendIdQueue':sendIdQueue,'timeInactiveMessage':timeInactiveMessage,'inactiveMessage':_0x59fd0e,'ratingMessage':_0x29cb60,'maxUseBotQueuesNPS':_0x320b30,'expiresTicketNPS':expiresTicketNPS,'whenExpiresTicket':_0x4a15aa,'expiresInactiveMessage':_0x1a8ee1,'groupAsTicket':_0x4beabf,'importOldMessages':_0x1b8f25,'importRecentMessages':_0x23f446,'closedTicketsPostImported':_0x4d4e5a,'importOldMessagesGroups':_0x5755eb,'timeCreateNewTicket':timeCreateNewTicket,'integrationId':_0x28bffa,'schedules':_0x403c6b,'promptId':_0x4f42cf}),!requestQR&&await(0x0,AssociateWhatsappQueue_1['default'])(_0x1d47e0,queueIds),{'whatsapp':_0x1d47e0,'oldDefaultWhatsapp':_0x484589};};exports[a638_0xbd7e60(0x1b1)]=UpdateWhatsAppServiceAdmin;