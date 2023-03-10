const router = require("express").Router();
const controller = require("./tables.controller");

router.route("/").get(controller.read).post(controller.create);

module.exports = router;