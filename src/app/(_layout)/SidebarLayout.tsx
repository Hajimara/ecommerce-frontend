import { ReactNode } from 'react';
import Link from 'next/link';

import TextField from '@/components/atom/TextField';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 헤더 */}
      <header className="flex w-full flex-col items-center gap-2 border-b p-4 shadow-md">
        {/* 검색창 */}
        <div className="flex w-full max-w-[1050px] items-center justify-between">
          <div>LOGO</div>
          <TextField
            type="text"
            placeholder="검색어를 입력해주세요"
            className="w-[400px] rounded border px-4 py-2 focus:outline-none"
            prefix={<div>hi</div>}
          />
          <div>장바구니</div>
        </div>

        {/* 메뉴 */}
        <div className={'mt-4 flex w-full max-w-[1050px] justify-between '}>
          <div>category</div>
          <nav className="space-x-20">
            <Link
              href="/src/app/(filter_layout)/main"
              className="hover:opacity-80"
            >
              홈
            </Link>
            <Link href="#" className="hover:opacity-80">
              상품
            </Link>
            <Link href="#" className="hover:opacity-80">
              이벤트
            </Link>
            <Link href="#" className="hover:opacity-80">
              고객센터
            </Link>
          </nav>
          <div></div>
        </div>
      </header>

      {/* 메인 컨텐츠 + 사이드바 */}
      <div className="mx-auto flex w-full max-w-[1050px] p-4">
        {/* 사이드바 */}
        <aside className="w-[220px]">사이드바</aside>
        {/* 메인 컨텐츠 */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
