import type { Meta, StoryObj } from '@storybook/react';

import Fretboard from '@/components/Fretboard';
import String from '@/types/string';

const meta: Meta<typeof Fretboard> = {
  component: Fretboard,
};

type Story = StoryObj<typeof Fretboard>;

export const Normal: Story = {
  args: {
    fret: 0,
    string: String.E,
  },
};

export default meta;
