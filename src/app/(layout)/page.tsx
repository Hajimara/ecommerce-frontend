'use client';

import { useState } from 'react';

import Banner from '@/components/molecules/Banner';

function MainPage() {
  const [urlList] = useState<string[]>([
    '/assets/imgs/banner1.jpg',
    '/assets/imgs/banner2.jpg',
    '/assets/imgs/banner3.jpg',
    '/assets/imgs/banner4.jpg',
  ]);

  return (
    <main className={'min-w-[1050px]'}>
      <Banner urlList={urlList} />
      <div className="relative mx-auto w-[1050px] flex-1 p-m">{'hi'}</div>
    </main>
  );
}

export default MainPage;
