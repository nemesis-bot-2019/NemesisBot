const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

console.log(`Nemesis Starting...`);

client.login(process.env.BOT_TOKEN);


client.on( 'ready', () => {
	console.log(`Nemesis: Logged in as ${client.user.tag}!`);
});


client.on( 'message', message => {

	if (message.author.bot) {
		return;
	}

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
		message.channel.send(help);
		return;
	}
	
	if ( text === 'greetings' ) {
		message.channel.send(welcome);
		return;
	}

	if ( text.includes('nemesis') ) {
		message.channel.send('I\'m listening...');
		return;
	}
});

client.on( 'guildMemberAdd', (member) => {

	//console.log('guildMemberAdd');
	//console.log(`  member=${member}`);

});

client.on( 'presenceUpdate', (oldMember, newMember) => {

	//let oldUserChannel = oldMember.voiceChannel
	// let newUserChannel = newMember.voiceChannel

	// let username = newMember.user.username
	// let currentGame = newMember.user.presence.game
	// let currentStatus = newMember.user.presence.status

	// console.log(`presenceUpdate: ${username}` );
	// console.log(`  Status: ${currentStatus}` );
	// console.log(`  Channel: ` + (newUserChannel !== undefined ? newUserChannel.name : 'unknown') );
	// console.log(`  Game: ` + (currentGame !== undefined ? currentGame.name : 'none') );

	// if ( newUserChannel !== undefined && newUserChannel.name === "ROE" && (oldUserChannel === undefined || oldUserChannel.name !== "ROE") ) {
	// 	console.log(`${username} Joined Channel ${newUserChannel.name}`);
	// 	let textChannel = client.channels.get("378372436435009537");
	// 	textChannel.send('Nemesis welcomes ${newUserChannel.name} to the fight', { tts: true });
	// }

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


