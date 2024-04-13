export function TermsAndConditions() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('폼 제출');

    const formData = new FormData(e.currentTarget);
    const terms = formData.get('terms');
    console.log({ terms });
  };

  const handleChange = (e) => {
    console.log('입력이 변경됨');
    console.log(e.target.checked);
  };

  const handleClick = (e) => {
    console.log('버튼이 클릭됨');
    console.log(e.target.textContent);
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
          name="terms"
          onChange={handleChange}
        />
        <label htmlFor="terms">이용 약관에 동의합니다.</label>
      </div>
      <button type="submit" onClick={handleClick}>
        확인
      </button>
    </form>
  );
}
