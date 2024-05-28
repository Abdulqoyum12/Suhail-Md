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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_32_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDcxLFxuICAgICAgICA1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDM5LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgMTU4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICA3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICA0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICA2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgMTg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1jOHVNVXo4K2pLWWgxTmhUT0ZoYXhncFN4ejRWZVZ0SXI4Nm1BYTFIbG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVMWnlESTBzU1FhLTlmS3FpSkFkUEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmVkMDMwOGUtNGU5Zi00Y2IzLWE2NDItODQxNzVjMDQwODcxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgNjQsXG4gICAgICAyMzgsXG4gICAgICAxMSxcbiAgICAgIDE3LFxuICAgICAgMTA5LFxuICAgICAgMCxcbiAgICAgIDE2MyxcbiAgICAgIDI2LFxuICAgICAgMTE5LFxuICAgICAgMjEwLFxuICAgICAgMTQ0LFxuICAgICAgMjUwLFxuICAgICAgMTkzLFxuICAgICAgNjcsXG4gICAgICAyMzYsXG4gICAgICA0MixcbiAgICAgIDEzMixcbiAgICAgIDEzNCxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDExNixcbiAgICAgIDEzMixcbiAgICAgIDgsXG4gICAgICAxMjEsXG4gICAgICAxNzMsXG4gICAgICA1MixcbiAgICAgIDIzNCxcbiAgICAgIDE1MCxcbiAgICAgIDUwLFxuICAgICAgNTEsXG4gICAgICAyNTEsXG4gICAgICAxNzQsXG4gICAgICAyNDMsXG4gICAgICAyMDEsXG4gICAgICAyMTcsXG4gICAgICA3MyxcbiAgICAgIDEyOSxcbiAgICAgIDE3NyxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFQlNCU0tCQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMzIzNTMxMDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTA1MTcxNjI0NDcwMTg6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPQ1d4cE1DRVB6eDE3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVPenJDL1NJQXNoRExwVVpLUU41STl4U3JiRWtodGZ1TG1qMVArVklYQnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwialpHNFlJM1c0dGZzN3FsSGRxSW0rMXFhempMNVo4eStFZHRvOE5CZnBCVWNCNnRpcFNnd0VQUnpoUG1sWXJ1QlNTRG8vUHFscmdCSGZXVktwYm91Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNkUyTVptV1R0UkhSNVVod0srZTBGMm4ybDBnaUUybmZWSlpqck5MRVJpazNaYU9XSWZEdm1xOFpUNVVMM3RKNDJRR09hOCs4LzJPZmF2ZExNL210Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMzIzNTMxMDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTEwMzM3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
