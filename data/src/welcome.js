


const _0x3429ca=_0x25c8;(function(_0x43efcd,_0x32dc86){const _0x20955b=_0x25c8,_0x39f1ac=_0x43efcd();while(!![]){try{const _0x398847=parseInt(_0x20955b(0x102))/0x1+-parseInt(_0x20955b(0x104))/0x2*(-parseInt(_0x20955b(0x114))/0x3)+-parseInt(_0x20955b(0x10b))/0x4+parseInt(_0x20955b(0xf5))/0x5+-parseInt(_0x20955b(0x103))/0x6*(parseInt(_0x20955b(0xf7))/0x7)+-parseInt(_0x20955b(0x109))/0x8+parseInt(_0x20955b(0x107))/0x9;if(_0x398847===_0x32dc86)break;else _0x39f1ac['push'](_0x39f1ac['shift']());}catch(_0x1d31c0){_0x39f1ac['push'](_0x39f1ac['shift']());}}}(_0x414b,0x58f14),require('dotenv')[_0x3429ca(0xf6)]());const {Pool}=require('pg'),s=require(_0x3429ca(0xfb));var dbUrl=s[_0x3429ca(0x10d)]?s[_0x3429ca(0x10d)]:_0x3429ca(0xfd);function _0x414b(){const _0x136209=['6DQsfBm','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20events\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20Id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20welcome\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20goodbye\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20antipromote\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20antidemote\x20text\x20DEFAULT\x20\x27non\x27\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','\x20FROM\x20events\x20WHERE\x20jid\x20=\x20$1','4025610krAuAZ','\x20pour\x20le\x20jid\x20','1507856mlFXVA','\x20ayant\x20la\x20valeur\x20','915652XvgfzF','query','DATABASE_URL','connect','INSERT\x20INTO\x20events\x20(jid,\x20','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27events\x27:','non','error','\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','94281mPRyxY','exports','release','Nouveau\x20jid\x20','rows','1165440kiuxZL','config','1001bzQXGh','La\x20colonne\x20','\x20ajouté\x20avec\x20la\x20colonne\x20','Erreur\x20lors\x20de\x20l\x27actualisation\x20de\x20events\x20:','../set','length','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','UPDATE\x20events\x20SET\x20','SELECT\x20*\x20FROM\x20events\x20WHERE\x20jid\x20=\x20$1',')\x20VALUES\x20($1,\x20$2)','log','593201EfAZDJ','24594MPRYEU'];_0x414b=function(){return _0x136209;};return _0x414b();}const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableevents=async()=>{const _0x280634=_0x3429ca;try{await pool[_0x280634(0x10c)](_0x280634(0x105)),console['log']('La\x20table\x20\x27events\x27\x20a\x20été\x20créée\x20avec\x20succès.');}catch(_0x358608){console[_0x280634(0x112)](_0x280634(0x110),_0x358608);}};creerTableevents();function _0x25c8(_0x489082,_0x4e1077){const _0x414bbf=_0x414b();return _0x25c8=function(_0x25c88f,_0x1e8ac7){_0x25c88f=_0x25c88f-0xf1;let _0x17085c=_0x414bbf[_0x25c88f];return _0x17085c;},_0x25c8(_0x489082,_0x4e1077);}async function attribuerUnevaleur(_0x28a63f,_0x2d5a80,_0x4ed847){const _0x31e14b=_0x3429ca,_0x20f8d8=await pool['connect']();try{const _0x51d8dd=await _0x20f8d8[_0x31e14b(0x10c)](_0x31e14b(0xff),[_0x28a63f]),_0xf6590d=_0x51d8dd['rows'][_0x31e14b(0xfc)]>0x0;_0xf6590d?(await _0x20f8d8['query'](_0x31e14b(0xfe)+_0x2d5a80+_0x31e14b(0x113),[_0x4ed847,_0x28a63f]),console['log'](_0x31e14b(0xf8)+_0x2d5a80+'\x20a\x20été\x20actualisée\x20sur\x20'+_0x4ed847+_0x31e14b(0x108)+_0x28a63f)):(await _0x20f8d8[_0x31e14b(0x10c)](_0x31e14b(0x10f)+_0x2d5a80+_0x31e14b(0x100),[_0x28a63f,_0x4ed847]),console[_0x31e14b(0x101)](_0x31e14b(0xf3)+_0x28a63f+_0x31e14b(0xf9)+_0x2d5a80+_0x31e14b(0x10a)+_0x4ed847));}catch(_0x238803){console[_0x31e14b(0x112)](_0x31e14b(0xfa),_0x238803);}finally{_0x20f8d8['release']();}};async function recupevents(_0x31814a,_0x341992){const _0xbc7f5a=_0x3429ca,_0x5db604=await pool[_0xbc7f5a(0x10e)]();try{const _0x15ee85=await _0x5db604[_0xbc7f5a(0x10c)]('SELECT\x20'+_0x341992+_0xbc7f5a(0x106),[_0x31814a]),_0x28c817=_0x15ee85[_0xbc7f5a(0xf4)][_0xbc7f5a(0xfc)]>0x0;return _0x28c817?_0x15ee85[_0xbc7f5a(0xf4)][0x0][_0x341992]:_0xbc7f5a(0x111);}catch(_0x2cdfad){console[_0xbc7f5a(0x112)](_0x2cdfad);}finally{_0x5db604[_0xbc7f5a(0xf2)]();}}module[_0x3429ca(0xf1)]={'attribuerUnevaleur':attribuerUnevaleur,'recupevents':recupevents};


