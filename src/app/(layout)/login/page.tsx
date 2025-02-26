import TextField from '@/components/atom/TextField';
import Button from '@/components/atom/Button';

function MainPage() {
  return (
    <main className={'h-full flex items-center w-[1050px] m-[0 auto]'}>
      <div
        className={'flex flex-col items-center justify-center gap-1 w-[200px]'}
      >
        <TextField placeholder={'email'} className={'w-[200px]'} />
        <TextField
          placeholder={'password'}
          type={'password'}
          className={'w-[200px]'}
        />
        <div className={'flex w-full justify-end'}>
          <Button>로그인</Button>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
