import React from 'react';
import type { Tool } from '../App';

interface ToolAreaProps {
  selectedTool: string;
  tools: Tool[];
}

export default function ToolArea({ selectedTool, tools }: ToolAreaProps) {
  const currentTool = tools.find(tool => tool.id === selectedTool);

  if (!currentTool) return null;

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <div className="tool-icon">{currentTool.icon}</div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{currentTool.name}</h2>
                <p className="text-gray-600 text-sm">{currentTool.description}</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="max-w-md">
                <div className="text-gray-400 animate-pulse">功能开发中...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}