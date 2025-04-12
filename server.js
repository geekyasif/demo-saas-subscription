const express = require("express");
const app = express();

const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT-${PORT}`);
});
