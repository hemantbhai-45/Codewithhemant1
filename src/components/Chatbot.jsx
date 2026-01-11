import React, { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 Main CodeWithHemant AI hoon. Poocho kuch bhi 😊",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setMessages([
          ...updatedMessages,
          { sender: "bot", text: data.error || "❌ Server issue aahe" },
        ]);
      } else {
        setMessages([
          ...updatedMessages,
          { sender: "bot", text: data.message },
        ]);
      }
    } catch (err) {
      setMessages([
        ...updatedMessages,
        { sender: "bot", text: "❌ Server issue aahe, thoda velane try kara." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white px-4 py-3 rounded-full shadow-lg z-50 hover:bg-purple-700"
      >
        🤖 Chat
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-purple-600 text-white p-3 rounded-t-xl font-semibold">
            CodeWithHemant AI
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 text-sm space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.sender === "bot" ? "text-left" : "text-right"}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg max-w-[85%] ${
                    m.sender === "bot"
                      ? "bg-gray-200 text-black"
                      : "bg-purple-600 text-white"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 p-2 text-sm outline-none text-black bg-white"
              placeholder="Type your doubt..."
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-purple-600 text-white px-4 hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
