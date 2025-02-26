'use client';

import { ReactNode } from 'react';

import TextField from '@/components/atom/TextField';
import SearchIcon from '@/assets/SearchIcon';
import Divider from '@/components/atom/Divider';
import Link from '@/components/atom/Link';
import cn from '@/utils/cn';
import useHeaderScroll from '@/hooks/useHeaderScroll';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { isHeaderHidden } = useHeaderScroll();

  return (
    <div className="flex min-h-screen flex-col">
      {/* 헤더 */}
      <header
        className={
          'sticky top-0 z-50 flex w-full min-w-[1050px] flex-col items-center gap-xs border-b bg-white shadow-md transition-all'
        }
      >
        <div
          className={cn(
            {
              'px-m py-s': isHeaderHidden,
              'p-m': !isHeaderHidden,
            },
            'mx-auto w-[1050px] p-m'
          )}
        >
          {/* 정보창 */}
          <div
            className={cn(
              {
                hidden: isHeaderHidden,
                flex: !isHeaderHidden,
              },
              'transition-transform duration-300 w-full items-center justify-end space-x-m [&_*]:text-xs'
            )}
          >
            <Link href="/sign-up">회원가입</Link>
            <Divider direction="vertical" className="h-s" />
            <Link href="/sign-in">로그인</Link>
            <Divider direction="vertical" className="h-s" />
            <Link href="/customer">고객센터</Link>
          </div>

          {/* 검색창 */}
          <div
            className={cn(
              {
                hidden: isHeaderHidden,
                flex: !isHeaderHidden,
              },
              'w-full items-center justify-between'
            )}
          >
            <div>LOGO</div>
            <TextField
              type="text"
              placeholder="검색어를 입력해주세요"
              className="w-[450px] rounded border px-4 py-2 focus:outline-none"
              suffix={<SearchIcon width={25} height={25} />}
            />
            <div>장바구니</div>
          </div>

          {/* 메뉴 */}
          <div
            className={cn(
              { 'mt-4': !isHeaderHidden },
              'flex w-full justify-between'
            )}
          >
            <div>category</div>
            <nav className="space-x-20">
              <Link href="/" className="hover:opacity-80">
                홈
              </Link>
              <Link href="/categories" className="hover:opacity-80">
                상품
              </Link>
              <Link href="/event" className="hover:opacity-80">
                이벤트
              </Link>
              <Link href="/customer" className="hover:opacity-80">
                고객센터
              </Link>
            </nav>
            <div>배송 가이드</div>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="mx-auto w-[1050px] flex-1 p-m">{children}</main>
    </div>
  );
}

export default Layout;
