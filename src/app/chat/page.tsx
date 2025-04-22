'use client';

import { useState } from 'react';
import Sidebar from './sidebar';
import MessageInput from './MessageInput';
import { v4 as uuidv4 } from 'uuid';

export default function ChatPage() {
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const id = uuidv4();
    setMessages((prev) => ({ ...prev, [id]: input }));
    setInput('');
  };

  return (
<main className="flex h-screen text-white overflow-hidden bg-black relative">

      {/* Blurry background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-30 blur-[160px] rounded-full top-[20%] left-[15%] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-25 blur-[140px] rounded-full bottom-[10%] right-[10%] animate-ping" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full top-[60%] left-[55%] animate-pulse" />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Chat section with full glass effect */}
      <section className="flex flex-col flex-1 relative bg-white/5 backdrop-blur-xl border-l border-white/10">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {Object.entries(messages).map(([id, msg]) => (
            <div
              key={id}
              className="max-w-2xl bg-purple-800/40 p-4 rounded-xl self-end shadow-md"
            >
              {msg}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <MessageInput input={input} setInput={setInput} onSend={handleSend} />
      </section>
    </main>
  );
}
