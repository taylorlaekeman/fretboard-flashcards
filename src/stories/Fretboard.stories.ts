import type { Meta, StoryObj } from '@storybook/react';

import { Fretboard, Length, Orientation } from '../components/Fretboard';
import String from '@/types/string';

const meta: Meta<typeof Fretboard> = {
  args: {
    fret: 0,
    length: Length.Twelve,
    orientation: Orientation.Horizontal,
    string: String.E,
  },
  component: Fretboard,
  title: 'Molecules/Fretboard',
};

type Story = StoryObj<typeof Fretboard>;

export const TwentyFour: Story = {
  args: { length: Length.TwentyFour },
};

export const Twelve: Story = {
  args: {
    fret: 2,
  },
};

export const Vertical: Story = {
  args: {
    orientation: Orientation.Vertical,
  },
};

export default meta;
