'use strict';const a424_0x13c6ed=a424_0x1045;(function(_0x5a6b41,_0x53558e){const _0x55e2bb=a424_0x1045,_0xccc708=_0x5a6b41();while(!![]){try{const _0x2b0fa0=parseInt(_0x55e2bb(0x1d8))/0x1*(parseInt(_0x55e2bb(0x1e0))/0x2)+-parseInt(_0x55e2bb(0x1d1))/0x3*(-parseInt(_0x55e2bb(0x1e1))/0x4)+parseInt(_0x55e2bb(0x1ce))/0x5*(parseInt(_0x55e2bb(0x1cb))/0x6)+parseInt(_0x55e2bb(0x1de))/0x7+-parseInt(_0x55e2bb(0x1c9))/0x8*(parseInt(_0x55e2bb(0x1d5))/0x9)+-parseInt(_0x55e2bb(0x1e3))/0xa*(parseInt(_0x55e2bb(0x1df))/0xb)+parseInt(_0x55e2bb(0x1cc))/0xc*(parseInt(_0x55e2bb(0x1d0))/0xd);if(_0x2b0fa0===_0x53558e)break;else _0xccc708['push'](_0xccc708['shift']());}catch(_0x212cb8){_0xccc708['push'](_0xccc708['shift']());}}}(a424_0x1bca,0x3141c));function a424_0x1bca(){const _0x38f449=['137132rVCWtL','494332UzjVdv','user','165530UMuMwa','2839288LCsSll','map','6stDUMD','60FoyEvh','sequelize','863835wnlgGK','../../models/Chat','687128sHKTnG','3yzYXwb','__esModule','default','defineProperty','9ehFujI','findAndCountAll','../../models/ChatUser','2uEakgP','users','createdAt','__importDefault','../../models/User','findAll','518658wCiHXk','143xoLhGF'];a424_0x1bca=function(){return _0x38f449;};return a424_0x1bca();}function a424_0x1045(_0x1cc80c,_0x456d5c){const _0x1bcab5=a424_0x1bca();return a424_0x1045=function(_0x10452d,_0x370081){_0x10452d=_0x10452d-0x1c9;let _0x4e0715=_0x1bcab5[_0x10452d];return _0x4e0715;},a424_0x1045(_0x1cc80c,_0x456d5c);}var __importDefault=this&&this[a424_0x13c6ed(0x1db)]||function(_0x15db94){const _0x3b4b0c=a424_0x13c6ed;return _0x15db94&&_0x15db94[_0x3b4b0c(0x1d2)]?_0x15db94:{'default':_0x15db94};};Object[a424_0x13c6ed(0x1d4)](exports,a424_0x13c6ed(0x1d2),{'value':!![]});const sequelize_1=require(a424_0x13c6ed(0x1cd)),Chat_1=__importDefault(require(a424_0x13c6ed(0x1cf))),ChatUser_1=__importDefault(require(a424_0x13c6ed(0x1d7))),User_1=__importDefault(require(a424_0x13c6ed(0x1dc))),ListService=async({ownerId:_0x234dd5,pageNumber:pageNumber='1'})=>{const _0x649138=a424_0x13c6ed,_0xa82aad=await ChatUser_1[_0x649138(0x1d3)][_0x649138(0x1dd)]({'where':{'userId':_0x234dd5}}),_0x152915=_0xa82aad[_0x649138(0x1ca)](_0x2841ab=>_0x2841ab['chatId']),_0x4c8cc0=0x14,_0x425ddb=_0x4c8cc0*(+pageNumber-0x1),{count:_0x50928f,rows:_0x2694d2}=await Chat_1['default'][_0x649138(0x1d6)]({'where':{'id':{[sequelize_1['Op']['in']]:_0x152915}},'include':[{'model':User_1[_0x649138(0x1d3)],'as':'owner'},{'model':ChatUser_1[_0x649138(0x1d3)],'as':_0x649138(0x1d9),'include':[{'model':User_1[_0x649138(0x1d3)],'as':_0x649138(0x1e2)}]}],'limit':_0x4c8cc0,'offset':_0x425ddb,'order':[[_0x649138(0x1da),'DESC']]}),_0x40a367=_0x50928f>_0x425ddb+_0x2694d2['length'];return{'records':_0x2694d2,'count':_0x50928f,'hasMore':_0x40a367};};exports[a424_0x13c6ed(0x1d3)]=ListService;