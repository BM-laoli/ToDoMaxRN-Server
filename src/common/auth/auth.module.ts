import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { jwtConstants } from "./constants";
import { Connection } from "typeorm";
import { User } from "src/Dto/Auth/photo.entity";
import { photoProviders } from "src/Providers/photo.providers";
import { DatabaseModule } from "src/Modules/database.module";
import { UserService } from "src/service/Auth.service";

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    // 注册验证器
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "3600s" },
    }),
  ],
  controllers: [AuthController],
  providers: [
    ...photoProviders,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UserService,
  ], //依赖进行注入
  exports: [AuthService],
})
export class AuthModule {}
