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

export default meta;
