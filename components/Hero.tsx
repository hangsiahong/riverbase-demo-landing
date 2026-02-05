import React from 'react';
import { PlayCircle, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-river-50 to-transparent -z-10 opacity-60 pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-river-200 rounded-full blur-[128px] -z-10 opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-river-100 border border-river-200 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-river-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-river-600"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-river-900">
                Zero Coding Required
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-sand-900 font-medium mb-6">
              Your business, <br/>
              <span className="italic text-river-800">flowing effortlessly.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-sand-600 leading-relaxed mb-8 max-w-lg">
              The all-in-one operating system for modern merchants. Build your store, manage logistics, and sell on Telegram—all from one beautiful dashboard.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-river-900 text-white rounded-xl font-medium text-lg hover:bg-river-800 transition-all hover:shadow-xl hover:shadow-river-900/10 active:scale-95 flex items-center justify-center gap-2 group">
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-sand-200 text-sand-700 rounded-xl font-medium text-lg hover:bg-sand-50 hover:border-sand-300 transition-all flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5 text-river-700" />
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-sand-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/${i + 50}/32/32`}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-sand-100"
                  />
                ))}
              </div>
              <p>Trusted by 2,000+ local founders</p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="flex-1 relative w-full aspect-[4/3] lg:aspect-square max-w-lg lg:max-w-none">
            <div className="relative w-full h-full animate-float">
              {/* Abstract Card Stack */}
              <div className="absolute inset-0 bg-sand-200 rounded-3xl transform rotate-6 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-sand-100 rounded-3xl transform rotate-3 translate-x-2 translate-y-2" />
              
              {/* Main Interface Mockup */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-sand-200 flex flex-col">
                {/* Mock Header */}
                <div className="h-14 border-b border-sand-100 flex items-center px-6 justify-between bg-sand-50/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="h-2 w-24 bg-sand-200 rounded-full" />
                </div>
                
                {/* Mock Body */}
                <div className="p-8 flex-1 bg-sand-50/30">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <div className="h-2 w-12 bg-sand-300 rounded mb-2" />
                      <div className="h-8 w-32 bg-river-900 rounded-lg" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-river-100 text-river-700 flex items-center justify-center font-bold">
                      +
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-sand-100">
                      <div className="h-2 w-16 bg-sand-200 rounded mb-4" />
                      <div className="flex items-end gap-2">
                        <div className="h-16 w-8 bg-river-200 rounded-t-sm" />
                        <div className="h-24 w-8 bg-river-400 rounded-t-sm" />
                        <div className="h-10 w-8 bg-river-100 rounded-t-sm" />
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-sand-100 flex flex-col justify-between">
                       <div className="h-2 w-16 bg-sand-200 rounded" />
                       <div className="space-y-2">
                         <div className="h-2 w-full bg-sand-100 rounded" />
                         <div className="h-2 w-2/3 bg-sand-100 rounded" />
                       </div>
                    </div>
                  </div>

                  {/* Telegram Integration Pill */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur border border-river-100 p-4 rounded-xl shadow-lg flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#24A1DE] flex items-center justify-center text-white">
                       <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.48-1.02-2.23-1.54-1.08-.74-.38-1.15.24-1.8.14-.15 2.57-2.35 2.62-2.54.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.11.02-1.78 1.14-5.02 3.33-.48.33-.91.49-1.3.48-.43-.01-1.25-.24-1.87-.44-.75-.24-1.35-.37-1.3-.78.03-.22.32-.44.88-.66 3.45-1.5 5.75-2.48 6.9-2.96 3.28-1.36 3.96-1.6 4.41-1.6.1 0 .32.02.47.14.12.1.15.23.17.33 0 .07.01.26.01.4z"/></svg>
                     </div>
                     <div>
                       <p className="text-xs font-semibold text-sand-800">New Order via Telegram</p>
                       <p className="text-xs text-sand-500">Just now • $45.00</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};