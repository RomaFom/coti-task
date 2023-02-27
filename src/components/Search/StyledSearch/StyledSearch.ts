import styled from "styled-components";

export const StyledInput = styled.input`
  height: 30px;
  width: 400px;
  border: aqua solid 1px;
  border-radius: 9px;
  background: transparent;
  padding: 6px 16px;
  font-size: 18px;
  color: white;
  &:focus {
    outline: none;
  }
  @media (max-width: 580px) {
    width: 80%;
  }
`;
