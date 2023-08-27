import React, { FC } from 'react';

import String from '@/types/string';

const Fretboard: FC<{ fret: number; string: String }> = ({ fret, string }) => {
  return (
    <>
      <p>fret: {fret}</p>
      <p>string: {string}</p>
    </>
  );
};

export default Fretboard;
