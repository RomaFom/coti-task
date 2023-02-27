import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  max-width: 290px;
  width: 100%;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  padding: 0 2px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 10px;
  height: 100px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const StyledCardContainer = styled.div`
  padding: 2px 16px;
`;
