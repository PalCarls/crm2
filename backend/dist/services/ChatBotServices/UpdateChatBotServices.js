'use strict';const a417_0x1ef1f9=a417_0x1ebb;(function(_0x8d175e,_0x3ac790){const _0x363b9b=a417_0x1ebb,_0x3c7b1e=_0x8d175e();while(!![]){try{const _0x4b6ddd=parseInt(_0x363b9b(0x19f))/0x1*(-parseInt(_0x363b9b(0x1ae))/0x2)+-parseInt(_0x363b9b(0x1c0))/0x3*(parseInt(_0x363b9b(0x1ba))/0x4)+-parseInt(_0x363b9b(0x1b5))/0x5+-parseInt(_0x363b9b(0x1bf))/0x6*(-parseInt(_0x363b9b(0x1c2))/0x7)+parseInt(_0x363b9b(0x1b0))/0x8*(parseInt(_0x363b9b(0x1bd))/0x9)+-parseInt(_0x363b9b(0x1b6))/0xa*(-parseInt(_0x363b9b(0x1a1))/0xb)+-parseInt(_0x363b9b(0x1a4))/0xc*(-parseInt(_0x363b9b(0x1af))/0xd);if(_0x4b6ddd===_0x3ac790)break;else _0x3c7b1e['push'](_0x3c7b1e['shift']());}catch(_0x1a927e){_0x3c7b1e['push'](_0x3c7b1e['shift']());}}}(a417_0x176b,0xcbd11));function a417_0x1ebb(_0x3d7aba,_0x5bb4eb){const _0x176baa=a417_0x176b();return a417_0x1ebb=function(_0x1ebb76,_0x4aae08){_0x1ebb76=_0x1ebb76-0x19f;let _0x30d9a7=_0x176baa[_0x1ebb76];return _0x30d9a7;},a417_0x1ebb(_0x3d7aba,_0x5bb4eb);}var __importDefault=this&&this[a417_0x1ef1f9(0x1b1)]||function(_0x1f2a31){const _0x5ba88e=a417_0x1ef1f9;return _0x1f2a31&&_0x1f2a31[_0x5ba88e(0x1a2)]?_0x1f2a31:{'default':_0x1f2a31};};function a417_0x176b(){const _0x5fe4b4=['10BqxkbN','defineProperty','optIntegrationId','asc','370228nmYIAg','upsert','findOne','27uZAuBa','all','10968qbfpFy','3bgsHAd','findIndex','427AjEQpt','17cBnnMQ','optFileId','5527698dxEUjN','__esModule','queueType','4560rdkYkh','options','name','map','ASC','default','optQueueId','update','mainChatbot','reload','76784rBnVrX','8411fkMKSe','4087304RSJoyB','__importDefault','ERR_NO_CHATBOT_FOUND','greetingMessage','optUserId','4062855HcMiOD'];a417_0x176b=function(){return _0x5fe4b4;};return a417_0x176b();}Object[a417_0x1ef1f9(0x1b7)](exports,a417_0x1ef1f9(0x1a2),{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),Chatbot_1=__importDefault(require('../../models/Chatbot')),UpdateChatBotServices=async(_0x1b75e3,_0xd125b6)=>{const _0x935492=a417_0x1ef1f9,{options:_0x2758d3}=_0xd125b6,_0x491eef=await Chatbot_1[_0x935492(0x1a9)][_0x935492(0x1bc)]({'where':{'id':_0x1b75e3},'include':[_0x935492(0x1a5)],'order':[['id',_0x935492(0x1b9)]]});if(!_0x491eef)throw new AppError_1[(_0x935492(0x1a9))](_0x935492(0x1b2),0x194);return _0x2758d3&&(await Promise[_0x935492(0x1be)](_0x2758d3[_0x935492(0x1a7)](async _0x455845=>{const _0x12a980=_0x935492;await Chatbot_1[_0x12a980(0x1a9)][_0x12a980(0x1bb)]({..._0x455845,'chatbotId':_0x491eef['id']});})),await Promise[_0x935492(0x1be)](_0x491eef[_0x935492(0x1a5)][_0x935492(0x1a7)](async _0x22315d=>{const _0x55b36=_0x935492,_0x2dde63=_0x2758d3[_0x55b36(0x1c1)](_0x5dae5a=>_0x5dae5a['id']===_0x22315d['id']);_0x2dde63===-0x1&&await Chatbot_1['default']['destroy']({'where':{'id':_0x22315d['id']}});}))),await _0x491eef[_0x935492(0x1ab)](_0xd125b6),await _0x491eef[_0x935492(0x1ad)]({'include':[{'model':Chatbot_1['default'],'as':_0x935492(0x1ac),'attributes':['id',_0x935492(0x1a6),_0x935492(0x1b3),_0x935492(0x1a3),'optIntegrationId',_0x935492(0x1aa),_0x935492(0x1b4),_0x935492(0x1a0)],'order':[[{'model':Chatbot_1[_0x935492(0x1a9)],'as':_0x935492(0x1ac)},'id',_0x935492(0x1a8)]]},{'model':Chatbot_1[_0x935492(0x1a9)],'as':_0x935492(0x1a5),'order':[[{'model':Chatbot_1['default'],'as':'options'},'id','ASC']],'attributes':['id',_0x935492(0x1a6),_0x935492(0x1b3),'queueType',_0x935492(0x1b8),_0x935492(0x1aa),_0x935492(0x1b4),'optFileId']}],'order':[['id','asc']]}),_0x491eef;};exports['default']=UpdateChatBotServices;