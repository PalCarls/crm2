'use strict';const a502_0x43ba87=a502_0xfb13;(function(_0x476c33,_0x1744d2){const _0x3a0886=a502_0xfb13,_0x29f2e4=_0x476c33();while(!![]){try{const _0x3bc8eb=-parseInt(_0x3a0886(0xe6))/0x1+-parseInt(_0x3a0886(0x102))/0x2+-parseInt(_0x3a0886(0xfe))/0x3*(parseInt(_0x3a0886(0xf4))/0x4)+parseInt(_0x3a0886(0xdd))/0x5*(-parseInt(_0x3a0886(0xea))/0x6)+-parseInt(_0x3a0886(0xed))/0x7+parseInt(_0x3a0886(0xe0))/0x8*(-parseInt(_0x3a0886(0x104))/0x9)+-parseInt(_0x3a0886(0xf8))/0xa*(-parseInt(_0x3a0886(0xf9))/0xb);if(_0x3bc8eb===_0x1744d2)break;else _0x29f2e4['push'](_0x29f2e4['shift']());}catch(_0x55362c){_0x29f2e4['push'](_0x29f2e4['shift']());}}}(a502_0x7ad9,0x5990f));var __importDefault=this&&this['__importDefault']||function(_0x3c642a){return _0x3c642a&&_0x3c642a['__esModule']?_0x3c642a:{'default':_0x3c642a};};function a502_0xfb13(_0x5b2694,_0x423aec){const _0x7ad9ca=a502_0x7ad9();return a502_0xfb13=function(_0xfb139d,_0x3d3347){_0xfb139d=_0xfb139d-0xdc;let _0x16db84=_0x7ad9ca[_0xfb139d];return _0x16db84;},a502_0xfb13(_0x5b2694,_0x423aec);}Object[a502_0x43ba87(0xeb)](exports,a502_0x43ba87(0x100),{'value':!![]});const socket_1=require(a502_0x43ba87(0xe5)),Contact_1=__importDefault(require(a502_0x43ba87(0xe2))),Message_1=__importDefault(require('../../models/Message')),Queue_1=__importDefault(require('../../models/Queue')),Ticket_1=__importDefault(require(a502_0x43ba87(0xdc))),User_1=__importDefault(require(a502_0x43ba87(0xf2))),Whatsapp_1=__importDefault(require(a502_0x43ba87(0xf0))),CreateMessageService=async({messageData:_0x101b0b,companyId:_0x5b3a95})=>{const _0xda7f92=a502_0x43ba87;await Message_1[_0xda7f92(0xe3)]['upsert']({..._0x101b0b,'companyId':_0x5b3a95});const _0x28a909=await Message_1[_0xda7f92(0xe3)][_0xda7f92(0xf1)]({'where':{'wid':_0x101b0b[_0xda7f92(0xef)],'companyId':_0x5b3a95},'include':[_0xda7f92(0xf6),{'model':Ticket_1[_0xda7f92(0xe3)],'as':_0xda7f92(0x103),'include':[{'model':Contact_1[_0xda7f92(0xe3)],'attributes':['id',_0xda7f92(0xe8),_0xda7f92(0xde),_0xda7f92(0x101)],'include':[_0xda7f92(0xfc),'tags']},{'model':Queue_1[_0xda7f92(0xe3)],'attributes':['id',_0xda7f92(0xe8),_0xda7f92(0xe1)]},{'model':Whatsapp_1[_0xda7f92(0xe3)],'attributes':['id','name']},{'model':User_1[_0xda7f92(0xe3)],'attributes':['id',_0xda7f92(0xe8)]}]},{'model':Message_1['default'],'as':'quotedMsg','include':[_0xda7f92(0xf6)]}]});_0x28a909[_0xda7f92(0x103)]['queueId']!==null&&_0x28a909[_0xda7f92(0xf7)]===null&&await _0x28a909[_0xda7f92(0xe7)]({'queueId':_0x28a909[_0xda7f92(0x103)]['queueId']});_0x28a909[_0xda7f92(0xfa)]&&await _0x28a909[_0xda7f92(0xe7)]({'wid':_0xda7f92(0xee)+_0x28a909['id']});if(!_0x28a909)throw new Error(_0xda7f92(0xfd));const _0x13daca=(0x0,socket_1[_0xda7f92(0xec)])();return!_0x101b0b?.['ticketImported']&&_0x13daca['to'](_0x28a909[_0xda7f92(0xf3)]['toString']())['to'](_0x28a909[_0xda7f92(0x103)][_0xda7f92(0xfb)])['to'](_0xda7f92(0xf5))[_0xda7f92(0xdf)](_0xda7f92(0xe4)+_0x5b3a95+_0xda7f92(0xff),{'action':_0xda7f92(0xe9),'message':_0x28a909,'ticket':_0x28a909[_0xda7f92(0x103)],'contact':_0x28a909['ticket']['contact']}),_0x28a909;};exports['default']=CreateMessageService;function a502_0x7ad9(){const _0xb84704=['findOne','../../models/User','ticketId','16916rRodKe','notification','contact','queueId','660oqnMmL','376211HoOmdm','isPrivate','status','extraInfo','ERR_CREATING_MESSAGE','105QAAfBa','-appMessage','__esModule','urlPicture','801150klSbVx','ticket','19269FzwgZZ','../../models/Ticket','5uaACzh','companyId','emit','1592sgWpmu','color','../../models/Contact','default','company-','../../libs/socket','286980tGcxxb','update','name','create','251418exSgRK','defineProperty','getIO','4108097GzUMep','PVT','wid','../../models/Whatsapp'];a502_0x7ad9=function(){return _0xb84704;};return a502_0x7ad9();}