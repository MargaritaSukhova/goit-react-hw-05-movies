import styled from '@emotion/styled';

export const BtnWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

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
  }
`;
