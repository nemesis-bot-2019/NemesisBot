const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

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
			message.channel.send('GRRRAW!!');
			return;
		}

		if (text.includes('who\'s the')) {
			message.channel.send('bigAPE... duh.');
			return;
		}

		if (text.includes('eat chote')) {
			message.channel.send('\nMmmmmm... tasty, tasty Chote. \n\*NOM!\* \*NOM!\* \*NOM!\* \nDelicious.');
			return;
		}

		if (text.includes('eat bigape')) {
			message.channel.send('\nGet stuffed. He\'s my dope homeboy.');
			return;
		}

		if (text.includes('selfie')) {
			message.channel.send('*SPAN*', { file: 'https://www.dropbox.com/s/nmvxz8jdxf23dwv/nemesis-1.jpg?dl=1' });	
			return;
		}
	}

	if ( text === 'help nemesis' ) {
		message.reply('Options:\n* Trying asking Nemesis for a selfie.\n* Ask her to each Chote.');
		return;
	}
	
	if ( text === 'greetings' ) {
		message.reply(welcome);
		return;
	}

	if ( text.includes('nemesis') ) {
		message.channel.send('I\'m listening...', { tts: true });
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

