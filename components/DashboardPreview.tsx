import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 2400 },
  { name: 'Tue', sales: 1398 },
  { name: 'Wed', sales: 9800 },
  { name: 'Thu', sales: 3908 },
  { name: 'Fri', sales: 4800 },
  { name: 'Sat', sales: 3800 },
  { name: 'Sun', sales: 4300 },
];

export const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 bg-sand-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
             <h2 className="font-serif text-4xl md:text-5xl mb-6">Clarity, not chaos.</h2>
             <p className="text-sand-300 text-lg max-w-md">
               Track orders, manage inventory, and watch your revenue grow in real-time. A professional command center in your pocket.
             </p>
          </div>
          <div className="flex-1 flex justify-end gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-river-300 mb-1">12.5k</div>
              <div className="text-sm text-sand-400">Monthly Visitors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-river-300 mb-1">$48k</div>
              <div className="text-sm text-sand-400">Gross Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-river-300 mb-1">2.1%</div>
              <div className="text-sm text-sand-400">Conversion Rate</div>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="rounded-2xl bg-sand-800 border border-sand-700 p-2 shadow-2xl">
          <div className="rounded-xl bg-sand-900 border border-sand-700/50 overflow-hidden">
             {/* Mock Header */}
             <div className="h-12 border-b border-sand-800 flex items-center px-4 justify-between bg-sand-800/50">
               <div className="flex gap-4 text-sm text-sand-400">
                 <span className="text-white font-medium">Overview</span>
                 <span>Orders</span>
                 <span>Products</span>
                 <span>Customers</span>
               </div>
               <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-full bg-sand-700" />
               </div>
             </div>
             
             {/* Mock Chart Area */}
             <div className="p-6 h-[400px]">
                <div className="mb-6 flex justify-between items-center">
                   <div>
                     <h3 className="text-lg font-medium">Revenue Growth</h3>
                     <p className="text-sm text-sand-400">Last 7 days performance</p>
                   </div>
                   <button className="px-3 py-1 rounded bg-sand-800 border border-sand-700 text-xs text-sand-300">Download Report</button>
                </div>
                
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={data}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#44403c" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#a8a29e'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#a8a29e'}} />
                      <Tooltip 
                        contentStyle={{backgroundColor: '#292524', border: 'none', borderRadius: '8px', color: '#fff'}}
                        cursor={{stroke: '#57534e'}}
                      />
                      <Area type="monotone" dataKey="sales" stroke="#14b8a6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};