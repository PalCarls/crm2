'use strict';const a538_0x164a17=a538_0x2a43;(function(_0x54abf7,_0x303b77){const _0x5e87a6=a538_0x2a43,_0x36c3f7=_0x54abf7();while(!![]){try{const _0x3e9dbd=parseInt(_0x5e87a6(0x1de))/0x1*(parseInt(_0x5e87a6(0x1b6))/0x2)+parseInt(_0x5e87a6(0x1ac))/0x3+-parseInt(_0x5e87a6(0x1c7))/0x4*(parseInt(_0x5e87a6(0x1ab))/0x5)+parseInt(_0x5e87a6(0x1b7))/0x6*(parseInt(_0x5e87a6(0x1b0))/0x7)+parseInt(_0x5e87a6(0x1c9))/0x8*(parseInt(_0x5e87a6(0x1af))/0x9)+parseInt(_0x5e87a6(0x1b9))/0xa+parseInt(_0x5e87a6(0x1b1))/0xb*(-parseInt(_0x5e87a6(0x1b8))/0xc);if(_0x3e9dbd===_0x303b77)break;else _0x36c3f7['push'](_0x36c3f7['shift']());}catch(_0x291ae8){_0x36c3f7['push'](_0x36c3f7['shift']());}}}(a538_0x5741,0x9cd5d));var __importDefault=this&&this[a538_0x164a17(0x1b3)]||function(_0x2e9969){const _0x289258=a538_0x164a17;return _0x2e9969&&_0x2e9969[_0x289258(0x1c6)]?_0x2e9969:{'default':_0x2e9969};};Object['defineProperty'](exports,a538_0x164a17(0x1c6),{'value':!![]});function a538_0x5741(){const _0x47df34=['../../models/Contact','__importDefault','col','endOfDay','1662RgnaPJ','12678VPojDl','723540RuYCeX','3782710VNwpVN','startOfDay','../../models/User','../../models/Tag','messages','LIKE','../UserServices/ShowUserService','findAndCountAll','ticketId','DESC','queues','like','trim','__esModule','44NUkgYj','where','16XlDKvP','between','../../models/Queue','length','email','intersection','map','contact','parseISO','LOWER','../../models/TicketTag','color','findAll','lodash','default','true','pending','isArray','queue','body','../../models/Message','242CxCbeL','push','../../models/Ticket','319405emvlCY','2573184eFLXgA','name','toLocaleLowerCase','1449486DXrmab','4221pAeYPX','308aUOcnX'];a538_0x5741=function(){return _0x47df34;};return a538_0x5741();}const sequelize_1=require('sequelize'),date_fns_1=require('date-fns'),Ticket_1=__importDefault(require(a538_0x164a17(0x1aa))),Contact_1=__importDefault(require(a538_0x164a17(0x1b2))),Message_1=__importDefault(require(a538_0x164a17(0x1dd))),Queue_1=__importDefault(require(a538_0x164a17(0x1cb))),User_1=__importDefault(require(a538_0x164a17(0x1bb))),ShowUserService_1=__importDefault(require(a538_0x164a17(0x1bf))),Tag_1=__importDefault(require(a538_0x164a17(0x1bc))),TicketTag_1=__importDefault(require(a538_0x164a17(0x1d3))),lodash_1=require(a538_0x164a17(0x1d6)),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),ListTicketsServiceKanban=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x159aa2,tags:_0x383e08,users:_0x5a070b,status:_0x331a54,date:_0x245036,updatedAt:_0x47c510,showAll:_0x3e8d28,userId:_0x4efb3a,withUnreadMessages:_0x35aace,companyId:_0x468c59})=>{const _0xf6e456=a538_0x164a17;let _0x39e268={[sequelize_1['Op']['or']]:[{'userId':_0x4efb3a},{'status':_0xf6e456(0x1d9)}],'queueId':{[sequelize_1['Op']['or']]:[_0x159aa2,null]}},_0x1934c1;_0x1934c1=[{'model':Contact_1[_0xf6e456(0x1d7)],'as':_0xf6e456(0x1d0),'attributes':['id',_0xf6e456(0x1ad),'number',_0xf6e456(0x1cd)]},{'model':Queue_1[_0xf6e456(0x1d7)],'as':_0xf6e456(0x1db),'attributes':['id',_0xf6e456(0x1ad),_0xf6e456(0x1d4)]},{'model':User_1['default'],'as':'user','attributes':['id',_0xf6e456(0x1ad)]},{'model':Tag_1[_0xf6e456(0x1d7)],'as':'tags','attributes':['id','name',_0xf6e456(0x1d4)]},{'model':Whatsapp_1[_0xf6e456(0x1d7)],'as':'whatsapp','attributes':['name']}];_0x3e8d28==='true'&&(_0x39e268={'queueId':{[sequelize_1['Op']['or']]:[_0x159aa2,null]}});_0x39e268={..._0x39e268,'status':{[sequelize_1['Op']['or']]:[_0xf6e456(0x1d9),'open']}};if(searchParam){const _0x347c44=searchParam[_0xf6e456(0x1ae)]()[_0xf6e456(0x1c5)]();_0x1934c1=[..._0x1934c1,{'model':Message_1[_0xf6e456(0x1d7)],'as':_0xf6e456(0x1bd),'attributes':['id',_0xf6e456(0x1dc)],'where':{'body':(0x0,sequelize_1[_0xf6e456(0x1c8)])((0x0,sequelize_1['fn'])(_0xf6e456(0x1d2),(0x0,sequelize_1[_0xf6e456(0x1b4)])(_0xf6e456(0x1dc))),_0xf6e456(0x1be),'%'+_0x347c44+'%')},'required':![],'duplicating':![]}],_0x39e268={..._0x39e268,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1[_0xf6e456(0x1c8)])((0x0,sequelize_1['fn'])(_0xf6e456(0x1d2),(0x0,sequelize_1['col'])('contact.name')),_0xf6e456(0x1be),'%'+_0x347c44+'%')},{'$contact.number$':{[sequelize_1['Op'][_0xf6e456(0x1c4)]]:'%'+_0x347c44+'%'}},{'$message.body$':(0x0,sequelize_1[_0xf6e456(0x1c8)])((0x0,sequelize_1['fn'])(_0xf6e456(0x1d2),(0x0,sequelize_1[_0xf6e456(0x1b4)])('body')),_0xf6e456(0x1be),'%'+_0x347c44+'%')}]};}_0x245036&&(_0x39e268={'createdAt':{[sequelize_1['Op'][_0xf6e456(0x1ca)]]:[+(0x0,date_fns_1[_0xf6e456(0x1ba)])((0x0,date_fns_1[_0xf6e456(0x1d1)])(_0x245036)),+(0x0,date_fns_1[_0xf6e456(0x1b5)])((0x0,date_fns_1[_0xf6e456(0x1d1)])(_0x245036))]}});_0x47c510&&(_0x39e268={'updatedAt':{[sequelize_1['Op']['between']]:[+(0x0,date_fns_1[_0xf6e456(0x1ba)])((0x0,date_fns_1[_0xf6e456(0x1d1)])(_0x47c510)),+(0x0,date_fns_1[_0xf6e456(0x1b5)])((0x0,date_fns_1[_0xf6e456(0x1d1)])(_0x47c510))]}});if(_0x35aace===_0xf6e456(0x1d8)){const _0x200736=await(0x0,ShowUserService_1['default'])(_0x4efb3a),_0x3c0f78=_0x200736[_0xf6e456(0x1c3)][_0xf6e456(0x1cf)](_0x191b09=>_0x191b09['id']);_0x39e268={[sequelize_1['Op']['or']]:[{'userId':_0x4efb3a},{'status':_0xf6e456(0x1d9)}],'queueId':{[sequelize_1['Op']['or']]:[_0x3c0f78,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0}};}if(Array[_0xf6e456(0x1da)](_0x383e08)&&_0x383e08[_0xf6e456(0x1cc)]>0x0){const _0x2b86ad=[];for(let _0xeb0ac7 of _0x383e08){const _0x5552f6=await TicketTag_1['default']['findAll']({'where':{'tagId':_0xeb0ac7}});_0x5552f6&&_0x2b86ad[_0xf6e456(0x1df)](_0x5552f6[_0xf6e456(0x1cf)](_0x286299=>_0x286299[_0xf6e456(0x1c1)]));}const _0x5bb7da=(0x0,lodash_1[_0xf6e456(0x1ce)])(..._0x2b86ad);_0x39e268={..._0x39e268,'id':{[sequelize_1['Op']['in']]:_0x5bb7da}};}if(Array[_0xf6e456(0x1da)](_0x5a070b)&&_0x5a070b[_0xf6e456(0x1cc)]>0x0){const _0x2ff56e=[];for(let _0x2994dc of _0x5a070b){const _0x304a20=await Ticket_1[_0xf6e456(0x1d7)][_0xf6e456(0x1d5)]({'where':{'userId':_0x2994dc}});_0x304a20&&_0x2ff56e['push'](_0x304a20[_0xf6e456(0x1cf)](_0x2bc428=>_0x2bc428['id']));}const _0x4d79e5=(0x0,lodash_1['intersection'])(..._0x2ff56e);_0x39e268={..._0x39e268,'id':{[sequelize_1['Op']['in']]:_0x4d79e5}};}const _0x24836b=0x28,_0x23492c=_0x24836b*(+pageNumber-0x1);_0x39e268={..._0x39e268,'companyId':_0x468c59};const {count:_0xf86a10,rows:_0x49a64f}=await Ticket_1[_0xf6e456(0x1d7)][_0xf6e456(0x1c0)]({'where':_0x39e268,'include':_0x1934c1,'distinct':!![],'limit':_0x24836b,'offset':_0x23492c,'order':[['updatedAt',_0xf6e456(0x1c2)]],'subQuery':![]}),_0x2eb68c=_0xf86a10>_0x23492c+_0x49a64f[_0xf6e456(0x1cc)];return{'tickets':_0x49a64f,'count':_0xf86a10,'hasMore':_0x2eb68c};};function a538_0x2a43(_0x49b29a,_0x4c743a){const _0x5741ff=a538_0x5741();return a538_0x2a43=function(_0x2a4392,_0x3e3b89){_0x2a4392=_0x2a4392-0x1aa;let _0x3c5ded=_0x5741ff[_0x2a4392];return _0x3c5ded;},a538_0x2a43(_0x49b29a,_0x4c743a);}exports['default']=ListTicketsServiceKanban;