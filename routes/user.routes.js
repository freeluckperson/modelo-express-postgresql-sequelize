const User = require("../models/Users");
const router = require("express").Router();

router.get("/users", async (req, res) => {
  try {
    const { id } = req.query;
    if (id) {
      const userById = await User.findByPk(id);
      if (userById) {
        res.status(200).json(userById);
      } else {
        const allUsers = await User.findAll();
        res.status(200).json({ users: allUsers });
      }
    } else {
      const allUsers = await User.findAll();
      res.status(200).json({ users: allUsers });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los usuarios");
  }
});

router.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const userExist = await User.findOne({ where: { email } });
    if (!userExist) {
      const newUser = await User.create({ name, email });
      res.status(201).json(newUser);
    } else {
      res.status(400).json("the email already exist");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear el usuario");
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    user.name = name;
    user.email = email;
    await user.save();
    res.status(200).send(`Usuario actualizado con ID: ${user.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar el usuario");
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json("User does not exist");
    }
    await user.destroy();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar el usuario");
  }
});

module.exports = router;
