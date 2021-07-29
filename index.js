const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('Best Bot on Discord is online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        message.channel.send('pong!');
    }
});

// Needs to be last line of file
client.login('ODcwMDgwODQ0ODc2ODg2MDE2.YQHj7g.NqsR8F0DJxWuQUDnXnTRQmvGYJ4');