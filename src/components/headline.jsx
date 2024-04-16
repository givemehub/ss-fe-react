import * as React from 'react';

export function Headline(props /* { children } */) {
  // JSX
  return <h1>{props.children}</h1>;

  // Browser
  // return React.createElement('h1', props);
}
