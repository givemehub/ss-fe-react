export function TermsAndConditions() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const input = document.getElementById('terms');

    const requestData = {
      terms: input.checked,
    };

    console.log(requestData);
  };

  const handleChange = (e) => {
    const confirmButton = document.querySelector('button');
    if (e.target.checked) {
      confirmButton.removeAttribute('disabled');
    } else {
      confirmButton.setAttribute('disabled', true);
    }
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
        <input type="checkbox" id="terms" onChange={handleChange} />
        <label htmlFor="terms">이용 약관에 동의합니다.</label>
      </div>
      <button
        disabled
        className="button"
        style={{ marginBlockStart: 20 }}
        type="submit"
      >
        확인
      </button>
    </form>
  );
}
