'use strict';const a97_0x1eeb3e=a97_0x43a1;function a97_0x2ed0(){const _0x2eee72=['8213ONdOdC','Companies','4271886OwtGkA','1315mTJDSJ','TicketTraking','defineProperty','sequelize','8GPnrVQ','DATE','Tickets','INTEGER','4744194aLZXzI','14231403lgIPLI','158wojeOG','46896320VbJFbp','1855428PNqPvG','createTable','__esModule','DataTypes','SET\x20NULL','24798vZBbFH'];a97_0x2ed0=function(){return _0x2eee72;};return a97_0x2ed0();}(function(_0x4633a9,_0x5f37cf){const _0x2474dd=a97_0x43a1,_0x166f66=_0x4633a9();while(!![]){try{const _0x23d87a=-parseInt(_0x2474dd(0x1c3))/0x1*(parseInt(_0x2474dd(0x1bb))/0x2)+-parseInt(_0x2474dd(0x1c5))/0x3+-parseInt(_0x2474dd(0x1bd))/0x4+-parseInt(_0x2474dd(0x1c6))/0x5*(-parseInt(_0x2474dd(0x1c2))/0x6)+-parseInt(_0x2474dd(0x1b9))/0x7+-parseInt(_0x2474dd(0x1b5))/0x8*(parseInt(_0x2474dd(0x1ba))/0x9)+parseInt(_0x2474dd(0x1bc))/0xa;if(_0x23d87a===_0x5f37cf)break;else _0x166f66['push'](_0x166f66['shift']());}catch(_0x1bb5bc){_0x166f66['push'](_0x166f66['shift']());}}}(a97_0x2ed0,0xef7dc));function a97_0x43a1(_0x3d8c35,_0xa6fedf){const _0x2ed0f8=a97_0x2ed0();return a97_0x43a1=function(_0x43a167,_0x3bb3f5){_0x43a167=_0x43a167-0x1b2;let _0x3c9e22=_0x2ed0f8[_0x43a167];return _0x3c9e22;},a97_0x43a1(_0x3d8c35,_0xa6fedf);}Object[a97_0x1eeb3e(0x1b3)](exports,a97_0x1eeb3e(0x1bf),{'value':!![]});const sequelize_1=require(a97_0x1eeb3e(0x1b4));module['exports']={'up':_0x51bf29=>{const _0x292c3f=a97_0x1eeb3e;return _0x51bf29[_0x292c3f(0x1be)](_0x292c3f(0x1b2),{'id':{'type':sequelize_1[_0x292c3f(0x1c0)][_0x292c3f(0x1b8)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'ticketId':{'type':sequelize_1[_0x292c3f(0x1c0)]['INTEGER'],'references':{'model':_0x292c3f(0x1b7),'key':'id'},'onDelete':'SET\x20NULL'},'companyId':{'type':sequelize_1[_0x292c3f(0x1c0)][_0x292c3f(0x1b8)],'references':{'model':_0x292c3f(0x1c4),'key':'id'},'onDelete':'SET\x20NULL'},'whatsappId':{'type':sequelize_1['DataTypes'][_0x292c3f(0x1b8)],'references':{'model':'Whatsapps','key':'id'},'onDelete':_0x292c3f(0x1c1),'allowNull':!![]},'userId':{'type':sequelize_1[_0x292c3f(0x1c0)][_0x292c3f(0x1b8)],'references':{'model':'Users','key':'id'},'onDelete':'SET\x20NULL','allowNull':!![]},'createdAt':{'type':sequelize_1[_0x292c3f(0x1c0)][_0x292c3f(0x1b6)],'allowNull':!![]},'updatedAt':{'type':sequelize_1['DataTypes'][_0x292c3f(0x1b6)],'allowNull':!![]},'queuedAt':{'type':sequelize_1[_0x292c3f(0x1c0)][_0x292c3f(0x1b6)],'allowNull':!![]},'startedAt':{'type':sequelize_1[_0x292c3f(0x1c0)][_0x292c3f(0x1b6)],'allowNull':!![]},'finishedAt':{'type':sequelize_1[_0x292c3f(0x1c0)][_0x292c3f(0x1b6)],'allowNull':!![]}});},'down':_0x2efb58=>{const _0x6989ce=a97_0x1eeb3e;return _0x2efb58['dropTable'](_0x6989ce(0x1b2));}};