'use client';

import { useState, useEffect, useRef } from 'react';
import { Message } from '@/types';

const INITIAL_MESSAGES: Message[] = [
  { role: 'assistant', content: 'Hi! I\'m Faris\'s AI assistant. You can ask me about his journey from animation to AI, his full-stack products, or his technical expertise. What would you like to know?' }
];

const SUGGESTIONS = [
  "How did you save that animation company?",
  "What is your technical stack?",
  "What full-stack products have you built?",
  "Are you available for new projects?"
];

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSuggestionClick = (suggestion: string) => {
    if (isTyping) return;

    const newMessages = [...messages, { role: 'user', content: suggestion } as Message];
    setMessages(newMessages);
    setIsTyping(true);

    setTimeout(() => {
      let response = "";
      if (suggestion.includes("animation")) {
        response = "During my internship, I developed an AI solution to automate modesty coverage in 2D animation frames. This saved the company from expensive re-renders and manual frame editing. It was a turning point that led to me becoming their AI Lead.";
      } else if (suggestion.includes("stack")) {
        response = "I work with a robust set of tools: Next.js, FastAPI, and Python for development. For databases, I use Neon, MongoDB, and Supabase. I deploy and manage systems using Google Cloud Platform (GCP), Hostinger VPS, and Docker.";
      } else if (suggestion.includes("products")) {
        response = "I've built end-to-end products including an Autonomous Enterprise Agent for corporate automation and various full-stack AI integrations using Next.js, PostgreSQL, and LLMs.";
      } else {
        response = "I'm always open to discussing high-impact AI integrations. You can reach out via the contact section below or email me directly!";
      }

      setMessages([...newMessages, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="chat-ai" className="chat-section">
      <div className="chat-container">
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-status">
              <span className="status-dot"></span>
              Faris AI Assistant
            </div>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-bubble ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            ))}
            {isTyping && (
              <div className="message-bubble assistant">
                <div className="message-content typing">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-footer">
            <p className="chat-hint">Click a prompt to ask me anything:</p>
            <div className="suggestions-grid">
              {SUGGESTIONS.map((s, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSuggestionClick(s)}
                  className="suggestion-btn"
                  disabled={isTyping}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
