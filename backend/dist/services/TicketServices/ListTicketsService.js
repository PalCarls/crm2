'use strict';const a594_0x1fdd82=a594_0x37e5;(function(_0x4f9523,_0x3d9894){const _0x5b2d50=a594_0x37e5,_0x1f521b=_0x4f9523();while(!![]){try{const _0x1d0f88=-parseInt(_0x5b2d50(0x9f))/0x1+parseInt(_0x5b2d50(0xde))/0x2+parseInt(_0x5b2d50(0xb3))/0x3*(parseInt(_0x5b2d50(0xab))/0x4)+-parseInt(_0x5b2d50(0xbd))/0x5+parseInt(_0x5b2d50(0xaa))/0x6+-parseInt(_0x5b2d50(0xcf))/0x7+parseInt(_0x5b2d50(0xcb))/0x8;if(_0x1d0f88===_0x3d9894)break;else _0x1f521b['push'](_0x1f521b['shift']());}catch(_0x519aa2){_0x1f521b['push'](_0x1f521b['shift']());}}}(a594_0x15df,0xe7d98));var __importDefault=this&&this[a594_0x1fdd82(0xda)]||function(_0x1e4923){const _0x7a88e1=a594_0x1fdd82;return _0x1e4923&&_0x1e4923[_0x7a88e1(0xc6)]?_0x1e4923:{'default':_0x1e4923};};function a594_0x15df(){const _0x422dd1=['user','10387688FhxztS','name','allowGroup','groupAsTicket','9448537KNkSXR','profilePicUrl','sequelize','enabled','number','unaccent','default','allUserChat','color','active','companyId','__importDefault','group','where','whatsappId','1231634luXOcy','allTicket','lgpd','profile','closed','contactTags','true','contact.name','queues','disable','1047720saTaKh','search','lodash','toLocaleLowerCase','MAX(\x22id\x22)','trim','queue','LOWER','admin','isArray','messages','8912232NeNWHC','4LcACga','updatedAt','push','enable','extraInfo','map','intersection','body','2964279sfaooS','literal','findAll','like','../../models/Message','length','../UserServices/ShowUserService','nps','col','../../models/Tag','5202880NGRyPO','contactId','DESC','../../models/Ticket','pending','defineProperty','open','findAndCountAll','../../models/Queue','__esModule','false','../../models/Whatsapp','LIKE'];a594_0x15df=function(){return _0x422dd1;};return a594_0x15df();}Object[a594_0x1fdd82(0xc2)](exports,a594_0x1fdd82(0xc6),{'value':!![]});function a594_0x37e5(_0x198ecf,_0x2c6718){const _0x15df83=a594_0x15df();return a594_0x37e5=function(_0x37e55b,_0x20154e){_0x37e55b=_0x37e55b-0x98;let _0x34cbaf=_0x15df83[_0x37e55b];return _0x34cbaf;},a594_0x37e5(_0x198ecf,_0x2c6718);}const sequelize_1=require(a594_0x1fdd82(0xd1)),Ticket_1=__importDefault(require(a594_0x1fdd82(0xc0))),Contact_1=__importDefault(require('../../models/Contact')),Message_1=__importDefault(require(a594_0x1fdd82(0xb7))),Queue_1=__importDefault(require(a594_0x1fdd82(0xc5))),User_1=__importDefault(require('../../models/User')),ShowUserService_1=__importDefault(require(a594_0x1fdd82(0xb9))),Tag_1=__importDefault(require(a594_0x1fdd82(0xbc))),lodash_1=require(a594_0x1fdd82(0xa1)),Whatsapp_1=__importDefault(require(a594_0x1fdd82(0xc8))),ContactTag_1=__importDefault(require('../../models/ContactTag')),remove_accents_1=__importDefault(require('remove-accents')),isQueueIdHistoryBlocked_1=__importDefault(require('../UserServices/isQueueIdHistoryBlocked')),ListTicketsService=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x520276,tags:_0xe8a559,users:_0x682ad5,status:_0x337096,date:_0x49f89f,dateStart:_0x32d342,dateEnd:_0x1ddc55,updatedAt:_0x28815e,showAll:_0x4e6b71,userId:_0xb859f7,withUnreadMessages:_0x185de0,whatsappIds:_0x226352,statusFilters:_0x1ce9e5,companyId:_0x3f949b})=>{const _0x248325=a594_0x1fdd82,_0x4ea756=await(0x0,isQueueIdHistoryBlocked_1['default'])({'userRequest':_0xb859f7});let _0x4ee2e3;!_0x4ea756?_0x4ee2e3={[sequelize_1['Op']['or']]:[{'userId':_0xb859f7},{'status':_0x248325(0xc1)}],'queueId':{[sequelize_1['Op']['or']]:[_0x520276,null]},'companyId':_0x3f949b}:_0x4ee2e3={[sequelize_1['Op']['or']]:[{'userId':_0xb859f7},{'status':_0x248325(0xc1)}],'companyId':_0x3f949b};let _0x2ba46c;_0x2ba46c=[{'model':Contact_1['default'],'as':'contact','attributes':['id',_0x248325(0xcc),_0x248325(0xd3),'email',_0x248325(0xd0),'acceptAudioMessage',_0x248325(0xd8),'urlPicture',_0x248325(0xd9)],'include':[_0x248325(0xaf),_0x248325(0x9a)]},{'model':Queue_1[_0x248325(0xd5)],'as':_0x248325(0xa5),'attributes':['id',_0x248325(0xcc),_0x248325(0xd7)]},{'model':User_1[_0x248325(0xd5)],'as':'user','attributes':['id',_0x248325(0xcc)]},{'model':Tag_1[_0x248325(0xd5)],'as':'tags','attributes':['id',_0x248325(0xcc),_0x248325(0xd7)]},{'model':Whatsapp_1['default'],'as':'whatsapp','attributes':['id',_0x248325(0xcc),'expiresTicket',_0x248325(0xce)]}];const _0x4d0362=await(0x0,ShowUserService_1[_0x248325(0xd5)])(_0xb859f7,_0x3f949b),_0x4a3cf4=_0x4d0362[_0x248325(0x9d)]['map'](_0xf40196=>_0xf40196['id']);_0x337096===_0x248325(0xc3)&&(_0x4ee2e3={..._0x4ee2e3,'userId':_0xb859f7,'queueId':{[sequelize_1['Op']['in']]:_0x520276}});_0x337096===_0x248325(0xdb)&&(_0x4d0362[_0x248325(0xcd)]||_0x4e6b71===_0x248325(0x9b))&&(_0x4ee2e3={..._0x4ee2e3,'queueId':{[sequelize_1['Op']['or']]:[_0x520276,null]}});if(_0x4d0362[_0x248325(0x98)]===_0x248325(0xca)&&_0x337096===_0x248325(0xc1)&&_0x4d0362[_0x248325(0xdf)]===_0x248325(0xae)){const _0x480e2c=[];let _0x30a383=[];!_0x4ea756?_0x30a383=await Ticket_1['default']['findAll']({'where':{'userId':{[sequelize_1['Op']['or']]:[_0x4d0362['id'],null]},'queueId':{[sequelize_1['Op']['or']]:[_0x520276,null]},'status':'pending','companyId':_0x3f949b}}):_0x30a383=await Ticket_1[_0x248325(0xd5)][_0x248325(0xb5)]({'where':{'userId':{[sequelize_1['Op']['or']]:[_0x4d0362['id'],null]},'status':_0x248325(0xc1),'companyId':_0x3f949b}});_0x30a383&&_0x480e2c['push'](_0x30a383[_0x248325(0xb0)](_0x41718b=>_0x41718b['id']));const _0x1c35a5=(0x0,lodash_1['intersection'])(..._0x480e2c);_0x4ee2e3={..._0x4ee2e3,'id':_0x1c35a5};}if(_0x4d0362[_0x248325(0x98)]===_0x248325(0xca)&&_0x337096==='pending'&&_0x4d0362[_0x248325(0xdf)]===_0x248325(0x9e)){const _0x507bdc=[];let _0x412dad=[];!_0x4ea756?_0x412dad=await Ticket_1['default'][_0x248325(0xb5)]({'where':{'companyId':_0x3f949b,'userId':{[sequelize_1['Op']['or']]:[_0x4d0362['id'],null]},'status':_0x248325(0xc1),'queueId':{[sequelize_1['Op']['in']]:_0x520276}}}):_0x412dad=await Ticket_1[_0x248325(0xd5)][_0x248325(0xb5)]({'where':{'companyId':_0x3f949b,[sequelize_1['Op']['or']]:[{'userId':{[sequelize_1['Op']['or']]:[_0x4d0362['id'],null]}},{'status':_0x248325(0xc1)}],'status':_0x248325(0xc1)}});_0x412dad&&_0x507bdc[_0x248325(0xad)](_0x412dad[_0x248325(0xb0)](_0x12a7d9=>_0x12a7d9['id']));const _0xa4f5a8=(0x0,lodash_1['intersection'])(..._0x507bdc);_0x4ee2e3={..._0x4ee2e3,'id':_0xa4f5a8};}_0x4e6b71===_0x248325(0x9b)&&(_0x4d0362[_0x248325(0x98)]===_0x248325(0xa7)||_0x4d0362[_0x248325(0xd6)]===_0x248325(0xd2))&&(_0x4d0362['allHistoric']==='enabled'?_0x4ee2e3={}:_0x4ee2e3={'queueId':{[sequelize_1['Op']['or']]:[_0x520276,null]}});_0x337096&&_0x337096!==_0x248325(0xa0)&&(_0x4ee2e3={..._0x4ee2e3,'status':_0x337096});if(_0x337096==='closed'){let _0x446dfe;if(!_0x4ea756){let _0x198a6e={'companyId':_0x3f949b,'status':'closed'};_0x4e6b71===_0x248325(0xc7)&&_0x4d0362['profile']===_0x248325(0xa7)?_0x198a6e={..._0x198a6e,'queueId':_0x520276,'userId':_0xb859f7}:_0x198a6e={..._0x198a6e,'queueId':_0x4e6b71===_0x248325(0x9b)||_0x4d0362[_0x248325(0xdf)]===_0x248325(0xae)?{[sequelize_1['Op']['or']]:[_0x520276,null]}:_0x520276},_0x446dfe=await Ticket_1[_0x248325(0xd5)][_0x248325(0xb5)]({'attributes':['companyId','contactId',_0x248325(0xdd),[(0x0,sequelize_1[_0x248325(0xb4)])(_0x248325(0xa3)),'id']],'where':_0x198a6e,'group':[_0x248325(0xd9),'contactId',_0x248325(0xdd)]});}else{let _0x13f642={'companyId':_0x3f949b,'status':_0x248325(0x99)};_0x4e6b71===_0x248325(0xc7)&&(_0x4d0362[_0x248325(0x98)]===_0x248325(0xa7)||_0x4d0362[_0x248325(0xd6)]==='enabled')&&(_0x13f642={..._0x13f642,'queueId':_0x520276,'userId':_0xb859f7}),_0x446dfe=await Ticket_1[_0x248325(0xd5)][_0x248325(0xb5)]({'attributes':[_0x248325(0xd9),_0x248325(0xbe),_0x248325(0xdd),[(0x0,sequelize_1[_0x248325(0xb4)])(_0x248325(0xa3)),'id']],'where':_0x13f642,'group':[_0x248325(0xd9),'contactId','whatsappId']});}const _0x5b7a73=_0x446dfe[_0x248325(0xb0)](_0x32d43a=>_0x32d43a['id']);_0x4ee2e3={'id':_0x5b7a73};};if(_0x337096===_0x248325(0xa0)){_0x4ee2e3={'companyId':_0x3f949b};let _0x2b549b;if(!_0x4ea756&&_0x4d0362[_0x248325(0x98)]===_0x248325(0xca))_0x2b549b=await Ticket_1[_0x248325(0xd5)][_0x248325(0xb5)]({'attributes':[_0x248325(0xd9),_0x248325(0xbe),_0x248325(0xdd),[(0x0,sequelize_1[_0x248325(0xb4)])(_0x248325(0xa3)),'id']],'where':{[sequelize_1['Op']['or']]:[{'userId':_0xb859f7},{'status':[_0x248325(0xc1),_0x248325(0x99)]}],'queueId':_0x4e6b71===_0x248325(0x9b)||_0x4d0362[_0x248325(0xdf)]===_0x248325(0xae)?{[sequelize_1['Op']['or']]:[_0x520276,null]}:_0x520276,'companyId':_0x3f949b},'group':['companyId',_0x248325(0xbe),'whatsappId']});else{let _0x4a58bc={'companyId':_0x3f949b,[sequelize_1['Op']['or']]:[{'userId':_0xb859f7},{'status':[_0x248325(0xc1),_0x248325(0x99)]}]};if(_0x4e6b71==='false'&&_0x4d0362[_0x248325(0x98)]==='admin')_0x4a58bc={..._0x4a58bc,'queueId':_0x520276};else _0x4e6b71===_0x248325(0x9b)&&_0x4d0362[_0x248325(0x98)]===_0x248325(0xa7)&&(_0x4a58bc={'companyId':_0x3f949b,'queueId':_0x520276});_0x2b549b=await Ticket_1['default']['findAll']({'attributes':[_0x248325(0xd9),'contactId',_0x248325(0xdd),[(0x0,sequelize_1[_0x248325(0xb4)])(_0x248325(0xa3)),'id']],'where':_0x4a58bc,'group':[_0x248325(0xd9),_0x248325(0xbe),_0x248325(0xdd)]});}const _0x19d5cf=_0x2b549b[_0x248325(0xb0)](_0x33413a=>_0x33413a['id']);_0x4ee2e3={..._0x4ee2e3,'id':{[sequelize_1['Op']['in']]:_0x19d5cf}};if(searchParam){const _0x4ceb69=(0x0,remove_accents_1[_0x248325(0xd5)])(searchParam[_0x248325(0xa2)]()[_0x248325(0xa4)]());_0x2ba46c=[..._0x2ba46c,{'model':Message_1['default'],'as':_0x248325(0xa9),'attributes':['id',_0x248325(0xb2)],'where':{'body':(0x0,sequelize_1[_0x248325(0xdc)])((0x0,sequelize_1['fn'])(_0x248325(0xa6),(0x0,sequelize_1['fn'])(_0x248325(0xd4),(0x0,sequelize_1[_0x248325(0xbb)])(_0x248325(0xb2)))),_0x248325(0xc9),'%'+_0x4ceb69+'%')},'required':![],'duplicating':![]}],_0x4ee2e3={..._0x4ee2e3,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1[_0x248325(0xdc)])((0x0,sequelize_1['fn'])(_0x248325(0xa6),(0x0,sequelize_1['fn'])(_0x248325(0xd4),(0x0,sequelize_1[_0x248325(0xbb)])(_0x248325(0x9c)))),'LIKE','%'+_0x4ceb69+'%')},{'$contact.number$':{[sequelize_1['Op'][_0x248325(0xb6)]]:'%'+_0x4ceb69+'%'}},{'$message.body$':(0x0,sequelize_1[_0x248325(0xdc)])((0x0,sequelize_1['fn'])(_0x248325(0xa6),(0x0,sequelize_1['fn'])(_0x248325(0xd4),(0x0,sequelize_1['col'])(_0x248325(0xb2)))),_0x248325(0xc9),'%'+_0x4ceb69+'%')}]};}if(Array['isArray'](_0xe8a559)&&_0xe8a559['length']>0x0){const _0x2e9617=[],_0x495b69=await ContactTag_1[_0x248325(0xd5)][_0x248325(0xb5)]({'where':{'tagId':{[sequelize_1['Op']['in']]:_0xe8a559}}});_0x495b69&&_0x2e9617[_0x248325(0xad)](_0x495b69[_0x248325(0xb0)](_0x433873=>_0x433873[_0x248325(0xbe)]));const _0x330de2=(0x0,lodash_1[_0x248325(0xb1)])(..._0x2e9617);_0x4ee2e3={..._0x4ee2e3,'contactId':{[sequelize_1['Op']['in']]:_0x330de2}};}Array['isArray'](_0x682ad5)&&_0x682ad5[_0x248325(0xb8)]>0x0&&(_0x4ee2e3={..._0x4ee2e3,'userId':{[sequelize_1['Op']['in']]:_0x682ad5}}),Array[_0x248325(0xa8)](_0x226352)&&_0x226352[_0x248325(0xb8)]>0x0&&(_0x4ee2e3={..._0x4ee2e3,'whatsappId':{[sequelize_1['Op']['in']]:_0x226352}}),Array[_0x248325(0xa8)](_0x1ce9e5)&&_0x1ce9e5[_0x248325(0xb8)]>0x0&&(_0x4ee2e3={..._0x4ee2e3,'status':{[sequelize_1['Op']['in']]:_0x1ce9e5}});}_0x185de0===_0x248325(0x9b)&&(_0x4ee2e3={[sequelize_1['Op']['or']]:[{'userId':_0xb859f7,'status':{[sequelize_1['Op']['notIn']]:[_0x248325(0x99),_0x248325(0xe0),_0x248325(0xba)]},'queueId':{[sequelize_1['Op']['in']]:_0x4a3cf4},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0},'companyId':_0x3f949b},{'status':{[sequelize_1['Op']['in']]:[_0x248325(0xc1),_0x248325(0xdb)]},'queueId':{[sequelize_1['Op']['or']]:[_0x4a3cf4,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0},'companyId':_0x3f949b}]},_0x337096===_0x248325(0xdb)&&(_0x4d0362[_0x248325(0xcd)]||_0x4e6b71==='true')&&(_0x4ee2e3={..._0x4ee2e3,'queueId':{[sequelize_1['Op']['or']]:[_0x4a3cf4,null]}}));_0x4ee2e3={..._0x4ee2e3,'companyId':_0x3f949b};const _0x55de3f=0x28,_0x40492a=_0x55de3f*(+pageNumber-0x1),{count:_0x448eaa,rows:_0x292d3d}=await Ticket_1[_0x248325(0xd5)][_0x248325(0xc4)]({'where':_0x4ee2e3,'include':_0x2ba46c,'distinct':!![],'limit':_0x55de3f,'offset':_0x40492a,'order':[[_0x248325(0xac),_0x248325(0xbf)]],'subQuery':![]}),_0xab7740=_0x448eaa>_0x40492a+_0x292d3d[_0x248325(0xb8)];return{'tickets':_0x292d3d,'count':_0x448eaa,'hasMore':_0xab7740};};exports['default']=ListTicketsService;