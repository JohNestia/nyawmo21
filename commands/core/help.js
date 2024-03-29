module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: '#fca5ca',
                    author: { name: 'Help pannel' },
                    footer: { text: `Nyawmo Premium "semua berhak menjadi premium"` },
                    fields: [
                        { name: '<a:1_:811909074660491295> Bot', value: infos },
                        { name: '<a:1_:811909074660491295> Music', value: music },
                    ],
                    timestamp: new Date(),
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: '#fca5ca',
                    author: { name: 'Help pannel' },
                    footer: { text: 'This bot uses a Github project made by Zerio (ZerioDev/Music-bot)' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: '**Jangan lupa join Nyawmo Premium** \n[**Donate**](https://saweria.co/nyawmo) \n_**"semua berhak menjadi premium"**_',
                }
            });
        };
    },
};
