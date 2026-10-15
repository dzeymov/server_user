import express from "express";
import mongoose from "mongoose";
import router from "./routers/UserRoutes.js";

const app = express();
app.use(express.json());
app.use(router)
const PORT = 5000;

mongoose
  .connect("mongodb://localhost:27017/usersbd")
  .then(() => {
    console.log("Успешно подключен к БД!");
  })
  .catch((err) => {
    console.log("Ошибка при подключении к БД" + err);
    process.exit(1)
  });

app.listen(PORT, () => {
  console.log("Сервер запушен на порту: " + PORT);
});
