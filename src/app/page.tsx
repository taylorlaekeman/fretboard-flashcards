'use client';
import Image from 'next/image';

import App from '@/components/App';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <App />
    </main>
  );
}
