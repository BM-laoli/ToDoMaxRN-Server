import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { File } from "src/Dto/File/FIle.entity";

@Injectable()
export class FIleService {
  constructor(
    @Inject("File_REPOSITORY")
    private readonly fileRepository: Repository<File>
  ) {}

  // C
  async create(file: File): Promise<any> {
    return this.fileRepository.save(file);
  }

  // U
  async update(file: File): Promise<any> {
    return this.fileRepository.update(file.id, file);
  }

  // D
  async delet(id: number): Promise<any> {
    return this.fileRepository.delete(id);
  }

  // R
  async findAll(): Promise<any> {
    return this.fileRepository.find();
  }
}
