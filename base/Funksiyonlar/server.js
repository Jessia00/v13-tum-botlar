const { Client, Collection, GuildMember, Guild, MessageEmbed, TextChannel } = require('discord.js');
const Webhooks = {}
const { richEmbed } = require("./embed");

Guild.prototype.kanalıBul = function(content) {
    let kanal = this.channels.cache.find(k => k.name === content) || this.channels.cache.find(k => k.id === content) || this.client.channels.cache.find(e => e.id === content) || this.client.channels.cache.find(e => e.name === content)
    if(!kanal) return client.logger.log(`${content} kanalını ${this.name} sunucusun da aradım fakat bulamadım.`,"error");
    return kanal;
}
Guild.prototype.kategoriyiBul = function (content) {
    const kategori = this.channels.cache.find(c => c.type === 'GUILD_CATEGORY' && (c.id === content || c.name.toLowerCase() === content.toLowerCase()));
    if(!kategori) return client.logger.log(`${content} kategorisini ${this.name} sunucusun da aradım fakat bulamadım.`,"error");
    return kategori;
  };
Guild.prototype.rolüBul = function(content) {
        let rol = this.roles.cache.find(r => r.name === content) || this.roles.cache.find(r => r.id === content)
    if(!rol) return client.logger.log(`${content} rolünü ${this.name} sunucusun da aradım fakat bulamadım.`,"error");
    return rol;
}

Guild.prototype.kanalıBul = function(content) {
    let kanal = this.channels.cache.find(k => k.name === content) || this.channels.cache.find(k => k.id === content) || this.client.channels.cache.find(e => e.id === content) || this.client.channels.cache.find(e => e.name === content)
        if(!kanal) return client.logger.log(`${content} kanalını ${this.name} sunucusun da aradım fakat bulamadım.`,"error");
    return kanal;

}

Guild.prototype.emojiyiBul = function(content) {
    let emoji = this.emojis.cache.find(e => e.name === content) || this.emojis.cache.find(e => e.id === content) 
    if(!emoji) {
        if(this.client.emojis.cache.find(e => e.id === content) || this.client.emojis.cache.find(e => e.name === content)) {
            let emojicik = this.client.emojis.cache.find(e => e.id === content) || this.client.emojis.cache.find(e => e.name === content)
            if(!emojicik) return '#EmojiBulunamadı';
            if(emojicik.animated) return `<a:${emojicik.name}:${emojicik.id}>`;
            return `<:${emojicik.name}:${emojicik.id}>`;
        }
    }
    return emoji;
}


Collection.prototype.array = function () {
    return [...this.values()]
  }



  TextChannel.prototype.APIhookSend = async function(content, opt = {}) {
    client.logger.log(`Web panel üzerinden ${opt.channel_name} kanalına "${content}" içeriği gönderildi.`, "log")
    let entegrasyonlar = await this.fetchWebhooks();
    let webh = entegrasyonlar.find(e => e.name == (opt.name ? opt.name : client.user.username)),
        result;
    if (!webh) {
        webh = await this.createWebhook(opt.name ? opt.name : client.user.username, {
            avatar: client.user.avatarURL(),
        });

        Webhooks[this.id] = webh;

        if(opt.embed) {
            result = await webh.send({embeds: [new richEmbed().açıklama(`${content}`)]})
        } else {
            result = await webh.send(content)
        }
    } else {
        Webhooks[this.id] = webh;

        if(opt.embed) {
            result = await webh.send({embeds: [new richEmbed().açıklama(`${content}`)]})
        } else {
            result = await webh.send(content)
        }
    }
    return result;
};

TextChannel.prototype.wsend = async function(content, opt = {}) {
    if (Webhooks[this.id]) return (await Webhooks[this.id].send(content));
    let entegrasyonlar = await this.fetchWebhooks();
    let webh = entegrasyonlar.find(e => e.name == (opt.name ? opt.name : client.user.username)),
        result;
    if (!webh) {
        webh = await this.createWebhook(opt.name ? opt.name : client.user.username, {
            avatar: client.user.avatarURL(),
        });

        Webhooks[this.id] = webh;

        if(opt.embed) {
            result = await webh.send({embeds: [new richEmbed().açıklama(`${content}`)]})
        } else {
            result = await webh.send(content)
        }
    } else {
        Webhooks[this.id] = webh;

        if(opt.embed) {
            result = await webh.send({embeds: [new richEmbed().açıklama(`${content}`)]})
        } else {
            result = await webh.send(content)
        }
    }
    return result;
};

Array.prototype.last = function () {
    return this[this.length - 1];
};

Array.prototype.listRoles = function () {
    return this.length > 1 ? this.slice(0, -1).map((x) => `${x}`).join(", ") + " ve " + this.map((x) => `${x}`).slice(-1) : this.map((x) => `${x}`).join("");
};
