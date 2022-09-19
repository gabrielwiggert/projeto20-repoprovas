import { Router } from "express";
import testController from "../controllers/testController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";

const testRouter = Router();

testRouter.use(ensureAuthenticatedMiddleware);
testRouter.post("/add-test", validateSchemaMiddleware(testSchema), testController.addTest);

export default testRouter;