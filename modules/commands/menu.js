module.exports.config = {
	name: "menu",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Hướng dẫn cho người mới",
	commandCategory: "Danh sách lệnh",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 60
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "╭───╮\n    %1\n╰───╯ \n📜Mô tả: %2\n\n» Credit: %7\n» 📄Hướng dẫn cách dùng: %3\n» 🌟Thuộc nhóm: %4\n» ⏱Thời gian chờ: %5 giây(s)\n» 👥Quyền hạn: %6\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n💥💢💥 Điều Hành Bởi Ty Nguyen 💥💢💥",
		"helpAll": '≻─────── •👇🏻• ───────≺\n🎃🎃🎃𝐻𝑖𝑒̣̂𝑛 𝑡𝑎̣𝑖 đ𝑎𝑛𝑔 𝑐𝑜́ %1 𝑙𝑒̣̂𝑛ℎ 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑡𝑟𝑒̂𝑛 𝑏𝑜𝑡 𝑛𝑎̀𝑦\n♻️𝑆𝑢̛̉ 𝑑𝑢̣𝑛𝑔: ◤%2menu + tên lệnh◢ đ𝑒̂̉ 𝑥𝑒𝑚 𝑐ℎ𝑖 𝑡𝑖𝑒̂́𝑡 𝑐𝑎́𝑐ℎ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔\n🤖𝐵𝑜𝑡 đ𝑢̛𝑜̛̣𝑐 đ𝑖𝑒̂̀𝑢 ℎ𝑎̀𝑛ℎ 𝑏𝑜̛̉𝑖 Phát-Coder-Lỏ.\nChúc bạn sử dụng bot vui vẻ ♥\n📢𝑀𝑒𝑛𝑢 𝑠𝑒̃ 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑔𝑜̛̃ 𝑠𝑎𝑢 60𝑠💀👻🎃"',
		"helpList": '🍳🥐🍠•🐰𝐏𝐇𝐀𝐓•𝐁𝐎𝐓🐰•🍳🥐🍠\n◆━━━━━━━━━━━◆\n%2\n◆━━━━━━━━━━━◆\n💟𝐻𝑖𝑒̣̂𝑛 𝑡𝑎̣𝑖 đ𝑎𝑛𝑔 𝑐𝑜́ %3 𝑙𝑒̣̂𝑛ℎ 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑡𝑟𝑒̂𝑛 𝑏𝑜𝑡 𝑛𝑎̀𝑦\n💥𝐻𝑎̃𝑦 𝑟𝑒𝑝𝑙𝑦 (𝑝ℎ𝑎̉𝑛 ℎ𝑜̂̀𝑖 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑏𝑜𝑡) 𝑆𝑇𝑇 𝑚𝑎̀ 𝑏𝑎̣𝑛 𝑚𝑢𝑜̂́𝑛 𝑐ℎ𝑜̣𝑛\n🤖𝐵𝑜𝑡 đ𝑢̛𝑜̛̣𝑐 đ𝑖𝑒̂̀𝑢 ℎ𝑎̀𝑛ℎ 𝑏𝑜̛̉ Phát-Coder-Lỏ\n🔰𝔻𝕦̀𝕟𝕘 %4menu all đ𝕖̂̉ 𝕩𝕖𝕞 𝕥𝕒̂́𝕥 𝕔𝕒̉ 𝕔𝕒́𝕔 𝕝𝕖̣̂𝕟𝕙',
		"helpeply": '🔰%1🔰\n𝑆𝑎𝑢 đ𝑎̂𝑦 𝑙𝑎̀ 𝑛ℎ𝑜́𝑚 𝑙𝑒̣̂𝑛ℎ 𝑐𝑢̉𝑎 𝐵𝑜𝑡\n💥%2💥\n﹋\n%3\n🌟𝐻𝑎̃𝑦 𝑟𝑒𝑝𝑙𝑦 (𝑝ℎ𝑎̉𝑛 ℎ𝑜̂̀𝑖 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑏𝑜𝑡) 𝑠𝑜̂́ 𝑡ℎ𝑢̛́ 𝑡𝑢̛̣ đ𝑒̂̉ 𝑥𝑒𝑚 𝑐ℎ𝑖 𝑡𝑖𝑒̂́𝑡 𝑐𝑎́𝑐ℎ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔!',
		"user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
}


