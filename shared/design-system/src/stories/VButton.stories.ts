import type { Meta, StoryObj } from '@storybook/vue3';

import { VBtn } from 'vuetify/components';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Example/VButton',
    component: VBtn,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof VBtn>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

const sizes = [
    'sm', 'md', 'lg'
]

const types = ['primary', 'secondary', 'tertiary']

const states = ['enabled', 'disabled']
const variants = ['', '-leading-icon', '-following-icon', '-iconOnly'];
const divClass = `{display: 'flex', gap: '40px', flexDirection: 'column'}`
const getTemplate = () => {
    let template = `<div :style="${divClass}">`
    types.map((type, typeIndex) => {
        template += `<div :style="{display: 'flex', flexDirection: 'column', gap: '10px'}">
        <h5>${type}</h5>`
        sizes.map((size, sizeIndex) => {

            template += `<div :style="{display: 'flex', gap: '10px'}">`
            template += `<strong>${size}</strong>`
            variants.map((variant, variantIndex) => {
                let inner = ``;
                if (variant === '-leading-icon') {
                    inner = `<v-icon>mdi-square-edit-outline</v-icon>Button`;
                }
                if (variant === '-following-icon') {
                    inner = `Button<v-icon>mdi-square-edit-outline</v-icon>`
                }
                if (variant === '-iconOnly') {
                    inner = `<v-icon>mdi-square-edit-outline</v-icon>`
                }
                if (!variant) {
                    inner = `Button`
                }

                template += `<div>`
                states.map((state, stateIndex) => {
                    const className = `btn-${type}-${size}${variant}`
                    template += `<v-btn class="${className}" ${state == 'disabled' ? 'disabled' : ''} :style="{width: 'max-content'}">${inner}</v-btn>`
                })
                template += `</div>`
            })
            template += `</div>`
        })
        template += `</div>`
    })
    template += '</div>'
    return template;
};
export const Primary: Story = {
    args: {
        text: 'Button',
        class: 'btn-primary-md'
    },
};

export const Secondary: Story = {
    render: () => ({
        components: { VBtn },
        template: getTemplate()
    })
};

export const Large: Story = {
    args: {
        text: 'Button',
        class: 'btn-primary-lg'
    },
};

export const Small: Story = {
    args: {
        text: 'Button',
        class: 'btn-primary-sm',
    },
};
