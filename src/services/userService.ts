import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import * as userRepository from "../repositories/userRepository.js";
import * as errors from "../utils/errors.js";
dotenv.config();

export type CreateUserData = Omit<User, 'id'>;

async function signUp(user: CreateUserData) {
  const existingUser = await userRepository.findUserByEmail(user.email);

  if (existingUser) {
    throw errors.conflictError();
  }

  const SALT = 10;
  const hashedPassword = bcrypt.hashSync(user.password, SALT);
  await userRepository.insertUser({ ...user, password: hashedPassword });
}

const userService = {
  signUp
}

export default userService;
