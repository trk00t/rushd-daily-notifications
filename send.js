const axios = require("axios");

const APP_ID = process.env.APP_ID;
const API_KEY = process.env.API_KEY;

async function send() {
  try {

    await axios.post(
      "https://api.onesignal.com/notifications",
      {
        app_id: APP_ID,

        included_segments: ["Subscribed Users"],

        headings: {
          ar: "🌿 تطبيق رشد"
        },

        contents: {
          ar: "لا تنس وردك اليوم من القرآن الكريم 📖"
        }
      },

      {
        headers: {
          Authorization: `Key ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Notification Sent");

  } catch (e) {

    console.log(e.response.data);

  }
}

send();
