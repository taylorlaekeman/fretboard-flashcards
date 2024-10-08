import type { Meta, StoryObj } from '@storybook/react';

import FretboardFlashcards from '../../components/FretboardFlashcards';

const meta: Meta<typeof FretboardFlashcards> = {
  component: FretboardFlashcards,
  title: 'Pages/FretboardFlashcards',
};

type Story = StoryObj<typeof FretboardFlashcards>;

export const Normal: Story = {
  args: {},
};

export default meta;
