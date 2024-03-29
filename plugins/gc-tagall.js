const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*@* ${pesan}`;
  let teks = `*🦋 𝒍𝒂 𝒕𝒊𝒂 𝒄𝒂𝒓𝒐 𝒍𝒐𝒔 𝒍𝒍𝒂𝒎𝒂 🏴‍☠*\n\n ${oi}\n\n- ̗̀  🦋 𝐼ᥒ𝗍ᥱ𝑔𝑟ᥲᥒ𝗍ᥱ𝑠 !\n`;
  for (const mem of participants) {
    teks += `꒰꒱🍄 @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* 𝑻𝒊𝒂 𝒄𝒂𝒓𝒐  🍓\n\n*🍄*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;