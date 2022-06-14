import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const likes = [
        { userId: 1, postId: 2 },
        { userId: 2, postId: 2 },
        { userId: 3, postId: 2 },
        { userId: 4, postId: 2 },
    ];
    const postTrending = [
        { postId: 1, trendingId: 1 },
        { postId: 2, trendingId: 4 },
        { postId: 3, trendingId: 5 },
        { postId: 4, trendingId: 10 },
    ];
    const posts = [
        {
            link: "https://www.google.com",
            article: "site do google",
            userId: 1,
        },
        {
            link: "https://www.youtube.com/watch?v=_JEJljSlhPg",
            article: "podcast que tava ouvindo durante a criação da seed",
            userId: 2,
        },
        {
            link: "https://trello.com/b/SCuWsbL5/linkr",
            article: "trello do projeto",
            userId: 2,
        },
        {
            link: "https://app.dbdesigner.net/designer/schema/0-linkr-99fa6180-1331-41c5-ba86-3172b243b9c9",
            article: "db do projeto",
            userId: 4,
        },
    ];
    const trendings = [
        { name: "javascript" },
        { name: "react" },
        { name: "react-native" },
        { name: "material" },
        { name: "web-dev" },
        { name: "mobile" },
        { name: "css" },
        { name: "html" },
        { name: "node" },
        { name: "sql" },
    ];
    const sessions = [
        { userId: 1 },
        { userId: 2 },
        { userId: 2 },
        { userId: 4 },
        { userId: 5 },
        { userId: 5 },
        { userId: 3 },
    ];
    const users = [
        {
            id: 1,
            name: "Gabriel Viana",
            email: "melhor@aphelios.com",
            password: "so-aceita",
        },
        {
            id: 2,
            name: "Natan Brito",
            email: "natan@brito.com",
            password: "natan-brito",
        },
        {
            id: 3,
            name: "Lucax da T20",
            email: "fuisolado@pelocalvin.com",
            password: "lucax-t20",
        },
        {
            id: 4,
            name: "Thales Gomes",
            email: "el@bigon.com",
            password: "thales-gomes",
        },
        {
            id: 5,
            name: "João Henrique",
            email: "joao@henrique.com",
            password: "joao-henrique",
        },
    ];
    await prisma.users.createMany({
        data: users,
    });
    await prisma.sessions.createMany({ data: sessions });
    await prisma.trendings.createMany({ data: trendings });
    await prisma.posts.createMany({ data: posts });
    await prisma.postTrendings.createMany({ data: postTrending });
    await prisma.likes.createMany({ data: likes });
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
