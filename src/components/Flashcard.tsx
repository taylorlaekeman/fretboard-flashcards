import React from 'react';

import { Button } from './Button';
import styles from './NameTheNoteFlashcard.module.css';
import { Text } from './Text';
import { ResultStatus } from '../types/resultStatus';

export function Flashcard({
  cardNumber,
  children,
  isNextEnabled = true,
  nextText = 'Next',
  onNext = () => {},
  status,
  totalCards,
}: {
  cardNumber?: number;
  children?: React.ReactNode;
  isNextEnabled?: boolean;
  nextText?: string;
  onNext?: () => void;
  status?: ResultStatus;
  totalCards?: number;
}): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      {cardNumber && totalCards && (
        <Text>{`${cardNumber} / ${totalCards}`}</Text>
      )}
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <FlashcardResultSection status={status} />
        <Button isDisabled={!isNextEnabled} onClick={onNext}>
          {nextText}
        </Button>
      </div>
    </div>
  );
}

function FlashcardResultSection({
  status,
}: {
  status?: ResultStatus;
}): React.ReactElement {
  return (
    <div>
      {status === ResultStatus.Correct && (
        <p className={styles.resultBadge}>&#x1f389;</p>
      )}
      {status === ResultStatus.Incorrect && (
        <p className={styles.resultBadge}>&#x1f62d;</p>
      )}
    </div>
  );
}
