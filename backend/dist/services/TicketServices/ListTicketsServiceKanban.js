<<<<<<< HEAD
'use strict';const a585_0x191d03=a585_0x58e2;(function(_0x5846d7,_0x556c91){const _0x22296d=a585_0x58e2,_0x1346a3=_0x5846d7();while(!![]){try{const _0x541556=-parseInt(_0x22296d(0x1f2))/0x1*(parseInt(_0x22296d(0x1f0))/0x2)+parseInt(_0x22296d(0x1ff))/0x3+-parseInt(_0x22296d(0x209))/0x4*(-parseInt(_0x22296d(0x212))/0x5)+parseInt(_0x22296d(0x1dd))/0x6*(-parseInt(_0x22296d(0x1e6))/0x7)+parseInt(_0x22296d(0x1eb))/0x8+-parseInt(_0x22296d(0x20e))/0x9+parseInt(_0x22296d(0x20c))/0xa;if(_0x541556===_0x556c91)break;else _0x1346a3['push'](_0x1346a3['shift']());}catch(_0x4c9df6){_0x1346a3['push'](_0x1346a3['shift']());}}}(a585_0x24b7,0xd01e9));function a585_0x58e2(_0x4f54a5,_0x38fcbf){const _0x24b727=a585_0x24b7();return a585_0x58e2=function(_0x58e23a,_0x2eeabb){_0x58e23a=_0x58e23a-0x1dd;let _0x44b6da=_0x24b727[_0x58e23a];return _0x44b6da;},a585_0x58e2(_0x4f54a5,_0x38fcbf);}function a585_0x24b7(){const _0x5739f5=['342bfATah','length','between','sequelize','toLocaleLowerCase','../../models/Tag','intersection','push','../../models/Message','162883rcNXWW','col','../../models/TicketTag','parseISO','../../models/User','8744496pHliNd','color','like','LIKE','queues','286814vXrnfn','companyId','9ecwjUB','email','LOWER','true','contact','__esModule','../UserServices/ShowUserService','pending','../../models/Queue','contact.name','endOfDay','startOfDay','__importDefault','3882633YwVYcL','DESC','ticketId','defineProperty','map','findAndCountAll','lodash','where','default','isArray','28RGULCg','tags','body','16931660JoOBha','../../models/Contact','10887831sICOOI','updatedAt','user','urlPicture','427695lOIEFD','name'];a585_0x24b7=function(){return _0x5739f5;};return a585_0x24b7();}var __importDefault=this&&this[a585_0x191d03(0x1fe)]||function(_0x2e0f5d){const _0x5a956a=a585_0x191d03;return _0x2e0f5d&&_0x2e0f5d[_0x5a956a(0x1f7)]?_0x2e0f5d:{'default':_0x2e0f5d};};Object[a585_0x191d03(0x202)](exports,a585_0x191d03(0x1f7),{'value':!![]});const sequelize_1=require(a585_0x191d03(0x1e0)),date_fns_1=require('date-fns'),Ticket_1=__importDefault(require('../../models/Ticket')),Contact_1=__importDefault(require(a585_0x191d03(0x20d))),Message_1=__importDefault(require(a585_0x191d03(0x1e5))),Queue_1=__importDefault(require(a585_0x191d03(0x1fa))),User_1=__importDefault(require(a585_0x191d03(0x1ea))),ShowUserService_1=__importDefault(require(a585_0x191d03(0x1f8))),Tag_1=__importDefault(require(a585_0x191d03(0x1e2))),TicketTag_1=__importDefault(require(a585_0x191d03(0x1e8))),lodash_1=require(a585_0x191d03(0x205)),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),ListTicketsServiceKanban=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x442ae1,tags:_0x476fb4,users:_0x18a58f,status:_0x276db8,date:_0x4caaa6,updatedAt:_0x18b2e7,showAll:_0xf52d90,userId:_0x50c188,withUnreadMessages:_0x421f51,companyId:_0x4e5f82})=>{const _0x265a1a=a585_0x191d03;let _0xd91185={[sequelize_1['Op']['or']]:[{'userId':_0x50c188},{'status':'pending'}],'queueId':{[sequelize_1['Op']['or']]:[_0x442ae1,null]}},_0x16df88;_0x16df88=[{'model':Contact_1[_0x265a1a(0x207)],'as':_0x265a1a(0x1f6),'attributes':['id','name','number',_0x265a1a(0x1f3),_0x265a1a(0x1f1),_0x265a1a(0x211)]},{'model':Queue_1[_0x265a1a(0x207)],'as':'queue','attributes':['id','name',_0x265a1a(0x1ec)]},{'model':User_1['default'],'as':_0x265a1a(0x210),'attributes':['id',_0x265a1a(0x213)]},{'model':Tag_1[_0x265a1a(0x207)],'as':_0x265a1a(0x20a),'attributes':['id',_0x265a1a(0x213),_0x265a1a(0x1ec)]},{'model':Whatsapp_1[_0x265a1a(0x207)],'as':'whatsapp','attributes':[_0x265a1a(0x213)]}];_0xf52d90===_0x265a1a(0x1f5)&&(_0xd91185={'queueId':{[sequelize_1['Op']['or']]:[_0x442ae1,null]}});_0xd91185={..._0xd91185,'status':{[sequelize_1['Op']['or']]:[_0x265a1a(0x1f9),'open']}};if(searchParam){const _0x70d5bf=searchParam[_0x265a1a(0x1e1)]()['trim']();_0x16df88=[..._0x16df88,{'model':Message_1[_0x265a1a(0x207)],'as':'messages','attributes':['id',_0x265a1a(0x20b)],'where':{'body':(0x0,sequelize_1['where'])((0x0,sequelize_1['fn'])('LOWER',(0x0,sequelize_1['col'])(_0x265a1a(0x20b))),'LIKE','%'+_0x70d5bf+'%')},'required':![],'duplicating':![]}],_0xd91185={..._0xd91185,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1[_0x265a1a(0x206)])((0x0,sequelize_1['fn'])('LOWER',(0x0,sequelize_1[_0x265a1a(0x1e7)])(_0x265a1a(0x1fb))),_0x265a1a(0x1ee),'%'+_0x70d5bf+'%')},{'$contact.number$':{[sequelize_1['Op'][_0x265a1a(0x1ed)]]:'%'+_0x70d5bf+'%'}},{'$message.body$':(0x0,sequelize_1[_0x265a1a(0x206)])((0x0,sequelize_1['fn'])(_0x265a1a(0x1f4),(0x0,sequelize_1['col'])(_0x265a1a(0x20b))),'LIKE','%'+_0x70d5bf+'%')}]};}_0x4caaa6&&(_0xd91185={'createdAt':{[sequelize_1['Op'][_0x265a1a(0x1df)]]:[+(0x0,date_fns_1[_0x265a1a(0x1fd)])((0x0,date_fns_1[_0x265a1a(0x1e9)])(_0x4caaa6)),+(0x0,date_fns_1[_0x265a1a(0x1fc)])((0x0,date_fns_1[_0x265a1a(0x1e9)])(_0x4caaa6))]}});_0x18b2e7&&(_0xd91185={'updatedAt':{[sequelize_1['Op'][_0x265a1a(0x1df)]]:[+(0x0,date_fns_1['startOfDay'])((0x0,date_fns_1['parseISO'])(_0x18b2e7)),+(0x0,date_fns_1[_0x265a1a(0x1fc)])((0x0,date_fns_1[_0x265a1a(0x1e9)])(_0x18b2e7))]}});if(_0x421f51===_0x265a1a(0x1f5)){const _0xddfd08=await(0x0,ShowUserService_1['default'])(_0x50c188,_0x4e5f82),_0x559134=_0xddfd08[_0x265a1a(0x1ef)][_0x265a1a(0x203)](_0x5ce6db=>_0x5ce6db['id']);_0xd91185={[sequelize_1['Op']['or']]:[{'userId':_0x50c188},{'status':'pending'}],'queueId':{[sequelize_1['Op']['or']]:[_0x559134,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0}};}if(Array[_0x265a1a(0x208)](_0x476fb4)&&_0x476fb4[_0x265a1a(0x1de)]>0x0){const _0x3f443e=[];for(let _0x4218b9 of _0x476fb4){const _0x193480=await TicketTag_1[_0x265a1a(0x207)]['findAll']({'where':{'tagId':_0x4218b9}});_0x193480&&_0x3f443e['push'](_0x193480[_0x265a1a(0x203)](_0x18c199=>_0x18c199[_0x265a1a(0x201)]));}const _0x5a131a=(0x0,lodash_1[_0x265a1a(0x1e3)])(..._0x3f443e);_0xd91185={..._0xd91185,'id':{[sequelize_1['Op']['in']]:_0x5a131a}};}if(Array[_0x265a1a(0x208)](_0x18a58f)&&_0x18a58f[_0x265a1a(0x1de)]>0x0){const _0x240af9=[];for(let _0x564342 of _0x18a58f){const _0x377d62=await Ticket_1[_0x265a1a(0x207)]['findAll']({'where':{'userId':_0x564342}});_0x377d62&&_0x240af9[_0x265a1a(0x1e4)](_0x377d62[_0x265a1a(0x203)](_0x3cd8a9=>_0x3cd8a9['id']));}const _0x5d3bec=(0x0,lodash_1[_0x265a1a(0x1e3)])(..._0x240af9);_0xd91185={..._0xd91185,'id':{[sequelize_1['Op']['in']]:_0x5d3bec}};}const _0x51a5aa=0x28,_0x106c74=_0x51a5aa*(+pageNumber-0x1);_0xd91185={..._0xd91185,'companyId':_0x4e5f82};const {count:_0x29a46f,rows:_0x418751}=await Ticket_1['default'][_0x265a1a(0x204)]({'where':_0xd91185,'include':_0x16df88,'distinct':!![],'limit':_0x51a5aa,'offset':_0x106c74,'order':[[_0x265a1a(0x20f),_0x265a1a(0x200)]],'subQuery':![]}),_0x182c85=_0x29a46f>_0x106c74+_0x418751[_0x265a1a(0x1de)];return{'tickets':_0x418751,'count':_0x29a46f,'hasMore':_0x182c85};};exports['default']=ListTicketsServiceKanban;
=======
'use strict';const a584_0x4b8ebd=a584_0x2df4;function a584_0x2df4(_0x17d73c,_0x282bc3){const _0x410b1d=a584_0x410b();return a584_0x2df4=function(_0x2df498,_0x49977c){_0x2df498=_0x2df498-0x1e4;let _0x222e5b=_0x410b1d[_0x2df498];return _0x222e5b;},a584_0x2df4(_0x17d73c,_0x282bc3);}(function(_0x3cd40d,_0x34e29e){const _0x26f179=a584_0x2df4,_0x33f647=_0x3cd40d();while(!![]){try{const _0xc09730=parseInt(_0x26f179(0x21d))/0x1*(-parseInt(_0x26f179(0x1eb))/0x2)+parseInt(_0x26f179(0x213))/0x3*(-parseInt(_0x26f179(0x20f))/0x4)+-parseInt(_0x26f179(0x212))/0x5*(parseInt(_0x26f179(0x1ef))/0x6)+-parseInt(_0x26f179(0x1f6))/0x7+parseInt(_0x26f179(0x202))/0x8*(-parseInt(_0x26f179(0x21a))/0x9)+parseInt(_0x26f179(0x1e6))/0xa*(-parseInt(_0x26f179(0x1ff))/0xb)+parseInt(_0x26f179(0x205))/0xc*(parseInt(_0x26f179(0x200))/0xd);if(_0xc09730===_0x34e29e)break;else _0x33f647['push'](_0x33f647['shift']());}catch(_0x208e59){_0x33f647['push'](_0x33f647['shift']());}}}(a584_0x410b,0x9b402));var __importDefault=this&&this[a584_0x4b8ebd(0x21b)]||function(_0x152830){return _0x152830&&_0x152830['__esModule']?_0x152830:{'default':_0x152830};};Object[a584_0x4b8ebd(0x210)](exports,a584_0x4b8ebd(0x211),{'value':!![]});function a584_0x410b(){const _0x43d36f=['45738mUHhrB','tags','../../models/User','../../models/Message','lodash','pending','updatedAt','2467570zYFOKy','startOfDay','LIKE','isArray','email','body','contact.name','trim','whatsapp','4312UxHYHg','30044664IWOcgJ','name','45864GpRPBX','where','date-fns','24GAKiEn','color','../../models/Ticket','like','findAndCountAll','number','queues','urlPicture','../../models/Whatsapp','endOfDay','2384akeIpg','defineProperty','__esModule','830AizeZr','1401rXOnZD','findAll','between','intersection','../../models/TicketTag','open','default','531HxWqzF','__importDefault','true','383897UyYeIQ','length','map','user','../../models/Queue','push','../UserServices/ShowUserService','15310JVMKag','parseISO','companyId','col','contact','6JopZNR','../../models/Contact','queue','LOWER'];a584_0x410b=function(){return _0x43d36f;};return a584_0x410b();}const sequelize_1=require('sequelize'),date_fns_1=require(a584_0x4b8ebd(0x204)),Ticket_1=__importDefault(require(a584_0x4b8ebd(0x207))),Contact_1=__importDefault(require(a584_0x4b8ebd(0x1ec))),Message_1=__importDefault(require(a584_0x4b8ebd(0x1f2))),Queue_1=__importDefault(require(a584_0x4b8ebd(0x221))),User_1=__importDefault(require(a584_0x4b8ebd(0x1f1))),ShowUserService_1=__importDefault(require(a584_0x4b8ebd(0x1e5))),Tag_1=__importDefault(require('../../models/Tag')),TicketTag_1=__importDefault(require(a584_0x4b8ebd(0x217))),lodash_1=require(a584_0x4b8ebd(0x1f3)),Whatsapp_1=__importDefault(require(a584_0x4b8ebd(0x20d))),ListTicketsServiceKanban=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x277826,tags:_0x5c9f3c,users:_0x4b7d23,status:_0x5a1bb6,date:_0xd1edf4,updatedAt:_0x171862,showAll:_0x48901a,userId:_0x5be9b0,withUnreadMessages:_0x5f2c18,companyId:_0x47a9de})=>{const _0xa09654=a584_0x4b8ebd;let _0x1e7414={[sequelize_1['Op']['or']]:[{'userId':_0x5be9b0},{'status':_0xa09654(0x1f4)}],'queueId':{[sequelize_1['Op']['or']]:[_0x277826,null]}},_0x299517;_0x299517=[{'model':Contact_1['default'],'as':_0xa09654(0x1ea),'attributes':['id','name',_0xa09654(0x20a),_0xa09654(0x1fa),_0xa09654(0x1e8),_0xa09654(0x20c)]},{'model':Queue_1[_0xa09654(0x219)],'as':_0xa09654(0x1ed),'attributes':['id',_0xa09654(0x201),_0xa09654(0x206)]},{'model':User_1['default'],'as':_0xa09654(0x220),'attributes':['id',_0xa09654(0x201)]},{'model':Tag_1[_0xa09654(0x219)],'as':_0xa09654(0x1f0),'attributes':['id','name',_0xa09654(0x206)]},{'model':Whatsapp_1[_0xa09654(0x219)],'as':_0xa09654(0x1fe),'attributes':[_0xa09654(0x201)]}];_0x48901a===_0xa09654(0x21c)&&(_0x1e7414={'queueId':{[sequelize_1['Op']['or']]:[_0x277826,null]}});_0x1e7414={..._0x1e7414,'status':{[sequelize_1['Op']['or']]:[_0xa09654(0x1f4),_0xa09654(0x218)]}};if(searchParam){const _0x1bf273=searchParam['toLocaleLowerCase']()[_0xa09654(0x1fd)]();_0x299517=[..._0x299517,{'model':Message_1[_0xa09654(0x219)],'as':'messages','attributes':['id',_0xa09654(0x1fb)],'where':{'body':(0x0,sequelize_1[_0xa09654(0x203)])((0x0,sequelize_1['fn'])(_0xa09654(0x1ee),(0x0,sequelize_1[_0xa09654(0x1e9)])(_0xa09654(0x1fb))),_0xa09654(0x1f8),'%'+_0x1bf273+'%')},'required':![],'duplicating':![]}],_0x1e7414={..._0x1e7414,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1[_0xa09654(0x203)])((0x0,sequelize_1['fn'])(_0xa09654(0x1ee),(0x0,sequelize_1['col'])(_0xa09654(0x1fc))),'LIKE','%'+_0x1bf273+'%')},{'$contact.number$':{[sequelize_1['Op'][_0xa09654(0x208)]]:'%'+_0x1bf273+'%'}},{'$message.body$':(0x0,sequelize_1['where'])((0x0,sequelize_1['fn'])(_0xa09654(0x1ee),(0x0,sequelize_1[_0xa09654(0x1e9)])('body')),_0xa09654(0x1f8),'%'+_0x1bf273+'%')}]};}_0xd1edf4&&(_0x1e7414={'createdAt':{[sequelize_1['Op'][_0xa09654(0x215)]]:[+(0x0,date_fns_1['startOfDay'])((0x0,date_fns_1[_0xa09654(0x1e7)])(_0xd1edf4)),+(0x0,date_fns_1[_0xa09654(0x20e)])((0x0,date_fns_1[_0xa09654(0x1e7)])(_0xd1edf4))]}});_0x171862&&(_0x1e7414={'updatedAt':{[sequelize_1['Op']['between']]:[+(0x0,date_fns_1[_0xa09654(0x1f7)])((0x0,date_fns_1[_0xa09654(0x1e7)])(_0x171862)),+(0x0,date_fns_1[_0xa09654(0x20e)])((0x0,date_fns_1[_0xa09654(0x1e7)])(_0x171862))]}});if(_0x5f2c18===_0xa09654(0x21c)){const _0x59efeb=await(0x0,ShowUserService_1['default'])(_0x5be9b0,_0x47a9de),_0x1b6dbb=_0x59efeb[_0xa09654(0x20b)][_0xa09654(0x21f)](_0x53f035=>_0x53f035['id']);_0x1e7414={[sequelize_1['Op']['or']]:[{'userId':_0x5be9b0},{'status':_0xa09654(0x1f4)}],'queueId':{[sequelize_1['Op']['or']]:[_0x1b6dbb,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0}};}if(Array[_0xa09654(0x1f9)](_0x5c9f3c)&&_0x5c9f3c[_0xa09654(0x21e)]>0x0){const _0x5b78e4=[];for(let _0x426b58 of _0x5c9f3c){const _0x28280f=await TicketTag_1[_0xa09654(0x219)][_0xa09654(0x214)]({'where':{'tagId':_0x426b58}});_0x28280f&&_0x5b78e4['push'](_0x28280f[_0xa09654(0x21f)](_0x247430=>_0x247430['ticketId']));}const _0x1aad94=(0x0,lodash_1[_0xa09654(0x216)])(..._0x5b78e4);_0x1e7414={..._0x1e7414,'id':{[sequelize_1['Op']['in']]:_0x1aad94}};}if(Array[_0xa09654(0x1f9)](_0x4b7d23)&&_0x4b7d23[_0xa09654(0x21e)]>0x0){const _0x2be89=[];for(let _0x2f7026 of _0x4b7d23){const _0x32d3fc=await Ticket_1[_0xa09654(0x219)][_0xa09654(0x214)]({'where':{'userId':_0x2f7026}});_0x32d3fc&&_0x2be89[_0xa09654(0x1e4)](_0x32d3fc[_0xa09654(0x21f)](_0x1afe3c=>_0x1afe3c['id']));}const _0x2965ba=(0x0,lodash_1[_0xa09654(0x216)])(..._0x2be89);_0x1e7414={..._0x1e7414,'id':{[sequelize_1['Op']['in']]:_0x2965ba}};}const _0xb068a1=0x28,_0x10e3eb=_0xb068a1*(+pageNumber-0x1);_0x1e7414={..._0x1e7414,'companyId':_0x47a9de};const {count:_0x5367f2,rows:_0x3ddcb7}=await Ticket_1[_0xa09654(0x219)][_0xa09654(0x209)]({'where':_0x1e7414,'include':_0x299517,'distinct':!![],'limit':_0xb068a1,'offset':_0x10e3eb,'order':[[_0xa09654(0x1f5),'DESC']],'subQuery':![]}),_0x37c53a=_0x5367f2>_0x10e3eb+_0x3ddcb7[_0xa09654(0x21e)];return{'tickets':_0x3ddcb7,'count':_0x5367f2,'hasMore':_0x37c53a};};exports[a584_0x4b8ebd(0x219)]=ListTicketsServiceKanban;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
