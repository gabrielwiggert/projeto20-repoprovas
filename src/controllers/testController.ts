import { Request, Response } from "express";
import testService from "../services/testService.js";

async function addTest(req: Request, res: Response) {
  const test = req.body;
  await testService.addTest(test);
  res.sendStatus(201);
}

async function viewTestsByDiscipline(req: Request, res: Response) {
  const result = await testService.getTestsByDiscipline();
  res.send(result);
}

async function viewTestsByTeacher(req: Request, res: Response) {
  const result = await testService.getTestsByTeacher();
  res.send(result);
}

const testController = {
  addTest,
  viewTestsByDiscipline,
  viewTestsByTeacher
}

export default testController;
