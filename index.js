const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Ho_Chi_Minh', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour24: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1157640932376707182')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=LO0Xb9j8tJI') //Must be a youtube video link 
    .setState('Hãy Làm Cho Ngài Lớn Lên!')
    .setName('Huycomquan')
    .setDetails(`TNTTVN ♡ | ${formatTime()}`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/894503283178209310/1244674906499711056/IMG_4521.JPG?ex=6655f956&is=6654a7d6&hm=137aa80ce9bcbdc588230e30eebc63ba0f74829eb17e4d9ab68c9e139b4b39f2&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('My Home - Gxu Tu Duc') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/914943025195647087.gif?size=80&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Html, NodeJS, Python Slave') //Text when you hover the Small image
    .addButton('TGP Sài Gòn', 'https://www.facebook.com/tgpsaigon')
    .addButton('Thiếu Nhi Thánh Thể VN', 'https://www.facebook.com/ThieuNhiThanhTheVN')
  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `TNTTVN ♡ | ${newTime}`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
