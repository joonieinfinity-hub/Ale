/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { Wine, X, Send, Sparkles } from 'lucide-react';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Namaskar. I am the Ale House Counter Guide. How may I assist you with our liquor catalogue, whisky recommendations, wholesale inquiries, or store details in Nagaon?',
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      // Handled in service
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-[#0C1813] text-[#D5CCC1] rounded-none shadow-2xl w-[90vw] sm:w-[380px] h-[520px] mb-4 flex flex-col overflow-hidden border border-[#C5A059]/40 animate-slide-up">
          {/* Header */}
          <div className="bg-[#08100C] p-4 border-b border-[#1B3228] flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-none border border-[#C5A059]/40 bg-[#0C1813] flex items-center justify-center text-[#C5A059]">
                <Wine className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif font-bold text-[#F5EFEB] text-sm block">
                  Ale House Counter Guide
                </span>
                <span className="text-[10px] text-[#C5A059] tracking-wider uppercase block font-medium">
                  Nagaon Spirits Assistant
                </span>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)} 
              className="p-1 text-[#BCB3A7] hover:text-[#F5EFEB] transition-colors cursor-pointer"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#08100C]" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3.5 rounded-none text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#C5A059] text-[#08100C] font-semibold border border-[#C5A059]' 
                      : 'bg-[#0C1813] border border-[#1B3228] text-[#D5CCC1]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-[#0C1813] border border-[#1B3228] p-3 rounded-none flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce delay-75" />
                  <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#08100C] border-t border-[#1B3228]">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about whiskies, rums, wines, or store hours..." 
                className="flex-1 bg-[#0C1813] border border-[#1B3228] focus:border-[#C5A059] rounded-none px-3 py-2 text-xs text-[#F5EFEB] outline-none placeholder-[#BCB3A7]"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] px-3 py-2 rounded-none font-bold transition-colors disabled:opacity-40 cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-[9px] text-[#BCB3A7] text-center mt-2 font-light">
              Informational guide only · Final stock & prices verified at Diphalu counter
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0C1813] hover:bg-[#102019] text-[#F5EFEB] hover:text-[#C5A059] border border-[#C5A059]/60 hover:border-[#C5A059] w-12 h-12 flex items-center justify-center rounded-none shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
        title="Ask Ale House Counter Guide"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#F5EFEB]" />
        ) : (
          <Sparkles className="w-5 h-5 text-[#C5A059]" />
        )}
      </button>
    </div>
  );
};

export default Assistant;

