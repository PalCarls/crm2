'use strict';const a571_0x1e53a8=a571_0x2590;(function(_0x4cae9b,_0x1ff7b6){const _0x2c1f3f=a571_0x2590,_0xbb881c=_0x4cae9b();while(!![]){try{const _0x43a412=parseInt(_0x2c1f3f(0x86))/0x1*(-parseInt(_0x2c1f3f(0x82))/0x2)+parseInt(_0x2c1f3f(0x8b))/0x3*(-parseInt(_0x2c1f3f(0x7c))/0x4)+-parseInt(_0x2c1f3f(0x8c))/0x5*(-parseInt(_0x2c1f3f(0x7f))/0x6)+parseInt(_0x2c1f3f(0x8f))/0x7*(-parseInt(_0x2c1f3f(0x89))/0x8)+-parseInt(_0x2c1f3f(0x87))/0x9+parseInt(_0x2c1f3f(0x8a))/0xa*(parseInt(_0x2c1f3f(0x80))/0xb)+parseInt(_0x2c1f3f(0x7d))/0xc;if(_0x43a412===_0x1ff7b6)break;else _0xbb881c['push'](_0xbb881c['shift']());}catch(_0xf5324a){_0xbb881c['push'](_0xbb881c['shift']());}}}(a571_0x1485,0xd5193));function a571_0x1485(){const _0x1ca5c1=['__esModule','sequelize','../../database','3SdPGDA','13930794SBJjiJ','query','8nCdxQb','35620NebVUL','27VYCtpK','1089430AcCjfy','default','defineProperty','14574kmMian','535564GAoUah','11788008gpnKLy','__importDefault','42QzIToD','4070EGDczN','SELECT','131772nZFzyQ'];a571_0x1485=function(){return _0x1ca5c1;};return a571_0x1485();}function a571_0x2590(_0x3a3d9f,_0x4e78e1){const _0x14851f=a571_0x1485();return a571_0x2590=function(_0x2590e3,_0x25932e){_0x2590e3=_0x2590e3-0x7c;let _0x3873f0=_0x14851f[_0x2590e3];return _0x3873f0;},a571_0x2590(_0x3a3d9f,_0x4e78e1);}var __importDefault=this&&this[a571_0x1e53a8(0x7e)]||function(_0x2f93be){const _0x29fee3=a571_0x1e53a8;return _0x2f93be&&_0x2f93be[_0x29fee3(0x83)]?_0x2f93be:{'default':_0x2f93be};};Object[a571_0x1e53a8(0x8e)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a571_0x1e53a8(0x84)),database_1=__importDefault(require(a571_0x1e53a8(0x85))),query='\x0a\x20\x20\x20\x20select\x0a\x20\x20\x20\x20distinct(email),\x0a\x20\x20\x20\x20name,\x0a\x20\x20\x20\x20--,\x20email,)\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27open\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_em_atendimento,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27pending\x27)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_pendentes,\x0a\x20\x20\x20\x20count(*)\x20FILTER\x20(where\x20t.status\x20=\x20\x27closed\x27)\x20OVER\x20(PARTITION\x20by\x20email\x20)\x20as\x20qtd_resolvidos,\x0a\x20\x20\x20\x20count(*)\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20qtd_por_usuario,\x0a\x20\x20\x20\x20min((DATE_PART(\x27day\x27,\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000))\x20*\x2024\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27hour\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20*\x2060\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27minute\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20menor_tempo_por_usuario,\x0a\x20\x20\x20\x20max((DATE_PART(\x27day\x27,\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000))\x20*\x2024\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27hour\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20*\x2060\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27minute\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20OVER\x20(PARTITION\x20by\x20email)\x20as\x20maior_tempo_por_usuario,\x0a\x20\x20\x20\x20avg((DATE_PART(\x27day\x27,\x20\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000))\x20*\x2024\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27hour\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20*\x2060\x20+\x0a\x20\x20\x20\x20DATE_PART(\x27minute\x27,\x20to_timestamp(t.\x22closedAt\x22/1000)\x20-\x20to_timestamp(t.\x22startedAttendanceAt\x22/1000)))\x20OVER\x20(PARTITION\x20by\x20email)\x20\x20as\x20tempo_medio_por_usuario\x0a\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20t.\x22userId\x22\x20=\x20\x22u\x22.\x22id\x22\x0a\x20\x20\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20q.id\x20\x20=\x20t.\x22queueId\x22\x0a\x20\x20\x20\x20where\x20t.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20\x20\x20order\x20by\x206\x20Desc\x0a',StatisticsPerUser=async({startDate:_0x3417c0,endDate:_0x372156,companyId:_0x1e6ff0})=>{const _0xb7ca5b=a571_0x1e53a8,_0x18bc85=await database_1['default'][_0xb7ca5b(0x88)](query,{'replacements':{'companyId':_0x1e6ff0,'startDate':_0x3417c0,'endDate':_0x372156},'type':sequelize_1['QueryTypes'][_0xb7ca5b(0x81)]});return _0x18bc85;};exports[a571_0x1e53a8(0x8d)]=StatisticsPerUser;