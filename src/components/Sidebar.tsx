import React from 'react';
import { Wrench, Github, Mail, ExternalLink } from 'lucide-react';
import type { Tool } from '../App';

interface SidebarProps {
  tools: Tool[];
  selectedTool: string;
  onSelectTool: (id: string) => void;
  isOpen: boolean;
}

export default function Sidebar({ tools, selectedTool, onSelectTool, isOpen }: SidebarProps) {
  if (!isOpen) return null;

  const categories = {
    calculation: '计算工具',
    text: '文本工具',
    image: '图片工具',
    time: '时间工具',
    game: '小游戏',
    qr: '二维码',
    generator: '生成器',
    search: '搜索工具'
  };

  const groupedTools = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, Tool[]>);

  return (
    <div className="w-80 h-full bg-white border-r border-gray-200 flex flex-col shadow-lg">
      <div className="p-6 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
            <Wrench className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">在线工具箱</h1>
            <p className="text-indigo-100 text-sm">提升工作效率</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <nav className="p-4">
          {Object.entries(groupedTools).map(([category, categoryTools]) => (
            <div key={category} className="mb-6">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                {categories[category as keyof typeof categories]}
              </h2>
              <div className="space-y-1.5">
                {categoryTools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => onSelectTool(tool.id)}
                    className={`tool-button ${
                      selectedTool === tool.id
                        ? 'bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-100'
                        : 'text-gray-600 hover:bg-gray-50/80 hover:text-gray-900'
                    }`}
                  >
                    <span className="tool-icon">{tool.icon}</span>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-sm">{tool.name}</p>
                      <p className="text-xs text-gray-500 line-clamp-1">{tool.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-indigo-50/50 border border-indigo-100/50">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-indigo-600 flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>联系与支持</span>
            </h3>
            <div className="space-y-2">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-gray-600 hover:text-indigo-600 transition-all duration-200 group shadow-sm hover:shadow-md"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm">Github</span>
                <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-gray-600 hover:text-indigo-600 transition-all duration-200 group shadow-sm hover:shadow-md"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">联系我们</span>
                <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}