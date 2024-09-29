import clsx from 'clsx';
import React from 'react';

import { Button, Shape, Variant } from './Button';
import styles from './NoteButtons.module.css';
import { Note } from '../types/note';

function NoteButtons({
  onChange = () => {},
  selectedNote,
}: {
  onChange?: (note: Note) => void;
  selectedNote?: Note;
}): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      {NOTES.map(({ label, shape, value }) => (
        <NoteButton
          id={value}
          isSelected={selectedNote === value}
          key={value}
          label={label}
          onSelect={() => onChange(value)}
        />
      ))}
    </div>
  );
}

const SHARP = String.fromCharCode(9839);

const FLAT = String.fromCharCode(9837);

const NOTES: NoteDetail[] = [
  { label: 'C', shape: Shape.Round, value: Note.C },
  { label: `C${SHARP}/D${FLAT}`, value: Note.CSharpDFlat },
  { label: 'D', shape: Shape.Round, value: Note.D },
  { label: `D${SHARP}/E${FLAT}`, value: Note.DSharpEFlat },
  { label: 'E', shape: Shape.Round, value: Note.E },
  { label: 'F', shape: Shape.Round, value: Note.F },
  { label: `F${SHARP}/G${FLAT}`, value: Note.FSharpGFlat },
  { label: 'G', shape: Shape.Round, value: Note.G },
  { label: `G${SHARP}/A${FLAT}`, value: Note.GSharpAFlat },
  { label: 'A', shape: Shape.Round, value: Note.A },
  { label: `A${SHARP}/B${FLAT}`, value: Note.ASharpBFlat },
  { label: 'B', shape: Shape.Round, value: Note.B },
];

interface NoteDetail {
  label: string;
  shape?: Shape;
  value: Note;
}

function NoteButton({
  id,
  isSelected = false,
  label = '',
  onSelect = () => {},
}: {
  id?: string;
  isSelected?: boolean;
  label?: string;
  onSelect?: () => void;
}): React.ReactElement {
  return (
    <div className={clsx(styles.noteButton, isSelected && styles.selected)}>
      <input id={id} name="note" onChange={() => onSelect()} type="radio" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default NoteButtons;
