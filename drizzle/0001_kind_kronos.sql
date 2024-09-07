ALTER TABLE "user" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "user" USING btree ("email");