const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })

client.login("OTM5NTkxMjU1OTgwMTM4NTU2.Yf7EjA.wFNZ0OLJJ7Dha7MVQdqpbmRy8z0")

client.on ("ready", () =>  {
    console.log ("Il bot è online!")
})

client.on("messageCreate", (message) => {
    if(message.content == "sp!info") {
    message.author.send({ content: "scemo chi legge" })
}

    if(message.content == "sp!esempio") {
        message.channel.send("Ciao sono il bot del server street people!")
    }
})
client.on("messageCreate", message => {
    if (message.channel.type == "DM") return

    if (message.member.roles.cache.has("idRuolo1") || message.member.roles.cache.has("idRuolo2")) return

    var parolacce = ["sedia", "lampada", "ciao come va"]
    var trovata = false;
    var testo = message.content;

    parolacce.forEach(parola => {
        if (message.content.toLowerCase().includes(parola.toLowerCase())) {
            trovata = true;
            testo = testo.replace(eval(`/${parola}/g`), "###");
        }
    })

    if (trovata) {
        message.delete();
        var embed = new Discord.MessageEmbed()
            .setTitle("Hai detto una parolaccia")
            .setDescription("Hai scritto un messaggio con parole bloccate\rIl tuo messaggio: " + testo)

        message.channel.send({ embeds: [embed] })
    }

    if (message.content == "!comando") {
        const embed = new Discord.MessageEmbed()
            .setTitle("Titolo")  
            .setFooter("es")
            .setTimestamp() 
        message.channel.send({embeds: [embed]})
    }
})
