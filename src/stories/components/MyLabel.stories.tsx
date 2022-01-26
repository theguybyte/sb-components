import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from './../../components/MyLabel';

export default {
    title: 'UI/Labels/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {
            control: 'select',
            //options: ['normal', 'h1']
        },
        color: { control: 'select' },
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args } />


//Stories...
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false // true: capitalize the whole world
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}

export const CustomerBackgroundColor = Template.bind({});
CustomerBackgroundColor.args = {
    size: 'h1',
    fontColor: '#ffffff',
    backgroundColor: '#000000'
}

