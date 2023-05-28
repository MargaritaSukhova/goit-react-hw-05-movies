import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  height: 3em;
  min-width: 100px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #eeeeee4b;
  border-radius: 3px;
  letter-spacing: 1px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
  background: #fff;
  &: hover {
    box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
    transform: translateY(-2px);
    svg {
      font-size: 1.2em;
      transform: translateX(-5px);
    }
  }

  svg {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 20px;
    transition: all 0.4s ease-in;
  }
`;

export const BtnTitle = styled.span`
  font-family: 'Oxygen', sans-serif;
  font-size: 16px;
`;
