import { ReactNode } from 'react';
import Link from 'next/link';

import TextField from '@/components/atom/TextField';
import SearchIcon from '@/assets/SearchIcon';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 헤더 */}
      <header className="flex w-full flex-col items-center gap-2 border-b p-4 shadow-md">
        {/* 정보창 */}
        <div className="flex w-full max-w-[1050px] items-center justify-end">
          <Link href="/sign-up">회원가입</Link>
          <Link href="/sign-in">로그인</Link>
          <Link href="/customer">고객센터</Link>
        </div>

        {/* 검색창 */}
        <div className="flex w-full max-w-[1050px] items-center justify-between">
          <div>LOGO</div>
          <TextField
            type="text"
            placeholder="검색어를 입력해주세요"
            className="w-[400px] rounded border px-4 py-2 focus:outline-none"
            suffix={<SearchIcon width={25} height={25} />}
          />
          <div>장바구니</div>
        </div>

        {/* 메뉴 */}
        <div className={'mt-4 flex w-full max-w-[1050px] justify-between '}>
          <div>category</div>
          <nav className="space-x-20">
            <Link href="/main" className="hover:opacity-80">
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

      {/* 메인 컨텐츠 */}
      <main className="mx-auto w-full max-w-[1050px] flex-1 p-4">
        {children}
      </main>
    </div>
  );
}

export default Layout;
