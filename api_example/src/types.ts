export interface ToDoItem {
  text: string;
  id: string;
  isDone: boolean;
}

export interface TodoRequestBody extends Pick<ToDoItem, "text"> {} //eğer biz req'e yani req: TodoRequestBody yaparsak extends olan interface tipinde olmuş oalcak

export interface SuccessResponse {
  msg: string;
  value: ToDoItem;
}
