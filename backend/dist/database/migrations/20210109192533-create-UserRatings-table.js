'use strict';function a99_0x5f4c(_0x5b8e09,_0xa4b17a){const _0x1e2f2a=a99_0x1e2f();return a99_0x5f4c=function(_0x5f4cb1,_0x16564b){_0x5f4cb1=_0x5f4cb1-0x1d3;let _0xc04bef=_0x1e2f2a[_0x5f4cb1];return _0xc04bef;},a99_0x5f4c(_0x5b8e09,_0xa4b17a);}const a99_0x2113d5=a99_0x5f4c;(function(_0x2149fb,_0x5c2df5){const _0x46f972=a99_0x5f4c,_0x332f93=_0x2149fb();while(!![]){try{const _0x1352f9=-parseInt(_0x46f972(0x1d9))/0x1*(-parseInt(_0x46f972(0x1d5))/0x2)+parseInt(_0x46f972(0x1e0))/0x3+-parseInt(_0x46f972(0x1e2))/0x4+-parseInt(_0x46f972(0x1d6))/0x5+-parseInt(_0x46f972(0x1de))/0x6*(parseInt(_0x46f972(0x1e1))/0x7)+parseInt(_0x46f972(0x1dd))/0x8+parseInt(_0x46f972(0x1d8))/0x9*(parseInt(_0x46f972(0x1d7))/0xa);if(_0x1352f9===_0x5c2df5)break;else _0x332f93['push'](_0x332f93['shift']());}catch(_0x1a92bc){_0x332f93['push'](_0x332f93['shift']());}}}(a99_0x1e2f,0xe070f));Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=require(a99_0x2113d5(0x1d3));function a99_0x1e2f(){const _0x16fe68=['3419208vltSwT','sequelize','INTEGER','32XXJGjE','6218570QpEGjh','13610KeXMNZ','657EMYbGt','89686FZDeXa','DataTypes','SET\x20NULL','Tickets','14347704JaJcbp','12ORsDuF','DATE','2781675nYEiAV','4330165Indjrw'];a99_0x1e2f=function(){return _0x16fe68;};return a99_0x1e2f();}module['exports']={'up':_0x4a5997=>{const _0x4f7020=a99_0x2113d5;return _0x4a5997['createTable']('UserRatings',{'id':{'type':sequelize_1[_0x4f7020(0x1da)][_0x4f7020(0x1d4)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'ticketId':{'type':sequelize_1[_0x4f7020(0x1da)][_0x4f7020(0x1d4)],'references':{'model':_0x4f7020(0x1dc),'key':'id'},'onDelete':'SET\x20NULL'},'companyId':{'type':sequelize_1[_0x4f7020(0x1da)][_0x4f7020(0x1d4)],'references':{'model':'Companies','key':'id'},'onDelete':'SET\x20NULL'},'userId':{'type':sequelize_1[_0x4f7020(0x1da)]['INTEGER'],'references':{'model':'Users','key':'id'},'onDelete':_0x4f7020(0x1db),'allowNull':!![]},'rate':{'type':sequelize_1['DataTypes'][_0x4f7020(0x1d4)],'defaultValue':0x0},'createdAt':{'type':sequelize_1['DataTypes']['DATE'],'allowNull':!![]},'updatedAt':{'type':sequelize_1['DataTypes'][_0x4f7020(0x1df)],'allowNull':!![]}});},'down':_0x34ed1f=>{return _0x34ed1f['dropTable']('UserRatings');}};