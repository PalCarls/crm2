'use strict';const a311_0x16bef4=a311_0x218a;(function(_0x49a17d,_0x493fd4){const _0x47a474=a311_0x218a,_0x4326b4=_0x49a17d();while(!![]){try{const _0x48ec78=-parseInt(_0x47a474(0x1ad))/0x1+-parseInt(_0x47a474(0x1d1))/0x2*(-parseInt(_0x47a474(0x1c2))/0x3)+parseInt(_0x47a474(0x1d4))/0x4+-parseInt(_0x47a474(0x1b8))/0x5+-parseInt(_0x47a474(0x19f))/0x6+parseInt(_0x47a474(0x1a6))/0x7*(-parseInt(_0x47a474(0x1c6))/0x8)+parseInt(_0x47a474(0x1b4))/0x9;if(_0x48ec78===_0x493fd4)break;else _0x4326b4['push'](_0x4326b4['shift']());}catch(_0x511eb8){_0x4326b4['push'](_0x4326b4['shift']());}}}(a311_0x4cb9,0x31228));var __decorate=this&&this[a311_0x16bef4(0x19d)]||function(_0x4d03e8,_0x507710,_0x39b983,_0x1bfe30){const _0x5b6027=a311_0x16bef4;var _0x5cd7da=arguments[_0x5b6027(0x1a9)],_0x29f920=_0x5cd7da<0x3?_0x507710:_0x1bfe30===null?_0x1bfe30=Object[_0x5b6027(0x1a5)](_0x507710,_0x39b983):_0x1bfe30,_0x4c6dd1;if(typeof Reflect===_0x5b6027(0x1bf)&&typeof Reflect[_0x5b6027(0x1cd)]==='function')_0x29f920=Reflect[_0x5b6027(0x1cd)](_0x4d03e8,_0x507710,_0x39b983,_0x1bfe30);else{for(var _0x12f839=_0x4d03e8[_0x5b6027(0x1a9)]-0x1;_0x12f839>=0x0;_0x12f839--)if(_0x4c6dd1=_0x4d03e8[_0x12f839])_0x29f920=(_0x5cd7da<0x3?_0x4c6dd1(_0x29f920):_0x5cd7da>0x3?_0x4c6dd1(_0x507710,_0x39b983,_0x29f920):_0x4c6dd1(_0x507710,_0x39b983))||_0x29f920;}return _0x5cd7da>0x3&&_0x29f920&&Object[_0x5b6027(0x1c4)](_0x507710,_0x39b983,_0x29f920),_0x29f920;},__metadata=this&&this[a311_0x16bef4(0x1a7)]||function(_0x163dae,_0x22b9c5){const _0x5e0f12=a311_0x16bef4;if(typeof Reflect===_0x5e0f12(0x1bf)&&typeof Reflect['metadata']===_0x5e0f12(0x1ca))return Reflect[_0x5e0f12(0x1c7)](_0x163dae,_0x22b9c5);},__importDefault=this&&this['__importDefault']||function(_0x5eab66){return _0x5eab66&&_0x5eab66['__esModule']?_0x5eab66:{'default':_0x5eab66};};Object[a311_0x16bef4(0x1c4)](exports,'__esModule',{'value':!![]});function a311_0x218a(_0x514707,_0x1613dc){const _0x4cb9c9=a311_0x4cb9();return a311_0x218a=function(_0x218a9a,_0xf28a2b){_0x218a9a=_0x218a9a-0x199;let _0x5a1c2f=_0x4cb9c9[_0x218a9a];return _0x5a1c2f;},a311_0x218a(_0x514707,_0x1613dc);}const sequelize_typescript_1=require(a311_0x16bef4(0x1b3)),ContactCustomField_1=__importDefault(require(a311_0x16bef4(0x1a4))),Ticket_1=__importDefault(require(a311_0x16bef4(0x1b0))),Company_1=__importDefault(require(a311_0x16bef4(0x1ab))),Schedule_1=__importDefault(require(a311_0x16bef4(0x19a))),ContactTag_1=__importDefault(require(a311_0x16bef4(0x1ae))),Tag_1=__importDefault(require(a311_0x16bef4(0x1d5))),ContactWallet_1=__importDefault(require(a311_0x16bef4(0x1a1))),User_1=__importDefault(require('./User'));function a311_0x4cb9(){const _0x123f1a=['./ContactWallet','design:paramtypes','AllowNull','./ContactCustomField','getOwnPropertyDescriptor','98ioKqNP','__metadata','UpdatedAt','length','HasMany','./Company','/nopicture.png','193096NAKimt','./ContactTag','Column','./Ticket','remoteJid','email','sequelize-typescript','5779791OSEyrw','Table','FRONTEND_URL','CreatedAt','1272775XVkGMJ','walletId','channel','PrimaryKey','lgpdAcceptedAt','BelongsTo','design:type','object','tickets','number','104352Ztrvgj','BelongsToMany','defineProperty','createdAt','218944OtDPFh','metadata','default','ForeignKey','function','extraInfo','CASCADE','decorate','contactWallets','pictureUpdated','profilePicUrl','6LtvHXd','env','companyId','1526940RZUxVm','./Tag','AutoIncrement','acceptAudioMessage','Unique','active','getDataValue','name','disableBot','/contacts/','./Schedule','Default','PROXY_PORT','__decorate','urlPicture','577362KHHSCE','prototype'];a311_0x4cb9=function(){return _0x123f1a;};return a311_0x4cb9();}let Contact=class Contact extends sequelize_typescript_1['Model']{get['urlPicture'](){const _0x45aad5=a311_0x16bef4;if(this[_0x45aad5(0x1da)]('urlPicture'))return this[_0x45aad5(0x1da)](_0x45aad5(0x19e))==='nopicture.png'?process['env'][_0x45aad5(0x1b6)]+_0x45aad5(0x1ac):''+process[_0x45aad5(0x1d2)]['BACKEND_URL']+(process['env'][_0x45aad5(0x19c)]?':'+process[_0x45aad5(0x1d2)]['PROXY_PORT']:'')+'/public/company'+this[_0x45aad5(0x1d3)]+_0x45aad5(0x199)+this[_0x45aad5(0x1da)](_0x45aad5(0x19e));return null;}};__decorate([sequelize_typescript_1[a311_0x16bef4(0x1bb)],sequelize_typescript_1[a311_0x16bef4(0x1d6)],sequelize_typescript_1[a311_0x16bef4(0x1af)],__metadata('design:type',Number)],Contact[a311_0x16bef4(0x1a0)],'id',void 0x0),__decorate([sequelize_typescript_1[a311_0x16bef4(0x1af)],__metadata('design:type',String)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1db),void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x1a3)])(![]),sequelize_typescript_1[a311_0x16bef4(0x1d8)],sequelize_typescript_1['Column'],__metadata(a311_0x16bef4(0x1be),String)],Contact['prototype'],a311_0x16bef4(0x1c1),void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x1a3)])(![]),(0x0,sequelize_typescript_1[a311_0x16bef4(0x19b)])(''),sequelize_typescript_1[a311_0x16bef4(0x1af)],__metadata('design:type',String)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1b2),void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x19b)])(''),sequelize_typescript_1['Column'],__metadata('design:type',String)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1d0),void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x19b)])(![]),sequelize_typescript_1[a311_0x16bef4(0x1af)],__metadata(a311_0x16bef4(0x1be),Boolean)],Contact[a311_0x16bef4(0x1a0)],'isGroup',void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x19b)])(![]),sequelize_typescript_1[a311_0x16bef4(0x1af)],__metadata(a311_0x16bef4(0x1be),Boolean)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1dc),void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x19b)])(!![]),sequelize_typescript_1[a311_0x16bef4(0x1af)],__metadata('design:type',Boolean)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1d7),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(!![]),sequelize_typescript_1[a311_0x16bef4(0x1af)],__metadata(a311_0x16bef4(0x1be),Boolean)],Contact['prototype'],a311_0x16bef4(0x1d9),void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x19b)])('whatsapp'),sequelize_typescript_1[a311_0x16bef4(0x1af)],__metadata('design:type',String)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1ba),void 0x0),__decorate([sequelize_typescript_1[a311_0x16bef4(0x1b7)],__metadata('design:type',Date)],Contact['prototype'],a311_0x16bef4(0x1c5),void 0x0),__decorate([sequelize_typescript_1[a311_0x16bef4(0x1a8)],__metadata(a311_0x16bef4(0x1be),Date)],Contact[a311_0x16bef4(0x1a0)],'updatedAt',void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x1aa)])(()=>Ticket_1[a311_0x16bef4(0x1c8)]),__metadata('design:type',Array)],Contact['prototype'],a311_0x16bef4(0x1c0),void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x1aa)])(()=>ContactCustomField_1[a311_0x16bef4(0x1c8)]),__metadata(a311_0x16bef4(0x1be),Array)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1cb),void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x1aa)])(()=>ContactTag_1[a311_0x16bef4(0x1c8)]),__metadata(a311_0x16bef4(0x1be),Array)],Contact['prototype'],'contactTags',void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x1c3)])(()=>Tag_1[a311_0x16bef4(0x1c8)],()=>ContactTag_1[a311_0x16bef4(0x1c8)]),__metadata(a311_0x16bef4(0x1be),Array)],Contact[a311_0x16bef4(0x1a0)],'tags',void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x1c9)])(()=>Company_1[a311_0x16bef4(0x1c8)]),sequelize_typescript_1['Column'],__metadata(a311_0x16bef4(0x1be),Number)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1d3),void 0x0),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x1bd)])(()=>Company_1[a311_0x16bef4(0x1c8)]),__metadata(a311_0x16bef4(0x1be),Company_1[a311_0x16bef4(0x1c8)])],Contact['prototype'],'company',void 0x0),__decorate([(0x0,sequelize_typescript_1['HasMany'])(()=>Schedule_1[a311_0x16bef4(0x1c8)],{'onUpdate':a311_0x16bef4(0x1cc),'onDelete':a311_0x16bef4(0x1cc),'hooks':!![]}),__metadata(a311_0x16bef4(0x1be),Array)],Contact[a311_0x16bef4(0x1a0)],'schedules',void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a311_0x16bef4(0x1be),String)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1b1),void 0x0),__decorate([sequelize_typescript_1[a311_0x16bef4(0x1af)],__metadata(a311_0x16bef4(0x1be),Date)],Contact['prototype'],a311_0x16bef4(0x1bc),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a311_0x16bef4(0x1be),Boolean)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1cf),void 0x0),__decorate([sequelize_typescript_1[a311_0x16bef4(0x1af)],__metadata(a311_0x16bef4(0x1be),String),__metadata(a311_0x16bef4(0x1a2),[])],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x19e),null),__decorate([(0x0,sequelize_typescript_1[a311_0x16bef4(0x1c3)])(()=>User_1[a311_0x16bef4(0x1c8)],()=>ContactWallet_1[a311_0x16bef4(0x1c8)],'contactId',a311_0x16bef4(0x1b9)),__metadata(a311_0x16bef4(0x1be),Array)],Contact[a311_0x16bef4(0x1a0)],'wallets',void 0x0),__decorate([(0x0,sequelize_typescript_1['HasMany'])(()=>ContactWallet_1[a311_0x16bef4(0x1c8)]),__metadata(a311_0x16bef4(0x1be),Array)],Contact[a311_0x16bef4(0x1a0)],a311_0x16bef4(0x1ce),void 0x0),Contact=__decorate([sequelize_typescript_1[a311_0x16bef4(0x1b5)]],Contact),exports[a311_0x16bef4(0x1c8)]=Contact;