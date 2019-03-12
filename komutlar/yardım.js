const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
.addField("**Eğlence ve Kullanıcı Komutları:**", `o!banned = Dene ve Gör! \o!avatarım = Avatarınınızı Gösterir. \no!herkesebendençay = Herkese Çay Alırsınız. \no!koş = Koşarsınız.\no!çayiç = Çay İçersiniz. \no!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \no!çayaşekerat = Çaya Şeker Atarsınız. \no!yumruh-at = Yumruk Atarsınız. \no!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \no!sunucuresmi = BOT Sunucunun Resmini Atar. \no!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \no!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \no!şifre = rastgele şiifre verir \no!emojiyazı = emoji ile yazı yazar \no!yazıtura = yazı tura atar \no!stresçarkı = stres atarsınız :P `)
  .addField("**Yetkilisi Komutlar**", `o!ban = İstediğiniz Kişiyi Sunucudan Banlar. \no!kick  = İstediğiniz Kişiyi Sunucudan Atar. \no!unban = İstediğiniz Kişinin Yasağını Açar. \no!sustur = İstediğiniz Kişiyi Susturur. \no!oylama = Oylama Açar. \no!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "o!yardım = BOT Komutlarını Atar. \no!bilgi = BOT Kendisi Hakkında Bilgi Verir. \no!ping = BOT Gecikme Süresini Söyler. \no!davet = BOT Davet Linkini Atar. \no!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**")
  .setFooter('**oguzhanzi**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
