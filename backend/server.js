const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Temporary storage (like a notebook)
let skillPosts = [];

/* TEST */
app.get("/", (req, res) => {
    res.send("SkillSwap backend running 🚀");
});

/* POST SKILL */
app.post("/api/post-skill", (req, res) => {
    const { title, description, category, shareType } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: "Missing fields" });
    }

    const newPost = {
        id: skillPosts.length + 1,
        title,
        description,
        category,
        shareType,
        createdAt: new Date()
    };

    skillPosts.push(newPost);

    console.log("📌 New Skill Posted:", newPost);

    res.json({
        message: "Skill posted successfully",
        post: newPost
    });
});

/* GET ALL SKILLS (for later) */
app.get("/api/skills", (req, res) => {
    res.json(skillPosts);
});

/* START SERVER */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let skills = [];

app.post("/api/post-skill", (req, res) => {
  const { title, description, category, shareType } = req.body;

  const newSkill = {
    id: skills.length + 1,
    title,
    description,
    category,
    shareType
  };

  skills.push(newSkill);
  console.log("New Skill:", newSkill);

  res.json({ message: "Skill saved" });
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});

