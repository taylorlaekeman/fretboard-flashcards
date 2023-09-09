import type { Meta, StoryObj } from '@storybook/react';

import RandomNote from '@/components/RandomNote';

const meta: Meta<typeof RandomNote> = {
  component: RandomNote,
};

type Story = StoryObj<typeof RandomNote>;

export const Normal: Story = {
  args: {},
};

export default meta;
