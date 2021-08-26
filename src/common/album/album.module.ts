import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { ConfigService } from "nestjs-config";
import { DatabaseModule } from "src/Modules/database.module";
import { FileProviders } from "src/Providers/FIle.providers";
import { FIleService } from "src/service/FIle.service";
import { AlbumController } from "./album.controller";
import { AlbumService } from "./album.service";

@Module({
  imports: [
    DatabaseModule,
    MulterModule.registerAsync({
      useFactory: (config: ConfigService) => config.get("file"),
      inject: [ConfigService],
    }),
  ],
  controllers: [AlbumController],
  providers: [...FileProviders, AlbumService, FIleService],
})
export class AlbumModule {}
