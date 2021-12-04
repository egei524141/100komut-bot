const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL();
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(
        `**${
          message.guild.members.cache.random().user.tag
        }** sunucudaki Ali Vefa sensin.`
      )
    .setFooter(
      `${message.author.username} tarafından istendi.`,
      userinfo.avatar
    )
      .setImage(
        "https://66.media.tumblr.com/549f3b58605bf618e2808921b32d54ad/tumblr_pz5uuk53Fg1y4slboo1_250.gifv"
      )
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "alivefa",
  description: "Sunucudaki şanslı Ali Vefa'yı gösterir.",
  usage: "alivefa",
  kategori: "kullanıcı"
};
