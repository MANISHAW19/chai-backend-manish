const asyncHandler = (requestHandler) => {
  (err, req, res, next) => {
    Promise.resolve(requestHandler(err, req, res, next)).
    catch((err) =>next(err));
  };
};

export {asyncHandler}

// 1.   const asyncHandler = () => {}
// 2. const asyncHandler = (func) => { () => {}  }
// 3. const asyncHandler = (func) => { async () => {}  }

// const asyncHandler = (fn) => async (err,req,res,next) => {
//     try{
//         await fn(err,req,res,next);
//     }
//     catch ( error ){
//         res.status(err.status || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
