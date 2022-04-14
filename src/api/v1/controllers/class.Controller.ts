// dependencies
import { Request, Response } from "express";
import { parse } from "path/posix";

// Interfaces

// Middlewares
import { asyncMiddleware } from "../middlewares/async.Middleware";

// services
import { classServices } from "../services/class.Service";

class ClassController {
  getClassByIDUser = asyncMiddleware(
    async (req: Request, res: Response): Promise<void> => {
      const IDUser: number = 1;
      const { data, message, status } = await classServices.getClassByIDUser(
        IDUser
      );
      res.status(status).send({ data, message });
    }
  );
  createClass = asyncMiddleware(
    async (req: Request, res: Response): Promise<void> => {
      const IDUser: number = 1;
      const CodeClass: string = req.body.CodeClass || "123457";
      const Title: string = req.body.Title || "test";
      const Theme: string = req.body.Theme || "";
      const Part: string = req.body.Part || "";
      const Image: string =
        "https://www.gstatic.com/classroom/themes/img_backtoschool.jpg";
      const Room: number = req.body.Room || 0;
      
      const { data, message, status } = await classServices.createClass(
        IDUser,
        CodeClass,
        Title,
        Theme,
        Part,
        Image,
        Room
      );
      res.status(status).send({ data, message });
    }
  );
}
export const classController = new ClassController();
