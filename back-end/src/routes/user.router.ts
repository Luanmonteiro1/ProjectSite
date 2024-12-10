import { Router } from "express";
import { createUserController, readUserController, } from "../controllers/user.controller";
import { uniqueEmail } from "../middlewares/uniqueEmail.middleware";
import { validateBody } from "../middlewares/validate.middleware";
import { userCreateSchema } from "../schemas/user.schemas";

export const userRouter: Router = Router()

userRouter.post('/',validateBody(userCreateSchema),uniqueEmail, createUserController)
userRouter.get('/', readUserController)