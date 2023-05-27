import styled from '@emotion/styled';

export const Title = styled.p`
  transition: transform 250ms cubic-bezier(0, 0.11, 0.35, 2);
  transform-origin: center left;
  &:hover {
    color: #1cd8d2;
    transform: scale(1.15);
  }
`;
