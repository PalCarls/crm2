'use strict';function a414_0x308c(){const _0x50880d=['708028OiIcWp','-contact','../../models/Contact','401871HwagsE','defineProperty','create','162062nzhXOf','getIO','610525OSAosK','__importDefault','replace','18570VfhGVN','default','361148AkgGuw','findOne','company-','emit','update','434vvVVsX','1424ByIydt','../../libs/socket','__esModule','9756rsgraU'];a414_0x308c=function(){return _0x50880d;};return a414_0x308c();}const a414_0x1b9f7a=a414_0x55e8;function a414_0x55e8(_0x2639e5,_0xf67fa9){const _0x308c9b=a414_0x308c();return a414_0x55e8=function(_0x55e8e8,_0x46b688){_0x55e8e8=_0x55e8e8-0x1aa;let _0x1f7895=_0x308c9b[_0x55e8e8];return _0x1f7895;},a414_0x55e8(_0x2639e5,_0xf67fa9);}(function(_0x7dd0a7,_0x15b590){const _0x5d4904=a414_0x55e8,_0x18b4a0=_0x7dd0a7();while(!![]){try{const _0x2ca8b3=parseInt(_0x5d4904(0x1ad))/0x1+-parseInt(_0x5d4904(0x1b4))/0x2+-parseInt(_0x5d4904(0x1aa))/0x3+parseInt(_0x5d4904(0x1be))/0x4+parseInt(_0x5d4904(0x1af))/0x5+-parseInt(_0x5d4904(0x1b2))/0x6*(-parseInt(_0x5d4904(0x1b9))/0x7)+-parseInt(_0x5d4904(0x1ba))/0x8*(parseInt(_0x5d4904(0x1bd))/0x9);if(_0x2ca8b3===_0x15b590)break;else _0x18b4a0['push'](_0x18b4a0['shift']());}catch(_0x423991){_0x18b4a0['push'](_0x18b4a0['shift']());}}}(a414_0x308c,0x238ad));var __importDefault=this&&this[a414_0x1b9f7a(0x1b0)]||function(_0x318df9){const _0x46ec86=a414_0x1b9f7a;return _0x318df9&&_0x318df9[_0x46ec86(0x1bc)]?_0x318df9:{'default':_0x318df9};};Object[a414_0x1b9f7a(0x1ab)](exports,a414_0x1b9f7a(0x1bc),{'value':!![]});const socket_1=require(a414_0x1b9f7a(0x1bb)),Contact_1=__importDefault(require(a414_0x1b9f7a(0x1c0))),CreateOrUpdateContactServiceForImport=async({name:_0x563f2a,number:_0x4533a3,profilePicUrl:_0x308065,isGroup:_0x5d960a,email:email='',commandBot:commandBot='',extraInfo:extraInfo=[],companyId:_0x1a9785})=>{const _0x19c27d=a414_0x1b9f7a,_0x31c5c6=_0x5d960a?_0x4533a3:_0x4533a3[_0x19c27d(0x1b1)](/[^0-9]/g,''),_0x5a8807=(0x0,socket_1[_0x19c27d(0x1ae)])();let _0x18bef2;_0x18bef2=await Contact_1[_0x19c27d(0x1b3)][_0x19c27d(0x1b5)]({'where':{'number':_0x31c5c6,'companyId':_0x1a9785}});if(_0x18bef2){if(_0x18bef2['companyId']===null)_0x18bef2[_0x19c27d(0x1b8)]({'name':_0x563f2a,'profilePicUrl':_0x308065,'companyId':_0x1a9785});else _0x18bef2['update']({'name':_0x563f2a,'profilePicUrl':_0x308065});_0x5a8807['emit'](_0x19c27d(0x1b6)+_0x1a9785+_0x19c27d(0x1bf),{'action':'update','contact':_0x18bef2});}else _0x18bef2=await Contact_1['default'][_0x19c27d(0x1ac)]({'name':_0x563f2a,'companyId':_0x1a9785,'number':_0x31c5c6,'profilePicUrl':_0x308065,'email':email,'commandBot':commandBot,'isGroup':_0x5d960a,'extraInfo':extraInfo}),_0x5a8807[_0x19c27d(0x1b7)](_0x19c27d(0x1b6)+_0x1a9785+_0x19c27d(0x1bf),{'action':_0x19c27d(0x1ac),'contact':_0x18bef2});return _0x18bef2;};exports[a414_0x1b9f7a(0x1b3)]=CreateOrUpdateContactServiceForImport;