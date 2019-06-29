const Discord = require('discord.js');
const client = new Discord.Client();

console.log(`Nemesis Starting...`);

client.login(process.env.BOT_TOKEN);

const welcome = `
	**Department of Homeland Security (DHS) - Fusion Center Paranormal (P)** 
	___
	Rules:
	* Dont make fun of bigAPE
	* Be kind to Chote
	* Checkout awesome books at BewareOfMonsters.com 
	  * http://BewareOfMonsters.com
`;


client.on( 'ready', () => {
	console.log(`Nemesis: Logged in as ${client.user.tag}!`);
});


client.on( 'message', message => {

	var text = message.content.toLowerCase();

	if ( text.startsWith('nemesis') ) {

		if ( text === 'nemesis' ) {
			message.channel.reply('GRRRAW!!');
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
			message.channel.send('*SPAN*');	
			message.channel.send(new Discord.Attachment('https://www.dropbox.com/s/nmvxz8jdxf23dwv/nemesis-1.jpg?dl=1', 'nemesis.jpg'))
			return;
		}

		if (text.includes('personal selfie')) {
			message.send('*SPAN*');	
			message.send(new Discord.Attachment('https://www.dropbox.com/s/nmvxz8jdxf23dwv/nemesis-1.jpg?dl=1', 'nemesis.jpg'))
			return;
		}

		message.reply('I\'m listening...', { tts: true });
	}

	if ( text === 'help nemesis' ) {
		message.reply('Options:\n* Trying asking Nemesis for a selfie.\n* Ask her to each Chote.');
		return;
	}
	
	if ( text === 'greetings' ) {
		message.channel.send(welcome);
		return;
	}

});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'member-log');

	if (!channel) {
		return;
	}

	channel.send('Welcome ${member},\n\n' + welcome);
});

