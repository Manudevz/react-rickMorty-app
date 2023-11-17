const axios = require("axios");

const baseURL = "https://rickandmortyapi.com/api";

const getCharacterFromApi = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/character/${id}`);
    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      throw new Error("fetch error");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: character.js:13 ~ getCharacterFromApi ~ error:",
      error
    );
  }
};

module.exports = { getCharacterFromApi };
