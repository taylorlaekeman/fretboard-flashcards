import type { Meta, StoryObj } from '@storybook/react';

import { Button, Shape, Variant } from '@/components/Button';

const meta: Meta<typeof Button> = {
  args: {
    children: 'test',
    shape: Shape.Normal,
    variant: Variant.Normal,
  },
  component: Button,
  title: 'Atoms/Button',
};

type Story = StoryObj<typeof Button>;

export const Normal: Story = {};

export const Round: Story = {
  args: { children: 'A', shape: Shape.Round },
};

export const Selected: Story = {
  args: { variant: Variant.Selected },
};

export default meta;
