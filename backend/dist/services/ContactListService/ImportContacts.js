'use strict';const a407_0x5298ca=a407_0x3f5a;(function(_0x274065,_0x32f9fa){const _0xf00c3e=a407_0x3f5a,_0x515e36=_0x274065();while(!![]){try{const _0x229066=-parseInt(_0xf00c3e(0xe3))/0x1*(-parseInt(_0xf00c3e(0xea))/0x2)+-parseInt(_0xf00c3e(0xf5))/0x3*(parseInt(_0xf00c3e(0xef))/0x4)+-parseInt(_0xf00c3e(0x103))/0x5+parseInt(_0xf00c3e(0xde))/0x6+parseInt(_0xf00c3e(0xfa))/0x7+-parseInt(_0xf00c3e(0xfc))/0x8+-parseInt(_0xf00c3e(0xe4))/0x9;if(_0x229066===_0x32f9fa)break;else _0x515e36['push'](_0x515e36['shift']());}catch(_0x31c38d){_0x515e36['push'](_0x515e36['shift']());}}}(a407_0xc4f0,0x1d303));function a407_0x3f5a(_0x534f2c,_0x30340d){const _0xc4f044=a407_0xc4f0();return a407_0x3f5a=function(_0x3f5a54,_0x239218){_0x3f5a54=_0x3f5a54-0xd9;let _0x5abdbe=_0xc4f044[_0x3f5a54];return _0x5abdbe;},a407_0x3f5a(_0x534f2c,_0x30340d);}var __importDefault=this&&this[a407_0x5298ca(0xf8)]||function(_0x2344d5){return _0x2344d5&&_0x2344d5['__esModule']?_0x2344d5:{'default':_0x2344d5};};Object[a407_0x5298ca(0x100)](exports,a407_0x5298ca(0xf6),{'value':!![]}),exports[a407_0x5298ca(0xf0)]=void 0x0;function a407_0xc4f0(){const _0x5cef42=['Email','92oiZuei','numero','save','e-mail','logger','4BHHcVW','ImportContacts','contactListId','../../utils/logger','E-mail','readFile','606072pkWucW','__esModule','Numero','__importDefault','head','578634AmuDeR','number','183136VGfqtD','xlsx','default','values','defineProperty','lodash','Sheets','538080oymTcz','companyId','map','has','Nome','Número\x20de\x20contato\x20inválido:\x20','../WbotServices/CheckNumber','nome','1335168xiFqpK','email','sheet_to_json','findOrCreate','path','3446jMfYqE','104571MrweTN','error','Número','replace','número'];a407_0xc4f0=function(){return _0x5cef42;};return a407_0xc4f0();}const lodash_1=require(a407_0x5298ca(0x101)),xlsx_1=__importDefault(require(a407_0x5298ca(0xfd))),lodash_2=require(a407_0x5298ca(0x101)),ContactListItem_1=__importDefault(require('../../models/ContactListItem')),CheckNumber_1=__importDefault(require(a407_0x5298ca(0xdc))),logger_1=require(a407_0x5298ca(0xf2));async function ImportContacts(_0x4f6967,_0x499d78,_0x1eb198){const _0x4494bd=a407_0x5298ca,_0x436ab4=xlsx_1[_0x4494bd(0xfe)][_0x4494bd(0xf4)](_0x1eb198?.[_0x4494bd(0xe2)]),_0xd35665=(0x0,lodash_1[_0x4494bd(0xf9)])(Object[_0x4494bd(0xff)](_0x436ab4[_0x4494bd(0x102)])),_0x2a7c63=xlsx_1[_0x4494bd(0xfe)]['utils'][_0x4494bd(0xe0)](_0xd35665,{'header':0x0}),_0x50d229=_0x2a7c63[_0x4494bd(0x105)](_0x3447a7=>{const _0x1aa8c1=_0x4494bd;let _0x1ac71e='',_0x24b12e='',_0x17da02='';return((0x0,lodash_2['has'])(_0x3447a7,'nome')||(0x0,lodash_2[_0x1aa8c1(0xd9)])(_0x3447a7,'Nome'))&&(_0x1ac71e=_0x3447a7[_0x1aa8c1(0xdd)]||_0x3447a7[_0x1aa8c1(0xda)]),((0x0,lodash_2[_0x1aa8c1(0xd9)])(_0x3447a7,_0x1aa8c1(0xeb))||(0x0,lodash_2[_0x1aa8c1(0xd9)])(_0x3447a7,_0x1aa8c1(0xe8))||(0x0,lodash_2[_0x1aa8c1(0xd9)])(_0x3447a7,_0x1aa8c1(0xf7))||(0x0,lodash_2[_0x1aa8c1(0xd9)])(_0x3447a7,'Número'))&&(_0x24b12e=_0x3447a7[_0x1aa8c1(0xeb)]||_0x3447a7[_0x1aa8c1(0xe8)]||_0x3447a7['Numero']||_0x3447a7[_0x1aa8c1(0xe6)],_0x24b12e=(''+_0x24b12e)[_0x1aa8c1(0xe7)](/\D/g,'')),((0x0,lodash_2[_0x1aa8c1(0xd9)])(_0x3447a7,_0x1aa8c1(0xdf))||(0x0,lodash_2[_0x1aa8c1(0xd9)])(_0x3447a7,_0x1aa8c1(0xed))||(0x0,lodash_2['has'])(_0x3447a7,_0x1aa8c1(0xe9))||(0x0,lodash_2[_0x1aa8c1(0xd9)])(_0x3447a7,_0x1aa8c1(0xf3)))&&(_0x17da02=_0x3447a7[_0x1aa8c1(0xdf)]||_0x3447a7[_0x1aa8c1(0xed)]||_0x3447a7[_0x1aa8c1(0xe9)]||_0x3447a7['E-mail']),{'name':_0x1ac71e,'number':_0x24b12e,'email':_0x17da02,'contactListId':_0x4f6967,'companyId':_0x499d78};}),_0x2bbb35=[];for(const _0x39181e of _0x50d229){const [_0x8ff5f2,_0x225b98]=await ContactListItem_1[_0x4494bd(0xfe)][_0x4494bd(0xe1)]({'where':{'number':''+_0x39181e[_0x4494bd(0xfb)],'contactListId':_0x39181e[_0x4494bd(0xf1)],'companyId':_0x39181e[_0x4494bd(0x104)]},'defaults':_0x39181e});_0x225b98&&_0x2bbb35['push'](_0x8ff5f2);}if(_0x2bbb35)for(let _0x33fe2b of _0x2bbb35){try{const _0x6024cd=await(0x0,CheckNumber_1['default'])(_0x33fe2b[_0x4494bd(0xfb)],_0x499d78);_0x33fe2b['isWhatsappValid']=_0x6024cd?!![]:![];const _0x36e941=_0x6024cd;_0x33fe2b['number']=_0x36e941,await _0x33fe2b[_0x4494bd(0xec)]();}catch(_0xd07e69){logger_1[_0x4494bd(0xee)][_0x4494bd(0xe5)](_0x4494bd(0xdb)+_0x33fe2b[_0x4494bd(0xfb)]);}}return _0x2bbb35;}exports[a407_0x5298ca(0xf0)]=ImportContacts;