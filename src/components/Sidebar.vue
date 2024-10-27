<template>
  <div v-if="isOpen" class="w-80 h-full bg-white border-r border-gray-200 flex flex-col shadow-lg">
    <div class="p-6 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700">
      <div class="flex items-center space-x-3">
        <div class="p-2.5 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
          <Wrench class="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 class="text-xl font-bold text-white">在线工具箱</h1>
          <p class="text-indigo-100 text-sm">提升工作效率</p>
        </div>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto scrollbar-hidden">
      <nav class="p-4">
        <div v-for="(categoryTools, category) in groupedTools" :key="category" class="mb-6">
          <h2 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
            {{ categories[category] }}
          </h2>
          <div class="space-y-1.5">
            <button
              v-for="tool in categoryTools"
              :key="tool.id"
              @click="$emit('select-tool', tool.id)"
              :class="[
                'tool-button',
                selectedTool === tool.id
                  ? 'bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-100'
                  : 'text-gray-600 hover:bg-gray-50/80 hover:text-gray-900'
              ]"
            >
              <span class="tool-icon">
                <component :is="tool.icon" size="20" />
              </span>
              <div class="flex-1 text-left">
                <p class="font-medium text-sm">{{ tool.name }}</p>
                <p class="text-xs text-gray-500 line-clamp-1">{{ tool.description }}</p>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </div>

    <div class="p-4 border-t border-gray-100">
      <div class="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-indigo-50/50 border border-indigo-100/50">
        <div class="space-y-3">
          <h3 class="text-sm font-semibold text-indigo-600 flex items-center space-x-2">
            <Mail class="h-4 w-4" />
            <span>联系与支持</span>
          </h3>
          <div class="space-y-2">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-gray-600 hover:text-indigo-600 transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <Github class="h-4 w-4" />
              <span class="text-sm">Github</span>
              <ExternalLink class="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="mailto:contact@example.com"
              class="flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-gray-600 hover:text-indigo-600 transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <Mail class="h-4 w-4" />
              <span class="text-sm">联系我们</span>
              <ExternalLink class="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Wrench, Github, Mail, ExternalLink } from 'lucide-vue-next';
import type { Tool } from '../types';

const props = defineProps<{
  tools: Tool[];
  selectedTool: string;
  isOpen: boolean;
}>();

defineEmits<{
  (e: 'select-tool', id: string): void;
}>();

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

const groupedTools = computed(() => {
  return props.tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, Tool[]>);
});
</script>