'use strict';const a466_0x4cf138=a466_0x4398;(function(_0x5401aa,_0x149fb8){const _0x2150d6=a466_0x4398,_0x16de41=_0x5401aa();while(!![]){try{const _0x82fdaf=-parseInt(_0x2150d6(0x143))/0x1+-parseInt(_0x2150d6(0x110))/0x2+parseInt(_0x2150d6(0x10e))/0x3+-parseInt(_0x2150d6(0x133))/0x4+-parseInt(_0x2150d6(0x11d))/0x5*(-parseInt(_0x2150d6(0x139))/0x6)+parseInt(_0x2150d6(0x142))/0x7+parseInt(_0x2150d6(0x132))/0x8;if(_0x82fdaf===_0x149fb8)break;else _0x16de41['push'](_0x16de41['shift']());}catch(_0x41cfda){_0x16de41['push'](_0x16de41['shift']());}}}(a466_0x12df,0x48144));function a466_0x12df(){const _0x34d20f=['company','whatsapp','defineProperty','__importDefault','data','profilePicUrl','Error\x20to\x20find\x20or\x20create\x20a\x20contact:','30aLrTrh','getIO','-contact','__importStar','name','default','path','urlPicture','contacts','unlinkSync','__setModuleDefault','axios','writable','chmodSync','nopicture','join','reload','findOne','public','../../utils/logger','error','8173160uuzckr','1256308Licqtc','get','__createBinding','isNil','../../models/CompaniesSettings','replace','45000clsXyX','lodash','emit','.jpeg','writeFileSync','existsSync','__esModule','save','create','1625421sTJIQr','506937dAoZhn','company-','842829xjNnED','logger','927082HlbiVa','arraybuffer','resolve','hasOwnProperty','getOwnPropertyDescriptor','enabled'];a466_0x12df=function(){return _0x34d20f;};return a466_0x12df();}function a466_0x4398(_0x170dc6,_0x51b296){const _0x12dfb5=a466_0x12df();return a466_0x4398=function(_0x4398fb,_0x3fe2f8){_0x4398fb=_0x4398fb-0x10e;let _0xd045b9=_0x12dfb5[_0x4398fb];return _0xd045b9;},a466_0x4398(_0x170dc6,_0x51b296);}var __createBinding=this&&this[a466_0x4cf138(0x135)]||(Object['create']?function(_0x1bc683,_0x12373d,_0x5396a9,_0x5e829e){const _0x1a5c85=a466_0x4cf138;if(_0x5e829e===undefined)_0x5e829e=_0x5396a9;var _0x45444d=Object[_0x1a5c85(0x114)](_0x12373d,_0x5396a9);(!_0x45444d||(_0x1a5c85(0x134)in _0x45444d?!_0x12373d['__esModule']:_0x45444d[_0x1a5c85(0x129)]||_0x45444d['configurable']))&&(_0x45444d={'enumerable':!![],'get':function(){return _0x12373d[_0x5396a9];}}),Object['defineProperty'](_0x1bc683,_0x5e829e,_0x45444d);}:function(_0x30a093,_0x53681a,_0x3de65d,_0x2d6c00){if(_0x2d6c00===undefined)_0x2d6c00=_0x3de65d;_0x30a093[_0x2d6c00]=_0x53681a[_0x3de65d];}),__setModuleDefault=this&&this[a466_0x4cf138(0x127)]||(Object['create']?function(_0xa29ef9,_0x18ba37){const _0x99b598=a466_0x4cf138;Object[_0x99b598(0x118)](_0xa29ef9,_0x99b598(0x122),{'enumerable':!![],'value':_0x18ba37});}:function(_0x51a104,_0x759861){const _0x5d1edb=a466_0x4cf138;_0x51a104[_0x5d1edb(0x122)]=_0x759861;}),__importStar=this&&this[a466_0x4cf138(0x120)]||function(_0x58f81e){const _0x3f8215=a466_0x4cf138;if(_0x58f81e&&_0x58f81e['__esModule'])return _0x58f81e;var _0x443188={};if(_0x58f81e!=null){for(var _0x81a5b9 in _0x58f81e)if(_0x81a5b9!==_0x3f8215(0x122)&&Object['prototype'][_0x3f8215(0x113)]['call'](_0x58f81e,_0x81a5b9))__createBinding(_0x443188,_0x58f81e,_0x81a5b9);}return __setModuleDefault(_0x443188,_0x58f81e),_0x443188;},__importDefault=this&&this[a466_0x4cf138(0x119)]||function(_0x5a81ef){return _0x5a81ef&&_0x5a81ef['__esModule']?_0x5a81ef:{'default':_0x5a81ef};};Object[a466_0x4cf138(0x118)](exports,a466_0x4cf138(0x13f),{'value':!![]});const socket_1=require('../../libs/socket'),CompaniesSettings_1=__importDefault(require(a466_0x4cf138(0x137))),Contact_1=__importDefault(require('../../models/Contact')),fs_1=__importDefault(require('fs')),path_1=__importStar(require(a466_0x4cf138(0x123))),logger_1=require(a466_0x4cf138(0x130)),lodash_1=require(a466_0x4cf138(0x13a)),axios=require(a466_0x4cf138(0x128)),CreateOrUpdateContactService=async({name:_0x4f65ff,number:_0x47ffc6,profilePicUrl:_0x4a8fee,isGroup:_0x4a9b62,email:email='',channel:channel=a466_0x4cf138(0x117),companyId:_0x8b6d55,extraInfo:extraInfo=[],remoteJid:remoteJid=''})=>{const _0x450062=a466_0x4cf138;try{let _0x39bdaf=![];const _0x2271c8=path_1[_0x450062(0x122)][_0x450062(0x112)](__dirname,'..','..','..',_0x450062(0x12f)),_0x59d631=_0x4a9b62?_0x47ffc6:_0x47ffc6[_0x450062(0x138)](/[^0-9]/g,''),_0x5e20e7=(0x0,socket_1[_0x450062(0x11e)])();let _0x441fac;_0x441fac=await Contact_1[_0x450062(0x122)][_0x450062(0x12e)]({'where':{'number':_0x59d631,'companyId':_0x8b6d55}});const _0x45210e=_0x441fac?.[_0x450062(0x11b)]!==_0x4a8fee&&_0x4a8fee!==''||![];if(_0x441fac)_0x441fac['remoteJid']=remoteJid,_0x441fac[_0x450062(0x11b)]=_0x4a8fee||null,(_0x4a9b62||_0x441fac[_0x450062(0x121)]===_0x59d631)&&(_0x441fac[_0x450062(0x121)]=_0x4f65ff),await _0x441fac[_0x450062(0x140)](),await _0x441fac['reload']();else{const _0x3ff5eb=await CompaniesSettings_1['default'][_0x450062(0x12e)]({'where':{'companyId':_0x8b6d55}}),{acceptAudioMessageContact:_0x2c80ef}=_0x3ff5eb;_0x441fac=await Contact_1[_0x450062(0x122)]['create']({'name':_0x4f65ff,'number':_0x59d631,'email':email,'isGroup':_0x4a9b62,'extraInfo':extraInfo,'companyId':_0x8b6d55,'channel':channel,'acceptAudioMessage':_0x2c80ef===_0x450062(0x115)?!![]:![],'remoteJid':remoteJid,'urlPicture':_0x4a8fee}),_0x39bdaf=!![];}if(_0x45210e&&channel===_0x450062(0x117)){const _0x2a9050=path_1[_0x450062(0x122)][_0x450062(0x112)](_0x2271c8,_0x450062(0x116)+_0x8b6d55,_0x450062(0x125));!fs_1['default'][_0x450062(0x13e)](_0x2a9050)&&(fs_1[_0x450062(0x122)]['mkdirSync'](_0x2a9050,{'recursive':!![]}),fs_1[_0x450062(0x122)][_0x450062(0x12a)](_0x2a9050,0x1ff));let _0x34a3c5;if(!(0x0,lodash_1[_0x450062(0x136)])(_0x4a8fee)&&_0x4a8fee['includes'](_0x450062(0x12b)))_0x34a3c5='nopicture.png';else{if(!(0x0,lodash_1[_0x450062(0x136)])(_0x441fac[_0x450062(0x124)])){const _0x200aae=path_1[_0x450062(0x122)][_0x450062(0x112)](_0x441fac[_0x450062(0x124)]);fs_1[_0x450062(0x122)]['existsSync'](_0x200aae)&&fs_1[_0x450062(0x122)][_0x450062(0x126)](_0x200aae);}const _0x375ecc=await axios['get'](_0x4a8fee,{'responseType':_0x450062(0x111)});_0x34a3c5=''+_0x441fac['id']+new Date()['getTime']()+_0x450062(0x13c),fs_1[_0x450062(0x122)][_0x450062(0x13d)]((0x0,path_1[_0x450062(0x12c)])(_0x2a9050,_0x34a3c5),_0x375ecc[_0x450062(0x11a)]);}await _0x441fac['update']({'urlPicture':_0x34a3c5,'pictureUpdated':!![]}),await _0x441fac[_0x450062(0x12d)]();}return _0x39bdaf?_0x5e20e7[_0x450062(0x13b)](_0x450062(0x144)+_0x8b6d55+_0x450062(0x11f),{'action':_0x450062(0x141),'contact':_0x441fac}):_0x5e20e7[_0x450062(0x13b)](_0x450062(0x144)+_0x8b6d55+_0x450062(0x11f),{'action':'update','contact':_0x441fac}),_0x441fac;}catch(_0x5c91dc){logger_1[_0x450062(0x10f)][_0x450062(0x131)](_0x450062(0x11c),_0x5c91dc);throw _0x5c91dc;}};exports[a466_0x4cf138(0x122)]=CreateOrUpdateContactService;