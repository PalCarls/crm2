'use strict';const a328_0x47c7f7=a328_0x3021;function a328_0x3021(_0x294983,_0x4f6496){const _0x15c4c2=a328_0x15c4();return a328_0x3021=function(_0x30219d,_0x48a373){_0x30219d=_0x30219d-0x14c;let _0x19e4f2=_0x15c4c2[_0x30219d];return _0x19e4f2;},a328_0x3021(_0x294983,_0x4f6496);}function a328_0x15c4(){const _0x5224b2=['destroy','4157463fFhdEe','6054XPRdmq','status','32nYaiah','12638592Qzohjs','297zdEiGv','657415bRaNLk','1886mfFANV','16180zokWOS','defineProperty','10178LkfZql','../../models/Campaign','ERR_NO_CAMPAIGN_FOUND','default','98626KmfNsT','5412pboFqs','../../errors/AppError','Não\x20é\x20permitido\x20excluir\x20campanha\x20em\x20andamento','__esModule','207LrGgFI'];a328_0x15c4=function(){return _0x5224b2;};return a328_0x15c4();}(function(_0x26b510,_0x485a15){const _0x4905a6=a328_0x3021,_0x4416b9=_0x26b510();while(!![]){try{const _0x2b7aa4=parseInt(_0x4905a6(0x158))/0x1*(parseInt(_0x4905a6(0x15a))/0x2)+-parseInt(_0x4905a6(0x153))/0x3+-parseInt(_0x4905a6(0x156))/0x4*(-parseInt(_0x4905a6(0x159))/0x5)+-parseInt(_0x4905a6(0x154))/0x6*(parseInt(_0x4905a6(0x15d))/0x7)+-parseInt(_0x4905a6(0x157))/0x8+-parseInt(_0x4905a6(0x151))/0x9*(parseInt(_0x4905a6(0x15b))/0xa)+parseInt(_0x4905a6(0x14c))/0xb*(parseInt(_0x4905a6(0x14d))/0xc);if(_0x2b7aa4===_0x485a15)break;else _0x4416b9['push'](_0x4416b9['shift']());}catch(_0xe5ff81){_0x4416b9['push'](_0x4416b9['shift']());}}}(a328_0x15c4,0xdd1b8));var __importDefault=this&&this['__importDefault']||function(_0x49e50a){const _0xf20834=a328_0x3021;return _0x49e50a&&_0x49e50a[_0xf20834(0x150)]?_0x49e50a:{'default':_0x49e50a};};Object[a328_0x47c7f7(0x15c)](exports,a328_0x47c7f7(0x150),{'value':!![]});const Campaign_1=__importDefault(require(a328_0x47c7f7(0x15e))),AppError_1=__importDefault(require(a328_0x47c7f7(0x14e))),DeleteService=async _0x3f7884=>{const _0x539167=a328_0x47c7f7,_0xd0bbf0=await Campaign_1[_0x539167(0x160)]['findOne']({'where':{'id':_0x3f7884}});if(!_0xd0bbf0)throw new AppError_1[(_0x539167(0x160))](_0x539167(0x15f),0x194);if(_0xd0bbf0[_0x539167(0x155)]==='EM_ANDAMENTO')throw new AppError_1[(_0x539167(0x160))](_0x539167(0x14f),0x190);await _0xd0bbf0[_0x539167(0x152)]();};exports[a328_0x47c7f7(0x160)]=DeleteService;