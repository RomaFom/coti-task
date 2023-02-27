import styled from "styled-components";

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 20;
  flex-direction: column;
  align-items: flex-start;
  width: 72px;
  height: 100%;
  padding: 5px 10px 30px 10px;
  border-right: 1px solid black;
`;

export const Nav = styled.nav`
  height: 90%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

export const NavButton = styled.button`
  height: 34px;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: white;
  cursor: pointer;
  font-size: 20px;
  width: 100%;
  text-align: center;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
