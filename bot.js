const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

console.log(`Nemesis Starting...`);

client.login(process.env.BOT_TOKEN);


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
			message.channel.send('*SNAP!*', { file: 'https://i.pinimg.com/originals/25/69/03/256903626eaeba810b0615db5fc1327b.jpg' });	
			return;
		}
	}

	if ( text === 'help nemesis' ) {
		message.channel.send('Options:\n* Trying asking Nemesis for a selfie.\n* Ask her to each Chote.');
		return;
	}
	
	if ( text === 'greetings' ) {
		message.channel.send(welcome);
		return;
	}

	if ( text.includes('nemesis') ) {
		message.channel.send('I\'m listening...', { tts: true });
		return;
	}
});

client.on( 'guildMemberAdd', (member) => {
	console.log('guildMemberAdd');
	console.log(`  member=${member}`);
});

client.on( 'presenceUpdate', (oldMember, newMember) => {

	console.log('presenceUpdate');
	console.log(`  oldMember=${oldMember}`);
	console.log(`  oldMember=${oldMember.name}`);
	console.log(`  newMember=${newMember}`);
	console.log(`  newMember=${newMember.name}`);

	let newUserChannel = newMember.voiceChannel
	let oldUserChannel = oldMember.voiceChannel

	if ( oldUserChannel !== undefined ) {
		console.log(`  oldUserChannel=${oldUserChannel}`);
		console.log(`  oldUserChannel=${oldUserChannel.name}`);
	}
	if ( newUserChannel !== undefined ) {
		console.log(`  newUserChannel=${newUserChannel}`);
		console.log(`  newUserChannel=${newUserChannel.name}`);
	}

});




const welcome = `
**Department of Homeland Security (DHS) - Fusion Center Paranormal (P)** 

Rules:
* Dont make fun of bigAPE
* Be kind to Chote
* Checkout awesome books at http://BewareOfMonsters.com
`;


const help = `
**Department of Homeland Security (DHS) - Fusion Center Paranormal (P)** 

Options:
* Prefix requests with \"Nemesis\"
* Say her name
* Ask her for a selfie
`;


