'use strict';const a35_0x4d9f0c=a35_0x479d;(function(_0x52c1ff,_0x1c2c04){const _0x1c42d3=a35_0x479d,_0x4c1703=_0x52c1ff();while(!![]){try{const _0x58f14a=-parseInt(_0x1c42d3(0xfb))/0x1*(-parseInt(_0x1c42d3(0xe9))/0x2)+parseInt(_0x1c42d3(0xf2))/0x3+-parseInt(_0x1c42d3(0xd9))/0x4+-parseInt(_0x1c42d3(0xf9))/0x5*(parseInt(_0x1c42d3(0xfe))/0x6)+parseInt(_0x1c42d3(0xda))/0x7*(-parseInt(_0x1c42d3(0xde))/0x8)+parseInt(_0x1c42d3(0xed))/0x9+parseInt(_0x1c42d3(0xdb))/0xa*(parseInt(_0x1c42d3(0xe2))/0xb);if(_0x58f14a===_0x1c2c04)break;else _0x4c1703['push'](_0x4c1703['shift']());}catch(_0xca1e19){_0x4c1703['push'](_0x4c1703['shift']());}}}(a35_0x148b,0xa60ae));var __importDefault=this&&this[a35_0x4d9f0c(0xfa)]||function(_0x2ee0e9){const _0x29b28b=a35_0x4d9f0c;return _0x2ee0e9&&_0x2ee0e9[_0x29b28b(0xee)]?_0x2ee0e9:{'default':_0x2ee0e9};};Object['defineProperty'](exports,a35_0x4d9f0c(0xee),{'value':!![]}),exports[a35_0x4d9f0c(0xe4)]=exports[a35_0x4d9f0c(0xfc)]=exports[a35_0x4d9f0c(0xf8)]=exports[a35_0x4d9f0c(0xea)]=exports['update']=exports[a35_0x4d9f0c(0xe0)]=exports['store']=exports[a35_0x4d9f0c(0xe5)]=void 0x0;const socket_1=require(a35_0x4d9f0c(0xdf)),AppError_1=__importDefault(require(a35_0x4d9f0c(0xf3))),CreateService_1=__importDefault(require(a35_0x4d9f0c(0xf5))),ListService_1=__importDefault(require(a35_0x4d9f0c(0x100))),UpdateService_1=__importDefault(require(a35_0x4d9f0c(0xe7))),ShowService_1=__importDefault(require(a35_0x4d9f0c(0xec))),DeleteService_1=__importDefault(require(a35_0x4d9f0c(0xff))),SimpleListService_1=__importDefault(require(a35_0x4d9f0c(0xeb))),SyncTagsService_1=__importDefault(require('../services/TagServices/SyncTagsService')),KanbanListService_1=__importDefault(require(a35_0x4d9f0c(0xd7))),index=async(_0x34078f,_0x1afd73)=>{const _0x53f73b=a35_0x4d9f0c,{pageNumber:_0x71e7f9,searchParam:_0xe1221,kanban:_0x42f5cf}=_0x34078f[_0x53f73b(0xdd)],{companyId:_0x56050c}=_0x34078f[_0x53f73b(0xfd)],{tags:_0x2c1f11,count:_0x338068,hasMore:_0x2d0b16}=await(0x0,ListService_1['default'])({'searchParam':_0xe1221,'pageNumber':_0x71e7f9,'companyId':_0x56050c,'kanban':_0x42f5cf});return _0x1afd73[_0x53f73b(0xf0)]({'tags':_0x2c1f11,'count':_0x338068,'hasMore':_0x2d0b16});};exports[a35_0x4d9f0c(0xe5)]=index;const store=async(_0x12c430,_0x213969)=>{const _0x9bdb6d=a35_0x4d9f0c,{name:_0xc546e4,color:_0x22e95d,kanban:_0x33688e}=_0x12c430[_0x9bdb6d(0xe6)],{companyId:_0x5227a3}=_0x12c430[_0x9bdb6d(0xfd)],_0x9b3aa8=await(0x0,CreateService_1[_0x9bdb6d(0xf1)])({'name':_0xc546e4,'color':_0x22e95d,'kanban':_0x33688e,'companyId':_0x5227a3}),_0x53014b=(0x0,socket_1[_0x9bdb6d(0xd8)])();return _0x53014b['emit'](_0x9bdb6d(0xf6)+_0x5227a3+'-tag',{'action':_0x9bdb6d(0xef),'tag':_0x9b3aa8}),_0x213969[_0x9bdb6d(0xe3)](0xc8)[_0x9bdb6d(0xf0)](_0x9b3aa8);};exports[a35_0x4d9f0c(0xf7)]=store;const show=async(_0x48d496,_0x180fe7)=>{const _0x513252=a35_0x4d9f0c,{tagId:_0x2e8e18}=_0x48d496[_0x513252(0xe8)],_0x2d6263=await(0x0,ShowService_1[_0x513252(0xf1)])(_0x2e8e18);return _0x180fe7[_0x513252(0xe3)](0xc8)[_0x513252(0xf0)](_0x2d6263);};exports[a35_0x4d9f0c(0xe0)]=show;function a35_0x148b(){const _0x2d326f=['11727747IlSsGm','__esModule','create','json','default','1188729WPeCsP','../errors/AppError','emit','../services/TagServices/CreateService','company','store','list','12595SoJhZv','__importDefault','1XkEYze','kanban','user','1338sNoike','../services/TagServices/DeleteService','../services/TagServices/ListService','../services/TagServices/KanbanListService','getIO','2414156emfqNL','8087772RoOnmy','439050NPqwFj','-tag','query','8uTZEhc','../libs/socket','show','update','33daMCWF','status','syncTags','index','body','../services/TagServices/UpdateService','params','2339482fcwEHb','remove','../services/TagServices/SimpleListService','../services/TagServices/ShowService'];a35_0x148b=function(){return _0x2d326f;};return a35_0x148b();}const update=async(_0x5e8f2f,_0x2fd688)=>{const _0x439046=a35_0x4d9f0c,{kanban:_0x17573b}=_0x5e8f2f[_0x439046(0xe6)];if(_0x5e8f2f[_0x439046(0xfd)]['profile']!=='admin'&&_0x17573b===0x1)throw new AppError_1[(_0x439046(0xf1))]('ERR_NO_PERMISSION',0x193);const {tagId:_0x275430}=_0x5e8f2f[_0x439046(0xe8)],_0x5d1a3f=_0x5e8f2f[_0x439046(0xe6)],{companyId:_0x24d7e1}=_0x5e8f2f[_0x439046(0xfd)],_0x14c2d6=await(0x0,UpdateService_1[_0x439046(0xf1)])({'tagData':_0x5d1a3f,'id':_0x275430}),_0x107c34=(0x0,socket_1[_0x439046(0xd8)])();return _0x107c34[_0x439046(0xf4)]('company'+_0x24d7e1+_0x439046(0xdc),{'action':_0x439046(0xe1),'tag':_0x14c2d6}),_0x2fd688[_0x439046(0xe3)](0xc8)[_0x439046(0xf0)](_0x14c2d6);};exports[a35_0x4d9f0c(0xe1)]=update;function a35_0x479d(_0x3cf365,_0x115802){const _0x148b89=a35_0x148b();return a35_0x479d=function(_0x479d41,_0x22578c){_0x479d41=_0x479d41-0xd7;let _0x2c9ac4=_0x148b89[_0x479d41];return _0x2c9ac4;},a35_0x479d(_0x3cf365,_0x115802);}const remove=async(_0x5e22c7,_0x444771)=>{const _0x36a30e=a35_0x4d9f0c,{tagId:_0x512fc1}=_0x5e22c7[_0x36a30e(0xe8)],{companyId:_0x471679}=_0x5e22c7['user'];await(0x0,DeleteService_1['default'])(_0x512fc1);const _0x4f9213=(0x0,socket_1[_0x36a30e(0xd8)])();return _0x4f9213[_0x36a30e(0xf4)](_0x36a30e(0xf6)+_0x471679+_0x36a30e(0xdc),{'action':'delete','tagId':_0x512fc1}),_0x444771[_0x36a30e(0xe3)](0xc8)['json']({'message':'Tag\x20deleted'});};exports[a35_0x4d9f0c(0xea)]=remove;const list=async(_0x30a515,_0x61fd47)=>{const _0x17a07f=a35_0x4d9f0c,{searchParam:_0x1789a7,kanban:_0x1980ef}=_0x30a515[_0x17a07f(0xdd)],{companyId:_0x342a3e}=_0x30a515[_0x17a07f(0xfd)],_0x32b292=await(0x0,SimpleListService_1[_0x17a07f(0xf1)])({'searchParam':_0x1789a7,'kanban':_0x1980ef,'companyId':_0x342a3e});return _0x61fd47['json'](_0x32b292);};exports[a35_0x4d9f0c(0xf8)]=list;const kanban=async(_0x273cab,_0x2cba99)=>{const _0x3f98d5=a35_0x4d9f0c,{companyId:_0x5eb542}=_0x273cab[_0x3f98d5(0xfd)],_0x1cc4a4=await(0x0,KanbanListService_1[_0x3f98d5(0xf1)])({'companyId':_0x5eb542});return _0x2cba99['json']({'lista':_0x1cc4a4});};exports[a35_0x4d9f0c(0xfc)]=kanban;const syncTags=async(_0x3940cd,_0x41a63f)=>{const _0x2f96a1=a35_0x4d9f0c,_0x2b97bc=_0x3940cd[_0x2f96a1(0xe6)],{companyId:_0x356993}=_0x3940cd[_0x2f96a1(0xfd)],_0x3dd1ee=await(0x0,SyncTagsService_1[_0x2f96a1(0xf1)])({..._0x2b97bc,'companyId':_0x356993});return _0x41a63f[_0x2f96a1(0xf0)](_0x3dd1ee);};exports[a35_0x4d9f0c(0xe4)]=syncTags;