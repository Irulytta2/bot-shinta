let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `https://wa.me/6288227506419${nomorown.split`@`[0]}`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ https://wa.me/6288227506419${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Dahulukan salam, bukan "P"
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner online kecuali turu
• No Telp 088227506419 (wa only)

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : IRUL
${htjava} *✉️ Nama RL* : KEPO
${htjava} *♂️ Gender* : Boys
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : 27-5-2001
${htjava} *🎨 Umur* : HITUNG SENDIRI
${htjava} *🧮 Kelas* : DAH LULUS
${htjava} *🧩 Hobby* : TURU
${htjava} *💬 Nomor* : 088227506419
${htjava} *🗺️ Tinggal* : KUDUS , JATENG
${htjava} *❤️ Waifu* : KEPO

${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ko.iruul ${sig}
•·––––––––––––––––––––––––––·•
`
  let teks = 'Pilih dibawah kak ! o(〃＾▽＾〃)o'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • Nomor", rowId: ".owner nomor"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".donasi"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
