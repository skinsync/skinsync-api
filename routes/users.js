const express = require('express');
const router = express.Router();
const userHandler = require('./handler/users');
const userIdHandler = require('./handler/users/id');
const verifyToken = require('../middlewares/verify-token');
const admin = require('../middlewares/admin')

router.route("/")
    .get(verifyToken, admin, userHandler.get)

router.route("/:userId")
    .get(verifyToken, admin, userIdHandler.get)
    .put(verifyToken, userIdHandler.put)
    .delete(verifyToken, admin, userIdHandler.delete);

module.exports = router;
