const Discord = require('discord.js');
const client = new Discord.Client();
var botver = 'rewrite'

client.on('ready', () => {
    console.log('whyRewrite')
    client.user.setActivity(botver + ' | why#help', {type:'PLAYING'})
});

client.on('message', message => {
    const lc = message.content.toLowerCase();
    if (lc === prefix + 'help') {
        embed = new Discord.RichEmbed();
        embed.setColor("#80FF66");
        embed.setAuthor("WhyBeta Help");
        embed.setDescription("You can use this Commands with WhyBeta. Just type why#[command]");
        embed.addField("Commands", "ping\npong\nrps\n8ball\ncups\npizza\nhelp", true);
  
        embed.setFooter("WhyBeta by JPlexer " + botver);
        message.channel.send("", { embed: embed });
  return true;
    }
});
