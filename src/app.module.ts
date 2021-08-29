import { Module } from "@nestjs/common";
import { ConfigModule } from "nestjs-config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FileModule } from "./Modules/File.module";
import { UserModule } from "./Modules/User.module";
import { TodoCategoryModule } from "./Modules/TodoCategory.module";
import { TodoListModule } from "./Modules/TodoList.module";
import * as path from "path";
import { AuthModule } from "./common/auth/auth.module";
import { AlbumModule } from "./common/album/album.module";

@Module({
  imports: [
    // 配置项集中管理
    ConfigModule.load(path.resolve(__dirname, "config", "**/!(*.d).{ts,js}")),
    AuthModule,
    UserModule,
    AlbumModule,
    TodoCategoryModule,
    TodoListModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
