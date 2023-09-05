const express = require ('express');
const { register, login, logout, currentUser} = require("../../controllers/auth");
const {ctrlWrapper} = require("../../helpers");
const { joinUserSchema, joinLoginSchema } = require("../../schema/validationJoi");
const {validation} = require("../../middlewares");
const {authenticate} = require("../../middlewares")

const router = express.Router();

router.post("/register", validation(joinUserSchema), ctrlWrapper(register));

router.post("/login", validation(joinLoginSchema), ctrlWrapper(login));

router.post("/logout", authenticate, ctrlWrapper(logout));

router.get("/currentUser", authenticate, ctrlWrapper(currentUser));

module.exports = router;