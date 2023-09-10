'use client';
import Image from 'next/image';

import styles from '@/app/page.module.css';
import App from '@/components/App';

export default function Home() {
  return (
    <main className={styles.main}>
      <App />
    </main>
  );
}
