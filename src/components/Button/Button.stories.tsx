import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from './Button';
import { IButtonProps } from '../../interfaces';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  btnType: 'default',
  danger: false,
  children: '버튼',
};
