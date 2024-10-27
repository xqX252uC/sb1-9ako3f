<template>
  <header class="bg-white border-b border-gray-200 h-16 flex items-center px-4 justify-between">
    <div class="flex items-center space-x-4">
      <button
        @click="$emit('toggle-sidebar')"
        class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        :aria-label="isSidebarOpen ? '关闭侧边栏' : '打开侧边栏'"
      >
        <Menu class="h-5 w-5 text-gray-500" />
      </button>
      
      <div class="relative max-w-md hidden sm:block">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search class="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="search"
          placeholder="搜索工具..."
          class="w-full pl-10 pr-4 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
        />
      </div>
    </div>
    
    <div class="flex items-center space-x-4">
      <a
        href="https://github.com/username/repo"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
      >
        <Github class="h-5 w-5" />
        <span class="text-sm font-medium hidden sm:inline">Github</span>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu, Github, Search } from 'lucide-vue-next';

defineProps<{
  isSidebarOpen: boolean;
}>();

defineEmits<{
  (e: 'toggle-sidebar'): void;
}>();
</script>