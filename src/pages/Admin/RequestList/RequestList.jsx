import { Container, TitleText, EmptyCard, EmptyTitle, EmptyContent, SubContainer } from './RequestList.styles';
import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import RequestCard from './RequestCard/RequestCard';

const RequestList = () => {
  const rentals = [
    {
      date: '2025-01-24',
      name: '장유정',
      items: ['노트북 C타입 충전기', '노트북 거치대', '블루투스 키보드&마우스'],
      studentId: '202311362',
      phone: '010-7371-2855',
    },
  ];
  return (
    <Container>
      <Header />
      <TitleText>신청 목록 조회</TitleText>
      <SubContainer>
        {!rentals.length ? (
          <EmptyCard>
            <EmptyTitle>새로운 대여 요청이 없습니다.</EmptyTitle>
            <EmptyContent>（*＾-＾*）</EmptyContent>
          </EmptyCard>
        ) : (
          rentals.map((rental) => <RequestCard key={rental.studentId} rental={rental} />)
        )}
      </SubContainer>
      <Footer />
    </Container>
  );
};
export default RequestList;
