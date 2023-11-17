export const getCharacterFromBackend = async () => {
  try {
    const response = await fetch("http://localhost:3010");
    console.log(
      "🚀 ~ file: index.js:4 ~ getCharacterFromBackend ~ response:",
      response
    );
    if (response.ok) {
      const characters = await response.json();
      return characters;
    } else {
      throw new Error("characters fetch error");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:12 ~ getCharacterFromBackend ~ error:",
      error.message
    );
  }
};
