const { getAllUsers, createUser, updateUser, eraserUser } = require("../controllers/user.controller");
const router = require("express").Router();

router.get("/users", getAllUsers);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", eraserUser);

module.exports = router;
