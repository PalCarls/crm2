'use strict';const a490_0x342912=a490_0x5275;(function(_0x4904fc,_0x396cf4){const _0x16a97b=a490_0x5275,_0x5d232c=_0x4904fc();while(!![]){try{const _0x4fa4f4=-parseInt(_0x16a97b(0xe5))/0x1+parseInt(_0x16a97b(0xdd))/0x2+-parseInt(_0x16a97b(0xf6))/0x3+-parseInt(_0x16a97b(0xf3))/0x4+parseInt(_0x16a97b(0xdb))/0x5*(parseInt(_0x16a97b(0xe0))/0x6)+parseInt(_0x16a97b(0xe2))/0x7*(-parseInt(_0x16a97b(0xd0))/0x8)+-parseInt(_0x16a97b(0xd8))/0x9*(-parseInt(_0x16a97b(0xd6))/0xa);if(_0x4fa4f4===_0x396cf4)break;else _0x5d232c['push'](_0x5d232c['shift']());}catch(_0x56b198){_0x5d232c['push'](_0x5d232c['shift']());}}}(a490_0x2b01,0x86bf1));function a490_0x2b01(){const _0x4ffbd7=['query','7SbKQkQ','../../database','\x20and\x20tt.\x22createdAt\x22\x20>=\x20(now()\x20-\x20\x27?\x20days\x27::interval)','442969NqVZtw','push','\x20and\x20tt.\x22createdAt\x22\x20<=\x20?','create','where\x20tt.\x22companyId\x22\x20=\x20?','--\x20filterPeriod','date_to','__importStar','date_from','replace','\x0a\x20\x20\x20\x20with\x0a\x20\x20\x20\x20traking\x20as\x20(\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.name\x20\x22companyName\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u.name\x20\x22userName\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u.online\x20\x22userOnline\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20w.name\x20\x22whatsappName\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20ct.name\x20\x22contactName\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20ct.number\x20\x22contactNumber\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(coalesce(tt.\x22closedAt\x22,tt.\x22finishedAt\x22)\x20is\x20not\x20null)\x20\x22finished\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(tt.\x22userId\x22\x20is\x20null\x20and\x20coalesce(tt.\x22closedAt\x22,tt.\x22finishedAt\x22)\x20is\x20null)\x20\x22pending\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20coalesce((\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27day\x27,\x20age(coalesce(tt.\x22ratingAt\x22,\x20coalesce(tt.\x22closedAt\x22,tt.\x22finishedAt\x22))\x20,\x20tt.\x22startedAt\x22))\x20*\x2024\x20*\x2060)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27hour\x27,\x20age(coalesce(tt.\x22ratingAt\x22,\x20coalesce(tt.\x22closedAt\x22,tt.\x22finishedAt\x22)),\x20tt.\x22startedAt\x22))\x20*\x2060)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27minutes\x27,\x20age(coalesce(tt.\x22ratingAt\x22,\x20coalesce(tt.\x22closedAt\x22,tt.\x22finishedAt\x22)),\x20tt.\x22startedAt\x22)))\x0a\x20\x20\x20\x20\x20\x20\x20\x20),\x200)\x20\x22supportTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20coalesce((\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27day\x27,\x20age(tt.\x22startedAt\x22,\x20tt.\x22queuedAt\x22))\x20*\x2024\x20*\x2060)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27hour\x27,\x20age(tt.\x22startedAt\x22,\x20tt.\x22queuedAt\x22))\x20*\x2060)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27minutes\x27,\x20age(tt.\x22startedAt\x22,\x20tt.\x22queuedAt\x22)))\x0a\x20\x20\x20\x20\x20\x20\x20\x20),\x200)\x20\x22waitTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20t.status,\x0a\x20\x20\x20\x20\x20\x20\x20\x20tt.*,\x0a\x20\x20\x20\x20\x20\x20\x20\x20ct.\x22id\x22\x20\x22contactId\x22\x0a\x20\x20\x20\x20\x20\x20from\x20\x22TicketTraking\x22\x20tt\x0a\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Companies\x22\x20c\x20on\x20c.id\x20=\x20tt.\x22companyId\x22\x0a\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20u.id\x20=\x20tt.\x22userId\x22\x0a\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Whatsapps\x22\x20w\x20on\x20w.id\x20=\x20tt.\x22whatsappId\x22\x0a\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Tickets\x22\x20t\x20on\x20t.id\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Contacts\x22\x20ct\x20on\x20ct.id\x20=\x20t.\x22contactId\x22\x0a\x20\x20\x20\x20\x20\x20--\x20filterPeriod\x0a\x20\x20\x20\x20),\x0a\x20\x20\x20\x20counters\x20as\x20(\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20avg(\x22supportTime\x22)\x20from\x20traking\x20where\x20\x22supportTime\x22\x20>\x200)\x20\x22avgSupportTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20avg(\x22waitTime\x22)\x20from\x20traking\x20where\x20\x22waitTime\x22\x20>\x200)\x20\x22avgWaitTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20count(distinct\x20\x22id\x22)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20status\x20like\x20\x27open\x27\x20and\x20t.\x22companyId\x22\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22supportHappening\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20count(distinct\x20\x22id\x22)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20status\x20like\x20\x27pending\x27\x20and\x20t.\x22companyId\x22\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22supportPending\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20finished)\x20\x22supportFinished\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20count(leads.id)\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ct1.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20count(tt1.id)\x20total\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20tt1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Tickets\x22\x20t1\x20on\x20t1.id\x20=\x20tt1.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Contacts\x22\x20ct1\x20on\x20ct1.id\x20=\x20t1.\x22contactId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20group\x20by\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20having\x20count(tt1.id)\x20=\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20leads\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22leads\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20\x22Tickets\x22\x20t\x20where\x20\x22status\x22\x20=\x20\x27closed\x27\x20and\x20t.\x22companyId\x22\x20=\x20?)\x20\x22tickets\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20\x22Tickets\x22\x20t\x20where\x20t.\x22status\x22\x20=\x20\x27nps\x27\x20and\x20t.\x22companyId\x22\x20=\x20?)\x20\x22waitRating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20\x22status\x22\x20=\x20\x27closed\x27\x20and\x20\x22rated\x22\x20=\x20false)\x20\x22withoutRating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20\x22status\x22\x20=\x20\x27closed\x27\x20and\x20\x22rated\x22\x20=\x20true)\x20\x22withRating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(((select\x20count(id)\x20from\x20traking\x20where\x20\x22rated\x22\x20=\x20true)*\x20100)\x20/\x20nullif((select\x20count(id)\x20from\x20traking),0))\x20\x22percRating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=\x20true\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20>\x208\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsPromotersPerc\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20(select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=\x20true\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20in\x20(7,8)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsPassivePerc\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=\x20true\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20<\x207\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsDetractorsPerc\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20sum(nps.promoter)\x20-\x20sum(nps.detractor)\x20from\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x20promoter\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20,0\x20detractor\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20tt\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=true\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20>\x208\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20union\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200,(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=true\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.rate\x20<\x207))\x20nps\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsScore\x22\x0a\x20\x20\x20\x20),\x0a\x20\x20\x20\x20attedants\x20as\x20(\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20u1.id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u1.\x22name\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u1.\x22online\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20avg(t.\x22waitTime\x22)\x20\x22avgWaitTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20avg(t.\x22supportTime\x22)\x20\x22avgSupportTime\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20count(t.\x22id\x22)\x20\x22tickets\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20round(coalesce(avg(ur.\x22rate\x22),\x200),2)\x20\x22rating\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20coalesce(count(ur.\x22id\x22),\x200)\x20\x22countRating\x22\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Users\x22\x20u1\x0a\x20\x20\x20\x20\x20\x20\x20\x20left\x20join\x20traking\x20t\x20on\x20t.\x22userId\x22\x20=\x20u1.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20left\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22userId\x22\x20=\x20t.\x22userId\x22\x20and\x20ur.\x22ticketId\x22\x20=\x20t.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20where\x20u1.\x22companyId\x22\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20group\x20by\x201,\x202\x0a\x20\x20\x20\x20\x20\x20order\x20by\x20u1.\x22name\x22\x0a\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20\x20\x20select\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(select\x20coalesce(jsonb_build_object(\x27counters\x27,\x20c.*)->>\x27counters\x27,\x20\x27{}\x27)::jsonb\x20from\x20counters\x20c)\x20counters,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(select\x20coalesce(json_agg(a.*),\x20\x27[]\x27)::jsonb\x20from\x20attedants\x20a)\x20attendants;\x0a\x20\x20','__esModule','lodash','log','2229352uGxqHm','defineProperty','\x20and\x20tt.\x22createdAt\x22\x20>=\x20?','901434oZJeFF','configurable','8764264RsLaOB','call','__setModuleDefault','\x2023:59:59','has','get','380myAkvq','__importDefault','352494EeAgbx','getOwnPropertyDescriptor','__createBinding','586540dLLBUs','default','1277550tlEjKW','hasOwnProperty','writable','42KVuJCk'];a490_0x2b01=function(){return _0x4ffbd7;};return a490_0x2b01();}function a490_0x5275(_0x1190ce,_0xdcd2f0){const _0x2b01a1=a490_0x2b01();return a490_0x5275=function(_0x5275e5,_0x28be3f){_0x5275e5=_0x5275e5-0xcf;let _0xdc4590=_0x2b01a1[_0x5275e5];return _0xdc4590;},a490_0x5275(_0x1190ce,_0xdcd2f0);}var __createBinding=this&&this[a490_0x342912(0xda)]||(Object['create']?function(_0x350d2b,_0x3959c6,_0x4b7c42,_0x3b8c23){const _0x4af2ab=a490_0x342912;if(_0x3b8c23===undefined)_0x3b8c23=_0x4b7c42;var _0x485832=Object[_0x4af2ab(0xd9)](_0x3959c6,_0x4b7c42);(!_0x485832||(_0x4af2ab(0xd5)in _0x485832?!_0x3959c6['__esModule']:_0x485832[_0x4af2ab(0xdf)]||_0x485832[_0x4af2ab(0xcf)]))&&(_0x485832={'enumerable':!![],'get':function(){return _0x3959c6[_0x4b7c42];}}),Object[_0x4af2ab(0xf4)](_0x350d2b,_0x3b8c23,_0x485832);}:function(_0x497289,_0x2a2650,_0x28038d,_0x533b9c){if(_0x533b9c===undefined)_0x533b9c=_0x28038d;_0x497289[_0x533b9c]=_0x2a2650[_0x28038d];}),__setModuleDefault=this&&this[a490_0x342912(0xd2)]||(Object[a490_0x342912(0xe8)]?function(_0x30ff61,_0x326882){const _0x239db7=a490_0x342912;Object[_0x239db7(0xf4)](_0x30ff61,_0x239db7(0xdc),{'enumerable':!![],'value':_0x326882});}:function(_0x558a56,_0x1d2a6d){const _0xeb17c2=a490_0x342912;_0x558a56[_0xeb17c2(0xdc)]=_0x1d2a6d;}),__importStar=this&&this[a490_0x342912(0xec)]||function(_0x8a6e46){const _0x34d02b=a490_0x342912;if(_0x8a6e46&&_0x8a6e46[_0x34d02b(0xf0)])return _0x8a6e46;var _0x633e96={};if(_0x8a6e46!=null){for(var _0x31a5e1 in _0x8a6e46)if(_0x31a5e1!==_0x34d02b(0xdc)&&Object['prototype'][_0x34d02b(0xde)][_0x34d02b(0xd1)](_0x8a6e46,_0x31a5e1))__createBinding(_0x633e96,_0x8a6e46,_0x31a5e1);}return __setModuleDefault(_0x633e96,_0x8a6e46),_0x633e96;},__importDefault=this&&this[a490_0x342912(0xd7)]||function(_0x2348f6){const _0x1ab4e0=a490_0x342912;return _0x2348f6&&_0x2348f6[_0x1ab4e0(0xf0)]?_0x2348f6:{'default':_0x2348f6};};Object[a490_0x342912(0xf4)](exports,a490_0x342912(0xf0),{'value':!![]});const sequelize_1=require('sequelize'),_=__importStar(require(a490_0x342912(0xf1))),database_1=__importDefault(require(a490_0x342912(0xe3))),fs=require('fs');async function DashboardDataService(_0x56e411,_0x3b8b67){const _0x1297dc=a490_0x342912,_0xbcfd2e=_0x1297dc(0xef);let _0x2aca15=_0x1297dc(0xe9);const _0x178851=[_0x56e411];_[_0x1297dc(0xd4)](_0x3b8b67,'days')&&(_0x2aca15+=_0x1297dc(0xe4),_0x178851[_0x1297dc(0xe6)](parseInt((''+_0x3b8b67['days'])[_0x1297dc(0xee)](/\D/g,''),0xa)));_[_0x1297dc(0xd4)](_0x3b8b67,_0x1297dc(0xed))&&(_0x2aca15+=_0x1297dc(0xf5),_0x178851[_0x1297dc(0xe6)](_0x3b8b67[_0x1297dc(0xed)]+'\x2000:00:00'));_['has'](_0x3b8b67,'date_to')&&(_0x2aca15+=_0x1297dc(0xe7),_0x178851[_0x1297dc(0xe6)](_0x3b8b67[_0x1297dc(0xeb)]+_0x1297dc(0xd3)));_0x178851[_0x1297dc(0xe6)](_0x56e411),_0x178851[_0x1297dc(0xe6)](_0x56e411),_0x178851[_0x1297dc(0xe6)](_0x56e411),_0x178851[_0x1297dc(0xe6)](_0x56e411),_0x178851[_0x1297dc(0xe6)](_0x56e411),console[_0x1297dc(0xf2)](_0x178851);const _0x16a983=_0xbcfd2e['replace'](_0x1297dc(0xea),_0x2aca15),_0x24bb24=await database_1['default'][_0x1297dc(0xe1)](_0x16a983,{'replacements':_0x178851,'type':sequelize_1['QueryTypes']['SELECT'],'plain':!![]});return _0x24bb24;}exports[a490_0x342912(0xdc)]=DashboardDataService;