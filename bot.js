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
client.login(process.env.BOT_TOKEN);
