var express = require("express");
var router = express.Router();

const { getCharacterFromApi } = require("../controllers/character");

router.get("/", async (req, res, next) => {
  const [, , id] = req.baseUrl.split("/");
  const character = await getCharacterFromApi(id);
  res.status(200).send(character);
});

module.exports = router;
