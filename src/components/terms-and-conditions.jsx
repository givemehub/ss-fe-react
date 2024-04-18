import { useState } from 'react';

// 리액트에 의해 제어되는 컴포넌트(controlled component)
export function TermsAndConditions() {
  // 선언형 프로그래밍
  // 상태 선언 (사용자)
  const [terms, setTerms] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  // 선언된 상태 변경 감지 (리액트)
  // 변경이 감지되면 화면 업데이트 (리액트)

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      terms,
    };

    // 전송 중....
    setIsSubmited(true);

    setTimeout(() => {
      console.log(requestData);
      setIsSubmited(false);
    }, 1000);

    // const formData = new FormData(e.currentTarget);
    // const terms = formData.get('terms');
    // console.log({ terms });
  };

  const handleChange = (e) => {
    // console.log('입력이 변경됨');
    setTerms(e.target.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>이용 약관</h2>
      <p>
        OOO 서비스를 이용함으로써 귀하는 본 약관에 동의하게 되므로 본 약관을
        숙지하는 것이 중요합니다. 본 약관 외에도 OOO은 개인정보처리방침을
        게시합니다.
      </p>
      <div>
        <input
          type="checkbox"
          id="terms"
          // name="terms"
          checked={terms}
          // readOnly
          onChange={handleChange}
        />
        <label htmlFor="terms">이용 약관에 동의합니다.</label>
      </div>
      <button
        disabled={isSubmited || !terms}
        className="button"
        style={{ marginBlockStart: 20 }}
        type="submit"
      >
        {isSubmited ? '전송 중...' : '확인'}
      </button>
    </form>
  );
}
