import { useState } from 'react';
import { Container } from './Rental.styles';
import Profile from '../../assets/profileIcon.svg';
import Checked from './checked.svg';
import UnChecked from './unchecked.svg';
const Rental = () => {
  const [selectedChoices, setSelectedChoices] = useState({
    keyboardMouse: false,
    stand: false,
    charger: false,
  });

  const [selectedBtn, setSelectedBtn] = useState(null);

  const handleChoiceClick = (choice) => {
    setSelectedChoices((prevState) => ({
      ...prevState,
      [choice]: !prevState[choice],
    }));
  };

  const handleBtnClick = (btn) => {
    setSelectedBtn(selectedBtn === btn ? null : btn);
  };

  return (
    <Container>
      <div className="logo">
        LINKER
        <img className="profile" src={Profile} alt="프로필아이콘" />
      </div>
      <span className="title-text">대여 신청</span>
      <span id="name-text" className="bold-text">
        이름
      </span>
      <input type="text" className="name-input" />
      <span id="phone-text" className="bold-text">
        전화번호
      </span>
      <input type="text" className="phone-input" />
      <span id="stdId-text" className="bold-text">
        학번
      </span>
      <input type="text" className="stdId-input" />
      <span id="equiment-text" className="bold-text">
        대여할 기자재 선택
      </span>
      <span className="duplicate-text">중복 선택 가능</span>
      <div className="choice-wrapper">
        <div className="choice-container" onClick={() => handleChoiceClick('keyboardMouse')}>
          <img src={selectedChoices.keyboardMouse ? Checked : UnChecked} alt="체크안됨" />
          <p className={`choice-text ${selectedChoices.keyboardMouse ? 'selected' : ''}`}>블루투스 키보드 & 마우스 세트</p>
        </div>
        <div className="choice-container" onClick={() => handleChoiceClick('stand')}>
          <img className="check-img" src={selectedChoices.stand ? Checked : UnChecked} alt="체크안됨" />
          <p className={`choice-text ${selectedChoices.stand ? 'selected' : ''}`}>노트북 거치대</p>
        </div>
        <div className="choice-container" onClick={() => handleChoiceClick('charger')}>
          <img className="check-img" src={selectedChoices.charger ? Checked : UnChecked} alt="체크안됨" />
          <p className={`choice-text ${selectedChoices.charger ? 'selected' : ''}`}>노트북 C타입 충전기</p>
        </div>
      </div>
      <span id="period-text" className="bold-text">
        대여기간
      </span>
      <div className="gray-btn-container">
        <div className={`gray-btn ${selectedBtn === 'short' ? 'selected' : ''}`} onClick={() => handleBtnClick('short')}>
          단기
        </div>
        <div className={`gray-btn ${selectedBtn === 'long' ? 'selected' : ''}`} onClick={() => handleBtnClick('long')}>
          장기
        </div>
      </div>
      <div className="apply-btn">대여 신청하기</div>
      <div className="host">제6대 컴퓨터공학부 학생회 LINK</div>
    </Container>
  );
};

export default Rental;
