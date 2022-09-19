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

async function login(login: CreateUserData) {
  const user = await getUserOrFail(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

async function getUserOrFail(login: CreateUserData) {
  const user = await userRepository.findUserByEmail(login.email);
  if (!user) throw errors.unauthorizedError('Invalid credentials');

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid) throw errors.unauthorizedError('Invalid credentials');

  return user;
}

async function findUserById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw errors.notFoundError('User not found');

  return user;
}

const userService = {
  signUp,
  login,
  getUserOrFail,
  findUserById
}

export default userService;
