import { Bot } from "https://deno.land/x/grammy@v1.11.2/mod.ts";
import { InlineKeyboard } from "https://deno.land/x/grammy@v1.11.2/mod.ts";

const lectureHalls = `
Here are the halls on our campus:
[LT 1.x](https://goo.gl/maps/RANXpqoEv7jy4KCP6)
[LT 2.x](https://goo.gl/maps/gSNeUjT4S4Wu9bmr6)
[LT 3.x](https://goo.gl/maps/GWSKbvzQ9y4Utn2s5)
`;

const hostels = `
Here are the boys hostels of our campus:
[Aryabhatta](https://goo.gl/maps/6Ka5C6ykMSpAz73t5)
[DG - 2](https://goo.gl/maps/qgQCdYfT8iJF79ZK6)
[Morvi](https://goo.gl/maps/R31Zg6a5WN41g3vF7)
[Vishwakarma](https://www.google.com/maps/place/Aryabhatta+Hostel,+IIT+BHU/@25.2631389,82.98215,17z/data=!3m1!4b1!4m5!3m4!1s0x398e3392e4725649:0x2c7d4cf06e09c1a2!8m2!3d25.2631389!4d82.9843387)
[Limbdi](https://www.google.com/maps/place/Limbdi+Hostel/@25.2619258,82.9834115,17z/data=!4m9!1m2!2m1!1slimbdi+hostel+iit+bhu!3m5!1s0x398e331510759d13:0x7e6006655bbbc673!8m2!3d25.2612189!4d82.986068!15sChVsaW1iZGkgaG9zdGVsIGlpdCBiaHWSAQZob3N0ZWzgAQA)
[Rajputana](https://www.google.com/maps/place/Rajputana+Hostel/@25.2619258,82.9834115,17z/data=!4m9!1m2!2m1!1slimbdi+hostel+iit+bhu!3m5!1s0x398e322cf7f20c61:0xa0509b12a256482f!8m2!3d25.2623864!4d82.9862064!15sChVsaW1iZGkgaG9zdGVsIGlpdCBiaHVaFyIVbGltYmRpIGhvc3RlbCBpaXQgYmh1kgELYm95c19ob3N0ZWyaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTkxkV0ZsYm1oM1JSQULgAQA)
[CVR](https://www.google.com/maps/place/BHU+Tea+Stall+behind+VT/@25.2656838,82.985495,19.19z/data=!4m12!1m6!3m5!1s0x398e3392e4725649:0x2c7d4cf06e09c1a2!2sAryabhatta+Hostel,+IIT+BHU!8m2!3d25.2631389!4d82.9843387!3m4!1s0x398e322ea45bbcef:0x33b526b44ee5b99b!8m2!3d25.265934!4d82.98689)
[Vishweshwaraiya](https://www.google.com/maps/place/Vishweshwaraiya+Hostel/@25.2623035,82.9802092,17z/data=!4m9!1m2!2m1!1sVishweshwaraiya+iit+bhu!3m5!1s0x398e33b047306281:0xeabd3e37be30bf5b!8m2!3d25.2623035!4d82.9839534!15sChdWaXNod2VzaHdhcmFpeWEgaWl0IGJodZIBE2hvdXNpbmdfZGV2ZWxvcG1lbnTgAQA)
[S.N. Bose](https://www.google.com/maps/place/7X7M%2B9CP,+Semi+Cir+Rd+Number+5,+Banaras+Hindu+University,+Varanasi,+Uttar+Pradesh+221005/@25.263262,82.9821268,18.49z/data=!4m8!1m2!2m1!1ssn+bose+iit+bhu!3m4!1s0x398e322dbe736a7d:0x86e7fcb6ffcca0c5!8m2!3d25.2634395!4d82.9837949)
[Dhanrajgiri](https://www.google.com/maps/place/Semi+Cir+Rd+Number+4,+Banaras+Hindu+University,+Varanasi,+Uttar+Pradesh+221005/@25.2638575,82.9856722,18.96z/data=!4m8!1m2!2m1!1sDhanrajgiri+old!3m4!1s0x398e322c37c80dc7:0x236073ec2d3f6a43!8m2!3d25.2639123!4d82.9860629)
[Ramnujan](https://www.google.com/maps/place/7X7M%2BCXC,+Varanasi,+Uttar+Pradesh+221005/@25.2632652,82.9842624,19.19z/data=!4m12!1m6!3m5!1s0x398e3392e4725649:0x2c7d4cf06e09c1a2!2sAryabhatta+Hostel,+IIT+BHU!8m2!3d25.2631389!4d82.9843387!3m4!1s0x398e322db3fa1a31:0x213c8210541d9ef8!8m2!3d25.2635679!4d82.9848351)
[Vivekanand](https://www.google.com/maps/place/Right+To+Information+Center/@25.2603894,82.9861379,17.85z/data=!4m12!1m6!3m5!1s0x398e3392e4725649:0x2c7d4cf06e09c1a2!2sAryabhatta+Hostel,+IIT+BHU!8m2!3d25.2631389!4d82.9843387!3m4!1s0x398e338bed4a2acb:0xa9086e2488b2b45b!8m2!3d25.2591771!4d82.98713)

Here are the girls hostels of our campus:
[S.C Dey](https://www.google.com/maps/place/Aryabhatta+Hostel,+IIT+BHU/@25.2631389,82.98215,17z/data=!3m1!4b1!4m5!3m4!1s0x398e3392e4725649:0x2c7d4cf06e09c1a2!8m2!3d25.2631389!4d82.9843387)
[Gamcha](https://www.google.com/maps/place/Apollo+Pharmacy+Iit+Varanasi/@25.2609645,82.9829897,17.95z/data=!4m5!3m4!1s0x398e338553783233:0x4e2d147c7cd9ddb8!8m2!3d25.2602352!4d82.9845566)
[New Girls](https://www.google.com/maps/place/New+girls+hostel,+IIT+BHU/@25.2610079,82.981693,17z/data=!3m1!4b1!4m5!3m4!1s0x398e33ab82c42891:0x658f95bb01e8de33!8m2!3d25.2610079!4d82.9838817)
`;

