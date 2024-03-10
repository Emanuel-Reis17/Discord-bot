const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("Provides information about the user."),
    async execute(interaction) {
        await interaction.reply(`Este comando foi acionado por **${interaction.user.username}**, que se juntou em **${interaction.member.joinedAt}** .`);
    }
};