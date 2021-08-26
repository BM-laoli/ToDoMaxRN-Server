import { Delete, UseGuards } from "@nestjs/common";
import { Body, Controller, Get, Post, Put, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { QueryStructure } from "src/common";
import { TodoCategory } from "src/Dto/ToDo/TodoCategory.entity";
import { TodoCategoryService } from "../../service/TodoCategory.service";

@Controller("todoCat")
// @UseGuards(AuthGuard('jwt')) 可以给这个controller模块加，也可以给单独的方法加
@ApiTags("父类")
export class TodoCategoryController {
  constructor(private readonly todoCategoryService: TodoCategoryService) {}

  // 创建角色
  @ApiOperation({ summary: "创建父分类" })
  @Post("createList")
  creaetRoule(@Body() body: TodoCategory): any {
    return this.todoCategoryService.create(body);
  }

  // 编辑角色
  @ApiOperation({ summary: "修改父分类" })
  @Put("updateList")
  editRole(@Body() body: TodoCategory) {
    return this.todoCategoryService.update(body);
  }

  // 查询父分类
  @ApiOperation({ summary: "查询父分类列表" })
  @Get("getList")
  getRoleList(@Request() req: any) {
    return this.todoCategoryService.findAll();
  }

  // 查询父分类
  @ApiOperation({ summary: "查询父分类下所有的list" })
  @Get("getByIdList")
  getByIdList(@Request() req: any) {
    return this.todoCategoryService.findAllList();
  }

  // 删除父分类,允许批量操作
  @ApiOperation({ summary: "删除指定ID的父分类" })
  @ApiQuery({ name: "id", required: false })
  @Delete("deleteItem")
  deleteRole(@Request() req: any) {
    return this.todoCategoryService.delet(QueryStructure(req).id);
  }
}
