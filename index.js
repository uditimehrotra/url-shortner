const express = require("express");
const urlRoute = require("./routes/url");
const app = express();
const URL = require("./models/url");
const {connectToMongoDB} = require('./connect');
const PORT =8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log('connected db'));
app.use(express.json());
app.use("/url",urlRoute);
app.get('/:shortId',async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push:
        {
            visitHistory: {
                timeStamps: Date.now()
            },
        }
    });
    res.redirect(entry.redirectedURL);
})
app.listen(PORT,()=> console.log(`server started`));