import { faker } from "@faker-js/faker";

import { prisma } from "./../../src/database.js";

export default async function createDiscipline(termId: number) {
  const discipline = await prisma.discipline.create({
    data: {
      termId,
      name: faker.hacker.ingverb()
    }
  });

  return discipline;
}