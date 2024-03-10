const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("server")
        .setDescription("Provides information about the server"), 
    async execute(interaction) {
        interaction.reply(`Este servidor é **${interaction.guild.name}** e possui **${interaction.guild.memberCount}** membros.`);
    }
}