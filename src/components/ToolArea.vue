<template>
  <main class="flex-1 p-6 overflow-y-auto">
    <div class="max-w-5xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200/50">
        <div class="p-6 border-b border-gray-100">
          <div class="flex items-center space-x-4">
            <div class="p-3 bg-indigo-50 rounded-xl">
              <div class="tool-icon">
                <component :is="currentTool?.icon" size="20" />
              </div>
            </div>
            <div>
              <h2 class="text-xl font-bold text-gray-900">{{ currentTool?.name }}</h2>
              <p class="text-gray-600 text-sm">{{ currentTool?.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="p-8">
          <div class="flex flex-col items-center justify-center min-h-[400px] text-center">
            <div class="max-w-md">
              <div class="text-gray-400 animate-pulse">功能开发中...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Tool } from '../types';

const props = defineProps<{
  selectedTool: string;
  tools: Tool[];
}>();

const currentTool = computed(() => 
  props.tools.find(tool => tool.id === props.selectedTool)
);
</script>