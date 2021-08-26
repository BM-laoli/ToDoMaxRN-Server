import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { TodoCategoryService } from "../service/TodoCategory.service";
import { TodoCategoryController } from "src/controller/Todo/TodoCategory.controller";
import { TodoCategoryProviders } from "src/providers/TodoCategory.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [TodoCategoryController],
  providers: [...TodoCategoryProviders, TodoCategoryService],
})
export class TodoCategoryModule {}
