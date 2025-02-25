import { ReactNode } from 'react';

async function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>
) {
  return <>{props.children}</>;
}

export default RootLayout;
