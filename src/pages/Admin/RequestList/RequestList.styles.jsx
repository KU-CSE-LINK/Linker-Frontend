import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 0 50px;
  gap: 65px;
  box-sizing: border-box;
`;

export const TitleText = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

export const EmptyCard = styled.div`
  padding: 200px 0;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyTitle = styled.div`
  color: #9d9d9d;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const EmptyContent = styled.div`
  color: #9d9d9d;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
