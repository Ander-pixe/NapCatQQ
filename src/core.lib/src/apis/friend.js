const _0x4af35f=_0x38f4;(function(_0x5d8097,_0x2e9fcf){const _0x2f89d5=_0x38f4,_0x12b62c=_0x5d8097();while(!![]){try{const _0x4eb192=parseInt(_0x2f89d5(0x175))/0x1*(-parseInt(_0x2f89d5(0x163))/0x2)+-parseInt(_0x2f89d5(0x16d))/0x3*(-parseInt(_0x2f89d5(0x174))/0x4)+-parseInt(_0x2f89d5(0x15e))/0x5+-parseInt(_0x2f89d5(0x15a))/0x6+-parseInt(_0x2f89d5(0x16f))/0x7*(parseInt(_0x2f89d5(0x16a))/0x8)+parseInt(_0x2f89d5(0x16b))/0x9+parseInt(_0x2f89d5(0x168))/0xa;if(_0x4eb192===_0x2e9fcf)break;else _0x12b62c['push'](_0x12b62c['shift']());}catch(_0xe97952){_0x12b62c['push'](_0x12b62c['shift']());}}}(_0x3400,0x804c8));function _0x38f4(_0x5ac78f,_0x2cb50c){const _0x3400d7=_0x3400();return _0x38f4=function(_0x38f4ef,_0x188451){_0x38f4ef=_0x38f4ef-0x154;let _0x2bd455=_0x3400d7[_0x38f4ef];return _0x2bd455;},_0x38f4(_0x5ac78f,_0x2cb50c);}import{BuddyListener,napCatCore}from'@/core';import{logDebug}from'@/common/utils/log';function _0x3400(){const _0x43b6db=['获取好友列表超时','896067wCEpcn','onLoginSuccess','119021PuvLWa','NBOYW','addListener','onBuddyListChange','then','4MvpNoh','2cCRFFR','buddyList','approvalFriendRequest','LLfuO','ANoNN','wXmCc','获取好友列表完成','handleFriendRequest','329400rQhSvR','session','ryllb','XfDEw','2049660BvvZqi','friendUid','getBuddyService','reqTime','开始获取好友列表','1041994uwNdMy','rnSMB','getBuddyList','uid','gjLCX','11840070bNNIlT','set','112ZfIPEP','7089156IRXSiy'];_0x3400=function(){return _0x43b6db;};return _0x3400();}import{uid2UinMap}from'@/core/data';import{randomUUID}from'crypto';const buddyChangeTasks=new Map(),buddyListener=new BuddyListener();buddyListener[_0x4af35f(0x172)]=_0x1ab509=>{const _0x34f69c=_0x4af35f,_0x52e095={'gjLCX':function(_0x43ff4a,_0x50f3f4){return _0x43ff4a(_0x50f3f4);}};for(const [_0x8b4a9f,_0x4c56a1]of buddyChangeTasks){_0x52e095[_0x34f69c(0x167)](_0x4c56a1,_0x1ab509),buddyChangeTasks['delete'](_0x8b4a9f);}},setTimeout(()=>{const _0x456018=_0x4af35f;napCatCore[_0x456018(0x16e)](()=>{const _0x5b63cd=_0x456018;napCatCore[_0x5b63cd(0x171)](buddyListener);});},0x64);export class NTQQFriendApi{static async['getFriends'](_0x3e51d1=![]){const _0x2b3118=_0x4af35f,_0x211ae8={'ryllb':function(_0x1ae1f8,_0x39b8ac,_0x3fea46){return _0x1ae1f8(_0x39b8ac,_0x3fea46);},'DEVpx':_0x2b3118(0x158),'HmZua':function(_0xd3002f,_0x1a7cdb){return _0xd3002f(_0x1a7cdb);},'rnSMB':function(_0xffe819,_0x5e3790,_0x55261e){return _0xffe819(_0x5e3790,_0x55261e);},'wXmCc':_0x2b3118(0x162),'oGsIk':function(_0x1219be,_0x593553){return _0x1219be(_0x593553);},'LLfuO':_0x2b3118(0x16c),'NBOYW':function(_0x2975cd){return _0x2975cd();}};return new Promise((_0x1631ed,_0x267f84)=>{const _0x4b7b7c=_0x2b3118,_0x174ef8={'ANoNN':function(_0x1bc0cb,_0x1e4ba9){return _0x211ae8['oGsIk'](_0x1bc0cb,_0x1e4ba9);},'XfDEw':_0x211ae8[_0x4b7b7c(0x155)]};let _0x1be22e=![];setTimeout(()=>{const _0x11be08=_0x4b7b7c;!_0x1be22e&&(_0x174ef8[_0x11be08(0x156)](logDebug,_0x11be08(0x16c)),_0x267f84(_0x174ef8[_0x11be08(0x15d)]));},0x1388);const _0x2844a6=[],_0x3a78ea=_0x1565d8=>{const _0xea2063=_0x4b7b7c;for(const _0x34001a of _0x1565d8){for(const _0x15f59c of _0x34001a[_0xea2063(0x176)]){_0x2844a6['push'](_0x15f59c),uid2UinMap[_0x15f59c[_0xea2063(0x166)]]=_0x15f59c['uin'];}}_0x1be22e=!![],_0x211ae8[_0xea2063(0x15c)](logDebug,_0x211ae8['DEVpx'],_0x2844a6),_0x211ae8['HmZua'](_0x1631ed,_0x2844a6);};buddyChangeTasks[_0x4b7b7c(0x169)](_0x211ae8[_0x4b7b7c(0x170)](randomUUID),_0x3a78ea),napCatCore[_0x4b7b7c(0x15b)][_0x4b7b7c(0x160)]()[_0x4b7b7c(0x165)](_0x3e51d1)[_0x4b7b7c(0x173)](_0xa1fd11=>{const _0x266e1c=_0x4b7b7c;_0x211ae8[_0x266e1c(0x164)](logDebug,_0x211ae8[_0x266e1c(0x157)],_0xa1fd11);});});}static async[_0x4af35f(0x159)](_0x4e3e8e,_0x4064a8){const _0x2c9f09=_0x4af35f;napCatCore['session'][_0x2c9f09(0x160)]()?.[_0x2c9f09(0x154)]({'friendUid':_0x4e3e8e[_0x2c9f09(0x15f)],'reqTime':_0x4e3e8e[_0x2c9f09(0x161)],'accept':_0x4064a8});}}