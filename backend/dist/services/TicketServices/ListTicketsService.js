'use strict';const a521_0xadf5d0=a521_0x1d9b;function a521_0x3843(){const _0x1c34e2=['color','tags','where','isArray','contact','96RvgXLU','contact.name','../../models/User','name','profile','LOWER','companyId','4986472dltYDp','admin','extraInfo','702utiQla','push','LIKE','596680vYaInW','Sequelize','open','length','col','allTicket','2793548FjWjpy','5cABWJW','2039917xJoDmL','../../models/Queue','findAll','pending','70180eKSxeh','max','findAndCountAll','intersection','../../models/Ticket','enable','__importDefault','closed','../../models/Message','body','contactTags','../../models/Tag','true','__esModule','DESC','whatsapp','user','3pDCvwg','default','expiresTicket','defineProperty','contactId','search','../UserServices/ShowUserService','7IMIZLP','2283198oEWPls','1064358eYmfml','trim','whatsappId','../../models/Whatsapp','map','sequelize','group'];a521_0x3843=function(){return _0x1c34e2;};return a521_0x3843();}(function(_0x41933d,_0xf2c506){const _0x5a985e=a521_0x1d9b,_0x2ca919=_0x41933d();while(!![]){try{const _0x2f1187=parseInt(_0x5a985e(0x12b))/0x1+-parseInt(_0x5a985e(0x112))/0x2+-parseInt(_0x5a985e(0x148))/0x3*(parseInt(_0x5a985e(0x131))/0x4)+parseInt(_0x5a985e(0x132))/0x5*(-parseInt(_0x5a985e(0x111))/0x6)+parseInt(_0x5a985e(0x14f))/0x7*(-parseInt(_0x5a985e(0x125))/0x8)+parseInt(_0x5a985e(0x128))/0x9*(parseInt(_0x5a985e(0x137))/0xa)+parseInt(_0x5a985e(0x133))/0xb*(parseInt(_0x5a985e(0x11e))/0xc);if(_0x2f1187===_0xf2c506)break;else _0x2ca919['push'](_0x2ca919['shift']());}catch(_0x47d4c1){_0x2ca919['push'](_0x2ca919['shift']());}}}(a521_0x3843,0x60024));var __importDefault=this&&this[a521_0xadf5d0(0x13d)]||function(_0x555604){const _0x511115=a521_0xadf5d0;return _0x555604&&_0x555604[_0x511115(0x144)]?_0x555604:{'default':_0x555604};};Object[a521_0xadf5d0(0x14b)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a521_0xadf5d0(0x117)),Ticket_1=__importDefault(require(a521_0xadf5d0(0x13b))),Contact_1=__importDefault(require('../../models/Contact')),Message_1=__importDefault(require(a521_0xadf5d0(0x13f))),Queue_1=__importDefault(require(a521_0xadf5d0(0x134))),User_1=__importDefault(require(a521_0xadf5d0(0x120))),ShowUserService_1=__importDefault(require(a521_0xadf5d0(0x14e))),Tag_1=__importDefault(require(a521_0xadf5d0(0x142))),lodash_1=require('lodash'),Whatsapp_1=__importDefault(require(a521_0xadf5d0(0x115))),ContactTag_1=__importDefault(require('../../models/ContactTag')),ListTicketsService=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x602d92,tags:_0x554b0b,users:_0x37e17c,status:_0x5ec5e2,date:_0x55d021,dateStart:_0x5b7600,dateEnd:_0x2a3b34,updatedAt:_0x4a415a,showAll:_0x4d49cc,userId:_0x58696d,withUnreadMessages:_0x5e145e,whatsappIds:_0x30657c,statusFilters:_0x48b4dd,companyId:_0x4741a7})=>{const _0x4eef06=a521_0xadf5d0;let _0xd3cd46={'status':_0x4eef06(0x136)},_0x1254eb;_0x1254eb=[{'model':Contact_1['default'],'as':_0x4eef06(0x11d),'include':[_0x4eef06(0x127),_0x4eef06(0x141),_0x4eef06(0x11a)]},{'model':Queue_1[_0x4eef06(0x149)],'as':'queue','attributes':['id','name',_0x4eef06(0x119)]},{'model':User_1[_0x4eef06(0x149)],'as':_0x4eef06(0x147),'attributes':['id',_0x4eef06(0x121)]},{'model':Tag_1[_0x4eef06(0x149)],'as':_0x4eef06(0x11a),'attributes':['id',_0x4eef06(0x121),'color']},{'model':Whatsapp_1[_0x4eef06(0x149)],'as':_0x4eef06(0x146),'attributes':['name',_0x4eef06(0x14a)]}];const _0x58ac5a=await(0x0,ShowUserService_1[_0x4eef06(0x149)])(_0x58696d);_0x5ec5e2===_0x4eef06(0x12d)&&(_0xd3cd46={..._0xd3cd46,'userId':_0x58696d,'queueId':{[sequelize_1['Op']['in']]:_0x602d92}});_0x5ec5e2===_0x4eef06(0x118)&&(_0x58ac5a['allowGroup']||_0x4d49cc==='true')&&(_0xd3cd46={..._0xd3cd46,'queueId':{[sequelize_1['Op']['or']]:[_0x602d92,null]}});if(_0x58ac5a[_0x4eef06(0x122)]===_0x4eef06(0x147)&&_0x5ec5e2===_0x4eef06(0x136)&&_0x58ac5a[_0x4eef06(0x130)]===_0x4eef06(0x13c)){const _0x33eeae=[],_0x239642=await Ticket_1[_0x4eef06(0x149)][_0x4eef06(0x135)]({'where':{'userId':{[sequelize_1['Op']['or']]:[_0x58ac5a['id'],null]},'queueId':{[sequelize_1['Op']['or']]:[_0x602d92,null]},'status':_0x4eef06(0x136)}});_0x239642&&_0x33eeae['push'](_0x239642[_0x4eef06(0x116)](_0x492ba0=>_0x492ba0['id']));const _0x7c9dc3=(0x0,lodash_1[_0x4eef06(0x13a)])(..._0x33eeae);_0xd3cd46={..._0xd3cd46,'id':{[sequelize_1['Op']['in']]:_0x7c9dc3}};}if(_0x58ac5a[_0x4eef06(0x122)]===_0x4eef06(0x147)&&_0x5ec5e2==='pending'&&_0x58ac5a[_0x4eef06(0x130)]==='disable'){const _0x5e635f=[],_0x2e3f1e=await Ticket_1[_0x4eef06(0x149)][_0x4eef06(0x135)]({'where':{[sequelize_1['Op']['or']]:[{'userId':{[sequelize_1['Op']['or']]:[_0x58ac5a['id'],null]}},{'status':{[sequelize_1['Op']['or']]:['pending',_0x4eef06(0x13e)]}}],'queueId':{[sequelize_1['Op']['in']]:_0x602d92},'status':_0x4eef06(0x136)}});_0x2e3f1e&&_0x5e635f[_0x4eef06(0x129)](_0x2e3f1e[_0x4eef06(0x116)](_0x42468a=>_0x42468a['id']));const _0x3265c0=(0x0,lodash_1[_0x4eef06(0x13a)])(..._0x5e635f);_0xd3cd46={..._0xd3cd46,'id':{[sequelize_1['Op']['in']]:_0x3265c0}};}_0x4d49cc===_0x4eef06(0x143)&&_0x58ac5a[_0x4eef06(0x122)]===_0x4eef06(0x126)&&(_0xd3cd46={'queueId':{[sequelize_1['Op']['or']]:[_0x602d92,null]}});_0x5ec5e2&&_0x5ec5e2!==_0x4eef06(0x14d)&&(_0xd3cd46={..._0xd3cd46,'status':_0x5ec5e2});if(_0x5ec5e2==='closed'){const _0xa691ea=[],_0x502df7=await Ticket_1[_0x4eef06(0x149)]['findAll']({'where':{'queueId':_0x4d49cc===_0x4eef06(0x143)||_0x58ac5a[_0x4eef06(0x130)]==='enable'?{[sequelize_1['Op']['or']]:[_0x602d92,null]}:_0x602d92,'status':'closed'},'group':[_0x4eef06(0x124),_0x4eef06(0x14c),_0x4eef06(0x114)],'attributes':['companyId',_0x4eef06(0x14c),_0x4eef06(0x114),[sequelize_1['Sequelize']['fn'](_0x4eef06(0x138),sequelize_1[_0x4eef06(0x12c)][_0x4eef06(0x12f)]('id')),'id']]});_0x502df7&&_0xa691ea[_0x4eef06(0x129)](_0x502df7[_0x4eef06(0x116)](_0x5ef118=>_0x5ef118['id']));const _0x16a6ad=(0x0,lodash_1[_0x4eef06(0x13a)])(..._0xa691ea);_0xd3cd46={..._0xd3cd46,'id':{[sequelize_1['Op']['in']]:_0x16a6ad}};}if(_0x5ec5e2==='search'){_0xd3cd46={'companyId':_0x4741a7};_0x58ac5a[_0x4eef06(0x122)]===_0x4eef06(0x147)&&(_0xd3cd46={..._0xd3cd46,'queueId':{[sequelize_1['Op']['in']]:_0x602d92}});_0x5e145e===_0x4eef06(0x143)&&(_0xd3cd46={..._0xd3cd46,[sequelize_1['Op']['or']]:[{'userId':_0x58696d},{'status':_0x4eef06(0x136)}],'queueId':{[sequelize_1['Op']['or']]:[_0x602d92,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0}});if(searchParam){const _0x310c7f=searchParam['toLocaleLowerCase']()[_0x4eef06(0x113)]();_0x1254eb=[..._0x1254eb,{'model':Message_1[_0x4eef06(0x149)],'as':'messages','attributes':['id',_0x4eef06(0x140)],'where':{'body':(0x0,sequelize_1[_0x4eef06(0x11b)])((0x0,sequelize_1['fn'])(_0x4eef06(0x123),(0x0,sequelize_1[_0x4eef06(0x12f)])('body')),_0x4eef06(0x12a),'%'+_0x310c7f+'%')},'required':![],'duplicating':![]}],_0xd3cd46={..._0xd3cd46,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1[_0x4eef06(0x11b)])((0x0,sequelize_1['fn'])(_0x4eef06(0x123),(0x0,sequelize_1['col'])(_0x4eef06(0x11f))),_0x4eef06(0x12a),'%'+_0x310c7f+'%')},{'$contact.number$':{[sequelize_1['Op']['like']]:'%'+_0x310c7f+'%'}},{'$message.body$':(0x0,sequelize_1[_0x4eef06(0x11b)])((0x0,sequelize_1['fn'])(_0x4eef06(0x123),(0x0,sequelize_1[_0x4eef06(0x12f)])(_0x4eef06(0x140))),_0x4eef06(0x12a),'%'+_0x310c7f+'%')}]};}if(Array[_0x4eef06(0x11c)](_0x554b0b)&&_0x554b0b['length']>0x0){const _0x5012eb=[],_0x344b38=await ContactTag_1[_0x4eef06(0x149)]['findAll']({'where':{'tagId':{[sequelize_1['Op']['in']]:_0x554b0b}}});_0x344b38&&_0x5012eb[_0x4eef06(0x129)](_0x344b38[_0x4eef06(0x116)](_0x22625a=>_0x22625a[_0x4eef06(0x14c)]));const _0x38b88f=(0x0,lodash_1['intersection'])(..._0x5012eb);_0xd3cd46={..._0xd3cd46,'contactId':{[sequelize_1['Op']['in']]:_0x38b88f}};}Array[_0x4eef06(0x11c)](_0x37e17c)&&_0x37e17c[_0x4eef06(0x12e)]>0x0&&(_0xd3cd46={..._0xd3cd46,'userId':{[sequelize_1['Op']['in']]:_0x37e17c}}),Array[_0x4eef06(0x11c)](_0x30657c)&&_0x30657c[_0x4eef06(0x12e)]>0x0&&(_0xd3cd46={..._0xd3cd46,'whatsappId':{[sequelize_1['Op']['in']]:_0x30657c}}),Array['isArray'](_0x48b4dd)&&_0x48b4dd[_0x4eef06(0x12e)]>0x0&&(_0xd3cd46={..._0xd3cd46,'status':{[sequelize_1['Op']['in']]:_0x48b4dd}});}const _0x1a7076=0x28,_0x3a2979=_0x1a7076*(+pageNumber-0x1);_0xd3cd46={..._0xd3cd46,'companyId':_0x4741a7};const {count:_0x1414ac,rows:_0x3af09d}=await Ticket_1[_0x4eef06(0x149)][_0x4eef06(0x139)]({'where':_0xd3cd46,'include':_0x1254eb,'distinct':!![],'limit':_0x1a7076,'offset':_0x3a2979,'order':[['updatedAt',_0x4eef06(0x145)]],'subQuery':![]}),_0x58201b=_0x1414ac>_0x3a2979+_0x3af09d[_0x4eef06(0x12e)];return{'tickets':_0x3af09d,'count':_0x1414ac,'hasMore':_0x58201b};};function a521_0x1d9b(_0x2b05c1,_0x4147d6){const _0x3843f=a521_0x3843();return a521_0x1d9b=function(_0x1d9b2d,_0x53ac2f){_0x1d9b2d=_0x1d9b2d-0x111;let _0x49fb8f=_0x3843f[_0x1d9b2d];return _0x49fb8f;},a521_0x1d9b(_0x2b05c1,_0x4147d6);}exports['default']=ListTicketsService;