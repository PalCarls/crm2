'use strict';const a307_0x2cb217=a307_0x4819;(function(_0xaafa8a,_0x3a2add){const _0x2965a5=a307_0x4819,_0x535214=_0xaafa8a();while(!![]){try{const _0x5eeb6d=parseInt(_0x2965a5(0xb7))/0x1+parseInt(_0x2965a5(0x8c))/0x2+-parseInt(_0x2965a5(0xb2))/0x3+-parseInt(_0x2965a5(0x90))/0x4+-parseInt(_0x2965a5(0x97))/0x5*(-parseInt(_0x2965a5(0x9d))/0x6)+-parseInt(_0x2965a5(0xab))/0x7*(parseInt(_0x2965a5(0xb5))/0x8)+parseInt(_0x2965a5(0xa5))/0x9;if(_0x5eeb6d===_0x3a2add)break;else _0x535214['push'](_0x535214['shift']());}catch(_0x1f9abc){_0x535214['push'](_0x535214['shift']());}}}(a307_0x2736,0x98c9d));var __decorate=this&&this[a307_0x2cb217(0x92)]||function(_0x1835b5,_0x11ea69,_0x1c5b08,_0x26fbdb){const _0x5b03a0=a307_0x2cb217;var _0x423982=arguments[_0x5b03a0(0x8f)],_0x489a1f=_0x423982<0x3?_0x11ea69:_0x26fbdb===null?_0x26fbdb=Object['getOwnPropertyDescriptor'](_0x11ea69,_0x1c5b08):_0x26fbdb,_0x397bdf;if(typeof Reflect===_0x5b03a0(0x75)&&typeof Reflect['decorate']===_0x5b03a0(0x83))_0x489a1f=Reflect['decorate'](_0x1835b5,_0x11ea69,_0x1c5b08,_0x26fbdb);else{for(var _0x577908=_0x1835b5[_0x5b03a0(0x8f)]-0x1;_0x577908>=0x0;_0x577908--)if(_0x397bdf=_0x1835b5[_0x577908])_0x489a1f=(_0x423982<0x3?_0x397bdf(_0x489a1f):_0x423982>0x3?_0x397bdf(_0x11ea69,_0x1c5b08,_0x489a1f):_0x397bdf(_0x11ea69,_0x1c5b08))||_0x489a1f;}return _0x423982>0x3&&_0x489a1f&&Object[_0x5b03a0(0x76)](_0x11ea69,_0x1c5b08,_0x489a1f),_0x489a1f;},__metadata=this&&this[a307_0x2cb217(0x8b)]||function(_0x281834,_0x531cde){const _0x18e4cd=a307_0x2cb217;if(typeof Reflect==='object'&&typeof Reflect[_0x18e4cd(0x7a)]==='function')return Reflect[_0x18e4cd(0x7a)](_0x281834,_0x531cde);},__importDefault=this&&this[a307_0x2cb217(0xa2)]||function(_0x1fb6cd){return _0x1fb6cd&&_0x1fb6cd['__esModule']?_0x1fb6cd:{'default':_0x1fb6cd};};Object[a307_0x2cb217(0x76)](exports,a307_0x2cb217(0xa4),{'value':!![]});const sequelize_typescript_1=require(a307_0x2cb217(0xa3)),uuid_1=require('uuid'),Contact_1=__importDefault(require(a307_0x2cb217(0x9b))),Message_1=__importDefault(require(a307_0x2cb217(0xb4))),Queue_1=__importDefault(require(a307_0x2cb217(0xa8))),User_1=__importDefault(require(a307_0x2cb217(0x7f))),Whatsapp_1=__importDefault(require('./Whatsapp')),Company_1=__importDefault(require(a307_0x2cb217(0x99))),Tag_1=__importDefault(require('./Tag')),TicketTag_1=__importDefault(require(a307_0x2cb217(0xb9))),QueueIntegrations_1=__importDefault(require(a307_0x2cb217(0x91)));function a307_0x4819(_0x1a1eba,_0x5898fa){const _0x273647=a307_0x2736();return a307_0x4819=function(_0x48191f,_0x46a7fc){_0x48191f=_0x48191f-0x75;let _0xc29fd4=_0x273647[_0x48191f];return _0xc29fd4;},a307_0x4819(_0x1a1eba,_0x5898fa);}function a307_0x2736(){const _0x1293cd=['function','updatedAt','queue','companyId','useIntegration','default','whatsappId','status','__metadata','339030SkNcif','BelongsTo','fromMe','length','2672612oZDRnH','./QueueIntegrations','__decorate','whatsapp','unreadMessages','AllowNull','BeforeCreate','5IpreXq','messages','./Company','lgpdSendMessageAt','./Contact','isBot','5874018cWOSDk','ForeignKey','queueIntegration','imported','design:paramtypes','__importDefault','sequelize-typescript','__esModule','5262435kKPCpS','prototype','ticketTags','./Queue','pending','AutoIncrement','6041413prhZmc','BelongsToMany','tags','queueId','UpdatedAt','createdAt','setUUID','277203zpkePp','design:returntype','./Message','8hoRyWu','HasMany','516201qpeMba','integrationId','./TicketTag','Column','object','defineProperty','amountUsedBotQueuesNPS','Model','contact','metadata','company','design:type','channel','PrimaryKey','./User','lgpdAcceptedAt','uuid','Default'];a307_0x2736=function(){return _0x1293cd;};return a307_0x2736();}let Ticket=class Ticket extends sequelize_typescript_1[a307_0x2cb217(0x78)]{static[a307_0x2cb217(0xb1)](_0x2778ca){const _0x31569b=a307_0x2cb217;_0x2778ca[_0x31569b(0x81)]=(0x0,uuid_1['v4'])();}};__decorate([sequelize_typescript_1[a307_0x2cb217(0x7e)],sequelize_typescript_1[a307_0x2cb217(0xaa)],sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Number)],Ticket[a307_0x2cb217(0xa6)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0xba)])({'defaultValue':a307_0x2cb217(0xa9)}),__metadata(a307_0x2cb217(0x7c),String)],Ticket['prototype'],a307_0x2cb217(0x8a),void 0x0),__decorate([sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata('design:type',Number)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x94),void 0x0),__decorate([sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata('design:type',String)],Ticket['prototype'],'lastMessage',void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x82)])(![]),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Boolean)],Ticket[a307_0x2cb217(0xa6)],'isGroup',void 0x0),__decorate([sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Date)],Ticket['prototype'],a307_0x2cb217(0xb0),void 0x0),__decorate([sequelize_typescript_1[a307_0x2cb217(0xaf)],__metadata(a307_0x2cb217(0x7c),Date)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x84),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x9e)])(()=>User_1[a307_0x2cb217(0x88)]),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Number)],Ticket[a307_0x2cb217(0xa6)],'userId',void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>User_1[a307_0x2cb217(0x88)]),__metadata(a307_0x2cb217(0x7c),User_1[a307_0x2cb217(0x88)])],Ticket[a307_0x2cb217(0xa6)],'user',void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x9e)])(()=>Contact_1[a307_0x2cb217(0x88)]),sequelize_typescript_1['Column'],__metadata(a307_0x2cb217(0x7c),Number)],Ticket[a307_0x2cb217(0xa6)],'contactId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x8d)])(()=>Contact_1[a307_0x2cb217(0x88)]),__metadata(a307_0x2cb217(0x7c),Contact_1['default'])],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x79),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x9e)])(()=>Whatsapp_1['default']),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata('design:type',Number)],Ticket['prototype'],a307_0x2cb217(0x89),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x8d)])(()=>Whatsapp_1[a307_0x2cb217(0x88)]),__metadata(a307_0x2cb217(0x7c),Whatsapp_1[a307_0x2cb217(0x88)])],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x93),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Queue_1[a307_0x2cb217(0x88)]),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Number)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0xae),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x8d)])(()=>Queue_1[a307_0x2cb217(0x88)]),__metadata(a307_0x2cb217(0x7c),Queue_1['default'])],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x85),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(![]),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Boolean)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x9c),void 0x0),__decorate([(0x0,sequelize_typescript_1['HasMany'])(()=>Message_1[a307_0x2cb217(0x88)]),__metadata(a307_0x2cb217(0x7c),Array)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x98),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0xb6)])(()=>TicketTag_1['default']),__metadata(a307_0x2cb217(0x7c),Array)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0xa7),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0xac)])(()=>Tag_1[a307_0x2cb217(0x88)],()=>TicketTag_1[a307_0x2cb217(0x88)]),__metadata(a307_0x2cb217(0x7c),Array)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0xad),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x9e)])(()=>Company_1[a307_0x2cb217(0x88)]),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Number)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x86),void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>Company_1[a307_0x2cb217(0x88)]),__metadata(a307_0x2cb217(0x7c),Company_1[a307_0x2cb217(0x88)])],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x7b),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x82)])((0x0,uuid_1['v4'])()),sequelize_typescript_1['Column'],__metadata(a307_0x2cb217(0x7c),String)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x81),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(a307_0x2cb217(0x93)),sequelize_typescript_1['Column'],__metadata(a307_0x2cb217(0x7c),String)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x7d),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x95)])(![]),(0x0,sequelize_typescript_1[a307_0x2cb217(0x82)])(0x0),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata('design:type',Number)],Ticket['prototype'],'amountUsedBotQueues',void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x95)])(![]),(0x0,sequelize_typescript_1[a307_0x2cb217(0x82)])(0x0),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Number)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x77),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x82)])(![]),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Boolean)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x8e),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(![]),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Boolean)],Ticket[a307_0x2cb217(0xa6)],'sendInactiveMessage',void 0x0),__decorate([sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Date)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x9a),void 0x0),__decorate([sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Date)],Ticket['prototype'],a307_0x2cb217(0x80),void 0x0),__decorate([sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Date)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0xa0),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(![]),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Boolean)],Ticket[a307_0x2cb217(0xa6)],'isOutOfHour',void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x82)])(![]),sequelize_typescript_1[a307_0x2cb217(0xba)],__metadata(a307_0x2cb217(0x7c),Boolean)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x87),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x9e)])(()=>QueueIntegrations_1[a307_0x2cb217(0x88)]),sequelize_typescript_1['Column'],__metadata(a307_0x2cb217(0x7c),Number)],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0xb8),void 0x0),__decorate([(0x0,sequelize_typescript_1[a307_0x2cb217(0x8d)])(()=>QueueIntegrations_1[a307_0x2cb217(0x88)]),__metadata('design:type',QueueIntegrations_1[a307_0x2cb217(0x88)])],Ticket[a307_0x2cb217(0xa6)],a307_0x2cb217(0x9f),void 0x0),__decorate([sequelize_typescript_1[a307_0x2cb217(0x96)],__metadata(a307_0x2cb217(0x7c),Function),__metadata(a307_0x2cb217(0xa1),[Ticket]),__metadata(a307_0x2cb217(0xb3),void 0x0)],Ticket,a307_0x2cb217(0xb1),null),Ticket=__decorate([sequelize_typescript_1['Table']],Ticket),exports['default']=Ticket;