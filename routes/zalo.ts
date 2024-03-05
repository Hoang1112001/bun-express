const express = require('express');
const router = express.Router();

router.post("/get-location",function( req: any , res: any, next : any) {
    console.log(req.body)
    const request = require("request");
    const endpoint = "https://graph.zalo.me/v2.0/me/info";
    const userAccessToken = "your_user_access_token";
    const token = "your_token";
    const secretKey = "9zFO1Fc7L5Z7XVNxxrMM";
    
    const options = {
      url: endpoint,
      headers: {
        access_token: userAccessToken,
        code: token,
        secret_key: secretKey,
      },
    };
    
    request(options, (error: any, response: any, body: any) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Response Code:", response.statusCode);
        console.log("Response Body:", body);
      }
    });
    
})
module.exports = router