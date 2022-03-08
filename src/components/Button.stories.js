import Button from './Button.js';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Click me',
  isDark: true,
};
