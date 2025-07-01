import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app= express();

//using middlewares  
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credentials: true 
}));


// form se data le liya , limit 16kb
app.use(express.json({limit:"16kb"}));
// jab hum url se data bhejte hain to usko parse karne ke liye
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// koi file upload karte hain to public folder me store karne ke liye
app.use(express.static("public"))

app.use(cookieParser())
export { app }

