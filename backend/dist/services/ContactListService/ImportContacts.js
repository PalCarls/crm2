'use strict';const a392_0xbfaee=a392_0x11f7;(function(_0x28cb21,_0xddfa38){const _0x5b5dbf=a392_0x11f7,_0x5eff68=_0x28cb21();while(!![]){try{const _0x51d02a=-parseInt(_0x5b5dbf(0x1ef))/0x1*(parseInt(_0x5b5dbf(0x1df))/0x2)+parseInt(_0x5b5dbf(0x1f2))/0x3+-parseInt(_0x5b5dbf(0x1ea))/0x4*(-parseInt(_0x5b5dbf(0x1e4))/0x5)+-parseInt(_0x5b5dbf(0x1f8))/0x6+parseInt(_0x5b5dbf(0x1e6))/0x7+-parseInt(_0x5b5dbf(0x1e9))/0x8+-parseInt(_0x5b5dbf(0x1ff))/0x9;if(_0x51d02a===_0xddfa38)break;else _0x5eff68['push'](_0x5eff68['shift']());}catch(_0x825275){_0x5eff68['push'](_0x5eff68['shift']());}}}(a392_0x51fb,0xf265b));var __importDefault=this&&this[a392_0xbfaee(0x1ee)]||function(_0x20a59f){const _0x9455b3=a392_0xbfaee;return _0x20a59f&&_0x20a59f[_0x9455b3(0x204)]?_0x20a59f:{'default':_0x20a59f};};Object[a392_0xbfaee(0x1f7)](exports,'__esModule',{'value':!![]}),exports[a392_0xbfaee(0x1f0)]=void 0x0;const lodash_1=require(a392_0xbfaee(0x1e1)),xlsx_1=__importDefault(require(a392_0xbfaee(0x1dd))),lodash_2=require(a392_0xbfaee(0x1e1)),ContactListItem_1=__importDefault(require(a392_0xbfaee(0x1eb))),CheckNumber_1=__importDefault(require(a392_0xbfaee(0x1f1))),logger_1=require(a392_0xbfaee(0x1fa));async function ImportContacts(_0x4569df,_0x44dee1,_0x2a2918){const _0x23579b=a392_0xbfaee,_0x25d876=xlsx_1[_0x23579b(0x1f6)][_0x23579b(0x1fb)](_0x2a2918?.[_0x23579b(0x1ed)]),_0x2b4af7=(0x0,lodash_1[_0x23579b(0x1d8)])(Object[_0x23579b(0x202)](_0x25d876[_0x23579b(0x200)])),_0x58855d=xlsx_1[_0x23579b(0x1f6)][_0x23579b(0x203)][_0x23579b(0x1da)](_0x2b4af7,{'header':0x0}),_0x207951=_0x58855d[_0x23579b(0x1d9)](_0xacb480=>{const _0x459d4d=_0x23579b;let _0x4c6e55='',_0x3c9f1c='',_0x1d0a0b='';return((0x0,lodash_2[_0x459d4d(0x205)])(_0xacb480,_0x459d4d(0x1e7))||(0x0,lodash_2[_0x459d4d(0x205)])(_0xacb480,'Nome'))&&(_0x4c6e55=_0xacb480[_0x459d4d(0x1e7)]||_0xacb480[_0x459d4d(0x201)]),((0x0,lodash_2[_0x459d4d(0x205)])(_0xacb480,'numero')||(0x0,lodash_2[_0x459d4d(0x205)])(_0xacb480,_0x459d4d(0x1e2))||(0x0,lodash_2[_0x459d4d(0x205)])(_0xacb480,_0x459d4d(0x1e0))||(0x0,lodash_2[_0x459d4d(0x205)])(_0xacb480,_0x459d4d(0x1f3)))&&(_0x3c9f1c=_0xacb480[_0x459d4d(0x1dc)]||_0xacb480['número']||_0xacb480[_0x459d4d(0x1e0)]||_0xacb480[_0x459d4d(0x1f3)],_0x3c9f1c=(''+_0x3c9f1c)[_0x459d4d(0x1fe)](/\D/g,'')),((0x0,lodash_2[_0x459d4d(0x205)])(_0xacb480,_0x459d4d(0x1f4))||(0x0,lodash_2['has'])(_0xacb480,_0x459d4d(0x1fc))||(0x0,lodash_2[_0x459d4d(0x205)])(_0xacb480,_0x459d4d(0x1de))||(0x0,lodash_2[_0x459d4d(0x205)])(_0xacb480,'E-mail'))&&(_0x1d0a0b=_0xacb480[_0x459d4d(0x1f4)]||_0xacb480[_0x459d4d(0x1fc)]||_0xacb480['Email']||_0xacb480[_0x459d4d(0x1e3)]),{'name':_0x4c6e55,'number':_0x3c9f1c,'email':_0x1d0a0b,'contactListId':_0x4569df,'companyId':_0x44dee1};}),_0xa61bbd=[];for(const _0x37b91c of _0x207951){const [_0x51c1a4,_0xe301e6]=await ContactListItem_1[_0x23579b(0x1f6)]['findOrCreate']({'where':{'number':''+_0x37b91c[_0x23579b(0x1ec)],'contactListId':_0x37b91c[_0x23579b(0x1db)],'companyId':_0x37b91c[_0x23579b(0x1e8)]},'defaults':_0x37b91c});_0xe301e6&&_0xa61bbd[_0x23579b(0x1e5)](_0x51c1a4);}if(_0xa61bbd)for(let _0x2197d9 of _0xa61bbd){try{const _0x2fdfc8=await(0x0,CheckNumber_1['default'])(_0x2197d9['number'],_0x44dee1);_0x2197d9[_0x23579b(0x1f5)]=_0x2fdfc8?!![]:![];const _0x1bef96=_0x2fdfc8;_0x2197d9[_0x23579b(0x1ec)]=_0x1bef96,await _0x2197d9[_0x23579b(0x1f9)]();}catch(_0x1f2cf8){logger_1['logger']['error'](_0x23579b(0x1fd)+_0x2197d9[_0x23579b(0x1ec)]);}}return _0xa61bbd;}exports[a392_0xbfaee(0x1f0)]=ImportContacts;function a392_0x11f7(_0x16822e,_0x12273e){const _0x51fbf5=a392_0x51fb();return a392_0x11f7=function(_0x11f7ac,_0x292ad7){_0x11f7ac=_0x11f7ac-0x1d8;let _0x450138=_0x51fbf5[_0x11f7ac];return _0x450138;},a392_0x11f7(_0x16822e,_0x12273e);}function a392_0x51fb(){const _0x17b122=['Número\x20de\x20contato\x20inválido:\x20','replace','31275ORJFjH','Sheets','Nome','values','utils','__esModule','has','head','map','sheet_to_json','contactListId','numero','xlsx','Email','976730uBHrnB','Numero','lodash','número','E-mail','9809315IRCrop','push','4707157jIHzCU','nome','companyId','10252416HOPKeR','4ojxYuq','../../models/ContactListItem','number','path','__importDefault','1TZjrDx','ImportContacts','../WbotServices/CheckNumber','1942572FXQNMM','Número','email','isWhatsappValid','default','defineProperty','3093522HDMBEN','save','../../utils/logger','readFile','e-mail'];a392_0x51fb=function(){return _0x17b122;};return a392_0x51fb();}