require('dotenv').config()
const Discord = require('discord.js')
const quotes = require('./quotes.json')

const token = process.env.DISCORD_TOKEN
const client = new Discord.Client()

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (message) => {
	if (message.content === 'Give me a quote') {
		const { quote, author } = quotes[randomQuote()]
		message.channel.send(`${quote} - ${author}`)
	}
	if (message.content === 'what is my avatar') {
		// Send the user's avatar URL
		message.reply(message.author.displayAvatarURL())
	}
})

const randomQuote = () => Math.floor(Math.random() * quotes.length)

client.login(token)
