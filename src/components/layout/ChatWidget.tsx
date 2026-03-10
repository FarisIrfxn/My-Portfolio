'use client';

import { useState, useEffect, useRef } from 'react';
import { Message } from '@/types';
import { MessageSquare, X, Minus } from 'lucide-react';

const INITIAL_MESSAGES: Message[] = [
  { role: 'assistant', content: 'Hi! I\'m Faris\'s AI assistant. You can ask me about his journey from animation to AI, his full-stack products, or his technical expertise. What would you like to know?' }
];

const SUGGESTIONS = [
  "How did you save that animation company?",
  "What is your technical stack?",
  "What full-stack products have you built?",
  "Are you available for new projects?"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#chat-ai') {
        setIsOpen(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check initial hash
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

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
    <>
      {/* Floating Toggle Button */}
      <button 
        className={`chat-widget-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Widget Window */}
      <div className={`chat-widget-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-status">
            <span className="status-dot"></span>
            Faris AI Assistant
          </div>
          <button className="chat-minimize" onClick={() => setIsOpen(false)}>
            <Minus size={18} />
          </button>
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
          <p className="chat-hint">Quick Questions:</p>
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
    </>
  );
}
