-- Delete any users with null emails (backup if needed)
DELETE FROM users WHERE email IS NULL;

-- Drop existing constraints
ALTER TABLE users DROP CONSTRAINT IF EXISTS "UQ_97672ac88f789774dd47f7c8be3";
ALTER TABLE users DROP CONSTRAINT IF EXISTS "users_email_key";

-- Recreate the email column with proper constraints
ALTER TABLE users ALTER COLUMN email TYPE character varying(255);
ALTER TABLE users ALTER COLUMN email SET NOT NULL;
ALTER TABLE users ADD CONSTRAINT "users_email_key" UNIQUE (email);

-- Update other columns
ALTER TABLE users ALTER COLUMN "isEmailVerified" SET DEFAULT false;
ALTER TABLE users ALTER COLUMN "isActive" SET DEFAULT true;
ALTER TABLE users ALTER COLUMN "lastLoginAt" TYPE TIMESTAMP;
