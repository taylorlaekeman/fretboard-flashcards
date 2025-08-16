import styled, { css } from 'styled-components';
import styles from './Text.module.css';

const sharedCss = css`
  color: #2a3439;
  font-family: 'Helvetica', 'Arial', 'sans-serif';
`;

export const H1 = styled.h1`
  ${sharedCss}
`;

export const H2 = styled.h2`
  ${sharedCss}
  font-size: 1.4rem;
  font-weight: 400;
`;

export const P = styled.p`
  ${sharedCss}
  font-size: 1rem;
`;

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
