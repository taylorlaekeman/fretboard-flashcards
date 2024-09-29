import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import NoteButtons from '@/components/NoteButtons';
import { Note } from '../types/note';

const meta: Meta<typeof NoteButtons> = {
  args: { selectedNote: Note.C },
  component: NoteButtons,
  title: 'Molecules/NoteButtons',
};

type Story = StoryObj<typeof NoteButtons>;

export const Normal: Story = {};

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
