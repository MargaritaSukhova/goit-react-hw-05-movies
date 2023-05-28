import styled from '@emotion/styled';

export const CastWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 140px) / 8);
`;

export const CastImg = styled.img`
  width: 150px;
  max-height: 225px;
  margin-bottom: 10px;
`;
