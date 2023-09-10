import type { Meta, StoryObj } from '@storybook/react';

import Home from '@/app/page';

const meta: Meta<typeof Home> = {
  component: Home,
  title: 'Pages/Home',
};

type Story = StoryObj<typeof Home>;

export const Normal: Story = {
  args: {},
};

export default meta;
