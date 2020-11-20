import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
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
  onChange: action('onChange 이벤트'),
};

export const Radio = Template.bind({});
Radio.args = {
  type: 'radio',
  onChange: action('onChange 이벤트'),
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: 'checkbox',
  onChange: action('onChange 이벤트'),
};
