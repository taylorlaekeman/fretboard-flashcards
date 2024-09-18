import React from 'react';

import { Button, Shape, Variant } from '@/components/Button';
import { Note } from '@/types/note';

function NoteButtons({
  onChange = () => {},
  selectedNote,
}: {
  onChange?: (note: Note) => void;
  selectedNote?: Note;
}): React.ReactElement {
  return (
    <div>
      {NOTES.map(({ label, value }) => (
        <Button
          key={label}
          onClick={() => onChange(value)}
          shape={Shape.Round}
          variant={selectedNote === value ? Variant.Selected : Variant.Normal}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}

const SHARP = String.fromCharCode(9839);

const FLAT = String.fromCharCode(9837);

const NOTES: NoteDetail[] = [
  { label: `A${FLAT}`, value: Note.GSharpAFlat },
  { label: 'A', value: Note.A },
  { label: `A${SHARP}`, value: Note.ASharpBFlat },
  { label: `B${FLAT}`, value: Note.ASharpBFlat },
  { label: 'B', value: Note.B },
  { label: 'C', value: Note.C },
  { label: `C${SHARP}`, value: Note.CSharpDFlat },
  { label: `D${FLAT}`, value: Note.CSharpDFlat },
  { label: 'D', value: Note.D },
  { label: `D${SHARP}`, value: Note.DSharpEFlat },
  { label: `E${FLAT}`, value: Note.DSharpEFlat },
  { label: 'E', value: Note.E },
  { label: 'F', value: Note.F },
  { label: `F${SHARP}`, value: Note.FSharpGFlat },
  { label: `G${FLAT}`, value: Note.FSharpGFlat },
  { label: 'G', value: Note.G },
  { label: `G${SHARP}`, value: Note.GSharpAFlat },
];

interface NoteDetail {
  label: string;
  value: Note;
}

export default NoteButtons;
