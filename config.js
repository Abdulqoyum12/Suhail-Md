const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349033235310";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_15_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICA5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDg2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2LFxuICAgICAgICA4MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg1LFxuICAgICAgICA4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTA2LFxuICAgICAgICA0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDksXG4gICAgICAgIDEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjd3Voc3p6STlsWXZOcFNPSkZNTklSR0oxOE44MFdNczFpTzFneUIrYkI4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1M0Y1UnN2aVIyS2ZqbnVkVldzQkxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhZGM5YzcyLWU2NzAtNGY2Yi1hNTZlLTEyOTQ3NDVlNDEzNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDMwLFxuICAgICAgNzEsXG4gICAgICA0NCxcbiAgICAgIDE5MSxcbiAgICAgIDE3OCxcbiAgICAgIDI0NCxcbiAgICAgIDE5MCxcbiAgICAgIDE1OSxcbiAgICAgIDc1LFxuICAgICAgOTIsXG4gICAgICAxNzAsXG4gICAgICAyMDQsXG4gICAgICAyMzUsXG4gICAgICAxNzAsXG4gICAgICA2NSxcbiAgICAgIDE5LFxuICAgICAgMTIxLFxuICAgICAgMTY0LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgMjQzLFxuICAgICAgMTk2LFxuICAgICAgNTUsXG4gICAgICA0NixcbiAgICAgIDI0OSxcbiAgICAgIDEwOCxcbiAgICAgIDIwOSxcbiAgICAgIDIwMCxcbiAgICAgIDEzNSxcbiAgICAgIDIyMSxcbiAgICAgIDE3MyxcbiAgICAgIDIzNixcbiAgICAgIDk4LFxuICAgICAgMSxcbiAgICAgIDIzLFxuICAgICAgMTExLFxuICAgICAgNDIsXG4gICAgICAyMjksXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYQjFLRVFMR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMzIzNTMxMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTA1MTcxNjI0NDcwMTg6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPS1d4cE1DRUplKzJMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVPenJDL1NJQXNoRExwVVpLUU41STl4U3JiRWtodGZ1TG1qMVArVklYQnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOUZ6S0llbU1LSHQ3TTVvTUcybG9YenNqenZTbU9RMnZwekVJdTJ0dGNWQ3E4aWlrRWdzMllFR2NuN2RrN2xkelBoQjZjdnVveFdsRVhTYzkyLzRlQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNXlQclJ0QitRekxoQWpFQVNSVHB0VmM5NnhFSTBvQ1lLUk4zYmxUemdyNjdpMnJ2NzZtcFFFdlZ6eDBtWjM2VkZCcXZ2NzBTSW41M2hVOGpLeE9XZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMzIzNTMxMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMzMjM1MzEwOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY5MjAwOThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
