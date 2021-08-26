import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { TodoCategoryService } from "../service/TodoCategory.service";
import { TodoCategoryController } from "src/controller/Todo/TodoCategory.controller";
import { TodoCategoryProviders } from "src/providers/TodoCategory.providers";
import { FileController } from "src/controller/File/File.controller";
import { FileProviders } from "src/Providers/FIle.providers";
import { FIleService } from "src/service/FIle.service";

@Module({
  imports: [DatabaseModule],
  controllers: [FileController],
  providers: [...FileProviders, FIleService],
  exports: [FIleService],
})
export class FileModule {}
