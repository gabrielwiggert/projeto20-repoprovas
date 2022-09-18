import { faker } from "@faker-js/faker";

import { prisma } from "./../../src/database.js";

export default async function createTerms() {
  await prisma.term.createMany({
    data: [
      { number: 1 }, // periodo 1
      { number: 2 }, // periodo 2
      { number: 3 } // periodo 3
    ],
    skipDuplicates: true,
  });

  return await prisma.term.findMany();
}