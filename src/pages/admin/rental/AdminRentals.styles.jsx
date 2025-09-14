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
  gap: 100px;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

export const StatusButton = styled.button`
  min-width: 160px;
  height: 48px;
  border-radius: 24px;
  border: 2px solid #d3d3d3;
  background: #fff;
  color: #b0b0b0;
  font-size: 18px;
  font-weight: 500;
  margin-right: 24px;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;
  outline: none;
  &:last-child {
    margin-right: 0;
  }
  &.selected {
    border: 2px solid #3773f5;
    background: #eaf1ff;
    color: #3773f5;
  }
`;
