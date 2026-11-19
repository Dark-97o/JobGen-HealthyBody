import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowUpRight } from 'lucide-react';

interface ChatWidgetProps {
  onOpenBooking: () => void;
  onNavigateTab?: (tab: string) => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const DOCTOR_AVATAR = '/images/physiotherapist-avatar.webp';

export const ChatWidget: React.FC<ChatWidgetProps> = ({ onOpenBooking, onNavigateTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "Hello! 👋 Welcome to The Healthy Body Company. I'm here to help with your appointments, clinics, or recovery questions.",
      timestamp: 'Just now',
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    { label: '📅 Book consultation', action: 'book' },
    { label: '📍 Sydney locations', action: 'locations' },
    { label: '🩺 Physio services', action: 'services' },
    { label: '💳 Health fund rebates', action: 'rebates' },
  ];

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Generate responsive assistant answer
    setTimeout(() => {
      const lower = text.toLowerCase();
      let botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Thanks for reaching out! Our team is available across our 4 Sydney clinics to assist with treatment and rehabilitation.',
        timestamp: 'Just now',
      };

      if (lower.includes('book') || lower.includes('appointment') || lower.includes('consult')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'You can book an initial consultation or standard treatment instantly online with zero waiting time.',
          timestamp: 'Just now',
          action: {
            label: 'Book Consultation Online',
            onClick: () => {
              onOpenBooking();
              setIsOpen(false);
            },
          },
        };
      } else if (lower.includes('location') || lower.includes('where') || lower.includes('clinic') || lower.includes('hours') || lower.includes('penrith') || lower.includes('caringbah')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'We operate 4 modern practices across Greater Sydney: Penrith (Flagship), Caringbah (Shire), Jordan Springs, and Mount Annan. Free parking and level access at all locations.',
          timestamp: 'Just now',
          action: onNavigateTab
            ? {
                label: 'View All Clinics & Hours',
                onClick: () => {
                  onNavigateTab('locations');
                  setIsOpen(false);
                },
              }
            : undefined,
        };
      } else if (lower.includes('service') || lower.includes('treatment') || lower.includes('physio') || lower.includes('pilates') || lower.includes('pain')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'We offer Musculoskeletal Physiotherapy, Sports Injury Rehab, Clinical Pilates, Post-Operative Rehabilitation, Orthopaedic Casting, and Dry Needling.',
          timestamp: 'Just now',
          action: onNavigateTab
            ? {
                label: 'Explore Our Services',
                onClick: () => {
                  onNavigateTab('services');
                  setIsOpen(false);
                },
              }
            : undefined,
        };
      } else if (lower.includes('rebate') || lower.includes('hicaps') || lower.includes('cost') || lower.includes('price') || lower.includes('insurance') || lower.includes('bupa')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'We provide instant on-the-spot HICAPS private health rebates (Bupa, Medibank, etc.). No GP referral required for private appointments. We also welcome WorkCover (SIRA), NDIS, and Medicare EPC.',
          timestamp: 'Just now',
        };
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 450);
  };

  const handleQuickPrompt = (actionType: string) => {
    if (actionType === 'book') {
      handleSend('How do I book an appointment?');
    } else if (actionType === 'locations') {
      handleSend('Where are your clinics located in Sydney?');
    } else if (actionType === 'services') {
      handleSend('What services and treatments do you offer?');
    } else if (actionType === 'rebates') {
      handleSend('How do health fund rebates work?');
    }
  };

  return (
    <>
      {/* Floating Circular Trigger Button at Bottom Right with Female Doctor Avatar */}
      <div className="fixed bottom-6 right-6 z-40 sm:bottom-7 sm:right-7">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none ring-3 ring-white border border-black/10 overflow-hidden bg-slate-100"
          aria-label={isOpen ? 'Close chat' : 'Chat with Emily from The Healthy Body Company'}
          title={isOpen ? 'Close chat' : 'Chat with Emily from The Healthy Body Company'}
        >
          {/* Doctor Portrait Image */}
          <img
            src={DOCTOR_AVATAR}
            alt="The Healthy Body Company Physiotherapist"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
          />

          {/* Close icon overlay when open */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center text-white"
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Green Live Online Dot */}
          <span
            className="absolute top-0.5 right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center z-10"
            title="Online"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </span>
        </button>
      </div>

      {/* Floating Chat Box Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 sm:bottom-28 sm:right-7 w-[340px] sm:w-[380px] max-w-[calc(100vw-2.5rem)] rounded-3xl bg-white shadow-2xl border border-black/10 overflow-hidden z-40 flex flex-col"
            style={{ maxHeight: 'calc(100vh - 8.5rem)' }}
          >
            {/* Header */}
            <div className="bg-[#111111] text-white p-4 sm:p-4.5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={DOCTOR_AVATAR}
                  alt="The Healthy Body Physiotherapist"
                  className="w-11 h-11 rounded-full object-cover object-top border-2 border-[#38bdf8] bg-slate-800 shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-sm text-white leading-tight">
                    Clinical Care Team
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online • The Healthy Body Company</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body - Isolated from parent scroll */}
            <div
              data-lenis-prevent
              className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F8F9FB] min-h-[220px] max-h-[300px] sm:max-h-[340px]"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-healis-blue text-white rounded-br-sm shadow-sm'
                        : 'bg-white text-slate-800 rounded-bl-sm border border-black/5 shadow-xs'
                    }`}
                  >
                    <p>{m.text}</p>
                    {m.action && (
                      <button
                        type="button"
                        onClick={m.action.onClick}
                        className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill bg-healis-blue hover:bg-black text-white text-[11px] font-semibold transition-all shadow-xs"
                      >
                        <span>{m.action.label}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {m.timestamp}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Carousel */}
            <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQuickPrompt(q.action)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-healis-blue hover:text-white text-slate-700 text-[11px] font-medium transition-colors shrink-0"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about physio, bookings, clinics..."
                className="flex-1 bg-slate-100/90 text-xs sm:text-sm text-slate-800 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-healis-blue/30 placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-9 h-9 rounded-full bg-healis-blue hover:bg-black disabled:opacity-40 disabled:hover:bg-healis-blue text-white flex items-center justify-center transition-all shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>

            {/* Micro Badge Footer */}
            <div className="py-1 px-3 bg-slate-50 border-t border-slate-100 text-center text-[10px] text-slate-400 font-medium">
              Powered by <span className="text-healis-blue font-semibold">JOBGEN.AI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
