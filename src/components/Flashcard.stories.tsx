import type { Meta, StoryObj } from '@storybook/react';

import { FlashcardWrapper } from './NameTheNoteFlashcard';

const meta: Meta<typeof FlashcardWrapper> = {
  component: FlashcardWrapper,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#eeeeee',
          height: '100vh',
          padding: '50px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Molecules/Flashcard',
};

type Story = StoryObj<typeof FlashcardWrapper>;

export const Playground: Story = {
  args: {
    cardNumber: undefined,
    children: (
      <div
        style={{
          backgroundColor: '#e9e9e9',
          borderRadius: '4px',
          height: '200px',
        }}
      />
    ),
    totalCards: undefined,
  },
};

export default meta;
