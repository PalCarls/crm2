'use strict';function a399_0x3ced(_0x5c7f7a,_0x34360d){const _0x593765=a399_0x5937();return a399_0x3ced=function(_0x3ced98,_0x545a21){_0x3ced98=_0x3ced98-0x8d;let _0x233924=_0x593765[_0x3ced98];return _0x233924;},a399_0x3ced(_0x5c7f7a,_0x34360d);}const a399_0x23af53=a399_0x3ced;(function(_0x4dd341,_0x16e1aa){const _0x11caf2=a399_0x3ced,_0x1b9ea0=_0x4dd341();while(!![]){try{const _0x543b92=parseInt(_0x11caf2(0xa2))/0x1*(-parseInt(_0x11caf2(0x93))/0x2)+-parseInt(_0x11caf2(0x96))/0x3*(parseInt(_0x11caf2(0x9e))/0x4)+-parseInt(_0x11caf2(0x9c))/0x5*(parseInt(_0x11caf2(0x8d))/0x6)+parseInt(_0x11caf2(0x8f))/0x7*(parseInt(_0x11caf2(0x97))/0x8)+parseInt(_0x11caf2(0x91))/0x9+-parseInt(_0x11caf2(0x9a))/0xa*(-parseInt(_0x11caf2(0xa0))/0xb)+-parseInt(_0x11caf2(0x92))/0xc*(-parseInt(_0x11caf2(0x9d))/0xd);if(_0x543b92===_0x16e1aa)break;else _0x1b9ea0['push'](_0x1b9ea0['shift']());}catch(_0x3d21b0){_0x1b9ea0['push'](_0x1b9ea0['shift']());}}}(a399_0x5937,0x6523b));function a399_0x5937(){const _0xc0dca=['111363aiOeGo','findAll','3501351wLgIZx','12HPsVGU','209112rZfiot','company','ASC','14496rlOJzD','352CLmNLQ','__esModule','default','10gOioOl','__importDefault','10BEgFxx','3273413GWMNpz','424FDCycC','name','1167639CNYJGQ','../../models/ContactListItem','1ZrGvZW','1247910mlGqsD','defineProperty'];a399_0x5937=function(){return _0xc0dca;};return a399_0x5937();}var __importDefault=this&&this[a399_0x23af53(0x9b)]||function(_0x9a623f){const _0x41bef9=a399_0x23af53;return _0x9a623f&&_0x9a623f[_0x41bef9(0x98)]?_0x9a623f:{'default':_0x9a623f};};Object[a399_0x23af53(0x8e)](exports,a399_0x23af53(0x98),{'value':!![]});const ContactListItem_1=__importDefault(require(a399_0x23af53(0xa1))),Company_1=__importDefault(require('../../models/Company')),FindService=async({companyId:_0x2631ad,contactListId:_0x23f669})=>{const _0xc2b620=a399_0x23af53;let _0x4fc7d4={'companyId':_0x2631ad};_0x23f669&&(_0x4fc7d4={..._0x4fc7d4,'contactListId':_0x23f669});const _0x4d96ea=await ContactListItem_1[_0xc2b620(0x99)][_0xc2b620(0x90)]({'where':_0x4fc7d4,'include':[{'model':Company_1['default'],'as':_0xc2b620(0x94),'attributes':['id','name']}],'order':[[_0xc2b620(0x9f),_0xc2b620(0x95)]]});return _0x4d96ea;};exports['default']=FindService;