import type { Meta, StoryObj } from '@storybook/react';

import App from '@/components/App';

const meta: Meta<typeof App> = {
  component: App,
};

type Story = StoryObj<typeof App>;

export const Normal: Story = {
  args: {},
};

export default meta;