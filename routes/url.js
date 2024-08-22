const express = require("express");
const {handleGetRedirectedURL,handleGenerateNewShortURL, handleGetAnalytics} = require('../controllers/url');
const router = express.Router();

router.post("/",handleGenerateNewShortURL);
router.get('/:shortId',handleGetRedirectedURL);
router.get('/analytics/:shortId', handleGetAnalytics);
module.exports= router;