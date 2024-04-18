import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { useSetAuth } from '@/contexts/auth';
import { useEffect } from 'react';

export function RootLayout() {
  const { signIn } = useSetAuth();

  useEffect(() => {
    signIn?.('yamoo9@naver.com', '12345678!');
  }, [signIn]);

  return (
    <div className="flex flex-col gap-5">
      <Header />
      <main className="flex-1 w-4/5 mx-auto bg-white/90 p-5 min-h-full">
        <Outlet />
      </main>
    </div>
  );
}
