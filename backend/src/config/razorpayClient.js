const Razorpay = require('razorpay');
/**
 * npm i razorpay
 */

apiKey=""
apiSecret=""

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


module.exports=razorpay;
