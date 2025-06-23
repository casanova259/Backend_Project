const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>{console.log(err)})
    }
}


// const asyncHandler=(fn)=> async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 404 ).json({
//             success:false,
//             message:error.message
//         })
//     }
// }

export {asyncHandler}