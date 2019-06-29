const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Nemesis has arrived!');
});

client.on('message', message => {
	if (message.content === 'Nemesis') {
		message.reply('GRRRAW!!');
	}
});

client.login(process.env.BOT_TOKEN);