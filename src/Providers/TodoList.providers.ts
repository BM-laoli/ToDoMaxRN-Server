import { Connection, Repository } from "typeorm";
import { TodoList } from "src/Dto/ToDo/Todolist.entity";

export const TodoListProviders = [
  {
    provide: "TodoList_REPOSITORY",
    useFactory: (connection: Connection) => connection.getRepository(TodoList),
    inject: ["DATABASE_CONNECTION"],
  },
];
