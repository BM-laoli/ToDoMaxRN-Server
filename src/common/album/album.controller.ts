import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Get,
  Res,
} from "@nestjs/common";
import { Response } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { AlbumService } from "./album.service";
import { ApiPropertyOptional, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("文件服务")
@Controller("album")
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @ApiOperation({ summary: "上传文件的实时预览解控" })
  @ApiPropertyOptional()
  @Post()
  @UseInterceptors(FileInterceptor("file"))
  upload(@UploadedFile() file) {
    return this.albumService.upload(file);
  }

  @ApiOperation({ summary: "打包下载的接口" })
  @Get("export")
  async downloadAll(@Res() res: Response) {
    const { filename, tarStream } = await this.albumService.downloadAll();
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    tarStream.pipe(res);
  }
}
