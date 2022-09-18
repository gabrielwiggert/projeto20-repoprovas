import { prisma } from "./../../src/database.js";

export default async function createTeacherDiscipline(teacherId: number, disciplineId: number) {
  const teacherDiscipline = await prisma.teacherDiscipline.create({
    data: {
      teacherId,
      disciplineId
    }
  });
  
  return teacherDiscipline;
}