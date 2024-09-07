import { Hono } from "hono";
import { db } from "../db/index";
import * as schema from "../db/schema";
import { eq } from "drizzle-orm";

export const userRouter = new Hono();

userRouter.post("/signup", async (c) => {
  const data = await c.req.json();
  const existingUSer = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, data.email));

  return c.text("hello from user.ts");
});

userRouter.post("/signin", (c) => {
  return c.text("hello from user.ts");
});
