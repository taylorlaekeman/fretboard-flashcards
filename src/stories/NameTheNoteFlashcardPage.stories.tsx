import type { Meta, StoryObj } from '@storybook/react';

import { NameTheNoteFlashcardPage } from '../components/NameTheNoteFlashcard';

const meta: Meta<typeof NameTheNoteFlashcardPage> = {
  args: {},
  component: NameTheNoteFlashcardPage,
  parameters: { layout: 'fullscreen' },
  title: 'Pages/NameTheNoteFlashcard',
};

type Story = StoryObj<typeof NameTheNoteFlashcardPage>;

export const Normal: Story = {};

export default meta;
