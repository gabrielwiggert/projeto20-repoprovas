import { faker } from "@faker-js/faker";
import supertest from "supertest";

import app from "../src/app.js";
import { prisma } from "../src/database.js";
import userFactory from "./factories/userFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
});

const agent = supertest(app);

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Tests POST /sign-up ', () => {
  it('Should return status code 201, if a correctly formatted user is created', async () => {
    const user = await userFactory();

    const result = await supertest(app).post('/sign-up').send(user);

    expect(result.status).toBe(201);
  });

  it('Should return status code 409, when the provided email is already registered', async () => {
    const user = await userFactory();

    await supertest(app).post('/sign-up').send(user);

    const result = await supertest(app).post('/sign-up').send(user);

    expect(result.status).toBe(409);
  });
});

describe('Tests POST /signin ', () => {
  it('Should return an object with a token, if a correctly formatted user is signed in (is registered)', async () => {
    const user = await userFactory();

    await supertest(app).post('/sign-up').send(user);

    const result = await supertest(app).post('/signin').send(user);

    expect(result.body).toBeInstanceOf(Object);
  });

  it('Should return status code 401, when the provided email doesnt exist', async () => {
    const user = await userFactory();

    const result = await supertest(app).post('/signin').send(user);

    expect(result.status).toBe(401);
  });

  it('Should return status code 401, when the provided password is incorrect', async () => {
    const user = await userFactory();

    await supertest(app).post('/sign-up').send(user);

    user.password = 'wrong_password'

    const result = await supertest(app).post('/signin').send(user);

    expect(result.status).toBe(401);
  });
});