import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I never thought I could build a website. Riverbase made it feel like playing with lego blocks. My sales doubled in a month.",
      author: "Srey Leak",
      role: "Founder, Lotus Silk",
      image: "https://picsum.photos/seed/101/64/64"
    },
    {
      quote: "The Telegram integration is a game changer. My customers order directly from chat, and the KHQR payments are seamless.",
      author: "Vireak Oudom",
      role: "Owner, Urban Coffee",
      image: "https://picsum.photos/seed/102/64/64"
    },
    {
      quote: "Finally, a platform that understands local logistics. Managing my own delivery fleet alongside the website is effortless.",
      author: "Dara Sovan",
      role: "CEO, Sovan Logistics",
      image: "https://picsum.photos/seed/103/64/64"
    }
  ];

  return (
    <section className="py-24 bg-sand-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-sand-900 mb-4">Empowering local visionaries.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-sand-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <Quote className="w-8 h-8 text-river-200 mb-6" />
              <p className="text-sand-600 text-lg leading-relaxed mb-8 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sand-900">{t.author}</h4>
                  <p className="text-sm text-sand-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};