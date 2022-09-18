import { faker } from "@faker-js/faker";

import { prisma } from "./../../src/database.js";

export default async function createTeacher() {
  const teacher = await prisma.teacher.create({
    data: {
      name: faker.name.findName()
    }
  });

  return teacher;
}