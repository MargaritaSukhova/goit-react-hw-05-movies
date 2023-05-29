import styled from '@emotion/styled';

export const CastWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 140px) / 8);
  background-color: #ffffff;
  box-shadow: 5px 3px 18px 0px rgba(64, 61, 61, 0.75);
`;

export const CastImg = styled.img`
  width: 155px;
  max-height: 232.5px;
`;

export const TextWrapper = styled.div`
  padding: 8px;
`;

export const CastName = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const CastTitle = styled.p`
  font-size: 12px;
  margin: 0px;
  max-width: 139px;
  overflow: hidden;
  max-height: 14px;
`;
