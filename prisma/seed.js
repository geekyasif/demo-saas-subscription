const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    // 1. Clear old data (child -> parent order)
    await tx.plan_features.deleteMany();
    await tx.features.deleteMany();
    await tx.plans.deleteMany();
    await tx.feature_categories.deleteMany();

    // Create Feature Categories
    const categories = [
      "Core",
      "Inventory",
      "Sales features",
      "Purchase features",
      "Integrations",
      "Automation",
      "Advanced Analytics",
    ];

    const categoryRecords = {};
    for (const name of categories) {
      const record = await tx.feature_categories.create({
        data: { feature_category_name: name },
      });
      categoryRecords[name] = record.feature_category_id;
    }

    // Create Plans
    const plans = [
      { plan_name: "FREE", price_monthly: 0, price_yearly: 0, userlimit: 1 },
      {
        plan_name: "PROFESSIONAL",
        price_monthly: 0,
        price_yearly: 500,
        userlimit: 4,
      },
      {
        plan_name: "ENTERPRISE",
        price_monthly: 0,
        price_yearly: 500,
        userlimit: 4,
      },
    ];

    const planRecords = {};
    for (const plan of plans) {
      const record = await tx.plans.create({ data: plan });
      planRecords[plan.plan_name] = record.plan_id;
    }

    // Helper for boolean display
    const boolToStr = (val) => (val ? "true" : "false");

    const features = [
      // Core
      {
        key: "Watermark",
        category: "Core",
        type: "select",
        values: ["true", "false", "false"],
      },
      {
        key: "Orders /month",
        category: "Core",
        type: "input",
        values: ["50", "5000", "10000"],
      },
      {
        key: "Invoices /month",
        category: "Core",
        type: "input",
        values: ["50", "5000", "10000"],
      },
      {
        key: "Purchase orders /month",
        category: "Core",
        type: "input",
        values: ["20", "2500", "5000"],
      },
      {
        key: "Bills /month",
        category: "Core",
        type: "input",
        values: ["20", "2500", "5000"],
      },
      {
        key: "Users",
        category: "Core",
        type: "input",
        values: ["1", "4", "4"],
      },
      {
        key: "Warehouses",
        category: "Core",
        type: "input",
        values: ["1", "2", "4"],
      },
      {
        key: "GSTIN",
        category: "Core",
        type: "input",
        values: ["1", "1", "3"],
      },

      // Inventory
      {
        key: "Item groups",
        category: "Inventory",
        type: "select",
        values: [boolToStr(true), boolToStr(true), boolToStr(true)],
      },
      {
        key: "Composite items",
        category: "Inventory",
        type: "select",
        values: [boolToStr(true), boolToStr(true), boolToStr(true)],
      },
      {
        key: "Price list",
        category: "Inventory",
        type: "select",
        values: [boolToStr(false), boolToStr(true), boolToStr(true)],
      },
      {
        key: "Barcode generation",
        category: "Inventory",
        type: "select",
        values: [boolToStr(false), boolToStr(true), boolToStr(true)],
      },

      // Sales features
      {
        key: "Quotation",
        category: "Sales features",
        type: "select",
        values: ["false", "true", "true"],
      },
      {
        key: "Sales Order",
        category: "Sales features",
        type: "select",
        values: ["false", "true", "true"],
      },
      {
        key: "Delivery Challan",
        category: "Sales features",
        type: "select",
        values: ["false", "true", "true"],
      },
      {
        key: "Online Payments",
        category: "Sales features",
        type: "select",
        values: ["false", "true", "true"],
      },

      // Purchase features
      {
        key: "Purchase Request",
        category: "Purchase features",
        type: "select",
        values: ["false", "true", "true"],
      },
      {
        key: "Vendor Portal",
        category: "Purchase features",
        type: "select",
        values: ["false", "false", "true"],
      },
      {
        key: "Purchase Returns",
        category: "Purchase features",
        type: "select",
        values: ["false", "true", "true"],
      },

      // Integrations
      {
        key: "Tally Integration",
        category: "Integrations",
        type: "select",
        values: ["false", "false", "true"],
      },
      {
        key: "Zoho CRM",
        category: "Integrations",
        type: "select",
        values: ["false", "true", "true"],
      },
      {
        key: "WhatsApp Notifications",
        category: "Integrations",
        type: "select",
        values: ["false", "true", "true"],
      },

      // Automation
      {
        key: "Automatic Reminders",
        category: "Automation",
        type: "select",
        values: ["false", "true", "true"],
      },
      {
        key: "Workflow Rules",
        category: "Automation",
        type: "select",
        values: ["false", "true", "true"],
      },
      {
        key: "Custom Scripts",
        category: "Automation",
        type: "select",
        values: ["false", "false", "true"],
      },

      // Advanced Analytics
      {
        key: "Sales Reports",
        category: "Advanced Analytics",
        type: "select",
        values: ["true", "true", "true"],
      },
      {
        key: "Inventory Forecasting",
        category: "Advanced Analytics",
        type: "select",
        values: ["false", "true", "true"],
      },
      {
        key: "Profitability Analysis",
        category: "Advanced Analytics",
        type: "select",
        values: ["false", "false", "true"],
      },
    ];

    for (const feature of features) {
      const featureRecord = await tx.features.create({
        data: {
          category_id: categoryRecords[feature.category],
          feature_key: feature.key,
          feature_input_type: feature.type,
        },
      });

      await tx.plan_features.createMany({
        data: [
          {
            feature_id: featureRecord.feature_id,
            plan_id: planRecords.FREE,
            feature_value: feature.values[0],
          },
          {
            feature_id: featureRecord.feature_id,
            plan_id: planRecords.PROFESSIONAL,
            feature_value: feature.values[1],
          },
          {
            feature_id: featureRecord.feature_id,
            plan_id: planRecords.ENTERPRISE,
            feature_value: feature.values[2],
          },
        ],
      });
    }

    //permissions
    // roles and permissions
    // create four roles
    // org_admin,
    // accountant,
    // staff,
    // manager,
    // countries and states
  });
}

main()
  .then(async () => {
    console.log("✅ Seed completed");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed", e);
    await prisma.$disconnect();
    process.exit(1);
  });
