import { Connection, Repository } from "typeorm";
import { User } from "../Dto/Auth/photo.entity";

export const photoProviders = [
  {
    provide: "USER_REPOSITORY",
    useFactory: (connection: Connection) => {
      return connection.getRepository(User);
    },
    inject: ["DATABASE_CONNECTION"],
  },
];
