import React from 'react';
import { Send, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';

export const TelegramSection: React.FC = () => {
  return (
    <section id="telegram" className="py-24 bg-[#F5F8FA] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-[100px] -translate-y-1/2 opacity-30" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="flex-1 order-2 md:order-1 relative">
             {/* Phone Frame */}
             <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                  
                  {/* Telegram UI Header */}
                  <div className="bg-[#517DA2] p-4 pt-8 text-white flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">RB</div>
                     <div>
                       <h4 className="font-semibold text-sm">Riverbase Store Bot</h4>
                       <p className="text-[10px] opacity-80">bot</p>
                     </div>
                  </div>

                  {/* Chat Content */}
                  <div className="p-4 space-y-4 bg-[#E4EBEF] h-full">
                     <div className="flex justify-start">
                        <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm text-sm">
                           <p>Welcome to Neon Coffee! ☕️</p>
                           <p className="mt-1">Tap below to view our menu.</p>
                        </div>
                     </div>
                     
                     <div className="flex justify-center my-4">
                       <button className="bg-[#517DA2] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#4a7295] transition-colors shadow-sm w-full">
                         Open Store 🛍️
                       </button>
                     </div>

                     <div className="flex justify-end">
                        <div className="bg-[#EEFFDE] rounded-lg rounded-tr-none p-3 max-w-[80%] shadow-sm text-sm">
                           <p>I'd like to order 2 Iced Lattes.</p>
                           <span className="text-[10px] text-green-800 block text-right mt-1">10:42 AM ✓✓</span>
                        </div>
                     </div>

                     {/* Mini App Overlay Mock */}
                     <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-4 h-1/2 animate-slide-up">
                        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
                        <h5 className="font-bold text-lg mb-4">Menu</h5>
                        <div className="space-y-3">
                          {[1,2,3].map(i => (
                            <div key={i} className="flex gap-3 items-center pb-3 border-b border-gray-100 last:border-0">
                               <div className="w-12 h-12 bg-gray-100 rounded-lg" />
                               <div className="flex-1">
                                 <div className="h-3 w-20 bg-gray-200 rounded mb-1" />
                                 <div className="h-2 w-12 bg-gray-100 rounded" />
                               </div>
                               <div className="px-3 py-1 bg-river-100 text-river-800 rounded-full text-xs font-bold">Add</div>
                            </div>
                          ))}
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 mb-6">
               <MessageCircle className="w-4 h-4" />
               <span className="text-xs font-bold uppercase tracking-wider">Social Commerce</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-sand-900 mb-6">
              Sell where the <br/> conversation happens.
            </h2>
            <p className="text-lg text-sand-600 mb-8 leading-relaxed">
              Don't force your customers to leave their favorite app. With Riverbase's Telegram Mini-App integration, turn chats into checkouts instantly.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Direct product catalog inside Telegram",
                "Instant order notifications",
                "Seamless KHQR payment flow",
                "Automated customer support replies"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="text-sand-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
               Explore Integrations <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};