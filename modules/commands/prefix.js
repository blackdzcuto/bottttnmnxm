module.exports.config = {
	name: " ",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DũngUwU",
	description: "nothing",
	commandCategory: "General",
	usages: "",
	cooldowns: 5
};

module.exports.run = async function({ api, event }) {
       let dny = ["Bạn đã biết.","Dũng là một thằng ấu dâm.","Đùi là chân lý.","Gái gú chỉ là phù du, loli mới là bất diệt.","DũngUwU là một thằng nghiện loli.","Bạn đang thở.","Dũng rất đẹp trai.","Trái đất hình vuông.","Kẹo sữa Milkita được làm từ sữa.","Chim cánh cụt có thể bay.","yêu dũng nên chấm hả.","tiến dũng đẹp trai quá đi hoiii.","admin rất đẹp trai.","thanh thảo xinh gái.","bạn đang đọc điều này."];
       api.sendMessage('[Bạn có biết?]:' + dny[Math.floor(Math.random()*dny.length)],event.threadID,event.messageID);
}