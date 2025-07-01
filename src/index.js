// require('dotenv').config({path: './env'})
import dotenv from 'dotenv' 
dotenv.config()
import connectDB from './db/index.js'


connectDB()
.then( ()=>{
    app.on("error", (error) =>{
        console.log("error:",error);
        throw error;
    })
    app.listen(process.env.PORT || 8000  , ()=>{
        console.log(`App is listening on port ${process.env.PORT || 8000}`);
    })
} )
.catch( (err)=>{
    console.error("Error connecting to the database:", err);
} )



/*

this is the first approach for connecting db using ife and try catch block 




( async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
            console.log("error:",error);
            throw error
       })

       app.listen(process.env.PORT, ()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("Error:",error)
        throw error;
    }
})()
    */