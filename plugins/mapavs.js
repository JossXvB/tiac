const handler = async (m, {conn}) => {
  m.reply(global.mapavs);
};
handler.command = /^(Mapavs|mapavs|plantillamapa|mpabierto)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.mapavs = `
🎀 𝐕𝐒 🎀

•𝐇𝐎𝐑𝐀𝐑𝐈𝐎: 🇦🇷🇨🇱/🇧🇴/🇵🇪 
•𝐂𝐎𝐋𝐎𝐑 𝐃𝐄 𝐑𝐎𝐏𝐀: 
•𝐃𝐎𝐍𝐀 𝐒𝐀𝐋𝐀:

      𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1

🗣 ┇
🪷 ┇
🪷 ┇  
🪷 ┇  
      
     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2

🗣 ┇
✨ ┇
✨ ┇
✨ ┇

ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
✨ ┇ 
✨ ┇
`;
