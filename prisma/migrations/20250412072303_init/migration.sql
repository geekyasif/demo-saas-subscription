-- CreateEnum
CREATE TYPE "featureinputtype" AS ENUM ('select', 'input', 'radio');

-- CreateEnum
CREATE TYPE "subscriptionstatus" AS ENUM ('active', 'cancelled', 'expired');

-- CreateEnum
CREATE TYPE "usertype" AS ENUM ('org_admin', 'super_admin', 'org_user', 'super_admin_user');

-- CreateTable
CREATE TABLE "feature_categories" (
    "feature_category_id" SERIAL NOT NULL,
    "feature_category_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "feature_categories_pkey" PRIMARY KEY ("feature_category_id")
);

-- CreateTable
CREATE TABLE "features" (
    "feature_id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "feature_value" VARCHAR(100),
    "feature_key" VARCHAR(100),
    "feature_input_type" "featureinputtype",

    CONSTRAINT "features_pkey" PRIMARY KEY ("feature_id")
);

-- CreateTable
CREATE TABLE "organisations" (
    "organisation_id" SERIAL NOT NULL,
    "organisation_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "organisations_pkey" PRIMARY KEY ("organisation_id")
);

-- CreateTable
CREATE TABLE "plan_features" (
    "plan_feature_id" SERIAL NOT NULL,
    "plan_id" INTEGER,
    "feature_id" INTEGER,
    "boolean_value" BOOLEAN,
    "text_value" VARCHAR(100),
    "numeric_value" INTEGER,

    CONSTRAINT "plan_features_pkey" PRIMARY KEY ("plan_feature_id")
);

-- CreateTable
CREATE TABLE "plans" (
    "plan_id" SERIAL NOT NULL,
    "plan_name" VARCHAR(100),
    "price_monthly" INTEGER,
    "price_yearly" INTEGER,
    "userlimit" INTEGER,
    "description" TEXT,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("plan_id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "subscription_id" SERIAL NOT NULL,
    "organisation_id" INTEGER,
    "plan_id" INTEGER,
    "status" "subscriptionstatus" DEFAULT 'active',
    "start_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "end_date" TIMESTAMP(6),

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("subscription_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "organisation_id" INTEGER,
    "user_type" "usertype",
    "is_system_generated" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "features" ADD CONSTRAINT "feature_categories_fk" FOREIGN KEY ("category_id") REFERENCES "feature_categories"("feature_category_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plan_features" ADD CONSTRAINT "feature_fk" FOREIGN KEY ("feature_id") REFERENCES "features"("feature_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plan_features" ADD CONSTRAINT "plan_fk" FOREIGN KEY ("plan_id") REFERENCES "plans"("plan_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "organisation_fk" FOREIGN KEY ("organisation_id") REFERENCES "organisations"("organisation_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "plan_sub_fk" FOREIGN KEY ("plan_id") REFERENCES "plans"("plan_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "user_organisation_fk" FOREIGN KEY ("organisation_id") REFERENCES "organisations"("organisation_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
