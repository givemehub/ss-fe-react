import React from 'react';

export function Description(props) {
  return <p>{props.message || props.children}</p>;
}
