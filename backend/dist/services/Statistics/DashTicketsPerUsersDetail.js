'use strict';const a576_0x10dde8=a576_0x275f;function a576_0x275f(_0x50a55b,_0x2c2816){const _0x22bf21=a576_0x22bf();return a576_0x275f=function(_0x275f16,_0x319491){_0x275f16=_0x275f16-0x64;let _0x56b470=_0x22bf21[_0x275f16];return _0x56b470;},a576_0x275f(_0x50a55b,_0x2c2816);}(function(_0x2fce63,_0x543f68){const _0x1e05d7=a576_0x275f,_0x3d8fce=_0x2fce63();while(!![]){try{const _0x4ce3ad=parseInt(_0x1e05d7(0x6c))/0x1*(-parseInt(_0x1e05d7(0x6a))/0x2)+-parseInt(_0x1e05d7(0x70))/0x3+-parseInt(_0x1e05d7(0x68))/0x4+parseInt(_0x1e05d7(0x77))/0x5*(-parseInt(_0x1e05d7(0x72))/0x6)+parseInt(_0x1e05d7(0x6e))/0x7*(parseInt(_0x1e05d7(0x71))/0x8)+-parseInt(_0x1e05d7(0x65))/0x9+-parseInt(_0x1e05d7(0x6f))/0xa*(-parseInt(_0x1e05d7(0x66))/0xb);if(_0x4ce3ad===_0x543f68)break;else _0x3d8fce['push'](_0x3d8fce['shift']());}catch(_0xfe9771){_0x3d8fce['push'](_0x3d8fce['shift']());}}}(a576_0x22bf,0x3f83c));var __importDefault=this&&this[a576_0x10dde8(0x76)]||function(_0x49d1f0){const _0x1dd975=a576_0x10dde8;return _0x49d1f0&&_0x49d1f0[_0x1dd975(0x6d)]?_0x49d1f0:{'default':_0x49d1f0};};Object['defineProperty'](exports,a576_0x10dde8(0x6d),{'value':!![]});function a576_0x22bf(){const _0x375ddc=['sequelize','__importDefault','644205rxabzD','QueryTypes','query','SELECT','3451707XPVezJ','5478lodiRT','../../database','1533480QZCbZw','\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20distinct(email),\x0a\x20\x20\x20\x20name,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27open\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_em_atendimento,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27pending\x27)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_pendentes,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27closed\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_resolvidos,\x0a\x20\x20\x20\x20count(*)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_por_usuario,\x0a\x20\x20\x20\x20--ROUND(MIN(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20menor_tma,\x0a\x20\x20\x20\x20--ROUND(MAX(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20maior_tma,\x0a\x20\x20\x20\x20concat(coalesce(ROUND(AVG(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200),\x200),\x20\x27minutes\x27)::interval\x20tma,\x0a\x20\x20\x20\x20--ROUND(MIN(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20menor_tme,\x0a\x20\x20\x20\x20--ROUND(MAX(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20maior_tme,\x0a\x20\x20\x20\x20concat(coalesce(ROUND(AVG(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200),\x200),\x20\x27minutes\x27)::interval\x20tme\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20t.\x22userId\x22\x20=\x20\x22u\x22.\x22id\x22\x0a\x20\x20\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20q.id\x20\x20=\x20t.\x22queueId\x22\x0a\x20\x20\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x20\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20order\x20by\x206\x20Desc\x0a','2182gWANqw','\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20distinct(email),\x0a\x20\x20\x20\x20name,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27open\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_em_atendimento,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27pending\x27)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_pendentes,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27closed\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_resolvidos,\x0a\x20\x20\x20\x20count(*)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_por_usuario,\x0a\x20\x20\x20\x20--ROUND(MIN(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20menor_tma,\x0a\x20\x20\x20\x20--ROUND(MAX(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20maior_tma,\x0a\x20\x20\x20\x20concat(coalesce(ROUND(AVG(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22closedAt\x22/1000),\x20t.\x22createdAt\x22)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200),\x200),\x20\x27minutes\x27)::interval\x20tma,\x0a\x20\x20\x20\x20--ROUND(MIN(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20menor_tme,\x0a\x20\x20\x20\x20--ROUND(MAX(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200)\x20maior_tme,\x0a\x20\x20\x20\x20concat(coalesce(ROUND(AVG(extract(epoch\x20from\x20AGE(to_timestamp(t.\x22startedAttendanceAt\x22/1000),\x20t.\x22createdAt\x22::timestamp)::interval)/60)\x20OVER\x20(PARTITION\x20by\x20email)::decimal,\x200),\x200),\x20\x27minutes\x27)::interval\x20tme\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20t.\x22userId\x22\x20=\x20\x22u\x22.\x22id\x22\x0a\x20\x20\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20q.id\x20\x20=\x20t.\x22queueId\x22\x0a\x20\x20\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20order\x20by\x206\x20Desc\x0a','193hEKoFC','__esModule','305431ZlIbld','27940APXCUk','991170fJtyjr','56qtXtGm','6NBbCxF','admin','default'];a576_0x22bf=function(){return _0x375ddc;};return a576_0x22bf();}const sequelize_1=require(a576_0x10dde8(0x75)),database_1=__importDefault(require(a576_0x10dde8(0x67))),query=a576_0x10dde8(0x69),queryAdmin=a576_0x10dde8(0x6b),DashTicketsPerUsersDetail=async({startDate:_0x152180,endDate:_0x26a94d,companyId:_0x5984f1,userId:_0x130cb0,userProfile:_0x1ad587})=>{const _0xaa684e=a576_0x10dde8,_0x114a12=await database_1[_0xaa684e(0x74)][_0xaa684e(0x79)](_0x1ad587==_0xaa684e(0x73)?queryAdmin:query,{'replacements':{'companyId':_0x5984f1,'startDate':_0x152180,'endDate':_0x26a94d,'userId':_0x130cb0},'type':sequelize_1[_0xaa684e(0x78)][_0xaa684e(0x64)]});return _0x114a12;};exports[a576_0x10dde8(0x74)]=DashTicketsPerUsersDetail;