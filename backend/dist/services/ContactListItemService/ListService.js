'use strict';const a420_0x4d3511=a420_0x1788;(function(_0x2145f5,_0x3956d9){const _0x102e67=a420_0x1788,_0x4c5077=_0x2145f5();while(!![]){try{const _0x32ab2c=-parseInt(_0x102e67(0xc2))/0x1*(-parseInt(_0x102e67(0xc4))/0x2)+parseInt(_0x102e67(0xc8))/0x3*(parseInt(_0x102e67(0xcf))/0x4)+parseInt(_0x102e67(0xdc))/0x5+parseInt(_0x102e67(0xd1))/0x6*(parseInt(_0x102e67(0xcb))/0x7)+parseInt(_0x102e67(0xd5))/0x8+-parseInt(_0x102e67(0xd7))/0x9+-parseInt(_0x102e67(0xcd))/0xa;if(_0x32ab2c===_0x3956d9)break;else _0x4c5077['push'](_0x4c5077['shift']());}catch(_0x186822){_0x4c5077['push'](_0x4c5077['shift']());}}}(a420_0x38f5,0x4b3ff));function a420_0x1788(_0x205517,_0xec859d){const _0x38f58e=a420_0x38f5();return a420_0x1788=function(_0x178886,_0x571ccb){_0x178886=_0x178886-0xc2;let _0x4f3f02=_0x38f58e[_0x178886];return _0x4f3f02;},a420_0x1788(_0x205517,_0xec859d);}var __importDefault=this&&this[a420_0x4d3511(0xc3)]||function(_0xb8848d){const _0x7f5b0c=a420_0x4d3511;return _0xb8848d&&_0xb8848d[_0x7f5b0c(0xc5)]?_0xb8848d:{'default':_0xb8848d};};Object[a420_0x4d3511(0xd2)](exports,a420_0x4d3511(0xc5),{'value':!![]});const sequelize_1=require(a420_0x4d3511(0xda)),ContactListItem_1=__importDefault(require(a420_0x4d3511(0xd9))),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x13b790,contactListId:_0x5cdb06})=>{const _0x2ca364=a420_0x4d3511,_0x3d8df6={[sequelize_1['Op']['or']]:[{'name':sequelize_1['Sequelize'][_0x2ca364(0xcc)](sequelize_1[_0x2ca364(0xc6)]['fn'](_0x2ca364(0xce),sequelize_1[_0x2ca364(0xc6)][_0x2ca364(0xd6)]('name')),_0x2ca364(0xca),'%'+searchParam[_0x2ca364(0xc9)]()[_0x2ca364(0xd0)]()+'%')},{'number':{[sequelize_1['Op'][_0x2ca364(0xd3)]]:'%'+searchParam['toLowerCase']()['trim']()+'%'}}],'companyId':_0x13b790,'contactListId':_0x5cdb06},_0x3bbbb8=0x14,_0x5c82e0=_0x3bbbb8*(+pageNumber-0x1),{count:_0x370420,rows:_0x491edf}=await ContactListItem_1[_0x2ca364(0xd8)][_0x2ca364(0xc7)]({'where':_0x3d8df6,'limit':_0x3bbbb8,'offset':_0x5c82e0,'order':[[_0x2ca364(0xd4),_0x2ca364(0xdb)]]}),_0x3753c7=_0x370420>_0x5c82e0+_0x491edf['length'];return{'contacts':_0x491edf,'count':_0x370420,'hasMore':_0x3753c7};};function a420_0x38f5(){const _0x5f07d2=['../../models/ContactListItem','sequelize','ASC','1418995kdpvSf','1hkJZqy','__importDefault','240904SHxIlD','__esModule','Sequelize','findAndCountAll','153KRxwKc','toLowerCase','LIKE','301MhXwIF','where','11996010gUmEGr','LOWER','48172ADRMJh','trim','45312ycBxJW','defineProperty','like','name','4072768OcHhNp','col','3100068KxOABY','default'];a420_0x38f5=function(){return _0x5f07d2;};return a420_0x38f5();}exports['default']=ListService;