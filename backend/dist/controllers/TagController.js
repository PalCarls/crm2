<<<<<<< HEAD
'use strict';const a35_0x446864=a35_0x53de;(function(_0x59880c,_0x1dc772){const _0x3182af=a35_0x53de,_0x44f980=_0x59880c();while(!![]){try{const _0x1806d3=parseInt(_0x3182af(0xc5))/0x1*(-parseInt(_0x3182af(0xec))/0x2)+-parseInt(_0x3182af(0xe8))/0x3*(-parseInt(_0x3182af(0xe1))/0x4)+parseInt(_0x3182af(0xc6))/0x5*(parseInt(_0x3182af(0xde))/0x6)+-parseInt(_0x3182af(0xd6))/0x7+-parseInt(_0x3182af(0xdb))/0x8+parseInt(_0x3182af(0xe5))/0x9+-parseInt(_0x3182af(0xe3))/0xa;if(_0x1806d3===_0x1dc772)break;else _0x44f980['push'](_0x44f980['shift']());}catch(_0x375954){_0x44f980['push'](_0x44f980['shift']());}}}(a35_0x3266,0x1ec59));var __importDefault=this&&this[a35_0x446864(0xcc)]||function(_0x3f4a77){const _0x1dafac=a35_0x446864;return _0x3f4a77&&_0x3f4a77[_0x1dafac(0xcb)]?_0x3f4a77:{'default':_0x3f4a77};};Object[a35_0x446864(0xed)](exports,'__esModule',{'value':!![]}),exports[a35_0x446864(0xd1)]=exports[a35_0x446864(0xd2)]=exports['list']=exports[a35_0x446864(0xcf)]=exports[a35_0x446864(0xc8)]=exports[a35_0x446864(0xcd)]=exports['store']=exports['index']=void 0x0;const socket_1=require(a35_0x446864(0xe9)),AppError_1=__importDefault(require(a35_0x446864(0xc3))),CreateService_1=__importDefault(require(a35_0x446864(0xc1))),ListService_1=__importDefault(require(a35_0x446864(0xc9))),UpdateService_1=__importDefault(require(a35_0x446864(0xd0))),ShowService_1=__importDefault(require(a35_0x446864(0xe2))),DeleteService_1=__importDefault(require(a35_0x446864(0xe0))),SimpleListService_1=__importDefault(require(a35_0x446864(0xce))),SyncTagsService_1=__importDefault(require(a35_0x446864(0xdf))),KanbanListService_1=__importDefault(require(a35_0x446864(0xd5))),index=async(_0x8bcfe4,_0x485f0f)=>{const _0x2e951a=a35_0x446864,{pageNumber:_0x534928,searchParam:_0x448988,kanban:_0x64a13a}=_0x8bcfe4[_0x2e951a(0xd7)],{companyId:_0x3a5949}=_0x8bcfe4[_0x2e951a(0xe7)],{tags:_0xdc98d8,count:_0x162d4a,hasMore:_0x170eaf}=await(0x0,ListService_1[_0x2e951a(0xc2)])({'searchParam':_0x448988,'pageNumber':_0x534928,'companyId':_0x3a5949,'kanban':_0x64a13a});return _0x485f0f[_0x2e951a(0xea)]({'tags':_0xdc98d8,'count':_0x162d4a,'hasMore':_0x170eaf});};exports[a35_0x446864(0xe4)]=index;const store=async(_0x2aa338,_0x42e5a0)=>{const _0x4aebe8=a35_0x446864,{name:_0x7ac9b7,color:_0x75f965,kanban:_0x2c2868}=_0x2aa338[_0x4aebe8(0xc7)],{companyId:_0x30a706}=_0x2aa338[_0x4aebe8(0xe7)],_0x44345b=await(0x0,CreateService_1[_0x4aebe8(0xc2)])({'name':_0x7ac9b7,'color':_0x75f965,'kanban':_0x2c2868,'companyId':_0x30a706}),_0x5d4f35=(0x0,socket_1['getIO'])();return _0x5d4f35[_0x4aebe8(0xda)]('company'+_0x30a706+_0x4aebe8(0xd8),{'action':_0x4aebe8(0xeb),'tag':_0x44345b}),_0x42e5a0[_0x4aebe8(0xdd)](0xc8)[_0x4aebe8(0xea)](_0x44345b);};exports[a35_0x446864(0xd4)]=store;function a35_0x53de(_0x1b7c89,_0x91a17a){const _0x3266ad=a35_0x3266();return a35_0x53de=function(_0x53de81,_0x203a9a){_0x53de81=_0x53de81-0xc1;let _0x4dff37=_0x3266ad[_0x53de81];return _0x4dff37;},a35_0x53de(_0x1b7c89,_0x91a17a);}function a35_0x3266(){const _0x101d53=['../services/TagServices/CreateService','default','../errors/AppError','delete','4933pdyvbR','1121345CFDzHv','body','update','../services/TagServices/ListService','params','__esModule','__importDefault','show','../services/TagServices/SimpleListService','remove','../services/TagServices/UpdateService','syncTags','kanban','profile','store','../services/TagServices/KanbanListService','1214360uFcPez','query','-tag','list','emit','905968UUJKrF','admin','status','6bpFfUB','../services/TagServices/SyncTagsService','../services/TagServices/DeleteService','855492teEjWx','../services/TagServices/ShowService','2276430QJbgPD','index','1864809lDIeGX','log','user','3cSZGas','../libs/socket','json','create','2ryvwEV','defineProperty'];a35_0x3266=function(){return _0x101d53;};return a35_0x3266();}const show=async(_0x58761a,_0x5288dd)=>{const _0x97d95=a35_0x446864,{tagId:_0x4fade8}=_0x58761a[_0x97d95(0xca)],_0x546ad1=await(0x0,ShowService_1['default'])(_0x4fade8);return _0x5288dd['status'](0xc8)[_0x97d95(0xea)](_0x546ad1);};exports[a35_0x446864(0xcd)]=show;const update=async(_0x1e02e0,_0x4916d4)=>{const _0xe66301=a35_0x446864,{kanban:_0x67b16e}=_0x1e02e0['body'];console[_0xe66301(0xe6)](_0x67b16e);if(_0x1e02e0[_0xe66301(0xe7)][_0xe66301(0xd3)]!==_0xe66301(0xdc)&&_0x67b16e===0x1)throw new AppError_1['default']('ERR_NO_PERMISSION',0x193);const {tagId:_0x3a1a49}=_0x1e02e0[_0xe66301(0xca)],_0x5564a0=_0x1e02e0[_0xe66301(0xc7)],{companyId:_0x5f1a0b}=_0x1e02e0[_0xe66301(0xe7)],_0x4b12d1=await(0x0,UpdateService_1['default'])({'tagData':_0x5564a0,'id':_0x3a1a49}),_0x4e3ae4=(0x0,socket_1['getIO'])();return _0x4e3ae4[_0xe66301(0xda)]('company'+_0x5f1a0b+_0xe66301(0xd8),{'action':_0xe66301(0xc8),'tag':_0x4b12d1}),_0x4916d4[_0xe66301(0xdd)](0xc8)[_0xe66301(0xea)](_0x4b12d1);};exports[a35_0x446864(0xc8)]=update;const remove=async(_0x310d40,_0x473212)=>{const _0x1f6f41=a35_0x446864,{tagId:_0x579155}=_0x310d40[_0x1f6f41(0xca)],{companyId:_0x4aea2e}=_0x310d40[_0x1f6f41(0xe7)];await(0x0,DeleteService_1[_0x1f6f41(0xc2)])(_0x579155);const _0x299966=(0x0,socket_1['getIO'])();return _0x299966[_0x1f6f41(0xda)]('company'+_0x4aea2e+_0x1f6f41(0xd8),{'action':_0x1f6f41(0xc4),'tagId':_0x579155}),_0x473212[_0x1f6f41(0xdd)](0xc8)['json']({'message':'Tag\x20deleted'});};exports['remove']=remove;const list=async(_0x466c54,_0x19e230)=>{const _0x3b739b=a35_0x446864,{searchParam:_0x8f5126,kanban:_0x10cebc}=_0x466c54['query'],{companyId:_0x264855}=_0x466c54[_0x3b739b(0xe7)],_0x3e6bfa=await(0x0,SimpleListService_1[_0x3b739b(0xc2)])({'searchParam':_0x8f5126,'kanban':_0x10cebc,'companyId':_0x264855});return _0x19e230['json'](_0x3e6bfa);};exports[a35_0x446864(0xd9)]=list;const kanban=async(_0x33d0ee,_0x1fe961)=>{const _0x12765b=a35_0x446864,{companyId:_0x2333a6}=_0x33d0ee[_0x12765b(0xe7)],_0x4af80a=await(0x0,KanbanListService_1[_0x12765b(0xc2)])({'companyId':_0x2333a6});return _0x1fe961[_0x12765b(0xea)]({'lista':_0x4af80a});};exports['kanban']=kanban;const syncTags=async(_0x389c14,_0x6daf4a)=>{const _0x3be5d9=a35_0x446864,_0x4186d0=_0x389c14['body'],{companyId:_0x367990}=_0x389c14[_0x3be5d9(0xe7)],_0x505c27=await(0x0,SyncTagsService_1[_0x3be5d9(0xc2)])({..._0x4186d0,'companyId':_0x367990});return _0x6daf4a[_0x3be5d9(0xea)](_0x505c27);};exports[a35_0x446864(0xd1)]=syncTags;
=======
'use strict';const a35_0x31c85b=a35_0x475d;(function(_0x3db64c,_0x3a7020){const _0x4b3053=a35_0x475d,_0x166e25=_0x3db64c();while(!![]){try{const _0x15350d=parseInt(_0x4b3053(0x147))/0x1*(parseInt(_0x4b3053(0x14a))/0x2)+-parseInt(_0x4b3053(0x14b))/0x3*(-parseInt(_0x4b3053(0x12a))/0x4)+parseInt(_0x4b3053(0x122))/0x5*(parseInt(_0x4b3053(0x127))/0x6)+-parseInt(_0x4b3053(0x135))/0x7*(parseInt(_0x4b3053(0x12e))/0x8)+parseInt(_0x4b3053(0x132))/0x9*(parseInt(_0x4b3053(0x146))/0xa)+parseInt(_0x4b3053(0x143))/0xb+-parseInt(_0x4b3053(0x133))/0xc*(parseInt(_0x4b3053(0x129))/0xd);if(_0x15350d===_0x3a7020)break;else _0x166e25['push'](_0x166e25['shift']());}catch(_0x412090){_0x166e25['push'](_0x166e25['shift']());}}}(a35_0x25de,0x48d89));var __importDefault=this&&this[a35_0x31c85b(0x12b)]||function(_0xce6ba9){const _0x54e4b0=a35_0x31c85b;return _0xce6ba9&&_0xce6ba9[_0x54e4b0(0x11f)]?_0xce6ba9:{'default':_0xce6ba9};};Object[a35_0x31c85b(0x149)](exports,a35_0x31c85b(0x11f),{'value':!![]}),exports[a35_0x31c85b(0x13b)]=exports[a35_0x31c85b(0x123)]=exports[a35_0x31c85b(0x12c)]=exports[a35_0x31c85b(0x144)]=exports[a35_0x31c85b(0x140)]=exports[a35_0x31c85b(0x125)]=exports['store']=exports[a35_0x31c85b(0x12d)]=void 0x0;const socket_1=require(a35_0x31c85b(0x13d)),AppError_1=__importDefault(require('../errors/AppError')),CreateService_1=__importDefault(require(a35_0x31c85b(0x13f))),ListService_1=__importDefault(require(a35_0x31c85b(0x131))),UpdateService_1=__importDefault(require(a35_0x31c85b(0x128))),ShowService_1=__importDefault(require('../services/TagServices/ShowService')),DeleteService_1=__importDefault(require('../services/TagServices/DeleteService')),SimpleListService_1=__importDefault(require(a35_0x31c85b(0x148))),SyncTagsService_1=__importDefault(require(a35_0x31c85b(0x139))),KanbanListService_1=__importDefault(require(a35_0x31c85b(0x134))),index=async(_0x121eb6,_0x3734ec)=>{const _0x57a7ef=a35_0x31c85b,{pageNumber:_0x4cf4f8,searchParam:_0x25f047,kanban:_0x395eb1}=_0x121eb6[_0x57a7ef(0x126)],{companyId:_0xf3addf}=_0x121eb6[_0x57a7ef(0x121)],{tags:_0x1e6144,count:_0x24cfd6,hasMore:_0x486214}=await(0x0,ListService_1[_0x57a7ef(0x142)])({'searchParam':_0x25f047,'pageNumber':_0x4cf4f8,'companyId':_0xf3addf,'kanban':_0x395eb1});return _0x3734ec[_0x57a7ef(0x138)]({'tags':_0x1e6144,'count':_0x24cfd6,'hasMore':_0x486214});};exports['index']=index;const store=async(_0x1c0f24,_0x49e4bc)=>{const _0x1e6e74=a35_0x31c85b,{name:_0x4d80ab,color:_0x50dd03,kanban:_0x5aff70}=_0x1c0f24['body'],{companyId:_0x24a7b3}=_0x1c0f24['user'],_0xbfcf4c=await(0x0,CreateService_1[_0x1e6e74(0x142)])({'name':_0x4d80ab,'color':_0x50dd03,'kanban':_0x5aff70,'companyId':_0x24a7b3}),_0x3810af=(0x0,socket_1[_0x1e6e74(0x136)])();return _0x3810af[_0x1e6e74(0x12f)](_0x1e6e74(0x124)+_0x24a7b3+_0x1e6e74(0x13c),{'action':_0x1e6e74(0x130),'tag':_0xbfcf4c}),_0x49e4bc['status'](0xc8)[_0x1e6e74(0x138)](_0xbfcf4c);};exports[a35_0x31c85b(0x11e)]=store;const show=async(_0x8d19a0,_0x1cf84a)=>{const _0x43c191=a35_0x31c85b,{tagId:_0x1d88df}=_0x8d19a0[_0x43c191(0x13e)],_0x396b13=await(0x0,ShowService_1['default'])(_0x1d88df);return _0x1cf84a['status'](0xc8)['json'](_0x396b13);};exports[a35_0x31c85b(0x125)]=show;const update=async(_0x21cad0,_0x5c73c5)=>{const _0x172c9e=a35_0x31c85b,{kanban:_0x4854fd}=_0x21cad0[_0x172c9e(0x120)];console[_0x172c9e(0x11d)](_0x4854fd);if(_0x21cad0['user'][_0x172c9e(0x141)]!==_0x172c9e(0x13a)&&_0x4854fd===0x1)throw new AppError_1[(_0x172c9e(0x142))](_0x172c9e(0x137),0x193);const {tagId:_0x588a72}=_0x21cad0[_0x172c9e(0x13e)],_0x3543a0=_0x21cad0[_0x172c9e(0x120)],{companyId:_0x430113}=_0x21cad0[_0x172c9e(0x121)],_0xbd986e=await(0x0,UpdateService_1[_0x172c9e(0x142)])({'tagData':_0x3543a0,'id':_0x588a72}),_0x3c42db=(0x0,socket_1[_0x172c9e(0x136)])();return _0x3c42db[_0x172c9e(0x12f)](_0x172c9e(0x124)+_0x430113+_0x172c9e(0x13c),{'action':'update','tag':_0xbd986e}),_0x5c73c5[_0x172c9e(0x145)](0xc8)[_0x172c9e(0x138)](_0xbd986e);};exports[a35_0x31c85b(0x140)]=update;const remove=async(_0x53044f,_0x536a6b)=>{const _0x24e525=a35_0x31c85b,{tagId:_0x23a1c3}=_0x53044f[_0x24e525(0x13e)],{companyId:_0x1ef1ab}=_0x53044f[_0x24e525(0x121)];await(0x0,DeleteService_1['default'])(_0x23a1c3);const _0x2f4790=(0x0,socket_1[_0x24e525(0x136)])();return _0x2f4790[_0x24e525(0x12f)](_0x24e525(0x124)+_0x1ef1ab+_0x24e525(0x13c),{'action':'delete','tagId':_0x23a1c3}),_0x536a6b[_0x24e525(0x145)](0xc8)[_0x24e525(0x138)]({'message':'Tag\x20deleted'});};exports[a35_0x31c85b(0x144)]=remove;const list=async(_0x243439,_0x5d6981)=>{const _0x39b569=a35_0x31c85b,{searchParam:_0x269a21,kanban:_0x3ed432}=_0x243439[_0x39b569(0x126)],{companyId:_0x1079b7}=_0x243439['user'],_0x46121a=await(0x0,SimpleListService_1[_0x39b569(0x142)])({'searchParam':_0x269a21,'kanban':_0x3ed432,'companyId':_0x1079b7});return _0x5d6981[_0x39b569(0x138)](_0x46121a);};exports[a35_0x31c85b(0x12c)]=list;const kanban=async(_0x348c47,_0x58c2f4)=>{const _0x5880d1=a35_0x31c85b,{companyId:_0x3c0391}=_0x348c47[_0x5880d1(0x121)],_0x5ca795=await(0x0,KanbanListService_1[_0x5880d1(0x142)])({'companyId':_0x3c0391});return _0x58c2f4[_0x5880d1(0x138)]({'lista':_0x5ca795});};function a35_0x25de(){const _0x2086f5=['15IAwCxa','log','store','__esModule','body','user','2333930IBBarw','kanban','company','show','query','6WAHOeo','../services/TagServices/UpdateService','1001YVlYkb','43732JLkzbX','__importDefault','list','index','472zvcJHN','emit','create','../services/TagServices/ListService','1287JfMvGd','66372LZieGd','../services/TagServices/KanbanListService','3703ERbRyP','getIO','ERR_NO_PERMISSION','json','../services/TagServices/SyncTagsService','admin','syncTags','-tag','../libs/socket','params','../services/TagServices/CreateService','update','profile','default','321508fbSPPO','remove','status','3330ApsGFm','1EpppCA','../services/TagServices/SimpleListService','defineProperty','314354QHnHHe'];a35_0x25de=function(){return _0x2086f5;};return a35_0x25de();}exports[a35_0x31c85b(0x123)]=kanban;const syncTags=async(_0x9ef08a,_0x502de2)=>{const _0x128274=a35_0x31c85b,_0x7d30ab=_0x9ef08a['body'],{companyId:_0x29a919}=_0x9ef08a[_0x128274(0x121)],_0x3bce5e=await(0x0,SyncTagsService_1[_0x128274(0x142)])({..._0x7d30ab,'companyId':_0x29a919});return _0x502de2[_0x128274(0x138)](_0x3bce5e);};function a35_0x475d(_0x3162e6,_0x59924c){const _0x25deb1=a35_0x25de();return a35_0x475d=function(_0x475d7d,_0x833eb2){_0x475d7d=_0x475d7d-0x11d;let _0x580da4=_0x25deb1[_0x475d7d];return _0x580da4;},a35_0x475d(_0x3162e6,_0x59924c);}exports[a35_0x31c85b(0x13b)]=syncTags;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
