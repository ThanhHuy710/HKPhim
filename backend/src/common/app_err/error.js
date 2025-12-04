import { responseError } from "../helper/function.helper.js";
// import jwt from "jsonwebtoken";
// import { statusCodes } from "../helper/status-code.helper.js";

export const error =(err,req, res, next) => {
        console.log("lỗi đặc biệt ",err);

    //    if(err instanceof jwt.JsonWebTokenError){
    //         err.code=statusCodes.UNAUTHORIZED//401=>Mã để FE logout người dùng
    //     }


    //     if(err instanceof jwt.TokenExpiredError){
    //         // console.log("TokenExpiredError")
    //         err.code= statusCodes.FORBIDDEN;//403 =>Mã để FE refresh token

    //     }

        

        



        const response = responseError(err.message,err.code, err.stack);
        res.status(response.statusCode).json(response);
      
    }