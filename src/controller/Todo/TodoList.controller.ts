import { Delete } from "@nestjs/common";
import { Body, Controller, Get, Post, Put, Request } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { QueryStructure } from "src/common";
import { TodoList } from "src/Dto/ToDo/Todolist.entity";
import { TodoListService } from "../../service/TodoList.service";

@Controller("todoList")
@ApiTags("List")
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  // 创建角色
  @ApiOperation({ summary: "创建子todo，你需要带一个参数在body里，文档没写全：category 这个是父级的id" })
  @Post("createList")
  creaetRoule(@Body() body: TodoList): any {
    return this.todoListService.create(body);
  }

  // 编辑角色
  @ApiOperation({ summary: "修改子todo" })
  @Put("updateList")
  editRole(@Body() body: TodoList) {
    return this.todoListService.update(body);
  }

  // 查询子todo
  @ApiOperation({ summary: "查询子todo列表" })
  @Get("getList")
  getRoleList(@Request() req: any) {
    return this.todoListService.findAll();
  }

  // 删除子todo,允许批量操作
  @ApiOperation({ summary: "删除指定ID的子todo" })
  @ApiQuery({ name: "id", required: false })
  @Delete("deleteItem")
  deleteRole(@Request() req: any) {
    return this.todoListService.delet(QueryStructure(req).id);
  }
}
