const Url = require("../models/Url");
const { nanoid } = require("nanoid");

const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

   
    if (!originalUrl) {
      return res.status(400).json({
        success: false,
        message: "Original URL is required",
      });
    }

     try {
      new URL(originalUrl);
    } catch {
      return res.status(400).json({
        success: false,
        message: "Invalid URL",
      });
    }

    
    const existingUrl = await Url.findOne({ originalUrl });

    if (existingUrl) {
      return res.status(200).json({
        success: true,
        shortUrl: `http://localhost:5000/${existingUrl.shortCode}`,
      });
    }

   
    const shortCode = nanoid(6);

    
    const newUrl = await Url.create({
      originalUrl,
      shortCode,
    });

    res.status(201).json({
      success: true,
      shortUrl: `http://localhost:5000/${newUrl.shortCode}`,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};





const redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    
    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "Short URL not found",
      });
    }

    
    url.clicks += 1;
    url.lastVisited = new Date();

    await url.save();

    
    res.redirect(url.originalUrl);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  shortenUrl,
  redirectUrl,
};