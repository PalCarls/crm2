'use strict';function a388_0x491e(){const _0x31c46e=['__importDefault','__esModule','407hONhZy','14780vrTcxt','1167383HLsAaN','users','10lwZlCn','length','../../models/ChatUser','isArray','reload','../../models/Chat','default','owner','8613910BFRqbj','defineProperty','324wozNKq','117CNaRaU','844530XgCHWT','../../models/User','221340AgWPur','1512mHGwdC','404EhqafZ','6071VkOLqP'];a388_0x491e=function(){return _0x31c46e;};return a388_0x491e();}const a388_0x5390ea=a388_0x2777;(function(_0x71e659,_0x3015a9){const _0x3842b3=a388_0x2777,_0x3db13a=_0x71e659();while(!![]){try{const _0x4e78df=parseInt(_0x3842b3(0x167))/0x1*(-parseInt(_0x3842b3(0x166))/0x2)+parseInt(_0x3842b3(0x161))/0x3*(parseInt(_0x3842b3(0x153))/0x4)+parseInt(_0x3842b3(0x156))/0x5*(parseInt(_0x3842b3(0x162))/0x6)+parseInt(_0x3842b3(0x154))/0x7+-parseInt(_0x3842b3(0x165))/0x8*(parseInt(_0x3842b3(0x160))/0x9)+parseInt(_0x3842b3(0x15e))/0xa+parseInt(_0x3842b3(0x152))/0xb*(parseInt(_0x3842b3(0x164))/0xc);if(_0x4e78df===_0x3015a9)break;else _0x3db13a['push'](_0x3db13a['shift']());}catch(_0x1eaeb6){_0x3db13a['push'](_0x3db13a['shift']());}}}(a388_0x491e,0xdc7b6));function a388_0x2777(_0x4ac076,_0x1c7723){const _0x491e49=a388_0x491e();return a388_0x2777=function(_0x27774f,_0x245e7d){_0x27774f=_0x27774f-0x151;let _0x74ec7a=_0x491e49[_0x27774f];return _0x74ec7a;},a388_0x2777(_0x4ac076,_0x1c7723);}var __importDefault=this&&this[a388_0x5390ea(0x168)]||function(_0xcdfea8){const _0x2f84ef=a388_0x5390ea;return _0xcdfea8&&_0xcdfea8[_0x2f84ef(0x151)]?_0xcdfea8:{'default':_0xcdfea8};};Object[a388_0x5390ea(0x15f)](exports,a388_0x5390ea(0x151),{'value':!![]});const Chat_1=__importDefault(require(a388_0x5390ea(0x15b))),ChatUser_1=__importDefault(require(a388_0x5390ea(0x158))),User_1=__importDefault(require(a388_0x5390ea(0x163))),CreateService=async _0xdadcf4=>{const _0x57a2fd=a388_0x5390ea,{ownerId:_0x18926f,companyId:_0xa030df,users:_0x10a860,title:_0x2741b2}=_0xdadcf4,_0x310e5c=await Chat_1[_0x57a2fd(0x15c)]['create']({'ownerId':_0x18926f,'companyId':_0xa030df,'title':_0x2741b2});if(Array[_0x57a2fd(0x159)](_0x10a860)&&_0x10a860[_0x57a2fd(0x157)]>0x0){await ChatUser_1[_0x57a2fd(0x15c)]['create']({'chatId':_0x310e5c['id'],'userId':_0x18926f});for(let _0x201ec4 of _0x10a860){await ChatUser_1[_0x57a2fd(0x15c)]['create']({'chatId':_0x310e5c['id'],'userId':_0x201ec4['id']});}}return await _0x310e5c[_0x57a2fd(0x15a)]({'include':[{'model':ChatUser_1['default'],'as':_0x57a2fd(0x155),'include':[{'model':User_1[_0x57a2fd(0x15c)],'as':'user'}]},{'model':User_1[_0x57a2fd(0x15c)],'as':_0x57a2fd(0x15d)}]}),_0x310e5c;};exports[a388_0x5390ea(0x15c)]=CreateService;