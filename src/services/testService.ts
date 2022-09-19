import { Test } from "@prisma/client";
import dotenv from "dotenv";
import * as testRepository from "../repositories/testRepository.js";
import * as errors from "../utils/errors.js";
dotenv.config();

export type addTestData = Omit<Test, 'id'>;

export interface UserTest {
  name: string;
  pdfUrl: string;
  category: string;
  discipline: string;
  teacher: string;
}

async function addTest(userTest: UserTest) {
  const resultCategory = await testRepository.findCategory(userTest.category);
  if (!resultCategory) {throw errors.notFoundError(); }

  const resultDiscipline = await testRepository.findDiscipline(userTest.discipline);
  if (!resultDiscipline) {throw errors.notFoundError(); }

  const resultTeacher = await testRepository.findTeacher(userTest.teacher);
  if (!resultTeacher) {throw errors.notFoundError(); }

  const resultTeacherDiscipline = await testRepository.findTeacherDiscipline(Number(resultTeacher.id), Number(resultDiscipline.id));
  if (!resultTeacherDiscipline[0]) {throw errors.notFoundError(); }

  let test: addTestData = {
    name:"",
    pdfUrl: "",
    categoryId: 0,
    teacherDisciplineId: 0
  };
  test.name = userTest.name;
  test.pdfUrl = userTest.pdfUrl
  test.categoryId = resultCategory.id;
  test.teacherDisciplineId = resultTeacherDiscipline[0].id;

  await testRepository.addTest(test);
}

async function getTestsByDiscipline() {
  return await testRepository.getTestsByDiscipline();
}

async function getTestsByTeacher() {
  return await testRepository.getTestsByTeacher();
}

const userService = {
  addTest,
  getTestsByDiscipline,
  getTestsByTeacher
}

export default userService;