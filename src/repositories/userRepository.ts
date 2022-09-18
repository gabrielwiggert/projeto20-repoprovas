import { prisma } from "../database.js";

async function findById(id: number) {
  return prisma.user.findUnique({ where: { id }});
}

export default {
  findById
};
