const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const staticRoute = require('./routes/staticRouter');
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const app = express();
const {connectToMongoDB} = require('./connect');
const PORT =8003;
const {restrictToLoggedInUserOnly,checkAuth} = require("./middlewares/auth");
connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log('connected db'));

app.set("view engine","ejs");
app.set('views',path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use("/",checkAuth,staticRoute);

app.use("/user",userRoute);
// app.get("/test", async(req,res)=>{
//     const allUrls = await URL.find({});
//     return res.render('home',{
//         urls: allUrls,
//     });
// });

app.use("/url",restrictToLoggedInUserOnly,urlRoute);

app.listen(PORT,()=> console.log(`server started`));