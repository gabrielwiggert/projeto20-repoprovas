import { prisma } from "../src/database.js";

async function main() {
    await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (1);`;
    await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (2);`;
    await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (3);`;
    await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (4);`;
    await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (5);`;
    await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (6);`;

    await prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('Projeto');`;
    await prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('Prática');`;
    await prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('Recuperação');`;

    await prisma.$executeRaw`INSERT INTO teachers ("name") VALUES ('Diego Pinho');`;
    await prisma.$executeRaw`INSERT INTO teachers ("name") VALUES ('Bruna Hamori');`;

    await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('HTML e CSS', 1);`;
    await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('JavaScript', 2);`;
    await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('React', 3);`;
    await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Humildade', 1);`;
    await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Planejamento', 2);`;
    await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Autoconfiança', 3);`;

    await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1);`;
    await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 2);`;
    await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 3);`;
    await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 4);`;
    await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 5);`;
    await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6);`;
}

main().catch((e) => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
