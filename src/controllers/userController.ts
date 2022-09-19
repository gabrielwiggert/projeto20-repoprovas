import { Request, Response } from "express";
import userService from "../services/userService.js";

async function signUp(req: Request, res: Response) {
  const user = req.body;
  await userService.signUp(user);
  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const user = req.body;
  const token = await userService.login(user);
  res.send({ token });
}

const userController = {
  signUp,
  signIn
}

export default userController;
