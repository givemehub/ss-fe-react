export function TermsAndConditions() {
  const handleConfirm = (e) => {
    // 브라우저 기본 동작 실행 방지
    e.preventDefault();
    console.log('submit form');

    const formData = new FormData(e.currentTarget);
    const terms = formData.get('terms');
    console.log({ terms });
  };

  const handleCheckbox = () => {
    console.log('checkbox: change checked');
  };

  const handleButton = () => {
    console.log('button: clicked button');
  };

  return (
    <form onSubmit={handleConfirm}>
      <h2>이용 약관</h2>
      <p>OOO 서비스를 이용함으로써 귀하는 본 약관에 동의하게 되므로...</p>
      <div className="FormControl">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          onChange={handleCheckbox}
        />
        <label htmlFor="terms">이용 약관에 동의합니다.</label>
      </div>
      <button type="submit" onClick={handleButton}>
        확인
      </button>
    </form>
  );
}
