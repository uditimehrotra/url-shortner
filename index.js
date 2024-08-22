const express = require("express");
const URL = require('./models/url');
const path = require('path');
const urlRoute = require("./routes/url");
const app = express();
const {connectToMongoDB} = require('./connect');
const PORT =8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log('connected db'));

app.set("view engine","ejs");
app.set('views',path.resolve("./views"));

app.use(express.json());
app.get("/test", async(req,res)=>{
    const allUrls = await URL.find({});
    return res.render('home',{
        urls: allUrls,
    });
});

app.use("/url",urlRoute);

app.listen(PORT,()=> console.log(`server started`));