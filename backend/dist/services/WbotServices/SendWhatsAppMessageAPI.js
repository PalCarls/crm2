'use strict';function a546_0xdda4(_0x383a7c,_0x2aaee2){const _0x1a5618=a546_0x1a56();return a546_0xdda4=function(_0xdda401,_0x260cf1){_0xdda401=_0xdda401-0x81;let _0x50e0a9=_0x1a5618[_0xdda401];return _0x50e0a9;},a546_0xdda4(_0x383a7c,_0x2aaee2);}const a546_0x4f6e14=a546_0xdda4;(function(_0x155184,_0x1ec20c){const _0x336946=a546_0xdda4,_0x46f2c3=_0x155184();while(!![]){try{const _0x5eebe6=parseInt(_0x336946(0x8b))/0x1*(parseInt(_0x336946(0x86))/0x2)+parseInt(_0x336946(0x8f))/0x3+-parseInt(_0x336946(0x9e))/0x4+parseInt(_0x336946(0xa2))/0x5+parseInt(_0x336946(0x98))/0x6*(-parseInt(_0x336946(0x87))/0x7)+-parseInt(_0x336946(0x96))/0x8+-parseInt(_0x336946(0x82))/0x9;if(_0x5eebe6===_0x1ec20c)break;else _0x46f2c3['push'](_0x46f2c3['shift']());}catch(_0x14150b){_0x46f2c3['push'](_0x46f2c3['shift']());}}}(a546_0x1a56,0x4ce84));function a546_0x1a56(){const _0x153686=['56DxKcRR','7wUMgEb','call','../../errors/AppError','getWbot','21973MnIAKH','configurable','@sentry/node','dataJson','565614PbWLuI','get','create','delay','defineProperty','extendedTextMessage','prototype','3910032UCvrRX','__importStar','1639236rXqJkt','findOne','default','__esModule','__importDefault','__createBinding','111756bsuJUq','s.whatsapp.net','captureException','key','1826840EuHmJd','g.us','578151yiBhyt','number','ERR_SENDING_WAPP_MSG','writable'];a546_0x1a56=function(){return _0x153686;};return a546_0x1a56();}var __createBinding=this&&this[a546_0x4f6e14(0x9d)]||(Object['create']?function(_0x3b5851,_0x534fe0,_0x12a912,_0x40dfdd){const _0x114da7=a546_0x4f6e14;if(_0x40dfdd===undefined)_0x40dfdd=_0x12a912;var _0x164f29=Object['getOwnPropertyDescriptor'](_0x534fe0,_0x12a912);(!_0x164f29||(_0x114da7(0x90)in _0x164f29?!_0x534fe0[_0x114da7(0x9b)]:_0x164f29[_0x114da7(0x85)]||_0x164f29[_0x114da7(0x8c)]))&&(_0x164f29={'enumerable':!![],'get':function(){return _0x534fe0[_0x12a912];}}),Object[_0x114da7(0x93)](_0x3b5851,_0x40dfdd,_0x164f29);}:function(_0x23f2cd,_0x11ff66,_0x5086b4,_0x12dc9f){if(_0x12dc9f===undefined)_0x12dc9f=_0x5086b4;_0x23f2cd[_0x12dc9f]=_0x11ff66[_0x5086b4];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a546_0x4f6e14(0x91)]?function(_0x56ba9b,_0x1239fb){const _0x13969e=a546_0x4f6e14;Object[_0x13969e(0x93)](_0x56ba9b,_0x13969e(0x9a),{'enumerable':!![],'value':_0x1239fb});}:function(_0x20dd4f,_0x4e38d3){_0x20dd4f['default']=_0x4e38d3;}),__importStar=this&&this[a546_0x4f6e14(0x97)]||function(_0x9fb635){const _0x3c11a2=a546_0x4f6e14;if(_0x9fb635&&_0x9fb635[_0x3c11a2(0x9b)])return _0x9fb635;var _0x362b99={};if(_0x9fb635!=null){for(var _0x277c04 in _0x9fb635)if(_0x277c04!==_0x3c11a2(0x9a)&&Object[_0x3c11a2(0x95)]['hasOwnProperty'][_0x3c11a2(0x88)](_0x9fb635,_0x277c04))__createBinding(_0x362b99,_0x9fb635,_0x277c04);}return __setModuleDefault(_0x362b99,_0x9fb635),_0x362b99;},__importDefault=this&&this[a546_0x4f6e14(0x9c)]||function(_0x34ba47){const _0x4d379f=a546_0x4f6e14;return _0x34ba47&&_0x34ba47[_0x4d379f(0x9b)]?_0x34ba47:{'default':_0x34ba47};};Object['defineProperty'](exports,a546_0x4f6e14(0x9b),{'value':!![]});const baileys_1=require('@whiskeysockets/baileys'),Sentry=__importStar(require(a546_0x4f6e14(0x8d))),AppError_1=__importDefault(require(a546_0x4f6e14(0x89))),Message_1=__importDefault(require('../../models/Message')),wbot_1=require('../../libs/wbot'),SendWhatsAppMessage=async({body:_0x3afa79,whatsappId:_0x5cc55c,contact:_0x40726d,quotedMsg:_0x175f80,msdelay:_0x16aaa0})=>{const _0x44feec=a546_0x4f6e14;let _0x531cd8={};const _0x140cc0=await(0x0,wbot_1[_0x44feec(0x8a)])(_0x5cc55c),_0x3b5825=_0x40726d[_0x44feec(0x83)]+'@'+(_0x40726d['isGroup']?_0x44feec(0x81):_0x44feec(0x9f));if(_0x175f80){const _0x537c91=await Message_1[_0x44feec(0x9a)][_0x44feec(0x99)]({'where':{'id':_0x175f80['id']}});if(_0x537c91){const _0x710d49=JSON['parse'](_0x537c91[_0x44feec(0x8e)]);_0x531cd8={'quoted':{'key':_0x710d49[_0x44feec(0xa1)],'message':{'extendedTextMessage':_0x710d49['message'][_0x44feec(0x94)]}}};}}try{await(0x0,baileys_1[_0x44feec(0x92)])(_0x16aaa0);const _0x5ae3fb=await _0x140cc0['sendMessage'](_0x3b5825,{'text':_0x3afa79},{..._0x531cd8});return _0x5ae3fb;}catch(_0x67615d){Sentry[_0x44feec(0xa0)](_0x67615d),console['log'](_0x67615d);throw new AppError_1[(_0x44feec(0x9a))](_0x44feec(0x84));}};exports[a546_0x4f6e14(0x9a)]=SendWhatsAppMessage;