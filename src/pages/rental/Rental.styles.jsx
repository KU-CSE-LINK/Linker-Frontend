import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 800px;
  height: 1067px;

  .logo {
    position: relative;
    padding-top: 31px;
    text-align: center;
    color: #000;
    font-family: Pretendard;
    font-size: 40px;
    font-weight: 900;
  }

  .profile {
    position: absolute;
    top: 30px;
    right: 20px;
    cursor: pointer;
  }

  .title-text {
    position: absolute;
    top: 142px;
    left: 57px;
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-weight: 700;
  }

  .bold-text {
    color: #000;
    font-family: Pretendard;
    font-size: 22px;
    font-weight: 600;
  }

  input[type='text'] {
    position: absolute;
    padding: 0;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    height: 46px;
    outline: none;

    &:focus {
      border: 1px solid rgba(55, 115, 245, 0.5);
    }
  }

  #name-text {
    position: absolute;
    top: 237px;
    left: 150px;
  }

  .name-input {
    width: 500px;
    top: 266px;
    left: 150px;
  }

  #phone-text {
    position: absolute;
    top: 362px;
    left: 150px;
  }

  .phone-input {
    width: 246px;
    top: 390px;
    left: 150px;
  }

  #stdId-text {
    position: absolute;
    top: 362px;
    left: 405px;
  }

  .stdId-input {
    width: 246px;
    top: 390px;
    left: 405px;
  }

  #equiment-text {
    position: absolute;
    top: 487px;
    left: 150px;
  }

  .duplicate-text {
    position: absolute;
    top: 499px;
    left: 316px;
    color: #3773f5;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
  }

  .choice-wrapper {
    position: absolute;
    top: 524px;
    left: 159px;
  }

  .choice-container {
    display: flex;
    gap: 6px;
    height: 24px;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .choice-text {
    color: #d9d9d9;
    margin: 0;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .choice-text.selected {
    color: #000;
  }

  #period-text {
    position: absolute;
    top: 676px;
    left: 150px;
  }

  .gray-btn-container {
    position: absolute;
    top: 707px;
    left: 150px;
    display: flex;
    width: 502px;
    gap: 10px;
  }

  .gray-btn {
    width: 246px;
    height: 46px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #f1f1f1;
    color: #9d9d9d;
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 46px;
    cursor: pointer;
  }

  .gray-btn.selected {
    border: 2px solid #3773f5;
    background-color: rgba(229, 237, 255, 0.8);
    color: #3773f5;
  }

  .apply-btn {
    position: absolute;
    top: 870px;
    left: 210px;
    width: 380px;
    height: 60px;
    padding: 10px;
    text-align: center;
    gap: 10px;
    border-radius: 10px;
    background: #3773f5;
    color: #fff;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    cursor: pointer;
  }

  .host {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 34px;
    color: #dbdbdb;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
  }
`;
