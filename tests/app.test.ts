import { faker } from "@faker-js/faker";
import supertest from "supertest";

import app from "./../src/app.js";
import { prisma } from "./../src/database.js";
import userFactory from "./factories/userFactory.js";

beforeEach(async() => {
  await deleteAllData();
});

const agent = supertest(app);

afterAll(async () => {
  await prisma.$disconnect();
});
