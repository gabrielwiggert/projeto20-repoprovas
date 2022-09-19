import { Request, Response } from "express";
import testService from "../services/testService.js";

async function addTest(req: Request, res: Response) {
  const test = req.body;
  await testService.addTest(test);
  res.sendStatus(201);
}

const testController = {
  addTest
}

export default testController;
