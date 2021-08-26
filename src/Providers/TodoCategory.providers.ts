import { Connection, Repository } from "typeorm";
import { TodoCategory } from "../Dto/ToDo/TodoCategory.entity";

export const TodoCategoryProviders = [
  {
    provide: "TodoCategory_REPOSITORY",
    useFactory: (connection: Connection) =>
      connection.getRepository(TodoCategory),
    inject: ["DATABASE_CONNECTION"],
  },
];
