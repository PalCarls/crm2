'use strict';const a422_0x1aa2f1=a422_0x258d;(function(_0x250aeb,_0x5438a7){const _0x159231=a422_0x258d,_0x470fa7=_0x250aeb();while(!![]){try{const _0x241aa2=-parseInt(_0x159231(0x16b))/0x1*(-parseInt(_0x159231(0x168))/0x2)+-parseInt(_0x159231(0x175))/0x3*(parseInt(_0x159231(0x170))/0x4)+parseInt(_0x159231(0x16e))/0x5+parseInt(_0x159231(0x171))/0x6+parseInt(_0x159231(0x172))/0x7+-parseInt(_0x159231(0x16f))/0x8*(-parseInt(_0x159231(0x173))/0x9)+-parseInt(_0x159231(0x165))/0xa*(parseInt(_0x159231(0x174))/0xb);if(_0x241aa2===_0x5438a7)break;else _0x470fa7['push'](_0x470fa7['shift']());}catch(_0x19b7dc){_0x470fa7['push'](_0x470fa7['shift']());}}}(a422_0x469a,0x671b5));function a422_0x258d(_0x5c6591,_0x4263e8){const _0x469a4d=a422_0x469a();return a422_0x258d=function(_0x258da2,_0x4a444b){_0x258da2=_0x258da2-0x165;let _0x376496=_0x469a4d[_0x258da2];return _0x376496;},a422_0x258d(_0x5c6591,_0x4263e8);}var __importDefault=this&&this[a422_0x1aa2f1(0x167)]||function(_0x317b53){const _0x26ebe3=a422_0x1aa2f1;return _0x317b53&&_0x317b53[_0x26ebe3(0x166)]?_0x317b53:{'default':_0x317b53};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const sequelize_1=require('sequelize'),Files_1=__importDefault(require('../../models/Files')),ListService=async({searchParam:_0x3e055f,pageNumber:pageNumber='1',companyId:_0x1b1db8})=>{const _0x228a9c=a422_0x1aa2f1;let _0x3a55a2={};const _0x5a748b=0x14,_0x13c559=_0x5a748b*(+pageNumber-0x1);_0x3e055f&&(_0x3a55a2={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0x228a9c(0x16a)]]:'%'+_0x3e055f+'%'}}]});const {count:_0x351a44,rows:_0x49aeff}=await Files_1[_0x228a9c(0x169)]['findAndCountAll']({'where':{'companyId':_0x1b1db8,..._0x3a55a2},'limit':_0x5a748b,'offset':_0x13c559,'order':[[_0x228a9c(0x16d),'ASC']]}),_0x4e95b1=_0x351a44>_0x13c559+_0x49aeff[_0x228a9c(0x16c)];return{'files':_0x49aeff,'count':_0x351a44,'hasMore':_0x4e95b1};};exports[a422_0x1aa2f1(0x169)]=ListService;function a422_0x469a(){const _0x37ffbd=['7NGlWxt','length','name','1307900EUYZTZ','8flEYSv','2066836HPewdb','20160yjQnfW','919849bokaXP','6304878EgpUaQ','7215417tMvtKq','3cSeGUv','10ZSLIqf','__esModule','__importDefault','142312oamSTK','default','like'];a422_0x469a=function(){return _0x37ffbd;};return a422_0x469a();}