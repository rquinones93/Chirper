# Migration `20200914161238-init`

This migration has been generated by JonathanDombrowski at 9/14/2020, 9:12:38 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"bio" text   NOT NULL ,
"created_at" timestamp(3)   NOT NULL ,
"password" text   NOT NULL ,
"pinnedChirp" integer   NOT NULL ,
"privacyStatus" integer   NOT NULL ,
"profilePicture" text   NOT NULL ,
"username" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Chirp" (
"id" SERIAL,
"content" text   NOT NULL ,
"created_at" timestamp(3)   NOT NULL ,
"user_id" integer   NOT NULL ,
"userId" integer   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Chirp" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

DROP TABLE "public"."chirps"

DROP TABLE "public"."users"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200914161238-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,32 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id             Int      @default(autoincrement()) @id
+  bio            String
+  created_at     DateTime
+  chirps         Chirp[]
+  password       String
+  pinnedChirp    Int
+  privacyStatus  Int
+  profilePicture String
+  username       String
+}
+
+model Chirp {
+  id         Int      @default(autoincrement()) @id
+  content    String
+  created_at DateTime
+  user_id    Int
+  User       User?    @relation(fields: [userId], references: [id])
+  userId     Int?
+}
```


