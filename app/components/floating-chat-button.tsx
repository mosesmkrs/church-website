"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import AIChatModal from "./ai-chat-modal";

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-30 flex items-center gap-2 rounded-full bg-linear-to-r from-[#0d2137] to-[#1a3a5c] px-4 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:bottom-6 sm:right-6 sm:px-5 sm:py-4"
          style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
          title="Chat with our AI assistant"
          aria-label="Open church assistant chat"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
          <span className="hidden text-sm font-medium sm:inline">Let&apos;s Chat</span>
        </button>
      )}
      <AIChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
