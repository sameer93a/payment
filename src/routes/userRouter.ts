import { Hono } from "hono";

export const userRouter = new Hono();

userRouter.post("/signup", (c) => {
  return c.text("hello from user.ts");
});

userRouter.post("/signin", (c) => {
  return c.text("hello from user.ts");
});
