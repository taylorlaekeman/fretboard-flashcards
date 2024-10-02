import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NoteButtons } from '../components/NoteButtons';
import { Note } from '../types/note';
import { ResultStatus } from '../types/resultStatus';

const meta: Meta<typeof NoteButtons> = {
  args: {
    resultStatus: undefined,
    selectedNote: undefined,
  },
  component: NoteButtons,
  title: 'Molecules/NoteButtons',
};

type Story = StoryObj<typeof NoteButtons>;

export const Normal: Story = {};

export const Selected: Story = {
  args: { selectedNote: Note.C },
};

export const Correct: Story = {
  args: {
    resultStatus: ResultStatus.Correct,
    selectedNote: Note.C,
  },
};

export const Incorrect: Story = {
  args: {
    resultStatus: ResultStatus.Incorrect,
    selectedNote: Note.C,
  },
};

export const Container: Story = {
  render: ({ selectedNote, ...props }) => (
    <NoteButtonsContainer initialNote={selectedNote} {...props} />
  ),
};

function NoteButtonsContainer({
  initialNote = Note.C,
}: {
  initialNote?: Note;
}): React.ReactElement {
  const [selectedNote, setSelectedNote] = React.useState<Note>(initialNote);
  return (
    <NoteButtons
      onChange={(newNote) => setSelectedNote(newNote)}
      selectedNote={selectedNote}
    />
  );
}

export default meta;
