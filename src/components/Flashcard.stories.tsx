import type { Meta, StoryObj } from '@storybook/react';

import { Flashcard } from './Flashcard';

const meta: Meta<typeof Flashcard> = {
  component: Flashcard,
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

type Story = StoryObj<typeof Flashcard>;

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
