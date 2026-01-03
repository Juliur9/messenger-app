import { MessageRight } from "./Message-right";
import { MessageLeft } from "./Message-left";
import { ChatInput } from "./ChatInput";
import { ArrowLeftToLine, ArrowRightToLine, CircleUserRound } from "lucide-react";
import { useState } from "react";

function Messenger() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSendMessage = (text) => {
    //Hier muss die Senden Logik hin
    console.log("Gesendete Nachricht:", text);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    console.log("Sidebar ist jetzt:", isSidebarOpen ? "geschlossen" : "geöffnet");
  };

  const loadProfile = () => {
    window.location = "/profile";
  };

  return (
    <>
      <div className={`grid h-screen transition-all duration-300 ${isSidebarOpen ? "grid-cols-[16rem_1fr]" : "grid-cols-[4rem_1fr]"} `}>
        {/* Sidebar */}
        <div className="bg-navy-700 h-full overflow-hidden">
          <div className="flex h-full p-1 transition-all duration-300">
            {/* Linke Icon-Spalte */}
            <div className={`flex h-full flex-col justify-between p-3 transition-all duration-300 ${isSidebarOpen ? "w-16 items-start" : "w-full items-center"} `}>
              {/* Toggle */}
              <button onClick={toggleSidebar} className="rounded-full bg-white p-2">
                {isSidebarOpen ? <ArrowLeftToLine /> : <ArrowRightToLine />}
              </button>

              {/* Profil */}
              <div className="flex flex-col items-center gap-1">
                <button onClick={loadProfile}>
                  <CircleUserRound color="white" size={42} />
                </button>
              </div>
            </div>

            {isSidebarOpen && <div className="bg-navy-900 flex-1 overflow-y-auto rounded-lg p-10">{/* Kontakte*/}</div>}
          </div>
        </div>
        {/* Main chat area */}
        <div id="chat-div" className="bg-navy-500 flex h-full flex-col">
          {/* Header */}
          <div id="chat-header" className="bg-navy-900 flex h-16 items-center justify-start shadow-md">
            <p className="p-3 text-white">Name</p>
            <img src="https://avatars.githubusercontent.com/u/141222358?v=4" className="h-12 w-12 rounded-full" alt="avatar" />
          </div>
          {/* Messages */}
          <div id="messenges-div" className="flex flex-1 flex-col gap-2 overflow-y-auto p-3">
            <MessageRight message="Was geht" />
            <MessageRight message="Was geht, Tim" />
            <MessageLeft message="Hallo, das ist eine Nachricht von links!" />
            <MessageLeft message="Hallo, das ist eine Nachricht von links!" />
            <MessageLeft message="Hallo, das ist eine Nachricht von links!" />
            <MessageLeft message="Hallo, das ist eine Nachricht von links!" />
            <MessageLeft message="Hallo, das ist eine Nachricht von links!" />
            <MessageLeft message="Hallo, das ist eine Nachricht von links yeah! Ich hoffe sie gefällt dir :) &#x1F609;" />
            <MessageLeft message="Hallo, das ist eine Nachricht von links!" />
            <MessageLeft message="Hallo, das ist eine Nachricht von links!" />
          </div>
          {/* Input field and send button  */}
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </>
  );
}

export default Messenger;
