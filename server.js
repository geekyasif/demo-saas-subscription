const express = require("express");
const app = express();

const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const upload = require('./middleware/multerMiddleware');
dotenv.config();

// body parser
app.use(express.json());
app.use(cors());

// app.use("*", (req, res) => {
//   console.log({ url: req.url, body: req.body });
// });

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.post("/signup", async (req, res) => {
  try {
    const { organisation_name, name, password } = req.body;

    const organisation = await prisma.organisations.findFirst({
      where: {
        organisation_name: {
          contains: organisation_name,
          mode: "insensitive",
        },
      },
    });

    if (organisation) {
      return res.status(400).json({
        success: false,
        message: "Organisation already exists",
      });
    }

    const freePlan = await prisma.plans.findFirst({
      where: {
        plan_name: {
          contains: "Free",
          mode: "insensitive",
        },
      },
    });

    let new_organisation = null;
    let new_user = null;
    let new_subscription_plan = null;
    await prisma.$transaction(async (tx) => {
      // creating the new organisation
      new_organisation = await tx.organisations.create({
        data: {
          organisation_name: organisation_name,
        },
      });

      // creating the new user
      new_user = await tx.users.create({
        data: {
          name: name,
          password: password,
          organisation_id: new_organisation.organisation_id,
          user_type: "org_admin",
        },
      });

      // creating the new subscription for now it is free plan
      new_subscription_plan = await tx.subscriptions.create({
        data: {
          plan_id: freePlan.plan_id,
          organisation_id: new_organisation.organisation_id,
          start_date: new Date(),
          end_date: null,
          status: "active",
        },
      });
    });

    return res.status(200).json({
      success: true,
      message:
        "New Organisation with user and free subscription plan created successfully.",
      data: {
        organisation_id: new_organisation.organisation_id,
        user_id: new_user?.user_id,
        subscription_id: new_subscription_plan.subscription_id,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.post("/signin", async (req, res) => {
  // check the user and password and create the json web token add necessary data to token to verify the request later using the middleware
  // create the json web token and assign the user_id, organisation_id, subscription_id and user_type etc

  try {
    const { name, password } = req.body;

    const user = await prisma.users.findFirst({
      where: {
        name: name,
        password: password,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const organisation = await prisma.organisations.findFirst({
      where: {
        organisation_id: user.organisation_id,
      },
    });

    if (!organisation) {
      return res.status(401).json({
        success: false,
        message: "Organisation not found!",
      });
    }

    // also create the org_admin role and assign to the user

    const subscription = await prisma.subscriptions.findFirst({
      where: {
        organisation_id: organisation.organisation_id,
      },
      include: {
        plans: {
          include: {
            plan_features: {
              include: {
                features: {
                  include: {
                    feature_categories: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Signin successful",
      data: {
        user_id: user.user_id,
        organisation_id: organisation.organisation_id,
        subscription_id: subscription.subscription_id,
        user_type: user.user_type,
        plan_name: subscription.plans.plan_name,
        plan_features: subscription.plans.plan_features,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// create plan
app.post("/plans", (req, res) => {});

// create feature
app.post("/features", (req, res) => {});

app.post("/createCustomer", upload.array("documents"), async (req, res) => {
  try {
    const {
      organisation_id,
      customer_type,
      customer_name,
      customer_display_name,
      email,
      phone,
      mobile,
      pan,
      currency,
      credit_days,
      status, // should be either "draft" or "active"
      is_auto_generated_sales_number_enabled,
      is_enable_portal,
      attention,
      country,
      street1,
      street2,
      city,
      state,
      zipcode,
      remarks,
      company_name,
      company_gst,
      documents_meta,
    } = req.body;

    const isActive = status === 2;

  
    if (isActive) {
      const requiredFields = [
        { field: customer_name, name: "customer_name" },
        { field: customer_display_name, name: "customer_display_name" },
        { field: email, name: "email" }
      ];

      const missingFields = requiredFields.filter(f => !f.field);
      if (missingFields.length > 0) {
        return res.status(400).json({
          success: false,
          message: `Missing required fields for active customer: ${missingFields.map(f => f.name).join(", ")}`
        });
      }

      const existingCustomer = await prisma.customer.findFirst({
        where: { email },
      });

      if (existingCustomer) {
        return res.status(400).json({
          success: false,
          message: "Customer with this email already exists",
        });
      }
    }

    const uploadedFiles = req.files;
    const parsedMeta = documents_meta ? JSON.parse(documents_meta) : [];

    const result = await prisma.$transaction(async (tx) => {
      let customer_business = null;

      if (parseInt(customer_type) === 2) {
        customer_business = await tx.customerBusiness.create({
          data: {
            organisation_id: parseInt(organisation_id),
            company_name,
            company_gst,
            created_at: new Date(),
            updated_at: new Date(),
          },
        });
      }

      const new_customer = await tx.customer.create({
        data: {
          organisation_id: parseInt(organisation_id),
          customer_type: parseInt(customer_type),
          customer_business_id: customer_business?.customer_business_id || null,
          customer_name,
          customer_display_name,
          email,
          phone,
          mobile,
          pan,
          currency,
          credit_days: credit_days ? parseInt(credit_days) : null,
          status: parseInt(status),
          is_auto_generated_sales_number_enabled: is_auto_generated_sales_number_enabled === "true",
          is_enable_portal: is_enable_portal === "true",
          attention,
          country,
          street1,
          street2,
          city,
          state,
          zipcode,
          remarks,
          created_at: new Date(),
          updated_at: new Date(),
        },
      });

      if (isActive && uploadedFiles.length && parsedMeta.length) {
        const allowedTypes = ["AADHAAR", "PAN", "GST", "OTHER"];
        const documentsToCreate = uploadedFiles.map((file, index) => {
          const docType = parsedMeta[index]?.document_type?.toLowerCase();
          return {
            organisation_id: parseInt(organisation_id),
            customer_id: new_customer.customer_id,
            document_type: allowedTypes.includes(docType?.toUpperCase()) ? docType : "other",
            document_name: parsedMeta[index]?.document_name || file.originalname,
            document_url: file.path,
          };
        });

        await tx.customerDocuments.createMany({ data: documentsToCreate });
      }

      return new_customer;
    });

    return res.status(201).json({
      success: true,
      message: "Customer created successfully",
      customer_id: result.customer_id,
    });

  } catch (err) {
    console.error("Create customer error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});


app.get("/filterCustomer", async (req, res) => {
  try {
    const {
      organisation_id,
      status,
      customer_type,
      search,
      company_name,
      date_from,
      date_to,
      has_documents,
      sort_by = "created_at",
      sort_order = "desc",
      page = 1,
      limit = 10,
    } = req.query;

    const whereClause = {};

    if (organisation_id) {
      whereClause.organisation_id = parseInt(organisation_id);
    }

    if (status) whereClause.status = parseInt(status);
    if (customer_type) whereClause.customer_type = parseInt(customer_type);

    if (search) {
      whereClause.OR = [
        { customer_name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
        { mobile: { contains: search, mode: "insensitive" } },
      ];
    }

    if (date_from || date_to) {
      whereClause.created_at = {};
      if (date_from) whereClause.created_at.gte = new Date(date_from);
      if (date_to) whereClause.created_at.lte = new Date(date_to);
    }

    if (has_documents === "true") {
      whereClause.documents = {
        some: {},
      };
    } else if (has_documents === "false") {
      whereClause.documents = {
        none: {},
      };
    }

    if (company_name) {
      whereClause.customer_business = {
        company_name: {
          contains: company_name,
          mode: "insensitive",
        },
      };
    }

    const [customers, total] = await Promise.all([
      prisma.customer.findMany({
        where: whereClause,
        include: { customer_business: true, documents: true },
        orderBy: { [sort_by]: sort_order },
        skip: (parseInt(page) - 1) * parseInt(limit),
        take: parseInt(limit),
      }),
      prisma.customer.count({ where: whereClause }),
    ]);

    return res.status(200).json({
      success: true,
      data: customers,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (err) {
    console.error("Advanced filter error:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


/*

Parameter	Type	Required	Description
organisation_id	Int	- No	ID of the organisation
status	Int	- No	1 = Draft, 2 = Active
customer_type	Int	- No	1 = Individual, 2 = Business
search	String	- No	Search across name, email, phone, mobile
company_name	String	- No	Partial match for company name (for business customers only)
date_from	Date	- No	Start date for created_at filter (YYYY-MM-DD)
date_to	Date	- No	End date for created_at filter (YYYY-MM-DD)
has_documents	Boolean	- No	true or false to filter by existence of customer documents
sort_by	String	- No	Field to sort by (created_at, customer_name, etc.)
sort_order	String	- No	asc or desc
page	Int	- No	Page number for pagination (default: 1)
limit	Int	- No	Number of records per page (default: 10)
*/






const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT-${PORT}`);
});

/*
https://dev.pharmnex.app/
aditbhargava.1991+001@gmail.com
Admin@123



*/
