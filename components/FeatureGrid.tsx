import React from 'react';
import { Layout, CreditCard, Truck, Globe, Smartphone, BarChart3 } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-serif text-4xl text-sand-900 mb-6">Built for the full journey.</h2>
          <p className="text-sand-600 text-lg">
            Riverbase replaces your tangled web of subscriptions with one cohesive operating system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Website Builder (Large) */}
          <div className="md:col-span-2 row-span-1 md:row-span-2 rounded-3xl bg-sand-50 border border-sand-100 p-8 relative overflow-hidden group hover:border-river-200 transition-colors">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-river-100 text-river-700 flex items-center justify-center mb-6">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-sand-900 mb-2">No-Code Builder</h3>
              <p className="text-sand-600 max-w-sm">Launch a professional site in hours. Drag, drop, and customize responsive templates designed for conversion.</p>
            </div>
            <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-white rounded-tl-3xl border-t border-l border-sand-100 shadow-sm translate-y-4 translate-x-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500">
               {/* Mini Builder UI Mockup */}
               <div className="p-4 grid gap-3">
                 <div className="h-24 bg-sand-50 rounded-lg border border-dashed border-sand-200 flex items-center justify-center text-sand-400 text-xs">Hero Section</div>
                 <div className="flex gap-3">
                   <div className="h-12 w-1/3 bg-river-50 rounded-lg border border-river-100" />
                   <div className="h-12 w-2/3 bg-sand-50 rounded-lg" />
                 </div>
               </div>
            </div>
          </div>

          {/* Card 2: Payments */}
          <div className="rounded-3xl bg-white border border-sand-200 p-8 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-sand-900 mb-2">KHQR & Multi-Bank</h3>
            <p className="text-sand-600 text-sm">Accept payments locally and globally with zero friction.</p>
          </div>

          {/* Card 3: Logistics */}
          <div className="rounded-3xl bg-white border border-sand-200 p-8 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-sand-900 mb-2">Smart Logistics</h3>
            <p className="text-sand-600 text-sm">Manage your own fleet or connect with 3rd party providers instantly.</p>
          </div>

          {/* Card 4: Dashboard (Wide) */}
          <div className="md:col-span-2 rounded-3xl bg-river-900 text-white p-8 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                   <BarChart3 className="w-6 h-6 text-river-100" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Central Command</h3>
                <p className="text-river-100 max-w-sm">Real-time analytics on sales, inventory, and customer behavior.</p>
              </div>
            </div>
             {/* Abstract Chart Background */}
            <svg className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 L20 80 L40 90 L60 40 L80 60 L100 20 V100 H0 Z" fill="currentColor" />
            </svg>
          </div>

          {/* Card 5: Hosting */}
          <div className="rounded-3xl bg-sand-50 border border-sand-100 p-8 flex flex-col justify-center text-center hover:bg-white hover:border-river-200 transition-colors">
            <div className="w-16 h-16 rounded-full bg-sand-200 mx-auto mb-4 flex items-center justify-center">
               <Globe className="w-8 h-8 text-sand-600" />
            </div>
            <h3 className="text-lg font-semibold text-sand-900">Free Hosting</h3>
            <p className="text-sand-500 text-sm mt-2">SSL & Domain included</p>
          </div>

        </div>
      </div>
    </section>
  );
};