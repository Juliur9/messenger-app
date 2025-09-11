import { useState } from "react";

export function ChatInput({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    const trimmed = input.trim();
    setInput("");
    if (trimmed === "") return;
    onSendMessage(trimmed);
  };

  return (
    <div id="input-div" className="flex w-full gap-2 p-3">
      <input type="text" id="messange" value={input} onChange={(e) => setInput(e.target.value)} className="w-11/12 rounded-lg p-3" placeholder="Nachricht eingeben ..." />
      <button onClick={handleClick} className="w-1/12 rounded-lg bg-slate-500 p-3 text-white">
        Senden
      </button>
    </div>
  );
}
