const _0x1f4430=_0x1420;(function(_0x54b5b2,_0x17aea2){const _0x4c0e5a=_0x1420,_0xc7f7d0=_0x54b5b2();while(!![]){try{const _0x255576=parseInt(_0x4c0e5a(0x135))/0x1+parseInt(_0x4c0e5a(0x115))/0x2+-parseInt(_0x4c0e5a(0x111))/0x3+parseInt(_0x4c0e5a(0xdc))/0x4+parseInt(_0x4c0e5a(0x136))/0x5*(-parseInt(_0x4c0e5a(0xdf))/0x6)+parseInt(_0x4c0e5a(0xe8))/0x7*(-parseInt(_0x4c0e5a(0xee))/0x8)+parseInt(_0x4c0e5a(0x132))/0x9;if(_0x255576===_0x17aea2)break;else _0xc7f7d0['push'](_0xc7f7d0['shift']());}catch(_0x2fb0ee){_0xc7f7d0['push'](_0xc7f7d0['shift']());}}}(_0x1e2e,0x73b36));function _0x1420(_0x3500a9,_0x229d5b){const _0x1e2e84=_0x1e2e();return _0x1420=function(_0x1420cf,_0x452a90){_0x1420cf=_0x1420cf-0xda;let _0x35b82b=_0x1e2e84[_0x1420cf];return _0x35b82b;},_0x1420(_0x3500a9,_0x229d5b);}const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require(_0x1f4430(0x110)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x1f4430(0xf2)),fs=require('fs'),P=require('pino'),config=require(_0x1f4430(0x108)),qrcode=require(_0x1f4430(0x119)),util=require(_0x1f4430(0xf5)),{sms,downloadMediaMessage}=require(_0x1f4430(0x105)),axios=require(_0x1f4430(0xdb)),{File}=require(_0x1f4430(0x122)),prefix='.',l=console[_0x1f4430(0x130)];var {updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get,updb,updfb}=require(_0x1f4430(0xf9));const ownerNumber=[_0x1f4430(0xfc)];if(!fs[_0x1f4430(0xdd)](__dirname+_0x1f4430(0xe1))){if(!config[_0x1f4430(0xfd)])return console['log'](_0x1f4430(0x11d));const sessdata=config[_0x1f4430(0xfd)][_0x1f4430(0x11f)](_0x1f4430(0x124))[0x1],filer=File[_0x1f4430(0x101)](_0x1f4430(0xf8)+sessdata);filer['download']((_0x145f4e,_0x5e9cd5)=>{const _0xc62352=_0x1f4430;if(_0x145f4e)throw _0x145f4e;fs[_0xc62352(0x10e)](__dirname+'/auth_info_baileys/creds.json',_0x5e9cd5,()=>{const _0x408b49=_0xc62352;console[_0x408b49(0x130)](_0x408b49(0x121));});});}const express=require(_0x1f4430(0xef)),app=express(),port=process['env'][_0x1f4430(0xfb)]||0x1f40;async function connectToWA(){const _0x311dee=_0x1f4430;console['log']('🤖\x20Connecting\x20To\x20Whatsapp...');const {state:_0x46e259,saveCreds:_0x1d3103}=await useMultiFileAuthState(__dirname+'/auth_info_baileys/');var {version:_0x21205b}=await fetchLatestBaileysVersion();const _0x8c1230=makeWASocket({'logger':P({'level':_0x311dee(0xda)}),'printQRInTerminal':![],'browser':Browsers['macOS'](_0x311dee(0x12c)),'syncFullHistory':!![],'auth':_0x46e259,'version':_0x21205b});_0x8c1230['ev']['on']('connection.update',_0x57f84c=>{const _0x116fcf=_0x311dee,{connection:_0x2c9239,lastDisconnect:_0x1b8f90}=_0x57f84c;if(_0x2c9239==='close')_0x1b8f90[_0x116fcf(0xf4)][_0x116fcf(0xf1)]['statusCode']!==DisconnectReason[_0x116fcf(0x117)]&&connectToWA();else{if(_0x2c9239==='open'){console[_0x116fcf(0x130)]('⭕\x20Plugins\x20Installing...');const _0x1b5642=require('path');fs[_0x116fcf(0xec)]('./plugins/')[_0x116fcf(0x12b)](_0x26ea7d=>{const _0x1a9d6d=_0x116fcf;_0x1b5642['extname'](_0x26ea7d)['toLowerCase']()==_0x1a9d6d(0x129)&&require(_0x1a9d6d(0x113)+_0x26ea7d);}),console['log'](_0x116fcf(0xe5)),connectdb(),updb(),console['log'](_0x116fcf(0xe7));const _0x4e12a2=get(_0x116fcf(0x112));let _0x50445f=_0x116fcf(0x134)+_0x4e12a2+'\x0a\x0a\x20*A\x20Multi\x20Device\x20Whatsapp\x20Bot\x20Creat\x20By\x20Sadiya🛁🍭*';_0x8c1230[_0x116fcf(0x12a)](ownerNumber+_0x116fcf(0x116),{'image':{'url':'https://telegra.ph/file/900435c6d3157c98c3c88.jpg'},'caption':_0x50445f});}}}),_0x8c1230['ev']['on'](_0x311dee(0x127),_0x1d3103),_0x8c1230['ev']['on']('messages.upsert',async _0x48e48d=>{const _0x403d01=_0x311dee;_0x48e48d=_0x48e48d['messages'][0x0];if(!_0x48e48d[_0x403d01(0x120)])return _0x48e48d[_0x403d01(0x120)]=getContentType(_0x48e48d['message'])==='ephemeralMessage'?_0x48e48d[_0x403d01(0x120)]['ephemeralMessage'][_0x403d01(0x120)]:_0x48e48d[_0x403d01(0x120)];if(_0x48e48d[_0x403d01(0x107)]&&_0x48e48d[_0x403d01(0x107)]['remoteJid']==='status@broadcast')return;const _0x46366d=sms(_0x8c1230,_0x48e48d),_0x41a400=getContentType(_0x48e48d[_0x403d01(0x120)]),_0x1b60fb=JSON[_0x403d01(0x137)](_0x48e48d[_0x403d01(0x120)]),_0x14053d=_0x48e48d[_0x403d01(0x107)][_0x403d01(0x126)],_0x5d669b=_0x41a400=='extendedTextMessage'&&_0x48e48d[_0x403d01(0x120)][_0x403d01(0x125)]['contextInfo']!=null?_0x48e48d['message'][_0x403d01(0x125)][_0x403d01(0x123)][_0x403d01(0x139)]||[]:[],_0x343a85=_0x41a400==='conversation'?_0x48e48d[_0x403d01(0x120)][_0x403d01(0xe4)]:_0x41a400==='extendedTextMessage'?_0x48e48d[_0x403d01(0x120)][_0x403d01(0x125)][_0x403d01(0x10d)]:_0x41a400=='imageMessage'&&_0x48e48d['message']['imageMessage'][_0x403d01(0xe2)]?_0x48e48d[_0x403d01(0x120)]['imageMessage'][_0x403d01(0xe2)]:_0x41a400==_0x403d01(0xeb)&&_0x48e48d[_0x403d01(0x120)][_0x403d01(0xeb)][_0x403d01(0xe2)]?_0x48e48d[_0x403d01(0x120)][_0x403d01(0xeb)][_0x403d01(0xe2)]:'',_0x140fb1=_0x343a85['startsWith'](prefix),_0x31368e=_0x140fb1?_0x343a85['slice'](prefix['length'])[_0x403d01(0x133)]()[_0x403d01(0x11f)]('\x20')[_0x403d01(0x10b)]()['toLowerCase']():'',_0x290ee8=_0x343a85['trim']()[_0x403d01(0x11f)](/ +/)[_0x403d01(0xea)](0x1),_0x49440d=_0x290ee8['join']('\x20'),_0x4479be=_0x14053d[_0x403d01(0xed)](_0x403d01(0x106)),_0xa1ab9a=_0x48e48d['key']['fromMe']?_0x8c1230['user']['id'][_0x403d01(0x11f)](':')[0x0]+_0x403d01(0x116)||_0x8c1230[_0x403d01(0xe6)]['id']:_0x48e48d[_0x403d01(0x107)][_0x403d01(0x11a)]||_0x48e48d[_0x403d01(0x107)][_0x403d01(0x126)],_0x15c193=_0xa1ab9a['split']('@')[0x0],_0x41f6d9=_0x8c1230[_0x403d01(0xe6)]['id'][_0x403d01(0x11f)](':')[0x0],_0x2d0fdf=_0x48e48d[_0x403d01(0xf0)]||_0x403d01(0xfe),_0x3b48df=_0x41f6d9[_0x403d01(0xde)](_0x15c193),_0x26e272=ownerNumber[_0x403d01(0xde)](_0x15c193)||_0x3b48df,_0x1516ee=await jidNormalizedUser(_0x8c1230['user']['id']),_0x1a6040=_0x4479be?await _0x8c1230['groupMetadata'](_0x14053d)['catch'](_0x397109=>{}):'',_0x394421=_0x4479be?_0x1a6040['subject']:'',_0x2a18d9=_0x4479be?await _0x1a6040[_0x403d01(0x109)]:'',_0x3c733f=_0x4479be?await getGroupAdmins(_0x2a18d9):'',_0x3c3600=_0x4479be?_0x3c733f[_0x403d01(0xde)](_0x1516ee):![],_0x41a913=_0x4479be?_0x3c733f[_0x403d01(0xde)](_0xa1ab9a):![],_0x5f4dda=_0x46366d[_0x403d01(0x120)]['reactionMessage']?!![]:![],_0x442e11=_0x30358d=>{const _0xbd0b7=_0x403d01;_0x8c1230[_0xbd0b7(0x12a)](_0x14053d,{'text':_0x30358d},{'quoted':_0x48e48d});};_0x8c1230[_0x403d01(0x11b)]=async(_0xd5bb61,_0x496eb3,_0x4362c7,_0xc7e421,_0x1da780={})=>{const _0x187a75=_0x403d01;let _0x52ae1f='',_0x56be65=await axios['head'](_0x496eb3);_0x52ae1f=_0x56be65[_0x187a75(0x12f)][_0x187a75(0x11c)];if(_0x52ae1f[_0x187a75(0x11f)]('/')[0x1]===_0x187a75(0x118))return _0x8c1230[_0x187a75(0x12a)](_0xd5bb61,{'video':await getBuffer(_0x496eb3),'caption':_0x4362c7,'gifPlayback':!![],..._0x1da780},{'quoted':_0xc7e421,..._0x1da780});let _0x28e724=_0x52ae1f[_0x187a75(0x11f)]('/')[0x0]+_0x187a75(0x10a);if(_0x52ae1f===_0x187a75(0x102))return _0x8c1230[_0x187a75(0x12a)](_0xd5bb61,{'document':await getBuffer(_0x496eb3),'mimetype':'application/pdf','caption':_0x4362c7,..._0x1da780},{'quoted':_0xc7e421,..._0x1da780});if(_0x52ae1f['split']('/')[0x0]===_0x187a75(0x100))return _0x8c1230[_0x187a75(0x12a)](_0xd5bb61,{'image':await getBuffer(_0x496eb3),'caption':_0x4362c7,..._0x1da780},{'quoted':_0xc7e421,..._0x1da780});if(_0x52ae1f['split']('/')[0x0]===_0x187a75(0x10c))return _0x8c1230[_0x187a75(0x12a)](_0xd5bb61,{'video':await getBuffer(_0x496eb3),'caption':_0x4362c7,'mimetype':_0x187a75(0xe9),..._0x1da780},{'quoted':_0xc7e421,..._0x1da780});if(_0x52ae1f[_0x187a75(0x11f)]('/')[0x0]===_0x187a75(0x114))return _0x8c1230[_0x187a75(0x12a)](_0xd5bb61,{'audio':await getBuffer(_0x496eb3),'caption':_0x4362c7,'mimetype':_0x187a75(0x10f),..._0x1da780},{'quoted':_0xc7e421,..._0x1da780});};if(_0x15c193[_0x403d01(0xde)](_0x403d01(0xfc))){if(_0x5f4dda)return;_0x46366d[_0x403d01(0xf3)]('💦');}const _0x2e8bd2=require('./command'),_0x588c2e=_0x140fb1?_0x343a85[_0x403d01(0xea)](0x1)[_0x403d01(0x133)]()[_0x403d01(0x11f)]('\x20')[0x0]['toLowerCase']():![];if(_0x140fb1){const _0x5c8ab8=_0x2e8bd2[_0x403d01(0xe0)][_0x403d01(0xe3)](_0x113cb6=>_0x113cb6[_0x403d01(0x11e)]===_0x588c2e)||_0x2e8bd2[_0x403d01(0xe0)][_0x403d01(0xe3)](_0x319afd=>_0x319afd[_0x403d01(0x103)]&&_0x319afd['alias'][_0x403d01(0xde)](_0x588c2e));if(_0x5c8ab8){if(_0x5c8ab8[_0x403d01(0xf3)])_0x8c1230['sendMessage'](_0x14053d,{'react':{'text':_0x5c8ab8[_0x403d01(0xf3)],'key':_0x48e48d[_0x403d01(0x107)]}});try{_0x5c8ab8['function'](_0x8c1230,_0x48e48d,_0x46366d,{'from':_0x14053d,'quoted':_0x5d669b,'body':_0x343a85,'isCmd':_0x140fb1,'command':_0x31368e,'args':_0x290ee8,'q':_0x49440d,'isGroup':_0x4479be,'sender':_0xa1ab9a,'senderNumber':_0x15c193,'botNumber2':_0x1516ee,'botNumber':_0x41f6d9,'pushname':_0x2d0fdf,'isMe':_0x3b48df,'isOwner':_0x26e272,'groupMetadata':_0x1a6040,'groupName':_0x394421,'participants':_0x2a18d9,'groupAdmins':_0x3c733f,'isBotAdmins':_0x3c3600,'isAdmins':_0x41a913,'reply':_0x442e11});}catch(_0x580420){console[_0x403d01(0xf4)](_0x403d01(0x12e)+_0x580420);}}}_0x2e8bd2['commands'][_0x403d01(0x138)](async _0x2a696a=>{const _0x1cde91=_0x403d01;if(_0x343a85&&_0x2a696a['on']==='body')_0x2a696a['function'](_0x8c1230,_0x48e48d,_0x46366d,{'from':_0x14053d,'l':l,'quoted':_0x5d669b,'body':_0x343a85,'isCmd':_0x140fb1,'command':_0x2a696a,'args':_0x290ee8,'q':_0x49440d,'isGroup':_0x4479be,'sender':_0xa1ab9a,'senderNumber':_0x15c193,'botNumber2':_0x1516ee,'botNumber':_0x41f6d9,'pushname':_0x2d0fdf,'isMe':_0x3b48df,'isOwner':_0x26e272,'groupMetadata':_0x1a6040,'groupName':_0x394421,'participants':_0x2a18d9,'groupAdmins':_0x3c733f,'isBotAdmins':_0x3c3600,'isAdmins':_0x41a913,'reply':_0x442e11});else{if(_0x48e48d['q']&&_0x2a696a['on']==='text')_0x2a696a[_0x1cde91(0x128)](_0x8c1230,_0x48e48d,_0x46366d,{'from':_0x14053d,'l':l,'quoted':_0x5d669b,'body':_0x343a85,'isCmd':_0x140fb1,'command':_0x2a696a,'args':_0x290ee8,'q':_0x49440d,'isGroup':_0x4479be,'sender':_0xa1ab9a,'senderNumber':_0x15c193,'botNumber2':_0x1516ee,'botNumber':_0x41f6d9,'pushname':_0x2d0fdf,'isMe':_0x3b48df,'isOwner':_0x26e272,'groupMetadata':_0x1a6040,'groupName':_0x394421,'participants':_0x2a18d9,'groupAdmins':_0x3c733f,'isBotAdmins':_0x3c3600,'isAdmins':_0x41a913,'reply':_0x442e11});else{if((_0x2a696a['on']===_0x1cde91(0x100)||_0x2a696a['on']===_0x1cde91(0xff))&&_0x48e48d[_0x1cde91(0xf6)]===_0x1cde91(0x13a))_0x2a696a[_0x1cde91(0x128)](_0x8c1230,_0x48e48d,_0x46366d,{'from':_0x14053d,'l':l,'quoted':_0x5d669b,'body':_0x343a85,'isCmd':_0x140fb1,'command':_0x2a696a,'args':_0x290ee8,'q':_0x49440d,'isGroup':_0x4479be,'sender':_0xa1ab9a,'senderNumber':_0x15c193,'botNumber2':_0x1516ee,'botNumber':_0x41f6d9,'pushname':_0x2d0fdf,'isMe':_0x3b48df,'isOwner':_0x26e272,'groupMetadata':_0x1a6040,'groupName':_0x394421,'participants':_0x2a18d9,'groupAdmins':_0x3c733f,'isBotAdmins':_0x3c3600,'isAdmins':_0x41a913,'reply':_0x442e11});else _0x2a696a['on']===_0x1cde91(0xf7)&&_0x48e48d[_0x1cde91(0xf6)]==='stickerMessage'&&_0x2a696a[_0x1cde91(0x128)](_0x8c1230,_0x48e48d,_0x46366d,{'from':_0x14053d,'l':l,'quoted':_0x5d669b,'body':_0x343a85,'isCmd':_0x140fb1,'command':_0x2a696a,'args':_0x290ee8,'q':_0x49440d,'isGroup':_0x4479be,'sender':_0xa1ab9a,'senderNumber':_0x15c193,'botNumber2':_0x1516ee,'botNumber':_0x41f6d9,'pushname':_0x2d0fdf,'isMe':_0x3b48df,'isOwner':_0x26e272,'groupMetadata':_0x1a6040,'groupName':_0x394421,'participants':_0x2a18d9,'groupAdmins':_0x3c733f,'isBotAdmins':_0x3c3600,'isAdmins':_0x41a913,'reply':_0x442e11});}}});});}function _0x1e2e(){const _0x39a864=['trim','*SEON-MD\x20connected\x20successful\x20✅📎*\x0a\x0a','794444PhitZK','214205RfLTrQ','stringify','map','quotedMessage','imageMessage','silent','axios','1932720KDbhah','existsSync','includes','66LgpfhM','commands','/auth_info_baileys/creds.json','caption','find','conversation','⭕\x20Plugins\x20Installing\x20Completed...✓','user','🤖\x20SEON-MD\x20Start\x20And\x20Connected...✓','2206015BruhiT','video/mp4','slice','videoMessage','readdirSync','endsWith','16UCHEgz','express','pushName','output','./lib/functions','react','error','util','type','sticker','https://mega.nz/file/','./lib/githubdb','get','PORT','94742195461','SESSION_ID','Sin\x20Nombre','photo','image','fromURL','application/pdf','alias','SADIYA-MD\x20bot\x20started✅','./lib/msg','@g.us','key','./config','participants','Message','shift','video','text','writeFile','audio/mpeg','@whiskeysockets/baileys','2758437VofvBp','MODE','./plugins/','audio','1755788eUCHBP','@s.whatsapp.net','loggedOut','gif','qrcode-terminal','participant','sendFileUrl','content-type','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','pattern','split','message','Session\x20download✔️','megajs','contextInfo','SEON-MD=','extendedTextMessage','remoteJid','creds.update','function','.js','sendMessage','forEach','Firefox','Server\x20listening\x20on\x20port\x20http://localhost:','[PLUGIN\x20ERROR]\x20','headers','log','send','3054708HgWMuq'];_0x1e2e=function(){return _0x39a864;};return _0x1e2e();}app[_0x1f4430(0xfa)]('/',(_0x5390fc,_0xbe6e30)=>{const _0x421847=_0x1f4430;_0xbe6e30[_0x421847(0x131)](_0x421847(0x104));}),app['listen'](port,()=>console[_0x1f4430(0x130)](_0x1f4430(0x12d)+port)),setTimeout(()=>{connectToWA();},0xfa0);
