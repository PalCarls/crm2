'use strict';function a467_0x57a1(_0xd43dc,_0x4b932d){const _0x7bca75=a467_0x7bca();return a467_0x57a1=function(_0x57a184,_0x330843){_0x57a184=_0x57a184-0x14b;let _0x4e7e02=_0x7bca75[_0x57a184];return _0x4e7e02;},a467_0x57a1(_0xd43dc,_0x4b932d);}function a467_0x7bca(){const _0xa027b9=['findOne','645796CWSRuw','451096zZnxMb','-contact','6gIjiwY','17060VJRPgY','153cwYzdP','default','41070YXrKyn','company-','1004423IkKfkO','emit','update','replace','865602BurPPd','__esModule','__importDefault','3dmfEaD','companyId','../../libs/socket','70801IZfgPs','create','defineProperty','getIO'];a467_0x7bca=function(){return _0xa027b9;};return a467_0x7bca();}const a467_0x179e93=a467_0x57a1;(function(_0x478cfc,_0x58b135){const _0x60a896=a467_0x57a1,_0x2c9f69=_0x478cfc();while(!![]){try{const _0x313f0e=-parseInt(_0x60a896(0x162))/0x1+parseInt(_0x60a896(0x15c))/0x2+parseInt(_0x60a896(0x15f))/0x3*(-parseInt(_0x60a896(0x14f))/0x4)+parseInt(_0x60a896(0x156))/0x5+parseInt(_0x60a896(0x152))/0x6*(parseInt(_0x60a896(0x158))/0x7)+-parseInt(_0x60a896(0x150))/0x8+-parseInt(_0x60a896(0x154))/0x9*(parseInt(_0x60a896(0x153))/0xa);if(_0x313f0e===_0x58b135)break;else _0x2c9f69['push'](_0x2c9f69['shift']());}catch(_0x3daea3){_0x2c9f69['push'](_0x2c9f69['shift']());}}}(a467_0x7bca,0x41271));var __importDefault=this&&this[a467_0x179e93(0x15e)]||function(_0x3adc48){return _0x3adc48&&_0x3adc48['__esModule']?_0x3adc48:{'default':_0x3adc48};};Object[a467_0x179e93(0x14c)](exports,a467_0x179e93(0x15d),{'value':!![]});const socket_1=require(a467_0x179e93(0x161)),Contact_1=__importDefault(require('../../models/Contact')),CreateOrUpdateContactServiceForImport=async({name:_0x4f8683,number:_0x4bf927,profilePicUrl:_0x813d40,isGroup:_0x344f29,email:email='',commandBot:commandBot='',extraInfo:extraInfo=[],companyId:_0x4cc3f1})=>{const _0x54bfcd=a467_0x179e93,_0xf97ae2=_0x344f29?_0x4bf927:_0x4bf927[_0x54bfcd(0x15b)](/[^0-9]/g,''),_0x4e4f46=(0x0,socket_1[_0x54bfcd(0x14d)])();let _0x37b264;_0x37b264=await Contact_1[_0x54bfcd(0x155)][_0x54bfcd(0x14e)]({'where':{'number':_0xf97ae2,'companyId':_0x4cc3f1}});if(_0x37b264){if(_0x37b264[_0x54bfcd(0x160)]===null)await _0x37b264[_0x54bfcd(0x15a)]({'name':_0x4f8683,'profilePicUrl':_0x813d40,'companyId':_0x4cc3f1});else await _0x37b264[_0x54bfcd(0x15a)]({'name':_0x4f8683,'profilePicUrl':_0x813d40});_0x4e4f46[_0x54bfcd(0x159)]('company-'+_0x4cc3f1+_0x54bfcd(0x151),{'action':_0x54bfcd(0x15a),'contact':_0x37b264});}else _0x37b264=await Contact_1[_0x54bfcd(0x155)][_0x54bfcd(0x14b)]({'name':_0x4f8683,'companyId':_0x4cc3f1,'number':_0xf97ae2,'profilePicUrl':_0x813d40,'email':email,'commandBot':commandBot,'isGroup':_0x344f29,'extraInfo':extraInfo}),_0x4e4f46[_0x54bfcd(0x159)](_0x54bfcd(0x157)+_0x4cc3f1+'-contact',{'action':_0x54bfcd(0x14b),'contact':_0x37b264});return _0x37b264;};exports[a467_0x179e93(0x155)]=CreateOrUpdateContactServiceForImport;