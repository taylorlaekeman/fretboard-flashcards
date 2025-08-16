import type { Meta, StoryObj } from '@storybook/react';

import { Flashcard } from '@/components/Flashcard';

const meta: Meta<typeof Flashcard> = {
  component: Flashcard,
  title: 'Components/Flashcard',
};

type Story = StoryObj<typeof Flashcard>;

export const Normal: Story = {
  args: {},
};

export default meta;
