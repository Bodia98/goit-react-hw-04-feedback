import styled from 'styled-components';
export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Button = styled.button`
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: blue;
  color: yellow;
  height: 25px;
  width: 100px;
  &:hover {
    background-color: yellow;
    color: blue;
  }
`;
