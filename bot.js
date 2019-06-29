const Discord = require('discord.js');
const client = new Discord.Client();

console.log(`Nemesis Starting...`);
client.login(process.env.BOT_TOKEN);


client.on( 'ready', () => {
	console.log(`Nemesis: Logged in as ${client.user.tag}!`);
});


client.on( 'message', message => {

	var text = message.content.toLowerCase();

	if ( text.startsWith('nemesis') ) {

		if ( text === 'nemesis' ) {
			message.reply('GRRRAW!!');
			return;
		}

		if (text.includes('who\'s the')) {
			message.reply('bigAPE... duh.');
			return;
		}

		if (text.includes('eat chote')) {
			message.reply('Mmmmmm... tasty, tasty Chote. \*NOM!\* \*NOM!\* \*NOM!\* Delicious.');
			return;
		}

		if (text.includes('selfie')) {
	        const attachment = new Attachment('./resources/nemesis-1.jpg');
	        message.channel.send(`${message.author},`, attachment);
		}

		message.reply('I\'m listening...', { tts: true });
	}

	if ( text === 'help nemesis' ) {
		message.reply('Trying asking Nemesis for a selfie.');
	}

});

