import express from "express";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Save session
router.post("/", auth, async (req, res) => {
  try {
    const { title, text, keystrokes, pauses, pastes } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const newSession = { title, text, keystrokes, pauses, pastes };
    user.sessions.push(newSession);
    await user.save();

    res.status(201).json(user.sessions[user.sessions.length - 1]);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get sessions
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.sessions);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update session
router.put("/:id", auth, async (req, res) => {
  try {
    const { title, text, keystrokes, pauses, pastes, confidence, result, generatedAt } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const session = user.sessions.id(req.params.id);
    if (!session) return res.status(404).json({ message: "Session not found" });

    if (title !== undefined) session.title = title;
    if (text !== undefined) session.text = text;
    if (keystrokes !== undefined) session.keystrokes = keystrokes;
    if (pauses !== undefined) session.pauses = pauses;
    if (pastes !== undefined) session.pastes = pastes;
    // confidence, result, generatedAt aren't technically in the schema perhaps? Let's check the User model.
    // wait, the post route saves them? No, the post route in session.js only extracts { title, text, keystrokes, pauses, pastes }.
    // but the frontend sends `confidence`, `result`, `generatedAt`. 
    // Let me check if they are in the schema.
    if (confidence !== undefined) session.confidence = confidence;
    if (result !== undefined) session.result = result;
    if (generatedAt !== undefined) session.generatedAt = generatedAt;

    await user.save();
    res.json(session);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
