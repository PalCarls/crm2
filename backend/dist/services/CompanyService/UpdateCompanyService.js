'use strict';const a378_0x4cd196=a378_0x3d38;(function(_0x10b2b6,_0x2b6aed){const _0x31c350=a378_0x3d38,_0x592e57=_0x10b2b6();while(!![]){try{const _0x231d02=parseInt(_0x31c350(0x11a))/0x1+-parseInt(_0x31c350(0x114))/0x2+parseInt(_0x31c350(0x111))/0x3+-parseInt(_0x31c350(0x10c))/0x4*(parseInt(_0x31c350(0x113))/0x5)+parseInt(_0x31c350(0x11c))/0x6*(parseInt(_0x31c350(0x116))/0x7)+parseInt(_0x31c350(0x10b))/0x8*(parseInt(_0x31c350(0x118))/0x9)+-parseInt(_0x31c350(0x10f))/0xa*(parseInt(_0x31c350(0x119))/0xb);if(_0x231d02===_0x2b6aed)break;else _0x592e57['push'](_0x592e57['shift']());}catch(_0xe29cb1){_0x592e57['push'](_0x592e57['shift']());}}}(a378_0x49e2,0x44cae));function a378_0x49e2(){const _0x465e02=['default','8tyeRLt','355912ijLCAx','findByPk','update','1384940CVceib','__esModule','1264641nKjtiS','../../errors/AppError','10BVZRtv','140jiyfpp','findOrCreate','7gerzhf','ERR_NO_COMPANY_FOUND','2488149kyILqN','77UlPcfE','281000sxBoTy','../../models/Setting','2701500MrnGzb','campaignsEnabled'];a378_0x49e2=function(){return _0x465e02;};return a378_0x49e2();}function a378_0x3d38(_0x31c011,_0x2e2f51){const _0x49e29c=a378_0x49e2();return a378_0x3d38=function(_0x3d38b1,_0x5d1ba4){_0x3d38b1=_0x3d38b1-0x109;let _0x78a3fc=_0x49e29c[_0x3d38b1];return _0x78a3fc;},a378_0x3d38(_0x31c011,_0x2e2f51);}var __importDefault=this&&this['__importDefault']||function(_0x4376fd){const _0x201fe3=a378_0x3d38;return _0x4376fd&&_0x4376fd[_0x201fe3(0x110)]?_0x4376fd:{'default':_0x4376fd};};Object['defineProperty'](exports,a378_0x4cd196(0x110),{'value':!![]});const AppError_1=__importDefault(require(a378_0x4cd196(0x112))),Company_1=__importDefault(require('../../models/Company')),Setting_1=__importDefault(require(a378_0x4cd196(0x11b))),UpdateCompanyService=async _0x1f4871=>{const _0x9cdd95=a378_0x4cd196,_0x1f533c=await Company_1[_0x9cdd95(0x10a)][_0x9cdd95(0x10d)](_0x1f4871['id']),{name:_0x196937,phone:_0xd6dafb,email:_0x9fb681,status:_0x5cc499,planId:_0x578956,campaignsEnabled:_0x229abc,dueDate:_0x36e6e7,recurrence:_0x4ace0c,document:_0x2d24,paymentMethod:_0x366372}=_0x1f4871;if(!_0x1f533c)throw new AppError_1['default'](_0x9cdd95(0x117),0x194);await _0x1f533c[_0x9cdd95(0x10e)]({'name':_0x196937,'phone':_0xd6dafb,'email':_0x9fb681,'status':_0x5cc499,'planId':_0x578956,'dueDate':_0x36e6e7,'recurrence':_0x4ace0c,'document':_0x2d24,'paymentMethod':_0x366372});if(_0x1f4871[_0x9cdd95(0x109)]!==undefined){const [_0x173e66,_0x4ad5b7]=await Setting_1[_0x9cdd95(0x10a)][_0x9cdd95(0x115)]({'where':{'companyId':_0x1f533c['id'],'key':_0x9cdd95(0x109)},'defaults':{'companyId':_0x1f533c['id'],'key':_0x9cdd95(0x109),'value':''+_0x229abc}});!_0x4ad5b7&&await _0x173e66[_0x9cdd95(0x10e)]({'value':''+_0x229abc});}return _0x1f533c;};exports[a378_0x4cd196(0x10a)]=UpdateCompanyService;