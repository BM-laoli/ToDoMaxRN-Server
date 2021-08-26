import { Connection, Repository } from "typeorm";
import { File } from "../Dto/File/FIle.entity";

export const FileProviders = [
  {
    provide: "File_REPOSITORY",
    useFactory: (connection: Connection) => connection.getRepository(File),
    inject: ["DATABASE_CONNECTION"],
  },
];
