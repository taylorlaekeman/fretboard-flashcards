import type { Meta, StoryObj } from '@storybook/react';

import { Text, Variant } from '../components/Text';

const meta: Meta<typeof Text> = {
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
    variant: Variant.Body,
  },
  component: Text,
  title: 'Atoms/Text',
};

type Story = StoryObj<typeof Text>;

export const Normal: Story = {};

export const Variants: Story = {
  render: ({ children }) => (
    <>
      <Text variant={Variant.MainTitle}>{`Main Title: ${children}`}</Text>
      <Text variant={Variant.Body}>{`Body: ${children}`}</Text>
    </>
  ),
};

export default meta;
