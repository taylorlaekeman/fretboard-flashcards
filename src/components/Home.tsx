import React, { FC } from 'react';

import Link from 'next/link';

const Home: FC = () => (
  <>
    <h1>Guitar Dojo</h1>
    <Link href="/fretboard-flashcards.html">Fretboard Flashcards</Link>
    <Link href="/randomnote.html">Random Note</Link>
  </>
);

export default Home;
