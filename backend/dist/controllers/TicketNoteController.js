'use strict';const a37_0x4ad98f=a37_0x1a8f;function a37_0x1a8f(_0x14e68a,_0x32deb5){const _0x4e20d6=a37_0x4e20();return a37_0x1a8f=function(_0x1a8f63,_0x105726){_0x1a8f63=_0x1a8f63-0x1b1;let _0xd9137e=_0x4e20d6[_0x1a8f63];return _0xd9137e;},a37_0x1a8f(_0x14e68a,_0x32deb5);}(function(_0x6bbe96,_0x419c7d){const _0x4ac7ab=a37_0x1a8f,_0x32aa58=_0x6bbe96();while(!![]){try{const _0x43f9f5=-parseInt(_0x4ac7ab(0x1d8))/0x1*(-parseInt(_0x4ac7ab(0x1cf))/0x2)+-parseInt(_0x4ac7ab(0x1cc))/0x3+parseInt(_0x4ac7ab(0x1d9))/0x4+-parseInt(_0x4ac7ab(0x1b8))/0x5*(parseInt(_0x4ac7ab(0x1b7))/0x6)+-parseInt(_0x4ac7ab(0x1b6))/0x7+parseInt(_0x4ac7ab(0x1db))/0x8*(parseInt(_0x4ac7ab(0x1c9))/0x9)+parseInt(_0x4ac7ab(0x1b9))/0xa;if(_0x43f9f5===_0x419c7d)break;else _0x32aa58['push'](_0x32aa58['shift']());}catch(_0x2b7654){_0x32aa58['push'](_0x32aa58['shift']());}}}(a37_0x4e20,0x41389));var __createBinding=this&&this[a37_0x4ad98f(0x1d3)]||(Object['create']?function(_0x2b4c4c,_0x200616,_0x201206,_0x459d90){const _0x4f5e4d=a37_0x4ad98f;if(_0x459d90===undefined)_0x459d90=_0x201206;var _0x152883=Object['getOwnPropertyDescriptor'](_0x200616,_0x201206);(!_0x152883||(_0x4f5e4d(0x1d5)in _0x152883?!_0x200616[_0x4f5e4d(0x1d2)]:_0x152883['writable']||_0x152883[_0x4f5e4d(0x1cd)]))&&(_0x152883={'enumerable':!![],'get':function(){return _0x200616[_0x201206];}}),Object['defineProperty'](_0x2b4c4c,_0x459d90,_0x152883);}:function(_0x2810c5,_0x476b6f,_0x3e1f12,_0x4642fa){if(_0x4642fa===undefined)_0x4642fa=_0x3e1f12;_0x2810c5[_0x4642fa]=_0x476b6f[_0x3e1f12];}),__setModuleDefault=this&&this[a37_0x4ad98f(0x1dc)]||(Object[a37_0x4ad98f(0x1c5)]?function(_0x31647a,_0x416ebd){const _0x1affc0=a37_0x4ad98f;Object[_0x1affc0(0x1c7)](_0x31647a,_0x1affc0(0x1dd),{'enumerable':!![],'value':_0x416ebd});}:function(_0x16ecf0,_0x527674){const _0x4421d2=a37_0x4ad98f;_0x16ecf0[_0x4421d2(0x1dd)]=_0x527674;}),__importStar=this&&this['__importStar']||function(_0xd74714){const _0x1938e9=a37_0x4ad98f;if(_0xd74714&&_0xd74714['__esModule'])return _0xd74714;var _0x5cb1e5={};if(_0xd74714!=null){for(var _0x20d4ef in _0xd74714)if(_0x20d4ef!=='default'&&Object['prototype']['hasOwnProperty'][_0x1938e9(0x1bd)](_0xd74714,_0x20d4ef))__createBinding(_0x5cb1e5,_0xd74714,_0x20d4ef);}return __setModuleDefault(_0x5cb1e5,_0xd74714),_0x5cb1e5;},__importDefault=this&&this[a37_0x4ad98f(0x1ba)]||function(_0x3cec76){return _0x3cec76&&_0x3cec76['__esModule']?_0x3cec76:{'default':_0x3cec76};};Object[a37_0x4ad98f(0x1c7)](exports,a37_0x4ad98f(0x1d2),{'value':!![]}),exports[a37_0x4ad98f(0x1ca)]=exports[a37_0x4ad98f(0x1c0)]=exports[a37_0x4ad98f(0x1de)]=exports[a37_0x4ad98f(0x1bc)]=exports[a37_0x4ad98f(0x1d1)]=exports[a37_0x4ad98f(0x1be)]=exports[a37_0x4ad98f(0x1c8)]=void 0x0;const Yup=__importStar(require('yup')),AppError_1=__importDefault(require(a37_0x4ad98f(0x1d4))),ListTicketNotesService_1=__importDefault(require(a37_0x4ad98f(0x1da))),CreateTicketNoteService_1=__importDefault(require(a37_0x4ad98f(0x1b4))),UpdateTicketNoteService_1=__importDefault(require('../services/TicketNoteService/UpdateTicketNoteService')),ShowTicketNoteService_1=__importDefault(require('../services/TicketNoteService/ShowTicketNoteService')),FindAllTicketNotesService_1=__importDefault(require(a37_0x4ad98f(0x1b3))),DeleteTicketNoteService_1=__importDefault(require(a37_0x4ad98f(0x1d6))),FindNotesByContactIdAndTicketId_1=__importDefault(require(a37_0x4ad98f(0x1ce))),index=async(_0x35b3f8,_0xaa39d6)=>{const _0x27219e=a37_0x4ad98f,{searchParam:_0x51b75c,pageNumber:_0x527200}=_0x35b3f8[_0x27219e(0x1d7)],{ticketNotes:_0x17f83c,count:_0x4bb396,hasMore:_0x52a950}=await(0x0,ListTicketNotesService_1[_0x27219e(0x1dd)])({'searchParam':_0x51b75c,'pageNumber':_0x527200});return _0xaa39d6[_0x27219e(0x1c4)]({'ticketNotes':_0x17f83c,'count':_0x4bb396,'hasMore':_0x52a950});};exports[a37_0x4ad98f(0x1c8)]=index;const list=async(_0xcbd1d8,_0x389768)=>{const _0x22a3f1=a37_0x4ad98f,_0x3387d3=await(0x0,FindAllTicketNotesService_1[_0x22a3f1(0x1dd)])();return _0x389768['status'](0xc8)[_0x22a3f1(0x1c4)](_0x3387d3);};exports[a37_0x4ad98f(0x1be)]=list;const store=async(_0xe6a19c,_0xc041e7)=>{const _0x22d50c=a37_0x4ad98f,_0x3c7bb6=_0xe6a19c[_0x22d50c(0x1b1)],{id:_0x29aedd}=_0xe6a19c[_0x22d50c(0x1df)],_0x11e89f=Yup[_0x22d50c(0x1d0)]()[_0x22d50c(0x1e0)]({'note':Yup[_0x22d50c(0x1cb)]()[_0x22d50c(0x1c6)]()});try{await _0x11e89f[_0x22d50c(0x1bf)](_0x3c7bb6);}catch(_0x427cc1){throw new AppError_1[(_0x22d50c(0x1dd))](_0x427cc1[_0x22d50c(0x1c3)]);}const _0x466ee8=await(0x0,CreateTicketNoteService_1[_0x22d50c(0x1dd)])({..._0x3c7bb6,'userId':_0x29aedd});return _0xc041e7[_0x22d50c(0x1b5)](0xc8)['json'](_0x466ee8);};function a37_0x4e20(){const _0x619bdd=['23EzVqIf','1991332cbBotf','../services/TicketNoteService/ListTicketNotesService','424pCJQdd','__setModuleDefault','default','update','user','shape','body','Observação\x20removida','../services/TicketNoteService/FindAllTicketNotesService','../services/TicketNoteService/CreateTicketNoteService','status','1918917qBfsBd','1890942xTxHHu','5jxTpIc','5275410eDCDtP','__importDefault','admin','show','call','list','validate','remove','profile','ERR_NO_PERMISSION','message','json','create','required','defineProperty','index','40815CnoPCV','findFilteredList','string','1250244JbjcQD','configurable','../services/TicketNoteService/FindNotesByContactIdAndTicketId','648PulFDo','object','store','__esModule','__createBinding','../errors/AppError','get','../services/TicketNoteService/DeleteTicketNoteService','query'];a37_0x4e20=function(){return _0x619bdd;};return a37_0x4e20();}exports[a37_0x4ad98f(0x1d1)]=store;const show=async(_0x4df672,_0x365da1)=>{const _0x1efc76=a37_0x4ad98f,{id:_0x434e08}=_0x4df672['params'],_0x49fa75=await(0x0,ShowTicketNoteService_1[_0x1efc76(0x1dd)])(_0x434e08);return _0x365da1[_0x1efc76(0x1b5)](0xc8)['json'](_0x49fa75);};exports[a37_0x4ad98f(0x1bc)]=show;const update=async(_0x304130,_0x3b6da0)=>{const _0x47ebe1=a37_0x4ad98f,_0x3bdc38=_0x304130[_0x47ebe1(0x1b1)],_0x4a16d2=Yup['object']()['shape']({'note':Yup[_0x47ebe1(0x1cb)]()});try{await _0x4a16d2[_0x47ebe1(0x1bf)](_0x3bdc38);}catch(_0x351edf){throw new AppError_1[(_0x47ebe1(0x1dd))](_0x351edf[_0x47ebe1(0x1c3)]);}const _0x29b79c=await(0x0,UpdateTicketNoteService_1[_0x47ebe1(0x1dd)])(_0x3bdc38);return _0x3b6da0[_0x47ebe1(0x1b5)](0xc8)['json'](_0x29b79c);};exports[a37_0x4ad98f(0x1de)]=update;const remove=async(_0x4f2e11,_0x478e64)=>{const _0x19338a=a37_0x4ad98f,{id:_0x45788b}=_0x4f2e11['params'];if(_0x4f2e11[_0x19338a(0x1df)][_0x19338a(0x1c1)]!==_0x19338a(0x1bb))throw new AppError_1['default'](_0x19338a(0x1c2),0x193);return await(0x0,DeleteTicketNoteService_1[_0x19338a(0x1dd)])(_0x45788b),_0x478e64['status'](0xc8)['json']({'message':_0x19338a(0x1b2)});};exports['remove']=remove;const findFilteredList=async(_0x225a7f,_0x113c6e)=>{const _0x1da15b=a37_0x4ad98f;try{const {contactId:_0x3d16ff,ticketId:_0x1d729a}=_0x225a7f['query'],_0x144fcf=await(0x0,FindNotesByContactIdAndTicketId_1[_0x1da15b(0x1dd)])({'contactId':_0x3d16ff,'ticketId':_0x1d729a});return _0x113c6e[_0x1da15b(0x1b5)](0xc8)[_0x1da15b(0x1c4)](_0x144fcf);}catch(_0x1bd07a){return _0x113c6e[_0x1da15b(0x1b5)](0x1f4)[_0x1da15b(0x1c4)]({'message':_0x1bd07a});}};exports['findFilteredList']=findFilteredList;