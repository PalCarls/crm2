'use strict';const a504_0x5eda43=a504_0x12fe;(function(_0x390a51,_0x4d10f3){const _0x17e3a4=a504_0x12fe,_0x5def89=_0x390a51();while(!![]){try{const _0x5e85b2=-parseInt(_0x17e3a4(0x169))/0x1+-parseInt(_0x17e3a4(0x165))/0x2*(-parseInt(_0x17e3a4(0x162))/0x3)+-parseInt(_0x17e3a4(0x14d))/0x4+parseInt(_0x17e3a4(0x14f))/0x5+-parseInt(_0x17e3a4(0x15e))/0x6+parseInt(_0x17e3a4(0x161))/0x7+-parseInt(_0x17e3a4(0x16e))/0x8*(-parseInt(_0x17e3a4(0x15d))/0x9);if(_0x5e85b2===_0x4d10f3)break;else _0x5def89['push'](_0x5def89['shift']());}catch(_0x10d975){_0x5def89['push'](_0x5def89['shift']());}}}(a504_0x1cc8,0xe07df));var __importDefault=this&&this[a504_0x5eda43(0x16d)]||function(_0x3efb30){const _0x476f93=a504_0x5eda43;return _0x3efb30&&_0x3efb30[_0x476f93(0x166)]?_0x3efb30:{'default':_0x3efb30};};Object[a504_0x5eda43(0x168)](exports,a504_0x5eda43(0x166),{'value':!![]});function a504_0x12fe(_0x961706,_0x15059d){const _0x1cc842=a504_0x1cc8();return a504_0x12fe=function(_0x12fe69,_0x181482){_0x12fe69=_0x12fe69-0x14a;let _0x76f258=_0x1cc842[_0x12fe69];return _0x76f258;},a504_0x12fe(_0x961706,_0x15059d);}const AppError_1=__importDefault(require(a504_0x5eda43(0x156))),Message_1=__importDefault(require(a504_0x5eda43(0x151))),Ticket_1=__importDefault(require(a504_0x5eda43(0x160))),ShowTicketService_1=__importDefault(require('../TicketServices/ShowTicketService')),sequelize_1=require(a504_0x5eda43(0x150)),lodash_1=require(a504_0x5eda43(0x158)),isQueueIdHistoryBlocked_1=__importDefault(require(a504_0x5eda43(0x14e))),ListMessagesService=async({pageNumber:pageNumber='1',ticketId:_0x4f769a,companyId:_0x35b653,queues:queues=[],user:_0x56d67a})=>{const _0x5dbe0b=a504_0x5eda43,_0x660a9b=await(0x0,ShowTicketService_1[_0x5dbe0b(0x14a)])(_0x4f769a,_0x35b653),_0x3d4845=[],_0x5c00e8=await(0x0,isQueueIdHistoryBlocked_1[_0x5dbe0b(0x14a)])({'userRequest':_0x56d67a['id']});let _0x127622=[];!_0x5c00e8?_0x127622=await Ticket_1[_0x5dbe0b(0x14a)][_0x5dbe0b(0x16a)]({'where':{'id':{[sequelize_1['Op'][_0x5dbe0b(0x14b)]]:_0x660a9b['id']},'companyId':_0x660a9b[_0x5dbe0b(0x164)],'contactId':_0x660a9b[_0x5dbe0b(0x155)],'whatsappId':_0x660a9b['whatsappId'],'isGroup':_0x660a9b[_0x5dbe0b(0x15f)],'queueId':_0x56d67a[_0x5dbe0b(0x15b)]===_0x5dbe0b(0x154)||_0x56d67a[_0x5dbe0b(0x15c)]==='enable'?{[sequelize_1['Op']['or']]:[queues,null]}:{[sequelize_1['Op']['in']]:queues}},'attributes':['id']}):_0x127622=await Ticket_1[_0x5dbe0b(0x14a)][_0x5dbe0b(0x16a)]({'where':{'id':{[sequelize_1['Op'][_0x5dbe0b(0x14b)]]:_0x660a9b['id']},'companyId':_0x660a9b['companyId'],'contactId':_0x660a9b[_0x5dbe0b(0x155)],'whatsappId':_0x660a9b['whatsappId'],'isGroup':_0x660a9b[_0x5dbe0b(0x15f)]},'attributes':['id']});_0x127622&&_0x3d4845[_0x5dbe0b(0x15a)](_0x127622['map'](_0x3de75b=>_0x3de75b['id']));const _0x543a0a=(0x0,lodash_1[_0x5dbe0b(0x153)])(..._0x3d4845);if(!_0x543a0a)throw new AppError_1[(_0x5dbe0b(0x14a))](_0x5dbe0b(0x157),0x194);const _0xd5ab2e=0x14,_0x57c008=_0xd5ab2e*(+pageNumber-0x1),{count:_0xe36df0,rows:_0x24e167}=await Message_1['default'][_0x5dbe0b(0x14c)]({'where':{'ticketId':_0x543a0a,'companyId':_0x35b653},'limit':_0xd5ab2e,'include':[_0x5dbe0b(0x16f),{'model':Message_1[_0x5dbe0b(0x14a)],'as':_0x5dbe0b(0x16b),'include':[_0x5dbe0b(0x16f)]},{'model':Ticket_1[_0x5dbe0b(0x14a)],'required':!![],'include':[_0x5dbe0b(0x167)]}],'distinct':!![],'offset':_0x57c008,'order':[[_0x5dbe0b(0x159),_0x5dbe0b(0x16c)]]}),_0x4a570e=_0xe36df0>_0x57c008+_0x24e167[_0x5dbe0b(0x163)];return{'messages':_0x24e167[_0x5dbe0b(0x152)](),'ticket':_0x660a9b,'count':_0xe36df0,'hasMore':_0x4a570e};};function a504_0x1cc8(){const _0x26e2eb=['allTicket','630NRuFxy','4843038cnbgjZ','isGroup','../../models/Ticket','5877767MgZEoA','6wEDgaW','length','companyId','319478KUvoIz','__esModule','queue','defineProperty','869644pYOhGD','findAll','quotedMsg','DESC','__importDefault','133688RNhHFc','contact','default','lte','findAndCountAll','1857408MUmIqw','../UserServices/isQueueIdHistoryBlocked','3658795lQvRFL','sequelize','../../models/Message','reverse','intersection','admin','contactId','../../errors/AppError','ERR_NO_TICKET_FOUND','lodash','createdAt','push','profile'];a504_0x1cc8=function(){return _0x26e2eb;};return a504_0x1cc8();}exports['default']=ListMessagesService;