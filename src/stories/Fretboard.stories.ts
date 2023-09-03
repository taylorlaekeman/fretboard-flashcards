import type { Meta, StoryObj } from '@storybook/react';

import Fretboard, { Length } from '@/components/Fretboard';
import String from '@/types/string';

const meta: Meta<typeof Fretboard> = {
  component: Fretboard,
};

type Story = StoryObj<typeof Fretboard>;

export const TwentyFour: Story = {
  args: {
    fret: 0,
    length: Length.TwentyFour,
    string: String.E,
  },
};

export const Twelve: Story = {
  args: {
    fret: 0,
    length: Length.Twelve,
    string: String.E,
  },
};

export default meta;
