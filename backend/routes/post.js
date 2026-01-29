const express = require("express");
const router = express.Router();

// temporary storage (no database yet)
let posts = [];

router.post("/post-skill", (req, res) => {
    const { title, description } = req.body;

    console.log("New post received:", title, description);

    posts.push({ title, description });

    res.json({
        message: "Skill posted successfully",
        posts
    });
});

module.exports = router;
