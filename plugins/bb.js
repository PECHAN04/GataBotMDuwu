let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bebe.mp3'
conn.sendFile(m.chat, vn, 'bebe.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /bb|bebe|Bebe|Bb/ 
handler.command = new RegExp
module.exports = handler
