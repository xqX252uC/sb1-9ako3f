import React, { useState } from 'react';
import { 
  Calculator, FileType, Image, MessageSquare, Clock, Gamepad2, QrCode, 
  Search as SearchIcon, BookOpen, Lock, Camera, Scissors, Layout,
  Timer, Binary, ImagePlus, SplitSquareHorizontal, FileImage
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import ToolArea from './components/ToolArea';
import Header from './components/Header';

export type Tool = {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  category: 'calculation' | 'text' | 'image' | 'time' | 'game' | 'qr' | 'generator' | 'search';
};

const tools: Tool[] = [
  // 计算工具
  { 
    id: 'calculator', 
    name: '计算器', 
    icon: <Calculator size={20} />, 
    description: '科学计算器',
    category: 'calculation' 
  },
  
  // 文本工具
  { 
    id: 'text-word-count', 
    name: '字数统计', 
    icon: <MessageSquare size={20} />, 
    description: '文本字数统计工具',
    category: 'text' 
  },
  { 
    id: 'review-generator', 
    name: '评论生成', 
    icon: <MessageSquare size={20} />, 
    description: '快速生成评论模板',
    category: 'text' 
  },
  { 
    id: 'answer-book', 
    name: '解答之书', 
    icon: <BookOpen size={20} />, 
    description: '获取智慧解答',
    category: 'text' 
  },

  // 图片工具
  { 
    id: 'image-compress', 
    name: '图片压缩', 
    icon: <Image size={20} />, 
    description: '无损压缩图片',
    category: 'image' 
  },
  { 
    id: 'image-convert', 
    name: '格式转换', 
    icon: <FileImage size={20} />, 
    description: '图片格式转换工具',
    category: 'image' 
  },
  { 
    id: 'image-join', 
    name: '图片拼接', 
    icon: <ImagePlus size={20} />, 
    description: '多图片拼接工具',
    category: 'image' 
  },
  { 
    id: 'image-split', 
    name: '图片分割', 
    icon: <SplitSquareHorizontal size={20} />, 
    description: '图片切割工具',
    category: 'image' 
  },
  { 
    id: 'pure-bg', 
    name: '背景移除', 
    icon: <Image size={20} />, 
    description: '移除图片背景',
    category: 'image' 
  },
  { 
    id: 'quad-wallpaper', 
    name: '壁纸生成', 
    icon: <Layout size={20} />, 
    description: '创建自定义壁纸',
    category: 'image' 
  },
  { 
    id: 'ocr', 
    name: '文字识别', 
    icon: <Camera size={20} />, 
    description: 'OCR文字识别',
    category: 'image' 
  },

  // 时间工具
  { 
    id: 'timer', 
    name: '计时器', 
    icon: <Timer size={20} />, 
    description: '简单计时器',
    category: 'time' 
  },
  { 
    id: 'pomodoro', 
    name: '番茄钟', 
    icon: <Clock size={20} />, 
    description: '专注时间管理',
    category: 'time' 
  },
  { 
    id: 'countdown', 
    name: '倒计时', 
    icon: <Clock size={20} />, 
    description: '自定义倒计时',
    category: 'time' 
  },
  { 
    id: 'new-year-countdown', 
    name: '新年倒计时', 
    icon: <Clock size={20} />, 
    description: '新年倒计时器',
    category: 'time' 
  },

  // 游戏
  { 
    id: 'game-2048', 
    name: '2048', 
    icon: <Gamepad2 size={20} />, 
    description: '经典2048游戏',
    category: 'game' 
  },

  // 二维码工具
  { 
    id: 'qr-generate', 
    name: '二维码生成', 
    icon: <QrCode size={20} />, 
    description: '生成自定义二维码',
    category: 'qr' 
  },
  { 
    id: 'qr-scan', 
    name: '二维码扫描', 
    icon: <QrCode size={20} />, 
    description: '扫描识别二维码',
    category: 'qr' 
  },

  // 生成器
  { 
    id: 'name-pass-gen', 
    name: '密码生成器', 
    icon: <Lock size={20} />, 
    description: '生成安全密码',
    category: 'generator' 
  },

  // 搜索工具
  { 
    id: 'official-website-search', 
    name: '官网搜索', 
    icon: <SearchIcon size={20} />, 
    description: '快速搜索官方网站',
    category: 'search' 
  },
];

function App() {
  const [selectedTool, setSelectedTool] = useState<string>(tools[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        tools={tools} 
        selectedTool={selectedTool} 
        onSelectTool={setSelectedTool}
        isOpen={isSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <ToolArea selectedTool={selectedTool} tools={tools} />
      </div>
    </div>
  );
}

export default App;