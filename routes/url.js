const express = require("express");
const {handleGenerateNewShortURLDis,handleGetRedirectedURL,handleGenerateNewShortURL, handleGetAnalytics} = require('../controllers/url');
const router = express.Router();

router.post("/",handleGenerateNewShortURL);
router.post("/url",handleGenerateNewShortURLDis);

router.get('/:shortId',handleGetRedirectedURL);
router.get('/analytics/:shortId', handleGetAnalytics);
module.exports= router;