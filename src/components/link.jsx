export function Link({ icon, className, href, rel, target, children }) {
  return (
    <a
      // 속성 바인딩
      className={className}
      href={href}
      target={target}
      rel={rel}
    >
      {icon}
      {children}
      {/* {icon} */}
    </a>
  );
}
