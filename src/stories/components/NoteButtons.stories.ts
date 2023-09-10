import type { Meta, StoryObj } from '@storybook/react';

import NoteButtons from '@/components/NoteButtons';

const meta: Meta<typeof NoteButtons> = {
  component: NoteButtons,
  title: 'Components/NoteButtons',
};

type Story = StoryObj<typeof NoteButtons>;

export const Normal: Story = {
  args: {},
};

export default meta;
