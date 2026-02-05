import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-sand-200 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-river-900 rounded-lg flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg">
                   <path d="M3 12C3 12 6 9 9 9C12 9 15 15 18 15C21 15 24 12 24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <span className="font-serif text-xl font-bold text-sand-900">Riverbase</span>
            </div>
            <p className="text-sand-500 mb-6">
              Empowering small businesses with the tools to grow, manage, and succeed in the digital economy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sand-400 hover:text-river-700 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-sand-400 hover:text-river-700 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-sand-400 hover:text-river-700 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-sand-400 hover:text-river-700 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sand-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sand-600">
              <li><a href="#" className="hover:text-river-700 transition-colors">Website Builder</a></li>
              <li><a href="#" className="hover:text-river-700 transition-colors">Telegram Mini-App</a></li>
              <li><a href="#" className="hover:text-river-700 transition-colors">Payments</a></li>
              <li><a href="#" className="hover:text-river-700 transition-colors">Logistics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sand-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-sand-600">
              <li><a href="#" className="hover:text-river-700 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-river-700 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-river-700 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-river-700 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sand-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sand-600">
              <li><a href="#" className="hover:text-river-700 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-river-700 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-river-700 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-river-700 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand-100 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-sand-400">
          <p>&copy; {new Date().getFullYear()} Riverbase Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-sand-600">Terms</a>
            <a href="#" className="hover:text-sand-600">Privacy</a>
            <a href="#" className="hover:text-sand-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};