'use strict';function a358_0x3ce0(){const _0x122624=['greetingMessage','name','defineProperty','upsert','options','3OMLqRf','optUserId','__esModule','map','1720518TCbYQN','default','340qaaCHm','findIndex','1864216kdllyu','update','all','ERR_NO_CHATBOT_FOUND','mainChatbot','reload','15363ZaGBPH','destroy','optIntegrationId','706782kburRL','queueType','617379sImvMJ','ASC','asc','findOne','4505661QRWdQs','../../models/Chatbot','optQueueId','8685GxNAbb'];a358_0x3ce0=function(){return _0x122624;};return a358_0x3ce0();}const a358_0x50ea8e=a358_0x15c7;(function(_0x109622,_0x1ef8c9){const _0x4f6292=a358_0x15c7,_0x52f74c=_0x109622();while(!![]){try{const _0x87cb3c=-parseInt(_0x4f6292(0x19f))/0x1+-parseInt(_0x4f6292(0x1a2))/0x2*(parseInt(_0x4f6292(0x191))/0x3)+-parseInt(_0x4f6292(0x197))/0x4*(-parseInt(_0x4f6292(0x18b))/0x5)+parseInt(_0x4f6292(0x195))/0x6+-parseInt(_0x4f6292(0x1a4))/0x7+-parseInt(_0x4f6292(0x199))/0x8+parseInt(_0x4f6292(0x1a8))/0x9;if(_0x87cb3c===_0x1ef8c9)break;else _0x52f74c['push'](_0x52f74c['shift']());}catch(_0x2a1192){_0x52f74c['push'](_0x52f74c['shift']());}}}(a358_0x3ce0,0x3bd39));var __importDefault=this&&this['__importDefault']||function(_0x4650e2){return _0x4650e2&&_0x4650e2['__esModule']?_0x4650e2:{'default':_0x4650e2};};Object[a358_0x50ea8e(0x18e)](exports,a358_0x50ea8e(0x193),{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),Chatbot_1=__importDefault(require(a358_0x50ea8e(0x1a9))),UpdateChatBotServices=async(_0x5b1efa,_0x2a281d)=>{const _0x45bc55=a358_0x50ea8e,{options:_0x368aaf}=_0x2a281d,_0x1f5bfd=await Chatbot_1[_0x45bc55(0x196)][_0x45bc55(0x1a7)]({'where':{'id':_0x5b1efa},'include':[_0x45bc55(0x190)],'order':[['id',_0x45bc55(0x1a6)]]});if(!_0x1f5bfd)throw new AppError_1[(_0x45bc55(0x196))](_0x45bc55(0x19c),0x194);return _0x368aaf&&(await Promise['all'](_0x368aaf[_0x45bc55(0x194)](async _0x48fc5d=>{const _0x2b2a8f=_0x45bc55;await Chatbot_1[_0x2b2a8f(0x196)][_0x2b2a8f(0x18f)]({..._0x48fc5d,'chatbotId':_0x1f5bfd['id']});})),await Promise[_0x45bc55(0x19b)](_0x1f5bfd[_0x45bc55(0x190)][_0x45bc55(0x194)](async _0x85ef5d=>{const _0x37cdf8=_0x45bc55,_0x439419=_0x368aaf[_0x37cdf8(0x198)](_0x5c8c37=>_0x5c8c37['id']===_0x85ef5d['id']);_0x439419===-0x1&&await Chatbot_1[_0x37cdf8(0x196)][_0x37cdf8(0x1a0)]({'where':{'id':_0x85ef5d['id']}});}))),await _0x1f5bfd[_0x45bc55(0x19a)](_0x2a281d),await _0x1f5bfd[_0x45bc55(0x19e)]({'include':[{'model':Chatbot_1[_0x45bc55(0x196)],'as':_0x45bc55(0x19d),'attributes':['id',_0x45bc55(0x18d),_0x45bc55(0x18c),_0x45bc55(0x1a3),_0x45bc55(0x1a1),'optQueueId','optUserId'],'order':[[{'model':Chatbot_1[_0x45bc55(0x196)],'as':_0x45bc55(0x19d)},'id',_0x45bc55(0x1a5)]]},{'model':Chatbot_1['default'],'as':_0x45bc55(0x190),'order':[[{'model':Chatbot_1['default'],'as':_0x45bc55(0x190)},'id',_0x45bc55(0x1a5)]],'attributes':['id',_0x45bc55(0x18d),_0x45bc55(0x18c),'queueType',_0x45bc55(0x1a1),_0x45bc55(0x1aa),_0x45bc55(0x192)]}],'order':[['id',_0x45bc55(0x1a6)]]}),_0x1f5bfd;};function a358_0x15c7(_0x5c048c,_0x396bcd){const _0x3ce0aa=a358_0x3ce0();return a358_0x15c7=function(_0x15c7d9,_0x53ad32){_0x15c7d9=_0x15c7d9-0x18b;let _0x467e92=_0x3ce0aa[_0x15c7d9];return _0x467e92;},a358_0x15c7(_0x5c048c,_0x396bcd);}exports['default']=UpdateChatBotServices;