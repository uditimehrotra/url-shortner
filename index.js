const express = require("express");
const multer  = require('multer');

const path = require('path');
const cookieParser = require('cookie-parser');
const staticRoute = require('./routes/staticRouter');
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const app = express();
const {connectToMongoDB} = require('./connect');
const PORT =8004;
// const upload = multer({ dest: 'uploads/' })
const storage= multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,"./uploads");
    },
    filename: function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({storage});
const {checkForAuthentication,restrictTo} = require("./middlewares/auth");
connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log('connected db'));

app.set("view engine","ejs");
app.set('views',path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthentication);
app.use("/",staticRoute);

app.use("/user",userRoute);
// app.get("/test", async(req,res)=>{
//     const allUrls = await URL.find({});
//     return res.render('home',{
//         urls: allUrls,
//     });
// });

app.post('/upload',upload.single('profileImage'),(req,res)=>{
   // console.log(req.body);
  //console.log(req.file);
    return res.render("home");
})
app.use("/url",restrictTo(["NORMAL","ADMIN"]),urlRoute);
app.use("/discord",urlRoute);
app.listen(PORT,()=> console.log(`server started`));