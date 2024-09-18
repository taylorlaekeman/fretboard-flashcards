import styles from './PageWrapper.module.css';

export function PageWrapper({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>Guitar Dojo</header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
