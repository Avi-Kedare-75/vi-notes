# 📝 Vi-Notes Editor

**Vi-Notes Editor** is a minimal, distraction-free writing environment designed as the foundation for the Vi-Notes authenticity verification system. It provides a clean interface for users to write while capturing behavioral signals such as typing patterns, pauses, and paste actions

---

## 🚀 Features

* ✍️ **Distraction-Free Writing**

  * Fullscreen editor with clean UI
  * No formatting clutter.

* ⌨️ **Behavior Tracking**

  * Keystroke count tracking
  * Pause detection (based on typing intervals)
  * Paste event detection

* 🌙 **Dark / Light Mode**

  * Toggle between themes
  * Consistent UI across modes

* 📊 **Live Statistics**

  * Words and character count
  * Real-time behavioral metrics

* 🖥️ **Fullscreen Mode**

  * Expand editor to full screen for focused writing

---

## 🛠️ Tech Stack

* **Frontend:** React + TypeScript
* **Styling:** Inline CSS (minimal & custom)
* **Icons:** Font Awesome

---

## 📂 Project Structure (Simplified)

```
src/
├── TextEditor.tsx   # Main editor component
├── App.tsx          # Root component
├── main.tsx         # Entry point
├── index.css        # Global styles (important for layout fix)
```

---

## ⚙️ Installation & Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run the project

```bash
npm run dev
```

---

## ⚠️ Important Notes

* Ensure **Font Awesome** is installed:

```bash
npm install @fortawesome/fontawesome-free
```

* Import it in `main.tsx`:

```ts
import "@fortawesome/fontawesome-free/css/all.min.css";
```

* The **global CSS (`index.css`) is required** to remove browser white borders and ensure full-screen rendering.

---

## 🎯 Purpose in Vi-Notes System

This editor is not just for writing — it acts as the **data capture layer** for:

* Typing behavior
* Writing patterns
* Interaction signals

These will later be used for:

* AI vs Human authorship detection
* Behavioral analysis
* Authenticity scoring

---

## 🔮 Future Enhancements

* Behavioral ML model integration
* Real-time authenticity scoring
* Writing session replay
* Cursor movement tracking
* Backend (MERN) integration

---



## 🤝 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests.

---
