'use strict';const a613_0x106164=a613_0x27d2;function a613_0x50ff(){const _0x5c38f5=['where','useExternalApi','defineProperty','524094LDPnUg','like','default','tickets','User.name','col','3119950rYwMsL','12300tNYAjE','3929570sYnuwb','useInstagram','useFacebook','dueDate','42574CSKzQS','useIntegrations','35KNySYx','8kWnrHj','useWhatsapp','3162789JwUHsm','Sequelize','amount','queues','__importDefault','LOWER','length','useInternalChat','../../models/User','useKanban','642MpwGcY','plan','company','LIKE','10876657YYSIzE','14rrMAWO','name','useSchedules'];a613_0x50ff=function(){return _0x5c38f5;};return a613_0x50ff();}(function(_0x2780a4,_0xe44692){const _0x39716f=a613_0x27d2,_0x276faa=_0x2780a4();while(!![]){try{const _0x3b2e62=-parseInt(_0x39716f(0xc7))/0x1*(parseInt(_0x39716f(0xdb))/0x2)+-parseInt(_0x39716f(0xd6))/0x3*(-parseInt(_0x39716f(0xc2))/0x4)+-parseInt(_0x39716f(0xe7))/0x5+-parseInt(_0x39716f(0xe1))/0x6*(parseInt(_0x39716f(0xc9))/0x7)+-parseInt(_0x39716f(0xca))/0x8*(parseInt(_0x39716f(0xcc))/0x9)+parseInt(_0x39716f(0xc3))/0xa+parseInt(_0x39716f(0xda))/0xb;if(_0x3b2e62===_0xe44692)break;else _0x276faa['push'](_0x276faa['shift']());}catch(_0x47d020){_0x276faa['push'](_0x276faa['shift']());}}}(a613_0x50ff,0x50794));var __importDefault=this&&this[a613_0x106164(0xd0)]||function(_0x4a3852){return _0x4a3852&&_0x4a3852['__esModule']?_0x4a3852:{'default':_0x4a3852};};Object[a613_0x106164(0xe0)](exports,'__esModule',{'value':!![]});function a613_0x27d2(_0xa7db22,_0x560ca4){const _0x50ff12=a613_0x50ff();return a613_0x27d2=function(_0x27d2aa,_0xf92ea1){_0x27d2aa=_0x27d2aa-0xc2;let _0x5d68e0=_0x50ff12[_0x27d2aa];return _0x5d68e0;},a613_0x27d2(_0xa7db22,_0x560ca4);}const sequelize_1=require('sequelize'),Queue_1=__importDefault(require('../../models/Queue')),Company_1=__importDefault(require('../../models/Company')),User_1=__importDefault(require(a613_0x106164(0xd4))),Plan_1=__importDefault(require('../../models/Plan')),Ticket_1=__importDefault(require('../../models/Ticket')),ListUsersService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x5ebc57})=>{const _0x10d15f=a613_0x106164,_0x30a144={[sequelize_1['Op']['or']]:[{'$User.name$':sequelize_1[_0x10d15f(0xcd)][_0x10d15f(0xde)](sequelize_1['Sequelize']['fn'](_0x10d15f(0xd1),sequelize_1['Sequelize'][_0x10d15f(0xe6)](_0x10d15f(0xe5))),_0x10d15f(0xd9),'%'+searchParam['toLowerCase']()+'%')},{'email':{[sequelize_1['Op'][_0x10d15f(0xe2)]]:'%'+searchParam['toLowerCase']()+'%'}}],'companyId':{[sequelize_1['Op']['eq']]:_0x5ebc57}},_0xbefb70=0x14,_0x1c80a4=_0xbefb70*(+pageNumber-0x1),{count:_0x1de08a,rows:_0x884007}=await User_1[_0x10d15f(0xe3)]['findAndCountAll']({'where':_0x30a144,'limit':_0xbefb70,'offset':_0x1c80a4,'order':[['createdAt','DESC']],'include':[{'model':Queue_1[_0x10d15f(0xe3)],'as':_0x10d15f(0xcf),'attributes':['id',_0x10d15f(0xdc),'color']},{'model':Company_1['default'],'as':_0x10d15f(0xd8),'attributes':['id',_0x10d15f(0xdc),_0x10d15f(0xc6),'document'],'include':[{'model':Plan_1['default'],'as':_0x10d15f(0xd7),'attributes':['id',_0x10d15f(0xdc),_0x10d15f(0xce),_0x10d15f(0xcb),_0x10d15f(0xc5),_0x10d15f(0xc4),'useCampaigns',_0x10d15f(0xdd),_0x10d15f(0xd3),_0x10d15f(0xdf),_0x10d15f(0xc8),'useOpenAi',_0x10d15f(0xd5)]}]},{'model':Ticket_1[_0x10d15f(0xe3)],'as':_0x10d15f(0xe4)}]}),_0x417952=_0x1de08a>_0x1c80a4+_0x884007[_0x10d15f(0xd2)];return{'users':_0x884007,'count':_0x1de08a,'hasMore':_0x417952};};exports[a613_0x106164(0xe3)]=ListUsersService;