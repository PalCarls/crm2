'use strict';const a548_0x582e4d=a548_0x4a93;(function(_0x19750f,_0x15d77b){const _0x27d1cd=a548_0x4a93,_0x44822e=_0x19750f();while(!![]){try{const _0x53086a=-parseInt(_0x27d1cd(0x1a0))/0x1*(parseInt(_0x27d1cd(0x1a1))/0x2)+-parseInt(_0x27d1cd(0x18f))/0x3*(parseInt(_0x27d1cd(0x1b2))/0x4)+parseInt(_0x27d1cd(0x1aa))/0x5+parseInt(_0x27d1cd(0x1ad))/0x6*(parseInt(_0x27d1cd(0x199))/0x7)+-parseInt(_0x27d1cd(0x192))/0x8*(parseInt(_0x27d1cd(0x1ae))/0x9)+-parseInt(_0x27d1cd(0x18d))/0xa*(parseInt(_0x27d1cd(0x1a4))/0xb)+parseInt(_0x27d1cd(0x19d))/0xc;if(_0x53086a===_0x15d77b)break;else _0x44822e['push'](_0x44822e['shift']());}catch(_0x6312c8){_0x44822e['push'](_0x44822e['shift']());}}}(a548_0x3962,0xde568));function a548_0x4a93(_0x4e9702,_0x31d423){const _0x39629c=a548_0x3962();return a548_0x4a93=function(_0x4a93fa,_0x528b48){_0x4a93fa=_0x4a93fa-0x18d;let _0xc84582=_0x39629c[_0x4a93fa];return _0xc84582;},a548_0x4a93(_0x4e9702,_0x31d423);}var __importDefault=this&&this[a548_0x582e4d(0x1b0)]||function(_0x4972f7){const _0x20a65f=a548_0x582e4d;return _0x4972f7&&_0x4972f7[_0x20a65f(0x197)]?_0x4972f7:{'default':_0x4972f7};};Object[a548_0x582e4d(0x1a3)](exports,a548_0x582e4d(0x197),{'value':!![]});const sequelize_1=require(a548_0x582e4d(0x195)),date_fns_1=require(a548_0x582e4d(0x194)),Ticket_1=__importDefault(require(a548_0x582e4d(0x19b))),User_1=__importDefault(require('../../models/User')),Contact_1=__importDefault(require(a548_0x582e4d(0x1a2))),Queue_1=__importDefault(require(a548_0x582e4d(0x1b1))),lodash_1=require(a548_0x582e4d(0x196)),TicketsQueuesService=async({dateStart:_0x9c226b,dateEnd:_0x3b7054,status:_0x1b663c,userId:_0x2aa065,queuesIds:_0x464120,companyId:_0x568c72,showAll:_0x1b5a06,profile:_0x2ad29d})=>{const _0x5d157b=a548_0x582e4d;let _0xf8ec5={};const _0x16c512=[{'model':Contact_1[_0x5d157b(0x18e)],'as':'contact','attributes':['id','name',_0x5d157b(0x1ac),_0x5d157b(0x1b3)]},{'model':User_1[_0x5d157b(0x18e)],'as':'user','attributes':['id',_0x5d157b(0x198),'profile']},{'model':Queue_1[_0x5d157b(0x18e)],'as':'queue'}];if(_0x1b663c){const _0x131e9c=[],_0x251932=await Ticket_1[_0x5d157b(0x18e)][_0x5d157b(0x1a7)]({'where':{'status':_0x5d157b(0x19e)},'group':[_0x5d157b(0x1af),_0x5d157b(0x1a8),_0x5d157b(0x1ab),_0x5d157b(0x1a5)],'attributes':[_0x5d157b(0x1af),'contactId','queueId',_0x5d157b(0x1a5),[(0x0,sequelize_1['fn'])(_0x5d157b(0x1a6),(0x0,sequelize_1[_0x5d157b(0x19f)])('id')),'id']]});_0x251932&&_0x131e9c[_0x5d157b(0x19c)](_0x251932['map'](_0x346383=>_0x346383['id']));const _0x3c99e8=(0x0,lodash_1[_0x5d157b(0x1b4)])(..._0x131e9c);_0xf8ec5={..._0xf8ec5,'id':{[sequelize_1['Op']['in']]:_0x3c99e8}};}_0x2ad29d==='user'&&(_0xf8ec5={..._0xf8ec5,'userId':_0x2aa065});_0x9c226b&&_0x3b7054&&(_0xf8ec5={..._0xf8ec5,'createdAt':{[sequelize_1['Op'][_0x5d157b(0x191)]]:[+(0x0,date_fns_1['startOfDay'])((0x0,date_fns_1[_0x5d157b(0x193)])(_0x9c226b)),+(0x0,date_fns_1[_0x5d157b(0x19a)])((0x0,date_fns_1[_0x5d157b(0x193)])(_0x3b7054))]}});const _0x4ab3b6=await Ticket_1[_0x5d157b(0x18e)]['findAll']({'where':{..._0xf8ec5,'companyId':_0x568c72},'include':_0x16c512,'order':[[_0x5d157b(0x190),_0x5d157b(0x1a9)]]});return _0x4ab3b6;};exports[a548_0x582e4d(0x18e)]=TicketsQueuesService;function a548_0x3962(){const _0x797d6d=['sequelize','lodash','__esModule','name','14gFCozE','endOfDay','../../models/Ticket','push','29090832XYtlox','open','col','10393MiBAIY','130nPcouE','../../models/Contact','defineProperty','88XRJczY','whatsappId','max','findAll','contactId','DESC','6061485YZbqRw','queueId','number','2994858iLEWnY','9OnvWNm','companyId','__importDefault','../../models/Queue','4UuIoKo','profilePicUrl','intersection','1958830OGcoWT','default','2038503yNibcd','updatedAt','between','6416104VeRPVG','parseISO','date-fns'];a548_0x3962=function(){return _0x797d6d;};return a548_0x3962();}