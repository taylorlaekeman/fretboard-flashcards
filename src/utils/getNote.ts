import String from '@/types/string';
import { Note } from '@/types/note';

export function getNote(string: String, fret: number): Note {
  if (!(string in openNoteIndicesByString)) throw new Error();
  const openNoteIndex = openNoteIndicesByString[string];
  const notes = Object.keys(Note);
  const noteIndex = (openNoteIndex + (fret % 12)) % notes.length;
  return Object.values(Note)[noteIndex];
}

const openNoteIndicesByString: Record<String, number> = {
  [String.E]: 7,
  [String.A]: 0,
  [String.D]: 5,
  [String.G]: 10,
  [String.B]: 2,
  [String.e]: 7,
};

export default getNote;
