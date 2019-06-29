const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Nemesis: Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	console.log(`Nemesis Hears: ` + message);
	if (message.content === 'Nemesis') {
		message.reply('GRRRAW!!');
	}
});

console.log(`Nemesis Starting...`);
client.login('NTk0MzY1MDg1ODE2NzE3MzMz.XRbrww.ntKq2Rekoy3jkGJwA9y88y3zE0Y');
// client.login(process.env.BOT_TOKEN);
