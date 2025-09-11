import { MessageRight } from "./components/Message-right";
import { MessageLeft } from "./components/Message-left";
import { ChatInput } from "./components/ChatInput";

function App() {
  const handleSendMessage = (text) => {
    //Hier muss die Senden Logik hin
    console.log("Gesendete Nachricht:", text);
  };

  return (
    <>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <div id="contact-div" className="h-full w-1/4 overflow-y-auto bg-green-500"></div>
        {/* Main chat area */}
        <div id="chat-div" className="flex h-full w-3/4 flex-col bg-green-300">
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

export default App;
