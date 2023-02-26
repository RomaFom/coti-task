import styled from "styled-components";

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 20;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
  height: 100%;
  padding: 40px 10px 30px 10px;
  border-right: 1px solid black;
  @media (width < 580px) {
    width: 72px;
  }
`;

export const Nav = styled.nav`
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;
`;

export const NavButton = styled.button`
  height: 60px;
  width: 50%;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: white;
  cursor: pointer;
  text-align: left;
  font-size: 20px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
