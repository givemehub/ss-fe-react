export function Link({ href, target, rel, className, children, ...restProps }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      {...restProps}
    >
      {children}
    </a>
  );
}
