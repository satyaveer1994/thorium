let obj = require("./logger");
let obja = require("../logger/logger.js");
let objb = require("../util/helper");
let objc = require("../validator/formatter.js");
let _ = require("lodash");
const express = require("express");

const router = express.Router();

router.get("/test-me", function (req, res) {
  console.log(
    _.chunk(
      [
        "jan",
        "feb",
        "march",
        "april",
        "may",
        "june",
        "july",
        "aug",
        "sept",
        "oct",
        "nov",
        "dec",
      ],
      4
    )
  );
  console.log(_.tail([1, 3, 5, 7, 9, 11, 13, 17, 19, 21]));
  console.log(
    _.union(
      ["functionup", "bootcamp"],
      ["batch", "thorium"],
      ["topic", "node"],
      ["week", "four"],
      ["assignment", "one"]
    )
  );
  obj.printMessage("thorium");

  console.log(obj.url);
  obja.welcome("welcome");
  objb.helper("helper");
  objc.trim();
  objc.convert()(res.send("welcome to my frist application"));
});
router.get("/bye", function (req, res) {
  res.send("hello there hi");
});

module.exports = router;
