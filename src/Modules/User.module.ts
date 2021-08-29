import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { UserProviders } from "../Providers/User.providers";
import { UserService } from "../service/UserService";
import { UserController } from "src/controller/User/UserController";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
