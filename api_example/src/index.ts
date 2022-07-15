import express from "express";
import { addToDo, getToDo } from "./toDo";

const app = express();
app.use(express.json());
app.get("/", addToDo);
app.get("/list", getToDo);

app.listen(4000, () => {
  console.log("app listen");
});
