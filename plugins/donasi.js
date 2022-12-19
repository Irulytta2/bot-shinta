import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `-`
    return conn.sendButton(m.chat, 'Donasi Pm Owner aja.\n❏  :v', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/ko.iruul",
                mediaType: "VIDEO",
                title: 'Donasi To 𝐒𝐇𝐈𝐍𝐓𝐀𝐀-𝐁𝐎𝐓🦋 ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler
