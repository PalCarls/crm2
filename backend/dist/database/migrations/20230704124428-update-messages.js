function a195_0x2bf3(){var _0x150da2=['352470AioBww','ALTER\x20TABLE\x20\x22Messages\x22\x20ADD\x20CONSTRAINT\x20\x22Messages_pkey\x22\x20PRIMARY\x20KEY\x20(id)','1049NVrjZR','addColumn','1603736QelslQ','removeColumn','1205372klQajn','21105BRWqwP','196cELKut','2367001zSPpGO','exports','query','8040NFFqFT','UPDATE\x20\x22Messages\x22\x20SET\x20\x22wid\x22\x20=\x20\x22id\x22','removeConstraint','1098xOqEsi','quotedMsgId','1410MqLDeo','SET\x20NULL','sequelize','wid','addConstraint','Messages_quotedMsgId_fkey','Messages','Messages_pkey','INTEGER','STRING','CASCADE'];a195_0x2bf3=function(){return _0x150da2;};return a195_0x2bf3();}var a195_0x1a2e7c=a195_0x5680;function a195_0x5680(_0x591408,_0x206d56){var _0x2bf3f8=a195_0x2bf3();return a195_0x5680=function(_0x56806e,_0x3c3d8f){_0x56806e=_0x56806e-0x111;var _0x25c89a=_0x2bf3f8[_0x56806e];return _0x25c89a;},a195_0x5680(_0x591408,_0x206d56);}(function(_0x22a2b1,_0x250ea6){var _0x50ac44=a195_0x5680,_0x5d890a=_0x22a2b1();while(!![]){try{var _0x5eb126=-parseInt(_0x50ac44(0x111))/0x1*(parseInt(_0x50ac44(0x117))/0x2)+parseInt(_0x50ac44(0x12b))/0x3+parseInt(_0x50ac44(0x115))/0x4+parseInt(_0x50ac44(0x11b))/0x5*(-parseInt(_0x50ac44(0x11e))/0x6)+parseInt(_0x50ac44(0x118))/0x7+parseInt(_0x50ac44(0x113))/0x8+-parseInt(_0x50ac44(0x116))/0x9*(parseInt(_0x50ac44(0x120))/0xa);if(_0x5eb126===_0x250ea6)break;else _0x5d890a['push'](_0x5d890a['shift']());}catch(_0x58e90a){_0x5d890a['push'](_0x5d890a['shift']());}}}(a195_0x2bf3,0x38164),module[a195_0x1a2e7c(0x119)]={'up':async(_0x232a6d,_0x2c4dd2)=>{var _0x2a36f0=a195_0x1a2e7c;await _0x232a6d[_0x2a36f0(0x11d)](_0x2a36f0(0x126),_0x2a36f0(0x125)),await _0x232a6d[_0x2a36f0(0x11d)]('Messages',_0x2a36f0(0x127)),await _0x232a6d[_0x2a36f0(0x114)](_0x2a36f0(0x126),_0x2a36f0(0x11f)),await _0x232a6d[_0x2a36f0(0x112)](_0x2a36f0(0x126),_0x2a36f0(0x11f),{'type':_0x2c4dd2[_0x2a36f0(0x128)],'allowNull':!![]}),await _0x232a6d[_0x2a36f0(0x112)](_0x2a36f0(0x126),'wid',{'type':_0x2c4dd2[_0x2a36f0(0x129)],'allowNull':!![],'unique':![]}),await _0x232a6d[_0x2a36f0(0x122)][_0x2a36f0(0x11a)](_0x2a36f0(0x11c)),await _0x232a6d['removeColumn']('Messages','id'),await _0x232a6d['addColumn'](_0x2a36f0(0x126),'id',{'type':_0x2c4dd2[_0x2a36f0(0x128)],'allowNull':![],'primaryKey':!![],'autoIncrement':!![],'unique':!![]}),await _0x232a6d[_0x2a36f0(0x124)](_0x2a36f0(0x126),{'fields':[_0x2a36f0(0x11f)],'type':'foreign\x20key','name':_0x2a36f0(0x125),'references':{'table':_0x2a36f0(0x126),'field':'id'},'onDelete':_0x2a36f0(0x121),'onUpdate':_0x2a36f0(0x12a)}),await _0x232a6d['sequelize'][_0x2a36f0(0x11a)](_0x2a36f0(0x12c));},'down':async(_0x1a9954,_0x2cbfb9)=>{var _0x488a28=a195_0x1a2e7c;await _0x1a9954[_0x488a28(0x11d)](_0x488a28(0x126),_0x488a28(0x125)),await _0x1a9954[_0x488a28(0x11d)](_0x488a28(0x126),_0x488a28(0x127)),await _0x1a9954[_0x488a28(0x114)](_0x488a28(0x126),_0x488a28(0x123)),await _0x1a9954['removeColumn'](_0x488a28(0x126),_0x488a28(0x11f)),await _0x1a9954[_0x488a28(0x114)](_0x488a28(0x126),'id'),await _0x1a9954[_0x488a28(0x112)]('Messages','id',{'type':_0x2cbfb9[_0x488a28(0x128)],'allowNull':![],'autoIncrement':!![]}),await _0x1a9954[_0x488a28(0x124)](_0x488a28(0x126),{'fields':['quotedMsgId'],'type':'foreign\x20key','name':'Messages_quotedMsgId_fkey','references':{'table':'Messages','field':'id'},'onDelete':_0x488a28(0x121),'onUpdate':'CASCADE'}),await _0x1a9954[_0x488a28(0x122)][_0x488a28(0x11a)](_0x488a28(0x12c));}});