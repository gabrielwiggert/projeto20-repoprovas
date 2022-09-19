import { faker } from "@faker-js/faker";
import { UserTest } from "../../src/services/testService";

export default function testFactory(): UserTest {
  return {
    name: faker.lorem.words(1),
    pdfUrl: faker.internet.url(),
    category: "Projeto",
    discipline: "JavaScript",
    teacher: "Diego Pinho"
  };
}