import { Injectable, Inject, HttpException, HttpStatus } from "@nestjs/common";
import { createQueryBuilder, Repository } from "typeorm";
import { User } from "src/Dto/Auth/photo.entity";
import { JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { QueryStructure } from "..";
import { UserService } from "src/service/Auth.service";
import { jwtConstants } from "./constants";

@Injectable()
export class AuthService {
  constructor(
    @Inject("USER_REPOSITORY")
    private readonly UserRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly JwtStrategy: JwtStrategy,
    private readonly userService: UserService
  ) {}

  // C 依据token查出用户讯息
  async save(req): Promise<any> {
    return;
  }

  // 进行验证发布给用户token
  async login(req: any): Promise<any> {
    // 我们去数据库进行查询数据
    const payload = await this.userService.findOne("Aoda");

    if (!payload) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: "用户不存在",
          error: "user is notfind",
        },
        HttpStatus.BAD_REQUEST
      );
    }

    // 进行解密运算和签名认证
    const UserData: User = payload as any;
    const { name, password } = UserData;

    const isValid = password === req.password;

    if (!isValid) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: "密码错误",
          error: "password error",
        },
        HttpStatus.BAD_REQUEST
      );
    }
    const tokenObj = {
      access_token: this.jwtService.sign({ name, password }),
      user: payload,
    };

    console.log(
      this.jwtService.verify(tokenObj.access_token, {
        secret: jwtConstants.secret,
      })
    );
    return tokenObj;
  }
}
