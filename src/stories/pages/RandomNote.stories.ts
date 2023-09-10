import type { Meta, StoryObj } from '@storybook/react';

import RandomNote from '@/pages/random-note';

const meta: Meta<typeof RandomNote> = {
  component: RandomNote,
  title: 'Pages/RandomNote',
};

type Story = StoryObj<typeof RandomNote>;

export const Normal: Story = {
  args: {},
};

export default meta;
