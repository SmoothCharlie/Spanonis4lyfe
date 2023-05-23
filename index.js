const { CommandClient } = require('eris')

// Stupid ass bot creation
async function init(token) {
    const Spanoni4lyfe = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the stupid ass command
    Spanoni4lyfe.on('ready', async () => {
        await Spanoni4lyfe.bulkEditCommands([{
            name: 'Spanoni 4 Lyfe',
            description: 'Spanonis run southside! Ayooo Don',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${Spanoni4lyfe.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // Stupid ass interaction creation event
    Spanoni4lyfe.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'lol') {
            await interaction.createMessage({
                content: 'Most of their members are fearless shooters known to be very hostile towards people who disrespect them. Because of that, once someone makes it clear that their intentions were to disrespect the family or any of its members, the family is generally oriented towards punishing them by demanding vast sums of money.'
            })
            console.log('Self destructing...')
            process.exit(0)
        }
    })
    Spanoni4lyfe.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);
