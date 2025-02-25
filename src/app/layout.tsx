import './globals.css';

import { Noto_Sans_KR } from 'next/font/google';
import { ReactNode } from 'react';

import type { Metadata } from 'next';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'], // 기본 설정
  weight: ['300', '400', '500', '700', '900'], // 사용할 폰트 두께
  variable: '--font-noto-sans-kr', // CSS 변수 적용
});

export const metadata: Metadata = {
  title: 'ECommerce',
  description: 'ECommerce toy project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} antialiased`}>{children}</body>
    </html>
  );
}
