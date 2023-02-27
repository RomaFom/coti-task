import styled from "styled-components";

export const StyledCardWrapper = styled.section`
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  max-width: 500px;
  height: 100%;
  border: 1px solid #e6ecf0;
  border-radius: 10px;

  img {
    width: auto;
    max-height: 200px;
    object-fit: contain;
    border-radius: 10px 10px 0 0;
    padding: 20px 10px;
  }
`;

export const StyledCardContent = styled.div`
  height: 100%;
  background-color: #4e6e81;
  opacity: 0.9;
  border-radius: 0 0 10px 10px;
  padding: 20px;
  p {
    font: 700 18px "Roboto", sans-serif;
  }
  a {
    text-decoration: none;
    border: 1px solid #e6ecf0;
    border-radius: 5px;
    padding: 5px 15px;
    color: #e6ecf0;
    font: 700 18px "Roboto", sans-serif;
    background-color: #2f58cd;
  }
`;
