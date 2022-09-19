import { Router } from "express";
import userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post("/sign-up", validateSchemaMiddleware(userSchema), userController.signUp);
userRouter.post('/signin', validateSchemaMiddleware(userSchema), userController.signIn);

export default userRouter;