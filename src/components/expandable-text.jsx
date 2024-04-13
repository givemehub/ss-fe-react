import { useState } from 'react';

export function ExpandableText({ text, limit = 50 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= limit) {
    return <p>{text}</p>;
  }

  return (
    <>
      {isExpanded ? <p>{text}</p> : <p>{text.slice(0, limit)}...</p>}
      <button type="button" onClick={() => setIsExpanded((e) => !e)}>
        {isExpanded ? '축소' : '확장'}
      </button>
    </>
  );
}
