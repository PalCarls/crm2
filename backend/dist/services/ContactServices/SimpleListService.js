'use strict';const a423_0x4ee91f=a423_0x5f15;(function(_0x50f5c0,_0x33907d){const _0x312e05=a423_0x5f15,_0x1fe314=_0x50f5c0();while(!![]){try{const _0x5c24a6=-parseInt(_0x312e05(0x18c))/0x1+parseInt(_0x312e05(0x19b))/0x2*(parseInt(_0x312e05(0x199))/0x3)+parseInt(_0x312e05(0x190))/0x4+-parseInt(_0x312e05(0x19d))/0x5*(-parseInt(_0x312e05(0x18d))/0x6)+parseInt(_0x312e05(0x194))/0x7+parseInt(_0x312e05(0x19c))/0x8+-parseInt(_0x312e05(0x192))/0x9*(parseInt(_0x312e05(0x18f))/0xa);if(_0x5c24a6===_0x33907d)break;else _0x1fe314['push'](_0x1fe314['shift']());}catch(_0x3289f0){_0x1fe314['push'](_0x1fe314['shift']());}}}(a423_0xe975,0x2fc8e));function a423_0x5f15(_0x2c2e07,_0x4d7b26){const _0xe97535=a423_0xe975();return a423_0x5f15=function(_0x5f15fc,_0x22d805){_0x5f15fc=_0x5f15fc-0x18b;let _0x5addda=_0xe97535[_0x5f15fc];return _0x5addda;},a423_0x5f15(_0x2c2e07,_0x4d7b26);}var __importDefault=this&&this[a423_0x4ee91f(0x196)]||function(_0x9e796d){return _0x9e796d&&_0x9e796d['__esModule']?_0x9e796d:{'default':_0x9e796d};};Object['defineProperty'](exports,a423_0x4ee91f(0x19a),{'value':!![]});function a423_0xe975(){const _0x3939bc=['10MtFRvZ','449064QHHaqV','sequelize','4194918CCQqpS','name','140182mqXjRI','where','__importDefault','findAll','default','69QeGlLW','__esModule','31522WEnLwq','1093336mepgbV','3610tJZwYD','like','../../models/Contact','../../errors/AppError','96706aBkyOC','1056BtwXAq','ERR_NO_CONTACT_FOUND'];a423_0xe975=function(){return _0x3939bc;};return a423_0xe975();}const Contact_1=__importDefault(require(a423_0x4ee91f(0x19f))),AppError_1=__importDefault(require(a423_0x4ee91f(0x18b))),sequelize_1=require(a423_0x4ee91f(0x191)),SimpleListService=async({name:_0x46952e,companyId:_0x14c635})=>{const _0x143d36=a423_0x4ee91f;let _0x5d90d0={'order':[[_0x143d36(0x193),'ASC']]};_0x46952e&&(_0x5d90d0[_0x143d36(0x195)]={'name':{[sequelize_1['Op'][_0x143d36(0x19e)]]:'%'+_0x46952e+'%'}});_0x5d90d0[_0x143d36(0x195)]={..._0x5d90d0[_0x143d36(0x195)],'companyId':_0x14c635};const _0x54b4fb=await Contact_1[_0x143d36(0x198)][_0x143d36(0x197)](_0x5d90d0);if(!_0x54b4fb)throw new AppError_1['default'](_0x143d36(0x18e),0x194);return _0x54b4fb;};exports[a423_0x4ee91f(0x198)]=SimpleListService;