import type { Meta, StoryObj } from '@storybook/react';

import { PageWrapper } from '../components/PageWrapper';

const meta: Meta<typeof PageWrapper> = {
  args: {
    children: <p>content</p>,
  },
  component: PageWrapper,
  parameters: { layout: 'fullscreen' },
  title: 'Molecules/PageWrapper',
};

type Story = StoryObj<typeof PageWrapper>;

export const Normal: Story = {};

export default meta;
