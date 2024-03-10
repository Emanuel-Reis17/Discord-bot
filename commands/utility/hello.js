const { SlashCommandBuilder } = require("discord.js");

const getHoraAtual = (formato24, user) => {
    const dataAtual = new Date();
    let horas = dataAtual.getHours();

    if (!formato24) horas = (horas % 12) || 12;

    if (horas >= 5 && horas < 12) {
        return `Bom dia **${user}**! Que o seu dia seja repleto de oportunidades e alegrias. Tenha um excelente dia!`;
    } else if (horas >= 12 && horas < 18) {
        return `Boa tarde **${user}**! Espero que sua tarde esteja sendo produtiva e cheia de energia. Tenha uma tarde maravilhosa!`;
    } else {
        return `Boa noite **${user}**! Que a tranquilidade da noite traga paz ao seu coração e prepare-o para um descanso revigorante. Tenha uma boa noite e sonhos doces!`;
    }
}


module.exports = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Say hi to the user."), 
    async execute(interaction) {
        await interaction.reply(getHoraAtual(true, interaction.user.username));
    }
}
