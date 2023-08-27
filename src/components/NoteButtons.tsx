import React, { FC } from 'react';

import Button from '@/components/Button';
import { Note } from '@/types/note';

const NoteButtons: FC<{ onChange?: (note: Note) => void }> = ({
  onChange = () => {},
}) => {
  return (
    <div>
      <Button onClick={() => onChange(Note.GSharpAFlat)}>A Flat</Button>
      <Button onClick={() => onChange(Note.A)}>A</Button>
      <Button onClick={() => onChange(Note.ASharpBFlat)}>A Sharp</Button>
      <Button onClick={() => onChange(Note.ASharpBFlat)}>B Flat</Button>
      <Button onClick={() => onChange(Note.B)}>B</Button>
      <Button onClick={() => onChange(Note.C)}>C</Button>
      <Button onClick={() => onChange(Note.CSharpDFlat)}>C Sharp</Button>
      <Button onClick={() => onChange(Note.CSharpDFlat)}>D Flat</Button>
      <Button onClick={() => onChange(Note.D)}>D</Button>
      <Button onClick={() => onChange(Note.DSharpEFlat)}>D Sharp</Button>
      <Button onClick={() => onChange(Note.DSharpEFlat)}>E Flat</Button>
      <Button onClick={() => onChange(Note.E)}>E</Button>
      <Button onClick={() => onChange(Note.F)}>F</Button>
      <Button onClick={() => onChange(Note.FSharpGFlat)}>F Sharp</Button>
      <Button onClick={() => onChange(Note.FSharpGFlat)}>G Flat</Button>
      <Button onClick={() => onChange(Note.G)}>G</Button>
      <Button onClick={() => onChange(Note.GSharpAFlat)}>G Sharp</Button>
    </div>
  );
};

export default NoteButtons;
