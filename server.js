const express = require("express");
const app = express();

// body parser
app.use(express.json());

app.post("/signup", (req, res) => {
  // create the organisation
  // create the user with org_admin type and assign the organisation id,
  // create a subscription for free plan and also add the organisaton id and other subscription data like start_date end_date etc
  // create the json web token and assign the user_id, organisation_id, subscription_id and user_type etc
  return res.send("Signup");
});

app.post("/signin", (req, res) => {
  // check the user and password and create the json web token add necessary data to token to verify the request later using the middleware
  // create the json web token and assign the user_id, organisation_id, subscription_id and user_type etc
  return res.send("Signin");
});

// create plan
app.post("/plans", (req, res) => {});

// create feature
app.post("/features", (req, res) => {});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT-${PORT}`);
});
