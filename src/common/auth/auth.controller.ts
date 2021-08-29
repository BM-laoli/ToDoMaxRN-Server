import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiHeader, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { User } from "src/Dto/User/User.entity";
import { UserService } from "../../service/UserService";
import { AuthService } from "./auth.service";

@ApiTags("登录验证服务")
@Controller("/api")
export class AuthController {
  constructor(private readonly AppUserService: AuthService) {}
  // 核心代码，发给用户token
  @ApiOperation({ summary: "登录接口获取token" })
  @Post("/auth/login")
  async login(@Body() body: User) {
    return this.AppUserService.login(body);
  }

  // 正确的通过验证之后才能访问的接口
  @ApiHeader({ name: "token" })
  @UseGuards(AuthGuard("jwt")) //这里就能直接做数据验证了
  @Get("me")
  getProfile() {
    return { message: "您通过的了权限校验" };
  }
}

//
