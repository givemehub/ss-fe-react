export function Link(props) {
  return (
    <a
      href={props.href}
      className={props.className}
      rel={props.rel}
      target={props.target}
    >
      {props.children}
    </a>
  );
}
