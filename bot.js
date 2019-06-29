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
			message.channel.send('*SPAN*', { file: 'https://previews.dropbox.com/p/thumb/AAdQf9KsWdCvkN7Z7yaEn7qgpf0VUcgV0ZJwDso4ou7A5pl0lYSZDcZE5hSNeGQRebBx1L4daID8EpSawKPzuMyNSHQsql1_qTHawcpVxFSUmmHWsTZmecL_USmakld327tDx05PCdciNiN5LMM7OJVxvxGyY4qaf3YyVaFm0wA-9tMlx-FDWITiVSAjQAYtfhRmM1yJtRwAmhkT7VVdLucwo4QYgplI5CkI4H6aXG6R48iSSv9576NO1unhp0hFy-74gtR_h3bEiBaHP-WDOXmvP0JKmJmJ4zgW4EkOz_TQuDRVYRqlqaCvrcP1mmRgpHZImq91l1IpldbBEbPUwQ5EO72mNc0pJKC3FoXUyWcqTSrY27PW7xYsgZY0XHUv1i4byR_rVmO66ZAgZi9tyh52OzPhsoNovTiNNMO0TSR43bVBmqRuFNzDP-PMvYDdh2KZvbtCkGvJeq2K1XX6YfnF/p.jpeg' });	
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

