-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('prescription', 'aadharcard', 'gst');

-- CreateTable
CREATE TABLE "CustomerBusiness" (
    "customer_business_id" SERIAL NOT NULL,
    "organisation_id" INTEGER NOT NULL,
    "company_name" TEXT,
    "company_gst" TEXT,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "CustomerBusiness_pkey" PRIMARY KEY ("customer_business_id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "organisation_id" INTEGER NOT NULL,
    "customer_type" INTEGER NOT NULL,
    "customer_business_id" INTEGER,
    "customer_name" TEXT NOT NULL,
    "customer_display_name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "mobile" TEXT,
    "pan" TEXT,
    "currency" VARCHAR(3),
    "credit_days" INTEGER,
    "status" INTEGER NOT NULL DEFAULT 0,
    "is_auto_generated_sales_number_enabled" BOOLEAN NOT NULL DEFAULT false,
    "is_enable_portal" BOOLEAN NOT NULL DEFAULT false,
    "attention" TEXT,
    "country" TEXT,
    "street1" TEXT,
    "street2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipcode" TEXT,
    "remarks" TEXT,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "CustomerDocuments" (
    "customer_document_id" SERIAL NOT NULL,
    "organisation_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "document_type" "DocumentType" NOT NULL,
    "document_name" TEXT,
    "document_url" TEXT,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerDocuments_pkey" PRIMARY KEY ("customer_document_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_key" ON "Customer"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_mobile_key" ON "Customer"("mobile");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_customer_business_id_fkey" FOREIGN KEY ("customer_business_id") REFERENCES "CustomerBusiness"("customer_business_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerDocuments" ADD CONSTRAINT "CustomerDocuments_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
