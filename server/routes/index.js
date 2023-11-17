var express = require("express");
var router = express.Router();
const { getCharactersFromApi } = require("../controllers/characters");

router.get("/", async (req, res, next) => {
  const characters = await getCharactersFromApi();
  console.log("🚀 ~ file: index.js:7 ~ router.get ~ characters:", characters);
  res.status(200).send(characters);
});

module.exports = router;
