const Discord = require('discord.js');
const client = new Discord.Client();

console.log(`Nemesis Starting...`);
client.login(process.env.BOT_TOKEN);


client.on( 'ready', () => {
	console.log(`Nemesis: Logged in as ${client.user.tag}!`);
});


client.on( 'message', msg => {

	var message = msg.content.toLowerCase();
	if ( message.startsWith('nemesis') ) {

		if ( message === 'nemesis' ) {
			message.reply('GRRRAW!!');
			return;
		}

		if (message.includes('eat chote')) {
			message.reply('Mmmmmm... tasty, tasty Chote. \*NOM!\* \*NOM!\* \*NOM!\* Delicious.');
			return;
		}

		


		message.reply('I\'m listening...');
	}

});

