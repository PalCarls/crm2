'use strict';const a470_0x149503=a470_0x4a8c;(function(_0x732d25,_0x636546){const _0x146e6c=a470_0x4a8c,_0x3b447f=_0x732d25();while(!![]){try{const _0x5d9a14=parseInt(_0x146e6c(0x148))/0x1*(parseInt(_0x146e6c(0x145))/0x2)+parseInt(_0x146e6c(0x158))/0x3*(parseInt(_0x146e6c(0x140))/0x4)+parseInt(_0x146e6c(0x159))/0x5*(-parseInt(_0x146e6c(0x14c))/0x6)+-parseInt(_0x146e6c(0x14f))/0x7+parseInt(_0x146e6c(0x153))/0x8+parseInt(_0x146e6c(0x146))/0x9+parseInt(_0x146e6c(0x14a))/0xa*(-parseInt(_0x146e6c(0x154))/0xb);if(_0x5d9a14===_0x636546)break;else _0x3b447f['push'](_0x3b447f['shift']());}catch(_0x4bdb1e){_0x3b447f['push'](_0x3b447f['shift']());}}}(a470_0x5b01,0x1dfb9));function a470_0x4a8c(_0x5c8eb2,_0x17ee0f){const _0x5b01b8=a470_0x5b01();return a470_0x4a8c=function(_0x4a8c61,_0x283daa){_0x4a8c61=_0x4a8c61-0x140;let _0x46e219=_0x5b01b8[_0x4a8c61];return _0x46e219;},a470_0x4a8c(_0x5c8eb2,_0x17ee0f);}var __importDefault=this&&this[a470_0x149503(0x152)]||function(_0x3c184b){return _0x3c184b&&_0x3c184b['__esModule']?_0x3c184b:{'default':_0x3c184b};};Object[a470_0x149503(0x157)](exports,'__esModule',{'value':!![]});function a470_0x5b01(){const _0x336276=['extraInfo','__importDefault','1494096pbyjsa','1518rBxxWV','reload','profilePicUrl','defineProperty','3NpjXiW','5gkUENX','default','492364clLGGb','wallets','urlPicture','companyId','name','237862ZojFpC','792063MQZgtY','../../errors/AppError','1qSyKyr','ERR_NO_CONTACT_FOUND','11780RSRRtZ','../../models/Contact','771000VnCuDo','acceptAudioMessage','findOne','720426spNfyv','number'];a470_0x5b01=function(){return _0x336276;};return a470_0x5b01();}const AppError_1=__importDefault(require(a470_0x149503(0x147))),Contact_1=__importDefault(require(a470_0x149503(0x14b))),ToggleUseQueuesContactService=async({contactId:_0x4dcd96})=>{const _0x2d2381=a470_0x149503,_0x539773=await Contact_1[_0x2d2381(0x15a)][_0x2d2381(0x14e)]({'where':{'id':_0x4dcd96},'attributes':['id',_0x2d2381(0x14d)]});if(!_0x539773)throw new AppError_1['default'](_0x2d2381(0x149),0x194);const _0xc31972=_0x539773?.[_0x2d2381(0x14d)]?![]:!![];return await _0x539773['update']({'acceptAudioMessage':_0xc31972}),await _0x539773[_0x2d2381(0x155)]({'attributes':['id',_0x2d2381(0x144),_0x2d2381(0x150),'email',_0x2d2381(0x156),_0x2d2381(0x143),_0x2d2381(0x14d),_0x2d2381(0x142)],'include':[_0x2d2381(0x151),{'association':_0x2d2381(0x141),'attributes':['id',_0x2d2381(0x144)]}]}),_0x539773;};exports[a470_0x149503(0x15a)]=ToggleUseQueuesContactService;