const _0x2911ee=_0x1be8;(function(_0x471f82,_0x11f213){const _0xd87f6c=_0x1be8,_0xac9257=_0x471f82();while(!![]){try{const _0x454d54=-parseInt(_0xd87f6c(0x1dc))/0x1*(-parseInt(_0xd87f6c(0x1f1))/0x2)+parseInt(_0xd87f6c(0x1f3))/0x3*(parseInt(_0xd87f6c(0x1da))/0x4)+-parseInt(_0xd87f6c(0x1f8))/0x5+-parseInt(_0xd87f6c(0x216))/0x6*(parseInt(_0xd87f6c(0x1e4))/0x7)+parseInt(_0xd87f6c(0x1d2))/0x8+-parseInt(_0xd87f6c(0x208))/0x9*(-parseInt(_0xd87f6c(0x1f4))/0xa)+-parseInt(_0xd87f6c(0x1e9))/0xb;if(_0x454d54===_0x11f213)break;else _0xac9257['push'](_0xac9257['shift']());}catch(_0x3d66fd){_0xac9257['push'](_0xac9257['shift']());}}}(_0x5ce7,0xca186));const _0x2cea=[_0x2911ee(0x20e),'all',_0x2911ee(0x200),_0x2911ee(0x1ed),_0x2911ee(0x1d6),'reply',_0x2911ee(0x1ee),_0x2911ee(0x209),_0x2911ee(0x1d7),'some',_0x2911ee(0x1e1),_0x2911ee(0x1e8),'slice','help',_0x2911ee(0x1e6),_0x2911ee(0x201),_0x2911ee(0x214),_0x2911ee(0x1fe),'240935BIARuy','data',_0x2911ee(0x1f6),_0x2911ee(0x211),_0x2911ee(0x210),'.\x20⪼',_0x2911ee(0x20a),_0x2911ee(0x1d3),_0x2911ee(0x1d1),_0x2911ee(0x219),_0x2911ee(0x1e0),_0x2911ee(0x1de),_0x2911ee(0x1e5),'configModule',_0x2911ee(0x1f0),_0x2911ee(0x207),_0x2911ee(0x20f),_0x2911ee(0x1f2),_0x2911ee(0x1e7),'push','length',_0x2911ee(0x1ef),_0x2911ee(0x1f5),'toLowerCase','name',_0x2911ee(0x20c),'values',_0x2911ee(0x1e2),_0x2911ee(0x218),'indexOf',_0x2911ee(0x1fd),_0x2911ee(0x1d8),'user',_0x2911ee(0x1eb),'helpList','log',_0x2911ee(0x1dd),_0x2911ee(0x203),_0x2911ee(0x204),_0x2911ee(0x217),_0x2911ee(0x1fb),_0x2911ee(0x1d4),_0x2911ee(0x212),_0x2911ee(0x205),_0x2911ee(0x1d5),_0x2911ee(0x1f7),_0x2911ee(0x1fc),_0x2911ee(0x1fa),'group'];function _0x17e7(_0x305d86,_0x4df7e5){return _0x17e7=function(_0x38440b,_0x20ea05){_0x38440b=_0x38440b-0x8b;let _0x29d25e=_0x2cea[_0x38440b];return _0x29d25e;},_0x17e7(_0x305d86,_0x4df7e5);}const _0x2a42cb=_0x17e7;function _0x1be8(_0x109612,_0x2f237e){const _0x5ce777=_0x5ce7();return _0x1be8=function(_0x1be812,_0x120830){_0x1be812=_0x1be812-0x1d1;let _0x2ed6e3=_0x5ce777[_0x1be812];return _0x2ed6e3;},_0x1be8(_0x109612,_0x2f237e);}(function(_0x7600e0,_0x5ce784){const _0x51d391=_0x2911ee,_0x5bf0b0=_0x17e7;while(!![]){try{const _0x477a71=parseInt(_0x5bf0b0(0xc2))+-parseInt(_0x5bf0b0(0x9d))*-parseInt(_0x5bf0b0(0xc8))+parseInt(_0x5bf0b0(0xc6))+-parseInt(_0x5bf0b0(0xc7))+-parseInt(_0x5bf0b0(0x9c))*-parseInt(_0x5bf0b0(0x8c))+parseInt(_0x5bf0b0(0xc5))*parseInt(_0x5bf0b0(0x9e))+parseInt(_0x5bf0b0(0xc4))*-parseInt(_0x5bf0b0(0xaf));if(_0x477a71===_0x5ce784)break;else _0x7600e0[_0x51d391(0x215)](_0x7600e0['shift']());}catch(_0x4628ec){_0x7600e0[_0x51d391(0x215)](_0x7600e0[_0x51d391(0x1ff)]());}}}(_0x2cea,0x72d2c),module[_0x2a42cb(0xcb)][_0x2a42cb(0x96)]=async function({api:_0x1987fb,event:_0x45d4fd,handleReply:_0x5d179d,getText:_0x3a19ea,Threads:_0x3da23f}){const _0x10f637=_0x2911ee,_0x553159=_0x2a42cb;if(_0x5d179d[_0x10f637(0x1fc)]!=_0x45d4fd[_0x553159(0xbf)])return;const _0x45b7d2=(await _0x3da23f[_0x553159(0xac)](_0x45d4fd[_0x553159(0xaa)]))[_0x553159(0x9f)][_0x553159(0x8e)]||global[_0x553159(0xa0)][_0x553159(0x8e)];switch(_0x5d179d[_0x10f637(0x1ea)]){case _0x553159(0x91):{const _0x47d4d8=global[_0x553159(0x92)][_0x553159(0x90)][_0x553159(0xb8)]();var _0x4ca096=_0x5d179d['arraymun'][_0x45d4fd[_0x553159(0x9a)]-0x1],_0x28772f=[],_0x57ae30='',_0x2aa624=0x1,_0x249566=[],_0x37bf80=[];for(const _0x520994 of _0x47d4d8){if(!_0x28772f[_0x10f637(0x1ec)](_0x5325d6=>_0x5325d6[_0x553159(0x8b)][_0x553159(0xb5)]()==_0x520994[_0x553159(0xa0)][_0x553159(0xb4)][_0x553159(0xb5)]()))_0x28772f[_0x553159(0xb1)]({'group':_0x520994[_0x553159(0xa0)][_0x553159(0xb4)][_0x10f637(0x1d9)](),'cmds':[_0x520994[_0x553159(0xa0)][_0x10f637(0x1e3)]]});else _0x28772f[_0x553159(0xca)](_0x5cb8af=>_0x5cb8af[_0x553159(0x8b)][_0x553159(0xb5)]()==_0x520994[_0x553159(0xa0)][_0x10f637(0x1f5)][_0x553159(0xb5)]())[_0x553159(0xbd)][_0x553159(0xb1)](_0x520994[_0x10f637(0x1f6)][_0x10f637(0x1e3)]);}for(let _0xa9528f of _0x28772f){_0x249566[_0x553159(0xb1)](_0xa9528f[_0x553159(0xbd)]);}for(let _0x14be5c of _0x249566[_0x4ca096-0x1]){_0x57ae30+=_0x2aa624++ +'.\x20'+_0x45b7d2+_0x14be5c+'\x0a',_0x37bf80[_0x553159(0xb1)](_0x14be5c);}return _0x1987fb[_0x10f637(0x1d7)](_0x5d179d[_0x10f637(0x210)]),_0x1987fb[_0x10f637(0x1e0)](_0x3a19ea('helpeply',global[_0x553159(0xa0)][_0x553159(0x93)],_0x5d179d[_0x10f637(0x20b)][_0x45d4fd[_0x553159(0x9a)]-0x1],_0x57ae30),_0x45d4fd[_0x553159(0xaa)],(_0x2909fd,_0x5ccf40)=>{const _0x15c24c=_0x10f637,_0x3f2764=_0x553159;global[_0x3f2764(0x92)][_0x3f2764(0x96)][_0x3f2764(0xb1)]({'name':this[_0x15c24c(0x1f6)][_0x3f2764(0xb6)],'author':_0x45d4fd[_0x3f2764(0xbf)],'messageID':_0x5ccf40[_0x3f2764(0xa2)],'cmdarray':_0x37bf80,'type':_0x3f2764(0xb0)}),global[_0x3f2764(0x92)][_0x15c24c(0x20f)][_0x3f2764(0xb1)]({'name':this[_0x3f2764(0xa0)][_0x15c24c(0x1e3)],'messageID':_0x5ccf40[_0x3f2764(0xa2)],'author':_0x45d4fd[_0x3f2764(0xbf)]}),setTimeout(()=>{const _0x6881e6=_0x15c24c,_0x418216=_0x3f2764;_0x1987fb[_0x6881e6(0x1d7)](_0x5ccf40[_0x418216(0xa2)]);},0xea60);});}case _0x553159(0xb0):{const _0x3e46a7=global[_0x553159(0x92)][_0x10f637(0x1d6)][_0x553159(0xb3)](_0x5d179d[_0x553159(0xb7)][_0x45d4fd[_0x553159(0x9a)]-0x1]);return _0x1987fb[_0x553159(0x94)](_0x5d179d[_0x553159(0xa2)]),_0x1987fb[_0x10f637(0x1e0)](_0x3a19ea(_0x553159(0x8f),_0x3e46a7[_0x553159(0xa0)][_0x553159(0xb6)],_0x3e46a7[_0x553159(0xa0)][_0x553159(0xa9)],''+_0x45b7d2+_0x3e46a7[_0x553159(0xa0)][_0x553159(0xb6)]+'\x20'+(_0x3e46a7[_0x553159(0xa0)][_0x553159(0xa5)]?_0x3e46a7[_0x553159(0xa0)][_0x10f637(0x1d3)]:''),_0x3e46a7[_0x10f637(0x1f6)]['commandCategory'],_0x3e46a7[_0x553159(0xa0)][_0x553159(0xc3)],_0x3e46a7[_0x553159(0xa0)][_0x10f637(0x1d1)]==0x0?_0x3a19ea(_0x553159(0xbe)):_0x3e46a7[_0x553159(0xa0)][_0x553159(0xa6)]==0x1?_0x3a19ea(_0x553159(0xa7)):_0x3a19ea(_0x553159(0x9b)),_0x3e46a7[_0x553159(0xa0)][_0x553159(0xc9)]),_0x45d4fd[_0x553159(0xaa)],_0x45d4fd[_0x553159(0xa2)]);}}},module['exports'][_0x2911ee(0x202)]=async function({api:_0x3f654f,event:_0x5deadb,getText:_0x5829fa,Threads:_0x2a65ef}){const _0x43bb9e=_0x2911ee,_0x3a886d=_0x2a42cb,{commands:_0x375d44}=global[_0x3a886d(0x92)],{threadID:_0x4c674a,messageID:_0xbbdd32,body:_0x1ff769}=_0x5deadb;if(!_0x1ff769||typeof _0x1ff769==_0x3a886d(0x97)||_0x1ff769[_0x43bb9e(0x1f9)](_0x3a886d(0x99))!=0x0)return;const _0x5f50e0=_0x1ff769[_0x3a886d(0x98)](_0x1ff769[_0x3a886d(0xbb)](_0x3a886d(0x99)))[_0x43bb9e(0x213)]()[_0x43bb9e(0x1db)](/\s+/);if(_0x5f50e0[_0x3a886d(0xb2)]==0x1||!_0x375d44[_0x3a886d(0xa4)](_0x5f50e0[0x1][_0x3a886d(0xb5)]()))return;const _0x3a93c1=_0x375d44[_0x43bb9e(0x1ef)](_0x5f50e0[0x1][_0x43bb9e(0x1d9)]()),_0x2d0815=(await _0x2a65ef[_0x3a886d(0xac)](_0x5deadb[_0x3a886d(0xaa)]))[_0x3a886d(0x9f)][_0x3a886d(0x8e)]||global[_0x3a886d(0xa0)][_0x3a886d(0x8e)];return _0x3f654f[_0x3a886d(0xa8)](_0x5829fa(_0x3a886d(0x8f),_0x3a93c1[_0x3a886d(0xa0)][_0x3a886d(0xb6)],_0x3a93c1[_0x43bb9e(0x1f6)][_0x3a886d(0xa9)],''+_0x2d0815+_0x3a93c1[_0x43bb9e(0x1f6)][_0x3a886d(0xb6)]+'\x20'+(_0x3a93c1[_0x3a886d(0xa0)][_0x3a886d(0xa5)]?_0x3a93c1[_0x3a886d(0xa0)][_0x3a886d(0xa5)]:''),_0x3a93c1[_0x43bb9e(0x1f6)][_0x3a886d(0xb4)],_0x3a93c1['config'][_0x3a886d(0xc3)],_0x3a93c1[_0x3a886d(0xa0)][_0x3a886d(0xa6)]==0x0?_0x5829fa('user'):_0x3a93c1[_0x3a886d(0xa0)][_0x3a886d(0xa6)]==0x1?_0x5829fa(_0x43bb9e(0x219)):_0x5829fa(_0x3a886d(0x9b)),_0x3a93c1[_0x3a886d(0xa0)][_0x3a886d(0xc9)]),_0x4c674a,_0xbbdd32);},module[_0x2a42cb(0xcb)][_0x2a42cb(0xae)]=async({event:_0x55a048,api:_0x3f4a67,handleReaction:_0x393519})=>{const _0x3de94d=_0x2a42cb;if(parseInt(_0x55a048[_0x3de94d(0xb9)])!==parseInt(_0x393519[_0x3de94d(0xcc)]))return;_0x3f4a67[_0x3de94d(0x94)](_0x393519[_0x3de94d(0xa2)]);},module[_0x2a42cb(0xcb)][_0x2a42cb(0xbc)]=async function({api:_0x44ec78,event:_0x4dae53,args:_0x198dc8,getText:_0x39991e,Threads:_0xc43c97}){const _0x46fe8b=_0x2911ee,_0x3d850d=_0x2a42cb,{commands:_0x1e143f}=global[_0x3d850d(0x92)],{threadID:_0x375975,messageID:_0x2ec21e}=_0x4dae53,_0x17c7c4=_0x1e143f[_0x46fe8b(0x1ef)]((_0x198dc8[0x0]||'')[_0x3d850d(0xb5)]()),{autoUnsend:_0x2fdd24,delayUnsend:_0x51200d}=global[_0x3d850d(0xab)][this[_0x46fe8b(0x1f6)]['name']],_0x26695d=(await _0xc43c97[_0x3d850d(0xac)](_0x4dae53[_0x46fe8b(0x1e5)]))[_0x3d850d(0x9f)][_0x3d850d(0x8e)]||global[_0x3d850d(0xa0)][_0x3d850d(0x8e)];if(!_0x198dc8[0x0]){const _0x5a2398=_0x1e143f['values']();var _0xa35166=[],_0x15e87b='',_0x32ea50=0x1,_0x19056d=[],_0x30eb74=[];for(const _0x413e9d of _0x5a2398){if(!_0xa35166[_0x3d850d(0x95)](_0x2e8e54=>_0x2e8e54[_0x3d850d(0x8b)][_0x3d850d(0xb5)]()==_0x413e9d[_0x3d850d(0xa0)][_0x3d850d(0xb4)][_0x3d850d(0xb5)]()))_0xa35166[_0x3d850d(0xb1)]({'group':_0x413e9d[_0x3d850d(0xa0)][_0x3d850d(0xb4)][_0x3d850d(0xb5)](),'cmds':[_0x413e9d[_0x3d850d(0xa0)][_0x3d850d(0xb6)]]});else _0xa35166[_0x3d850d(0xca)](_0x170e20=>_0x170e20[_0x3d850d(0x8b)]['toLowerCase']()==_0x413e9d[_0x3d850d(0xa0)][_0x3d850d(0xb4)][_0x3d850d(0xb5)]())[_0x3d850d(0xbd)]['push'](_0x413e9d[_0x3d850d(0xa0)][_0x3d850d(0xb6)]);}for(let _0x4abf75 of _0xa35166){_0x15e87b+=_0x32ea50++ +_0x3d850d(0xa3)+_0x4abf75[_0x46fe8b(0x206)][_0x3d850d(0xad)]()+'.\x0a',_0x19056d[_0x3d850d(0xb1)](_0x32ea50-0x1),_0x30eb74[_0x3d850d(0xb1)](_0x4abf75[_0x46fe8b(0x206)]);}return console[_0x3d850d(0xc1)](_0x19056d),_0x44ec78[_0x3d850d(0xa8)](_0x39991e(_0x3d850d(0xc0),global[_0x46fe8b(0x1f6)]['BOTNAME'],_0x15e87b,_0x1e143f['size'],_0x26695d),_0x4dae53[_0x3d850d(0xaa)],(_0x235344,_0x2f2568)=>{const _0xb76cb4=_0x46fe8b,_0x5c04f2=_0x3d850d;global[_0x5c04f2(0x92)][_0x5c04f2(0x96)][_0x5c04f2(0xb1)]({'name':this[_0x5c04f2(0xa0)][_0x5c04f2(0xb6)],'author':_0x4dae53[_0x5c04f2(0xbf)],'messageID':_0x2f2568[_0xb76cb4(0x210)],'arraymun':_0x19056d,'arraygroup':_0x30eb74,'type':_0x5c04f2(0x91)}),global[_0x5c04f2(0x92)][_0xb76cb4(0x20f)][_0xb76cb4(0x215)]({'name':this[_0x5c04f2(0xa0)][_0x5c04f2(0xb6)],'messageID':_0x2f2568[_0xb76cb4(0x210)],'author':_0x4dae53[_0x5c04f2(0xbf)]}),setTimeout(()=>{const _0x37487a=_0x5c04f2;_0x44ec78[_0x37487a(0x94)](_0x2f2568[_0x37487a(0xa2)]);},0xea60);});}if(_0x198dc8[0x0]==_0x3d850d(0x8d)){const _0x4adbc7=_0x1e143f[_0x3d850d(0xb8)]();var _0xa35166=[],_0x184284='';for(const _0x324681 of _0x4adbc7){if(!_0xa35166[_0x3d850d(0x95)](_0x3432c3=>_0x3432c3[_0x3d850d(0x8b)][_0x3d850d(0xb5)]()==_0x324681['config'][_0x3d850d(0xb4)][_0x3d850d(0xb5)]()))_0xa35166[_0x46fe8b(0x215)]({'group':_0x324681[_0x3d850d(0xa0)][_0x3d850d(0xb4)][_0x3d850d(0xb5)](),'cmds':[_0x324681[_0x46fe8b(0x1f6)][_0x3d850d(0xb6)]]});else _0xa35166[_0x46fe8b(0x1d5)](_0x24ebed=>_0x24ebed[_0x46fe8b(0x206)][_0x3d850d(0xb5)]()==_0x324681[_0x3d850d(0xa0)][_0x3d850d(0xb4)][_0x46fe8b(0x1d9)]())[_0x3d850d(0xbd)]['push'](_0x324681['config'][_0x3d850d(0xb6)]);}return _0xa35166[_0x3d850d(0xa1)](_0x239ec8=>_0x184284+=_0x46fe8b(0x1df)+(_0x239ec8[_0x3d850d(0x8b)][_0x3d850d(0xba)](0x0)[_0x3d850d(0xad)]()+_0x239ec8[_0x3d850d(0x8b)][_0x46fe8b(0x21a)](0x1))+_0x3d850d(0xcd)+_0x239ec8[_0x3d850d(0xbd)]['join'](_0x46fe8b(0x20d))+'\x0a\x0a'),_0x44ec78[_0x3d850d(0xa8)](_0x184284+_0x39991e('helpAll',_0x1e143f['size'],_0x26695d),_0x375975,async(_0x21c075,_0x433985)=>{const _0x33826d=_0x46fe8b,_0x53f7e0=_0x3d850d;global[_0x53f7e0(0x92)]['handleReaction'][_0x53f7e0(0xb1)]({'name':this[_0x53f7e0(0xa0)][_0x53f7e0(0xb6)],'messageID':_0x433985[_0x53f7e0(0xa2)],'author':_0x4dae53['senderID']});if(_0x2fdd24)return await new Promise(_0x929404=>setTimeout(_0x929404,_0x51200d*0x3e8)),_0x44ec78[_0x33826d(0x1d7)](_0x433985['messageID']);else return;});}return _0x44ec78[_0x3d850d(0xa8)](_0x39991e(_0x3d850d(0x8f),_0x17c7c4[_0x3d850d(0xa0)][_0x3d850d(0xb6)],_0x17c7c4[_0x3d850d(0xa0)][_0x3d850d(0xa9)],''+_0x26695d+_0x17c7c4[_0x3d850d(0xa0)]['name']+'\x20'+(_0x17c7c4[_0x3d850d(0xa0)][_0x3d850d(0xa5)]?_0x17c7c4[_0x3d850d(0xa0)][_0x3d850d(0xa5)]:''),_0x17c7c4[_0x3d850d(0xa0)][_0x46fe8b(0x1f5)],_0x17c7c4[_0x3d850d(0xa0)][_0x3d850d(0xc3)],_0x17c7c4[_0x3d850d(0xa0)][_0x46fe8b(0x1d1)]==0x0?_0x39991e(_0x3d850d(0xbe)):_0x17c7c4[_0x3d850d(0xa0)][_0x46fe8b(0x1d1)]==0x1?_0x39991e(_0x3d850d(0xa7)):_0x39991e(_0x3d850d(0x9b)),_0x17c7c4[_0x3d850d(0xa0)][_0x3d850d(0xc9)]),_0x375975,_0x2ec21e);});function _0x5ce7(){const _0x40ad08=['4894nJgiHz','2peqjdB','3RRgWdY','10759630CEQayL','commandCategory','config','exports','8605dcBxDI','indexOf','\x20🏙️🏙️🏙️\x0a','702368cuqmAp','author','run','2ySQXRo','shift','PREFIX','adminBot','handleEvent','cooldowns','386041arCwPB','credits','group','toUpperCase','9sAKHSY','BOTNAME','has','arraygroup','cmdarray','\x20•\x20','58081iSEXpQ','handleReaction','messageID','forEach','48079KJFhdJ','trim','1DNIGBF','push','1000014OPBrtR','1EEaDzw','charAt','adminGroup','slice','hasPermssion','8168504nARmCg','usages','32242RaWdor','find','commands','unsendMessage','cmds','toLowerCase','6300292JAHWYv','split','355GAACVn','177098EMNboL','description','≻───────\x20•⁂•\x20───────≺\x0a🏩🏩🏩','sendMessage','handleReply','userID','name','35shvVcE','threadID','body','replyhelp','undefined','31657296OKpUjA','type','senderID','some','moduleInfo','client','get','getData'];_0x5ce7=function(){return _0x40ad08;};return _0x5ce7();}