const medicalFacilities=`
🏥 [Health Centre](https://www.google.com/maps/place/Student+Health+Centre,+Banaras+Hindu+University/@25.2700312,82.986463,17z/data=!3m1!4b1!4m5!3m4!1s0x398e3228b8d042cd:0xe89a2d87d8ccab17!8m2!3d25.2700312!4d82.9886517)
🚑 [Trauma Centre](https://goo.gl/maps/Z7Nrc3uh7RxfQnfo8)
🧑‍⚕️ [SundarLal Hospital](https://goo.gl/maps/cmSbc6n6pZ4btBJ59)
`

const gates=`
[🏛️Seer Gate](https://goo.gl/maps/KyG1FkyhHAQyGeGc7)
[🏢Hyderabad Gate](https://goo.gl/maps/mKbkxhGC9gNxQh4M9)
[🏣Lanka Gate](https://goo.gl/maps/BtWYYFKneZs4KzgT7)
[🏬Naraia Gate](https://goo.gl/maps/WrV9ASyZrPfs7bgU6)
`

const bot = new Bot(
  "5462906162:AAEg7BD-wh7MgxTTkgZnFmjsMYCUFSLlJOc"
);
const commands = [
  {
    text: "Can't find my LT. Help!",
    cb : "LT",
    data: lectureHalls,
  },
  {
    text: "Ugh, which hostel was that again?",
    cb : "Hostel",
    data: hostels,
  },
  {
    text: "Medical emergency. Help!",
    cb : "Medical",
    data: medicalFacilities,
  },
  {
    text: "🚪Gates of IIT BHU",
    cb : "Gates",
    data: gates,
  },
];

const keyboard = new InlineKeyboard();
commands.forEach((command) => {
  keyboard.text(command.text, command.cb);
  keyboard.row();
})

bot.on("callback_query:data", async (ctx) => {
  let data = ctx.callbackQuery?.data;
  commands.forEach(async (command) => {
    if (command.cb == data) {
      await ctx.answerCallbackQuery("Fetching data....");
      await ctx.api.sendMessage(ctx.msg.chat.id, command.data, {
        parse_mode: "Markdown"
      });
      await ctx.api.sendMessage(ctx.msg.chat.id, "Try other commands here. ", {reply_markup:keyboard})
    }
  })
})

bot.command("start", async (ctx) =>
  await ctx.reply("Welcome! The bot is up and running. \nSend /commands to see all the available commands.")
);
bot.command("commands", async (ctx) => 
  await ctx.reply("Here are the available commands: ", {reply_markup:keyboard})
)

bot.start();
