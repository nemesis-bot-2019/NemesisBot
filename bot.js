const Discord = require('discord.js');
const client = new Discord.Client();

console.log(`Nemesis Starting...`);
client.login(process.env.BOT_TOKEN);


client.on('ready', () => {
	console.log(`Nemesis: Logged in as ${client.user.tag}!`);
});


client.on('message', message => {

	if (message.content.toLowerCase() === 'nemesis') {
		message.reply('GRRRAW!!');
		return;
	}

	if (message.content.toLowerCase() === 'nemesis eat chote') {
		message.reply('Mmmmmm... tasty, tasty Chote. \*NOM!\* \*NOM!\* \*NOM!\* Delicious.');
		return;
	}



	if (message.content.toLowerCase().includes('nemesis')) {
		message.reply('I\'m listening...');
	}

});

