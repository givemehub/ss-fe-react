export function Link(props) {
  return (
    <a href={props.href} target={props.target} rel={props.rel}>
      {props.children}
    </a>
  );
}
