'use client';
import styles from '@/app/page.module.css';
import FretboardFlashcards from '@/components/FretboardFlashcards';
import { NameTheNoteFlashcardContainer } from '@/components/NameTheNoteFlashcard';

export default function Page() {
  return (
    <main className={styles.main}>
      <NameTheNoteFlashcardContainer />
    </main>
  );
}
