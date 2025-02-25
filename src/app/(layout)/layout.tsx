import { ReactNode } from 'react';

import Layout from '@/app/(_layout)/Layout';

async function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>
) {
  return <Layout>{props.children}</Layout>;
}

export default RootLayout;
