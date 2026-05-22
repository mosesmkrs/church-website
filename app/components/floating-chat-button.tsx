"use client";

import { useState } from "react";
import AIChatModal from "./ai-chat-modal";

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-linear-to-r from-[#0d2137] to-[#1a3a5c] text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all z-30 flex items-center gap-2"
        title="Chat with our AI assistant"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
      <AIChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
