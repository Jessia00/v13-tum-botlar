const { Message, MessageEmbed } = require("discord.js");
const GUILDS_SETTINGS = require('../../../../database/Schemas/Global.Guild.Settings');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

 /**
 * @param {Message} message 
 */

module.exports = async (message) => { 
  
    // Sync Data's
    let Data = await GUILDS_SETTINGS.findOne({ _id: 1 })
    ayarlar = client._settings = global.ayarlar = global._settings = kanallar = client._channels = global.kanallar = global.channels =  roller = client._roles = global.roller = global._roles = Data.Ayarlar
    const adapter = new FileSync("../../base/Ayarlar/emojiler.json")
    const db = low(adapter)
    emojiler = client._emojis = global.emojiler = global._emojis = db.value();
    cevaplar = client._reply = global.cevaplar = global._reply = require('../../../../base/Ayarlar/cevaplar');
    // Sync Data's

    if (!global.sistem.botSettings.Prefixs.some(x => message.content.startsWith(x)) || !message.channel || message.channel.type == "dm") return;
    let args = message.content.substring(global.sistem.botSettings.Prefixs.some(x => x.length)).split(" ");
    let komutcuklar = args[0].toLocaleLowerCase()
    let cartel = message.client;
    args = args.splice(1);
    let calistirici;

    if(cartel.commands.has(komutcuklar) || cartel.aliases.has(komutcuklar)) {
      if (!(ayarlar && sistem.Rooter.Users && sistem.Rooter.Users.some(user => user.isim === message.member.user.username)) && message.guild.ownerId != message.member.id && client.user.id != message.member.id ) return;
          calistirici = cartel.commands.get(komutcuklar) || cartel.aliases.get(komutcuklar);
          if(calistirici) calistirici.komutClient(cartel, message, args);
    } 

};

module.exports.config = {
    Event: "messageCreate"
};
