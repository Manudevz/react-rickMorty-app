const axios = require("axios");

const getCharactersFromApi = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    if (response.status === 200) {
      const characters = response.data.results;
      return characters;
    } else {
      throw new Error("error en fetch");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: characters.js:14 ~ getCharactersFromApi ~ error:",
      error
    );
  }
};

module.exports = { getCharactersFromApi };
