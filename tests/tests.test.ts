import { faker } from "@faker-js/faker";
import supertest from "supertest";

import app from "../src/app";
import { prisma } from "../src/database.js";
import userFactory from "./factories/userFactory.js";
import testFactory from "./factories/testFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE tests`;
  await prisma.$executeRaw`TRUNCATE TABLE users`;
});

const agent = supertest(app);

afterAll(async () => {
  await prisma.$disconnect();
});


describe('Tests POST /add-test ', () => {
  it('Should return status code 201, if a correctly formatted test is added', async () => {
    const user = await userFactory();
    await supertest(app).post('/sign-up').send(user);
    const resultUser = await supertest(app).post('/signin').send(user);

    const test = await testFactory();
    const result = await supertest(app).post('/add-test').set("Authorization", `Bearer ${resultUser.body.token}`).send(test);

    expect(result.status).toBe(201);
  });
});