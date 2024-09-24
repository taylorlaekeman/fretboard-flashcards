import { Text, Variant } from './Text';
import styles from './PageWrapper.module.css';

export function PageWrapper({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Text variant={Variant.MainTitle}>Nitro</Text>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

/*
 * name ideas:
 *  jam gym
 *  guitar gym
 *  nitro
 *  laquer
 *  rudiments
 */
