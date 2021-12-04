const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`Kroweep Bot  | AboneRol Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/826048182990667806/standard_2.gif"
    )
    .setDescription(
      `💠 Kroweep Bot  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Abone__**`,
      `🔸 \`${prefix}abone\` \n Youtubunuza Abone Olan Kişiye Abone Rol Verir.`,
        true
    )
     .addField(
      `**__Abone Yetkili__**`,
      `🔸 \`${prefix}abone-yetkili\` \n Abone Rölünü Verecek Kişinin AboneRol Yetkilisini Ayarlar.`,
        true
    )
     .addField(
      `**__Abone Rol__**`,
      `🔸 \`${prefix}abonerol\` \n Abone Olan Kişiye Verilecek Rölü Ayarlama.`,
        true
    )

    .addField(
      `__Bilgilendirme__`,
      `🌀  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🌀 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🌀 \`${prefix}iletişim\` | Kroweep Bot  İletişim Bilgileri.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"abonerol-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
