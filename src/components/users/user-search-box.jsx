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
  ref // searchBoxHandleRef
) {
  const searchInputRef = useRef(null);

  // 명령형 핸들 객체 생성
  useImperativeHandle(ref, () => {
    // 명령형 핸들러 포함한 객체 반환
    return {
      highlight() {
        const searchBoxInput = searchInputRef.current;
        searchBoxInput.style.borderColor = '#1ed799';
        setTimeout(() => {
          searchBoxInput.style.removeProperty('border-color');
        }, 900);
      },
      focus() {
        searchInputRef.current.focus();
      },
      blur() {
        searchInputRef.current.blur();
      },
      select() {
        searchInputRef.current.select();
      },
    };
  });

  const id = useId();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value.trim());
    if (value.trim().length === 0) {
      onChange?.('reset');
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
        ref={searchInputRef}
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
