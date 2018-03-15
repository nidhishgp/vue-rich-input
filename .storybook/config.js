import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import RichInput from '../src/RichInput.vue';

// Install Vue plugins.

// Register custom components.
Vue.component('vue-rich-input', RichInput);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);