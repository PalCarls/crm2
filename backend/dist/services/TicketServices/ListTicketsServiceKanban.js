'use strict';function a544_0x507a(_0x299039,_0x361370){const _0x2380cc=a544_0x2380();return a544_0x507a=function(_0x507a24,_0x2cfc6b){_0x507a24=_0x507a24-0x140;let _0x5e66d4=_0x2380cc[_0x507a24];return _0x5e66d4;},a544_0x507a(_0x299039,_0x361370);}const a544_0x5a0705=a544_0x507a;(function(_0x2f7e84,_0x3e43fd){const _0x130061=a544_0x507a,_0x2e46a1=_0x2f7e84();while(!![]){try{const _0x2e3edd=-parseInt(_0x130061(0x145))/0x1+-parseInt(_0x130061(0x172))/0x2*(parseInt(_0x130061(0x155))/0x3)+parseInt(_0x130061(0x15b))/0x4+-parseInt(_0x130061(0x15f))/0x5*(parseInt(_0x130061(0x156))/0x6)+-parseInt(_0x130061(0x148))/0x7+parseInt(_0x130061(0x170))/0x8+-parseInt(_0x130061(0x162))/0x9*(-parseInt(_0x130061(0x16b))/0xa);if(_0x2e3edd===_0x3e43fd)break;else _0x2e46a1['push'](_0x2e46a1['shift']());}catch(_0x1803d3){_0x2e46a1['push'](_0x2e46a1['shift']());}}}(a544_0x2380,0xbdf35));var __importDefault=this&&this[a544_0x5a0705(0x14c)]||function(_0x51f18b){const _0x36bd9c=a544_0x5a0705;return _0x51f18b&&_0x51f18b[_0x36bd9c(0x173)]?_0x51f18b:{'default':_0x51f18b};};Object[a544_0x5a0705(0x164)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a544_0x5a0705(0x14d)),date_fns_1=require(a544_0x5a0705(0x15e)),Ticket_1=__importDefault(require(a544_0x5a0705(0x169))),Contact_1=__importDefault(require(a544_0x5a0705(0x158))),Message_1=__importDefault(require('../../models/Message')),Queue_1=__importDefault(require(a544_0x5a0705(0x168))),User_1=__importDefault(require('../../models/User')),ShowUserService_1=__importDefault(require(a544_0x5a0705(0x16a))),Tag_1=__importDefault(require(a544_0x5a0705(0x154))),TicketTag_1=__importDefault(require('../../models/TicketTag')),lodash_1=require(a544_0x5a0705(0x165)),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),ListTicketsServiceKanban=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x441de7,tags:_0x33229a,users:_0x1f9703,status:_0x1e6db6,date:_0x3f735d,updatedAt:_0x2f088b,showAll:_0x2ede04,userId:_0x2345da,withUnreadMessages:_0x830a4d,companyId:_0x4bc5cd})=>{const _0x35c1a3=a544_0x5a0705;let _0x18b607={[sequelize_1['Op']['or']]:[{'userId':_0x2345da},{'status':_0x35c1a3(0x140)}],'queueId':{[sequelize_1['Op']['or']]:[_0x441de7,null]}},_0x4a652e;_0x4a652e=[{'model':Contact_1[_0x35c1a3(0x163)],'as':'contact','attributes':['id',_0x35c1a3(0x142),_0x35c1a3(0x16d),_0x35c1a3(0x14e)]},{'model':Queue_1[_0x35c1a3(0x163)],'as':_0x35c1a3(0x16f),'attributes':['id',_0x35c1a3(0x142),'color']},{'model':User_1['default'],'as':_0x35c1a3(0x150),'attributes':['id','name']},{'model':Tag_1[_0x35c1a3(0x163)],'as':'tags','attributes':['id',_0x35c1a3(0x142),_0x35c1a3(0x147)]},{'model':Whatsapp_1[_0x35c1a3(0x163)],'as':_0x35c1a3(0x153),'attributes':[_0x35c1a3(0x142)]}];_0x2ede04===_0x35c1a3(0x16e)&&(_0x18b607={'queueId':{[sequelize_1['Op']['or']]:[_0x441de7,null]}});_0x18b607={..._0x18b607,'status':{[sequelize_1['Op']['or']]:[_0x35c1a3(0x140),'open']}};if(searchParam){const _0x527f24=searchParam[_0x35c1a3(0x16c)]()['trim']();_0x4a652e=[..._0x4a652e,{'model':Message_1[_0x35c1a3(0x163)],'as':_0x35c1a3(0x144),'attributes':['id',_0x35c1a3(0x167)],'where':{'body':(0x0,sequelize_1[_0x35c1a3(0x166)])((0x0,sequelize_1['fn'])('LOWER',(0x0,sequelize_1['col'])(_0x35c1a3(0x167))),_0x35c1a3(0x15c),'%'+_0x527f24+'%')},'required':![],'duplicating':![]}],_0x18b607={..._0x18b607,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1['where'])((0x0,sequelize_1['fn'])(_0x35c1a3(0x14f),(0x0,sequelize_1[_0x35c1a3(0x143)])(_0x35c1a3(0x149))),_0x35c1a3(0x15c),'%'+_0x527f24+'%')},{'$contact.number$':{[sequelize_1['Op']['like']]:'%'+_0x527f24+'%'}},{'$message.body$':(0x0,sequelize_1[_0x35c1a3(0x166)])((0x0,sequelize_1['fn'])('LOWER',(0x0,sequelize_1['col'])(_0x35c1a3(0x167))),_0x35c1a3(0x15c),'%'+_0x527f24+'%')}]};}_0x3f735d&&(_0x18b607={'createdAt':{[sequelize_1['Op'][_0x35c1a3(0x15d)]]:[+(0x0,date_fns_1['startOfDay'])((0x0,date_fns_1[_0x35c1a3(0x151)])(_0x3f735d)),+(0x0,date_fns_1['endOfDay'])((0x0,date_fns_1['parseISO'])(_0x3f735d))]}});_0x2f088b&&(_0x18b607={'updatedAt':{[sequelize_1['Op'][_0x35c1a3(0x15d)]]:[+(0x0,date_fns_1[_0x35c1a3(0x15a)])((0x0,date_fns_1[_0x35c1a3(0x151)])(_0x2f088b)),+(0x0,date_fns_1[_0x35c1a3(0x141)])((0x0,date_fns_1[_0x35c1a3(0x151)])(_0x2f088b))]}});if(_0x830a4d===_0x35c1a3(0x16e)){const _0x546ab1=await(0x0,ShowUserService_1[_0x35c1a3(0x163)])(_0x2345da),_0x1eaea0=_0x546ab1[_0x35c1a3(0x157)][_0x35c1a3(0x14a)](_0x2688db=>_0x2688db['id']);_0x18b607={[sequelize_1['Op']['or']]:[{'userId':_0x2345da},{'status':_0x35c1a3(0x140)}],'queueId':{[sequelize_1['Op']['or']]:[_0x1eaea0,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0}};}if(Array[_0x35c1a3(0x146)](_0x33229a)&&_0x33229a[_0x35c1a3(0x160)]>0x0){const _0x14fb3b=[];for(let _0x326ac7 of _0x33229a){const _0x48055f=await TicketTag_1[_0x35c1a3(0x163)][_0x35c1a3(0x174)]({'where':{'tagId':_0x326ac7}});_0x48055f&&_0x14fb3b[_0x35c1a3(0x14b)](_0x48055f[_0x35c1a3(0x14a)](_0x5ac1ac=>_0x5ac1ac['ticketId']));}const _0x1365c9=(0x0,lodash_1[_0x35c1a3(0x159)])(..._0x14fb3b);_0x18b607={..._0x18b607,'id':{[sequelize_1['Op']['in']]:_0x1365c9}};}if(Array['isArray'](_0x1f9703)&&_0x1f9703['length']>0x0){const _0x3cd48b=[];for(let _0x36a850 of _0x1f9703){const _0x5e0c90=await Ticket_1['default'][_0x35c1a3(0x174)]({'where':{'userId':_0x36a850}});_0x5e0c90&&_0x3cd48b['push'](_0x5e0c90[_0x35c1a3(0x14a)](_0x29ee5a=>_0x29ee5a['id']));}const _0x14501e=(0x0,lodash_1[_0x35c1a3(0x159)])(..._0x3cd48b);_0x18b607={..._0x18b607,'id':{[sequelize_1['Op']['in']]:_0x14501e}};}const _0x3eca73=0x28,_0x6b08fe=_0x3eca73*(+pageNumber-0x1);_0x18b607={..._0x18b607,'companyId':_0x4bc5cd};const {count:_0x5c0bbc,rows:_0x46e0dd}=await Ticket_1['default'][_0x35c1a3(0x171)]({'where':_0x18b607,'include':_0x4a652e,'distinct':!![],'limit':_0x3eca73,'offset':_0x6b08fe,'order':[[_0x35c1a3(0x152),_0x35c1a3(0x161)]],'subQuery':![]}),_0x585c5f=_0x5c0bbc>_0x6b08fe+_0x46e0dd[_0x35c1a3(0x160)];return{'tickets':_0x46e0dd,'count':_0x5c0bbc,'hasMore':_0x585c5f};};exports[a544_0x5a0705(0x163)]=ListTicketsServiceKanban;function a544_0x2380(){const _0x583ef8=['endOfDay','name','col','messages','406782lkgdjM','isArray','color','8717744FIQgEC','contact.name','map','push','__importDefault','sequelize','email','LOWER','user','parseISO','updatedAt','whatsapp','../../models/Tag','13701JjZPXj','102GUvDWN','queues','../../models/Contact','intersection','startOfDay','5194440wpNojR','LIKE','between','date-fns','13725yULMey','length','DESC','5463CyZthX','default','defineProperty','lodash','where','body','../../models/Queue','../../models/Ticket','../UserServices/ShowUserService','16780VXcdVk','toLocaleLowerCase','number','true','queue','10411760JBhIfo','findAndCountAll','500eqzjmc','__esModule','findAll','pending'];a544_0x2380=function(){return _0x583ef8;};return a544_0x2380();}