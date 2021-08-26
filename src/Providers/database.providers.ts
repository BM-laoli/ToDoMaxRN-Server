import { TodoCategory } from "src/Dto/ToDo/TodoCategory.entity";
import { TodoList } from "src/Dto/ToDo/Todolist.entity";
import { createConnection } from "typeorm";
import { User } from "../Dto/Auth/photo.entity";
import { File } from "../Dto/File/FIle.entity";

export const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: async () => {
      const database = await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "Li_86245",
        database: "todomax",
        entities: [User, TodoCategory, TodoList, File],
        synchronize: true,
      });
      return database;
    },
  },
];
