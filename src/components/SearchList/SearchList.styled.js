import styled from '@emotion/styled';

export const Title = styled.p`
  padding: 8px;
  font-weight: 600;
  margin-bottom: 0px;
`;

export const MoviesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 80px) / 5);
  background-color: #ffffff;
  box-shadow: 5px 3px 18px 0px rgba(64, 61, 61, 0.75);
`;

export const MovieImg = styled.img`
  width: 260px;
  height: 390px;
`;
