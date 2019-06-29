const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Nemesis: Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (message.content === 'Nemesis') {
		message.reply('GRRRAW!!');
	}
	if (message.content === 'Nemesis eat Chote') {
		message.reply('Mmmmmm... tasty, tasty Chote. *NOM*');
	}
});

console.log(`Nemesis Starting...`);
client.login(process.env.BOT_TOKEN);
