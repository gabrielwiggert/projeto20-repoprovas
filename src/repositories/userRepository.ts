import { prisma } from "../database.js";
import { CreateUserData } from './../services/userService';

export async function findById(id: number) {
  return prisma.user.findUnique({ where: { id }});
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email
    }
  });
}

export async function insertUser(user: CreateUserData) {
  return prisma.user.create({
    data: user
  });
}

export default {
  findById
};
