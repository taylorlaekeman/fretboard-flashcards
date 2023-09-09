import React, { FC } from 'react';

import Button from '@/components/Button';
import useRandomNote from '@/hooks/useRandomNote';

const RandomNote: FC = () => {
  const { note, refresh } = useRandomNote();
  return (
    <>
      <h1>Random Note</h1>
      <p>{note}</p>
      <Button onClick={refresh}>Another one</Button>
    </>
  );
};

export default RandomNote;
