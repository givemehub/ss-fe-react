import { useEffect } from 'react';

// 커스텀 훅 (함수)
// 함수 이름이 use로 시작
// 내부에 빌트인 훅 함수 사용 가능
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `${title} : 리액트 펀더멘탈`;
  }, []);
}
