<<<<<<< HEAD
'use strict';const a555_0x34ce41=a555_0x1feb;(function(_0x1cd5b1,_0x150f0d){const _0x51fc89=a555_0x1feb,_0x1d1d04=_0x1cd5b1();while(!![]){try{const _0x4c40cc=-parseInt(_0x51fc89(0xce))/0x1+parseInt(_0x51fc89(0xcb))/0x2+parseInt(_0x51fc89(0xc9))/0x3+parseInt(_0x51fc89(0xc2))/0x4+-parseInt(_0x51fc89(0xc1))/0x5*(parseInt(_0x51fc89(0xbd))/0x6)+parseInt(_0x51fc89(0xcc))/0x7+-parseInt(_0x51fc89(0xc5))/0x8;if(_0x4c40cc===_0x150f0d)break;else _0x1d1d04['push'](_0x1d1d04['shift']());}catch(_0x4f031e){_0x1d1d04['push'](_0x1d1d04['shift']());}}}(a555_0x3061,0x663ce));function a555_0x3061(){const _0x5cfc80=['\x0a\x20\x20select\x0a\x20\x20\x20\x20--dt_referencia,\x0a\x20\x20\x20\x20sum(qtd_total_atendimentos)\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20sum(qtd_demanda_ativa)\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20sum(qtd_demanda_receptiva)\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tma)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TMA,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tme)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TME,\x0a\x20\x20\x20\x20(select\x20count(1)\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Contacts\x22\x20c\x0a\x20\x20\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20c.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20)\x20new_contacts\x0a\x20\x20\x20\x20--ROUND(AVG(tma)::decimal,0)\x20TMA,\x0a\x20\x20\x20\x20--ROUND(AVG(tme)::decimal,0)\x20TME\x0a\x20\x20from\x20(\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20date_trunc(\x27month\x27,\x20t.\x22createdAt\x22)\x20dt_referencia,\x0a\x20\x20\x20\x20\x20\x201\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20not\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20\x20\x20t.\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20closedAt,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)\x20startedAttendanceAt,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60\x20tma,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60\x20tme,\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20)\x20a\x0a\x20\x20\x20\x20--group\x20by\x20dt_referencia\x0a\x20\x20\x20\x20\x20\x20order\x20by\x201\x20Desc\x0a','62133hrGJsA','4390254SzaaJF','SELECT','query','QueryTypes','5ooyhWj','2411924TqxDSK','__esModule','../../database','4919328fAerzA','\x0a\x20\x20select\x0a\x20\x20\x20\x20--dt_referencia,\x0a\x20\x20\x20\x20sum(qtd_total_atendimentos)\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20sum(qtd_demanda_ativa)\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20sum(qtd_demanda_receptiva)\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tma)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TMA,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tme)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TME,\x0a\x20\x20\x20\x20(select\x20count(distinct(c.\x22id\x22))\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Contacts\x22\x20c\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22Tickets\x22\x20tc\x20ON\x20tc.\x22contactId\x22\x20=\x20c.\x22id\x22\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20ltc\x20ON\x20ltc.\x22ticketId\x22\x20=\x20tc.\x22id\x22\x0a\x20\x20\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20ltc.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20c.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20)\x20new_contacts\x0a\x20\x20\x20\x20--ROUND(AVG(tma)::decimal,0)\x20TMA,\x0a\x20\x20\x20\x20--ROUND(AVG(tme)::decimal,0)\x20TME\x0a\x20\x20from\x20(\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20date_trunc(\x27month\x27,\x20t.\x22createdAt\x22)\x20dt_referencia,\x0a\x20\x20\x20\x20\x20\x201\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20not\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20\x20\x20t.\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20closedAt,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)\x20startedAttendanceAt,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60\x20tma,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60\x20tme,\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20\x20\x20and\x20lt.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20)\x20a\x0a\x20\x20\x20\x20--group\x20by\x20dt_referencia\x0a\x20\x20\x20\x20\x20\x20order\x20by\x201\x20Desc\x0a','defineProperty','__importDefault','1950228WEUYEa','default','72860VqGwQc','3766259cIoYeR'];a555_0x3061=function(){return _0x5cfc80;};return a555_0x3061();}var __importDefault=this&&this[a555_0x34ce41(0xc8)]||function(_0x56a358){const _0x1a44fd=a555_0x34ce41;return _0x56a358&&_0x56a358[_0x1a44fd(0xc3)]?_0x56a358:{'default':_0x56a358};};Object[a555_0x34ce41(0xc7)](exports,'__esModule',{'value':!![]});function a555_0x1feb(_0x29d185,_0x5e9e08){const _0x306121=a555_0x3061();return a555_0x1feb=function(_0x1feb2b,_0x408bfa){_0x1feb2b=_0x1feb2b-0xbd;let _0x12f355=_0x306121[_0x1feb2b];return _0x12f355;},a555_0x1feb(_0x29d185,_0x5e9e08);}const sequelize_1=require('sequelize'),database_1=__importDefault(require(a555_0x34ce41(0xc4))),query=a555_0x34ce41(0xc6),queryAdmin=a555_0x34ce41(0xcd),DashTicketsAndTimes=async({startDate:_0x19b3cc,endDate:_0xb3a852,tenantId:_0x290ef6,userId:_0x46792e,userProfile:_0x3d8f13})=>{const _0x4501a7=a555_0x34ce41,_0x43473f=await database_1[_0x4501a7(0xca)][_0x4501a7(0xbf)](_0x3d8f13=='admin'?queryAdmin:query,{'replacements':{'tenantId':_0x290ef6,'startDate':_0x19b3cc,'endDate':_0xb3a852,'userId':_0x46792e},'type':sequelize_1[_0x4501a7(0xc0)][_0x4501a7(0xbe)]});return _0x43473f;};exports[a555_0x34ce41(0xca)]=DashTicketsAndTimes;
=======
'use strict';const a554_0x42f673=a554_0x51e6;(function(_0x746d6c,_0x1b042c){const _0x362dc4=a554_0x51e6,_0x19c1ec=_0x746d6c();while(!![]){try{const _0xa5bbf7=-parseInt(_0x362dc4(0x174))/0x1*(-parseInt(_0x362dc4(0x16b))/0x2)+-parseInt(_0x362dc4(0x16d))/0x3+parseInt(_0x362dc4(0x16e))/0x4*(parseInt(_0x362dc4(0x176))/0x5)+-parseInt(_0x362dc4(0x171))/0x6+-parseInt(_0x362dc4(0x16a))/0x7+parseInt(_0x362dc4(0x16f))/0x8+parseInt(_0x362dc4(0x172))/0x9*(-parseInt(_0x362dc4(0x178))/0xa);if(_0xa5bbf7===_0x1b042c)break;else _0x19c1ec['push'](_0x19c1ec['shift']());}catch(_0x2799bb){_0x19c1ec['push'](_0x19c1ec['shift']());}}}(a554_0x1685,0x91ac0));var __importDefault=this&&this['__importDefault']||function(_0x17405f){const _0x1017bb=a554_0x51e6;return _0x17405f&&_0x17405f[_0x1017bb(0x175)]?_0x17405f:{'default':_0x17405f};};function a554_0x1685(){const _0x4dc01e=['4gQczeC','4929104SyqUmA','admin','979848GPWPFV','1943505rOlmYe','sequelize','58qDPcLg','__esModule','4860910WTVMmm','../../database','20NpIbOK','\x0a\x20\x20select\x0a\x20\x20\x20\x20--dt_referencia,\x0a\x20\x20\x20\x20sum(qtd_total_atendimentos)\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20sum(qtd_demanda_ativa)\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20sum(qtd_demanda_receptiva)\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tma)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TMA,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tme)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TME,\x0a\x20\x20\x20\x20(select\x20count(1)\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Contacts\x22\x20c\x0a\x20\x20\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20c.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20)\x20new_contacts\x0a\x20\x20\x20\x20--ROUND(AVG(tma)::decimal,0)\x20TMA,\x0a\x20\x20\x20\x20--ROUND(AVG(tme)::decimal,0)\x20TME\x0a\x20\x20from\x20(\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20date_trunc(\x27month\x27,\x20t.\x22createdAt\x22)\x20dt_referencia,\x0a\x20\x20\x20\x20\x20\x201\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20not\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20\x20\x20t.\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20closedAt,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)\x20startedAttendanceAt,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60\x20tma,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60\x20tme,\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20)\x20a\x0a\x20\x20\x20\x20--group\x20by\x20dt_referencia\x0a\x20\x20\x20\x20\x20\x20order\x20by\x201\x20Desc\x0a','default','7548156KsiPvg','28576HzjWiH','SELECT','440538nyOAOK'];a554_0x1685=function(){return _0x4dc01e;};return a554_0x1685();}Object['defineProperty'](exports,a554_0x42f673(0x175),{'value':!![]});const sequelize_1=require(a554_0x42f673(0x173)),database_1=__importDefault(require(a554_0x42f673(0x177))),query='\x0a\x20\x20select\x0a\x20\x20\x20\x20--dt_referencia,\x0a\x20\x20\x20\x20sum(qtd_total_atendimentos)\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20sum(qtd_demanda_ativa)\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20sum(qtd_demanda_receptiva)\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tma)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TMA,\x0a\x20\x20\x20\x20coalesce(concat(ROUND(AVG(tme)::decimal,0),\x200),\x20\x27minutes\x27)::interval\x20TME,\x0a\x20\x20\x20\x20(select\x20count(distinct(c.\x22id\x22))\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Contacts\x22\x20c\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22Tickets\x22\x20tc\x20ON\x20tc.\x22contactId\x22\x20=\x20c.\x22id\x22\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20ltc\x20ON\x20ltc.\x22ticketId\x22\x20=\x20tc.\x22id\x22\x0a\x20\x20\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20ltc.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20c.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20)\x20new_contacts\x0a\x20\x20\x20\x20--ROUND(AVG(tma)::decimal,0)\x20TMA,\x0a\x20\x20\x20\x20--ROUND(AVG(tme)::decimal,0)\x20TME\x0a\x20\x20from\x20(\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20date_trunc(\x27month\x27,\x20t.\x22createdAt\x22)\x20dt_referencia,\x0a\x20\x20\x20\x20\x20\x201\x20qtd_total_atendimentos,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_ativa,\x0a\x20\x20\x20\x20\x20\x20case\x20when\x20t.\x22isActiveDemand\x22\x20is\x20not\x20true\x20then\x201\x20else\x200\x20end\x20qtd_demanda_receptiva,\x0a\x20\x20\x20\x20\x20\x20t.\x22createdAt\x22,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20closedAt,\x0a\x20\x20\x20\x20\x20\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)\x20startedAttendanceAt,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60\x20tma,\x0a\x20\x20\x20\x20\x20\x20extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60\x20tme,\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20INNER\x20JOIN\x20\x22LogTickets\x22\x20lt\x20ON\x20lt.\x22ticketId\x22\x20=\x20t.\x22id\x22\x0a\x20\x20\x20\x20where\x0a\x20\x20\x20\x20\x20\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20\x20\x20and\x20lt.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20\x20\x20and\x20(lt.\x22type\x22\x20LIKE\x20\x27open\x27\x20OR\x20lt.\x22type\x22\x20LIKE\x20\x27receivedTransfer\x27)\x0a\x20\x20)\x20a\x0a\x20\x20\x20\x20--group\x20by\x20dt_referencia\x0a\x20\x20\x20\x20\x20\x20order\x20by\x201\x20Desc\x0a',queryAdmin=a554_0x42f673(0x179),DashTicketsAndTimes=async({startDate:_0x598d83,endDate:_0x4edb07,tenantId:_0x2e49e1,userId:_0x462c3a,userProfile:_0x1ef57b})=>{const _0x2e2259=a554_0x42f673,_0x5907ed=await database_1[_0x2e2259(0x17a)]['query'](_0x1ef57b==_0x2e2259(0x170)?queryAdmin:query,{'replacements':{'tenantId':_0x2e49e1,'startDate':_0x598d83,'endDate':_0x4edb07,'userId':_0x462c3a},'type':sequelize_1['QueryTypes'][_0x2e2259(0x16c)]});return _0x5907ed;};function a554_0x51e6(_0x47d64d,_0x567905){const _0x16852a=a554_0x1685();return a554_0x51e6=function(_0x51e6e9,_0x10a386){_0x51e6e9=_0x51e6e9-0x16a;let _0x25f24a=_0x16852a[_0x51e6e9];return _0x25f24a;},a554_0x51e6(_0x47d64d,_0x567905);}exports[a554_0x42f673(0x17a)]=DashTicketsAndTimes;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
