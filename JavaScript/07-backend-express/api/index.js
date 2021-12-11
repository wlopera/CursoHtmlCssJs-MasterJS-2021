const express = require("express");
const dotenv = require("dotenv");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const blogs = require("../routers/blogs");
const projects = require("../routers/projects");

const app = express();

app.use(bodyParser.json());
app.use(cors());

dotenv.config();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Conexion con base de datos exitosa");
    },
    (err) => {
      console.log("Error al conectarse a la base de datos: ", err);
    }
  );

app.use("/api/blogs", blogs);
app.use("/api/projects", projects);

app.listen(port, console.log("Servidor arriba puerto:", port));
