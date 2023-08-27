import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Normal: Story = {
  args: { children: 'test' },
};

export default meta;
