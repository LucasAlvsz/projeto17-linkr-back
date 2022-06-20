// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//     const likes = [
//         { userId: 1, postId: 2 },
//         { userId: 2, postId: 2 },
//         { userId: 3, postId: 2 },
//         { userId: 4, postId: 2 },
//     ];
//     const postHashtag = [
//         { postId: 1, hashtagId: 1 },
//         { postId: 2, hashtagId: 4 },
//         { postId: 3, hashtagId: 5 },
//         { postId: 4, hashtagId: 10 },
//     ];
//     const posts = [
//         {
//             link: "https://www.google.com",
//             article: "site do google",
//             userId: 1,
//         },
//         {
//             link: "https://www.youtube.com/watch?v=_JEJljSlhPg",
//             article: "podcast que tava ouvindo durante a criação da seed",
//             userId: 2,
//         },
//         {
//             link: "https://trello.com/b/SCuWsbL5/linkr",
//             article: "trello do projeto",
//             userId: 2,
//         },
//         {
//             link: "https://app.dbdesigner.net/designer/schema/0-linkr-99fa6180-1331-41c5-ba86-3172b243b9c9",
//             article: "db do projeto",
//             userId: 4,
//         },
//     ];
//     const hashtags = [
//         { name: "javascript" },
//         { name: "react" },
//         { name: "react-native" },
//         { name: "material" },
//         { name: "web-dev" },
//         { name: "mobile" },
//         { name: "css" },
//         { name: "html" },
//         { name: "node" },
//         { name: "sql" },
//     ];
//     const sessions = [
//         { userId: 1 },
//         { userId: 2 },
//         { userId: 2 },
//         { userId: 4 },
//         { userId: 5 },
//         { userId: 5 },
//         { userId: 3 },
//     ];
//     const users = [
//         {
//             id: 1,
//             username: "Gabriel Viana",
//             email: "melhor@aphelios.com",
//             password: "so-aceita",
//             pictureUrl:
//                 "https://cdn1.dotesports.com/wp-content/uploads/sites/3/2019/11/19165044/Screenshot_2019-11-19-Universe-of-League-of-Legends.png",
//         },
//         {
//             id: 2,
//             username: "Natan Brito",
//             email: "natan@brito.com",
//             password: "natan-brito",
//             pictureUrl:
//                 "https://ca.slack-edge.com/T018FQDU2KB-U02SZNFB3CN-0fef8aa017d3-512",
//         },
//         {
//             id: 3,
//             username: "Lucax da T20",
//             email: "fuisolado@pelocalvin.com",
//             password: "lucax-t20",
//             pictureUrl: "https://i.ibb.co/kqH9t7W/cortado.png",
//         },
//         {
//             id: 4,
//             username: "Thales Gomes",
//             email: "el@bigon.com",
//             password: "thales-gomes",
//             pictureUrl:
//                 "https://ca.slack-edge.com/T018FQDU2KB-U02TYF27A48-6a727c2b39a7-512",
//         },
//         {
//             id: 5,
//             username: "João Henrique",
//             email: "joao@henrique.com",
//             password: "joao-henrique",
//             pictureUrl:
//                 "https://ca.slack-edge.com/T018FQDU2KB-U027PBVF63S-c6a1a38939ab-512",
//         },
//     ];
//     await prisma.users.createMany({
//         data: users,
//     });
//     await prisma.sessions.createMany({ data: sessions });
//     await prisma.hashtags.createMany({ data: hashtags });
//     await prisma.posts.createMany({ data: posts });
//     await prisma.postHashtag.createMany({ data: postHashtag });
//     await prisma.likes.createMany({ data: likes });
// }

// main()
//     .catch((e) => {
//         console.error(e);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });
