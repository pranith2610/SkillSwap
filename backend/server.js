// ==========================
// IMPORTS
// ==========================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ==========================
// APP SETUP
// ==========================
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ==========================
// MONGODB CONNECTION
// ==========================
mongoose
  .connect(
    "mongodb+srv://<pranith_26>:<suba2610>@cluster007.dbjkvjf.mongodb.net/skillswap?retryWrites=true&w=majority"
  )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// ==========================
// SCHEMAS & MODELS
// ==========================

// USER SCHEMA
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  points: { type: Number, default: 100 },
  unlockedCourses: [String]
});

const User = mongoose.model("User", userSchema);

// SKILL POST SCHEMA
const skillSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  shareType: String,
  createdAt: { type: Date, default: Date.now }
});

const Skill = mongoose.model("Skill", skillSchema);

// ==========================
// ROUTES
// ==========================

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("SkillSwap backend running 🚀");
});

// ==========================
// CREATE / GET USER
// ==========================
app.post("/api/user", async (req, res) => {
  const { username } = req.body;

  let user = await User.findOne({ username });
  if (!user) {
    user = new User({ username });
    await user.save();
  }

  res.json(user);
});

// ==========================
// POST A SKILL
// ==========================
app.post("/api/post-skill", async (req, res) => {
  const { title, description, category, shareType } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newSkill = new Skill({
    title,
    description,
    category,
    shareType
  });

  await newSkill.save();

  res.json({
    message: "Skill posted successfully",
    skill: newSkill
  });
});

// ==========================
// GET ALL SKILLS
// ==========================
app.get("/api/skills", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

// ==========================
// BUY COURSE (20 POINTS)
// ==========================
app.post("/api/buy-course", async (req, res) => {
  const { username, course } = req.body;
  const COST = 20;

  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ msg: "User not found" });

  if (user.points < COST) {
    return res.status(400).json({ msg: "Not enough points" });
  }

  if (!user.unlockedCourses.includes(course)) {
    user.points -= COST;
    user.unlockedCourses.push(course);
    await user.save();
  }

  res.json(user);
});

// ==========================
// START SERVER
// ==========================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
