import React from 'react';

export function Link(props) {
  // return createElement('a', props);
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
