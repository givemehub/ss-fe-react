import { useState } from 'react';

export function TermsAndConditions() {
  // 리액트에 의해 제어되는 컴포넌트(controlled component)
  const [terms, setTerms] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('폼 제출');

    const requestData = {
      terms,
    };

    console.log(requestData);

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
      <button type="submit">확인</button>
    </form>
  );
}
