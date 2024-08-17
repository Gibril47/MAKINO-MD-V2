const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;


global.Owner = ["2348074439626"]; //like 2347080968564 
global.OwnerName =  "Dan";
global.BotName = "♱MAKINO-MD-V2♱♡⃤";
global.packname = "♱MAKINO-MD-V2♱♡⃤";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!


global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"AAFgsjpdw5GgLL9fThdaz7CUUTDt01OmGnl9ls5lhFg="},"public":{"type":"Buffer","data":"CVf6eJ8USkcoYiQcI5dtXvBEU1AZw6coCl13Sp9Wvm8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"4JnZcJPlFBPBkvjXoccKtAp8uyv2hPqTxg4vgRYAr0o="},"public":{"type":"Buffer","data":"1AsYqur7/AjIrRwtMqp2pY8WoYvC3R/Ps4Ispc2ahxA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MJbmPegD1j6jao0QrMyLoJeOEhgvxuXPhZQbNQ9JREU="},"public":{"type":"Buffer","data":"lvevSQYze81QGdmsWmXM/dvsYvRuWusTeHomCGaVEAs="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2AGzmUpn9ScAjfb9UYelI9r1VLZsmlRYY2oTqA2fYWg="},"public":{"type":"Buffer","data":"WfkgsUNOenkhj0jiN8ejRxLm9QOwXv5NYbym2KARJSI="}},"signature":{"type":"Buffer","data":"hctuzjzAx2M/zj968rjPoS8J6EyXqKcb/AAwmOqMjZODEI+uEq6h+9hz32QBgAyR0U7EFTwFXXWpcD33JemnjQ=="},"keyId":1},"registrationId":15,"advSecretKey":"RI9Ibf2bRCm/9r9ZID72QHdN2VKUVhvxaEO1AZjqc7k=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"DfMuFgJzReGJThxOAcNBmQ","phoneId":"0397aa99-4ff0-494b-9bfd-b80ae8567400","identityId":{"type":"Buffer","data":"qgU2B1NDzO1UTqpbIix/lVoG/3Y="},"registered":false,"backupToken":{"type":"Buffer","data":"63O19lDi8RA4mhOFVwPeNGWZj9Q="},"registration":{},"account":{"details":"CMDjzc4EEImQgrYGGAIgACgA","accountSignatureKey":"v5UtSmE7JSNPiVRfukkFTv390Ww41RtV5FZR8Wr9OFc=","accountSignature":"ZxfjNTW4Rsn9AvlcqcCwQPyxpQzXmZMZJf7WQMaAdEexXnXjeFfItFhxa0d6/Om/A9H1AYhGT7aCOl6WA/vcCA==","deviceSignature":"UcKu6IjYBcmZEZ0YUJCvgL7qcfTzkDC55rGdD4pi0veJx+HFK5Y+Mn0YqT8IBWcchkmAg1+ZeUR79FrsiYKrjQ=="},"me":{"id":"254769917094:50@s.whatsapp.net"},"signalIdentities":[{"identifier":{"name":"254769917094:50@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bb+VLUphOyUjT4lUX7pJBU79/dFsONUbVeRWUfFq/ThX"}}],"platform":"android","lastAccountSyncTimestamp":1723893783}`
global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = ["254769917094"] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
