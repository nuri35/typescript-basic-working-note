import { Request, Response, Handler } from "express";
import { TodoRequestBody, ToDoItem, SuccessResponse } from "./types";
import { db } from "./db";
import { faker } from "@faker-js/faker";

interface TodoRequestBody2 {
  //   [key: string]: string;
  name: string; //böyle ise name isimli key aynı olacak
}
export const addToDo: Handler = (req: Request, res: Response) => {
  //
  //   let value: any;
  //   let body: TodoRequestBody;
  //   body = value; //req.body any durumundadır yanı array olabılır obje olabılır her şey olabilri any türü buraya koyabılıyoruz

  let body: TodoRequestBody;
  body = req.body;

  let a: TodoRequestBody2;
  a = { name: "sas" };

  const toDoItem: ToDoItem = {
    text: faker.lorem.paragraph(),
    id: faker.datatype.uuid(),
    isDone: false,
  };

  db.push(toDoItem);

  let senderMsg: SuccessResponse = {
    msg: "add to do",
    value: toDoItem,
  };

  res.status(200).json(senderMsg);
};

export const getToDo: Handler = (req: Request, res: Response) => {
  let senderMsg: ToDoItem[] = db;

  res.status(200).json(senderMsg);
};
