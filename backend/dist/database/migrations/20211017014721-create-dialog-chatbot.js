'use strict';const a105_0x57d813=a105_0x145e;(function(_0x4ff0b7,_0x3d8b39){const _0x64c66b=a105_0x145e,_0x45e290=_0x4ff0b7();while(!![]){try{const _0x47ec29=parseInt(_0x64c66b(0xae))/0x1+parseInt(_0x64c66b(0xb5))/0x2*(parseInt(_0x64c66b(0xa5))/0x3)+parseInt(_0x64c66b(0xa7))/0x4+parseInt(_0x64c66b(0xa8))/0x5+parseInt(_0x64c66b(0xb4))/0x6*(parseInt(_0x64c66b(0xb1))/0x7)+parseInt(_0x64c66b(0xb6))/0x8*(parseInt(_0x64c66b(0xa6))/0x9)+-parseInt(_0x64c66b(0xb2))/0xa*(parseInt(_0x64c66b(0xb3))/0xb);if(_0x47ec29===_0x3d8b39)break;else _0x45e290['push'](_0x45e290['shift']());}catch(_0x124f9f){_0x45e290['push'](_0x45e290['shift']());}}}(a105_0x188b,0x8193c));Object['defineProperty'](exports,a105_0x57d813(0xad),{'value':!![]});const sequelize_1=require(a105_0x57d813(0xa4));function a105_0x145e(_0x427281,_0xb2f467){const _0x188b8f=a105_0x188b();return a105_0x145e=function(_0x145e06,_0x4c1939){_0x145e06=_0x145e06-0xa3;let _0xd007dc=_0x188b8f[_0x145e06];return _0xd007dc;},a105_0x145e(_0x427281,_0xb2f467);}module['exports']={'up':_0x20c40c=>{const _0x54763a=a105_0x57d813;return _0x20c40c[_0x54763a(0xaf)]('DialogChatBots',{'id':{'type':sequelize_1['DataTypes'][_0x54763a(0xb0)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'awaiting':{'type':sequelize_1['DataTypes'][_0x54763a(0xb0)],'defaultValue':0x0,'allowNull':![]},'contactId':{'type':sequelize_1['DataTypes'][_0x54763a(0xb0)],'references':{'model':'Contacts','key':'id'},'onUpdate':_0x54763a(0xac),'onDelete':'CASCADE'},'chatbotId':{'type':sequelize_1[_0x54763a(0xaa)]['INTEGER'],'references':{'model':_0x54763a(0xa3),'key':'id'},'onUpdate':_0x54763a(0xac),'onDelete':'SET\x20NULL'},'createdAt':{'type':sequelize_1['DataTypes'][_0x54763a(0xab)],'allowNull':![]},'updatedAt':{'type':sequelize_1[_0x54763a(0xaa)]['DATE'],'allowNull':![]}});},'down':_0x5a1c03=>{const _0x10301a=a105_0x57d813;return _0x5a1c03['dropTable'](_0x10301a(0xa9));}};function a105_0x188b(){const _0x2e5b00=['DataTypes','DATE','CASCADE','__esModule','588631fUsChf','createTable','INTEGER','75586BJlGWz','3690sCMLTC','50501mJFZUD','156eOKfOP','134180rpBilZ','357928WrYHtk','Chatbots','sequelize','3QAPRoV','9QuTmgT','3975536YjcNRd','1248665IvWYxK','DialogChatBots'];a105_0x188b=function(){return _0x2e5b00;};return a105_0x188b();}