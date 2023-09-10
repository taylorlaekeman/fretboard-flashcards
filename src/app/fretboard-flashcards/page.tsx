'use client';
import styles from '@/app/page.module.css';
import FretboardFlashcards from '@/components/FretboardFlashcards';

export default function Page() {
  return (
    <main className={styles.main}>
      <FretboardFlashcards />
    </main>
  );
}
