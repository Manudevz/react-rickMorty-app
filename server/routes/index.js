var express = require("express");
var router = express.Router();
const getCharactersFromApi = require("../controllers/characters");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const characters = await getCharactersFromApi();
  res.send(characters);
});

module.exports = router;
