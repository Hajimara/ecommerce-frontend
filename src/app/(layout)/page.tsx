'use client';

import { useState } from 'react';

import Banner from '@/components/molecules/Banner';

function MainPage() {
  const [urlList] = useState<string[]>([
    '/assets/imgs/banner1.png',
    '/assets/imgs/banner2.png',
    '/assets/imgs/banner3.png',
    '/assets/imgs/banner4.png',
    '/assets/imgs/banner5.png',
  ]);

  return (
    <main>
      <Banner urlList={urlList} />
      <div className="mx-auto w-[1050px] flex-1 p-m">{'hi'}</div>
    </main>
  );
}

export default MainPage;
