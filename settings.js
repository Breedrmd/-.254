//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : 𝐅𝐥𝐲𝐧𝐧𝐌𝐃 💭
// @author : 𝐜.𝐫.𝐢.𝐬.𝐬 💯
// @youtube : 
// @instagram : heyits_flynn___254
// @telegram : 
// @github : Dark-breedrmd
// @tiktok : 
// @whatsapp : +254782944849

//----------------------[ 𝐅𝐥𝐲𝐧𝐧 𝐌𝐃 ]----------------------//

const fs = require('fs')
//File System module - because even bots need to read and write💁‍♂️
const { color } = require('./lib/color')
//Colouring console because plain text is quite boring😑
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAEhapFpd1UaXVgUAAP0IAAAKAAAAY3JlZHMuanNvbpVVzY7qRhZ+lavaQl*wv0FqKbYBt7H5awMGRlkU5fIPNrYp2xhzxWbmKtGsJskiSkshyTKvMFKieY1ZzjorHmHkpnv6zmRy0*HiuFSuOuc753zf8TsQxX6KdVyC9juQEH8PM1wtszLBoA3k3HEwAXVgwwyCNjC1jiM1BCwE9*yu5UjdxBcEzgtrx0XBiL3hlpS9koylkRrcglMdJPk69NFHHErdzkq907r74717LN2Uni8mkt3peDy1RaNiY447DWG*3Hmz2S04VR6hT*zI7SYe3mICQx2XY+iT18H3ZTSllvbY21vDWOO6*ITOdQZu0B5yJJnDQ1wK*aiUV13tdfApk0a9gd5EKyahlrmlmvtyDs2xW*Yacs3g77LJPSsON*spusJPfTfCtmbjKPOz8tV1n43zlhAYXM8YxEM9MKjOgjcYP9YmhSUczGCK9tJhqR6SsPs64KLtdyVhNWlOFOXI0xyjT4tuc3Qsa2pROmQnrfO5umFRca99CHxMnrkS*KG6K14SN0y3lgfZbrhKrWNrNVg0Bc2uDVq25BXDpePl20JYvBK+y*dWu8EuFD26WzAjmQ34YpWo0YZRXI0YUr4W6DDjrHjbfYEPs5x8DKWqICcoTX3ZUZv3arN1J0sCK9Z6W6KlI0LSw2DOCUVP6214fyl7lj5nk6Q7s7LmMvcaw*Xah*NWaPesqJ*P3aMVkyKUJrePGQW41GzQpk51QLDrpxmBmR9H1R4r1AG09yZGBGeP1QUBZfZrOaV3itEO65NadxPT4Xgq6zIfyGYzx1thMe4ITYcWb0EdJCRGOE2xfeenWUzKAU5T6OIUtP*0aR1E+JBd+1ZFY7g6cHySZrMoT8IY2s9Nff4IEYrzKDPLCCnVAhPQbr5s4yzzIzetyphHkCDP32PFg1kK2g4MU3yqAxvvfYQrf+BmPlp00nVsGko4QkKHUw2JLirIXhxdjyCapW0WUTeMzdM3LE3xNy2GE2*sJic0WxDSrI1BHfhPkqnu*GYH+zGzaa0XClER0sz+ircSZiI2+GJy5dW19JhgG7QzkuM6WEMU5Mk0DnD0Eb+DHRn7wmg528*tVew27zrH+TwqMHbYD*xeWwra717GlBLblT9lIusyTRmgDraPDPSrzGmOFUS6xbIi22oL7Cfp26IqJEyStxHOQB1EsDoN*vXTV7*8+P5yfvjscn54fzl*84+3l*OXX1Tm+8p8XZkfHs2bX358*+Z*n8v54W+X88Nf*vn3N5ev*vrzm*+yvzr6+eX83flyfvjz9f3dt1XAX10EdRBekxBblMhzNMOJIstXaVT7p*8QpsrWxhn0w7QqRN*Cx006YbjILqTlUlEkSZekisTPBHsW6lUJoiegyXzaCDRf2XnqPVqiqTsWDoVF98QsXi2tPBqrsKXP0v*nBLTBTp9QkQrFAT8Kw+MgyPoSJ+DC2DtuP0ErZBhrytLzwXA0s8LDIdcj01wrNF2ULXsmMXGm1I69ctpdCLV79SBE45aEZOm2inYl+ofBir3OryJSrLWoz9veZNsp2IYxEFGtya4YL1*UfN+Ml2tmKGmHiIaOZauyoc4MmMQN1NjJR3WYDNPtojOV1YSioM86snsdIY8jLHz6dfiP6n73JAvHx4+T+Ikwv0usF4U2T*UPfDzN9t9QgexomOn2Zg1O0dxdfB8s1Lsu26mJqJd5jgFVq0eS42G7N0MDnE6f1kESwsyJyRa0QbpdQ1AHJM6r+aFFTvyRSIrkatJT2iFMM+llJk39LU4zuE1AmxJYnuEEVuSup8YkTu5g6lUVmAvCblbJrZSSxMxg9jzigFQ9uozA6d9QSwECFAMUAAAICABIWqRaXdVGl1YFAAD9CAAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB+BQAAAAA=' 
// You know the drill. Put your CypherX session id here. Should look like: XPLOADER-BOT:~ (don't forget that, it's crucial!)

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || '𝐅𝐥𝐲𝐧𝐧 𝐌𝐃' 
// Pick a name for the bot. Default is "𝐅𝐥𝐲𝐧𝐧 𝐌𝐃" — but who doesn’t love a cool bot name?

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254782944849' 
// Your personal contact number. If you want to call 𝐅𝐥𝐲𝐧𝐧 🥰, this is the number. 👀

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || '𝐅𝐥𝐲𝐧𝐧 𝑐ℎ𝑟𝑖𝑠𝑠' 
// Set your name, currently it's the mastermind's. The one and only... 𝐹𝑙𝑦𝑛𝑛. (Don't ask how I got here, it's a mystery.)

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "𝐅𝐥𝐲𝐧𝐧@0782944849" 
// Time to decide the name for your sticker pack. This will appear every time you create a sticker. "Cypher" is the default because... well, why not?

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "𝐅𝐥𝐲𝐧𝐧" 
// Who's the artist behind those epic stickers? You, of course! Unless you're just using the default name "X" – mystery vibes!

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
// The bot is time-traveling. Set the timezone correctly. Trust us, you don't want the bot to get confused. 🕒

