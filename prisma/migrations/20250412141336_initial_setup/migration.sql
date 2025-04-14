-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('system', 'custom');

-- CreateEnum
CREATE TYPE "PermissionActionType" AS ENUM ('add', 'edit', 'delete', 'view');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role_id" INTEGER;

-- CreateTable
CREATE TABLE "roles" (
    "role_id" SERIAL NOT NULL,
    "organisation_id" INTEGER,
    "role_name" VARCHAR(50) NOT NULL,
    "role_description" VARCHAR(100),
    "is_active" BOOLEAN DEFAULT true,
    "role_type" "RoleType" DEFAULT 'custom',

    CONSTRAINT "roles_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "modules" (
    "module_id" SERIAL NOT NULL,
    "module_name" VARCHAR(50) NOT NULL,
    "module_key" VARCHAR(50) NOT NULL,

    CONSTRAINT "modules_pkey" PRIMARY KEY ("module_id")
);

-- CreateTable
CREATE TABLE "sub_modules" (
    "sub_module_id" SERIAL NOT NULL,
    "module_id" INTEGER NOT NULL,
    "sub_module_name" VARCHAR(50) NOT NULL,
    "sub_module_key" VARCHAR(50) NOT NULL,

    CONSTRAINT "sub_modules_pkey" PRIMARY KEY ("sub_module_id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "permission_id" SERIAL NOT NULL,
    "permission_name" VARCHAR(50) NOT NULL,
    "role_id" INTEGER NOT NULL,
    "module_id" INTEGER NOT NULL,
    "action" "PermissionActionType" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "sub_modulesSub_module_id" INTEGER,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("permission_id")
);

-- CreateTable
CREATE TABLE "role_permissions" (
    "role_permission_id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "role_permissions_pkey" PRIMARY KEY ("role_permission_id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "user_role_fk" FOREIGN KEY ("role_id") REFERENCES "roles"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "role_organisation_fk" FOREIGN KEY ("organisation_id") REFERENCES "organisations"("organisation_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sub_modules" ADD CONSTRAINT "sub_module_module_fk" FOREIGN KEY ("module_id") REFERENCES "modules"("module_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "permission_role_fk" FOREIGN KEY ("role_id") REFERENCES "roles"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "permissions_sub_modulesSub_module_id_fkey" FOREIGN KEY ("sub_modulesSub_module_id") REFERENCES "sub_modules"("sub_module_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_permissions" ADD CONSTRAINT "role_permission_role_fk" FOREIGN KEY ("role_id") REFERENCES "roles"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role_permissions" ADD CONSTRAINT "role_permission_permission_fk" FOREIGN KEY ("permission_id") REFERENCES "permissions"("permission_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
