'use strict';function a205_0x5643(){const _0x2c321a=['69288EJyqeE','pending','103370hPpOWH','stringify','name','40888vRbItk','738093ZNoDTo','342iaVQxh','color','sequelize','findOne','default','112rJBGTt','__esModule','../models/Queue','44432ySKBoi','2QwDtmG','../models/Ticket','user','620ciVBku','../errors/AppError','2712nTmQTR','209cGYuxR','1941900YvnkrS','defineProperty'];a205_0x5643=function(){return _0x2c321a;};return a205_0x5643();}const a205_0x21fefa=a205_0x2e69;function a205_0x2e69(_0x4074ae,_0x1b8f6a){const _0x564309=a205_0x5643();return a205_0x2e69=function(_0x2e6963,_0x58f508){_0x2e6963=_0x2e6963-0x1dd;let _0x25419c=_0x564309[_0x2e6963];return _0x25419c;},a205_0x2e69(_0x4074ae,_0x1b8f6a);}(function(_0x541c35,_0x303454){const _0x8323d2=a205_0x2e69,_0x2e0b62=_0x541c35();while(!![]){try{const _0x3ee1e9=-parseInt(_0x8323d2(0x1ee))/0x1+-parseInt(_0x8323d2(0x1e0))/0x2*(parseInt(_0x8323d2(0x1ef))/0x3)+-parseInt(_0x8323d2(0x1e5))/0x4*(-parseInt(_0x8323d2(0x1e3))/0x5)+parseInt(_0x8323d2(0x1e9))/0x6*(parseInt(_0x8323d2(0x1f5))/0x7)+parseInt(_0x8323d2(0x1df))/0x8*(parseInt(_0x8323d2(0x1f0))/0x9)+parseInt(_0x8323d2(0x1eb))/0xa*(-parseInt(_0x8323d2(0x1e6))/0xb)+parseInt(_0x8323d2(0x1e7))/0xc;if(_0x3ee1e9===_0x303454)break;else _0x2e0b62['push'](_0x2e0b62['shift']());}catch(_0x58c6f1){_0x2e0b62['push'](_0x2e0b62['shift']());}}}(a205_0x5643,0x26abb));var __importDefault=this&&this['__importDefault']||function(_0x3f8383){const _0x12515e=a205_0x2e69;return _0x3f8383&&_0x3f8383[_0x12515e(0x1dd)]?_0x3f8383:{'default':_0x3f8383};};Object[a205_0x21fefa(0x1e8)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a205_0x21fefa(0x1f2)),AppError_1=__importDefault(require(a205_0x21fefa(0x1e4))),Ticket_1=__importDefault(require(a205_0x21fefa(0x1e1))),User_1=__importDefault(require('../models/User')),Queue_1=__importDefault(require(a205_0x21fefa(0x1de))),CheckContactOpenTickets=async(_0x32a537,_0x417de2)=>{const _0x9e2c38=a205_0x21fefa,_0x187eed=await Ticket_1['default'][_0x9e2c38(0x1f3)]({'where':{'contactId':_0x32a537,'status':{[sequelize_1['Op']['or']]:['open',_0x9e2c38(0x1ea)]},'whatsappId':_0x417de2},'include':[{'model':Queue_1[_0x9e2c38(0x1f4)],'as':'queue','attributes':['id',_0x9e2c38(0x1ed),_0x9e2c38(0x1f1)]},{'model':User_1[_0x9e2c38(0x1f4)],'as':_0x9e2c38(0x1e2),'attributes':['id',_0x9e2c38(0x1ed)]}]});if(_0x187eed)throw new AppError_1[(_0x9e2c38(0x1f4))](JSON[_0x9e2c38(0x1ec)](_0x187eed),0x199);};exports[a205_0x21fefa(0x1f4)]=CheckContactOpenTickets;