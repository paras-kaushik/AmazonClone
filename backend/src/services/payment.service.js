//const razorpay = require("../config/razorpayClient");
const orderService = require("../services/order.service.js");

const createPaymentLink = async (orderId) => {
  // const { amount, currency, receipt, notes } = reqData;
  try {
    const order = await orderService.findOrderById(orderId);
    const paymentLinkRequest = {// setting up a web hook
      amount: order.totalPrice * 100,// paise ?
      currency: 'INR',
      customer: {
        name: order.user.firstName + ' ' + order.user.lastName,
        contact: order.user.mobile,
        email: order.user.email,
      },
      notify: {
        sms: true,
        email: true,
      },
      reminder_enable: true,
      callback_url: `http://localhost:3000/payment/${orderId}`,// Where do we want to redirect after success
      callback_method: 'get',
    };

    //const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);
   // const paymentLinkId = paymentLink.id;
   // const payment_link_url = paymentLink.short_url;
    // Return the payment link URL and ID in the response
    const resData = {
      paymentLinkId: '1',
      payment_link_url:paymentLinkRequest.callback_url,
    };

    return resData;
  } catch (error) {
    console.error('Error creating payment link:', error);
    throw new Error(error.message);
  }
}

const updatePaymentInformation = async (reqData) => {// After payment is done  we need to
  const paymentId = reqData.payment_id;
  const orderId = reqData.order_id;

  try {
    const order = await orderService.findOrderById(orderId);

    // const payment = await razorpay.payments.fetch(paymentId);
    // if (payment.status === 'captured') {
      // order.paymentDetails.paymentId = paymentId;
      // order.paymentDetails.status = 'COMPLETED';
      // order.orderStatus = 'PLACED';
      // await order.save()
    // }
    order.paymentDetails.paymentId = paymentId;
    order.paymentDetails.status = 'COMPLETED';
    order.orderStatus = 'PLACED';
    await order.save()

    console.log('payment status', order);
    const resData = { message: 'Your order is placed', success: true };
    return resData
  } catch (error) {
    console.error('Error processing payment:', error);
    throw new Error(error.message)
  }
}

module.exports = { createPaymentLink, updatePaymentInformation }
