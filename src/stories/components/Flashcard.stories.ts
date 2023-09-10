import type { Meta, StoryObj } from '@storybook/react';

import Flashcard from '@/components/Flashcard';
import String from '@/types/string';

const meta: Meta<typeof Flashcard> = {
  component: Flashcard,
  title: 'Components/Flashcard',
};

type Story = StoryObj<typeof Flashcard>;

export const Normal: Story = {
  args: {
    fret: 0,
    string: String.E,
  },
};

export default meta;
