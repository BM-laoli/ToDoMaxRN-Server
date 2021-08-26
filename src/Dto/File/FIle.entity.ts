import { ApiPropertyOptional } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "../Auth/photo.entity";

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiPropertyOptional({
    description: "文件名",
    example: "头像.jpg",
  })
  @Column()
  name: string;

  @ApiPropertyOptional({
    description: "文件大小字节",
    example: 1222,
  })
  @Column()
  size: number;

  @ApiPropertyOptional({
    description: "文件url",
    example: "www.bvaidu.com/sdxaasdasdasd/asdasdasd",
  })
  @Column()
  url: string;

  // 文件所属于用户
  @ManyToOne(() => User, (user) => user.avert)
  user: User;
}
