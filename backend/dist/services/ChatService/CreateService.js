'use strict';const a419_0x37ce61=a419_0x3d59;(function(_0x587164,_0x5c73a5){const _0x4a7a1f=a419_0x3d59,_0x28f759=_0x587164();while(!![]){try{const _0x44bd59=parseInt(_0x4a7a1f(0x1cf))/0x1+parseInt(_0x4a7a1f(0x1cd))/0x2+-parseInt(_0x4a7a1f(0x1d7))/0x3*(-parseInt(_0x4a7a1f(0x1ca))/0x4)+-parseInt(_0x4a7a1f(0x1cb))/0x5+parseInt(_0x4a7a1f(0x1c9))/0x6+-parseInt(_0x4a7a1f(0x1db))/0x7+parseInt(_0x4a7a1f(0x1d3))/0x8;if(_0x44bd59===_0x5c73a5)break;else _0x28f759['push'](_0x28f759['shift']());}catch(_0x250866){_0x28f759['push'](_0x28f759['shift']());}}}(a419_0x240f,0xbcc7d));function a419_0x240f(){const _0x1041e7=['969VkjmEc','isArray','user','owner','8727159BHoVkp','default','3890394bcLbzq','2732OvyZdk','622830tujxto','../../models/Chat','1732890WVTGSy','../../models/User','91687RFrsiT','__importDefault','__esModule','length','2539264rqhOJd','defineProperty','create','users'];a419_0x240f=function(){return _0x1041e7;};return a419_0x240f();}var __importDefault=this&&this[a419_0x37ce61(0x1d0)]||function(_0x406719){const _0x113138=a419_0x37ce61;return _0x406719&&_0x406719[_0x113138(0x1d1)]?_0x406719:{'default':_0x406719};};function a419_0x3d59(_0x50fade,_0x553f4e){const _0x240fa1=a419_0x240f();return a419_0x3d59=function(_0x3d597b,_0x29603f){_0x3d597b=_0x3d597b-0x1c8;let _0x445831=_0x240fa1[_0x3d597b];return _0x445831;},a419_0x3d59(_0x50fade,_0x553f4e);}Object[a419_0x37ce61(0x1d4)](exports,a419_0x37ce61(0x1d1),{'value':!![]});const Chat_1=__importDefault(require(a419_0x37ce61(0x1cc))),ChatUser_1=__importDefault(require('../../models/ChatUser')),User_1=__importDefault(require(a419_0x37ce61(0x1ce))),CreateService=async _0xf7ad01=>{const _0x50139c=a419_0x37ce61,{ownerId:_0x440fbe,companyId:_0x2404a7,users:_0x1c0f02,title:_0xcb8e96}=_0xf7ad01,_0x5a5bca=await Chat_1['default'][_0x50139c(0x1d5)]({'ownerId':_0x440fbe,'companyId':_0x2404a7,'title':_0xcb8e96});if(Array[_0x50139c(0x1d8)](_0x1c0f02)&&_0x1c0f02[_0x50139c(0x1d2)]>0x0){await ChatUser_1[_0x50139c(0x1c8)]['create']({'chatId':_0x5a5bca['id'],'userId':_0x440fbe});for(let _0x9e73c7 of _0x1c0f02){await ChatUser_1[_0x50139c(0x1c8)][_0x50139c(0x1d5)]({'chatId':_0x5a5bca['id'],'userId':_0x9e73c7['id']});}}return await _0x5a5bca['reload']({'include':[{'model':ChatUser_1[_0x50139c(0x1c8)],'as':_0x50139c(0x1d6),'include':[{'model':User_1['default'],'as':_0x50139c(0x1d9)}]},{'model':User_1[_0x50139c(0x1c8)],'as':_0x50139c(0x1da)}]}),_0x5a5bca;};exports[a419_0x37ce61(0x1c8)]=CreateService;