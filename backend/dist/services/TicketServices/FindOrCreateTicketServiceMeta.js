'use strict';function a520_0x3977(_0x4f8e2c,_0x237432){const _0x431c46=a520_0x431c();return a520_0x3977=function(_0x39771a,_0x26b259){_0x39771a=_0x39771a-0x180;let _0x19ace2=_0x431c46[_0x39771a];return _0x19ace2;},a520_0x3977(_0x4f8e2c,_0x237432);}const a520_0xae8420=a520_0x3977;(function(_0x5c97e1,_0x31c0f0){const _0x52a506=a520_0x3977,_0x5966da=_0x5c97e1();while(!![]){try{const _0x3e94ed=-parseInt(_0x52a506(0x191))/0x1+parseInt(_0x52a506(0x185))/0x2+-parseInt(_0x52a506(0x18c))/0x3*(-parseInt(_0x52a506(0x194))/0x4)+parseInt(_0x52a506(0x193))/0x5*(-parseInt(_0x52a506(0x189))/0x6)+parseInt(_0x52a506(0x192))/0x7*(-parseInt(_0x52a506(0x197))/0x8)+parseInt(_0x52a506(0x18f))/0x9*(-parseInt(_0x52a506(0x186))/0xa)+parseInt(_0x52a506(0x19c))/0xb*(parseInt(_0x52a506(0x18b))/0xc);if(_0x3e94ed===_0x31c0f0)break;else _0x5966da['push'](_0x5966da['shift']());}catch(_0x2c9621){_0x5966da['push'](_0x5966da['shift']());}}}(a520_0x431c,0x27690));var __importDefault=this&&this[a520_0xae8420(0x181)]||function(_0x3ed2a4){const _0x2d4c58=a520_0xae8420;return _0x3ed2a4&&_0x3ed2a4[_0x2d4c58(0x199)]?_0x3ed2a4:{'default':_0x3ed2a4};};Object['defineProperty'](exports,a520_0xae8420(0x199),{'value':!![]});const date_fns_1=require(a520_0xae8420(0x195)),sequelize_1=require(a520_0xae8420(0x18e)),Ticket_1=__importDefault(require(a520_0xae8420(0x187))),ShowTicketService_1=__importDefault(require(a520_0xae8420(0x188))),FindOrCreateATicketTrakingService_1=__importDefault(require(a520_0xae8420(0x196))),Setting_1=__importDefault(require(a520_0xae8420(0x183))),FindOrCreateTicketServiceMeta=async(_0x2ea92f,_0x1d66b3,_0x11b947,_0x9d4753,_0x5163dc)=>{const _0x5860c2=a520_0xae8420;let _0x47716e=await Ticket_1[_0x5860c2(0x18d)][_0x5860c2(0x19e)]({'where':{'status':{[sequelize_1['Op']['or']]:[_0x5860c2(0x182),_0x5860c2(0x19b),'closed']},'contactId':_0x2ea92f['id'],'companyId':_0x9d4753,'channel':_0x5163dc},'order':[['id','DESC']]});_0x47716e&&await _0x47716e['update']({'unreadMessages':_0x11b947});if(!_0x47716e){_0x47716e=await Ticket_1[_0x5860c2(0x18d)][_0x5860c2(0x19e)]({'where':{'contactId':_0x2ea92f['id'],'channel':_0x5163dc},'order':[[_0x5860c2(0x19f),_0x5860c2(0x19d)]]});_0x47716e&&(await _0x47716e[_0x5860c2(0x184)]({'status':'pending','userId':null,'unreadMessages':_0x11b947,'companyId':_0x9d4753,'channel':_0x5163dc}),await(0x0,FindOrCreateATicketTrakingService_1[_0x5860c2(0x18d)])({'ticketId':_0x47716e['id'],'companyId':_0x9d4753,'whatsappId':_0x47716e[_0x5860c2(0x198)],'userId':_0x47716e[_0x5860c2(0x1a0)]}));const _0x3133c6=await Setting_1['default'][_0x5860c2(0x19e)]({'where':{'key':_0x5860c2(0x19a)}}),_0x4a804d=_0x3133c6?parseInt(_0x3133c6[_0x5860c2(0x190)],0xa):0x1c20;}return!_0x47716e&&(_0x47716e=await Ticket_1[_0x5860c2(0x18d)][_0x5860c2(0x19e)]({'where':{'updatedAt':{[sequelize_1['Op'][_0x5860c2(0x18a)]]:[+(0x0,date_fns_1['subHours'])(new Date(),0x2),+new Date()]},'contactId':_0x2ea92f['id']},'order':[[_0x5860c2(0x19f),_0x5860c2(0x19d)]]}),_0x47716e&&(await _0x47716e[_0x5860c2(0x184)]({'status':_0x5860c2(0x19b),'userId':null,'unreadMessages':_0x11b947,'companyId':_0x9d4753,'channel':_0x5163dc}),await(0x0,FindOrCreateATicketTrakingService_1[_0x5860c2(0x18d)])({'ticketId':_0x47716e['id'],'companyId':_0x9d4753,'whatsappId':_0x47716e['whatsappId'],'userId':_0x47716e[_0x5860c2(0x1a0)]}))),!_0x47716e?(_0x47716e=await Ticket_1[_0x5860c2(0x18d)][_0x5860c2(0x180)]({'contactId':_0x2ea92f['id'],'status':_0x5860c2(0x19b),'isGroup':![],'unreadMessages':_0x11b947,'whatsappId':_0x1d66b3,'companyId':_0x9d4753,'channel':_0x5163dc}),await(0x0,FindOrCreateATicketTrakingService_1['default'])({'ticketId':_0x47716e['id'],'companyId':_0x9d4753,'whatsappId':_0x1d66b3,'userId':_0x47716e[_0x5860c2(0x1a0)]})):await _0x47716e['update']({'whatsappId':_0x1d66b3}),_0x47716e=await(0x0,ShowTicketService_1[_0x5860c2(0x18d)])(_0x47716e['id'],_0x9d4753),_0x47716e;};function a520_0x431c(){const _0x18f5d6=['timeCreateNewTicket','pending','49841cAEoPh','DESC','findOne','updatedAt','userId','create','__importDefault','open','../../models/Setting','update','63426HfnniH','923810bfRPml','../../models/Ticket','./ShowTicketService','24nxTTTl','between','1668SvJYeI','177609AGDJsf','default','sequelize','9QmMOZS','value','236091uxJDcF','7fWkEiq','327545sqRbPH','16EAmMtJ','date-fns','./FindOrCreateATicketTrakingService','1171216OMTmFa','whatsappId','__esModule'];a520_0x431c=function(){return _0x18f5d6;};return a520_0x431c();}exports[a520_0xae8420(0x18d)]=FindOrCreateTicketServiceMeta;