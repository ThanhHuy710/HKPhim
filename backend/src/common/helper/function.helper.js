export const responseSuccess = (data, message = "ok", statusCode = 200) => {
  return {
    status: "success",
    statusCode: statusCode,
    message: message,
    data: data,
  };
};

export const responseError = (message="Internal Sever Error", statusCode=500,stack) => {
    return {
        status: "error",
        statusCode: statusCode,
        message: message,
        stack :stack 
    }
}