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
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1263708674505834562/1316266459218972702/ab0064976a88d3f88cfc4217d6829d13.gif?ex=6762552a&is=676103aa&hm=bfbf90068fd95a214f2c872d627c10f3af84eec24310814ffae85f0975ed3378&')
        .setAssetsLargeText('Visit this')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1263708674505834562/1317873295156314213/ddd67a00297de983b9c275294f4e66b6.jpg?ex=67623ee6&is=6760ed66&hm=8c803409198ac7fb5e133c81b3ddd1765d94b8d923bfe026e984b34315bcf91f&')
        .setAssetsSmallText('Verified')
        .addButton('Yt Channel', 'https://www.youtube.com/channel/@galangthejokr')
        .addButton('Discord Server', 'https://discord.com/invite/YsynWR8Uc4');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login("OTc3NTAzMDkxMzkxODYwNzY5.GITKxa.8Mf6Y5k0M_rcCjriY4Na3hKisr53y53gbQkV3c");












