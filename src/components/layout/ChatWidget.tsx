'use client';

import { useState, useEffect, useRef } from 'react';
import { Message } from '@/types';
import { MessageSquare, X, RotateCcw, Send } from 'lucide-react';

const INITIAL_MESSAGES: Message[] = [
  { role: 'assistant', content: 'Hi! I\'m Faris\'s AI assistant. You can ask me about his journey from production automation to AI, his full-stack products, or his technical expertise. What would you like to know?' }
];

async function query(data: { question: string; chatId?: string }) {
  const response = await fetch(
    "/api/chat", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || errorData.error || `HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState('');
  const [chatId, setChatId] = useState(() => `chat-${Math.random().toString(36).substring(7)}`);
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

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsTyping(true);
    setInput('');

    try {
      const response = await query({ question: text, chatId });
      
      let assistantContent = "";
      
      if (response && response.text) {
        assistantContent = response.text;
      } else if (response && response.json) {
        assistantContent = typeof response.json === 'string' ? response.json : JSON.stringify(response.json);
      } else if (response && response.message) {
        assistantContent = response.message;
      } else if (typeof response === 'string') {
        assistantContent = response;
      } else if (response && response.error) {
        assistantContent = `Error: ${response.error}`;
      } else {
        assistantContent = "Sorry, I couldn't process your request. Please try again.";
      }

      const assistantMessage: Message = { 
        role: 'assistant', 
        content: assistantContent
      };
      setMessages([...newMessages, assistantMessage]);
    } catch (error: any) {
      console.error("Chat error:", error);
      setMessages([...newMessages, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES);
    setChatId(`chat-${Math.random().toString(36).substring(7)}`);
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
          <button 
            className="chat-clear" 
            onClick={handleClearChat}
            title="Clear Chat"
          >
            <RotateCcw size={14} />
            <span>Clear</span>
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
          <form onSubmit={handleSubmit} className="chat-input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isTyping}
            />
            <button type="submit" disabled={isTyping || !input.trim()}>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


