'use strict';const a97_0x129d83=a97_0x4a73;(function(_0x710792,_0x1e3a78){const _0x4efc5f=a97_0x4a73,_0x434b81=_0x710792();while(!![]){try{const _0x3d9dce=-parseInt(_0x4efc5f(0x79))/0x1+-parseInt(_0x4efc5f(0x7c))/0x2*(parseInt(_0x4efc5f(0x78))/0x3)+parseInt(_0x4efc5f(0x75))/0x4+parseInt(_0x4efc5f(0x7f))/0x5+-parseInt(_0x4efc5f(0x7d))/0x6+parseInt(_0x4efc5f(0x73))/0x7*(parseInt(_0x4efc5f(0x77))/0x8)+parseInt(_0x4efc5f(0x6e))/0x9*(parseInt(_0x4efc5f(0x7b))/0xa);if(_0x3d9dce===_0x1e3a78)break;else _0x434b81['push'](_0x434b81['shift']());}catch(_0x1b8867){_0x434b81['push'](_0x434b81['shift']());}}}(a97_0x9e9d,0xf3a95));function a97_0x9e9d(){const _0x2795cf=['10695486UVQvcr','defineProperty','6577080zdddeZ','exports','INTEGER','402309ojUanW','DataTypes','dropTable','UserRatings','createTable','2840705szPotn','Users','746728UDgHtS','DATE','8nZOzeP','161979RrdLmh','1263651KcECbD','SET\x20NULL','490grpHvu','2QiHWpj'];a97_0x9e9d=function(){return _0x2795cf;};return a97_0x9e9d();}function a97_0x4a73(_0xf6a84f,_0x257e35){const _0x9e9dc3=a97_0x9e9d();return a97_0x4a73=function(_0x4a7320,_0x262f74){_0x4a7320=_0x4a7320-0x6e;let _0x1eba73=_0x9e9dc3[_0x4a7320];return _0x1eba73;},a97_0x4a73(_0xf6a84f,_0x257e35);}Object[a97_0x129d83(0x7e)](exports,'__esModule',{'value':!![]});const sequelize_1=require('sequelize');module[a97_0x129d83(0x80)]={'up':_0x2be9c2=>{const _0x30cad3=a97_0x129d83;return _0x2be9c2[_0x30cad3(0x72)](_0x30cad3(0x71),{'id':{'type':sequelize_1[_0x30cad3(0x6f)][_0x30cad3(0x81)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'ticketId':{'type':sequelize_1[_0x30cad3(0x6f)][_0x30cad3(0x81)],'references':{'model':'Tickets','key':'id'},'onDelete':'SET\x20NULL'},'companyId':{'type':sequelize_1[_0x30cad3(0x6f)]['INTEGER'],'references':{'model':'Companies','key':'id'},'onDelete':_0x30cad3(0x7a)},'userId':{'type':sequelize_1['DataTypes'][_0x30cad3(0x81)],'references':{'model':_0x30cad3(0x74),'key':'id'},'onDelete':_0x30cad3(0x7a),'allowNull':!![]},'rate':{'type':sequelize_1[_0x30cad3(0x6f)]['INTEGER'],'defaultValue':0x0},'createdAt':{'type':sequelize_1[_0x30cad3(0x6f)][_0x30cad3(0x76)],'allowNull':!![]},'updatedAt':{'type':sequelize_1[_0x30cad3(0x6f)][_0x30cad3(0x76)],'allowNull':!![]}});},'down':_0x28df32=>{const _0x4f4acc=a97_0x129d83;return _0x28df32[_0x4f4acc(0x70)]('UserRatings');}};