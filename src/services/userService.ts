import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";
import * as errors from "../utils/errors.js";

dotenv.config();

async function signUp(user) {
}

const userService = {
  signUp
}

export default userService;
