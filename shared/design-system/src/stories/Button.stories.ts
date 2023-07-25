import type { Meta, StoryObj } from '@storybook/vue3';

import { VBtn } from 'vuetify/components';
import Button from './Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    label: 'test',
    primary: false,
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    class: {
      control: 'select', options: [
        'btn-primary-md',
        'btn-primary-sm',
        'btn-primary-lg',
        'btn-primary-md',
        'btn-primary-md',
        'btn-primary-md',
      ]
    }
  },
} satisfies Meta<typeof VBtn>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: 'Button',
    class: 'btn-primary-md'
  },
};

export const Secondary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button />'
  })
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};
