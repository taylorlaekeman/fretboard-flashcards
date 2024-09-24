import styles from './Text.module.css';

export function Text({
  children = '',
  variant = Variant.Body,
}: {
  children?: string;
  variant?: Variant;
}): React.ReactElement {
  switch (variant) {
    case Variant.MainTitle: {
      return <MainTitle>{children}</MainTitle>;
    }
    case Variant.Body:
    default:
      return <Body>{children}</Body>;
  }
}

export enum Variant {
  Body = 'body',
  MainTitle = 'main-title',
}

function MainTitle({
  children = '',
}: {
  children?: string;
}): React.ReactElement {
  return <h1 className={styles.mainTitle}>{children}</h1>;
}

function Body({ children = '' }: { children?: string }): React.ReactElement {
  return <p className={styles.body}>{children}</p>;
}
