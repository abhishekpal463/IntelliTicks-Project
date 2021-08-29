const express = require("express");
const adminRouter = express.Router();

const {addProperty,
    propertyForm,
    delProperty,
    delPropertyPage
    } = require("../controller/property");

adminRouter.get("/addproperty",propertyForm);
adminRouter.get("/delproperty",delPropertyPage)
adminRouter.post("/addproperty", addProperty);
adminRouter.post("/deleteproperty/:id", delProperty);

module.exports = adminRouter;  