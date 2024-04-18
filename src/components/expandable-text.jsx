import { useState } from 'react';

export const LIMIT = 60;

export function ExpandableText({ limit = LIMIT, children }) {
  const [isExpand, setIsExpand] = useState(false);
  const handleExpand = () => setIsExpand(!isExpand);

  if (children.length <= limit) return <p>{children}</p>;

  return (
    <>
      {isExpand ? <p>{children}</p> : <p>{children.slice(0, limit)}...</p>}
      <button type="button" onClick={handleExpand}>
        {isExpand ? '축소' : '확장'}
      </button>
    </>
  );
}
