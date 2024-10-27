<template>
  <div class="flex h-screen bg-gray-50">
    <Sidebar 
      :tools="tools" 
      :selectedTool="selectedTool" 
      :isOpen="isSidebarOpen"
      @select-tool="setSelectedTool"
    />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header 
        :isSidebarOpen="isSidebarOpen"
        @toggle-sidebar="toggleSidebar"
      />
      <ToolArea :selectedTool="selectedTool" :tools="tools" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { 
  Calculator, FileType, Image, MessageSquare, Clock, Gamepad2, QrCode, 
  Search, BookOpen, Lock, Camera, Scissors, Layout,
  Timer, Binary, ImagePlus, SplitSquareHorizontal, FileImage
} from 'lucide-vue-next';
import Sidebar from './components/Sidebar.vue';
import ToolArea from './components/ToolArea.vue';
import Header from './components/Header.vue';
import type { Tool } from './types';

const tools: Tool[] = [
  { 
    id: 'calculator', 
    name: '计算器', 
    icon: Calculator, 
    description: '科学计算器',
    category: 'calculation' 
  },
  // ... (same tools array as before, but using Lucide Vue components directly)
];

const selectedTool = ref(tools[0].id);
const isSidebarOpen = ref(true);

const setSelectedTool = (id: string) => {
  selectedTool.value = id;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>