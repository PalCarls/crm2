'use strict';function a470_0x4f2e(_0x86932d,_0x369547){const _0xbdac54=a470_0xbdac();return a470_0x4f2e=function(_0x4f2e74,_0x59bef4){_0x4f2e74=_0x4f2e74-0xdb;let _0x4a5e11=_0xbdac54[_0x4f2e74];return _0x4a5e11;},a470_0x4f2e(_0x86932d,_0x369547);}const a470_0x1b3dcc=a470_0x4f2e;(function(_0x12a25c,_0x5a7e21){const _0x3bb47f=a470_0x4f2e,_0x34433a=_0x12a25c();while(!![]){try{const _0x46bddb=-parseInt(_0x3bb47f(0xe6))/0x1*(-parseInt(_0x3bb47f(0xec))/0x2)+parseInt(_0x3bb47f(0xe4))/0x3*(-parseInt(_0x3bb47f(0xe3))/0x4)+parseInt(_0x3bb47f(0xdf))/0x5*(parseInt(_0x3bb47f(0xea))/0x6)+parseInt(_0x3bb47f(0xe8))/0x7*(-parseInt(_0x3bb47f(0xe1))/0x8)+-parseInt(_0x3bb47f(0xde))/0x9+parseInt(_0x3bb47f(0xdb))/0xa*(-parseInt(_0x3bb47f(0xdd))/0xb)+parseInt(_0x3bb47f(0xe0))/0xc*(parseInt(_0x3bb47f(0xe9))/0xd);if(_0x46bddb===_0x5a7e21)break;else _0x34433a['push'](_0x34433a['shift']());}catch(_0x489d1a){_0x34433a['push'](_0x34433a['shift']());}}}(a470_0xbdac,0xbff0a));function a470_0xbdac(){const _0x38fce4=['2100LPuEpx','../../errors/AppError','18ppaoHm','defineProperty','__esModule','ERR_NO_INTEGRATIONS_FOUND','3460eVqRpg','__importDefault','34089cSMVJO','1783935WvPOYm','20750byvFeA','24PvRSvd','41672vFWsSQ','default','52968yLjgwc','111Nkykql','../../models/Integrations','163282hItxtZ','update','679QNtEGI','843986YwCPop'];a470_0xbdac=function(){return _0x38fce4;};return a470_0xbdac();}var __importDefault=this&&this[a470_0x1b3dcc(0xdc)]||function(_0x8832f6){return _0x8832f6&&_0x8832f6['__esModule']?_0x8832f6:{'default':_0x8832f6};};Object[a470_0x1b3dcc(0xed)](exports,a470_0x1b3dcc(0xee),{'value':!![]});const AppError_1=__importDefault(require(a470_0x1b3dcc(0xeb))),Integrations_1=__importDefault(require(a470_0x1b3dcc(0xe5))),UpdateIntegrationsService=async({integration:_0x47befe,companyId:_0x1fa1cf,value:_0x33f249})=>{const _0x10c360=a470_0x1b3dcc,_0x1c7630=await Integrations_1['default']['findOne']({'where':{'name':_0x47befe,'companyId':_0x1fa1cf}});if(!_0x1c7630)throw new AppError_1[(_0x10c360(0xe2))](_0x10c360(0xef),0x194);return await _0x1c7630[_0x10c360(0xe7)]({'token':_0x33f249,'where':{'name':_0x47befe,'companyId':_0x1fa1cf}}),_0x1c7630;};exports[a470_0x1b3dcc(0xe2)]=UpdateIntegrationsService;