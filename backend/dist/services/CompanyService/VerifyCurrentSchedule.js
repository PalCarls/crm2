'use strict';function a395_0x1d52(){const _0x490e96=['__esModule','296405QbxPLf','default','279QporHt','2013lVKDSo','1930248TlUppH','__importDefault','3768821qupxwG','42NZYTad','SELECT','66232oKLQxJ','31670MtHqVE','102pGrkBo','sequelize','\x0a\x20\x20\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentSchedule,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeA\x27)\x20\x22startTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeA\x27)\x20\x22endTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeB\x27)\x20\x22startTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeB\x27)\x20\x22endTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeA\x27\x20=\x20\x27\x27\x20then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeA\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20)\x20)\x20or\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20))\x20\x22inActivity\x22\x0a\x20\x20\x20\x20\x20\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to_char(current_date,\x20\x27day\x27)\x20currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(array_to_json(array_agg(s))->>0)::jsonb\x20currentSchedule\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20\x22Companies\x22\x20c,\x20jsonb_array_elements(c.schedules)\x20s\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20s->>\x27weekdayEn\x27\x20like\x20trim(to_char(current_date,\x20\x27day\x27))\x20and\x20c.id\x20=\x20:companyId\x0a\x20\x20\x20\x20\x20\x20\x20\x20GROUP\x20BY\x201,\x202\x0a\x20\x20\x20\x20\x20\x20)\x20s\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20','defineProperty','463484nGuXKO','../../database','5223oPFWrG'];a395_0x1d52=function(){return _0x490e96;};return a395_0x1d52();}const a395_0x196495=a395_0x53c5;(function(_0x5ec0ed,_0x343c45){const _0x2688a9=a395_0x53c5,_0x3c7b7d=_0x5ec0ed();while(!![]){try{const _0x5dbc62=parseInt(_0x2688a9(0xac))/0x1+-parseInt(_0x2688a9(0xa8))/0x2*(-parseInt(_0x2688a9(0xae))/0x3)+parseInt(_0x2688a9(0xb4))/0x4+parseInt(_0x2688a9(0xb0))/0x5*(-parseInt(_0x2688a9(0xa4))/0x6)+parseInt(_0x2688a9(0xa3))/0x7+parseInt(_0x2688a9(0xa6))/0x8*(-parseInt(_0x2688a9(0xb2))/0x9)+parseInt(_0x2688a9(0xa7))/0xa*(-parseInt(_0x2688a9(0xb3))/0xb);if(_0x5dbc62===_0x343c45)break;else _0x3c7b7d['push'](_0x3c7b7d['shift']());}catch(_0x28bc5f){_0x3c7b7d['push'](_0x3c7b7d['shift']());}}}(a395_0x1d52,0x4ea0f));var __importDefault=this&&this[a395_0x196495(0xa2)]||function(_0x55e163){const _0x2315ae=a395_0x196495;return _0x55e163&&_0x55e163[_0x2315ae(0xaf)]?_0x55e163:{'default':_0x55e163};};Object[a395_0x196495(0xab)](exports,a395_0x196495(0xaf),{'value':!![]});function a395_0x53c5(_0x4e7753,_0x1bb964){const _0x1d52fa=a395_0x1d52();return a395_0x53c5=function(_0x53c54f,_0xca9f27){_0x53c54f=_0x53c54f-0xa2;let _0x56536c=_0x1d52fa[_0x53c54f];return _0x56536c;},a395_0x53c5(_0x4e7753,_0x1bb964);}const sequelize_1=require(a395_0x196495(0xa9)),database_1=__importDefault(require(a395_0x196495(0xad))),VerifyCurrentSchedule=async(_0x139267,_0x37200e)=>{const _0x1f10ee=a395_0x196495;if(_0x37200e===null||_0x37200e===undefined){const _0x3ddd74=_0x1f10ee(0xaa),_0x2abfd8=await database_1[_0x1f10ee(0xb1)]['query'](_0x3ddd74,{'replacements':{'companyId':_0x139267},'type':sequelize_1['QueryTypes'][_0x1f10ee(0xa5)],'plain':!![]});return _0x2abfd8;}else{const _0x11b572='\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20s.currentSchedule,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeA\x27)\x20\x22startTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeA\x27)\x20\x22endTimeA\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27startTimeB\x27)\x20\x22startTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(s.currentSchedule->>\x27endTimeB\x27)\x20\x22endTimeB\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeA\x27\x20=\x20\x27\x27\x20then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeA\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeA\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20)\x20)\x20or\x20(\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27startTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20>=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20>=\x20(s.currentSchedule->>\x27startTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x0a\x20\x09\x09\x09)\x20and\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20case\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09when\x20s.currentSchedule->>\x27endTimeB\x27\x20=\x20\x27\x27then\x20now()::time\x20<=\x20\x2700:00\x27::time\x0a\x20\x20\x20\x20\x09\x09\x09ELSE\x20now()::time\x20<=\x20(s.currentSchedule->>\x27endTimeB\x27)::time\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20))\x20\x22inActivity\x22\x0a\x20\x20\x20\x20\x20\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20q.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to_char(current_date,\x20\x27day\x27)\x20currentWeekday,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(array_to_json(array_agg(s))->>0)::jsonb\x20currentSchedule\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20\x22Queues\x22\x20q,\x20jsonb_array_elements(q.schedules)\x20s\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20s->>\x27weekdayEn\x27\x20like\x20trim(to_char(current_date,\x20\x27day\x27))\x20and\x20q.id\x20=\x20:queueId\x0a\x20\x20\x20\x20\x20\x20\x20\x20and\x20q.\x22companyId\x22\x20=\x20:companyId\x0a\x20\x20\x20\x20\x20\x20\x20\x20GROUP\x20BY\x201,\x202\x0a\x20\x20\x20\x20\x20\x20)\x20s\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20',_0x1cf38b=await database_1['default']['query'](_0x11b572,{'replacements':{'companyId':_0x139267,'queueId':_0x37200e},'type':sequelize_1['QueryTypes'][_0x1f10ee(0xa5)],'plain':!![]});return _0x1cf38b;}};exports['default']=VerifyCurrentSchedule;