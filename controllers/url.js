const URL = require('../models/url');
const { ShortIdx } = require('npm-shortidx');
async function handleGenerateNewShortURL(req,res){
    try {
        const body = req.body;
        if (!body.url) return res.status(400).send({ message: 'url is required' });

        const shortID = ShortIdx();

        await URL.create({
            shortId: shortID,
            redirectedURL: body.url,  // Fix the typo here
            visitHistory: [],
        });

        return res.json({ id: shortID });
    } catch (error) {
        console.error('Error generating short URL', error);
        return res.status(500).send({ message: 'Internal server error' });
    }
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports ={
    handleGenerateNewShortURL,
    handleGetAnalytics,
}