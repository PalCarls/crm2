<<<<<<< HEAD
'use strict';const a450_0x2011bd=a450_0x5b4d;function a450_0x5b4d(_0x4af62c,_0x292fd9){const _0x44aa48=a450_0x44aa();return a450_0x5b4d=function(_0x5b4dca,_0x4b696e){_0x5b4dca=_0x5b4dca-0x1a4;let _0x4fda21=_0x44aa48[_0x5b4dca];return _0x4fda21;},a450_0x5b4d(_0x4af62c,_0x292fd9);}function a450_0x44aa(){const _0x1035bc=['urlPicture','defineProperty','writeFileSync','4xkYXnN','company','create','writable','enabled','../../utils/logger','11fIfFLX','save','error','nopicture.png','contacts','configurable','getTime','__createBinding','name','__importDefault','resolve','includes','620OrUCyr','existsSync','hasOwnProperty','update','1010088WTERGX','unlinkSync','default','2026070nzNLPY','profilePicUrl','13990mhuDHG','reload','get','334744UKArrr','9ILGJpf','chmodSync','remoteJid','Error\x20to\x20find\x20or\x20create\x20a\x20contact:','company-','../../models/CompaniesSettings','replace','__setModuleDefault','getIO','axios','.jpeg','../../libs/socket','prototype','whatsapp','-contact','emit','data','8275152qTfSua','findOne','logger','__esModule','1701ypdJHl','7332ymROml','path','1134696tISCvu'];a450_0x44aa=function(){return _0x1035bc;};return a450_0x44aa();}(function(_0x2ad122,_0x2a6468){const _0x394746=a450_0x5b4d,_0x239d0c=_0x2ad122();while(!![]){try{const _0x39e8df=parseInt(_0x394746(0x1b8))/0x1*(parseInt(_0x394746(0x1d6))/0x2)+parseInt(_0x394746(0x1ce))/0x3+-parseInt(_0x394746(0x1ca))/0x4*(-parseInt(_0x394746(0x1d3))/0x5)+parseInt(_0x394746(0x1b2))/0x6*(-parseInt(_0x394746(0x1b1))/0x7)+-parseInt(_0x394746(0x1b4))/0x8+-parseInt(_0x394746(0x1d7))/0x9*(-parseInt(_0x394746(0x1d1))/0xa)+-parseInt(_0x394746(0x1be))/0xb*(parseInt(_0x394746(0x1ad))/0xc);if(_0x39e8df===_0x2a6468)break;else _0x239d0c['push'](_0x239d0c['shift']());}catch(_0x25c9da){_0x239d0c['push'](_0x239d0c['shift']());}}}(a450_0x44aa,0x7d836));var __createBinding=this&&this[a450_0x2011bd(0x1c5)]||(Object[a450_0x2011bd(0x1ba)]?function(_0x41e0e5,_0x4af852,_0x626ef2,_0x53a992){const _0x4ec291=a450_0x2011bd;if(_0x53a992===undefined)_0x53a992=_0x626ef2;var _0x5a2208=Object['getOwnPropertyDescriptor'](_0x4af852,_0x626ef2);(!_0x5a2208||(_0x4ec291(0x1d5)in _0x5a2208?!_0x4af852[_0x4ec291(0x1b0)]:_0x5a2208[_0x4ec291(0x1bb)]||_0x5a2208[_0x4ec291(0x1c3)]))&&(_0x5a2208={'enumerable':!![],'get':function(){return _0x4af852[_0x626ef2];}}),Object['defineProperty'](_0x41e0e5,_0x53a992,_0x5a2208);}:function(_0x2376ef,_0x2e954d,_0x532fab,_0x5f3306){if(_0x5f3306===undefined)_0x5f3306=_0x532fab;_0x2376ef[_0x5f3306]=_0x2e954d[_0x532fab];}),__setModuleDefault=this&&this[a450_0x2011bd(0x1de)]||(Object[a450_0x2011bd(0x1ba)]?function(_0x22510a,_0x3df53e){const _0x23309d=a450_0x2011bd;Object[_0x23309d(0x1b6)](_0x22510a,_0x23309d(0x1d0),{'enumerable':!![],'value':_0x3df53e});}:function(_0x464573,_0x2b5891){_0x464573['default']=_0x2b5891;}),__importStar=this&&this['__importStar']||function(_0x1eecf6){const _0x5bdcef=a450_0x2011bd;if(_0x1eecf6&&_0x1eecf6['__esModule'])return _0x1eecf6;var _0x1209fb={};if(_0x1eecf6!=null){for(var _0x44b35c in _0x1eecf6)if(_0x44b35c!==_0x5bdcef(0x1d0)&&Object[_0x5bdcef(0x1a8)][_0x5bdcef(0x1cc)]['call'](_0x1eecf6,_0x44b35c))__createBinding(_0x1209fb,_0x1eecf6,_0x44b35c);}return __setModuleDefault(_0x1209fb,_0x1eecf6),_0x1209fb;},__importDefault=this&&this[a450_0x2011bd(0x1c7)]||function(_0x1faa95){const _0x2d4cca=a450_0x2011bd;return _0x1faa95&&_0x1faa95[_0x2d4cca(0x1b0)]?_0x1faa95:{'default':_0x1faa95};};Object[a450_0x2011bd(0x1b6)](exports,a450_0x2011bd(0x1b0),{'value':!![]});const socket_1=require(a450_0x2011bd(0x1a7)),CompaniesSettings_1=__importDefault(require(a450_0x2011bd(0x1dc))),Contact_1=__importDefault(require('../../models/Contact')),fs_1=__importDefault(require('fs')),path_1=__importStar(require(a450_0x2011bd(0x1b3))),logger_1=require(a450_0x2011bd(0x1bd)),axios=require(a450_0x2011bd(0x1a5)),CreateOrUpdateContactService=async({name:_0x17032b,number:_0x2932a2,profilePicUrl:_0x29595c,isGroup:_0x13a9fc,email:email='',channel:channel=a450_0x2011bd(0x1a9),companyId:_0x6bae32,extraInfo:extraInfo=[],remoteJid:remoteJid=''})=>{const _0x1a0286=a450_0x2011bd;try{const _0x2da95f=path_1[_0x1a0286(0x1d0)]['resolve'](__dirname,'..','..','..','public'),_0x2efe09=_0x13a9fc?_0x2932a2:_0x2932a2[_0x1a0286(0x1dd)](/[^0-9]/g,''),_0x53f0ce=(0x0,socket_1[_0x1a0286(0x1a4)])();let _0x42aca2;_0x42aca2=await Contact_1[_0x1a0286(0x1d0)][_0x1a0286(0x1ae)]({'where':{'number':_0x2efe09,'companyId':_0x6bae32}});const _0x50f967=_0x42aca2?.[_0x1a0286(0x1d2)]!==_0x29595c;if(_0x42aca2)_0x42aca2[_0x1a0286(0x1d9)]=remoteJid,_0x42aca2[_0x1a0286(0x1d2)]=_0x29595c||null,(_0x13a9fc||_0x42aca2[_0x1a0286(0x1c6)]===_0x2efe09)&&(_0x42aca2[_0x1a0286(0x1c6)]=_0x17032b),_0x42aca2[_0x1a0286(0x1bf)](),_0x42aca2[_0x1a0286(0x1d4)]();else{const _0x4e5aa5=await CompaniesSettings_1['default'][_0x1a0286(0x1ae)]({'where':{'companyId':_0x6bae32}}),{acceptAudioMessageContact:_0x19cec3}=_0x4e5aa5;_0x42aca2=await Contact_1['default'][_0x1a0286(0x1ba)]({'name':_0x17032b,'number':_0x2efe09,'email':email,'isGroup':_0x13a9fc,'extraInfo':extraInfo,'companyId':_0x6bae32,'channel':channel,'acceptAudioMessage':_0x19cec3===_0x1a0286(0x1bc)?!![]:![],'remoteJid':remoteJid,'urlPicture':_0x29595c}),_0x53f0ce[_0x1a0286(0x1ab)](_0x1a0286(0x1db)+_0x6bae32+_0x1a0286(0x1aa),{'action':'create','contact':_0x42aca2});}const _0x1863f6=path_1[_0x1a0286(0x1d0)][_0x1a0286(0x1c8)](_0x2da95f,_0x1a0286(0x1b9)+_0x6bae32,_0x1a0286(0x1c2));!fs_1['default'][_0x1a0286(0x1cb)](_0x1863f6)&&(fs_1[_0x1a0286(0x1d0)]['mkdirSync'](_0x1863f6,{'recursive':!![]}),fs_1[_0x1a0286(0x1d0)][_0x1a0286(0x1d8)](_0x1863f6,0x1ff));if(_0x50f967){let _0x1dee14;if(_0x29595c[_0x1a0286(0x1c9)]('nopicture'))_0x1dee14=_0x1a0286(0x1c1);else{const _0x6df570=path_1['default'][_0x1a0286(0x1c8)](_0x42aca2[_0x1a0286(0x1b5)]);fs_1[_0x1a0286(0x1d0)][_0x1a0286(0x1cb)](_0x6df570)&&fs_1[_0x1a0286(0x1d0)][_0x1a0286(0x1cf)](_0x6df570);const _0x3ad2b0=await axios[_0x1a0286(0x1d5)](_0x29595c,{'responseType':'arraybuffer'});_0x1dee14=''+_0x42aca2['id']+new Date()[_0x1a0286(0x1c4)]()+_0x1a0286(0x1a6),fs_1['default'][_0x1a0286(0x1b7)]((0x0,path_1['join'])(_0x1863f6,_0x1dee14),_0x3ad2b0[_0x1a0286(0x1ac)]);}_0x42aca2[_0x1a0286(0x1cd)]({'urlPicture':_0x1dee14,'pictureUpdated':!![]});}return _0x53f0ce[_0x1a0286(0x1ab)]('company-'+_0x6bae32+_0x1a0286(0x1aa),{'action':'update','contact':_0x42aca2}),_0x42aca2;}catch(_0x4dc9cf){logger_1[_0x1a0286(0x1af)][_0x1a0286(0x1c0)](_0x1a0286(0x1da),_0x4dc9cf);}};exports[a450_0x2011bd(0x1d0)]=CreateOrUpdateContactService;
=======
'use strict';const a450_0x19767c=a450_0x292c;function a450_0x292c(_0x3c41cd,_0x187895){const _0x203919=a450_0x2039();return a450_0x292c=function(_0x292cb3,_0x41b71d){_0x292cb3=_0x292cb3-0x196;let _0x21e525=_0x203919[_0x292cb3];return _0x21e525;},a450_0x292c(_0x3c41cd,_0x187895);}(function(_0x1db136,_0x53a24f){const _0x263579=a450_0x292c,_0x1e2582=_0x1db136();while(!![]){try{const _0x189ef8=-parseInt(_0x263579(0x1bb))/0x1*(parseInt(_0x263579(0x1ac))/0x2)+parseInt(_0x263579(0x1a7))/0x3*(parseInt(_0x263579(0x19f))/0x4)+-parseInt(_0x263579(0x1c6))/0x5+parseInt(_0x263579(0x1b7))/0x6+-parseInt(_0x263579(0x1aa))/0x7+-parseInt(_0x263579(0x1c7))/0x8+parseInt(_0x263579(0x1b8))/0x9*(parseInt(_0x263579(0x196))/0xa);if(_0x189ef8===_0x53a24f)break;else _0x1e2582['push'](_0x1e2582['shift']());}catch(_0x2b148c){_0x1e2582['push'](_0x1e2582['shift']());}}}(a450_0x2039,0x1e853));var __createBinding=this&&this[a450_0x19767c(0x1c5)]||(Object[a450_0x19767c(0x1c8)]?function(_0x39282e,_0x2bb88d,_0x3a1abf,_0xff48fe){const _0x2194ba=a450_0x19767c;if(_0xff48fe===undefined)_0xff48fe=_0x3a1abf;var _0x2ab0b2=Object['getOwnPropertyDescriptor'](_0x2bb88d,_0x3a1abf);(!_0x2ab0b2||(_0x2194ba(0x1ab)in _0x2ab0b2?!_0x2bb88d[_0x2194ba(0x1a1)]:_0x2ab0b2[_0x2194ba(0x19a)]||_0x2ab0b2[_0x2194ba(0x1bc)]))&&(_0x2ab0b2={'enumerable':!![],'get':function(){return _0x2bb88d[_0x3a1abf];}}),Object[_0x2194ba(0x1c1)](_0x39282e,_0xff48fe,_0x2ab0b2);}:function(_0xec7bc3,_0x1406d5,_0x1703a7,_0x165d4b){if(_0x165d4b===undefined)_0x165d4b=_0x1703a7;_0xec7bc3[_0x165d4b]=_0x1406d5[_0x1703a7];}),__setModuleDefault=this&&this[a450_0x19767c(0x19c)]||(Object[a450_0x19767c(0x1c8)]?function(_0x425ab7,_0x5c7085){const _0x410c5a=a450_0x19767c;Object[_0x410c5a(0x1c1)](_0x425ab7,_0x410c5a(0x1ba),{'enumerable':!![],'value':_0x5c7085});}:function(_0x1af430,_0x534bbe){const _0x46b50a=a450_0x19767c;_0x1af430[_0x46b50a(0x1ba)]=_0x534bbe;}),__importStar=this&&this[a450_0x19767c(0x1ad)]||function(_0x4f5d6a){const _0x47ebe9=a450_0x19767c;if(_0x4f5d6a&&_0x4f5d6a['__esModule'])return _0x4f5d6a;var _0x591777={};if(_0x4f5d6a!=null){for(var _0x518dfd in _0x4f5d6a)if(_0x518dfd!==_0x47ebe9(0x1ba)&&Object[_0x47ebe9(0x1c2)][_0x47ebe9(0x1c0)]['call'](_0x4f5d6a,_0x518dfd))__createBinding(_0x591777,_0x4f5d6a,_0x518dfd);}return __setModuleDefault(_0x591777,_0x4f5d6a),_0x591777;},__importDefault=this&&this['__importDefault']||function(_0x540caa){const _0x4719ad=a450_0x19767c;return _0x540caa&&_0x540caa[_0x4719ad(0x1a1)]?_0x540caa:{'default':_0x540caa};};function a450_0x2039(){const _0x441d43=['../../libs/socket','16665eGNRiD','reload','../../models/CompaniesSettings','1346982mLWApq','get','10798VlixQn','__importStar','update','company-','contacts','writeFileSync','emit','public','mkdirSync','company','join','69684oLQNlI','49527RgKPnU','remoteJid','default','31HXmKGN','configurable','../../models/Contact','-contact','resolve','hasOwnProperty','defineProperty','prototype','findOne','unlinkSync','__createBinding','903510bmWuUc','1996688AoBPrE','create','../../utils/logger','save','1450klrMWC','whatsapp','existsSync','axios','writable','getIO','__setModuleDefault','name','includes','76TnxmaC','profilePicUrl','__esModule','replace','.jpeg','path','logger'];a450_0x2039=function(){return _0x441d43;};return a450_0x2039();}Object[a450_0x19767c(0x1c1)](exports,a450_0x19767c(0x1a1),{'value':!![]});const socket_1=require(a450_0x19767c(0x1a6)),CompaniesSettings_1=__importDefault(require(a450_0x19767c(0x1a9))),Contact_1=__importDefault(require(a450_0x19767c(0x1bd))),fs_1=__importDefault(require('fs')),path_1=__importStar(require(a450_0x19767c(0x1a4))),logger_1=require(a450_0x19767c(0x1c9)),axios=require(a450_0x19767c(0x199)),CreateOrUpdateContactService=async({name:_0x4d5865,number:_0x4ec5de,profilePicUrl:_0x226ab2,isGroup:_0x3d3093,email:email='',channel:channel=a450_0x19767c(0x197),companyId:_0x191950,extraInfo:extraInfo=[],remoteJid:remoteJid=''})=>{const _0x185c4d=a450_0x19767c;try{const _0x232357=path_1[_0x185c4d(0x1ba)]['resolve'](__dirname,'..','..','..',_0x185c4d(0x1b3)),_0x38dd6e=_0x3d3093?_0x4ec5de:_0x4ec5de[_0x185c4d(0x1a2)](/[^0-9]/g,''),_0x47f662=(0x0,socket_1[_0x185c4d(0x19b)])();let _0x419cb2;_0x419cb2=await Contact_1[_0x185c4d(0x1ba)][_0x185c4d(0x1c3)]({'where':{'number':_0x38dd6e,'companyId':_0x191950}});const _0x3c60ee=_0x419cb2?.[_0x185c4d(0x1a0)]!==_0x226ab2;if(_0x419cb2)_0x419cb2[_0x185c4d(0x1b9)]=remoteJid,_0x419cb2[_0x185c4d(0x1a0)]=_0x226ab2||null,(_0x3d3093||_0x419cb2[_0x185c4d(0x19d)]===_0x38dd6e)&&(_0x419cb2[_0x185c4d(0x19d)]=_0x4d5865),_0x419cb2[_0x185c4d(0x1ca)](),_0x419cb2[_0x185c4d(0x1a8)]();else{const _0x38c67a=await CompaniesSettings_1[_0x185c4d(0x1ba)][_0x185c4d(0x1c3)]({'where':{'companyId':_0x191950}}),{acceptAudioMessageContact:_0x578b1e}=_0x38c67a;_0x419cb2=await Contact_1[_0x185c4d(0x1ba)][_0x185c4d(0x1c8)]({'name':_0x4d5865,'number':_0x38dd6e,'email':email,'isGroup':_0x3d3093,'extraInfo':extraInfo,'companyId':_0x191950,'channel':channel,'acceptAudioMessage':_0x578b1e==='enabled'?!![]:![],'remoteJid':remoteJid,'urlPicture':_0x226ab2}),_0x47f662[_0x185c4d(0x1b2)](_0x185c4d(0x1af)+_0x191950+_0x185c4d(0x1be),{'action':_0x185c4d(0x1c8),'contact':_0x419cb2});}const _0x24b363=path_1[_0x185c4d(0x1ba)][_0x185c4d(0x1bf)](_0x232357,_0x185c4d(0x1b5)+_0x191950,_0x185c4d(0x1b0));!fs_1[_0x185c4d(0x1ba)][_0x185c4d(0x198)](_0x24b363)&&(fs_1[_0x185c4d(0x1ba)][_0x185c4d(0x1b4)](_0x24b363,{'recursive':!![]}),fs_1['default']['chmodSync'](_0x24b363,0x1ff));if(_0x3c60ee){let _0x18fc7d;if(_0x226ab2[_0x185c4d(0x19e)]('nopicture'))_0x18fc7d='nopicture.png';else{const _0x2d221d=path_1[_0x185c4d(0x1ba)][_0x185c4d(0x1bf)](_0x419cb2['urlPicture']);fs_1[_0x185c4d(0x1ba)]['existsSync'](_0x2d221d)&&fs_1[_0x185c4d(0x1ba)][_0x185c4d(0x1c4)](_0x2d221d);const _0x56dbda=await axios[_0x185c4d(0x1ab)](_0x226ab2,{'responseType':'arraybuffer'});_0x18fc7d=''+_0x419cb2['id']+new Date()['getTime']()+_0x185c4d(0x1a3),fs_1[_0x185c4d(0x1ba)][_0x185c4d(0x1b1)]((0x0,path_1[_0x185c4d(0x1b6)])(_0x24b363,_0x18fc7d),_0x56dbda['data']);}_0x419cb2[_0x185c4d(0x1ae)]({'urlPicture':_0x18fc7d,'pictureUpdated':!![]});}return _0x47f662[_0x185c4d(0x1b2)]('company-'+_0x191950+_0x185c4d(0x1be),{'action':_0x185c4d(0x1ae),'contact':_0x419cb2}),_0x419cb2;}catch(_0x449b40){logger_1[_0x185c4d(0x1a5)]['error']('Error\x20to\x20find\x20or\x20create\x20a\x20contact:',_0x449b40);}};exports[a450_0x19767c(0x1ba)]=CreateOrUpdateContactService;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
