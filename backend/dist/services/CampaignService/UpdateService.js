'use strict';const a377_0x35040e=a377_0x4df8;(function(_0x556148,_0x4f8a67){const _0x795d69=a377_0x4df8,_0x2d3673=_0x556148();while(!![]){try{const _0x4cdeed=parseInt(_0x795d69(0x1f4))/0x1*(-parseInt(_0x795d69(0x1f1))/0x2)+parseInt(_0x795d69(0x1ec))/0x3*(-parseInt(_0x795d69(0x1e4))/0x4)+parseInt(_0x795d69(0x1fe))/0x5+parseInt(_0x795d69(0x1ef))/0x6*(parseInt(_0x795d69(0x1e0))/0x7)+-parseInt(_0x795d69(0x1fb))/0x8*(-parseInt(_0x795d69(0x1e7))/0x9)+parseInt(_0x795d69(0x1f8))/0xa*(-parseInt(_0x795d69(0x1f2))/0xb)+parseInt(_0x795d69(0x1e9))/0xc;if(_0x4cdeed===_0x4f8a67)break;else _0x2d3673['push'](_0x2d3673['shift']());}catch(_0x5ab2fb){_0x2d3673['push'](_0x2d3673['shift']());}}}(a377_0x1258,0xeda6e));var __importDefault=this&&this[a377_0x35040e(0x1ed)]||function(_0x1b444a){const _0x77fbf3=a377_0x35040e;return _0x1b444a&&_0x1b444a[_0x77fbf3(0x1fc)]?_0x1b444a:{'default':_0x1b444a};};function a377_0x4df8(_0x5a0ac8,_0x380928){const _0x125829=a377_0x1258();return a377_0x4df8=function(_0x4df80a,_0x4265b6){_0x4df80a=_0x4df80a-0x1df;let _0x14a206=_0x125829[_0x4df80a];return _0x14a206;},a377_0x4df8(_0x5a0ac8,_0x380928);}Object[a377_0x35040e(0x1ee)](exports,'__esModule',{'value':!![]});function a377_0x1258(){const _0x37e131=['name','144tFtVfY','status','Só\x20é\x20permitido\x20alterar\x20campanha\x20Inativa\x20e\x20Programada','36TOlHBX','indexOf','19194288YRUpKi','scheduledAt','INATIVA','123204RMHyOC','__importDefault','defineProperty','228XlMdZV','../../errors/AppError','40arbzAm','436546AJjfUD','ERR_NO_CAMPAIGN_FOUND','72551qQDGSI','../../models/ContactList','../../models/Whatsapp','update','220AWhogR','findByPk','PROGRAMADA','3330536JHGPJa','__esModule','reload','1488300WsQAKP','../../models/Campaign','223545tZapUf','default','CANCELADA'];a377_0x1258=function(){return _0x37e131;};return a377_0x1258();}const AppError_1=__importDefault(require(a377_0x35040e(0x1f0))),Campaign_1=__importDefault(require(a377_0x35040e(0x1df))),ContactList_1=__importDefault(require(a377_0x35040e(0x1f5))),Whatsapp_1=__importDefault(require(a377_0x35040e(0x1f6))),UpdateService=async _0x15ba04=>{const _0x5abb78=a377_0x35040e,{id:_0x36a65e}=_0x15ba04,_0x3f41d7=await Campaign_1[_0x5abb78(0x1e1)][_0x5abb78(0x1f9)](_0x36a65e);if(!_0x3f41d7)throw new AppError_1['default'](_0x5abb78(0x1f3),0x194);if(['INATIVA',_0x5abb78(0x1fa),_0x5abb78(0x1e2)][_0x5abb78(0x1e8)](_0x15ba04[_0x5abb78(0x1e5)])===-0x1)throw new AppError_1['default'](_0x5abb78(0x1e6),0x190);return _0x15ba04[_0x5abb78(0x1ea)]!=null&&_0x15ba04[_0x5abb78(0x1ea)]!=''&&_0x15ba04['status']===_0x5abb78(0x1eb)&&(_0x15ba04['status']=_0x5abb78(0x1fa)),await _0x3f41d7[_0x5abb78(0x1f7)](_0x15ba04),await _0x3f41d7[_0x5abb78(0x1fd)]({'include':[{'model':ContactList_1[_0x5abb78(0x1e1)]},{'model':Whatsapp_1[_0x5abb78(0x1e1)],'attributes':['id',_0x5abb78(0x1e3)]}]}),_0x3f41d7;};exports[a377_0x35040e(0x1e1)]=UpdateService;