'use strict';const a347_0x232339=a347_0x14c3;function a347_0x14c3(_0x16b8da,_0x1783c6){const _0x360dda=a347_0x360d();return a347_0x14c3=function(_0x14c3c6,_0x4477ea){_0x14c3c6=_0x14c3c6-0x1a4;let _0x161f2f=_0x360dda[_0x14c3c6];return _0x161f2f;},a347_0x14c3(_0x16b8da,_0x1783c6);}(function(_0x7d18c0,_0xb6393e){const _0x350250=a347_0x14c3,_0x224c37=_0x7d18c0();while(!![]){try{const _0x50ad47=-parseInt(_0x350250(0x1f1))/0x1*(-parseInt(_0x350250(0x1e2))/0x2)+parseInt(_0x350250(0x1be))/0x3*(parseInt(_0x350250(0x1d3))/0x4)+-parseInt(_0x350250(0x1ba))/0x5*(-parseInt(_0x350250(0x1a7))/0x6)+-parseInt(_0x350250(0x1bd))/0x7+parseInt(_0x350250(0x1d7))/0x8*(-parseInt(_0x350250(0x1ca))/0x9)+parseInt(_0x350250(0x1f8))/0xa*(parseInt(_0x350250(0x1f5))/0xb)+-parseInt(_0x350250(0x1b6))/0xc*(parseInt(_0x350250(0x1a8))/0xd);if(_0x50ad47===_0xb6393e)break;else _0x224c37['push'](_0x224c37['shift']());}catch(_0x575989){_0x224c37['push'](_0x224c37['shift']());}}}(a347_0x360d,0x21114));var __decorate=this&&this['__decorate']||function(_0x39d73f,_0x37963a,_0x35cd32,_0x2ee197){const _0x400c8d=a347_0x14c3;var _0x3833a3=arguments[_0x400c8d(0x1d2)],_0x86ae21=_0x3833a3<0x3?_0x37963a:_0x2ee197===null?_0x2ee197=Object[_0x400c8d(0x1d1)](_0x37963a,_0x35cd32):_0x2ee197,_0x53ea98;if(typeof Reflect===_0x400c8d(0x1af)&&typeof Reflect[_0x400c8d(0x1ed)]===_0x400c8d(0x1c9))_0x86ae21=Reflect[_0x400c8d(0x1ed)](_0x39d73f,_0x37963a,_0x35cd32,_0x2ee197);else{for(var _0x381327=_0x39d73f[_0x400c8d(0x1d2)]-0x1;_0x381327>=0x0;_0x381327--)if(_0x53ea98=_0x39d73f[_0x381327])_0x86ae21=(_0x3833a3<0x3?_0x53ea98(_0x86ae21):_0x3833a3>0x3?_0x53ea98(_0x37963a,_0x35cd32,_0x86ae21):_0x53ea98(_0x37963a,_0x35cd32))||_0x86ae21;}return _0x3833a3>0x3&&_0x86ae21&&Object[_0x400c8d(0x1d5)](_0x37963a,_0x35cd32,_0x86ae21),_0x86ae21;},__metadata=this&&this[a347_0x232339(0x1a9)]||function(_0x5e1680,_0x99e136){const _0x1e1f81=a347_0x232339;if(typeof Reflect===_0x1e1f81(0x1af)&&typeof Reflect['metadata']===_0x1e1f81(0x1c9))return Reflect[_0x1e1f81(0x1bc)](_0x5e1680,_0x99e136);},__importDefault=this&&this[a347_0x232339(0x1e4)]||function(_0xa7dc1e){const _0x5dac1f=a347_0x232339;return _0xa7dc1e&&_0xa7dc1e[_0x5dac1f(0x1bf)]?_0xa7dc1e:{'default':_0xa7dc1e};};function a347_0x360d(){const _0x339fb7=['chatbot','ForeignKey','CASCADE','disabled','createdAt','quickMessages','BeforeUpdate','super','decorate','allowGroup','enabled','queues','31BWWNbL','./Chatbot','closed','./UserQueue','33OxAXpO','BelongsTo','bcryptjs','838220CNMPBc','BelongsToMany','userClosePendingTicket','updatedAt','BeforeCreate','110472oSPRFT','5861323RVIMwr','__metadata','VIRTUAL','startWork','hash','SET\x20NULL','whatsapp','object','UpdatedAt','prototype','checkPassword','00:00','defaultTheme','./Ticket','12aXtgix','Model','./QuickMessage','disable','40JJXGaA','AutoIncrement','metadata','71393uhGtfl','7017BlfAix','__esModule','defaultTicketsManagerWidth','design:type','whatsappId','CreatedAt','23:59','allUserChat','getDataValue','admin','DataType','function','398124TxJrvh','Default','tokenVersion','allHistoric','./Company','passwordHash','Column','getOwnPropertyDescriptor','length','248exkBSA','showDashboard','defineProperty','HasMany','24axaYyJ','email','name','color','default','TEXT','hashPassword','compare','Table','password','profileImage','11964jncKNh','farewellMessage','__importDefault'];a347_0x360d=function(){return _0x339fb7;};return a347_0x360d();}Object['defineProperty'](exports,a347_0x232339(0x1bf),{'value':!![]});const sequelize_typescript_1=require('sequelize-typescript'),bcryptjs_1=require(a347_0x232339(0x1f7)),Ticket_1=__importDefault(require(a347_0x232339(0x1b5))),Queue_1=__importDefault(require('./Queue')),UserQueue_1=__importDefault(require(a347_0x232339(0x1f4))),Company_1=__importDefault(require(a347_0x232339(0x1ce))),QuickMessage_1=__importDefault(require(a347_0x232339(0x1b8))),Whatsapp_1=__importDefault(require('./Whatsapp')),Chatbot_1=__importDefault(require(a347_0x232339(0x1f2)));let User=class User extends sequelize_typescript_1[a347_0x232339(0x1b7)]{constructor(){const _0x43b631=a347_0x232339;super(...arguments),this[_0x43b631(0x1b2)]=async _0x3e393d=>{const _0x5e648a=_0x43b631;return(0x0,bcryptjs_1[_0x5e648a(0x1de)])(_0x3e393d,this[_0x5e648a(0x1c6)]('passwordHash'));};}};User[a347_0x232339(0x1dd)]=async _0x2d0220=>{const _0xaef78e=a347_0x232339;_0x2d0220['password']&&(_0x2d0220[_0xaef78e(0x1cf)]=await(0x0,bcryptjs_1[_0xaef78e(0x1ac)])(_0x2d0220[_0xaef78e(0x1e0)],0x8));},__decorate([sequelize_typescript_1['PrimaryKey'],sequelize_typescript_1[a347_0x232339(0x1bb)],sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),Number)],User[a347_0x232339(0x1b1)],'id',void 0x0),__decorate([sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata('design:type',String)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1d9),void 0x0),__decorate([sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),String)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1d8),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1d0)])(sequelize_typescript_1[a347_0x232339(0x1c8)][a347_0x232339(0x1aa)]),__metadata(a347_0x232339(0x1c1),String)],User['prototype'],a347_0x232339(0x1e0),void 0x0),__decorate([sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),String)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1cf),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(0x0),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),Number)],User['prototype'],a347_0x232339(0x1cc),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(a347_0x232339(0x1c7)),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata('design:type',String)],User[a347_0x232339(0x1b1)],'profile',void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(null),sequelize_typescript_1['Column'],__metadata('design:type',String)],User['prototype'],a347_0x232339(0x1e1),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1e6)])(()=>Whatsapp_1[a347_0x232339(0x1db)]),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),Number)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1c2),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1f6)])(()=>Whatsapp_1['default']),__metadata(a347_0x232339(0x1c1),Whatsapp_1[a347_0x232339(0x1db)])],User[a347_0x232339(0x1b1)],a347_0x232339(0x1ae),void 0x0),__decorate([sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),Boolean)],User['prototype'],a347_0x232339(0x1ec),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a347_0x232339(0x1c1),Boolean)],User[a347_0x232339(0x1b1)],'online',void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(a347_0x232339(0x1b3)),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata('design:type',String)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1ab),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(a347_0x232339(0x1c4)),sequelize_typescript_1['Column'],__metadata(a347_0x232339(0x1c1),String)],User[a347_0x232339(0x1b1)],'endWork',void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(''),sequelize_typescript_1['Column'],__metadata(a347_0x232339(0x1c1),String)],User['prototype'],a347_0x232339(0x1da),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(a347_0x232339(0x1b9)),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata('design:type',String)],User[a347_0x232339(0x1b1)],'allTicket',void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(![]),sequelize_typescript_1['Column'],__metadata(a347_0x232339(0x1c1),Boolean)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1ee),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])('light'),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),String)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1b4),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(a347_0x232339(0x1f3)),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),String)],User['prototype'],'defaultMenu',void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(''),(0x0,sequelize_typescript_1[a347_0x232339(0x1d0)])(sequelize_typescript_1['DataType'][a347_0x232339(0x1dc)]),__metadata(a347_0x232339(0x1c1),String)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1e3),void 0x0),__decorate([sequelize_typescript_1[a347_0x232339(0x1c3)],__metadata('design:type',Date)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1e9),void 0x0),__decorate([sequelize_typescript_1[a347_0x232339(0x1b0)],__metadata(a347_0x232339(0x1c1),Date)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1a5),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1e6)])(()=>Company_1[a347_0x232339(0x1db)]),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),Number)],User[a347_0x232339(0x1b1)],'companyId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1f6)])(()=>Company_1[a347_0x232339(0x1db)]),__metadata('design:type',Company_1[a347_0x232339(0x1db)])],User[a347_0x232339(0x1b1)],'company',void 0x0),__decorate([(0x0,sequelize_typescript_1['HasMany'])(()=>Ticket_1['default']),__metadata(a347_0x232339(0x1c1),Array)],User['prototype'],'tickets',void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1f9)])(()=>Queue_1[a347_0x232339(0x1db)],()=>UserQueue_1[a347_0x232339(0x1db)]),__metadata(a347_0x232339(0x1c1),Array)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1f0),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1d6)])(()=>QuickMessage_1[a347_0x232339(0x1db)],{'onUpdate':a347_0x232339(0x1e7),'onDelete':a347_0x232339(0x1e7),'hooks':!![]}),__metadata(a347_0x232339(0x1c1),Array)],User['prototype'],a347_0x232339(0x1ea),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(a347_0x232339(0x1e8)),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),String)],User['prototype'],a347_0x232339(0x1cd),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1d6)])(()=>Chatbot_1['default'],{'onUpdate':'SET\x20NULL','onDelete':a347_0x232339(0x1ad),'hooks':!![]}),__metadata('design:type',Array)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1e5),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(a347_0x232339(0x1e8)),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),String)],User['prototype'],a347_0x232339(0x1c5),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(a347_0x232339(0x1ef)),sequelize_typescript_1['Column'],__metadata(a347_0x232339(0x1c1),String)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1a4),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(a347_0x232339(0x1e8)),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),String)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1d4),void 0x0),__decorate([(0x0,sequelize_typescript_1[a347_0x232339(0x1cb)])(0x226),sequelize_typescript_1[a347_0x232339(0x1d0)],__metadata(a347_0x232339(0x1c1),Number)],User[a347_0x232339(0x1b1)],a347_0x232339(0x1c0),void 0x0),__decorate([sequelize_typescript_1[a347_0x232339(0x1eb)],sequelize_typescript_1[a347_0x232339(0x1a6)],__metadata(a347_0x232339(0x1c1),Object)],User,a347_0x232339(0x1dd),void 0x0),User=__decorate([sequelize_typescript_1[a347_0x232339(0x1df)]],User),exports[a347_0x232339(0x1db)]=User;