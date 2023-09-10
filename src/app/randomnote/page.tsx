'use client';
import styles from '@/app/page.module.css';
import RandomNote from '@/components/RandomNote';

export default function Page() {
  return (
    <main className={styles.main}>
      <RandomNote />
    </main>
  );
}
