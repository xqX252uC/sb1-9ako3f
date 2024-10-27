import type { Component } from 'vue';

export type Tool = {
  id: string;
  name: string;
  icon: Component;
  description: string;
  category: 'calculation' | 'text' | 'image' | 'time' | 'game' | 'qr' | 'generator' | 'search';
};

export type CategoryLabels = {
  [key: string]: string;
};