CREATE TABLE IF NOT EXISTS "order" (
	"id" serial PRIMARY KEY NOT NULL,
	"numberOfItems" integer,
	"totalAmount" numeric,
	"userId" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"userId" varchar PRIMARY KEY NOT NULL,
	"fullName" text,
	"email" varchar
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order" ADD CONSTRAINT "order_userId_users_userId_fk" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
