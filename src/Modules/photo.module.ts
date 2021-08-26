import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { photoProviders } from "../Providers/photo.providers";
import { UserService } from "../service/Auth.service";
import { AuthController } from "src/controller/Auth/AuthController";

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [...photoProviders, UserService],
  exports: [UserService],
})
export class PhotoModule {}
