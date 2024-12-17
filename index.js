const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('diewe atau ngewe')
        .setName('Genshin Impact')
        .setDetails('Lv 58 | langtzy')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1146087440357011666/1242687267320102953/IMG-20240424-WA0603.jpg')
        .setAssetsLargeText('Visit this')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1146087440357011666/1242688541780217930/Diamond_JE3_BE3.png')
        .setAssetsSmallText('Verified')
        .addButton('Yt Channel', 'https://www.youtube.com/channel/@galangthejokr')
        .addButton('Discord Server', 'https://discord.com/invite/YsynWR8Uc4');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);












