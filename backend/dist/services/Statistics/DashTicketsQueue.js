<<<<<<< HEAD
'use strict';const a560_0x1822d2=a560_0x24c9;(function(_0x155a63,_0x40d3b6){const _0x49b923=a560_0x24c9,_0x4265d5=_0x155a63();while(!![]){try{const _0x4e8735=parseInt(_0x49b923(0x1ca))/0x1+-parseInt(_0x49b923(0x1c8))/0x2+-parseInt(_0x49b923(0x1d1))/0x3+-parseInt(_0x49b923(0x1c4))/0x4+-parseInt(_0x49b923(0x1d0))/0x5+-parseInt(_0x49b923(0x1cd))/0x6+parseInt(_0x49b923(0x1c5))/0x7;if(_0x4e8735===_0x40d3b6)break;else _0x4265d5['push'](_0x4265d5['shift']());}catch(_0x286c86){_0x4265d5['push'](_0x4265d5['shift']());}}}(a560_0x4dfb,0xb2586));function a560_0x24c9(_0x2dc14d,_0xf55207){const _0x4dfb5b=a560_0x4dfb();return a560_0x24c9=function(_0x24c9d7,_0x4a9cdd){_0x24c9d7=_0x24c9d7-0x1c1;let _0x47f9cb=_0x4dfb5b[_0x24c9d7];return _0x47f9cb;},a560_0x24c9(_0x2dc14d,_0xf55207);}function a560_0x4dfb(){const _0x132af3=['19380725MjKlIu','QueryTypes','../../database','1444854MJWBUl','default','1453786QxOomU','__esModule','defineProperty','7305360Kruosz','\x0a\x20\x20select\x20label,\x20qtd,\x20\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20from\x20(\x0a\x20\x20select\x0a\x20\x20coalesce(q.queue,\x20\x27Não\x20informado\x27)\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20(t.\x22queueId\x22\x20=\x20q.id)\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.\x22queueId\x22,\x20q.queue\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','query','600415ztvgzw','3555120mICmjv','__importDefault','admin','SELECT','987396wNDODC'];a560_0x4dfb=function(){return _0x132af3;};return a560_0x4dfb();}var __importDefault=this&&this[a560_0x1822d2(0x1c1)]||function(_0x1a48c3){const _0x24b143=a560_0x1822d2;return _0x1a48c3&&_0x1a48c3[_0x24b143(0x1cb)]?_0x1a48c3:{'default':_0x1a48c3};};Object[a560_0x1822d2(0x1cc)](exports,a560_0x1822d2(0x1cb),{'value':!![]});const sequelize_1=require('sequelize'),database_1=__importDefault(require(a560_0x1822d2(0x1c7))),query=a560_0x1822d2(0x1ce),queryAdmin='\x0a\x20\x20select\x20label,\x20qtd,\x20\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20from\x20(\x0a\x20\x20select\x0a\x20\x20coalesce(q.queue,\x20\x27Não\x20informado\x27)\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20(t.\x22queueId\x22\x20=\x20q.id)\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.\x22queueId\x22,\x20q.queue\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a',DashTicketsQueue=async({startDate:_0x2456ba,endDate:_0x4e2f3f,companyId:_0x1336a3,userId:_0x50fdc6,userProfile:_0x10037d})=>{const _0x3ab898=a560_0x1822d2,_0x127be8=await database_1[_0x3ab898(0x1c9)][_0x3ab898(0x1cf)](_0x10037d==_0x3ab898(0x1c2)?queryAdmin:query,{'replacements':{'companyId':_0x1336a3,'startDate':_0x2456ba,'endDate':_0x4e2f3f,'userId':_0x50fdc6},'type':sequelize_1[_0x3ab898(0x1c6)][_0x3ab898(0x1c3)]});return _0x127be8;};exports[a560_0x1822d2(0x1c9)]=DashTicketsQueue;
=======
'use strict';const a559_0x460d8a=a559_0x3779;function a559_0x3779(_0x2b2693,_0x259b22){const _0x4fe2d1=a559_0x4fe2();return a559_0x3779=function(_0x377994,_0x2cc414){_0x377994=_0x377994-0x125;let _0x328820=_0x4fe2d1[_0x377994];return _0x328820;},a559_0x3779(_0x2b2693,_0x259b22);}(function(_0x3afc44,_0x369793){const _0x3c1838=a559_0x3779,_0x299e77=_0x3afc44();while(!![]){try{const _0xad432=-parseInt(_0x3c1838(0x130))/0x1*(-parseInt(_0x3c1838(0x131))/0x2)+parseInt(_0x3c1838(0x138))/0x3*(-parseInt(_0x3c1838(0x133))/0x4)+-parseInt(_0x3c1838(0x137))/0x5+-parseInt(_0x3c1838(0x127))/0x6*(-parseInt(_0x3c1838(0x134))/0x7)+-parseInt(_0x3c1838(0x12f))/0x8*(-parseInt(_0x3c1838(0x128))/0x9)+-parseInt(_0x3c1838(0x12b))/0xa*(-parseInt(_0x3c1838(0x136))/0xb)+parseInt(_0x3c1838(0x132))/0xc*(parseInt(_0x3c1838(0x129))/0xd);if(_0xad432===_0x369793)break;else _0x299e77['push'](_0x299e77['shift']());}catch(_0x305684){_0x299e77['push'](_0x299e77['shift']());}}}(a559_0x4fe2,0x40715));var __importDefault=this&&this[a559_0x460d8a(0x12c)]||function(_0x4cf8d9){const _0x1abc62=a559_0x460d8a;return _0x4cf8d9&&_0x4cf8d9[_0x1abc62(0x12e)]?_0x4cf8d9:{'default':_0x4cf8d9};};Object[a559_0x460d8a(0x139)](exports,a559_0x460d8a(0x12e),{'value':!![]});function a559_0x4fe2(){const _0x364ce4=['1MFszXA','254318uUvWTw','12MZgnTj','508swVOQF','24591eHKZkY','QueryTypes','44165dNOkLt','617380nFaDzm','9138fqCSqp','defineProperty','default','\x0a\x20\x20select\x20label,\x20qtd,\x20\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20from\x20(\x0a\x20\x20select\x0a\x20\x20coalesce(q.queue,\x20\x27Não\x20informado\x27)\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20(t.\x22queueId\x22\x20=\x20q.id)\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.\x22queueId\x22,\x20q.queue\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','../../database','108tYSRvK','315WfNMei','2655601CjFTzW','admin','530kMXXvF','__importDefault','sequelize','__esModule','38128OXUUcB'];a559_0x4fe2=function(){return _0x364ce4;};return a559_0x4fe2();}const sequelize_1=require(a559_0x460d8a(0x12d)),database_1=__importDefault(require(a559_0x460d8a(0x126))),query='\x0a\x20\x20select\x20label,\x20qtd,\x20\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20from\x20(\x0a\x20\x20select\x0a\x20\x20coalesce(q.queue,\x20\x27Não\x20informado\x27)\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20(t.\x22queueId\x22\x20=\x20q.id)\x0a\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.\x22queueId\x22,\x20q.queue\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a',queryAdmin=a559_0x460d8a(0x125),DashTicketsQueue=async({startDate:_0x51035d,endDate:_0x3c0304,companyId:_0x1abbfe,userId:_0x3337a1,userProfile:_0xdaa800})=>{const _0x4388ff=a559_0x460d8a,_0x9ab0f5=await database_1[_0x4388ff(0x13a)]['query'](_0xdaa800==_0x4388ff(0x12a)?queryAdmin:query,{'replacements':{'companyId':_0x1abbfe,'startDate':_0x51035d,'endDate':_0x3c0304,'userId':_0x3337a1},'type':sequelize_1[_0x4388ff(0x135)]['SELECT']});return _0x9ab0f5;};exports[a559_0x460d8a(0x13a)]=DashTicketsQueue;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
