import React from 'react';
import { Menu, Github, Search } from 'lucide-react';

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-4 justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={isSidebarOpen ? "关闭侧边栏" : "打开侧边栏"}
        >
          <Menu className="h-5 w-5 text-gray-500" />
        </button>
        
        <div className="relative max-w-md hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="搜索工具..."
            className="w-full pl-10 pr-4 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/username/repo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="text-sm font-medium hidden sm:inline">Github</span>
        </a>
      </div>
    </header>
  );
}