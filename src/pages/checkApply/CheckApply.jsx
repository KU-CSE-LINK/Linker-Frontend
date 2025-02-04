import { Container, Logo, ProfileImg, TitleText, BoldText, NameInput, PhoneInput, StdIdInput, ApplyButton, Host } from './CheckApply.styles';
import Profile from '../../assets/profileIcon.svg';

const CheckApply = () => {
  return (
    <Container>
      <Logo>
        LINKER
        <ProfileImg src={Profile} alt="프로필아이콘" />
      </Logo>
      <TitleText>신청 내역 조회</TitleText>

      <BoldText style={{ position: 'absolute', top: '237px', left: '150px' }}>이름</BoldText>
      <NameInput type="text" />

      <BoldText style={{ position: 'absolute', top: '362px', left: '150px' }}>전화번호</BoldText>
      <PhoneInput type="text" />

      <BoldText style={{ position: 'absolute', top: '362px', left: '405px' }}>학번</BoldText>
      <StdIdInput type="text" />
      <ApplyButton>비회원 인증하기</ApplyButton>
      <Host>제6대 컴퓨터공학부 학생회 LINK</Host>
    </Container>
  );
};

export default CheckApply;
