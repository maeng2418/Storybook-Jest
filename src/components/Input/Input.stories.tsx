import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input } from './Input';
import { IInputProps } from '../../interfaces';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<IInputProps> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  placeholder: '아이디를 입력해주세요.',
};
