import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${({ count }) =>
      count <= 10 ? "crimson" : "black"}; /* 카운트 다운에 따른 색상 설정 */
  }
`;

export const GameBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const Con = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
`;
export const Rule = styled.button`
  width: 100px;
  height: 30px;
  border-top: none;
  border-left: none;
  background-color: none;
  border-radius: 10px;
  cursor: pointer;
`;
export const Regame = styled.button`
  width: 100px;
  height: 30px;
  border-top: none;
  border-left: none;
  background-color: none;
  border-radius: 10px;
  cursor: pointer;
`;
export const Back = styled.button`
  width: 100px;
  height: 30px;
  border-top: none;
  border-left: none;
  background-color: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  transition: 3s;
  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }
`;
