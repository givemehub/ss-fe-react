import classes from './user-search-box.module.css';
import {
  forwardRef,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export const UserSearchBox = forwardRef(function UserSearchBox(
  { onChange },
  ref
) {
  const id = useId();
  const inputRef = useRef(null);
  const [search, setSearch] = useState('');

  useImperativeHandle(ref, () => {
    const input = inputRef.current;
    return {
      highlight({ color = '#1ed799', timeout = 900 } = {}) {
        input.style.borderColor = color;
        setTimeout(() => {
          input.style.removeProperty('border-color');
        }, timeout);
      },
    };
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value.trim());
    if (value.trim().length === 0) {
      onChange?.('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && search.trim().length > 0) {
      onChange?.(search);
    }
  };

  return (
    <div className={classes.component}>
      <label htmlFor={id} className="sr-only">
        사용자 검색
      </label>
      <input
        ref={inputRef}
        type="search"
        placeholder="사용자 이름 입력"
        id={id}
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
});
