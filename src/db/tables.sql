CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(256) NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE sessions(
    id SERIAL PRIMARY KEY NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "userId" INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY NOT NULL,
    link TEXT NOT NULL,
    article TEXT NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES users(id),
    "postId" INTEGER NOT NULL REFERENCES posts(id)
);

CREATE TABLE trendings(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE "postTrendings"(
    id SERIAL PRIMARY KEY NOT NULL,
    "trendingId" INTEGER NOT NULL REFERENCES trendings(id),
    "postId" INTEGER NOT NULL REFERENCES posts(id)
);