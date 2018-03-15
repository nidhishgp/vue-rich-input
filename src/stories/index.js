import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import RichInput from '../RichInput.vue';

storiesOf('RichInput', module)
  .add('story as a component', () => ({
    components: { RichInput },
    template: '<vue-rich-input type="password" error-message="Invalid"></vue-rich-input>'
  }));
