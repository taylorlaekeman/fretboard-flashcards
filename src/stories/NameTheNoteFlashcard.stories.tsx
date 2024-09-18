import type { Meta, StoryObj } from '@storybook/react';

import {
  NameTheNoteFlashcard,
  NameTheNoteFlashcardContainer,
  NameTheNoteFlashcardPage,
  ResultStatus,
} from '../components/NameTheNoteFlashcard';
import { Note } from '../types/note';
import GuitarString from '../types/string';

const meta: Meta<typeof NameTheNoteFlashcard> = {
  args: {
    noteString: GuitarString.E,
    noteFret: 0,
    selectedNote: Note.C,
    status: undefined,
  },
  component: NameTheNoteFlashcard,
  title: 'Molecules/NameTheNoteFlashcard',
};

type Story = StoryObj<typeof NameTheNoteFlashcard>;

export const Normal: Story = {};

export const Correct: Story = {
  args: { status: ResultStatus.Correct },
};

export const Incorrect: Story = {
  args: { status: ResultStatus.Incorrect },
};

export const Container: Story = {
  render: () => <NameTheNoteFlashcardContainer />,
};

export default meta;
