import { Injectable } from "@nestjs/common";
import { tar } from "compressing";
import { ConfigService } from "nestjs-config";
import { refCount } from "rxjs/operators";
import { FIleService } from "src/service/FIle.service";

@Injectable()
export class AlbumService {
  constructor(
    private readonly configService: ConfigService,
    private readonly fileService: FIleService
  ) {}

  pathJoin = (path: string, filedName: string) => {
    // 判断环境 linux 和mac 和windows的盘符都不一样
    return path
      .slice(path.search(filedName))
      .replace(/[\\\\]+/g, "/")
      .replace(filedName, "http://localhost:3000");
  };

  async upload(file) {
    const path = this.pathJoin(file.path, "uploads");

    return { message: "上传成功", dir: path };
    // 重返回的 path可以直接拿到下载路径!贴到浏览器就能直接完成下载
  }

  // 下载全部文件。默认下载diss目录下的upload全部文件
  async downloadAll() {
    const uploadDir = this.configService.get("file").root;
    const tarStream = new tar.Stream();
    await tarStream.addEntry(uploadDir);
    return { filename: "hello-world.tar", tarStream };
  }
}
