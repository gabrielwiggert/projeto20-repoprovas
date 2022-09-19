import { faker } from "@faker-js/faker";
import { CreateUserData } from "../../src/services/userService";

export default function userFactory(): CreateUserData {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}