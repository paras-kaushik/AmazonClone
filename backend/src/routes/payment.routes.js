const express=require("express");
const authenticate = require("../middleware/authenticat.js");
const router=express.Router();
const paymentController = require("../controllers/payment.controller.js");

// Below url takes in an order ID and returns a payment_link_url which is rendered by our FE
router.post("/:id", authenticate, paymentController.createPaymentLink);

//After the payment is done payment info is to be stored in the DB
router.get("/",authenticate,paymentController.updatePaymentInformation);


module.exports=router;
