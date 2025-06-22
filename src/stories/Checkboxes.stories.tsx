import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkboxes } from '../components/Checkboxes';

const meta: Meta<typeof Checkboxes> = {
  args: {
    value: {
      first: false,
      second: true,
    },
  },
  component: Checkboxes,
  title: 'Atoms/Checkboxes',
};

type Story = StoryObj<typeof Checkboxes>;

export const Normal: Story = {};

export const InContainer: Story = {
  render: (props) => <Container {...props} />,
};

function Container({
  value: initialValue = {},
}: {
  value?: Record<string, boolean>;
}): React.ReactElement {
  const [value, setValue] =
    React.useState<Record<string, boolean>>(initialValue);
  return (
    <Checkboxes onChange={(newValue) => setValue(newValue)} value={value} />
  );
}

export default meta;
