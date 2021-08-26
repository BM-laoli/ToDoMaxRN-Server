/*
 * @Author: lishizeng
 * @Date: 2020-07-27 18:15:34
 * @LastEditTime: 2020-12-16 23:16:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Node_NestJS\Noted\第五章，这商业项目\蓝图\MnogDB_blueprint\src\config\file.ts
 */
import { join } from "path";
import { diskStorage } from "multer";

export default {
  root: join(__dirname, "../uploads"),
  storage: diskStorage({
    destination: join(
      __dirname,
      `../uploads/${new Date().toLocaleDateString()}`
    ),
    filename: (req, file, cb) => {
      const filename = `${new Date().getTime()}.${file.originalname}`;
      return cb(null, filename);
    },
  }),
};
