const express = require('express');
const router = express.Router();
const userHandler = require('./handler/users');
const userIdHandler = require('./handler/users/id');

router.route("/")
    .get(userHandler.get)
    .post(userHandler.post);

router.route("/:userId")
    .get(userIdHandler.get)
    .put(userIdHandler.put)
    .delete(userIdHandler.delete);

module.exports = router;
