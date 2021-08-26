import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): any {
    return {
      code: 200,
      data: {
        name: "老李",
        age: 18,
      },
    };
  }
}
