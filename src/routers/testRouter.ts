import { Router } from "express";
import testController from "../controllers/testController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";

const testRouter = Router();

testRouter.use(ensureAuthenticatedMiddleware);
testRouter.post("/add-test", validateSchemaMiddleware(testSchema), testController.addTest);
testRouter.get("/tests-discipline", testController.viewTestsByDiscipline);
testRouter.get("/tests-teacher", testController.viewTestsByTeacher);

export default testRouter;