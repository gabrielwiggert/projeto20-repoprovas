import { faker } from "@faker-js/faker";
import { UserTest } from "../../src/services/testService";

export default function invalidTestFactory(): UserTest {
  return {
    name: faker.lorem.words(1),
    pdfUrl: faker.internet.url(),
    category: "x",
    discipline: "x",
    teacher: "x"
  };
}