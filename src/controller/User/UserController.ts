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
import { User } from "src/Dto/User/User.entity";
import { UserService } from "../../service/UserService";

@ApiTags("用户相关")
@Controller()
export class UserController {
  constructor(private readonly AppUserService: UserService) {}

  // C
  @ApiOperation({ summary: "用户注册" })
  @Post("create-user")
  async create(@Body() body: User): Promise<any> {
    const value = await this.AppUserService.save(body);
    return value;
  }

  // R
  @ApiOperation({ summary: "查询所有用户name,id为可项,不传递参数查所有用户" })
  @ApiQuery({ name: "name", required: false })
  @ApiQuery({ name: "id", required: false })
  @Get("query-user")
  async getHello(@Query() query: any): Promise<any> {
    console.log(query);
    
    const value = await this.AppUserService.findOne(query);
    return value;
  }

  @ApiOperation({ summary: "查询用户下所持有的所有文件 name,id为可项" })
  @ApiQuery({ name: "name", required: false })
  @ApiQuery({ name: "id", required: false })
  @Get("getByIdList")
  getByIdList(@Request() req: any) {
    return this.AppUserService.findAllList(req);
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
