import HistoryEntry from './HistoryEntry';

export default {
  title: 'components/HistoryEntry',
  component: HistoryEntry,
  argTypes: {},
};

const Template = args => <HistoryEntry {...args} />;

export const Default = Template.bind({});
Default.args = {
  nameOfGame: 'Siedler',
  players: 'player 1',
};
