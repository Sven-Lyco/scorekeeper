import Player from './Player.js';

export default {
  title: 'Player',
  component: Player,
  argTypes: {
    onIncreasePlayerScore: 'onPlus',
    onDecreasePlayerScore: 'onMinus',
  },
};

const Template = args => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Jane Doe',
  score: 10,
};
