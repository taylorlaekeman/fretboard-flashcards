import { Note } from '@/types/note';

function getNote(string: number, fret: number): Note {
  if (!(string in openNoteIndicesByString)) throw new Error();
  const openNoteIndex = openNoteIndicesByString[string];
  const notes = Object.keys(Note);
  const noteIndex = (openNoteIndex + fret) % notes.length;
  return Object.values(Note)[noteIndex];
}

const openNoteIndicesByString: Record<number, number> = {
  6: 7, // E
  5: 0, // A
  4: 5, // D
  3: 10, // G
  2: 2, // B
  1: 7, // E
};

export default getNote;
