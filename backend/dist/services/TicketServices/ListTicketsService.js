<<<<<<< HEAD
'use strict';const a584_0x3f583=a584_0x5be3;(function(_0x2cfb1d,_0x1b99a2){const _0x102ff1=a584_0x5be3,_0x12025e=_0x2cfb1d();while(!![]){try{const _0x2a0464=-parseInt(_0x102ff1(0x1e9))/0x1+-parseInt(_0x102ff1(0x1d0))/0x2*(parseInt(_0x102ff1(0x1f3))/0x3)+-parseInt(_0x102ff1(0x1bd))/0x4*(-parseInt(_0x102ff1(0x1f1))/0x5)+parseInt(_0x102ff1(0x1f7))/0x6*(-parseInt(_0x102ff1(0x1da))/0x7)+-parseInt(_0x102ff1(0x1c3))/0x8*(-parseInt(_0x102ff1(0x1ca))/0x9)+parseInt(_0x102ff1(0x1bb))/0xa+parseInt(_0x102ff1(0x1cc))/0xb;if(_0x2a0464===_0x1b99a2)break;else _0x12025e['push'](_0x12025e['shift']());}catch(_0xd561ef){_0x12025e['push'](_0x12025e['shift']());}}}(a584_0x47ca,0x4e3d9));var __importDefault=this&&this[a584_0x3f583(0x1fb)]||function(_0x5a88bf){const _0x1785b1=a584_0x3f583;return _0x5a88bf&&_0x5a88bf[_0x1785b1(0x1d4)]?_0x5a88bf:{'default':_0x5a88bf};};function a584_0x47ca(){const _0x52e537=['disable','findAndCountAll','enable','2212101RWtBMr','../../models/ContactTag','13443859KbyHQj','intersection','admin','closed','12khtbzU','col','queues','profile','__esModule','extraInfo','LOWER','group','color','literal','4011CIRvdx','toLocaleLowerCase','../../models/User','nps','name','LIKE','contact.name','MAX(\x22id\x22)','sequelize','push','notIn','length','findAll','defineProperty','number','599153nihkFR','user','messages','allTicket','allHistoric','active','companyId','lodash','13270AACuZp','queue','304212ZMIRyt','contactId','unaccent','email','3306hzOnQh','../../models/Message','pending','true','__importDefault','default','contactTags','search','lgpd','allowGroup','updatedAt','tags','../../models/Whatsapp','2776170HLhRlr','isArray','148SgstlP','whatsappId','map','open','body','where','8nqyaWM','trim','contact','false'];a584_0x47ca=function(){return _0x52e537;};return a584_0x47ca();}function a584_0x5be3(_0x407987,_0x264df4){const _0x47ca2b=a584_0x47ca();return a584_0x5be3=function(_0x5be361,_0x19e447){_0x5be361=_0x5be361-0x1b5;let _0x18ebd2=_0x47ca2b[_0x5be361];return _0x18ebd2;},a584_0x5be3(_0x407987,_0x264df4);}Object[a584_0x3f583(0x1e7)](exports,a584_0x3f583(0x1d4),{'value':!![]});const sequelize_1=require(a584_0x3f583(0x1e2)),Ticket_1=__importDefault(require('../../models/Ticket')),Contact_1=__importDefault(require('../../models/Contact')),Message_1=__importDefault(require(a584_0x3f583(0x1f8))),Queue_1=__importDefault(require('../../models/Queue')),User_1=__importDefault(require(a584_0x3f583(0x1dc))),ShowUserService_1=__importDefault(require('../UserServices/ShowUserService')),Tag_1=__importDefault(require('../../models/Tag')),lodash_1=require(a584_0x3f583(0x1f0)),Whatsapp_1=__importDefault(require(a584_0x3f583(0x1ba))),ContactTag_1=__importDefault(require(a584_0x3f583(0x1cb))),remove_accents_1=__importDefault(require('remove-accents')),isQueueIdHistoryBlocked_1=__importDefault(require('../UserServices/isQueueIdHistoryBlocked')),ListTicketsService=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x19650f,tags:_0x54f50b,users:_0x2bfa2c,status:_0x52eee2,date:_0x1c0ef9,dateStart:_0x5ec543,dateEnd:_0x4b64c0,updatedAt:_0x260bdb,showAll:_0x119c0e,userId:_0xa29882,withUnreadMessages:_0x56fa4f,whatsappIds:_0x44c66d,statusFilters:_0x1c2643,companyId:_0x23989f})=>{const _0x209722=a584_0x3f583,_0x5a742c=await(0x0,isQueueIdHistoryBlocked_1[_0x209722(0x1fc)])({'userRequest':_0xa29882});let _0x5631a3;!_0x5a742c?_0x5631a3={[sequelize_1['Op']['or']]:[{'userId':_0xa29882},{'status':_0x209722(0x1f9)}],'queueId':{[sequelize_1['Op']['or']]:[_0x19650f,null]},'companyId':_0x23989f}:_0x5631a3={[sequelize_1['Op']['or']]:[{'userId':_0xa29882},{'status':_0x209722(0x1f9)}],'companyId':_0x23989f};let _0x11e67d;_0x11e67d=[{'model':Contact_1[_0x209722(0x1fc)],'as':_0x209722(0x1c5),'attributes':['id',_0x209722(0x1de),_0x209722(0x1e8),_0x209722(0x1f6),'profilePicUrl','acceptAudioMessage',_0x209722(0x1ee),'urlPicture','companyId'],'include':[_0x209722(0x1d5),_0x209722(0x1fd)]},{'model':Queue_1['default'],'as':_0x209722(0x1f2),'attributes':['id','name','color']},{'model':User_1[_0x209722(0x1fc)],'as':_0x209722(0x1ea),'attributes':['id',_0x209722(0x1de)]},{'model':Tag_1[_0x209722(0x1fc)],'as':_0x209722(0x1b9),'attributes':['id','name',_0x209722(0x1d8)]},{'model':Whatsapp_1['default'],'as':'whatsapp','attributes':['id',_0x209722(0x1de),'expiresTicket','groupAsTicket']}];const _0x427f2b=await(0x0,ShowUserService_1['default'])(_0xa29882,_0x23989f),_0x2a9570=_0x427f2b[_0x209722(0x1d2)][_0x209722(0x1bf)](_0x2949a6=>_0x2949a6['id']);_0x52eee2===_0x209722(0x1c0)&&(_0x5631a3={..._0x5631a3,'userId':_0xa29882,'queueId':{[sequelize_1['Op']['in']]:_0x19650f}});_0x52eee2===_0x209722(0x1d7)&&(_0x427f2b[_0x209722(0x1b7)]||_0x119c0e===_0x209722(0x1fa))&&(_0x5631a3={..._0x5631a3,'queueId':{[sequelize_1['Op']['or']]:[_0x19650f,null]}});if(_0x427f2b[_0x209722(0x1d3)]==='user'&&_0x52eee2===_0x209722(0x1f9)&&_0x427f2b[_0x209722(0x1ec)]===_0x209722(0x1c9)){const _0x123e05=[];let _0x41be3f=[];!_0x5a742c?_0x41be3f=await Ticket_1['default'][_0x209722(0x1e6)]({'where':{'userId':{[sequelize_1['Op']['or']]:[_0x427f2b['id'],null]},'queueId':{[sequelize_1['Op']['or']]:[_0x19650f,null]},'status':_0x209722(0x1f9),'companyId':_0x23989f}}):_0x41be3f=await Ticket_1[_0x209722(0x1fc)]['findAll']({'where':{'userId':{[sequelize_1['Op']['or']]:[_0x427f2b['id'],null]},'status':_0x209722(0x1f9),'companyId':_0x23989f}});_0x41be3f&&_0x123e05[_0x209722(0x1e3)](_0x41be3f[_0x209722(0x1bf)](_0x5eed16=>_0x5eed16['id']));const _0x40c4bc=(0x0,lodash_1['intersection'])(..._0x123e05);_0x5631a3={..._0x5631a3,'id':_0x40c4bc};}if(_0x427f2b[_0x209722(0x1d3)]===_0x209722(0x1ea)&&_0x52eee2==='pending'&&_0x427f2b['allTicket']===_0x209722(0x1c7)){const _0x4b237c=[];let _0x24971c=[];!_0x5a742c?_0x24971c=await Ticket_1[_0x209722(0x1fc)]['findAll']({'where':{'companyId':_0x23989f,'userId':{[sequelize_1['Op']['or']]:[_0x427f2b['id'],null]},'status':_0x209722(0x1f9),'queueId':{[sequelize_1['Op']['in']]:_0x19650f}}}):_0x24971c=await Ticket_1['default'][_0x209722(0x1e6)]({'where':{'companyId':_0x23989f,[sequelize_1['Op']['or']]:[{'userId':{[sequelize_1['Op']['or']]:[_0x427f2b['id'],null]}},{'status':_0x209722(0x1f9)}],'status':'pending'}});_0x24971c&&_0x4b237c['push'](_0x24971c[_0x209722(0x1bf)](_0x458fc0=>_0x458fc0['id']));const _0x5eebb3=(0x0,lodash_1[_0x209722(0x1cd)])(..._0x4b237c);_0x5631a3={..._0x5631a3,'id':_0x5eebb3};}_0x119c0e===_0x209722(0x1fa)&&(_0x427f2b['profile']===_0x209722(0x1ce)||_0x427f2b['allUserChat']==='enabled')&&(_0x427f2b[_0x209722(0x1ed)]==='enabled'?_0x5631a3={}:_0x5631a3={'queueId':{[sequelize_1['Op']['or']]:[_0x19650f,null]}});_0x52eee2&&_0x52eee2!==_0x209722(0x1b5)&&(_0x5631a3={..._0x5631a3,'status':_0x52eee2});if(_0x52eee2===_0x209722(0x1cf)){let _0x51f40f;if(!_0x5a742c){let _0xe0d546={'companyId':_0x23989f,'status':'closed'};_0x119c0e===_0x209722(0x1c6)&&_0x427f2b[_0x209722(0x1d3)]==='admin'?_0xe0d546={..._0xe0d546,'queueId':_0x19650f,'userId':_0xa29882}:_0xe0d546={..._0xe0d546,'queueId':_0x119c0e===_0x209722(0x1fa)||_0x427f2b['allTicket']==='enable'?{[sequelize_1['Op']['or']]:[_0x19650f,null]}:_0x19650f},_0x51f40f=await Ticket_1[_0x209722(0x1fc)]['findAll']({'attributes':[_0x209722(0x1ef),_0x209722(0x1f4),_0x209722(0x1be),[(0x0,sequelize_1['literal'])(_0x209722(0x1e1)),'id']],'where':_0xe0d546,'group':['companyId',_0x209722(0x1f4),_0x209722(0x1be)]});}else{let _0x42d965={'companyId':_0x23989f,'status':_0x209722(0x1cf)};_0x119c0e===_0x209722(0x1c6)&&(_0x427f2b[_0x209722(0x1d3)]===_0x209722(0x1ce)||_0x427f2b['allUserChat']==='enabled')&&(_0x42d965={..._0x42d965,'queueId':_0x19650f,'userId':_0xa29882}),_0x51f40f=await Ticket_1[_0x209722(0x1fc)]['findAll']({'attributes':[_0x209722(0x1ef),'contactId',_0x209722(0x1be),[(0x0,sequelize_1[_0x209722(0x1d9)])(_0x209722(0x1e1)),'id']],'where':_0x42d965,'group':[_0x209722(0x1ef),_0x209722(0x1f4),_0x209722(0x1be)]});}const _0x3db23c=_0x51f40f[_0x209722(0x1bf)](_0x3b3b4b=>_0x3b3b4b['id']);_0x5631a3={'id':_0x3db23c};};if(_0x52eee2===_0x209722(0x1b5)){_0x5631a3={'companyId':_0x23989f};let _0x7c7213;if(!_0x5a742c)_0x7c7213=await Ticket_1[_0x209722(0x1fc)]['findAll']({'attributes':['companyId',_0x209722(0x1f4),'whatsappId',[(0x0,sequelize_1[_0x209722(0x1d9)])(_0x209722(0x1e1)),'id']],'where':{[sequelize_1['Op']['or']]:[{'userId':_0xa29882},{'status':[_0x209722(0x1f9),'closed']}],'queueId':_0x119c0e==='true'||_0x427f2b[_0x209722(0x1ec)]==='enable'?{[sequelize_1['Op']['or']]:[_0x19650f,null]}:_0x19650f,'companyId':_0x23989f},'group':[_0x209722(0x1ef),_0x209722(0x1f4),_0x209722(0x1be)]});else{let _0x1df5d8={'companyId':_0x23989f,[sequelize_1['Op']['or']]:[{'userId':_0xa29882},{'status':[_0x209722(0x1f9),_0x209722(0x1cf)]}]};_0x119c0e===_0x209722(0x1c6)&&_0x427f2b[_0x209722(0x1d3)]===_0x209722(0x1ce)&&(_0x1df5d8={..._0x1df5d8,'queueId':_0x19650f}),_0x7c7213=await Ticket_1['default']['findAll']({'attributes':[_0x209722(0x1ef),_0x209722(0x1f4),'whatsappId',[(0x0,sequelize_1['literal'])(_0x209722(0x1e1)),'id']],'where':_0x1df5d8,'group':[_0x209722(0x1ef),_0x209722(0x1f4),_0x209722(0x1be)]});}const _0x19e317=_0x7c7213[_0x209722(0x1bf)](_0x23c7a5=>_0x23c7a5['id']);_0x5631a3={..._0x5631a3,'id':{[sequelize_1['Op']['in']]:_0x19e317}};if(searchParam){const _0x528dfd=(0x0,remove_accents_1['default'])(searchParam[_0x209722(0x1db)]()[_0x209722(0x1c4)]());_0x11e67d=[..._0x11e67d,{'model':Message_1[_0x209722(0x1fc)],'as':_0x209722(0x1eb),'attributes':['id',_0x209722(0x1c1)],'where':{'body':(0x0,sequelize_1[_0x209722(0x1c2)])((0x0,sequelize_1['fn'])(_0x209722(0x1d6),(0x0,sequelize_1['fn'])('unaccent',(0x0,sequelize_1['col'])(_0x209722(0x1c1)))),_0x209722(0x1df),'%'+_0x528dfd+'%')},'required':![],'duplicating':![]}],_0x5631a3={..._0x5631a3,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1['where'])((0x0,sequelize_1['fn'])('LOWER',(0x0,sequelize_1['fn'])(_0x209722(0x1f5),(0x0,sequelize_1[_0x209722(0x1d1)])(_0x209722(0x1e0)))),_0x209722(0x1df),'%'+_0x528dfd+'%')},{'$contact.number$':{[sequelize_1['Op']['like']]:'%'+_0x528dfd+'%'}},{'$message.body$':(0x0,sequelize_1[_0x209722(0x1c2)])((0x0,sequelize_1['fn'])('LOWER',(0x0,sequelize_1['fn'])(_0x209722(0x1f5),(0x0,sequelize_1[_0x209722(0x1d1)])(_0x209722(0x1c1)))),_0x209722(0x1df),'%'+_0x528dfd+'%')}]};}if(Array[_0x209722(0x1bc)](_0x54f50b)&&_0x54f50b[_0x209722(0x1e5)]>0x0){const _0x7efa7b=[],_0x8c9408=await ContactTag_1[_0x209722(0x1fc)][_0x209722(0x1e6)]({'where':{'tagId':{[sequelize_1['Op']['in']]:_0x54f50b}}});_0x8c9408&&_0x7efa7b[_0x209722(0x1e3)](_0x8c9408[_0x209722(0x1bf)](_0x3b034f=>_0x3b034f['contactId']));const _0x22c562=(0x0,lodash_1['intersection'])(..._0x7efa7b);_0x5631a3={..._0x5631a3,'contactId':{[sequelize_1['Op']['in']]:_0x22c562}};}Array['isArray'](_0x2bfa2c)&&_0x2bfa2c[_0x209722(0x1e5)]>0x0&&(_0x5631a3={..._0x5631a3,'userId':{[sequelize_1['Op']['in']]:_0x2bfa2c}}),Array[_0x209722(0x1bc)](_0x44c66d)&&_0x44c66d['length']>0x0&&(_0x5631a3={..._0x5631a3,'whatsappId':{[sequelize_1['Op']['in']]:_0x44c66d}}),Array[_0x209722(0x1bc)](_0x1c2643)&&_0x1c2643[_0x209722(0x1e5)]>0x0&&(_0x5631a3={..._0x5631a3,'status':{[sequelize_1['Op']['in']]:_0x1c2643}});}_0x56fa4f===_0x209722(0x1fa)&&(_0x5631a3={[sequelize_1['Op']['or']]:[{'userId':_0xa29882,'status':{[sequelize_1['Op'][_0x209722(0x1e4)]]:[_0x209722(0x1cf),_0x209722(0x1b6),_0x209722(0x1dd)]},'queueId':{[sequelize_1['Op']['in']]:_0x2a9570},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0},'companyId':_0x23989f},{'status':{[sequelize_1['Op']['in']]:[_0x209722(0x1f9),_0x209722(0x1d7)]},'queueId':{[sequelize_1['Op']['or']]:[_0x2a9570,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0},'companyId':_0x23989f}]},_0x52eee2===_0x209722(0x1d7)&&(_0x427f2b[_0x209722(0x1b7)]||_0x119c0e==='true')&&(_0x5631a3={..._0x5631a3,'queueId':{[sequelize_1['Op']['or']]:[_0x2a9570,null]}}));_0x5631a3={..._0x5631a3,'companyId':_0x23989f};const _0x1662ed=0x28,_0x4c3bf7=_0x1662ed*(+pageNumber-0x1),{count:_0x21d9c6,rows:_0x4e6d1a}=await Ticket_1[_0x209722(0x1fc)][_0x209722(0x1c8)]({'where':_0x5631a3,'include':_0x11e67d,'distinct':!![],'limit':_0x1662ed,'offset':_0x4c3bf7,'order':[[_0x209722(0x1b8),'DESC']],'subQuery':![]}),_0x449de3=_0x21d9c6>_0x4c3bf7+_0x4e6d1a[_0x209722(0x1e5)];return{'tickets':_0x4e6d1a,'count':_0x21d9c6,'hasMore':_0x449de3};};exports['default']=ListTicketsService;
=======
'use strict';function a583_0x7e5b(){const _0x20bc1c=['nps','user','allHistoric','DESC','1019934MSHahS','findAll','closed','../../models/User','disable','../../models/Contact','allowGroup','length','open','whatsappId','default','../../models/Queue','groupAsTicket','LIKE','admin','../../models/Whatsapp','contact','name','acceptAudioMessage','__importDefault','unaccent','profile','../../models/Message','body','false','urlPicture','group','search','enabled','contactId','like','LOWER','sequelize','../UserServices/isQueueIdHistoryBlocked','912soabZR','col','queue','findAndCountAll','../../models/Ticket','contactTags','2035782NRUMHB','allTicket','true','whatsapp','isArray','companyId','152xtEdTa','allUserChat','enable','1988tTTvBi','toLocaleLowerCase','contact.name','tags','literal','expiresTicket','../../models/Tag','color','notIn','active','lgpd','pending','where','1754385ozeMRq','222252uWAiTG','intersection','push','3731619LmAdse','__esModule','map','messages','324323vMGNEJ','MAX(\x22id\x22)'];a583_0x7e5b=function(){return _0x20bc1c;};return a583_0x7e5b();}const a583_0x48e877=a583_0x14e8;function a583_0x14e8(_0x44ea95,_0x3f5bb0){const _0x7e5bc3=a583_0x7e5b();return a583_0x14e8=function(_0x14e866,_0x1a9c78){_0x14e866=_0x14e866-0x179;let _0x3cad17=_0x7e5bc3[_0x14e866];return _0x3cad17;},a583_0x14e8(_0x44ea95,_0x3f5bb0);}(function(_0x595639,_0x33e8d8){const _0x2b1ae2=a583_0x14e8,_0x101479=_0x595639();while(!![]){try{const _0x4302a3=parseInt(_0x2b1ae2(0x1a5))/0x1+-parseInt(_0x2b1ae2(0x187))/0x2+-parseInt(_0x2b1ae2(0x1a1))/0x3+parseInt(_0x2b1ae2(0x19e))/0x4+parseInt(_0x2b1ae2(0x19d))/0x5+parseInt(_0x2b1ae2(0x181))/0x6*(parseInt(_0x2b1ae2(0x190))/0x7)+-parseInt(_0x2b1ae2(0x18d))/0x8*(-parseInt(_0x2b1ae2(0x1ab))/0x9);if(_0x4302a3===_0x33e8d8)break;else _0x101479['push'](_0x101479['shift']());}catch(_0x135247){_0x101479['push'](_0x101479['shift']());}}}(a583_0x7e5b,0xa2711));var __importDefault=this&&this[a583_0x48e877(0x1be)]||function(_0xcc09e4){const _0x4d280a=a583_0x48e877;return _0xcc09e4&&_0xcc09e4[_0x4d280a(0x1a2)]?_0xcc09e4:{'default':_0xcc09e4};};Object['defineProperty'](exports,a583_0x48e877(0x1a2),{'value':!![]});const sequelize_1=require(a583_0x48e877(0x17f)),Ticket_1=__importDefault(require(a583_0x48e877(0x185))),Contact_1=__importDefault(require(a583_0x48e877(0x1b0))),Message_1=__importDefault(require(a583_0x48e877(0x1c1))),Queue_1=__importDefault(require(a583_0x48e877(0x1b6))),User_1=__importDefault(require(a583_0x48e877(0x1ae))),ShowUserService_1=__importDefault(require('../UserServices/ShowUserService')),Tag_1=__importDefault(require(a583_0x48e877(0x196))),lodash_1=require('lodash'),Whatsapp_1=__importDefault(require(a583_0x48e877(0x1ba))),ContactTag_1=__importDefault(require('../../models/ContactTag')),remove_accents_1=__importDefault(require('remove-accents')),isQueueIdHistoryBlocked_1=__importDefault(require(a583_0x48e877(0x180))),ListTicketsService=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x254058,tags:_0x253b8a,users:_0x56d000,status:_0x34367c,date:_0x41ae2b,dateStart:_0x4e071d,dateEnd:_0x1f0aed,updatedAt:_0xe5eb37,showAll:_0x4f1f7c,userId:_0x46463f,withUnreadMessages:_0x130e75,whatsappIds:_0x3202ac,statusFilters:_0x8e770,companyId:_0x17eaf6})=>{const _0x4da7ba=a583_0x48e877,_0x289b97=await(0x0,isQueueIdHistoryBlocked_1[_0x4da7ba(0x1b5)])({'userRequest':_0x46463f});let _0x137c7c;!_0x289b97?_0x137c7c={[sequelize_1['Op']['or']]:[{'userId':_0x46463f},{'status':_0x4da7ba(0x19b)}],'queueId':{[sequelize_1['Op']['or']]:[_0x254058,null]},'companyId':_0x17eaf6}:_0x137c7c={[sequelize_1['Op']['or']]:[{'userId':_0x46463f},{'status':_0x4da7ba(0x19b)}],'companyId':_0x17eaf6};let _0x47c1e7;_0x47c1e7=[{'model':Contact_1[_0x4da7ba(0x1b5)],'as':_0x4da7ba(0x1bb),'attributes':['id',_0x4da7ba(0x1bc),'number','email','profilePicUrl',_0x4da7ba(0x1bd),_0x4da7ba(0x199),_0x4da7ba(0x1c4),_0x4da7ba(0x18c)],'include':['extraInfo',_0x4da7ba(0x186)]},{'model':Queue_1[_0x4da7ba(0x1b5)],'as':_0x4da7ba(0x183),'attributes':['id',_0x4da7ba(0x1bc),'color']},{'model':User_1[_0x4da7ba(0x1b5)],'as':_0x4da7ba(0x1a8),'attributes':['id',_0x4da7ba(0x1bc)]},{'model':Tag_1[_0x4da7ba(0x1b5)],'as':_0x4da7ba(0x193),'attributes':['id',_0x4da7ba(0x1bc),_0x4da7ba(0x197)]},{'model':Whatsapp_1['default'],'as':_0x4da7ba(0x18a),'attributes':['id',_0x4da7ba(0x1bc),_0x4da7ba(0x195),_0x4da7ba(0x1b7)]}];const _0x45e0d7=await(0x0,ShowUserService_1['default'])(_0x46463f,_0x17eaf6),_0x3d94bf=_0x45e0d7['queues'][_0x4da7ba(0x1a3)](_0x4e36c8=>_0x4e36c8['id']);_0x34367c===_0x4da7ba(0x1b3)&&(_0x137c7c={..._0x137c7c,'userId':_0x46463f,'queueId':{[sequelize_1['Op']['in']]:_0x254058}});_0x34367c==='group'&&(_0x45e0d7[_0x4da7ba(0x1b1)]||_0x4f1f7c===_0x4da7ba(0x189))&&(_0x137c7c={..._0x137c7c,'queueId':{[sequelize_1['Op']['or']]:[_0x254058,null]}});if(_0x45e0d7[_0x4da7ba(0x1c0)]==='user'&&_0x34367c===_0x4da7ba(0x19b)&&_0x45e0d7[_0x4da7ba(0x188)]===_0x4da7ba(0x18f)){const _0x463bd7=[];let _0x5d7f82=[];!_0x289b97?_0x5d7f82=await Ticket_1[_0x4da7ba(0x1b5)]['findAll']({'where':{'userId':{[sequelize_1['Op']['or']]:[_0x45e0d7['id'],null]},'queueId':{[sequelize_1['Op']['or']]:[_0x254058,null]},'status':_0x4da7ba(0x19b),'companyId':_0x17eaf6}}):_0x5d7f82=await Ticket_1[_0x4da7ba(0x1b5)][_0x4da7ba(0x1ac)]({'where':{'userId':{[sequelize_1['Op']['or']]:[_0x45e0d7['id'],null]},'status':_0x4da7ba(0x19b),'companyId':_0x17eaf6}});_0x5d7f82&&_0x463bd7[_0x4da7ba(0x1a0)](_0x5d7f82[_0x4da7ba(0x1a3)](_0x129b25=>_0x129b25['id']));const _0x27415d=(0x0,lodash_1[_0x4da7ba(0x19f)])(..._0x463bd7);_0x137c7c={..._0x137c7c,'id':_0x27415d};}if(_0x45e0d7['profile']===_0x4da7ba(0x1a8)&&_0x34367c===_0x4da7ba(0x19b)&&_0x45e0d7['allTicket']===_0x4da7ba(0x1af)){const _0x4a0241=[];let _0x9130a7=[];!_0x289b97?_0x9130a7=await Ticket_1[_0x4da7ba(0x1b5)]['findAll']({'where':{'companyId':_0x17eaf6,'userId':{[sequelize_1['Op']['or']]:[_0x45e0d7['id'],null]},'status':'pending','queueId':{[sequelize_1['Op']['in']]:_0x254058}}}):_0x9130a7=await Ticket_1[_0x4da7ba(0x1b5)][_0x4da7ba(0x1ac)]({'where':{'companyId':_0x17eaf6,[sequelize_1['Op']['or']]:[{'userId':{[sequelize_1['Op']['or']]:[_0x45e0d7['id'],null]}},{'status':_0x4da7ba(0x19b)}],'status':_0x4da7ba(0x19b)}});_0x9130a7&&_0x4a0241['push'](_0x9130a7[_0x4da7ba(0x1a3)](_0x44d538=>_0x44d538['id']));const _0x10c9fb=(0x0,lodash_1[_0x4da7ba(0x19f)])(..._0x4a0241);_0x137c7c={..._0x137c7c,'id':_0x10c9fb};}_0x4f1f7c===_0x4da7ba(0x189)&&(_0x45e0d7[_0x4da7ba(0x1c0)]===_0x4da7ba(0x1b9)||_0x45e0d7['allUserChat']===_0x4da7ba(0x17b))&&(_0x45e0d7[_0x4da7ba(0x1a9)]===_0x4da7ba(0x17b)?_0x137c7c={}:_0x137c7c={'queueId':{[sequelize_1['Op']['or']]:[_0x254058,null]}});_0x34367c&&_0x34367c!=='search'&&(_0x137c7c={..._0x137c7c,'status':_0x34367c});if(_0x34367c===_0x4da7ba(0x1ad)){let _0x14cfc9;if(!_0x289b97){let _0x510e95={'companyId':_0x17eaf6,'status':_0x4da7ba(0x1ad)};_0x4f1f7c===_0x4da7ba(0x1c3)&&_0x45e0d7['profile']===_0x4da7ba(0x1b9)?_0x510e95={..._0x510e95,'queueId':_0x254058,'userId':_0x46463f}:_0x510e95={..._0x510e95,'queueId':_0x4f1f7c===_0x4da7ba(0x189)||_0x45e0d7[_0x4da7ba(0x188)]===_0x4da7ba(0x18f)?{[sequelize_1['Op']['or']]:[_0x254058,null]}:_0x254058},_0x14cfc9=await Ticket_1[_0x4da7ba(0x1b5)][_0x4da7ba(0x1ac)]({'attributes':['companyId',_0x4da7ba(0x17c),'whatsappId',[(0x0,sequelize_1[_0x4da7ba(0x194)])('MAX(\x22id\x22)'),'id']],'where':_0x510e95,'group':[_0x4da7ba(0x18c),_0x4da7ba(0x17c),'whatsappId']});}else{let _0xf90095={'companyId':_0x17eaf6,'status':_0x4da7ba(0x1ad)};_0x4f1f7c==='false'&&(_0x45e0d7[_0x4da7ba(0x1c0)]===_0x4da7ba(0x1b9)||_0x45e0d7[_0x4da7ba(0x18e)]===_0x4da7ba(0x17b))&&(_0xf90095={..._0xf90095,'queueId':_0x254058,'userId':_0x46463f}),_0x14cfc9=await Ticket_1[_0x4da7ba(0x1b5)][_0x4da7ba(0x1ac)]({'attributes':[_0x4da7ba(0x18c),'contactId',_0x4da7ba(0x1b4),[(0x0,sequelize_1[_0x4da7ba(0x194)])(_0x4da7ba(0x1a6)),'id']],'where':_0xf90095,'group':[_0x4da7ba(0x18c),_0x4da7ba(0x17c),'whatsappId']});}const _0x4526db=_0x14cfc9[_0x4da7ba(0x1a3)](_0x573307=>_0x573307['id']);_0x137c7c={'id':_0x4526db};};if(_0x34367c===_0x4da7ba(0x17a)){_0x137c7c={'companyId':_0x17eaf6};let _0x5504b7;if(!_0x289b97)_0x5504b7=await Ticket_1[_0x4da7ba(0x1b5)][_0x4da7ba(0x1ac)]({'attributes':[_0x4da7ba(0x18c),_0x4da7ba(0x17c),_0x4da7ba(0x1b4),[(0x0,sequelize_1[_0x4da7ba(0x194)])(_0x4da7ba(0x1a6)),'id']],'where':{[sequelize_1['Op']['or']]:[{'userId':_0x46463f},{'status':[_0x4da7ba(0x19b),'closed']}],'queueId':_0x4f1f7c===_0x4da7ba(0x189)||_0x45e0d7[_0x4da7ba(0x188)]===_0x4da7ba(0x18f)?{[sequelize_1['Op']['or']]:[_0x254058,null]}:_0x254058,'companyId':_0x17eaf6},'group':[_0x4da7ba(0x18c),_0x4da7ba(0x17c),_0x4da7ba(0x1b4)]});else{let _0x1c9604={'companyId':_0x17eaf6,[sequelize_1['Op']['or']]:[{'userId':_0x46463f},{'status':[_0x4da7ba(0x19b),_0x4da7ba(0x1ad)]}]};_0x4f1f7c===_0x4da7ba(0x1c3)&&_0x45e0d7[_0x4da7ba(0x1c0)]==='admin'&&(_0x1c9604={..._0x1c9604,'queueId':_0x254058}),_0x5504b7=await Ticket_1[_0x4da7ba(0x1b5)]['findAll']({'attributes':[_0x4da7ba(0x18c),_0x4da7ba(0x17c),_0x4da7ba(0x1b4),[(0x0,sequelize_1['literal'])(_0x4da7ba(0x1a6)),'id']],'where':_0x1c9604,'group':[_0x4da7ba(0x18c),_0x4da7ba(0x17c),_0x4da7ba(0x1b4)]});}const _0x5b741f=_0x5504b7[_0x4da7ba(0x1a3)](_0x3c6d3e=>_0x3c6d3e['id']);_0x137c7c={..._0x137c7c,'id':{[sequelize_1['Op']['in']]:_0x5b741f}};if(searchParam){const _0x3d6b69=(0x0,remove_accents_1[_0x4da7ba(0x1b5)])(searchParam[_0x4da7ba(0x191)]()['trim']());_0x47c1e7=[..._0x47c1e7,{'model':Message_1[_0x4da7ba(0x1b5)],'as':_0x4da7ba(0x1a4),'attributes':['id',_0x4da7ba(0x1c2)],'where':{'body':(0x0,sequelize_1[_0x4da7ba(0x19c)])((0x0,sequelize_1['fn'])('LOWER',(0x0,sequelize_1['fn'])('unaccent',(0x0,sequelize_1[_0x4da7ba(0x182)])('body'))),_0x4da7ba(0x1b8),'%'+_0x3d6b69+'%')},'required':![],'duplicating':![]}],_0x137c7c={..._0x137c7c,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1[_0x4da7ba(0x19c)])((0x0,sequelize_1['fn'])(_0x4da7ba(0x17e),(0x0,sequelize_1['fn'])(_0x4da7ba(0x1bf),(0x0,sequelize_1[_0x4da7ba(0x182)])(_0x4da7ba(0x192)))),_0x4da7ba(0x1b8),'%'+_0x3d6b69+'%')},{'$contact.number$':{[sequelize_1['Op'][_0x4da7ba(0x17d)]]:'%'+_0x3d6b69+'%'}},{'$message.body$':(0x0,sequelize_1[_0x4da7ba(0x19c)])((0x0,sequelize_1['fn'])(_0x4da7ba(0x17e),(0x0,sequelize_1['fn'])(_0x4da7ba(0x1bf),(0x0,sequelize_1[_0x4da7ba(0x182)])(_0x4da7ba(0x1c2)))),_0x4da7ba(0x1b8),'%'+_0x3d6b69+'%')}]};}if(Array['isArray'](_0x253b8a)&&_0x253b8a['length']>0x0){const _0x1b2a99=[],_0x203d11=await ContactTag_1[_0x4da7ba(0x1b5)][_0x4da7ba(0x1ac)]({'where':{'tagId':{[sequelize_1['Op']['in']]:_0x253b8a}}});_0x203d11&&_0x1b2a99[_0x4da7ba(0x1a0)](_0x203d11[_0x4da7ba(0x1a3)](_0x5c6e01=>_0x5c6e01[_0x4da7ba(0x17c)]));const _0x2a0c03=(0x0,lodash_1['intersection'])(..._0x1b2a99);_0x137c7c={..._0x137c7c,'contactId':{[sequelize_1['Op']['in']]:_0x2a0c03}};}Array[_0x4da7ba(0x18b)](_0x56d000)&&_0x56d000['length']>0x0&&(_0x137c7c={..._0x137c7c,'userId':{[sequelize_1['Op']['in']]:_0x56d000}}),Array[_0x4da7ba(0x18b)](_0x3202ac)&&_0x3202ac[_0x4da7ba(0x1b2)]>0x0&&(_0x137c7c={..._0x137c7c,'whatsappId':{[sequelize_1['Op']['in']]:_0x3202ac}}),Array[_0x4da7ba(0x18b)](_0x8e770)&&_0x8e770[_0x4da7ba(0x1b2)]>0x0&&(_0x137c7c={..._0x137c7c,'status':{[sequelize_1['Op']['in']]:_0x8e770}});}_0x130e75===_0x4da7ba(0x189)&&(_0x137c7c={[sequelize_1['Op']['or']]:[{'userId':_0x46463f,'status':{[sequelize_1['Op'][_0x4da7ba(0x198)]]:[_0x4da7ba(0x1ad),_0x4da7ba(0x19a),_0x4da7ba(0x1a7)]},'queueId':{[sequelize_1['Op']['in']]:_0x3d94bf},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0},'companyId':_0x17eaf6},{'status':{[sequelize_1['Op']['in']]:[_0x4da7ba(0x19b),_0x4da7ba(0x179)]},'queueId':{[sequelize_1['Op']['or']]:[_0x3d94bf,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0},'companyId':_0x17eaf6}]},_0x34367c==='group'&&(_0x45e0d7['allowGroup']||_0x4f1f7c===_0x4da7ba(0x189))&&(_0x137c7c={..._0x137c7c,'queueId':{[sequelize_1['Op']['or']]:[_0x3d94bf,null]}}));_0x137c7c={..._0x137c7c,'companyId':_0x17eaf6};const _0xfe6817=0x28,_0x4ebf0c=_0xfe6817*(+pageNumber-0x1),{count:_0x49fca2,rows:_0x45fbbf}=await Ticket_1[_0x4da7ba(0x1b5)][_0x4da7ba(0x184)]({'where':_0x137c7c,'include':_0x47c1e7,'distinct':!![],'limit':_0xfe6817,'offset':_0x4ebf0c,'order':[['updatedAt',_0x4da7ba(0x1aa)]],'subQuery':![]}),_0x3e03df=_0x49fca2>_0x4ebf0c+_0x45fbbf[_0x4da7ba(0x1b2)];return{'tickets':_0x45fbbf,'count':_0x49fca2,'hasMore':_0x3e03df};};exports[a583_0x48e877(0x1b5)]=ListTicketsService;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
