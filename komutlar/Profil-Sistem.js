const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`Kroweep Bot  | Profil Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/824633401096011862/824662081882161214/standard_3.gif"
    )
    .setDescription(
      `⌚️ Kroweep Bot Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Profilim__**`,
      `🧿 \`${prefix}profilim\` \n Kendi Yaptıgın Özel Profilini Görürsün.`,
        true
    )
    .addField(
      `**__İsim Ayarla__**`,
      `🧿 \`${prefix}isim-ayarla\` \n Özel Profilinize İsim Ayarlarsınız.`,
         true
    )
  .addField(
      `**__Yaş Ayarla__**`,
      `🧿 \`${prefix}yaş-ayarla\` \n Özel Profilinize Yaş Ayarlarsınız.`,
            true
    )
  .addField(
      `**__Soyİsim Ayarla__**`,
      `🧿 \`${prefix}soyisim-ayarla\` \n Özel Profilinize Soyİsim Ayarlarsınız.`,
      true
    )
  .addField(
      `**__Cinsiyet Ayarla__**`,
      `🧿 \`${prefix}cinsiyet-ayarla\` \n Özel Profilinize Cinsiyet Ayarlarsınız.`,
      true
    )
  .addField(
      `**__Bayrak Ayarla__**`,
      ` \`${prefix}bayrak-ayarla\` \n Özel Profilinize Bayrak Ayarlarsınız.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `💎  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 💎 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 💎 \`${prefix}iletişim\` | QualitySel İletişim Bilgileri.`
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
  name:"profil-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
