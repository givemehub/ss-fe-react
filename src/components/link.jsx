export function Link({ className, href, rel, target, children }) {
  return (
    <a
      // 속성 바인딩
      className={className}
      href={href}
      target={target}
      rel={rel}
    >
      {/* 데이터 바인딩(연결) */}
      {/* 기본 슬롯 (default slot) */}
      {children}
    </a>
  );
}
