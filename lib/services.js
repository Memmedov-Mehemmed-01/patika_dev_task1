const axios = require("axios");

async function getData(userId) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    console.log(response.data);
  } catch (error) {
    console.error("Bir hata oldu: ", error);
  }
}

module.exports = getData;
