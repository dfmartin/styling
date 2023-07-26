import type { Meta, StoryObj } from '@storybook/vue3';

import { VBtn } from 'vuetify/components';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Buttons/VButton',
    component: VBtn,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    // tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof VBtn>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 * something changing, 1
 */


const Container = (props, {slots}) => 
<div style={{
    width: 'max-content',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '10px',
    justifyItems: 'center',
    alignItems: 'center',
    maxHeight: 'max-content'
}}>
    {slots.default()}
</div>

const ButtonDisplay = (props: { description: string }, { slots }) =>
<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    {slots.default()}
    <span style={{ fontSize: '11px', marginTop: '4px'}}>{props.description}</span>
</div>

export const Primary: Story = {
    render:() =>
    <Container>
        <span></span>
        <span>small</span>
        <span>medium</span>
        <span>large</span>
        <span>normal</span>
        <ButtonDisplay description='btn-primary-sm'>
            <v-btn class="btn-primary-sm">Button</v-btn>
        </ButtonDisplay>
        <ButtonDisplay description='btn-primary-md'>
            <v-btn class="btn-primary-md">Button</v-btn>
        </ButtonDisplay>
        <ButtonDisplay description='btn-primary-lg'>
            <v-btn class="btn-primary-lg">Button</v-btn>
        </ButtonDisplay>

        <span>leading icon</span>
        <ButtonDisplay description='btn-primary-sm-leading-icon'>
            <v-btn class="btn-primary-sm-leading-icon"><v-icon>mdi-square-edit-outline</v-icon>Button</v-btn>
        </ButtonDisplay>
        <ButtonDisplay description='btn-primary-md-leading-icon'>
            <v-btn class="btn-primary-md-leading-icon"><v-icon>mdi-square-edit-outline</v-icon>Button</v-btn>
        </ButtonDisplay>
        <ButtonDisplay description='btn-primary-lg-leading-icon'>
            <v-btn class="btn-primary-lg-leading-icon"><v-icon>mdi-square-edit-outline</v-icon>Button</v-btn>
        </ButtonDisplay>

        <span>following icon</span>
        <v-btn class="btn-primary-sm-following-icon">Button<v-icon>mdi-square-edit-outline</v-icon></v-btn>
        <v-btn class="btn-primary-md-following-icon">Button<v-icon>mdi-square-edit-outline</v-icon></v-btn>
        <v-btn class="btn-primary-lg-following-icon">Button<v-icon>mdi-square-edit-outline</v-icon></v-btn>
    </Container>
};

export const Secondary: Story = {
    render: () => 
    <Container>
        <span></span>
        <span>small</span>
        <span>medium</span>
        <span>large</span>

        <span>normal</span>
        <v-btn class="btn-secondary-sm">Button</v-btn>
        <v-btn class="btn-secondary-md">Button</v-btn>
        <v-btn class="btn-secondary-lg">Button</v-btn>

        <span>leading icon</span>
        <v-btn class="btn-secondary-sm-leading-icon"><v-icon>mdi-square-edit-outline</v-icon>Button</v-btn>
        <v-btn class="btn-secondary-md-leading-icon"><v-icon>mdi-square-edit-outline</v-icon>Button</v-btn>
        <v-btn class="btn-secondary-lg-leading-icon"><v-icon>mdi-square-edit-outline</v-icon>Button</v-btn>
        
        <span>following icon</span>
        <v-btn class="btn-secondary-sm-following-icon">Button<v-icon>mdi-square-edit-outline</v-icon></v-btn>
        <v-btn class="btn-secondary-md-following-icon">Button<v-icon>mdi-square-edit-outline</v-icon></v-btn>
        <v-btn class="btn-secondary-lg-following-icon">Button<v-icon>mdi-square-edit-outline</v-icon></v-btn>
        
    </Container>
};

export const Tertiary: Story = {
    argTypes: {
        disabled: {control: 'boolean'}
    },
    args: {
        disabled: false
    },
    render: (props) => 
    <Container>
        <span></span>
        <span>small</span>
        <span>medium</span>
        <span>large</span>

        <span>normal</span>
        <v-btn class="btn-tertiary-sm" disabled={props.disabled}>Button</v-btn>
        <v-btn class="btn-tertiary-md" disabled={props.disabled}>Button</v-btn>
        <v-btn class="btn-tertiary-lg" disabled={props.disabled}>Button</v-btn>

        <span>leading icon</span>
        <v-btn class="btn-tertiary-sm-leading-icon" disabled={props.disabled}><v-icon>mdi-square-edit-outline</v-icon>Button</v-btn>
        <v-btn class="btn-tertiary-md-leading-icon" disabled={props.disabled}><v-icon>mdi-square-edit-outline</v-icon>Button</v-btn>
        <v-btn class="btn-tertiary-lg-leading-icon" disabled={props.disabled}><v-icon>mdi-square-edit-outline</v-icon>Button</v-btn>
        
        <span>following icon</span>
        <v-btn class="btn-tertiary-sm-following-icon" disabled={props.disabled}>Button<v-icon>mdi-square-edit-outline</v-icon></v-btn>
        <v-btn class="btn-tertiary-md-following-icon" disabled={props.disabled}>Button<v-icon>mdi-square-edit-outline</v-icon></v-btn>
        <v-btn class="btn-tertiary-lg-following-icon" disabled={props.disabled}>Button<v-icon>mdi-square-edit-outline</v-icon></v-btn>
        
        <span>icon only</span>
        <i>none</i>
        <v-btn class="btn-tertiary-md-icon-only" disabled={props.disabled}><v-icon>mdi-square-edit-outline</v-icon></v-btn>
        <v-btn class="btn-tertiary-lg-icon-only" disabled={props.disabled}><v-icon>mdi-square-edit-outline</v-icon></v-btn>
        
    </Container>
}
