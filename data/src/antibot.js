


const _0x51e0c0=_0x1cb1;(function(_0xf2f586,_0x50e18e){const _0x36e0a1=_0x1cb1,_0x23a71a=_0xf2f586();while(!![]){try{const _0x3fd893=parseInt(_0x36e0a1(0xc9))/0x1+parseInt(_0x36e0a1(0xe4))/0x2+-parseInt(_0x36e0a1(0xe5))/0x3+-parseInt(_0x36e0a1(0xd5))/0x4+parseInt(_0x36e0a1(0xc6))/0x5*(-parseInt(_0x36e0a1(0xe6))/0x6)+-parseInt(_0x36e0a1(0xd4))/0x7+parseInt(_0x36e0a1(0xcd))/0x8;if(_0x3fd893===_0x50e18e)break;else _0x23a71a['push'](_0x23a71a['shift']());}catch(_0x316908){_0x23a71a['push'](_0x23a71a['shift']());}}}(_0x14b5,0x84753),require(_0x51e0c0(0xdf))['config']());const {Pool}=require('pg');let s=require(_0x51e0c0(0xda));var dbUrl=s['DATABASE_URL']?s[_0x51e0c0(0xd3)]:_0x51e0c0(0xd7);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createAntibotTable(){const _0x32f009=_0x51e0c0,_0x20c48a=await pool[_0x32f009(0xd6)]();try{await _0x20c48a[_0x32f009(0xe3)](_0x32f009(0xcf)),console[_0x32f009(0xe0)](_0x32f009(0xe7));}catch(_0x437873){console[_0x32f009(0xe2)](_0x32f009(0xc5),_0x437873);}finally{_0x20c48a['release']();}}createAntibotTable();async function atbajouterOuMettreAJourJid(_0x5a1572,_0x5a6476){const _0x829934=_0x51e0c0,_0x396fef=await pool['connect']();try{const _0x4d91ef=await _0x396fef[_0x829934(0xe3)](_0x829934(0xdd),[_0x5a1572]),_0x528d47=_0x4d91ef['rows']['length']>0x0;_0x528d47?await _0x396fef['query'](_0x829934(0xd1),[_0x5a6476,_0x5a1572]):await _0x396fef[_0x829934(0xe3)](_0x829934(0xce),[_0x5a1572,_0x5a6476,_0x829934(0xe8)]),console[_0x829934(0xe0)](_0x829934(0xd9)+_0x5a1572+'\x20ajouté\x20ou\x20mis\x20à\x20jour\x20avec\x20succès\x20dans\x20la\x20table\x20\x27antibot\x27.');}catch(_0x2a5717){console[_0x829934(0xe2)](_0x829934(0xdb),_0x2a5717);}finally{_0x396fef['release']();}};async function atbmettreAJourAction(_0x358fb1,_0x577ea6){const _0x3054c4=_0x51e0c0,_0xeb33cd=await pool[_0x3054c4(0xd6)]();try{const _0x5ed97b=await _0xeb33cd[_0x3054c4(0xe3)](_0x3054c4(0xdd),[_0x358fb1]),_0x3d1077=_0x5ed97b[_0x3054c4(0xd8)]['length']>0x0;_0x3d1077?await _0xeb33cd[_0x3054c4(0xe3)](_0x3054c4(0xc4),[_0x577ea6,_0x358fb1]):await _0xeb33cd[_0x3054c4(0xe3)](_0x3054c4(0xce),[_0x358fb1,'non',_0x577ea6]),console[_0x3054c4(0xe0)](_0x3054c4(0xe1)+_0x358fb1+_0x3054c4(0xc8));}catch(_0x4997b7){console[_0x3054c4(0xe2)]('Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27action\x20pour\x20le\x20JID\x20dans\x20la\x20table\x20\x20:',_0x4997b7);}finally{_0xeb33cd[_0x3054c4(0xde)]();}}function _0x14b5(){const _0x58208f=['Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27antibot\x27:','47080UBSnyo','etat','\x20dans\x20la\x20table\x20\x27antibot\x27.','418944kytoob','SELECT\x20etat\x20FROM\x20antibot\x20WHERE\x20jid\x20=\x20$1','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27état\x20du\x20JID\x20dans\x20la\x20table\x20','oui','11519552fPglYT','INSERT\x20INTO\x20antibot\x20(jid,\x20etat,\x20action)\x20VALUES\x20($1,\x20$2,\x20$3)','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20antibot\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20etat\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20action\x20text\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','SELECT\x20action\x20FROM\x20antibot\x20WHERE\x20jid\x20=\x20$1','UPDATE\x20antibot\x20SET\x20etat\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','length','DATABASE_URL','2262400NGNsxu','1880352ngqnmr','connect','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','rows','JID\x20','../set','Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20du\x20JID\x20dans\x20la\x20table\x20,','exports','SELECT\x20*\x20FROM\x20antibot\x20WHERE\x20jid\x20=\x20$1','release','dotenv','log','Action\x20mise\x20à\x20jour\x20avec\x20succès\x20pour\x20le\x20JID\x20','error','query','2087868mxZWOk','2017401sYTWOg','570RUwqIT','La\x20table\x20\x27antibot\x27\x20a\x20été\x20créée\x20avec\x20succès.','supp','UPDATE\x20antibot\x20SET\x20action\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2'];_0x14b5=function(){return _0x58208f;};return _0x14b5();};function _0x1cb1(_0x40c863,_0x4dd8d8){const _0x14b5a4=_0x14b5();return _0x1cb1=function(_0x1cb1e,_0x2c511a){_0x1cb1e=_0x1cb1e-0xc4;let _0x56cdee=_0x14b5a4[_0x1cb1e];return _0x56cdee;},_0x1cb1(_0x40c863,_0x4dd8d8);}async function atbverifierEtatJid(_0xa11b10){const _0x313511=_0x51e0c0,_0x51c398=await pool[_0x313511(0xd6)]();try{const _0x3a09c1=await _0x51c398[_0x313511(0xe3)](_0x313511(0xca),[_0xa11b10]);if(_0x3a09c1[_0x313511(0xd8)][_0x313511(0xd2)]>0x0){const _0x21764a=_0x3a09c1[_0x313511(0xd8)][0x0][_0x313511(0xc7)];return _0x21764a===_0x313511(0xcc);}else return![];}catch(_0xee91ab){return console[_0x313511(0xe2)](_0x313511(0xcb),_0xee91ab),![];}finally{_0x51c398[_0x313511(0xde)]();}};async function atbrecupererActionJid(_0x2ba46b){const _0x2b9459=_0x51e0c0,_0x488c69=await pool[_0x2b9459(0xd6)]();try{const _0x523283=await _0x488c69[_0x2b9459(0xe3)](_0x2b9459(0xd0),[_0x2ba46b]);if(_0x523283[_0x2b9459(0xd8)]['length']>0x0){const _0x56153d=_0x523283['rows'][0x0]['action'];return _0x56153d;}else return'supp';}catch(_0x2bc544){return console[_0x2b9459(0xe2)]('Erreur\x20lors\x20de\x20la\x20récupération\x20de\x20l\x27action\x20du\x20JID\x20dans\x20la\x20table\x20:',_0x2bc544),'supp';}finally{_0x488c69[_0x2b9459(0xde)]();}};module[_0x51e0c0(0xdc)]={'atbmettreAJourAction':atbmettreAJourAction,'atbajouterOuMettreAJourJid':atbajouterOuMettreAJourJid,'atbverifierEtatJid':atbverifierEtatJid,'atbrecupererActionJid':atbrecupererActionJid};


