import { Delete, UseInterceptors } from "@nestjs/common";
import { Body, Controller, Get, Post, Put, Request } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiConsumes, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { QueryStructure } from "src/common";
import { File } from "src/Dto/File/FIle.entity";
import { FIleService } from "src/service/FIle.service";


@Controller("files")
@ApiTags("文件")
export class FileController {
  constructor(private readonly fileService: FIleService) {}

  // 创建角色
  
  @ApiOperation({ summary: "创建文件" })
  @Post("createList")
  creaetRoule(@Body() body: File): any {
    return this.fileService.create(body);
  }

  // 编辑角色
  @ApiOperation({ summary: "修改文件" })
  @Put("updateList")
  editRole(@Body() body: File) {
    return this.fileService.update(body);
  }

  // 查询文件
  @ApiOperation({ summary: "查询文件列表" })
  @Get("getList")
  getRoleList(@Request() req: any) {
    return this.fileService.findAll();
  }

  // 删除文件,允许批量操作
  @ApiOperation({ summary: "删除指定ID的文件" })
  @ApiQuery({ name: "id", required: false })
  @Delete("deleteItem")
  deleteRole(@Request() req: any) {
    return this.fileService.delet(QueryStructure(req).id);
  }
}
