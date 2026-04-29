import React, { useState, useRef, useEffect } from "react";

const TextEditor: React.FC = () => {
  const [text, setText] = useState("");
  const [keystrokes, setKeystrokes] = useState(0);
  const [pauses, setPauses] = useState(0);
  const [pastes, setPastes] = useState(0);
  const [dark, setDark] = useState(true);

  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.style.cssText =
      "margin:0;padding:0;border:none;outline:none;background:#05070d;height:100%;overflow:hidden;";
    document.body.style.cssText =
      "margin:0;padding:0;border:none;outline:none;background:#05070d;height:100%;overflow:hidden;";
    return () => {
      document.documentElement.style.cssText = "";
      document.body.style.cssText = "";
    };
  }, []);

  useEffect(() => {
    const bg = dark ? "#05070d" : "#ffffff";
    document.documentElement.style.background = bg;
    document.body.style.background = bg;
  }, [dark]);

  const handleKeyDown = () => {
    const now = Date.now();
    setKeystrokes((p) => p + 1);
    if (lastTimeRef.current) {
      const interval = now - lastTimeRef.current;
      if (interval > 1000) setPauses((p) => p + 1);
    }
    lastTimeRef.current = now;
  };

  const handlePaste = () => setPastes((p) => p + 1);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const words = text.split(/\s+/).filter(Boolean).length;

  const bg = dark ? "#05070d" : "#ffffff";
  const border = dark ? "1px solid #111827" : "1px solid #e5e7eb";

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: bg,
        color: dark ? "#e5e7eb" : "#0f172a",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
        border: "none",
        outline: "none",
        overflow: "hidden",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          backgroundColor: bg,
          borderBottom: border,
          flexShrink: 0,
        }}
      >
        <div style={{ fontSize: "22px", fontWeight: 600 }}>
          Vi-Notes{" "}
          <span style={{ opacity: 0.6, fontWeight: 400 }}>Editor</span>
        </div>

        <div style={{ display: "flex", gap: "20px", cursor: "pointer", fontSize: "16px" }}>
          <i
            className={dark ? "fas fa-moon" : "fas fa-sun"}
            onClick={() => setDark(!dark)}
          />
          <i className="fas fa-expand" onClick={toggleFullscreen} />
        </div>
      </div>

      {/* EDITOR */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          padding: "30px",
          fontSize: "18px",
          color: "#facc15",
          resize: "none",
          fontFamily: "monospace",
          lineHeight: 1.6,
        }}
      />

      {/* FOOTER */}
      <div
        style={{
          height: "45px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          fontSize: "14px",
          color: "#9ca3af",
          borderTop: border,
          background: bg,
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <span><i className="fas fa-keyboard" /> {keystrokes}</span>
          <span><i className="fas fa-pause" /> {pauses}</span>
          <span><i className="fas fa-paste" /> {pastes}</span>
        </div>
        <div>Words: {words} | Characters: {text.length}</div>
      </div>
    </div>
  );
};

export default TextEditor;