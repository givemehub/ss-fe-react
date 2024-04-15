// --------------------------------------------------------------------------
// template literal (ECMAScript 2015)
// - 데이터 + 템플릿 = 마크업 스트링
// - 템플릿 리터럴 구문을 사용해 마크업 스트링 생성
// --------------------------------------------------------------------------

const koreanFoods = {
  caption: '한식 메뉴',
  rows: [
    { headline: '뚝배기 불고기', content: 8000 },
    { headline: '스팸치즈볶음밥', content: 7500 },
    { headline: '불고기낙지덮밥', content: 9000 },
  ],
};

function renderTable(data) {
  return [
    '<table class="table">',
    '<caption class="sr-only">' + data.caption + '</caption>',
    data.rows.reduce(function (htmlString, rowData) {
      const rowString = [
        '<tr>',
        '<th>' + rowData.headline + '</th>',
        '<td>' + numberWithComma(rowData.content) + '원' + '</td>',
        '</tr>',
      ].join('');
      return htmlString + rowString;
    }, ''),
    '</table>',
  ].join('');
}

// 🔶 renderTableString 함수를 작성하세요.
function renderTableString(data) {
  // 데이터 + 템플릿 스트링 = 마크업 스트링
  // 보간(interpolation)
  // `string ${data}`
  // `string ${expression}`
  // array => string
  // array method (reduce)
  return /* html */ `
    <table class="table">
      <caption class="sr-only">${data.caption}</caption>
      ${data.rows.reduce(function (htmlString, row) {
        return (
          htmlString +
          `
            <tr>
              <th>${row.headline}</th>
              <td>${numberWithComma(row.content)}원</td>
            </tr>
          `
        );
      }, '')}
    </table>
  `;
}

function run() {
  const renderedResult = renderTableString(koreanFoods);
  return removeSpaceHTMLString(renderedResult);
}

console.log(run());

console.log(Object.is(renderTable(koreanFoods), run()));

// --------------------------------------------------------------------------
// utils

function numberWithComma(numberValue) {
  return numberValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function removeSpaceHTMLString(htmlString) {
  return htmlString.replace(/\s+<|\n|>\s+/g, function ($1) {
    return $1.indexOf('<') > -1 ? '<' : $1.indexOf('>') > -1 ? '>' : '';
  });
}
