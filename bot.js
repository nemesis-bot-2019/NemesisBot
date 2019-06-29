const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Nemesis: Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	message.reply('I am watching...');
	if (message.content === 'Nemesis') {
		message.reply('GRRRAW!!');
	}
});

client.login(process.env.BOT_TOKEN);