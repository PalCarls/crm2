'use strict';const a368_0x34c9ce=a368_0x5621;(function(_0x2c42fb,_0x1b5eb3){const _0x73e89=a368_0x5621,_0x11e324=_0x2c42fb();while(!![]){try{const _0x6f1ee8=-parseInt(_0x73e89(0x194))/0x1+-parseInt(_0x73e89(0x199))/0x2*(-parseInt(_0x73e89(0x19b))/0x3)+-parseInt(_0x73e89(0x18a))/0x4+parseInt(_0x73e89(0x197))/0x5*(-parseInt(_0x73e89(0x190))/0x6)+-parseInt(_0x73e89(0x18b))/0x7+-parseInt(_0x73e89(0x196))/0x8*(-parseInt(_0x73e89(0x18f))/0x9)+-parseInt(_0x73e89(0x191))/0xa*(-parseInt(_0x73e89(0x18d))/0xb);if(_0x6f1ee8===_0x1b5eb3)break;else _0x11e324['push'](_0x11e324['shift']());}catch(_0x3b11ef){_0x11e324['push'](_0x11e324['shift']());}}}(a368_0x5e1b,0x4af17));function a368_0x5621(_0x555aa8,_0x19beba){const _0x5e1ba5=a368_0x5e1b();return a368_0x5621=function(_0x562129,_0x5a9fd8){_0x562129=_0x562129-0x185;let _0x3c05f7=_0x5e1ba5[_0x562129];return _0x3c05f7;},a368_0x5621(_0x555aa8,_0x19beba);}var __importDefault=this&&this['__importDefault']||function(_0x5b1e00){const _0x111c37=a368_0x5621;return _0x5b1e00&&_0x5b1e00[_0x111c37(0x193)]?_0x5b1e00:{'default':_0x5b1e00};};Object[a368_0x34c9ce(0x19a)](exports,'__esModule',{'value':!![]});const Chat_1=__importDefault(require(a368_0x34c9ce(0x188))),ChatUser_1=__importDefault(require(a368_0x34c9ce(0x189))),User_1=__importDefault(require('../../models/User'));async function UpdateService(_0x51ddbb){const _0x1ca314=a368_0x34c9ce,{users:_0x353821}=_0x51ddbb,_0x235870=await Chat_1['default'][_0x1ca314(0x186)](_0x51ddbb['id'],{'include':[{'model':ChatUser_1[_0x1ca314(0x19c)],'as':_0x1ca314(0x198)}]}),{ownerId:_0x2c71b3}=_0x235870;await _0x235870[_0x1ca314(0x185)]({'title':_0x51ddbb[_0x1ca314(0x195)]});if(Array[_0x1ca314(0x187)](_0x353821)){await ChatUser_1[_0x1ca314(0x19c)][_0x1ca314(0x18e)]({'where':{'chatId':_0x235870['id']}}),await ChatUser_1[_0x1ca314(0x19c)][_0x1ca314(0x18c)]({'chatId':_0x235870['id'],'userId':_0x2c71b3});for(let _0x4d825a of _0x353821){_0x4d825a['id']!==_0x2c71b3&&await ChatUser_1[_0x1ca314(0x19c)][_0x1ca314(0x18c)]({'chatId':_0x235870['id'],'userId':_0x4d825a['id']});}}return await _0x235870['reload']({'include':[{'model':ChatUser_1[_0x1ca314(0x19c)],'as':_0x1ca314(0x198),'include':[{'model':User_1[_0x1ca314(0x19c)],'as':_0x1ca314(0x192)}]},{'model':User_1[_0x1ca314(0x19c)],'as':'owner'}]}),_0x235870;}function a368_0x5e1b(){const _0xb9ddbc=['default','update','findByPk','isArray','../../models/Chat','../../models/ChatUser','2278760aweYGr','273938AeHaIs','create','66nWazOC','destroy','9VRulnH','39948csgtix','2391420UKBawr','user','__esModule','188653yPffxb','title','259904nvouPl','445onidSp','users','2oGmUYC','defineProperty','688998cilHkT'];a368_0x5e1b=function(){return _0xb9ddbc;};return a368_0x5e1b();}exports[a368_0x34c9ce(0x19c)]=UpdateService;