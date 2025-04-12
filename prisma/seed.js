const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    // 1. Clear old data (child -> parent order)
    await tx.plan_features.deleteMany();
    await tx.features.deleteMany();
    await tx.plans.deleteMany();
    await tx.feature_categories.deleteMany();
    await tx.permissions.deleteMany();
    await tx.sub_modules.deleteMany();
    await tx.modules.deleteMany();

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

    // add modules
    // Step 1: Create all modules
    const moduleData = [
      { module_name: "Inventory", module_key: "inventory" },
      { module_name: "Sales", module_key: "sales" },
      { module_name: "Purchases", module_key: "purchases" },
      { module_name: "Reports", module_key: "reports" },
      { module_name: "Settings", module_key: "settings" },
    ];

    const modulesMap = {};

    for (const mod of moduleData) {
      const created = await tx.modules.create({ data: mod });
      modulesMap[mod.module_name] = created.module_id;
    }

    // Step 2: Insert sub_modules with correct module_id references
    // add sub_modules
    const subModulesData = [
      // Inventory
      { module_name: "Inventory", name: "Products", key: "products" },
      { module_name: "Inventory", name: "Group", key: "group" },
      { module_name: "Inventory", name: "Adjustments", key: "adjustments" },

      // Sales
      { module_name: "Sales", name: "Customers", key: "customers" },
      { module_name: "Sales", name: "Doctors", key: "doctors" },
      { module_name: "Sales", name: "Packages", key: "packages" },
      { module_name: "Sales", name: "Shipments", key: "shipments" },
      {
        module_name: "Sales",
        name: "Delivery Challans",
        key: "delivery_challans",
      },
      { module_name: "Sales", name: "Invoices", key: "invoices" },
      {
        module_name: "Sales",
        name: "Payments Received",
        key: "payments_received",
      },
      { module_name: "Sales", name: "Sales Return", key: "sales_return" },
      { module_name: "Sales", name: "Credit Notes", key: "credit_notes_sales" },

      // Purchases
      { module_name: "Purchases", name: "Vendor", key: "vendor" },
      {
        module_name: "Purchases",
        name: "Purchase Orders",
        key: "purchase_orders",
      },
      {
        module_name: "Purchases",
        name: "Purchase Receives",
        key: "purchase_receives",
      },
      {
        module_name: "Purchases",
        name: "Purchase Bills",
        key: "purchase_bills",
      },
      { module_name: "Purchases", name: "Payments Made", key: "payments_made" },
      {
        module_name: "Purchases",
        name: "Credit Notes",
        key: "credit_notes",
      },

      // Reports
      {
        name: "Sale By Customers",
        key: "customers_reports_sale_by_customers",
        module_name: "Reports",
      },
      {
        name: "Sale By Products",
        key: "customers_reports_sale_by_products",
        module_name: "Reports",
      },
      {
        name: "Sale By Sales Person",
        key: "customers_reports_sale_by_salesperson",
        module_name: "Reports",
      },
      {
        name: "Sale Return History",
        key: "customers_reports_sale_return_history",
        module_name: "Reports",
      },

      {
        name: "Inventory Summary",
        key: "inventory_inventory_summary",
        module_name: "Reports",
      },
      {
        name: "Inventory Valuation",
        key: "inventory_inventory_valuation",
        module_name: "Reports",
      },
      {
        name: "Product Sale Report",
        key: "inventory_product_sale_report",
        module_name: "Reports",
      },
      {
        name: "Stock Summary",
        key: "inventory_stock_summary",
        module_name: "Reports",
      },

      {
        name: "Customer Balances",
        key: "receivables_customer_balances",
        module_name: "Reports",
      },
      {
        name: "Invoice Reports",
        key: "receivables_invoice_reports",
        module_name: "Reports",
      },
      {
        name: "Receivables Summary",
        key: "receivables_receivables_summary",
        module_name: "Reports",
      },

      {
        name: "Payment Received Summary",
        key: "payments_received_payment_received_summary",
        module_name: "Reports",
      },
      {
        name: "Refund History",
        key: "payment_received_refund_history",
        module_name: "Reports",
      },

      {
        name: "Vendor Balances",
        key: "payables_vendor_balances",
        module_name: "Reports",
      },
      {
        name: "Purchase Bill Reports",
        key: "payables_purchase_bill_reports",
        module_name: "Reports",
      },
      {
        name: "Vendor Credit Reports",
        key: "payables_vendor_credit_reports",
        module_name: "Reports",
      },
      {
        name: "Payments Made Reports",
        key: "payables_payments_made_reports",
        module_name: "Reports",
      },
      {
        name: "Purchase Order Reports",
        key: "payables_purchase_order_reports",
        module_name: "Reports",
      },
      {
        name: "Purchase Order By Vendors",
        key: "payables_purchase_order_by_vendors",
        module_name: "Reports",
      },
      {
        name: "Payables Summary",
        key: "payables_payables_summary",
        module_name: "Reports",
      },

      {
        name: "Product Wise Purchase",
        key: "purchase_expense_product_wise_purchase",
        module_name: "Reports",
      },
      {
        name: "Invoice Reports",
        key: "purchase_expense_invoice_reports",
        module_name: "Reports",
      },
      {
        name: "Product Receive History",
        key: "purchase_expense_product_receive_history",
        module_name: "Reports",
      },

      // Settings
      // Users and Roles
      {
        module_name: "Settings",
        name: "Users",
        key: "users_and_roles_settings_users",
      },
      {
        module_name: "Settings",
        name: "Roles",
        key: "users_and_roles_settings_roles",
      },

      // Organisations
      {
        module_name: "Settings",
        name: "Branding",
        key: "organisations_settings_branding",
      },
      {
        module_name: "Settings",
        name: "Tax",
        key: "organisations_settings_tax",
      },
      {
        module_name: "Settings",
        name: "Profile Settings",
        key: "organisations_settings_profile_settings",
      },

      // References
      {
        module_name: "Settings",
        name: "General",
        key: "references_settings_general",
      },

      // Products
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "products_settings_field_customisation",
      },

      // Sales
      {
        module_name: "Settings",
        name: "Packages",
        key: "sales_settings_packages",
      },
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "sales_settings_field_customisation",
      },

      // Shipment
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "shipment_settings_field_customisation",
      },

      // Delivery Challans
      {
        module_name: "Settings",
        name: "General",
        key: "delivery_challans_settings_general",
      },
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "delivery_challans_settings_field_customisation",
      },

      // Invoices
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "invoices_field_settings_customisation",
      },

      // Payments Received
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "payments_received_settings_field_customisation",
      },

      // Sales Returns
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "sales_returns_settings_field_customisation",
      },

      // Credit Notes
      {
        module_name: "Settings",
        name: "General",
        key: "credit_notes_settings_general",
      },
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "credit_notes_settings_field_customisation",
      },

      // Purchases
      {
        module_name: "Settings",
        name: "Bills",
        key: "purchases_settings_bills",
      },
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "purchases_settings_field_customisation",
      },

      // Payments Made
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "payments_made_settings_field_customisation",
      },

      // Purchase Orders
      {
        module_name: "Settings",
        name: "General",
        key: "purchase_orders_settings_general",
      },
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "purchase_orders_settings_field_customisation",
      },

      // Purchase Receives
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "purchase_receives_settings_field_customisation",
      },

      // Vendor Credits
      {
        module_name: "Settings",
        name: "Field Customisation",
        key: "vendor_credits_settings_field_customisation",
      },
    ];

    //permissions
    const subModulesMap = {};
    for (const sub of subModulesData) {
      const module_id = modulesMap[sub.module_name];
      await tx.sub_modules.create({
        data: {
          module_id,
          sub_module_name: sub.name,
          sub_module_key: sub.key,
        },
      });
      subModulesMap[sub.key] = created.sub_module_id;
    }

    // Step 3: Define permissions to be created for each sub-module
    const permissionActions = [
      "view",
      "create",
      "edit",
      "delete",
      "export",
      "import",
      "pdf",
      "print",
      "email",
      "clone",
      "schedule",
      "download",
      "upload",
      "cancel",
    ];

    for (const [subKey, subId] of Object.entries(subModulesMap)) {
      for (const action of permissionActions) {
        await tx.permissions.create({
          data: {
            permission_name: `${action}_${subKey.toLowerCase()}`,
            sub_module_id: subId,
            action,
            is_active: true,
          },
        });
      }
    }
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

// roles and permissions
// create four roles
// org_admin,
// accountant,
// staff,
// manager,
// countries and states
