import { prisma } from "../database.js";
import { addTestData } from '../services/testService';

export async function addTest(test: addTestData) {
  return prisma.test.create({
    data: test
  });
}

export async function findCategory(category: string) {
  return prisma.category.findUnique({
    where: {
      name: category
    }
  });
}

export async function findDiscipline(discipline: string) {
  return prisma.discipline.findUnique({
    where: {
      name: discipline
    }
  });
}

export async function findTeacher(teacher: string) {
  return prisma.teacher.findUnique({
    where: {
      name: teacher
    }
  });
}

export async function findTeacherDiscipline(teacher: number, discipline: number) {
  return prisma.teacherDiscipline.findMany({
    where: {
      teacherId: teacher,
      disciplineId: discipline
    }
  });
}