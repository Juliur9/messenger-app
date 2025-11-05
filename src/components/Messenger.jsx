import { MessageRight } from "./Message-right";
import { MessageLeft } from "./Message-left";
import { ChatInput } from "./ChatInput";
import { ArrowLeftToLine, ArrowRightToLine, CircleUserRound } from "lucide-react";
import { useState } from "react";
import { useAuthCheck } from "./hooks/authCheck";

function Messenger() {
  useAuthCheck();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSendMessage = (text) => {
    //Hier muss die Senden Logik hin
    console.log("Gesendete Nachricht:", text);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar ist jetzt:", isSidebarOpen ? "geschlossen" : "geöffnet");
  };

  const loadProfile = () => {
    window.location = "/profile";
  };

  return (
    <>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <div id="contact-div" className={`${isSidebarOpen ? "w-1/4" : "w-[4.166%]"} h-full overflow-y-auto`}>
          <div className="flex h-screen w-full justify-center">
            <div className={`${isSidebarOpen ? "w-1/6" : "w-full"} flex flex-col items-center justify-between bg-slate-400 p-3`}>
              {isSidebarOpen && (
                <button onClick={toggleSidebar} className="rounded-full bg-white p-3">
                  <ArrowLeftToLine />
                </button>
              )}
              {!isSidebarOpen && (
                <button onClick={toggleSidebar} className="rounded-full bg-white p-3">
                  <ArrowRightToLine />
                </button>
              )}
              <div className="flex flex-col items-center gap-1">
                <button onClick={loadProfile}>
                  <CircleUserRound size={42} />
                </button>
                <p>Profil</p>
              </div>
            </div>
            {isSidebarOpen && <div className="flex w-5/6 flex-col items-center bg-slate-300"></div>}
          </div>
        </div>
        {/* Main chat area */}
        <div id="chat-div" className={`${isSidebarOpen ? "w-3/4" : "w-[95.8333%]"} flex h-full flex-col bg-green-300`}>
          {/* Header */}
          <div id="chat-header" className="flex h-16 items-center justify-start bg-green-200 shadow-md">
            <p className="p-3">Name</p>
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
