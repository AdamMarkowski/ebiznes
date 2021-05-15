# --- !Ups
CREATE TABLE "people" (
 "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
 "name" VARCHAR NOT NULL,
 "age" INT NOT NULL
);

# --- !Downs

DROP TABLE "people"
