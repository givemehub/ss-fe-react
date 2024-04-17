export function Link({ href, target, rel, className, children, ...restProps }) {
  return (
    <a
      data-testid="link"
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