//--------------[ POSTGRES DATABASE ]----------------//

global.postgresqls = process.env.DATABASE_URL || "";
// Your database URL. If you're using panel, no need to fill, if you're using Heroku, this will be automatically filled. Let the magic happen!

//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK ||
// Where does the journey end? Maybe an Instagram link? Or WhatsApp link🤔 Or maybe just a placeholder. Who knows? 👀

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "©𝐅𝐥𝐲𝐧𝐧𝐌𝐃 is on fire!🔥"
// Add a watermark finished tasks because... every masterpiece needs a signature.

//---------------------[ REPLIES ]-----------------------//
global.mess = { 
  done: '✅ *Mission Accomplished!* All systems go, 𝐅𝐥𝐲𝐧𝐧𝐌𝐃 finished the task!',
  success: '🎉 *BOOM! Success!* 𝐅𝐥𝐲𝐧𝐧𝐌𝐃 is too cool for this world. We did it!',
  owner: '🚫 *Hold up!* > This command is for the big boss only. You’re not the boss of me!',
  group: '👥 *Join the club!* This feature is exclusive to group chats!',
  admin: '🔒 *Admin powers required!* > Make me an admin, and I’ll unlock this magic for you.',
  notadmin: '⚠️ *Not Quite There Yet!* You gotta be the admin to wield this feature. Better start begging!',
//new
  error: '🤖 *Oopsie!* Something went wrong. Maybe try again? Or blame the developer. Your call!',
  wait: '⏳ *Hold your horses!* I’m working on it... (No, seriously, I’m not slacking off.)',
  nolink: '🔗 *Link not found!* Did you forget to include it, or are you just testing me?',
  notext: '🤔 *No query detected!* Did you forget to include it, or are you just testing me?',
  ban: '🚨 *Banned!* You’ve been banished to the shadow realm. (Don’t worry, it’s not permanent... probably.)',
  unban: '🎈 *Unbanned!* Welcome back! We missed you... kind of.'
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! Or I’ll send 𝐅𝐥𝐲𝐧𝐧 ♥︎ after you... 😈 */

//😹😹🙆‍♂️
// botz = m (Not to be confused with 'The bot'... he's cooler.)
// isOwner = 🤔 (But only on special days... we keep it mysterious)
// isCypherAdmin = 🗿 (Admin powers are granted by 𝐅𝐥𝐲𝐧𝐧, no exceptions!)


//--------------------[ WATCHER ]-----------------------//
// Who’s watching the watchers? 🤔
// Let’s keep track of any changes like a hawk in a top hat. 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red')) 
  delete require.cache[file]
  require(file)
})

//----------------------[ 𝐅𝐥𝐲𝐧𝐧𝐌𝐃 ]----------------------//
// 𝐅𝐥𝐲𝐧𝐧𝐌𝐃 is like a cat. It might ignore you, but it knows what you’re up to. 🐱
// It only responds when it feels like it. It’s the true master of mystery.
// Please proceed with caution. Our code doesn’t bite, but it might give you an awkward look.
// 𝐅𝐥𝐲𝐧𝐧? If you’ve found this, you’ve unlocked a secret... but only if you truly understand it.