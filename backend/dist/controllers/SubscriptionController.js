<<<<<<< HEAD
'use strict';const a34_0x3f9513=a34_0x432d;(function(_0x439dbe,_0x2bef80){const _0xd92a0a=a34_0x432d,_0x314018=_0x439dbe();while(!![]){try{const _0x3a2895=-parseInt(_0xd92a0a(0x1ab))/0x1*(parseInt(_0xd92a0a(0x19c))/0x2)+parseInt(_0xd92a0a(0x1a2))/0x3+-parseInt(_0xd92a0a(0x1cb))/0x4+parseInt(_0xd92a0a(0x1df))/0x5+parseInt(_0xd92a0a(0x1c5))/0x6*(-parseInt(_0xd92a0a(0x1bb))/0x7)+-parseInt(_0xd92a0a(0x1b0))/0x8+parseInt(_0xd92a0a(0x1b6))/0x9;if(_0x3a2895===_0x2bef80)break;else _0x314018['push'](_0x314018['shift']());}catch(_0x4122bd){_0x314018['push'](_0x314018['shift']());}}}(a34_0x46d3,0x8d7ab));function a34_0x46d3(){const _0x51e9a2=['currency','29469042qXnpZL','createSubscription','Validation\x20fails','writable','pix','5247193awXsZx','companyId','__esModule','amount','shape','create','length','document','string','configurable','6pGvQIL','__setModuleDefault','required','#Fatura:','status','__createBinding','2707216NVvEGZ','object','findOne','emit','defineProperty','user','log','prototype','pixDetailCharge','format','../libs/socket','split','NumberFormat','webhook','getSubscriptions','../models/Company','replace','loc','env','__importDefault','1266045mlCJCs','forEach','cpf','findByPk','setDate','../errors/AppError','body','getIO','Company\x20not\x20found','en-US','3562CDbdXZ','pixGenerateQRCode','name','isValid','__importStar','getOwnPropertyDescriptor','664890IrzZuL','update','../config/Gn','index','default','json','gn-api-sdk-typescript','pixCreateImmediateCharge','reload','339qMgmXW','CONCLUIDA','createWebhook','-payment','pixDeleteWebhook','9116128eTvlSO','call','txid','params','planId'];a34_0x46d3=function(){return _0x51e9a2;};return a34_0x46d3();}var __createBinding=this&&this[a34_0x3f9513(0x1ca)]||(Object[a34_0x3f9513(0x1c0)]?function(_0x1c69da,_0x93aeab,_0x3c04b6,_0x1a945f){const _0x57de73=a34_0x3f9513;if(_0x1a945f===undefined)_0x1a945f=_0x3c04b6;var _0x4810ff=Object[_0x57de73(0x1a1)](_0x93aeab,_0x3c04b6);(!_0x4810ff||('get'in _0x4810ff?!_0x93aeab['__esModule']:_0x4810ff[_0x57de73(0x1b9)]||_0x4810ff[_0x57de73(0x1c4)]))&&(_0x4810ff={'enumerable':!![],'get':function(){return _0x93aeab[_0x3c04b6];}}),Object[_0x57de73(0x1cf)](_0x1c69da,_0x1a945f,_0x4810ff);}:function(_0x432137,_0x3fcfa7,_0x1a73d9,_0x5b218e){if(_0x5b218e===undefined)_0x5b218e=_0x1a73d9;_0x432137[_0x5b218e]=_0x3fcfa7[_0x1a73d9];}),__setModuleDefault=this&&this[a34_0x3f9513(0x1c6)]||(Object[a34_0x3f9513(0x1c0)]?function(_0x781fa3,_0x35960e){const _0x11de4c=a34_0x3f9513;Object[_0x11de4c(0x1cf)](_0x781fa3,_0x11de4c(0x1a6),{'enumerable':!![],'value':_0x35960e});}:function(_0x5c5f59,_0x448767){const _0x12a166=a34_0x3f9513;_0x5c5f59[_0x12a166(0x1a6)]=_0x448767;}),__importStar=this&&this[a34_0x3f9513(0x1a0)]||function(_0x29e96d){const _0x165ce8=a34_0x3f9513;if(_0x29e96d&&_0x29e96d['__esModule'])return _0x29e96d;var _0x841a7e={};if(_0x29e96d!=null){for(var _0x2c9747 in _0x29e96d)if(_0x2c9747!==_0x165ce8(0x1a6)&&Object[_0x165ce8(0x1d2)]['hasOwnProperty'][_0x165ce8(0x1b1)](_0x29e96d,_0x2c9747))__createBinding(_0x841a7e,_0x29e96d,_0x2c9747);}return __setModuleDefault(_0x841a7e,_0x29e96d),_0x841a7e;},__importDefault=this&&this[a34_0x3f9513(0x1de)]||function(_0x4a6ac5){const _0x552934=a34_0x3f9513;return _0x4a6ac5&&_0x4a6ac5[_0x552934(0x1bd)]?_0x4a6ac5:{'default':_0x4a6ac5};};Object[a34_0x3f9513(0x1cf)](exports,'__esModule',{'value':!![]}),exports[a34_0x3f9513(0x1d8)]=exports['deleteWebhook']=exports[a34_0x3f9513(0x1ad)]=exports[a34_0x3f9513(0x1b7)]=exports['index']=void 0x0;const Yup=__importStar(require('yup')),gn_api_sdk_typescript_1=__importDefault(require(a34_0x3f9513(0x1a8))),AppError_1=__importDefault(require(a34_0x3f9513(0x1e4))),Gn_1=__importDefault(require(a34_0x3f9513(0x1a4))),Company_1=__importDefault(require(a34_0x3f9513(0x1da))),Invoices_1=__importDefault(require('../models/Invoices')),socket_1=require(a34_0x3f9513(0x1d5)),Plan_1=__importDefault(require('../models/Plan')),index=async(_0x26a550,_0x3fd486)=>{const _0x4a4550=a34_0x3f9513,_0xc52a42=new gn_api_sdk_typescript_1['default'](Gn_1['default']);return _0x3fd486['json'](_0xc52a42[_0x4a4550(0x1d9)]());};exports[a34_0x3f9513(0x1a5)]=index;const createSubscription=async(_0x1ec1b4,_0x4ccd97)=>{const _0x26ebad=a34_0x3f9513,_0x4613fe=new gn_api_sdk_typescript_1[(_0x26ebad(0x1a6))](Gn_1['default']),{companyId:_0x1d0ab6}=_0x1ec1b4[_0x26ebad(0x1d0)],_0x42185c=Yup[_0x26ebad(0x1cc)]()['shape']({'price':Yup[_0x26ebad(0x1c3)]()['required'](),'users':Yup['string']()[_0x26ebad(0x1c7)](),'plan':Yup[_0x26ebad(0x1c3)]()[_0x26ebad(0x1c7)]()});if(!await _0x42185c['isValid'](_0x1ec1b4['body']))throw new AppError_1[(_0x26ebad(0x1a6))]('Validation\x20fails',0x190);const _0x378e18=new Intl[(_0x26ebad(0x1d7))](_0x26ebad(0x19b),{'style':_0x26ebad(0x1b5),'currency':'USD'}),_0x48578d=await Company_1[_0x26ebad(0x1a6)][_0x26ebad(0x1cd)]({'where':{'id':_0x1d0ab6}}),_0x368256=await Plan_1[_0x26ebad(0x1a6)][_0x26ebad(0x1cd)]({'where':{'id':_0x48578d[_0x26ebad(0x1b4)]}}),{invoiceId:_0x5c14d8}=_0x1ec1b4[_0x26ebad(0x198)],_0x340f65=_0x368256[_0x26ebad(0x1be)],_0x4f6eca=_0x378e18[_0x26ebad(0x1d4)](_0x340f65)['replace']('$',''),_0xf9d0e4={'nome':_0x48578d[_0x26ebad(0x19e)]},_0x7ccfcc=_0x48578d[_0x26ebad(0x1c2)]['replace'](/\D/g,'');_0x7ccfcc[_0x26ebad(0x1c1)]===0xb?_0xf9d0e4[_0x26ebad(0x1e1)]=_0x7ccfcc:_0xf9d0e4['cnpj']=_0x7ccfcc;const _0x1202db={'calendario':{'expiracao':0xe10},'devedor':{..._0xf9d0e4},'valor':{'original':_0x4f6eca},'chave':process[_0x26ebad(0x1dd)]['GERENCIANET_CHAVEPIX'],'solicitacaoPagador':_0x26ebad(0x1c8)+_0x5c14d8};try{const _0x49b0b4=await _0x4613fe[_0x26ebad(0x1a9)](null,_0x1202db),_0x4fe1ac=await _0x4613fe[_0x26ebad(0x19d)]({'id':_0x49b0b4[_0x26ebad(0x1dc)]['id']});if(!_0x48578d)throw new AppError_1[(_0x26ebad(0x1a6))](_0x26ebad(0x19a),0x194);return _0x4ccd97[_0x26ebad(0x1a7)]({..._0x49b0b4,'qrcode':_0x4fe1ac});}catch(_0xbd1b8a){console['log']('error_subscription',_0xbd1b8a);throw new AppError_1['default'](_0x26ebad(0x1b8),0x190);}};function a34_0x432d(_0x245cfa,_0x5ad54e){const _0x46d309=a34_0x46d3();return a34_0x432d=function(_0x432dd,_0x55111a){_0x432dd=_0x432dd-0x198;let _0x213c30=_0x46d309[_0x432dd];return _0x213c30;},a34_0x432d(_0x245cfa,_0x5ad54e);}exports['createSubscription']=createSubscription;const createWebhook=async(_0x38a8a6,_0x555ff1)=>{const _0x28e18c=a34_0x3f9513,_0x5dd21c=Yup[_0x28e18c(0x1cc)]()['shape']({'chave':Yup[_0x28e18c(0x1c3)]()[_0x28e18c(0x1c7)](),'url':Yup[_0x28e18c(0x1c3)]()['required']()});if(!await _0x5dd21c[_0x28e18c(0x19f)](_0x38a8a6[_0x28e18c(0x198)]))throw new AppError_1[(_0x28e18c(0x1a6))](_0x28e18c(0x1b8),0x190);const {chave:_0x288761,url:_0x4fc2fe}=_0x38a8a6[_0x28e18c(0x198)],_0x3c6981={'webhookUrl':_0x4fc2fe},_0x4b5ffb={'chave':_0x288761};try{const _0x58b5ad=new gn_api_sdk_typescript_1['default'](Gn_1['default']),_0x5962e1=await _0x58b5ad['pixConfigWebhook'](_0x4b5ffb,_0x3c6981);return _0x555ff1[_0x28e18c(0x1a7)](_0x5962e1);}catch(_0x55446c){console[_0x28e18c(0x1d1)](_0x55446c);}};exports[a34_0x3f9513(0x1ad)]=createWebhook;const deleteWebhook=async(_0x19eac3,_0x32a3e4)=>{const _0x4fe33a=a34_0x3f9513,_0x105398=Yup[_0x4fe33a(0x1cc)]()[_0x4fe33a(0x1bf)]({'chave':Yup[_0x4fe33a(0x1c3)]()[_0x4fe33a(0x1c7)]()});if(!await _0x105398[_0x4fe33a(0x19f)](_0x19eac3['body']))throw new AppError_1[(_0x4fe33a(0x1a6))](_0x4fe33a(0x1b8),0x190);const {chave:_0x277618}=_0x19eac3[_0x4fe33a(0x198)],_0x39882b={'chave':_0x277618},_0xa353ea=new gn_api_sdk_typescript_1['default'](Gn_1[_0x4fe33a(0x1a6)]),_0x40abc9=await _0xa353ea[_0x4fe33a(0x1af)](_0x39882b);return _0x32a3e4['json'](_0x40abc9);};exports['deleteWebhook']=deleteWebhook;const webhook=async(_0x1fc50f,_0x2b5132)=>{const _0x193d9a=a34_0x3f9513,{type:_0x238b3e}=_0x1fc50f[_0x193d9a(0x1b3)],{evento:_0x5af938}=_0x1fc50f[_0x193d9a(0x198)];if(_0x5af938==='teste_webhook')return _0x2b5132['json']({'ok':!![]});if(_0x1fc50f[_0x193d9a(0x198)][_0x193d9a(0x1ba)]){const _0x3e60b3=new gn_api_sdk_typescript_1['default'](Gn_1[_0x193d9a(0x1a6)]);_0x1fc50f[_0x193d9a(0x198)][_0x193d9a(0x1ba)][_0x193d9a(0x1e0)](async _0x8c878d=>{const _0xce8d55=_0x193d9a,_0x144b34=await _0x3e60b3[_0xce8d55(0x1d3)]({'txid':_0x8c878d[_0xce8d55(0x1b2)]});if(_0x144b34[_0xce8d55(0x1c9)]===_0xce8d55(0x1ac)){const {solicitacaoPagador:_0x18a066}=_0x144b34,_0x3aee1c=_0x18a066[_0xce8d55(0x1db)](_0xce8d55(0x1c8),''),_0xc1a7a=await Invoices_1['default'][_0xce8d55(0x1e2)](_0x3aee1c),_0x100171=_0xc1a7a[_0xce8d55(0x1bc)],_0x570888=await Company_1[_0xce8d55(0x1a6)][_0xce8d55(0x1e2)](_0x100171),_0x349c6a=new Date(_0x570888['dueDate']);_0x349c6a[_0xce8d55(0x1e3)](_0x349c6a['getDate']()+0x1e);const _0xa26b21=_0x349c6a['toISOString']()[_0xce8d55(0x1d6)]('T')[0x0];if(_0x570888){await _0x570888[_0xce8d55(0x1a3)]({'dueDate':_0xa26b21});const _0x5374de=await _0xc1a7a[_0xce8d55(0x1a3)]({'id':_0x3aee1c,'status':'paid'});await _0x570888[_0xce8d55(0x1aa)]();const _0x136497=(0x0,socket_1[_0xce8d55(0x199)])(),_0x4dbed0=await Company_1[_0xce8d55(0x1a6)][_0xce8d55(0x1cd)]({'where':{'id':_0x100171}});_0x136497[_0xce8d55(0x1ce)]('company-'+_0x100171+_0xce8d55(0x1ae),{'action':_0x144b34[_0xce8d55(0x1c9)],'company':_0x4dbed0});}}});}return _0x2b5132[_0x193d9a(0x1a7)]({'ok':!![]});};exports[a34_0x3f9513(0x1d8)]=webhook;
=======
'use strict';const a34_0x38d167=a34_0x26fc;(function(_0x504bd3,_0x2e8426){const _0x3fee60=a34_0x26fc,_0x1d8e9b=_0x504bd3();while(!![]){try{const _0x62c3ff=-parseInt(_0x3fee60(0x18e))/0x1+-parseInt(_0x3fee60(0x1cb))/0x2+parseInt(_0x3fee60(0x1cc))/0x3+-parseInt(_0x3fee60(0x1ae))/0x4*(-parseInt(_0x3fee60(0x1d4))/0x5)+parseInt(_0x3fee60(0x1a8))/0x6+parseInt(_0x3fee60(0x1ac))/0x7*(parseInt(_0x3fee60(0x1d6))/0x8)+parseInt(_0x3fee60(0x1b5))/0x9*(-parseInt(_0x3fee60(0x187))/0xa);if(_0x62c3ff===_0x2e8426)break;else _0x1d8e9b['push'](_0x1d8e9b['shift']());}catch(_0xc72b7b){_0x1d8e9b['push'](_0x1d8e9b['shift']());}}}(a34_0xb5e2,0x4ec6b));var __createBinding=this&&this[a34_0x38d167(0x197)]||(Object[a34_0x38d167(0x1b8)]?function(_0x375592,_0x237490,_0x3887fc,_0x29f482){const _0x42b0be=a34_0x38d167;if(_0x29f482===undefined)_0x29f482=_0x3887fc;var _0x3c0a6c=Object['getOwnPropertyDescriptor'](_0x237490,_0x3887fc);(!_0x3c0a6c||(_0x42b0be(0x1a5)in _0x3c0a6c?!_0x237490[_0x42b0be(0x193)]:_0x3c0a6c[_0x42b0be(0x1c3)]||_0x3c0a6c[_0x42b0be(0x1a9)]))&&(_0x3c0a6c={'enumerable':!![],'get':function(){return _0x237490[_0x3887fc];}}),Object['defineProperty'](_0x375592,_0x29f482,_0x3c0a6c);}:function(_0x54536e,_0x412408,_0x80d270,_0x324f1d){if(_0x324f1d===undefined)_0x324f1d=_0x80d270;_0x54536e[_0x324f1d]=_0x412408[_0x80d270];}),__setModuleDefault=this&&this[a34_0x38d167(0x195)]||(Object['create']?function(_0x818903,_0xfc4e2e){const _0x598450=a34_0x38d167;Object[_0x598450(0x1b7)](_0x818903,_0x598450(0x1c1),{'enumerable':!![],'value':_0xfc4e2e});}:function(_0x3256b9,_0x3490c4){const _0x3d3253=a34_0x38d167;_0x3256b9[_0x3d3253(0x1c1)]=_0x3490c4;}),__importStar=this&&this[a34_0x38d167(0x1d8)]||function(_0x1c793e){const _0x461a8c=a34_0x38d167;if(_0x1c793e&&_0x1c793e[_0x461a8c(0x193)])return _0x1c793e;var _0x3ea97d={};if(_0x1c793e!=null){for(var _0xb8b448 in _0x1c793e)if(_0xb8b448!==_0x461a8c(0x1c1)&&Object[_0x461a8c(0x194)][_0x461a8c(0x198)][_0x461a8c(0x1b0)](_0x1c793e,_0xb8b448))__createBinding(_0x3ea97d,_0x1c793e,_0xb8b448);}return __setModuleDefault(_0x3ea97d,_0x1c793e),_0x3ea97d;},__importDefault=this&&this[a34_0x38d167(0x1bc)]||function(_0xf2f523){const _0x43303f=a34_0x38d167;return _0xf2f523&&_0xf2f523[_0x43303f(0x193)]?_0xf2f523:{'default':_0xf2f523};};Object['defineProperty'](exports,a34_0x38d167(0x193),{'value':!![]}),exports['webhook']=exports[a34_0x38d167(0x1c8)]=exports[a34_0x38d167(0x1c4)]=exports[a34_0x38d167(0x1cf)]=exports[a34_0x38d167(0x192)]=void 0x0;const Yup=__importStar(require('yup')),gn_api_sdk_typescript_1=__importDefault(require(a34_0x38d167(0x1cd))),AppError_1=__importDefault(require(a34_0x38d167(0x1ba))),Gn_1=__importDefault(require(a34_0x38d167(0x1c7))),Company_1=__importDefault(require(a34_0x38d167(0x196))),Invoices_1=__importDefault(require(a34_0x38d167(0x1d3))),socket_1=require(a34_0x38d167(0x1a4)),Plan_1=__importDefault(require(a34_0x38d167(0x1a1))),index=async(_0x7c4659,_0x4bf795)=>{const _0x2813d5=a34_0x38d167,_0x2fc684=new gn_api_sdk_typescript_1['default'](Gn_1[_0x2813d5(0x1c1)]);return _0x4bf795[_0x2813d5(0x1ca)](_0x2fc684['getSubscriptions']());};function a34_0x26fc(_0x541086,_0xc6f660){const _0xb5e2ca=a34_0xb5e2();return a34_0x26fc=function(_0x26fcc6,_0x2d6085){_0x26fcc6=_0x26fcc6-0x187;let _0x465da4=_0xb5e2ca[_0x26fcc6];return _0x465da4;},a34_0x26fc(_0x541086,_0xc6f660);}function a34_0xb5e2(){const _0x1e460e=['get','status','getIO','3320862ZBHuwF','configurable','required','CONCLUIDA','161XMfvTN','forEach','20jawjtZ','log','call','NumberFormat','update','split','user','8961831QvpQcl','body','defineProperty','create','reload','../errors/AppError','Company\x20not\x20found','__importDefault','webhook','emit','company-','Validation\x20fails','default','env','writable','createWebhook','findOne','currency','../config/Gn','deleteWebhook','getDate','json','268288xEqiOT','72525VpXEyT','gn-api-sdk-typescript','pixCreateImmediateCharge','createSubscription','en-US','pixGenerateQRCode','companyId','../models/Invoices','498860ECOwBC','string','199592rNovTt','teste_webhook','__importStar','-payment','10FrCoNr','GERENCIANET_CHAVEPIX','cnpj','object','pixDeleteWebhook','planId','txid','197769UcGTWa','shape','name','replace','index','__esModule','prototype','__setModuleDefault','../models/Company','__createBinding','hasOwnProperty','setDate','#Fatura:','error_subscription','pix','format','length','document','pixConfigWebhook','../models/Plan','findByPk','isValid','../libs/socket'];a34_0xb5e2=function(){return _0x1e460e;};return a34_0xb5e2();}exports[a34_0x38d167(0x192)]=index;const createSubscription=async(_0x4a8d79,_0x1f94a6)=>{const _0x288811=a34_0x38d167,_0x2fd00c=new gn_api_sdk_typescript_1['default'](Gn_1[_0x288811(0x1c1)]),{companyId:_0x369593}=_0x4a8d79[_0x288811(0x1b4)],_0x4a4f49=Yup[_0x288811(0x18a)]()['shape']({'price':Yup[_0x288811(0x1d5)]()[_0x288811(0x1aa)](),'users':Yup[_0x288811(0x1d5)]()[_0x288811(0x1aa)](),'plan':Yup[_0x288811(0x1d5)]()['required']()});if(!await _0x4a4f49[_0x288811(0x1a3)](_0x4a8d79[_0x288811(0x1b6)]))throw new AppError_1[(_0x288811(0x1c1))](_0x288811(0x1c0),0x190);const _0x2ea6c7=new Intl[(_0x288811(0x1b1))](_0x288811(0x1d0),{'style':_0x288811(0x1c6),'currency':'USD'}),_0x1cc538=await Company_1['default']['findOne']({'where':{'id':_0x369593}}),_0x313775=await Plan_1[_0x288811(0x1c1)][_0x288811(0x1c5)]({'where':{'id':_0x1cc538[_0x288811(0x18c)]}}),{invoiceId:_0x17adcf}=_0x4a8d79[_0x288811(0x1b6)],_0x5b6499=_0x313775['amount'],_0x279e64=_0x2ea6c7[_0x288811(0x19d)](_0x5b6499)[_0x288811(0x191)]('$',''),_0x152996={'nome':_0x1cc538[_0x288811(0x190)]},_0x5cca33=_0x1cc538[_0x288811(0x19f)][_0x288811(0x191)](/\D/g,'');_0x5cca33[_0x288811(0x19e)]===0xb?_0x152996['cpf']=_0x5cca33:_0x152996[_0x288811(0x189)]=_0x5cca33;const _0xfcba70={'calendario':{'expiracao':0xe10},'devedor':{..._0x152996},'valor':{'original':_0x279e64},'chave':process[_0x288811(0x1c2)][_0x288811(0x188)],'solicitacaoPagador':_0x288811(0x19a)+_0x17adcf};try{const _0x3fcd07=await _0x2fd00c[_0x288811(0x1ce)](null,_0xfcba70),_0x5c7d02=await _0x2fd00c[_0x288811(0x1d1)]({'id':_0x3fcd07['loc']['id']});if(!_0x1cc538)throw new AppError_1[(_0x288811(0x1c1))](_0x288811(0x1bb),0x194);return _0x1f94a6[_0x288811(0x1ca)]({..._0x3fcd07,'qrcode':_0x5c7d02});}catch(_0x1c70c4){console[_0x288811(0x1af)](_0x288811(0x19b),_0x1c70c4);throw new AppError_1[(_0x288811(0x1c1))]('Validation\x20fails',0x190);}};exports['createSubscription']=createSubscription;const createWebhook=async(_0x1f7819,_0x4ff6ce)=>{const _0x1c1516=a34_0x38d167,_0x55cadb=Yup[_0x1c1516(0x18a)]()[_0x1c1516(0x18f)]({'chave':Yup[_0x1c1516(0x1d5)]()[_0x1c1516(0x1aa)](),'url':Yup['string']()[_0x1c1516(0x1aa)]()});if(!await _0x55cadb[_0x1c1516(0x1a3)](_0x1f7819['body']))throw new AppError_1[(_0x1c1516(0x1c1))](_0x1c1516(0x1c0),0x190);const {chave:_0x5031c5,url:_0x700815}=_0x1f7819[_0x1c1516(0x1b6)],_0x10b1a5={'webhookUrl':_0x700815},_0xfc10ce={'chave':_0x5031c5};try{const _0x33a17a=new gn_api_sdk_typescript_1[(_0x1c1516(0x1c1))](Gn_1[_0x1c1516(0x1c1)]),_0x23f8b9=await _0x33a17a[_0x1c1516(0x1a0)](_0xfc10ce,_0x10b1a5);return _0x4ff6ce['json'](_0x23f8b9);}catch(_0x7fa9d9){console[_0x1c1516(0x1af)](_0x7fa9d9);}};exports[a34_0x38d167(0x1c4)]=createWebhook;const deleteWebhook=async(_0x1f597b,_0x57ead1)=>{const _0x25b5a9=a34_0x38d167,_0x232ec0=Yup[_0x25b5a9(0x18a)]()['shape']({'chave':Yup[_0x25b5a9(0x1d5)]()[_0x25b5a9(0x1aa)]()});if(!await _0x232ec0[_0x25b5a9(0x1a3)](_0x1f597b[_0x25b5a9(0x1b6)]))throw new AppError_1[(_0x25b5a9(0x1c1))](_0x25b5a9(0x1c0),0x190);const {chave:_0x59c42d}=_0x1f597b[_0x25b5a9(0x1b6)],_0x5d4617={'chave':_0x59c42d},_0xd5d706=new gn_api_sdk_typescript_1[(_0x25b5a9(0x1c1))](Gn_1[_0x25b5a9(0x1c1)]),_0x5acff2=await _0xd5d706[_0x25b5a9(0x18b)](_0x5d4617);return _0x57ead1['json'](_0x5acff2);};exports[a34_0x38d167(0x1c8)]=deleteWebhook;const webhook=async(_0x17b846,_0x1f1e82)=>{const _0x548d94=a34_0x38d167,{type:_0x29d1d3}=_0x17b846['params'],{evento:_0x37b8cd}=_0x17b846[_0x548d94(0x1b6)];if(_0x37b8cd===_0x548d94(0x1d7))return _0x1f1e82['json']({'ok':!![]});if(_0x17b846[_0x548d94(0x1b6)][_0x548d94(0x19c)]){const _0x4bd346=new gn_api_sdk_typescript_1[(_0x548d94(0x1c1))](Gn_1[_0x548d94(0x1c1)]);_0x17b846['body'][_0x548d94(0x19c)][_0x548d94(0x1ad)](async _0x3af376=>{const _0x18c1b1=_0x548d94,_0x20f14a=await _0x4bd346['pixDetailCharge']({'txid':_0x3af376[_0x18c1b1(0x18d)]});if(_0x20f14a[_0x18c1b1(0x1a6)]===_0x18c1b1(0x1ab)){const {solicitacaoPagador:_0x124d8a}=_0x20f14a,_0xec7d70=_0x124d8a[_0x18c1b1(0x191)](_0x18c1b1(0x19a),''),_0x4bfd15=await Invoices_1[_0x18c1b1(0x1c1)][_0x18c1b1(0x1a2)](_0xec7d70),_0x5a1ddc=_0x4bfd15[_0x18c1b1(0x1d2)],_0x512d73=await Company_1[_0x18c1b1(0x1c1)][_0x18c1b1(0x1a2)](_0x5a1ddc),_0x3ae7bc=new Date(_0x512d73['dueDate']);_0x3ae7bc[_0x18c1b1(0x199)](_0x3ae7bc[_0x18c1b1(0x1c9)]()+0x1e);const _0x54c66f=_0x3ae7bc['toISOString']()[_0x18c1b1(0x1b3)]('T')[0x0];if(_0x512d73){await _0x512d73[_0x18c1b1(0x1b2)]({'dueDate':_0x54c66f});const _0x5c1ade=await _0x4bfd15[_0x18c1b1(0x1b2)]({'id':_0xec7d70,'status':'paid'});await _0x512d73[_0x18c1b1(0x1b9)]();const _0x45a02b=(0x0,socket_1[_0x18c1b1(0x1a7)])(),_0x167907=await Company_1[_0x18c1b1(0x1c1)]['findOne']({'where':{'id':_0x5a1ddc}});_0x45a02b[_0x18c1b1(0x1be)](_0x18c1b1(0x1bf)+_0x5a1ddc+_0x18c1b1(0x1d9),{'action':_0x20f14a[_0x18c1b1(0x1a6)],'company':_0x167907});}}});}return _0x1f1e82[_0x548d94(0x1ca)]({'ok':!![]});};exports[a34_0x38d167(0x1bd)]=webhook;
>>>>>>> ab722bfbcf394d74dd0b99a984c0dcf6ffbcff7f
