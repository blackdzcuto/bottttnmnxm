const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕ Toàn Hắc Cơ ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ Toàn Hắc Cơ ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.green('[ XTool - Royal ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ XTool - Royal ] » ') + data);
			break;
		default:
			console.log(chalk.blue(`[ XTool - Royal ] » `) + data);
			break;
	}
}
 