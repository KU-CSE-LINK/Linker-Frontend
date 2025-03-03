import styled from 'styled-components';

const StyledBtn = styled.button`
  color: ${(props) => (!props.disabled ? '#9D9D9D' : '#fff')};
  background-color: ${(props) => (!props.disabled ? '#F1F1F1' : '#3773F5')};
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  cursor: ${(props) => (!props.disabled ? 'not-allowed' : 'pointer')};
`;

const ActionBtn = ({ onClick, type = 'button', disabled }) => {
  return (
    <StyledBtn type={type} disabled={disabled} onClick={disabled ? undefined : onClick}>
      {!disabled ? '대여 불가' : '대여 신청'}
    </StyledBtn>
  );
};

export default ActionBtn;
