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
  [String.E]: 7, // E
  [String.A]: 0, // A
  [String.D]: 5, // D
  [String.G]: 10, // G
  [String.B]: 2, // B
  [String.e]: 7, // E
};

export default getNote;
