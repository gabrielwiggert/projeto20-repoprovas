import { faker } from "@faker-js/faker";

import { prisma } from "./../../src/database.js";

export default async function createTest(categoryId: number, teacherDisciplineId: number) {
  const test = await prisma.test.create({
    data: {
      categoryId,
      teacherDisciplineId,
      name: `Test - ${faker.random.numeric(3)}`,
      pdfUrl: faker.internet.url()
    }
  })

  return test;
}