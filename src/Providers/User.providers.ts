import { Connection, Repository } from "typeorm";
import { User } from "../Dto/User/User.entity";

export const UserProviders = [
  {
    provide: "USER_REPOSITORY",
    useFactory: (connection: Connection) => {
      return connection.getRepository(User);
    },
    inject: ["DATABASE_CONNECTION"],
  },
];
