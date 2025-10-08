import React from 'react';
import { ShoppingCart } from "lucide-react";

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-lg h-16 flex items-center px-6 ">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
      >
        <MenuIcon />
      </button>
      
      <div className="flex-1 flex justify-between items-center ml-4 lg:ml-0">
        <figure className="hidden lg:block">
          <img 
            src="/images/logo.png" 
            alt="Logo Coopérative Bio" 
            className="h-20 w-20"
          />
        </figure>
        <h2 className="text-xl font-semibold text-gray-800">
          Gestion Coopérative Elghousni
        </h2>
        
        < div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <ShoppingCart className="w-6 h-6 text-gray-600" />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
