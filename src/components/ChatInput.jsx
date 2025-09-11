export function ChatInput() {
  return (
    <div id="input-div" className="flex w-full gap-2 p-3">
      <input type="text" id="messange" className="w-11/12 rounded-lg p-3" placeholder="Nachricht eingeben ..." />
      <button className="w-1/12 rounded-lg bg-slate-500 p-3 text-white">Senden</button>
    </div>
  );
}
