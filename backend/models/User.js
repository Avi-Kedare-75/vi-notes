import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  keystrokes: { type: Number, default: 0 },
  pauses: { type: Number, default: 0 },
  pastes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sessions: [sessionSchema],
});

export default mongoose.model("User", userSchema);
