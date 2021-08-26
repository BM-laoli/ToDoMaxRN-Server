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
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { User } from "src/Dto/Auth/photo.entity";
import { UserService } from "../../service/Auth.service";

@ApiTags("验证服务")
@Controller()
export class AuthController {
  constructor(private readonly AppUserService: UserService) {}

  // C
  @ApiOperation({ summary: "新增用户" })
  @Post("create-user")
  async create(@Body() body: User): Promise<any> {
    const value = await this.AppUserService.save(body);
    return value;
  }

  // R
  @ApiOperation({ summary: "查询用户" })
  @Get("query-user")
  async getHello(@Query() query: any): Promise<any> {
    const value = await this.AppUserService.findAll();
    return value;
  }

  @ApiOperation({ summary: "查询用户下所持有的所有文件" })
  @Get("getByIdList")
  getByIdList(@Request() req: any) {
    return this.AppUserService.findAllList();
  }

  @ApiOperation({ summary: "测试查询特定用户" })
  @Get("getUserByName")
  getUserByName(@Request() req: any) {
    return this.AppUserService.findOne("Aoda");
  }

  // U
  @ApiOperation({ summary: "更新用户" })
  @Put("update-user")
  async update(@Body() body: User): Promise<any> {
    const value = await this.AppUserService.update(body);
    return value;
  }

  // D
  @ApiOperation({ summary: "删除用户" })
  @ApiQuery({ name: "id", required: false })
  @Delete("delete-user")
  async delete(@Query() query: any): Promise<any> {
    const value = await this.AppUserService.delete(query.id);
    return value;
  }
}
