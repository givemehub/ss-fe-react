// --------------------------------------------------------------------------
// Web Component

// 🔶 모든 페이지에서 사용되는 app-footer 커스텀 요소를 생성하는 공용 웹 컴포넌트를 작성합니다.
// 참고: https://mzl.la/3YjFdu9

// ECMAScript Classes
class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // Life cycle callbacks
  connectedCallback() {
    // console.log('커스텀 요소가 실제 DOM에 마운트 된 이후 콜백 함수 실행');
    // DOM에 연결된 이후(mounted)에 마크업 추가

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        footer {
          border-top: 1px solid currentColor;
          background-color: rgba(0, 0, 0, 0.05);
          padding: 20px;

          strong {
            font-weight: 900;
            text-decoration: underline;
          }
        }
      </style>

      <footer>
        <slot>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis maxime fuga, eaque perferendis ipsum optio ex eum itaque dolorem! Asperiores, ut laborum? Facilis, maxime quidem. Ipsum consequatur labore quos modi.</p>
        </slot>
        <small>
          copyright all reserved. 2015-${new Date().getFullYear()} &copy; <strong>EUID</strong>
        </small>
      </footer>
    `;
  }
}

// define custom element
if ('customElements' in globalThis) {
  customElements.define('euid-footer', Footer);
}
