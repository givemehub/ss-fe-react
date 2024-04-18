import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import './styles/globals.css';
import { AuthProvider } from './contexts/auth';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AuthProvider>
        <RouterProvider
          router={router}
          fallbackElement={<div>페이지 로딩 중...</div>}
        />
      </AuthProvider>
    </StrictMode>
  );
} else {
  alert('id 속성 이름이 "root"인 요소가 문서에 존재하지 않습니다.');
}
