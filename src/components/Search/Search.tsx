import React, { memo, useCallback, useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { StyledInput } from "./StyledSearch";
const DEFAULT_DELAY = 300;

type Props = {
  delay?: number;
  onDebounceDone: (value: string) => void;
  placeholder?: string;
};
const Search: React.FC<Props> = ({
  delay = DEFAULT_DELAY,
  onDebounceDone,
  placeholder,
}) => {
  //   Direct State for input value
  const [inputValue, setInputValue] = useState("");
  //  Debounced value
  const debouncedValue = useDebounce<string>(inputValue, delay);

  // Input change handler
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  //  Side effect for debounced value
  useEffect(() => {
    onDebounceDone(debouncedValue);
  }, [debouncedValue, onDebounceDone]);

  return (
    <>
      <StyledInput
        type={"text"}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  );
};
export default memo(Search);
