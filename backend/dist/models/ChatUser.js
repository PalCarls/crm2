'use strict';function a243_0xa3cb(_0x393f8d,_0x2db691){var _0x1f009c=a243_0x1f00();return a243_0xa3cb=function(_0xa3cbdc,_0x5ba1c0){_0xa3cbdc=_0xa3cbdc-0xff;var _0x531be0=_0x1f009c[_0xa3cbdc];return _0x531be0;},a243_0xa3cb(_0x393f8d,_0x2db691);}var a243_0x755d3d=a243_0xa3cb;function a243_0x1f00(){var _0x2fddbe=['__esModule','unreads','5qjTFPl','length','prototype','function','CreatedAt','__decorate','defineProperty','1281006sCkehh','27467407PAMxtp','default','ForeignKey','2998838jrkGSz','ChatUsers','__importDefault','624412NdbgGD','./Chat','sequelize-typescript','5563632swlUbl','1jpIdzl','__metadata','16vxrvKT','userId','decorate','chat','BelongsTo','./User','Table','updatedAt','Model','PrimaryKey','design:type','createdAt','metadata','Column','70yCkSYc','3091333yfWxph','2878713DHJEME','object'];a243_0x1f00=function(){return _0x2fddbe;};return a243_0x1f00();}(function(_0x2c7063,_0x1d2e2b){var _0x48b580=a243_0xa3cb,_0x32a880=_0x2c7063();while(!![]){try{var _0x2b9351=parseInt(_0x48b580(0x126))/0x1*(-parseInt(_0x48b580(0x11f))/0x2)+parseInt(_0x48b580(0x110))/0x3+-parseInt(_0x48b580(0x122))/0x4*(parseInt(_0x48b580(0x114))/0x5)+-parseInt(_0x48b580(0x125))/0x6+-parseInt(_0x48b580(0x10f))/0x7*(-parseInt(_0x48b580(0x100))/0x8)+-parseInt(_0x48b580(0x11b))/0x9*(parseInt(_0x48b580(0x10e))/0xa)+parseInt(_0x48b580(0x11c))/0xb;if(_0x2b9351===_0x1d2e2b)break;else _0x32a880['push'](_0x32a880['shift']());}catch(_0x112470){_0x32a880['push'](_0x32a880['shift']());}}}(a243_0x1f00,0xb9b8a));var __decorate=this&&this[a243_0x755d3d(0x119)]||function(_0x3a03fc,_0x114a8c,_0x2fbfe3,_0x33d094){var _0x132723=a243_0x755d3d,_0x4fbae4=arguments[_0x132723(0x115)],_0x1ae036=_0x4fbae4<0x3?_0x114a8c:_0x33d094===null?_0x33d094=Object['getOwnPropertyDescriptor'](_0x114a8c,_0x2fbfe3):_0x33d094,_0x21db38;if(typeof Reflect===_0x132723(0x111)&&typeof Reflect[_0x132723(0x102)]===_0x132723(0x117))_0x1ae036=Reflect[_0x132723(0x102)](_0x3a03fc,_0x114a8c,_0x2fbfe3,_0x33d094);else{for(var _0x74fbe1=_0x3a03fc['length']-0x1;_0x74fbe1>=0x0;_0x74fbe1--)if(_0x21db38=_0x3a03fc[_0x74fbe1])_0x1ae036=(_0x4fbae4<0x3?_0x21db38(_0x1ae036):_0x4fbae4>0x3?_0x21db38(_0x114a8c,_0x2fbfe3,_0x1ae036):_0x21db38(_0x114a8c,_0x2fbfe3))||_0x1ae036;}return _0x4fbae4>0x3&&_0x1ae036&&Object[_0x132723(0x11a)](_0x114a8c,_0x2fbfe3,_0x1ae036),_0x1ae036;},__metadata=this&&this[a243_0x755d3d(0xff)]||function(_0x1016a3,_0x13dc37){var _0x45f74d=a243_0x755d3d;if(typeof Reflect===_0x45f74d(0x111)&&typeof Reflect[_0x45f74d(0x10c)]===_0x45f74d(0x117))return Reflect[_0x45f74d(0x10c)](_0x1016a3,_0x13dc37);},__importDefault=this&&this[a243_0x755d3d(0x121)]||function(_0x2d110e){var _0x563afb=a243_0x755d3d;return _0x2d110e&&_0x2d110e[_0x563afb(0x112)]?_0x2d110e:{'default':_0x2d110e};};Object['defineProperty'](exports,a243_0x755d3d(0x112),{'value':!![]});const sequelize_typescript_1=require(a243_0x755d3d(0x124)),User_1=__importDefault(require(a243_0x755d3d(0x105))),Chat_1=__importDefault(require(a243_0x755d3d(0x123)));let ChatUser=class ChatUser extends sequelize_typescript_1[a243_0x755d3d(0x108)]{};__decorate([sequelize_typescript_1[a243_0x755d3d(0x109)],sequelize_typescript_1['AutoIncrement'],sequelize_typescript_1['Column'],__metadata('design:type',Number)],ChatUser['prototype'],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Chat_1[a243_0x755d3d(0x11d)]),sequelize_typescript_1['Column'],__metadata(a243_0x755d3d(0x10a),Number)],ChatUser[a243_0x755d3d(0x116)],'chatId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a243_0x755d3d(0x11e)])(()=>User_1[a243_0x755d3d(0x11d)]),sequelize_typescript_1[a243_0x755d3d(0x10d)],__metadata(a243_0x755d3d(0x10a),Number)],ChatUser['prototype'],a243_0x755d3d(0x101),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a243_0x755d3d(0x10a),Number)],ChatUser[a243_0x755d3d(0x116)],a243_0x755d3d(0x113),void 0x0),__decorate([sequelize_typescript_1[a243_0x755d3d(0x118)],__metadata('design:type',Date)],ChatUser[a243_0x755d3d(0x116)],a243_0x755d3d(0x10b),void 0x0),__decorate([sequelize_typescript_1['UpdatedAt'],__metadata(a243_0x755d3d(0x10a),Date)],ChatUser[a243_0x755d3d(0x116)],a243_0x755d3d(0x107),void 0x0),__decorate([(0x0,sequelize_typescript_1[a243_0x755d3d(0x104)])(()=>Chat_1['default']),__metadata(a243_0x755d3d(0x10a),Chat_1[a243_0x755d3d(0x11d)])],ChatUser[a243_0x755d3d(0x116)],a243_0x755d3d(0x103),void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>User_1[a243_0x755d3d(0x11d)]),__metadata(a243_0x755d3d(0x10a),User_1['default'])],ChatUser[a243_0x755d3d(0x116)],'user',void 0x0),ChatUser=__decorate([(0x0,sequelize_typescript_1[a243_0x755d3d(0x106)])({'tableName':a243_0x755d3d(0x120)})],ChatUser),exports[a243_0x755d3d(0x11d)]=ChatUser;