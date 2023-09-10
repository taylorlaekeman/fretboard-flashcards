import React, { FC } from 'react';
import Head from 'next/head';

import RandomNote from '@/components/RandomNote';

const Page: FC = () => (
	<>
		<Head>
			<title>GuitarDojo | Random Note</title>
		</Head>
		<RandomNote />
	</>
);

export default Page;
