import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 15px 5px rgba(44, 44, 44, 0.15) inset;
  padding-bottom: 13px;
  gap: 20px;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 11px 0;
`;

export const Date = styled.div`
  color: #9d9d9d;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 16px 0;
`;

export const UserIcon = styled.img`
  width: 97px;
  height: 113px;
  flex-shrink: 0;
`;

export const UserName = styled.div`
  color: #000;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 11px 0;
`;

export const Divider = styled.div`
  width: 268px;
  height: 2px;
  background-color: #f1f1f1;
`;

export const RequestInfo = styled.div`
  padding: 0 25px 23px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 39px;
`;

export const InfoLabel = styled.div`
  color: #9d9d9d;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 91px;
`;

export const InfoValue = styled.div`
  color: #000;
  text-align: right;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 172px;
  white-space: pre-line;
`;
