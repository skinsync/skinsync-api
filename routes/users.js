const express = require('express');
const router = express.Router();
const userHandler = require('./handler/users');
const userIdHandler = require('./handler/users/id');
const verifyToken = require('../middlewares/verify-token');

router.route("/")
    .get(verifyToken, userHandler.get)

router.route("/:userId")
    .get(verifyToken, userIdHandler.get)
    .put(verifyToken, userIdHandler.put)
    .delete(verifyToken, userIdHandler.delete);

module.exports = router;
