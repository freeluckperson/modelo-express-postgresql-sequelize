const express = require("express");
const morgan = require("morgan");
const sequelize = require("./connect");
const userRouter = require("./routes/user.routes");

// Creación de la aplicación Express
const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Rutas para las operaciones CRUD en la tabla de usuarios
app.use(userRouter);

// Inicio del servidor
sequelize.sync({ alter: true }).then(() => {
  console.log("DB connect");
  app.listen(3000, () => console.log("Server on PORT 3000"));
});
